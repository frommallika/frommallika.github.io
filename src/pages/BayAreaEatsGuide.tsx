import { motion } from 'framer-motion';
import { ExternalLink, MapPin, Utensils } from 'lucide-react';
import { useMemo, useState } from 'react';
import type { Guide, GuidePlace } from '../lib/data';

interface BayAreaEatsGuideProps {
  guide: Guide;
}

const mapBounds = {
  minLat: 37.3,
  maxLat: 37.91,
  minLng: -122.52,
  maxLng: -121.82,
};

function isIndianPlace(place: GuidePlace) {
  return place.tags.includes('Indian');
}

function projectPlace(place: GuidePlace, index: number) {
  const x =
    ((place.coordinates.lng - mapBounds.minLng) / (mapBounds.maxLng - mapBounds.minLng)) * 100;
  const y =
    ((mapBounds.maxLat - place.coordinates.lat) / (mapBounds.maxLat - mapBounds.minLat)) * 100;
  const clusterOffset = ((index % 5) - 2) * 0.95;

  return {
    x: Math.min(Math.max(x + clusterOffset, 3), 97),
    y: Math.min(Math.max(y - clusterOffset, 3), 97),
  };
}

export function BayAreaEatsGuide({ guide }: BayAreaEatsGuideProps) {
  const places = guide.places ?? [];
  const [selectedPlaceId, setSelectedPlaceId] = useState(places[0]?.id);
  const selectedPlace = places.find((place) => place.id === selectedPlaceId) ?? places[0];

  const stats = useMemo(
    () => ({
      total: places.length,
      indian: places.filter(isIndianPlace).length,
      areas: new Set(places.map((place) => place.area)).size,
    }),
    [places],
  );

  return (
    <div className="container mx-auto max-w-7xl px-6 pb-24">
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.7 }}
        className="mb-16"
      >
        <div className="grid overflow-hidden border border-stone-200 bg-white shadow-xl shadow-stone-200/60 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="relative min-h-[520px] overflow-hidden bg-[#e4efe9]">
            <svg
              aria-hidden="true"
              className="absolute inset-0 h-full w-full"
              preserveAspectRatio="none"
              viewBox="0 0 100 100"
            >
              <defs>
                <pattern id="street-grid" width="7" height="7" patternUnits="userSpaceOnUse">
                  <path d="M 7 0 L 0 0 0 7" fill="none" stroke="#cbd8d0" strokeWidth="0.25" />
                </pattern>
              </defs>
              <rect fill="#dbe9e2" height="100" width="100" />
              <rect fill="url(#street-grid)" height="100" opacity="0.55" width="100" />
              <path
                d="M 0 0 H 54 C 45 9 40 17 42 26 C 45 37 36 44 39 54 C 42 65 36 72 39 82 C 42 91 36 96 30 100 H 0 Z"
                fill="#fdfbf7"
              />
              <path
                d="M 54 0 C 48 12 48 22 53 32 C 58 42 49 51 52 63 C 55 73 52 85 48 100"
                fill="none"
                stroke="#9cb6aa"
                strokeDasharray="1.5 2.4"
                strokeWidth="0.8"
              />
              <path
                d="M 52 0 C 43 12 43 26 47 37 C 51 49 42 59 45 74 C 47 85 44 95 39 100"
                fill="none"
                stroke="#89a89a"
                strokeWidth="1.2"
              />
              <path d="M 62 0 H 100 V 100 H 58 C 69 80 66 61 70 47 C 75 29 69 14 62 0 Z" fill="#eef6f0" />
              <text fill="#66756e" fontSize="3.6" x="19" y="20">
                San Francisco
              </text>
              <text fill="#66756e" fontSize="3.6" x="38" y="10">
                Berkeley
              </text>
              <text fill="#66756e" fontSize="3.6" x="51" y="43">
                Hayward
              </text>
              <text fill="#66756e" fontSize="3.6" x="72" y="58">
                Pleasanton
              </text>
              <text fill="#66756e" fontSize="3.6" x="64" y="25">
                San Ramon
              </text>
              <text fill="#66756e" fontSize="3.6" x="56" y="82">
                Peninsula
              </text>
              <text fill="#66756e" fontSize="3.6" x="77" y="89">
                South Bay
              </text>
            </svg>

            {places.map((place, index) => {
              const position = projectPlace(place, index);
              const selected = place.id === selectedPlace?.id;
              const indian = isIndianPlace(place);

              return (
                <button
                  aria-label={place.title}
                  className={`absolute z-10 flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center border-2 border-white shadow-lg transition-all hover:z-20 hover:scale-125 ${
                    indian ? 'bg-rust text-white' : 'bg-saffron text-white'
                  } ${selected ? 'z-30 scale-125 ring-4 ring-white/80' : ''}`}
                  key={place.id}
                  onClick={() => setSelectedPlaceId(place.id)}
                  style={{ left: `${position.x}%`, top: `${position.y}%` }}
                  type="button"
                >
                  <MapPin className="h-4 w-4 fill-current" />
                </button>
              );
            })}
          </div>

          {selectedPlace && (
            <aside className="flex flex-col justify-between border-t border-stone-200 bg-cream p-8 lg:border-l lg:border-t-0">
              <div>
                <span
                  className={`mb-5 inline-flex items-center gap-2 px-3 py-1 text-xs font-bold uppercase tracking-widest ${
                    isIndianPlace(selectedPlace)
                      ? 'bg-rust text-white'
                      : 'border border-stone-300 bg-white text-gray-600'
                  }`}
                >
                  <MapPin className="h-3.5 w-3.5" />
                  {selectedPlace.area}
                </span>
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
                  <dt className="text-[0.65rem] font-bold uppercase tracking-widest text-rust">Indian</dt>
                  <dd className="mt-1 font-display text-3xl text-rust">{stats.indian}</dd>
                </div>
                <div>
                  <dt className="text-[0.65rem] font-bold uppercase tracking-widest text-gray-400">Areas</dt>
                  <dd className="mt-1 font-display text-3xl text-gray-900">{stats.areas}</dd>
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
          <div className="flex items-center gap-3 text-sm text-gray-500">
            <span className="inline-flex h-3 w-3 bg-rust" />
            Indian tagged
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {places.map((place, index) => {
            const indian = isIndianPlace(place);

            return (
              <motion.article
                className={`flex min-h-[250px] flex-col border bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl ${
                  indian ? 'border-rust/60 shadow-rust/10' : 'border-stone-200'
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
                    <span
                      className={`mb-3 inline-flex items-center gap-2 px-3 py-1 text-xs font-bold uppercase tracking-widest ${
                        indian ? 'bg-rust text-white' : 'border border-stone-200 text-gray-500'
                      }`}
                    >
                      <Utensils className="h-3.5 w-3.5" />
                      {indian ? 'Indian' : place.area}
                    </span>
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
