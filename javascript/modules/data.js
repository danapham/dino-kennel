const dinos = [
  {
    name: 'Rex',
    type: 'T Rex',
    age: 100,
    owner: 'Jacob',
    adventures: [],
    health: 92,
    imageUrl: 'https://www.fieldandstream.com/resizer/8xkluKAxQZsEHJKj6qwyU0mLhTo=/760x448/filters:focal(458x270:459x271)/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/TQFN3CD5DAEM4DL2ACD42ZJ5E4.png'
  },
  {
    name: 'Steve',
    type: 'Velociraptor',
    age: 1,
    owner: 'Jacob',
    adventures: [],
    health: 1,
    imageUrl: 'https://i.ebayimg.com/images/g/61UAAOSweNpdmtI2/s-l640.png'
  },
  {
    name: 'Susan',
    type: 'stegosaurus',
    age: 55,
    owner: 'Jacob',
    adventures: [],
    health: 0,
    imageUrl: 'https://cdn.mos.cms.futurecdn.net/owYTb9X5fKpeBhgiaxD73b-320-80.jpg'
  },
  {
    name: 'Barry',
    type: 'Brontosaurus',
    age: 100,
    owner: 'Abbey',
    adventures: [],
    health: 100,
    imageUrl: 'https://luksusbaby.com/images/schleich-tyrannosaurus-rex-juvenile-dinosaur-15007-p.png'
  },
  {
    name: 'Steph',
    type: 'Spinosaurus',
    age: 100,
    owner: 'Dr. T',
    adventures: [],
    health: 75,
    imageUrl: 'https://cdn1.bigcommerce.com/n-yp39j5/ujq6o/products/1060/images/2390/Papo_Spinosaurus_2019_DansDinosaurs__69805.1552618774.1280.1280.jpg?c=2'
  },
  {
    name: 'Tim',
    type: 'Talarurus',
    age: 100,
    owner: 'Dr. T',
    adventures: [],
    health: 55,
    imageUrl: 'https://vignette.wikia.nocookie.net/dinosaurs/images/2/2b/TalarurusInfobox.png/revision/latest/scale-to-width-down/340?cb=20150512165226'
  },
  {
    name: 'Tracy',
    type: 'Triceratops',
    age: 100,
    owner: 'Abbey',
    adventures: [],
    health: 0,
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81Wsvp2M7iL._AC_SX425_.jpg'
  },
  {
    name: 'Percy',
    type: 'Pterodactyl',
    age: 10,
    owner: 'Jacob',
    adventures: [],
    health: 10,
    imageUrl: 'https://images.dinosaurpictures.org/3_pterodactyl_63be.jpg'
  },
  {
    name: 'Betty',
    type: 'brontosaurus',
    age: 22,
    owner: 'Dr. T',
    adventures: [],
    health: 22,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTOdrC7hlvBawFQ7g8vgwHcfQphX5WfeN2bth0dvc4M2oxNGdSD'
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
