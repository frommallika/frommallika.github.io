export interface Recipe {
  id: string;
  title: string;
  slug: string;
  category: 'Indian' | 'Fusion' | 'Global' | 'Baking';
  description: string;
  cookTime: string;
  servings: number;
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
    id: '1',
    title: 'Roasted Vegetable Salad',
    slug: 'roasted-vegetable-salad',
    category: 'Global',
    description:
      "Salads can be delicious, healthy, and perfect for a lighter meal. Here's one of my favorite salads.",
    cookTime: '40 mins',
    servings: 2,
    ingredients: ['Sweet potato', 'Brussels sprouts', 'Kale', 'Quinoa', 'Tahini dressing'],
    instructions: [
      'Roast chopped sweet potatoes and brussels sprouts at 400F for 30 mins.',
      'Massage kale with olive oil.',
      'Toss roasted veggies with kale and cooked quinoa.',
      'Drizzle with tahini dressing.',
    ],
    image:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1000&auto=format&fit=crop',
    featured: true,
    tags: ['Salad', 'Healthy', 'Lunch'],
  },
  {
    id: '2',
    title: 'Minestrone Soup',
    slug: 'minestrone-soup',
    category: 'Global',
    description: 'A great cold weather dinner - complete with vegetables, beans, and pasta.',
    cookTime: '45 mins',
    servings: 4,
    ingredients: ['Vegetable broth', 'Carrots', 'Celery', 'Tomatoes', 'Kidney beans', 'Small pasta'],
    instructions: [
      'Saute carrots, celery, and onions.',
      'Add broth and tomatoes. Simmer for 20 mins.',
      'Add beans and pasta. Cook until pasta is tender.',
      'Season with herbs and serve.',
    ],
    image:
      'https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?q=80&w=1000&auto=format&fit=crop',
    featured: true,
    tags: ['Soup', 'Dinner', 'Comfort Food'],
  },
  {
    id: '3',
    title: 'Spaghetti Squash Boats',
    slug: 'spaghetti-squash-boats',
    category: 'Fusion',
    description: "A delicious, easy, and low-carb option that's also customizable.",
    cookTime: '60 mins',
    servings: 2,
    ingredients: ['Spaghetti squash', 'Marinara sauce', 'Mozzarella', 'Basil'],
    instructions: [
      'Cut squash in half and roast at 400F for 40-50 mins.',
      'Fluff strands with a fork.',
      'Top with marinara and cheese.',
      'Broil until cheese bubbles.',
    ],
    image:
      'https://images.unsplash.com/photo-1506459225024-1428097a7e18?q=80&w=1000&auto=format&fit=crop',
    featured: true,
    tags: ['Dinner', 'Low Carb', 'Healthy'],
  },
  {
    id: '4',
    title: 'Quinoa Pulav',
    slug: 'quinoa-pulav',
    category: 'Indian',
    description: 'A comforting dish that works well for meal prep.',
    cookTime: '25 mins',
    servings: 4,
    ingredients: ['Quinoa', 'Mixed vegetables (peas, carrots, beans)', 'Cumin', 'Turmeric', 'Garam masala'],
    instructions: [
      'Rinse quinoa well.',
      'Temper spices in oil/ghee.',
      'Saute vegetables.',
      'Add quinoa and water. Cook until fluffy.',
    ],
    image:
      'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=1000&auto=format&fit=crop',
    tags: ['Dinner', 'Healthy', 'Meal Prep'],
  },
  {
    id: '5',
    title: 'Breakfast Hash',
    slug: 'breakfast-hash',
    category: 'Global',
    description: 'A hearty one-pan breakfast with crispy potatoes and eggs.',
    cookTime: '30 mins',
    servings: 2,
    ingredients: ['Potatoes', 'Peppers', 'Onions', 'Eggs', 'Paprika'],
    instructions: [
      'Dice potatoes and fry until crispy.',
      'Add peppers and onions, cook until soft.',
      'Make wells in the mixture and crack eggs into them.',
      'Cover and cook until eggs are set.',
    ],
    image:
      'https://images.unsplash.com/photo-1593584785033-9c7604d0863f?q=80&w=1000&auto=format&fit=crop',
    tags: ['Breakfast', 'Brunch', 'Comfort Food'],
  },
  {
    id: '6',
    title: 'Cauliflower Soup',
    slug: 'cauliflower-soup',
    category: 'Global',
    description: 'A creamy, comforting soup without any heavy cream. Perfect for a light dinner.',
    cookTime: '35 mins',
    servings: 4,
    ingredients: ['Cauliflower', 'Onion', 'Garlic', 'Vegetable broth', 'Olive oil', 'Thyme'],
    instructions: [
      'Saute onions and garlic in olive oil until soft.',
      'Add chopped cauliflower and vegetable broth.',
      'Simmer until cauliflower is very tender (about 20 mins).',
      'Blend until smooth. Season with salt, pepper, and fresh thyme.',
    ],
    image:
      'https://images.unsplash.com/photo-1619582539958-e0454790089e?q=80&w=1000&auto=format&fit=crop',
    tags: ['Soup', 'Healthy', 'Vegan'],
  },
  {
    id: '7',
    title: 'Mexican Quinoa Skillet',
    slug: 'mexican-quinoa-skillet',
    category: 'Fusion',
    description: 'A one-pan meal packed with protein and flavor. Great for busy weeknights.',
    cookTime: '30 mins',
    servings: 4,
    ingredients: ['Quinoa', 'Black beans', 'Corn', 'Bell peppers', 'Tomatoes', 'Cumin', 'Chili powder', 'Avocado'],
    instructions: [
      'Saute peppers and onions in a large skillet.',
      'Add quinoa, beans, corn, tomatoes, and spices.',
      'Add vegetable broth and bring to a boil.',
      'Cover and simmer until quinoa is cooked. Top with avocado and lime.',
    ],
    image:
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000&auto=format&fit=crop',
    tags: ['Dinner', 'One-Pot', 'Mexican'],
  },
  {
    id: '8',
    title: 'Pesto Pasta',
    slug: 'pesto-pasta',
    category: 'Global',
    description: 'A classic dish that comes together in minutes. Homemade pesto makes all the difference.',
    cookTime: '20 mins',
    servings: 4,
    ingredients: ['Pasta', 'Fresh basil', 'Pine nuts', 'Parmesan cheese', 'Garlic', 'Olive oil'],
    instructions: [
      'Cook pasta according to package directions.',
      'Blend basil, pine nuts, parmesan, garlic, and oil to make pesto.',
      'Toss hot pasta with the fresh pesto.',
      'Serve with extra parmesan and freshly cracked pepper.',
    ],
    image:
      'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=1000&auto=format&fit=crop',
    tags: ['Dinner', 'Italian', 'Vegetarian'],
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
