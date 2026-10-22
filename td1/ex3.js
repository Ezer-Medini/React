const pays = ["France", "Italie", "Japon", "Grèce", "Tunisie"];
const [p1,p2] = pays;
const[, , troisieme] = pays;
const[destinationPrincipale, ...autrespays] = pays;
const voyage = {destination: "Paris", prix: 1200, duree: 10,transport: "avion", hotel: "5 étoiles"  };
const{destination , prix} = voyage;
const{destination : ville} = voyage;
const{prix: prixVoyage = 1000,duree = 5} = voyage;

function afficherVoyage({ destination, prix, duree, transport, hotel }) {
  console.log(`destination: ${destination}`);
  console.log(`prix: ${prix} DT`);
  console.log(`duree: ${duree} jours`);
  console.log(`transport: ${transport}`);
  console.log(`hotel: ${hotel}`);
}

afficherVoyage(voyage);