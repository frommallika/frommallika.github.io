import { motion } from 'framer-motion';
import { ExternalLink, MapPin, Utensils } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import type { Guide, GuidePlace } from '../lib/data';

interface BayAreaEatsGuideProps {
  guide: Guide;
}

declare global {
  interface Window {
    google?: {
      maps?: any;
    };
  }
}

let googleMapsLoadPromise: Promise<void> | null = null;

const tagStyles = {
  Indian: {
    label: 'Indian',
    color: '#C46A3C',
    chip: 'bg-rust text-white',
    outline: 'border-rust/60 shadow-rust/10',
  },
  'Mediterranean & Middle Eastern': {
    label: 'Mediterranean & Middle Eastern',
    color: '#6E7F4D',
    chip: 'bg-olive text-white',
    outline: 'border-olive/60 shadow-olive/10',
  },
  'American/California': {
    label: 'American/California',
    color: '#B45309',
    chip: 'bg-gold text-white',
    outline: 'border-gold/60 shadow-gold/10',
  },
  Asian: {
    label: 'Asian',
    color: '#047857',
    chip: 'bg-emerald text-white',
    outline: 'border-emerald/60 shadow-emerald/10',
  },
  Cafe: {
    label: 'Cafe',
    color: '#BE185D',
    chip: 'bg-magenta text-white',
    outline: 'border-magenta/60 shadow-magenta/10',
  },
  'Bakery & Dessert': {
    label: 'Bakery & Dessert',
    color: '#5A2A5A',
    chip: 'bg-plum text-white',
    outline: 'border-plum/60 shadow-plum/10',
  },
} as const;

type PlaceTag = keyof typeof tagStyles;

const fallbackTagStyle = {
  label: 'Saved Favorite',
  color: '#D97706',
  chip: 'border border-stone-300 bg-white text-gray-600',
  outline: 'border-stone-200',
};

function getTagStyle(tag?: string) {
  if (tag && tag in tagStyles) {
    return tagStyles[tag as PlaceTag];
  }

  return fallbackTagStyle;
}

function getPrimaryTag(place: GuidePlace) {
  return place.tags[0];
}

function getPrimaryTagStyle(place: GuidePlace) {
  return getTagStyle(getPrimaryTag(place));
}

function getTagLabel(tag: string, fallbackLabel: string) {
  if (tag in tagStyles) {
    return tagStyles[tag as PlaceTag].label;
  }

  return fallbackLabel;
}

