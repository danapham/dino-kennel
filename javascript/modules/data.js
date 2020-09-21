const dinos = [
  {
    name: 'Rex',
    type: 'T Rex',
    age: 100,
    owner: 'Jacob',
    adventures: [],
    health: 92,
    imageUrl: 'images/dino14.png'
  },
  {
    name: 'Steve',
    type: 'Velociraptor',
    age: 1,
    owner: 'Jacob',
    adventures: [],
    health: 1,
    imageUrl: 'images/dino2.png'
  },
  {
    name: 'Susan',
    type: 'stegosaurus',
    age: 55,
    owner: 'Jacob',
    adventures: [],
    health: 0,
    imageUrl: 'images/dino3.jpg'
  },
  {
    name: 'Barry',
    type: 'Brontosaurus',
    age: 100,
    owner: 'Abbey',
    adventures: [],
    health: 100,
    imageUrl: 'images/dino4.jpg'
  },
  {
    name: 'Steph',
    type: 'Spinosaurus',
    age: 100,
    owner: 'Dr. T',
    adventures: [],
    health: 75,
    imageUrl: 'images/dino5.png'
  },
  {
    name: 'Tim',
    type: 'Talarurus',
    age: 100,
    owner: 'Dr. T',
    adventures: [],
    health: 55,
    imageUrl: 'images/dino6.png'
  },
  {
    name: 'Tracy',
    type: 'Triceratops',
    age: 100,
    owner: 'Abbey',
    adventures: [],
    health: 0,
    imageUrl: 'images/dino7.png'
  },
  {
    name: 'Percy',
    type: 'Pterodactyl',
    age: 10,
    owner: 'Jacob',
    adventures: [],
    health: 10,
    imageUrl: 'images/dino9.png'
  },
  {
    name: 'Betty',
    type: 'brontosaurus',
    age: 22,
    owner: 'Dr. T',
    adventures: [],
    health: 22,
    imageUrl: 'images/dino11.png'
  }
];

const adventures = [
  {
    id: 'adventure1',
    title: 'BRAWL',
    healthHit: 50
  },
  {
    id: 'adventure2',
    title: 'Cave exploration',
    healthHit: 10
  },
  {
    id: 'adventure3',
    title: 'Ropes course',
    healthHit: 13
  },
  {
    id: 'adventure4',
    title: 'Playing in traffic',
    healthHit: 3
  },
  {
    id: 'adventure5',
    title: 'Baking',
    healthHit: 70
  },
  {
    id: 'adventure6',
    title: 'Welding',
    healthHit: 4
  },
  {
    id: 'adventure7',
    title: 'Underwater Basket Weaving',
    healthHit: 99
  },
  {
    id: 'adventure8',
    title: 'Surfing',
    healthHit: 39
  },
  {
    id: 'adventure9',
    title: 'Fishing',
    healthHit: 23
  },
  {
    id: 'adventure10',
    title: 'Shot from a cannon',
    healthHit: 60
  }
];

const getDinos = () => {
  return dinos;
}

const getAdventures = () => {
  return adventures;
}

export { getDinos, getAdventures }
