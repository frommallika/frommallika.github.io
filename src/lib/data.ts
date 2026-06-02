export interface Recipe {
  id: string;
  title: string;
  slug: string;
  category: 'Indian' | 'Fusion' | 'Global' | 'Baking';
  description: string;
  cookTime: string;
  servings: string;
  ingredients: string[];
  instructions: string[];
  image: string;
  featured?: boolean;
  tags: string[];
}

export interface Menu {
  id: string;
  title: string;
  slug: string;
  description: string;
  season: string;
  occasion: string;
  items: string[];
  image: string;
  details?: {
    intro: string;
    timeline: {
      timing: string;
      task: string;
    }[];
    servingTips: string;
    components: {
      name: string;
      items: {
        name: string;
        description: string;
      }[];
      recipeSlug?: string;
    }[];
  };
}

export interface Guide {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  content: {
    heading: string;
    text: string;
    image?: string;
  }[];
  date: string;
}

export const guides: Guide[] = [
  {
    id: 'bay-area-eats',
    title: 'Bay Area Eats',
    subtitle: 'My absolute favorite spots',
    description:
      'A curated list of the best vegetarian-friendly restaurants in San Francisco and beyond. From hole-in-the-wall dim sum to high-end farm-to-table.',
    image:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1000&auto=format&fit=crop',
    date: 'October 2023',
    content: [
      {
        heading: 'The Mission District Classics',
        text: 'No trip to SF is complete without a burrito, but the Mission offers so much more. For the best vegetarian tacos, I head straight to slightly off-the-beaten-path spots that prioritize fresh masa. The atmosphere is always vibrant, loud, and incredibly welcoming.',
        image:
          'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=1000&auto=format&fit=crop',
      },
      {
        heading: 'Farm-to-Table in Berkeley',
        text: "Crossing the bridge is worth it just for the produce-centric cooking in Berkeley. The philosophy here isn't just a trend; it's a religion. Simple roasted vegetables become the star of the show, served with crusty sourdough and local olive oil.",
      },
      {
        heading: 'Dim Sum Sundays',
        text: 'The Richmond district holds the crown for the best dumplings. I love the chaos of the carts, the steam filling the room, and the endless pots of jasmine tea. Look for places that offer vegetarian crystal dumplings--they are a textural masterpiece.',
        image:
          'https://images.unsplash.com/photo-1496116218417-1a781b1c423c?q=80&w=1000&auto=format&fit=crop',
      },
    ],
  },
  {
    id: 'travel-planning',
    title: 'Travel Planning Guide',
    subtitle: 'Unlocking Enriching Adventures',
    description:
      'A practical framework for planning beautiful journeys. From 8 months out to the day before departure.',
    image:
      'https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1000&auto=format&fit=crop',
    date: 'October 2023',
    content: [
      {
        heading: '7-8 Months Before',
        text: "1. Identify a region and a general timeline for time off. Consider weather and the shoulder season.\n2. Pick the locations we're most excited about and travel time between them. Identify a set of cities/countries based on this.\n3. Develop a broad understanding. Look at YouTube videos, travel books, history podcasts, culinary websites, movies/TV shows related to the relevant countries. Learn what excites you, what you want to experience or learn more about.\n4. Create specific Google Maps. List out attractions, points of interest, food spots, etc.\n5. Revisit Step 2. Is it possible to cover everything in the given timeline? Edit.",
      },
      {
        heading: '5-6 Months Before',
        text: '1. Develop a general skeleton for the trip. How many days are necessary vs. preferred in each location?\n2. Look into flights. Consider travel time and modes of transportation between the various locations you plan to visit. Consider credit card or hotel points.\n3. Plan accommodations and connectors. Consider planes, trains, and buses.\n4. Put together an overview spreadsheet and a TripIt plan accordingly.',
      },
      {
        heading: '2-3 Months Before',
        text: "1. Find free walking tours and schedule them on your first days in cities where available/possible.\n2. Map out the other activities/attractions with the other time in each city on the overview spreadsheet. Purchase tickets in advance where possible and research combination tickets or passes if cost effective.\n3. Plan for visa if relevant.\n4. Make reservations for any special dining experiences and book any tickets for concerts/events.",
      },
      {
        heading: '1 Month Before',
        text: "1. Start checking the weather and getting ready to pack. Purchase any travel size items or clothing/equipment needed for the trip.\n2. Look into whether you'll need cash for the trip and plan to get the necessary currency.\n3. Ensure your work calendar is updated.\n4. Get packing cubes ready, especially with less frequently used items. Check things off as you go up until the weekend before the trip.",
      },
      {
        heading: 'Day Before',
        text: '1. Do a final sanity check on your packing, look into the latest weather forecasts. Ensure you have relevant travel documents, etc.\n2. Make sure you have your automated OOO messages set up.\n3. Get your travel backpack ready with final items like toiletries, snacks, etc.',
      },
      {
        heading: 'Resources',
        text: '- Timeshifter app to manage jetlag\n- TripIt for easy access to trip logistics and info\n- Flixbus for budget transportation\n- Download Google Maps for relevant places\n- Freetour.com for walking tours',
      },
      {
        heading: 'Lessons Learned',
        text: "- Plan for a combination of focused activities and unstructured time to explore.\n- Include a comfortable margin in your plans in case you're figuring out public transportation, etc.\n- Plan for laundry on trips longer than 10 days.\n- Stretch in the morning and at night.\n- Download audiobooks/podcasts before the trip for long flights, etc.\n- Journal every day, even if it's short.\n- Download any relevant transportation apps for the cities you're visiting beforehand.",
      },
      {
        heading: 'Packing List',
        text: "Essentials:\n- Passport/Visa\n- Flight/Train/Bus Tickets\n- Accommodation Bookings\n- Travel Insurance Information\n- Driver's License\n- Credit/Debit Cards & Cash\n- Phone, Charger, Power Bank, Adapter\n\nFirst Aid:\n- Medications, Bandaids, Liquid IV\n- Emergen-C, Portable heat pads\n- Ibuprofen/Tylenol\n\nClothing:\n- Tops, Bottoms, Underwear, Socks\n- Pajamas, Swimsuit, Outerwear\n- Comfortable Shoes, Sandals/Flip-flops\n\nToiletries:\n- Toothbrush, Toothpaste, Floss\n- Shampoo, Conditioner, Soap\n- Deodorant, Sunscreen, Insect Repellent\n- Moisturizer, Lip Balm, Makeup\n\nMiscellaneous:\n- Reusable Water Bottle\n- Small Backpack/Day Bag\n- Travel Pillow, Eye Mask & Ear Plugs\n- Food/Snacks (Trail mix, Granola bars)\n- Travel Journal & Pen",
      },
    ],
  },
];

