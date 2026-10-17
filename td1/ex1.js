
const destinations = [
  { ville: "Paris", prix: 1200 },
  { ville: "Lyon", prix: 1800 },
  { ville: "Marseille", prix: 1400 }
];

destinations.forEach(d => console.log(d.ville));
const villes = destinations.map(d => d.ville);
const abordables = destinations.filter(d => d.prix < 1500);
console.log(abordables);

