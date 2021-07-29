Vue.component('my-component', {
  template: '#my-component',
  props: ['gameCard'],
  data: function () {
    return {      
		Plants: ["Seaweed", "Fern", "Cacti", "Vine: Ivy", "Vine: Grape", "Wild flowers", "Domestic flower", "Vine: Creeper", "Poppy", "Grass", "Bamboo", "Carnivores", "Flower: Tropical", "Asparagus", "Pinecone", "Berry", "Fruit Tree; Apple",  "Fruit Tree; Cherry",  "Bean", "Pumpkin", "Gourd", "Broccoli", "Artichoke", "Corn", "Grain", "Wheat", "Pineapple", "Peanut", "Potato", "Shrub", "Moss", "Ooze", "Jelly", "Lichen", "Mold", "Mushroom", "Willow", "Birch", "Maple", "Oak", "Banyan", "Pine", "Palm"],
		Animal: ["Mollusk", "Crab", "Lobster", "Squid", "Mudskipper", "Octopus", "Fish: Deep Sea", "Fish: Tropical", "Fish: Freshwater", "Whale", "Dolphin", "Snail", "Eel", "Leech", "Coral", "Nautilus", "Anemone", "Shark", "Ray", "Worm", "Ant", "Mosquito", "Moth", "Butterfly", "Fly", "Dragonfly", "Lotus", "Mantis", "Bee", "Wasp", "Caterpillar", "Beetle", "Scarab", "Flea", "Mite", "Spider", "Grub", "Sheep", "Cow", "Bull", "Mouse", "Rabbit", "Pig", "Boar", "Deer", "Caribou", "Ram", "Buck", "Elephant", "Giraffe", " Hippopotamus ", "Weasel/ Ferret", "Badger", "Hamster", "Bat", "Bear", "Wild Dog", "Domestic Dog", "Horse/ Zebra", "Wolf", "Coyote", "Feline: Domestic", "Feline: Tiger", "Feline: Wild", "Primate", "Crocodile/ Alligator", "Gila", "Frog", "Newt", "Lizard", "Snake", "Turtle", "Wild Fowl/ Duck", "Chicken", "Rooster", "Penguin", "Seagull", "Pelican", "Raven", "Sparrow", "Blue Jay", "Cardinal", "Tropical Bird: Parrot", "Heron", "Bird of prey", "Hawk", "Owl", "Eagle", "Falcon"],
		Element: ["Fire", "Vapor", "Electrical", "Ember", "Hot Coal", "Molten Lava", "Plasma", "Icicles", "Fog", "Vapor", "Wave", "Dewdrops", "Ripple", "Frost", "Son", "Ice", "Snow drift", "Suds", "Bubbles", "Tar", "Gum", "Malachite", "Mountain", "Cliff face", "Brick", "Cobblestone", "Rust/oxide", "Fresh Clay", "Cracked Clay", "Stalactite", "Stalagmite", "Glass", "Crystal", "Quarts", "Powder", "Sand", "Dust", "Slate", "Shale", "Cement", "Sediment", "Mercury", "Chrome", "Moon cycles", "Star Field", "Crater", "Asteroid", "Solar Flare", "Gas giant", "Star", "Galaxy form", "Volcano", "Abyss", "Planets", "Saturn Rings", "Cloud", "Cyclone", "Rain", "Hail"],
		Tech: ["Car / Truck", "Wheel", "Crane", "Aircraft", "Rail", "Steam Engine", "Gas Engine", "Trolley", "Cycle", "Sled", "Ski", "Boat", "Skip" ,"Skiff", "Spaceship", "Plane", "Fighter lane", "Jet fighter", "Star fighter", "Tank", "Tread", "Ornament", "Gargoyle", "Award/ metal", "Bridge ", "Framework", "Castel", "Domed", "Pillar", "Statue", "Skyscraper", "Place of worship", "Totem", "Doorway", "Archway", "Old village", "Town", "City", "Cottage", "Crypt", "Dungeon", "Graveyard", "Tombstone", "Sarcophagus", "Coffin", "Drill", "Dinning ware; cup, plates", "Umbrella", "Broom", "Mop", "Bundle / Bale", "Hammer", "Axe", "Nails", "Brush", "Razor", "Spigot", "Faucet", "Rope", "Silverware", "Bo", "Lock", "Key", "Explosives", "Switch", "Dial", "Button", "Turbine", "Bulb", "Lamp", "Clock", "Transistor", "Resistor", "Microchip", "Clocks /gears", "Spring", "Fan", "Propellers", "Saw", "Ores", "Sail", "Adhesive", "Bandage", "Shovel", "Pike", "Capsule", "Table", "Nuts & Bolts", "Chain", "Thread Stitch", "Shears", "Scissors", "Pen", "Paintbrush", "Canvas", "Coil", "Syringe", "Tube", "Plumbing", "Pump", "Well", "Reactor Core", "Flux Capacitor", "Retro Telephone", "Phone both", "Solar Panel", "Barrel", "Engine", "Wagon", "Laser beam", "Dish antenna", "Rocket", "Antenna", "Silk", "Blade", "Lamp", "Bag", "Wool", "Canvas", "Hot air Balloon / Zeppelin", "Cotton"],
		Emotion: ["Embarrassed", "Anger", "Timed", "Bashful", "Giggle", "Smiling", "Squint", "Wink", "Bored", "Stressed", "Fatigued", "Fear", "Thought", "Meditate", "Deadpan", "Deep Thought", "Horny", "Insane", "Bloodlust", " Berserking", "Insane Happy", "Blissful", "Content", "Happy", "Laughing", "Laughing Hysterically", "Shocked", "Up to Something / No Good", "Stern", "Grumpy", "Pissed", "Clenched Teeth", "Vein Popping", "Confused", "Gawk", "Relief", "Overjoyed", "Sneering", "Paranoid", "Shifty", "Joy", "In Pain", "Hot", "Cold", "Relaxed", "Stuffed"],
		Action: ["Recoil", "Akimbo", "Drenched", "Thirst", "Cold", "Hot"," Sweating", "Blown by heavy Winds"," Push", "Pull", "Snoop", "Listen", "Steal", "Crouched for Attack", "Hang", "Climb", "Float", "Levitate", "Fly", "Falling", "Swinging", "Swinging weapon", "Stretching", "Eating / Drinking", "Sleeping", "Kicking", "Punching", "Tackle", "Squeeze", "Absorb", "Limp", "Injured", "Dyeing", "Dead", "Curse / Swear", "Run", "Jump", "Skip", "Melt", "Glow", "Burn", "Drown", "Rescue", "Comfort", "Stick", "Trapped", "Shoot", "Stab", "Block", "Parry", "Gaunt", "Swim", "Dive", "Shed", "Molting", "Chant", "Pray", "Meditate", "Recite", "Learning", "Teaching", "Farming", "Hunting", "Building/ Fixing", "Caring", "Cooking", "Blacksmithing", "Craw / Emerge", "Survive", "Training"]
    }
  },
  methods: {
    basicCard() {
	  var A = Math.floor(Math.random() * this.Animal.length);
	  var P = Math.floor(Math.random() * this.Plants.length);
	  var E = Math.floor(Math.random() * this.Element.length);
	  var T = Math.floor(Math.random() * this.Tech.length);
	  
      const r = () => Math.floor(256 * Math.random());
	  var car = "<ul id=\"sheet\">Chose a Major Form:";
	  card = card + "<li><input type=\"checkbox\" name=\"majorform\" value=\" \" />";
	  card = card + "<b>Animal Type:</b><span id=\"animal\">" + A "</span></li>";
	  card = card + "<li><input type=\"checkbox\" name=\"majorform\" value=\"\" />";
	  card = card + "Plant Type:<span id=\"plant\">" + P "</span></li>";
      card = card + "<li><input type=\"checkbox\" name=\"majorform\" value=\"\" />";
	  card = card + "Element Type:<span id=\"element\">" + E "</span></li>";
	  card = card + "<li><input type=\"checkbox\" name=\"majorform\" value=\"\" />";
	  card = card + "Technology Type:<span id=\"tech\">" + T "</span></li>";
	  card = card + "</ul>";
      return card;
    },
	buildingCard() {},
	creatureCard(){},
	humanoidCard(){},
	itemWeaponCard(){},
	transportationCard(){}
  }
}