export const recipes: Recipe[] = [
  {
    id: '5-ingredient-roasted-cauliflower-miso-soup',
    title: '5-Ingredient Roasted Cauliflower Miso Soup',
    slug: '5-ingredient-roasted-cauliflower-miso-soup',
    category: 'Fusion',
    description:
      'This simple cauliflower soup is deeply savory, creamy without cream, and full of mellow roasted garlic flavor. White miso adds quiet umami, while white pepper gives the soup a gentle warmth.',
    cookTime: '1 hour 15 mins',
    servings: 'Serves 4-6',
    ingredients: [
      '1 large cauliflower',
      '3 heads garlic',
      '2 tablespoons white miso',
      '1 teaspoon white pepper',
      'Salt, to taste',
      '2-3 tablespoons olive oil',
      'Water, as needed',
    ],
    instructions: [
      'Preheat the oven to 375F.',
      'Cut the cauliflower into bite-sized florets. Include the tender stalk if desired, cutting it slightly smaller so it cooks through evenly.',
      'Wash the cauliflower and pat it dry well.',
      'Toss the cauliflower with 2-3 tablespoons olive oil and salt. Be generous with the olive oil if you want a richer flavor, since this is the only fat in the soup.',
      'Cut the tops off the garlic heads. Drizzle each head with a little olive oil, sprinkle with salt, and wrap in foil.',
      'Spread the cauliflower on a baking sheet and place the foil-wrapped garlic on the sheet as well.',
      'Roast for 30 minutes.',
      'Remove the garlic after 30 minutes, or continue roasting for about 10 more minutes if the cloves are large and need more time to soften.',
      'Toss the cauliflower, increase the oven temperature to 400F, and roast for another 20-30 minutes, until the cauliflower is fully cooked and lightly browned in spots.',
      'Squeeze the softened garlic cloves out of their skins.',
      'Blend the roasted cauliflower and roasted garlic with 2 cups of water to start. Add more water as needed until the soup reaches your desired thickness.',
      'Transfer the blended soup to a pot and heat through.',
      'Stir in the white pepper.',
      'In a small bowl, whisk the white miso with a little water until smooth.',
      'Once the soup is hot, turn off the heat or lower it to very gentle heat. Stir in the miso mixture.',
      'Taste and add salt as needed.',
      'Serve hot.',
    ],
    image:
      'https://images.unsplash.com/photo-1619582539958-e0454790089e?q=80&w=1000&auto=format&fit=crop',
    featured: true,
    tags: ['Soup', 'Vegan', 'Dinner'],
  },
  {
    id: 'gujarati-daal',
    title: 'Gujarati Daal',
    slug: 'gujarati-daal',
    category: 'Indian',
    description:
      'A bright, comforting Gujarati-style toor daal with the classic balance of savory, tangy, gently sweet, and warming spice. This works beautifully with rice, rotli, shaak, or a simple vegetable side.',
    cookTime: '45-60 mins',
    servings: 'Serves 6',
    ingredients: [
      '1 1/2 cups toor daal',
      '1/2 teaspoon turmeric, divided',
      '1/4 teaspoon hing, divided',
      '2 tablespoons neutral oil',
      '1 teaspoon mustard seeds',
      '1 teaspoon cumin seeds',
      '4-5 cloves',
      '1 small cinnamon stick, optional',
      '8-10 curry leaves, optional',
      '1-inch piece ginger, grated',
      '1/2-1 teaspoon chili powder, to taste',
      '1-2 tablespoons jaggery, to taste',
      'Juice of 1 lime, to taste',
      'Salt, to taste',
      'Water, as needed',
    ],
    instructions: [
      'Wash the toor daal well. Soak for 30 minutes if you have time, then drain.',
      'Pressure cook the daal with 1/2 teaspoon turmeric, a pinch of hing, and enough water to cover by about 1 inch, until very soft.',
      'Whisk or blend the cooked daal until smooth. Add water as needed to reach a pourable consistency.',
      'In a pot, heat the oil over medium heat. Add mustard seeds and let them crackle.',
      'Add cumin seeds, cloves, cinnamon if using, a pinch of hing, and curry leaves. Let the spices bloom for 30-60 seconds.',
      'Add the cooked daal to the pot and stir well.',
      'Add grated ginger, chili powder, jaggery, and salt. Simmer for 10-15 minutes, adding water as needed.',
      'Finish with lime juice. Taste and adjust with more salt, jaggery, chili, or lime until balanced.',
    ],
    image:
      'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=1000&auto=format&fit=crop',
    featured: true,
    tags: ['Daal', 'Gujarati', 'Dinner'],
  },
  {
    id: 'quinoa-pulav',
    title: 'Quinoa Pulav',
    slug: 'quinoa-pulav',
    category: 'Indian',
    description:
      'A fragrant one-pot quinoa pilaf loaded with vegetables and whole spices. This wholesome dish is easy to customize with whatever vegetables you have on hand and pairs beautifully with raita or pickle.',
    cookTime: '35 mins',
    servings: 'Serves 4-6',
    ingredients: [
      '3 tablespoons oil or ghee',
      '2 cardamom pods',
      '3 cloves',
      '1 cinnamon stick',
      '5 black peppercorns',
      '1 bay leaf',
      '1 tablespoon cumin seeds',
      '1/2 teaspoon asafoetida (hing), optional',
      '1 medium onion, finely diced',
      '3 cloves garlic, minced or grated',
      '1 tablespoon grated ginger',
      '2 cups chopped vegetables of choice',
      '1/2 tablespoon turmeric',
      '1 tablespoon red chili powder',
      '1 cup quinoa, washed well',
      '2 cups water',
      'Salt, to taste',
    ],
    instructions: [
      'Add the oil or ghee to a cold pan along with the cinnamon stick, cloves, peppercorns, cardamom pods, and bay leaf.',
      'Place the pan over medium heat and allow the spices to gently infuse the oil.',
      'Add the cumin seeds and asafoetida. When the cumin seeds begin to sputter, add the diced onion.',
      'Cook until the onion becomes translucent.',
      'Add the grated ginger and garlic. Cook for 2-3 minutes until fragrant.',
      'Add the chopped vegetables and salt to taste. Cook until the vegetables begin to soften.',
      'Stir in the turmeric and red chili powder and saute for another 2-3 minutes.',
      'Add the washed quinoa and saute for a few minutes so it absorbs the flavors.',
      'Pour in the water and stir well.',
      'Cover and cook for about 20 minutes, or until the quinoa is tender and the water has been absorbed. Add a little more water and continue cooking if needed.',
      'Fluff with a fork and serve hot with raita or pickle.',
    ],
    image:
      'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=1000&auto=format&fit=crop',
    featured: true,
    tags: ['One-Pot', 'Dinner', 'Healthy'],
  },
  {
    id: 'green-chutney',
    title: 'Green Chutney',
    slug: 'green-chutney',
    category: 'Indian',
    description:
      'A bright, fresh cilantro chutney with ginger, serrano chilies, roasted peanuts, and lime. The peanuts add body and richness while keeping a little texture in the finished chutney.',
    cookTime: '15 mins',
    servings: 'Makes about 2 cups',
    ingredients: [
      '1-inch piece ginger',
      '2 serrano chilies',
      '2 bunches cilantro, stems included',
      '1/4 cup peanuts',
      'Juice of 1/2 lime',
      'Salt, to taste',
      'Water, as needed',
    ],
    instructions: [
      'Prepare the ingredients. Roughly chop the ginger and serrano chilies.',
      'Roast the peanuts in a dry pan until fragrant. Remove the skins if necessary and let cool.',
      'Roughly chop the cilantro, including the stems.',
      'Add the cilantro to a blender with as little water as necessary.',
      'Add the lime juice, salt, ginger, and chilies. Blend until no large pieces of ginger remain.',
      'Add the roasted peanuts and blend until mostly smooth, leaving a little texture.',
      'Taste and adjust the seasoning with additional salt, lime juice, or chilies as desired.',
      'Transfer to containers and refrigerate or freeze for later use.',
    ],
    image:
      'https://images.unsplash.com/photo-1606914469633-bd39206ea739?q=80&w=1000&auto=format&fit=crop',
    tags: ['Chutney', 'Condiment', 'Vegan'],
  },
  {
    id: 'meethi-chutney',
    title: 'Meethi Chutney',
    slug: 'meethi-chutney',
    category: 'Indian',
    description:
      'A sweet and tangy chutney made with tamarind, dates, and jaggery. This classic chutney is perfect for chaat, samosas, pakoras, and snacks.',
    cookTime: '45 mins',
    servings: 'Makes about 3 cups',
    ingredients: [
      '1/2 cup tamarind',
      '1/2 cup dates',
      '1 cup jaggery',
      '1 glass water (about 2 cups)',
    ],
    instructions: [
      'Soak the tamarind, dates, and jaggery separately in hot water for 25 minutes.',
      'Add the soaked tamarind, dates, and jaggery to a blender.',
      'Add the water and blend until completely smooth.',
      'Strain the mixture through a fine strainer into a pot.',
      'Place the pot over medium heat and bring the mixture to a boil.',
      'Simmer for 10-15 minutes, stirring occasionally.',
      'Remove from the heat and let the chutney cool completely.',
      'Transfer to a clean jar or bottle and refrigerate.',
    ],
    image:
      'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1000&auto=format&fit=crop',
    tags: ['Chutney', 'Condiment', 'Sweet'],
  },
  {
    id: 'kasundi-egg-salad',
    title: 'Kasundi Egg Salad',
    slug: 'kasundi-egg-salad',
    category: 'Fusion',
    description:
      'This egg salad is creamy, tangy, crunchy, and just a little spicy from kasundi, pickles, and pickled chilies. Serve it on toast, in sandwiches, or with crackers for an easy lunch or snack.',
    cookTime: '30 mins',
    servings: 'Serves 6',
    ingredients: [
      '12 eggs',
      '3 celery stalks, finely minced',
      '3 scallions, finely chopped',
      '2-3 tablespoons minced pickles',
      '1-2 tablespoons minced pickled jalapenos or Fresno chilies',
      '2 tablespoons mayonnaise',
      '1 cup plain yogurt',
      '1 tablespoon kasundi, or more to taste',
      '1-2 teaspoons pickle brine, optional',
      'Salt, to taste',
      'Black pepper, to taste',
    ],
    instructions: [
      'Bring a pot of water to a boil. Carefully add the eggs and boil for 12 minutes.',
      'Transfer the eggs to an ice bath and let them cool completely.',
      'Peel and chop the eggs.',
      'In a large bowl, mix mayonnaise, yogurt, kasundi, pickle brine if using, salt, and pepper.',
      'Add the chopped eggs, celery, pickles, pickled chilies, and scallions.',
      'Mix gently until combined. Taste and adjust with more kasundi, salt, pepper, or pickle brine.',
      'Serve on toast, in a sandwich, or with crackers.',
    ],
    image:
      'https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=1000&auto=format&fit=crop',
    tags: ['Lunch', 'Egg', 'Sandwich'],
  },
  {
    id: 'beet-hummus',
    title: 'Beet Hummus',
    slug: 'beet-hummus',
    category: 'Global',
    description:
      'This beet hummus is vibrant, earthy, creamy, and slightly spicy from chili garlic sauce. It is a beautiful mezze-style dip for pita, cucumbers, crackers, or a colorful grazing board.',
    cookTime: '15 mins',
    servings: 'Serves 8-10',
    ingredients: [
      '1 package steamed beets, roughly chopped',
      '2 cans chickpeas, drained and rinsed',
      '2-3 garlic cloves, roughly chopped',
      '1/4 cup tahini',
      '1/4 cup olive oil',
      'Juice of 1 lemon',
      '1 tablespoon toasted cumin powder',
      '1 tablespoon chili garlic sauce',
      'Salt, to taste',
      'Black pepper, to taste',
      'Water, as needed to blend',
    ],
    instructions: [
      'Add the chopped beets, garlic, tahini, lemon juice, olive oil, and a splash of water to a blender or food processor.',
      'Blend until smooth and no large pieces of garlic remain.',
      'Add the chickpeas, toasted cumin powder, chili garlic sauce, salt, and pepper.',
      'Blend again, adding water a little at a time until the hummus is smooth and creamy.',
      'Taste and adjust with more salt, lemon juice, cumin, or chili garlic sauce.',
      'Serve with pita, cucumbers, crackers, or fresh vegetables.',
    ],
    image:
      'https://images.unsplash.com/photo-1570197788417-0e82375c9371?q=80&w=1000&auto=format&fit=crop',
    tags: ['Dip', 'Mezze', 'Vegan'],
  },
  {
    id: 'fahads-labneh-dip',
    title: "Fahad's Labneh Dip",
    slug: 'fahads-labneh-dip',
    category: 'Global',
    description:
      'This is a simple, deeply savory labneh dip with garlic, salt, and dried mint. Letting it sit before serving gives the garlic and mint time to infuse the labneh, making it perfect for a mezze spread.',
    cookTime: '10 mins active, plus 30 mins resting',
    servings: 'Serves 4-6',
    ingredients: [
      '1 container labneh, about 8 ounces',
      '2 garlic cloves',
      '2 teaspoons salt, or to taste',
      '2 tablespoons dried mint',
      'Good olive oil, optional, for garnish',
    ],
    instructions: [
      'Add the garlic and salt to a mortar and pestle.',
      'Pound until the garlic becomes a smooth paste.',
      'Add the garlic paste and dried mint to the labneh.',
      'Mix until fully combined.',
      'Let sit for at least 30 minutes before serving.',
      'Garnish with olive oil if desired and serve with mezze, pita, vegetables, or crackers.',
    ],
    image:
      'https://images.unsplash.com/photo-1604908812867-3fb2a06f8c63?q=80&w=1000&auto=format&fit=crop',
    tags: ['Dip', 'Mezze', 'Quick'],
  },
  {
    id: 'mediterranean-couscous-salad',
    title: 'Mediterranean Couscous Salad',
    slug: 'mediterranean-couscous-salad',
    category: 'Global',
    description:
      'This is a flexible, hearty couscous salad with lentils, chickpeas, vegetables, herbs, feta, and a lemony olive oil dressing. It works well as a lunch, picnic dish, potluck salad, or easy make-ahead side.',
    cookTime: '20 mins',
    servings: 'Serves 6-8',
    ingredients: [
      '1 package microwavable couscous',
      '1 cup cooked green lentils, preferably al dente',
      '1 can chickpeas, drained and rinsed',
      '1 cup chopped tomatoes',
      '1 cup chopped Persian cucumbers',
      '1/2 cup chopped olives',
      '1/2 cup chopped roasted red peppers, optional',
      '2 cups roughly chopped baby spinach or arugula',
      '1/2-1 cup chopped herbs, such as cilantro, parsley, mint, or basil',
      '1/2 cup crumbled feta',
      '3-4 tablespoons good olive oil',
      'Juice of 1 lemon',
      'Salt, to taste',
      'Black pepper, to taste',
      "1 teaspoon za'atar, optional",
      'Crushed pita chips or chopped almonds, optional, for topping',
    ],
    instructions: [
      'Microwave the couscous according to package instructions.',
      'Transfer the couscous to a very large bowl and let it cool slightly.',
      'Add the cooked lentils and drained chickpeas.',
      'Season with salt, pepper, olive oil, and lemon juice. Toss well.',
      'Add tomatoes, cucumbers, olives, roasted red peppers if using, greens, and herbs.',
      'Toss until evenly combined.',
      "Top with feta and za'atar if using.",
      'Add crushed pita chips or chopped almonds just before serving for crunch.',
    ],
    image:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1000&auto=format&fit=crop',
    tags: ['Salad', 'Lunch', 'Make-Ahead'],
  },
  {
    id: 'sprouted-mung-beans',
    title: 'Sprouted Mung Beans',
    slug: 'sprouted-mung-beans',
    category: 'Indian',
    description:
      'These lightly cooked sprouted mung beans are simple, nourishing, and gently spiced with ginger, chili, turmeric, and salt. They can be eaten warm or at room temperature with yogurt, puffed rice, or as part of a Gujarati-style meal.',
    cookTime: '20 mins active, plus 20-28 hours soaking and sprouting',
    servings: 'Serves 4-6',
    ingredients: [
      '1 1/2 cups whole mung beans',
      '1 tablespoon neutral oil',
      '1-inch piece ginger, grated',
      '1-2 serrano chilies, minced',
      '1/2 teaspoon turmeric',
      'Salt, to taste',
      'Water, as needed',
    ],
    instructions: [
      'Wash the mung beans well and soak them in plenty of water for 8-12 hours.',
      'Drain the water. Cover the mung beans with a clean cloth or lid and keep them in a warm place for 12-16 hours, or until sprouted.',
      'Once sprouted, rinse the mung beans.',
      'Heat oil in a pot over medium heat.',
      'Add the sprouted mung beans, grated ginger, minced chilies, turmeric, and salt.',
      'Saute for 2-3 minutes.',
      'Add a splash of water to cover the bottom of the pot. Cover and steam until cooked to your preferred doneness, adding small splashes of water as needed.',
      'Serve warm or at room temperature with yogurt, puffed rice, or as a side dish.',
    ],
    image:
      'https://images.unsplash.com/photo-1519996529931-28324d5a630e?q=80&w=1000&auto=format&fit=crop',
    tags: ['Gujarati', 'Healthy', 'Side'],
  },
  {
    id: 'simple-masoor-daal',
    title: 'Simple Masoor Daal',
    slug: 'simple-masoor-daal',
    category: 'Indian',
    description:
      'A quick, everyday red lentil daal made with a simple cumin tadka, ginger-garlic, and basic spices. It cooks down into a creamy daal that is perfect with rice, roti, or a simple vegetable side.',
    cookTime: '35-40 mins',
    servings: 'Serves 4-6',
    ingredients: [
      '1 1/2 cups masoor daal or red lentils',
      '1-2 tablespoons ghee or neutral oil',
      '1 teaspoon cumin seeds',
      '1/4 teaspoon hing',
      '1 dried red chili or 1 slit green chili, optional',
      '2 tablespoons ginger-garlic paste',
      '1/2 teaspoon turmeric',
      '1/2-1 teaspoon red chili powder, to taste',
      'Salt, to taste',
      '4-5 cups water, plus more as needed',
      'Chopped cilantro, optional, for garnish',
    ],
    instructions: [
      'Wash the masoor daal well until the water runs mostly clear.',
      'Soak the daal for 15-30 minutes if you have time, then drain.',
      'Heat the ghee or oil in a pot over medium heat.',
      'Add the cumin seeds and let them sizzle.',
      'Add the hing and dried red chili or slit green chili if using. Cook for a few seconds until fragrant.',
      'Add the rinsed and drained daal.',
      'Add the ginger-garlic paste, turmeric, red chili powder, and salt.',
      'Saute the daal with the spices for 1-2 minutes to lightly toast it.',
      'Add 4 cups of water and stir well.',
      'Bring to a boil, then reduce to a simmer.',
      'Cook for 20-25 minutes, stirring occasionally, until the daal is tender, creamy, and fully cooked. Add more water as needed to reach your preferred consistency.',
      'Taste and adjust salt or chili powder.',
      'Garnish with chopped cilantro if desired.',
      'Serve hot with rice or roti.',
    ],
    image:
      'https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=1000&auto=format&fit=crop',
    tags: ['Daal', 'Dinner', 'Quick'],
  },
  {
    id: 'butternut-squash-sabzi-with-special-masala',
    title: 'Butternut Squash Sabzi with Special Masala',
    slug: 'butternut-squash-sabzi-with-special-masala',
    category: 'Indian',
    description:
      'This butternut squash sabzi is sweet, spicy, tangy, and deeply aromatic from mustard oil, panch-phoron-inspired spices, jaggery, amchur, and a toasted coconut-sesame masala. It is a festive vegetable dish with parathas, puris, rotli, or rice.',
    cookTime: '50-60 mins',
    servings: 'Serves 6-8',
    ingredients: [
      'For the special masala: 2 tablespoons coriander seeds',
      '1 tablespoon white sesame seeds',
      '1 tablespoon white poppy seeds, khuskhus',
      '2 tablespoons unsweetened desiccated coconut',
      '1 tablespoon cumin seeds',
      '4-6 Bedgi red chilies, adjusted to taste',
      '1/2-inch cinnamon stick',
      '2 cloves',
      '4-6 black peppercorns',
      'For the sabzi: 3 tablespoons mustard oil',
      '1 teaspoon mustard seeds',
      '2 teaspoons cumin seeds',
      '2 teaspoons fennel seeds',
      '1 teaspoon methi seeds',
      '2 teaspoons kalonji',
      '1-2 bay leaves',
      '2 small butternut squash, peeled and cubed',
      '1-inch piece ginger, grated',
      '1-2 serrano chilies, roughly chopped',
      '1/2 teaspoon turmeric',
      '2 tablespoons special masala',
      '1 tablespoon garam masala',
      '1 tablespoon jaggery',
      '1 tablespoon amchur',
      'Salt, to taste',
      'Water, as needed',
    ],
    instructions: [
      'Make the special masala: toast coriander seeds, sesame seeds, poppy seeds, coconut, cumin seeds, red chilies, cinnamon, cloves, and black peppercorns in a dry pan until fragrant.',
      'Let cool, then grind into a coarse or fine powder. Set aside.',
      'Heat mustard oil in a kadhai or large pan until shimmering.',
      'Add bay leaves, mustard seeds, cumin seeds, fennel seeds, methi seeds, and kalonji. Let the spices crackle.',
      'Add the chopped green chilies and cook for about 1 minute.',
      'Add the cubed butternut squash, grated ginger, and salt. Stir well.',
      'Add a splash of water to cover the bottom of the pan. Cover and cook over medium heat until the squash begins to soften.',
      'When the squash is about halfway cooked, add turmeric and 2 tablespoons of the special masala.',
      'Continue cooking, adding small splashes of water as needed, until the squash is tender.',
      'Finish with jaggery, garam masala, and amchur. Taste and adjust salt, sweetness, and tang.',
      'Serve warm with parathas, rotli, puris, or rice.',
    ],
    image:
      'https://images.unsplash.com/photo-1470549813517-2fa741d25c92?q=80&w=1000&auto=format&fit=crop',
    tags: ['Sabzi', 'Gujarati', 'Dinner'],
  },
  {
    id: 'adadiya-ladoo',
    title: 'Adadiya Ladoo',
    slug: 'adadiya-ladoo',
    category: 'Indian',
    description:
      'A traditional Gujarati winter sweet made with urad flour, dry ginger, edible gum (gund), almonds, and sugar syrup. These rich, warming ladoos are especially popular during colder months.',
    cookTime: '2 hours',
    servings: 'Makes about 30-40 ladoos',
    ingredients: [
      '5 cups urad atta (udad flour)',
      '1/2 cup ghee, lukewarm',
      '1/2 cup milk, lukewarm',
      '3/4 cup dry ginger powder',
      '3/4 cup almond pieces, or more to taste',
      '1 cup gund (edible gum), fried in ghee',
      '3 1/2 cups sugar',
      '1 cup water',
      'Additional ghee, as needed for frying and roasting',
    ],
    instructions: [
      'Mix the lukewarm milk and 1/2 cup lukewarm ghee together.',
      'Pour the mixture over the urad atta and mix thoroughly.',
      'Press the mixture firmly into a bowl, cover, and let rest for 30 minutes.',
      'Pass the rested flour mixture through a sieve to create small granules.',
      'Fry the gund in ghee until puffed. Set aside.',
      'Roast the atta granules in ghee over medium-low heat until golden brown and fragrant, similar to making suji halwa.',
      'In a separate pot, combine the sugar and water. Cook until the syrup reaches a one-string consistency.',
      'Remove the syrup from the heat and immediately mix in the roasted atta granules until fully incorporated.',
      'Add the dry ginger powder, fried gund, and almond pieces. Mix thoroughly.',
      'Let the mixture rest until the ghee is absorbed and the mixture is only slightly warm.',
      'Shape into ladoos while still warm.',
      'Allow the ladoos to cool completely before storing in an airtight container.',
    ],
    image:
      'https://images.unsplash.com/photo-1605197161470-5d2a9af77f49?q=80&w=1000&auto=format&fit=crop',
    tags: ['Dessert', 'Gujarati', 'Winter'],
  },
  {
    id: 'black-bean-soup',
    title: 'Black Bean Soup',
    slug: 'black-bean-soup',
    category: 'Global',
    description:
      'A hearty, flavorful black bean soup packed with vegetables, herbs, and a gentle kick from serrano chilies. Blending part or all of the soup creates a rich, creamy texture without any dairy.',
    cookTime: '40 mins',
    servings: 'Serves 6-8',
    ingredients: [
      '2 cans black beans',
      '1 large onion, finely diced',
      '2 bell peppers, finely diced',
      '3 stalks celery, finely diced',
      '4 cloves garlic, minced',
      '1 bay leaf',
      '1/2 bunch cilantro, stems finely chopped and leaves reserved for garnish',
      '2 serrano chilies, finely minced',
      '4 cups vegetable stock or water',
      '2-3 tablespoons olive oil',
      '1 tablespoon dried oregano',
      'Salt, to taste',
      'Black pepper, to taste',
      'Avocado chunks, for serving',
      'Lime wedges, for serving',
      'Hot sauce, optional, for serving',
    ],
    instructions: [
      'Heat the olive oil in a large pot over medium heat.',
      'Add the onion and celery and saute until the onion is translucent, about 5-7 minutes.',
      'Add the bay leaf and bell peppers. Cook until the vegetables have softened.',
      'Stir in the oregano, garlic, chopped cilantro stems, and serrano chilies. Cook for 2-3 minutes until fragrant.',
      'Add both cans of black beans with their liquid and pour in the vegetable stock or water.',
      'Bring the soup to a boil, then reduce to a simmer and cook for 10-15 minutes.',
      'Season with salt and black pepper to taste.',
      'Blend with an immersion blender until the desired texture is reached.',
      'Serve hot, garnished with cilantro leaves and avocado chunks, with lime wedges and hot sauce on the side.',
    ],
    image:
      'https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=1000&auto=format&fit=crop',
    tags: ['Soup', 'Dinner', 'Vegan'],
  },
  {
    id: 'minestrone-soup',
    title: 'Minestrone Soup',
    slug: 'minestrone-soup',
    category: 'Global',
    description:
      'A hearty, vegetable-packed Italian-inspired soup with beans, tomatoes, pasta, and greens. This flexible recipe is perfect for using up extra vegetables and is delicious served with crusty bread.',
    cookTime: '45 mins',
    servings: 'Serves 6-8',
    ingredients: [
      '2 tablespoons olive oil',
      '1 large onion, finely diced',
      '2 carrots, finely diced',
      '3 stalks celery, finely diced',
      '4 cloves garlic, minced',
      '1 tablespoon Italian seasoning',
      '1 teaspoon red chili flakes',
      '1 can San Marzano tomatoes',
      '1 can beans, drained and rinsed',
      '1 zucchini, diced',
      '3 cups chopped kale or cabbage',
      '1/4 cup small pasta',
      '4 cups vegetable broth or water, plus more as needed',
      'Salt, to taste',
      'Black pepper, to taste',
      'Fresh basil, for serving',
      'Olive oil, for serving',
      'Crusty bread, for serving',
    ],
    instructions: [
      'Heat the olive oil in a large pot over medium-high heat.',
      'Add the finely diced onion, carrots, and celery. Cook until the onion is translucent and the vegetables have softened slightly.',
      'Add the minced garlic, salt, black pepper, Italian seasoning, and red chili flakes. Cook for 2-3 minutes, until fragrant.',
      'Add the San Marzano tomatoes, beans, and vegetable broth or water.',
      'Break up the tomatoes with a spoon and bring the soup to a boil.',
      'Add the diced zucchini and any other vegetables you would like to include.',
      'Let the soup return to a boil, then taste and adjust the salt.',
      'Add the chopped kale or cabbage and pasta.',
      'Simmer until the pasta is cooked through, adding more water or broth as needed since the pasta will absorb liquid.',
      'Taste once more and adjust salt, pepper, or chili flakes as desired.',
      'Serve hot with crusty bread, fresh basil, and a drizzle of good olive oil on top.',
    ],
    image:
      'https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?q=80&w=1000&auto=format&fit=crop',
    tags: ['Soup', 'Dinner', 'Italian'],
  },
];