function loadGoogleMaps(apiKey: string) {
  if (window.google?.maps) {
    return Promise.resolve();
  }

  if (googleMapsLoadPromise) {
    return googleMapsLoadPromise;
  }

  googleMapsLoadPromise = new Promise((resolve, reject) => {
    const existingScript = document.querySelector<HTMLScriptElement>('script[data-bay-area-eats-map]');

    if (existingScript) {
      existingScript.addEventListener('load', () => resolve(), { once: true });
      existingScript.addEventListener('error', () => reject(new Error('Google Maps failed to load.')), {
        once: true,
      });
      return;
    }

    const script = document.createElement('script');
    script.async = true;
    script.defer = true;
    script.dataset.bayAreaEatsMap = 'true';
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}&v=weekly`;
    script.addEventListener('load', () => resolve(), { once: true });
    script.addEventListener('error', () => reject(new Error('Google Maps failed to load.')), {
      once: true,
    });
    document.head.appendChild(script);
  });

  return googleMapsLoadPromise;
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    switch (character) {
      case '&':
        return '&amp;';
      case '<':
        return '&lt;';
      case '>':
        return '&gt;';
      case '"':
        return '&quot;';
      default:
        return '&#39;';
    }
  });
}

function makeInfoWindowContent(place: GuidePlace) {
  const primaryTagStyle = getPrimaryTagStyle(place);
  const tag = getPrimaryTag(place) ?? place.area;

  return `
    <div style="max-width: 260px; font-family: Lato, Arial, sans-serif; color: #1f2937;">
      <div style="margin-bottom: 8px; font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: ${primaryTagStyle.color};">${escapeHtml(tag)}</div>
      <div style="margin-bottom: 8px; font-family: Georgia, serif; font-size: 24px; line-height: 1.05;">${escapeHtml(
        place.title,
      )}</div>
      <p style="margin: 0 0 12px; font-size: 14px; line-height: 1.55; color: #4b5563;">${escapeHtml(
        place.note || 'Saved favorite.',
      )}</p>
      <a href="${escapeHtml(
        place.url,
      )}" target="_blank" rel="noreferrer" style="font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #D97706;">Open in Maps</a>
    </div>
  `;
}

export function BayAreaEatsGuide({ guide }: BayAreaEatsGuideProps) {
  const places = guide.places ?? [];
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const markersRef = useRef<Record<string, any>>({});
  const infoWindowRef = useRef<any>(null);
  const [selectedPlaceId, setSelectedPlaceId] = useState(places[0]?.id);
  const [mapStatus, setMapStatus] = useState<'loading' | 'ready' | 'missing-key' | 'error'>('loading');
  const selectedPlace = places.find((place) => place.id === selectedPlaceId) ?? places[0];
  const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string | undefined;

  const stats = useMemo(
    () => ({
      total: places.length,
      areas: new Set(places.map((place) => place.area)).size,
    }),
    [places],
  );

  const tagCounts = useMemo(
    () =>
      Object.keys(tagStyles)
        .map((tag) => ({
          tag: tag as PlaceTag,
          count: places.filter((place) => place.tags.includes(tag)).length,
          style: getTagStyle(tag),
        }))
        .filter(({ count }) => count > 0),
    [places],
  );

  useEffect(() => {
    if (!googleMapsApiKey) {
      setMapStatus('missing-key');
      return;
    }

    let cancelled = false;

    loadGoogleMaps(googleMapsApiKey)
      .then(() => {
        if (cancelled || !mapRef.current || !window.google?.maps) {
          return;
        }

        const googleMaps = window.google.maps;
        const map = new googleMaps.Map(mapRef.current, {
          center: { lat: 37.69, lng: -122.18 },
          fullscreenControl: true,
          gestureHandling: 'greedy',
          mapTypeControl: false,
          streetViewControl: false,
          zoom: 10,
        });
        const bounds = new googleMaps.LatLngBounds();
        const infoWindow = new googleMaps.InfoWindow();
        const markers: Record<string, any> = {};

        places.forEach((place) => {
          const primaryTagStyle = getPrimaryTagStyle(place);
          const marker = new googleMaps.Marker({
            icon: {
              fillColor: primaryTagStyle.color,
              fillOpacity: 1,
              path: googleMaps.SymbolPath.CIRCLE,
              scale: 9,
              strokeColor: '#ffffff',
              strokeWeight: 2,
            },
            map,
            position: place.coordinates,
            title: place.title,
          });

          marker.addListener('click', () => {
            setSelectedPlaceId(place.id);
            infoWindow.setContent(makeInfoWindowContent(place));
            infoWindow.open({ anchor: marker, map });
          });

          bounds.extend(place.coordinates);
          markers[place.id] = marker;
        });

        map.fitBounds(bounds, 60);
        mapInstanceRef.current = map;
        markersRef.current = markers;
        infoWindowRef.current = infoWindow;

        const initialPlace = places.find((place) => place.id === selectedPlaceId) ?? places[0];
        const initialMarker = initialPlace ? markers[initialPlace.id] : undefined;

        if (initialPlace && initialMarker) {
          infoWindow.setContent(makeInfoWindowContent(initialPlace));
          infoWindow.open({ anchor: initialMarker, map });
        }

        setMapStatus('ready');
      })
      .catch(() => {
        if (!cancelled) {
          setMapStatus('error');
        }
      });

    return () => {
      cancelled = true;
    };
  }, [googleMapsApiKey, places]);

  useEffect(() => {
    if (!selectedPlace || !mapInstanceRef.current || !infoWindowRef.current) {
      return;
    }

    const marker = markersRef.current[selectedPlace.id];

    if (!marker) {
      return;
    }

    mapInstanceRef.current.panTo(selectedPlace.coordinates);
    infoWindowRef.current.setContent(makeInfoWindowContent(selectedPlace));
    infoWindowRef.current.open({ anchor: marker, map: mapInstanceRef.current });
  }, [selectedPlace]);

  return (
    <div className="container mx-auto max-w-7xl px-6 pb-24">
      <motion.section
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
        initial={{ opacity: 0, y: 24 }}
        transition={{ delay: 0.15, duration: 0.7 }}
      >
        <div className="grid overflow-hidden border border-stone-200 bg-white shadow-xl shadow-stone-200/60 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="relative min-h-[560px] overflow-hidden bg-stone-100">
            <div className="absolute inset-0" ref={mapRef} />
            {mapStatus !== 'ready' && (
              <div className="absolute inset-0 flex items-center justify-center bg-cream p-8 text-center">
                <div className="max-w-md">
                  <MapPin className="mx-auto mb-5 h-10 w-10 text-saffron" />
                  <h2 className="mb-3 font-display text-3xl text-gray-900">
                    {mapStatus === 'missing-key' ? 'Google Maps key needed' : 'Loading the map'}
                  </h2>
                  <p className="font-body text-sm font-light leading-relaxed text-gray-600">
                    {mapStatus === 'missing-key'
                      ? 'Add VITE_GOOGLE_MAPS_API_KEY to the site environment to show the interactive Google Map with all saved places.'
                      : mapStatus === 'error'
                        ? 'Google Maps could not load right now. The full place list is still available below.'
                        : 'Pins are being placed across the Bay Area.'}
                  </p>
                </div>
              </div>
            )}
          </div>

          {selectedPlace && (
            <aside className="flex flex-col justify-between border-t border-stone-200 bg-cream p-8 lg:border-l lg:border-t-0">
              <div>
                <div className="mb-5 flex flex-wrap gap-2">
                  {(selectedPlace.tags.length ? selectedPlace.tags : [selectedPlace.area]).map((tag) => {
                    const style = getTagStyle(tag);

                    return (
                      <span
                        className={`inline-flex items-center gap-2 px-3 py-1 text-xs font-bold uppercase tracking-widest ${style.chip}`}
                        key={tag}
                      >
                        <MapPin className="h-3.5 w-3.5" />
                        {getTagLabel(tag, selectedPlace.area)}
                      </span>
                    );
                  })}
                </div>
                <h2 className="mb-5 font-display text-4xl leading-none text-gray-900">
                  {selectedPlace.title}
                </h2>
                <p className="font-body text-lg font-light leading-relaxed text-gray-600">
                  {selectedPlace.note || 'Saved favorite.'}
                </p>
                <dl className="mt-8 grid grid-cols-3 gap-3 border-t border-stone-200 pt-6 text-center">
                  <div>
                    <dt className="text-[0.65rem] font-bold uppercase tracking-widest text-gray-400">Places</dt>
                    <dd className="mt-1 font-display text-3xl text-gray-900">{stats.total}</dd>
                  </div>
                  <div>
                    <dt className="text-[0.65rem] font-bold uppercase tracking-widest text-gray-400">Areas</dt>
                    <dd className="mt-1 font-display text-3xl text-gray-900">{stats.areas}</dd>
                  </div>
                  <div>
                    <dt className="text-[0.65rem] font-bold uppercase tracking-widest text-gray-400">Tags</dt>
                    <dd className="mt-1 font-display text-3xl text-gray-900">{tagCounts.length}</dd>
                  </div>
                </dl>
              </div>
              <a
                className="mt-8 inline-flex items-center gap-2 border-b border-saffron/40 pb-1 text-xs font-bold uppercase tracking-widest text-saffron transition-colors hover:border-saffron"
                href={selectedPlace.url}
                rel="noreferrer"
                target="_blank"
              >
                Open in Maps <ExternalLink className="h-4 w-4" />
              </a>
            </aside>
          )}
        </div>
      </motion.section>

      <section>
        <div className="mb-10 flex flex-col justify-between gap-4 border-b border-stone-200 pb-6 md:flex-row md:items-end">
          <div>
            <span className="mb-3 block text-xs font-bold uppercase tracking-widest text-saffron">
              Saved Places
            </span>
            <h2 className="font-display text-4xl text-gray-900 md:text-5xl">All Favorites</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {tagCounts.map(({ count, style, tag }) => (
              <span
                className={`inline-flex items-center gap-2 px-3 py-1 text-xs font-bold uppercase tracking-widest ${style.chip}`}
                key={tag}
              >
                {style.label} {count}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {places.map((place, index) => {
            const primaryTagStyle = getPrimaryTagStyle(place);

            return (
              <motion.article
                className={`flex min-h-[250px] flex-col border bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl ${
                  primaryTagStyle.outline
                }`}
                id={`place-${place.id}`}
                initial={{ opacity: 0, y: 20 }}
                key={place.id}
                transition={{ delay: Math.min(index * 0.025, 0.35), duration: 0.45 }}
                viewport={{ once: true, margin: '-80px' }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div>
                    <div className="mb-3 flex flex-wrap gap-2">
                      {(place.tags.length ? place.tags : [place.area]).map((tag) => {
                        const style = getTagStyle(tag);

                        return (
                          <span
                            className={`inline-flex items-center gap-2 px-3 py-1 text-xs font-bold uppercase tracking-widest ${style.chip}`}
                            key={tag}
                          >
                            <Utensils className="h-3.5 w-3.5" />
                            {getTagLabel(tag, place.area)}
                          </span>
                        );
                      })}
                    </div>
                    <h3 className="font-display text-3xl leading-tight text-gray-900">{place.title}</h3>
                  </div>
                </div>

                <p className="flex-1 font-body text-base font-light leading-relaxed text-gray-600">
                  {place.note || 'Saved favorite.'}
                </p>

                <div className="mt-8 flex items-center justify-between border-t border-stone-100 pt-5">
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-400">{place.area}</span>
                  <a
                    aria-label={`Open ${place.title} in Maps`}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-saffron transition-colors hover:text-gray-900"
                    href={place.url}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Maps <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