export const menus: Menu[] = [
  {
    id: 'festive-indian-dinner',
    title: 'A Classic Festive Indian Dinner',
    slug: 'festive-indian-dinner',
    description: 'A grand spread of traditional favorites perfect for Diwali or special celebrations.',
    season: 'Fall/Winter',
    occasion: 'Festival',
    items: [],
    image:
      'https://images.unsplash.com/photo-1517260739737-aa487b8b8d2b?q=80&w=1000&auto=format&fit=crop',
    details: {
      intro: 'This menu brings together the most beloved classics for a truly festive feast.',
      timeline: [
        { timing: '2 Days Before', task: 'Make the chutneys and barfi.' },
        { timing: '1 Day Before', task: 'Prepare the Maa ki Daal and marinate paneer.' },
        { timing: 'Morning Of', task: 'Chop vegetables for salad and Aloo Gobi.' },
        { timing: '1 Hour Before', task: 'Fry samosas and heat dishes.' },
      ],
      servingTips: 'Serve the appetizers with chai or drinks before the main meal.',
      components: [
        {
          name: 'Appetizers',
          items: [
            { name: 'Samosas', description: 'Crispy pastry pockets filled with spiced potatoes and peas.' },
            { name: 'Mithi Chutney', description: 'Sweet and tangy tamarind dipping sauce.' },
            { name: 'Green Chutney', description: 'Spicy cilantro and mint relish.' },
          ],
        },
        {
          name: 'Entrees',
          items: [
            { name: 'Maa ki Daal', description: 'Slow-cooked creamy black lentils.' },
            { name: 'Shahi Paneer', description: 'Cottage cheese in a rich, creamy tomato gravy.' },
            { name: 'Aloo Gobi', description: 'Spiced cauliflower and potato stir-fry.' },
            { name: 'Naan', description: 'Soft, leavened flatbread.' },
            { name: 'Rice', description: 'Fragrant basmati rice.' },
          ],
        },
        {
          name: 'Sides',
          items: [
            { name: 'Boondi Raita', description: 'Yogurt with crisp chickpea pearls.' },
            { name: 'Kachumber Salad', description: 'Fresh chopped cucumber, tomato, and onion salad.' },
          ],
        },
        {
          name: 'Dessert',
          items: [
            { name: 'Milk Barfi', description: 'Fudgy milk-based sweet.' },
            { name: 'Mango Barfi', description: 'Sweet mango fudge squares.' },
          ],
        },
      ],
    },
  },
  {
    id: 'crowd-pleasing-desi',
    title: 'A Fun, Crowd-Pleasing Desi Dinner',
    slug: 'crowd-pleasing-desi',
    description: 'Comforting flavors with a fun twist, perfect for gathering friends.',
    season: 'Any',
    occasion: 'Dinner Party',
    items: [],
    image:
      'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=1000&auto=format&fit=crop',
    details: {
      intro: 'A menu designed to be devoured, featuring crowd favorites like Rajma and a tropical dessert.',
      timeline: [],
      servingTips: '',
      components: [
        {
          name: 'Appetizer',
          items: [{ name: 'Aloo phyllo cups', description: 'Spiced potato filling in crispy phyllo pastry shells.' }],
        },
        {
          name: 'Entrees',
          items: [
            { name: 'Rajma', description: 'Red kidney beans in a thick tomato-onion gravy.' },
            { name: 'Coconut curry', description: 'Creamy vegetable curry with coconut milk.' },
            { name: 'Beans aloo', description: 'Green beans and potatoes stir-fry.' },
            { name: 'Rice', description: 'Steamed basmati rice.' },
            { name: 'Parathas', description: 'Flaky whole wheat flatbreads.' },
          ],
        },
        {
          name: 'Dessert',
          items: [{ name: 'Mango tiramisu', description: 'Classic Italian dessert with a tropical mango twist.' }],
        },
      ],
    },
  },
  {
    id: 'unique-home-style',
    title: 'A Unique, Home-Style Indian Dinner',
    slug: 'unique-home-style',
    description: 'Wholesome, home-style dishes that feel like a warm hug.',
    season: 'Winter',
    occasion: 'Family Dinner',
    items: [],
    image:
      'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1000&auto=format&fit=crop',
    details: {
      intro: 'Featuring unique combinations and comforting vegetable dishes.',
      timeline: [],
      servingTips: '',
      components: [
        {
          name: 'Appetizer',
          items: [
            { name: 'Baked dahi vada', description: 'Lentil dumplings soaked in yogurt, baked for a lighter touch.' },
            { name: 'Meethi chutney', description: 'Sweet tamarind sauce.' },
            { name: 'Green chutney', description: 'Spicy herb chutney.' },
            { name: 'Puff pattice', description: 'Flaky savory pastries.' },
          ],
        },
        {
          name: 'Entrees',
          items: [
            { name: 'Aloo matar', description: 'Peas and potatoes in a spiced tomato gravy.' },
            { name: 'Kaddu ki sabzi', description: 'Sweet and sour pumpkin stir-fry.' },
            { name: 'Kale chane', description: 'Black chickpeas in a rustic spice blend.' },
            { name: 'Parathas', description: 'Pan-fried flatbreads.' },
            { name: 'Vegetable pulav', description: 'Spiced rice with mixed vegetables.' },
          ],
        },
        {
          name: 'Dessert',
          items: [{ name: 'Coconut sago kheer', description: 'Creamy tapioca pearl pudding with coconut milk.' }],
        },
      ],
    },
  },
  {
    id: 'afternoon-chai-party',
    title: 'An Afternoon Chai Party',
    slug: 'afternoon-chai-party',
    description: 'The perfect spread of savory and sweet snacks to accompany hot chai.',
    season: 'Monsoon/Winter',
    occasion: 'High Tea',
    items: [],
    image:
      'https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?q=80&w=1000&auto=format&fit=crop',
    details: {
      intro: 'A selection of crispy, savory, and sweet treats that pair perfectly with masala chai.',
      timeline: [],
      servingTips: '',
      components: [
        {
          name: 'Savory Snacks',
          items: [
            { name: 'Dhokla with green chutney', description: 'Steamed savory gram flour cakes.' },
            { name: 'Peas Kachori', description: 'Fried pastry stuffed with spiced green peas.' },
            { name: 'Chakri', description: 'Crispy spiral rice flour snack.' },
            { name: 'Fafda ghatia with kadhi chutney', description: 'Gram flour crispies with yogurt-based dip.' },
          ],
        },
        {
          name: 'Sweet & Biscuits',
          items: [
            { name: 'Khari biscuit', description: 'Light and flaky puff pastry biscuits.' },
            { name: 'Nankhatai', description: 'Traditional Indian shortbread cookies.' },
            { name: 'Parle G', description: 'Classic tea-time glucose biscuits.' },
          ],
        },
        {
          name: 'Beverage',
          items: [{ name: 'Chai', description: 'Spiced Indian milk tea.' }],
        },
      ],
    },
  },
  {
    id: 'gujarati-lunch',
    title: 'A Satisfying Gujarati Lunch',
    slug: 'gujarati-lunch',
    description: 'A traditional thali-style meal with balanced flavors of sweet, spicy, and sour.',
    season: 'Any',
    occasion: 'Lunch',
    items: [],
    image:
      'https://images.unsplash.com/photo-1552590635-27c2c2128abf?q=80&w=1000&auto=format&fit=crop',
    details: {
      intro: 'A complete meal featuring the classic Gujarati combination of Daal, Bhaat, Rotli, and Shaak.',
      timeline: [],
      servingTips: '',
      components: [
        {
          name: 'Main Course',
          items: [
            { name: 'Roti', description: 'Soft whole wheat flatbreads.' },
            { name: 'Rice', description: 'Simple steamed rice.' },
            { name: 'Gujarati Daal', description: 'Sweet, spicy, and tangy lentil soup.' },
          ],
        },
        {
          name: 'Vegetables (Shaak)',
          items: [
            { name: 'Stuffed Eggplant Shaak', description: 'Baby eggplants filled with spice mix.' },
            { name: 'Cabbage Shaak', description: 'Stir-fried cabbage with mustard seeds.' },
            { name: 'Bhindi', description: 'Crispy okra stir-fry.' },
          ],
        },
        {
          name: 'Dessert',
          items: [{ name: 'Sheero (Suji Halwa)', description: 'Rich semolina pudding with cardamom and nuts.' }],
        },
      ],
    },
  },
  {
    id: 'mediterranean-lunch',
    title: 'A Cozy Mediterranean-Inspired Lunch',
    slug: 'mediterranean-lunch',
    description: 'Fresh flavors and comforting baked dishes inspired by the Mediterranean.',
    season: 'Spring',
    occasion: 'Lunch',
    items: [],
    image:
      'https://images.unsplash.com/photo-1560155016-029a73842c16?q=80&w=1000&auto=format&fit=crop',
    details: {
      intro: 'Light yet satisfying dishes perfect for a sunny afternoon lunch.',
      timeline: [],
      servingTips: '',
      components: [
        {
          name: 'Appetizers',
          items: [
            { name: 'Mushroom Soup', description: 'Creamy roasted mushroom soup.' },
            { name: 'Spanakopita', description: 'Spinach and feta cheese wrapped in phyllo.' },
          ],
        },
        {
          name: 'Entree',
          items: [
            { name: 'Pumpkin Ricotta Stuffed Shells', description: 'Pasta shells filled with pumpkin and ricotta bake.' },
          ],
        },
        {
          name: 'Dessert',
          items: [{ name: 'Chocolate Muffins', description: 'Moist and rich double chocolate muffins.' }],
        },
      ],
    },
  },
  {
    id: 'sunday-lunch',
    title: 'A Cozy Sunday Lunch',
    slug: 'sunday-lunch',
    description: 'Simple, warming comfort food for a lazy Sunday.',
    season: 'Winter',
    occasion: 'Family Lunch',
    items: [],
    image:
      'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?q=80&w=1000&auto=format&fit=crop',
    details: {
      intro: 'Comfort food classics that bring everyone together.',
      timeline: [],
      servingTips: '',
      components: [
        {
          name: 'Appetizers',
          items: [
            { name: 'Cauliflower soup', description: 'Smooth and comforting roasted cauliflower soup.' },
            { name: 'Garlic Bread Pizza', description: 'Crispy bread topped with cheese and herbs.' },
          ],
        },
        {
          name: 'Entree',
          items: [
            { name: 'Spinach Ricotta Stuffed Shells', description: 'Classic pasta bake with creamy spinach filling.' },
          ],
        },
        {
          name: 'Dessert',
          items: [{ name: 'Strawberry Torte', description: 'Light sponge cake layered with fresh strawberries and cream.' }],
        },
      ],
    },
  },
  {
    id: 'mexican-birthday',
    title: 'A Mexican-Inspired Birthday Lunch',
    slug: 'mexican-birthday',
    description: 'A vibrant and festive fiesta menu.',
    season: 'Summer',
    occasion: 'Birthday',
    items: [],
    image:
      'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=1000&auto=format&fit=crop',
    details: {
      intro: 'Bold flavors and fun dishes to celebrate a special day.',
      timeline: [],
      servingTips: '',
      components: [
        {
          name: 'Appetizers',
          items: [{ name: 'Nachos', description: 'Tortilla chips loaded with cheese, salsa, and toppings.' }],
        },
        {
          name: 'Entree',
          items: [
            { name: 'Mexican Rice', description: 'Spiced tomato rice with vegetables.' },
            { name: 'Black beans', description: 'Simmered seasoned black beans.' },
            { name: 'Jackfruit Mole Tacos', description: 'Soft tacos with pulled jackfruit in rich mole sauce.' },
          ],
        },
        {
          name: 'Dessert',
          items: [{ name: 'Earl Grey Tres Leches', description: 'Milk-soaked cake infused with Earl Grey tea.' }],
        },
      ],
    },
  },
];

export const bio = {
  title: "Hi, I'm Mallika",
  text: [
    'This is my personal collection of recipes, menus, and notes.',
    "The recipes are vegetarian home cooking--rooted in Indian traditions and shaped by the people, ideas, and experiences that have inspired me over the years. They're the dishes I crave, the food my friends and family request, and the meals I get excited about when others cook for me.",
    "Alongside these recipes, I share menus, hosting plans, and practical frameworks I've built for myself--the things I'm often asked about.",
  ],
};
