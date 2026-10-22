const reservations = [
  { numero: 101, client: "Nadia", destination: "Bali", montant: 1800, statut: "Confirmée" },
  { numero: 102, client: "Karim", destination: "Rome", montant: 950, statut: "En attente" },
  { numero: 103, client: "Leila", destination: "Tokyo", montant: 2500, statut: "Confirmée" },
  { numero: 104, client: "Sami", destination: "Santorin", montant: 1200, statut: "Annulée" },
  { numero: 105, client: "Amira", destination: "Djerba", montant: 500, statut: "Confirmée" }
];

const confirmees = reservations.filter(r => r.statut === "Confirmée");
console.log(confirmees);
const clients = reservations.map(r => r.client);
const res103 = reservations.find(r => r.numero === 103);
const totaleConfirme = confirmees.reduce((somme, r) => somme + r.montant, 0);
const toutesConfirmees = reservations.every(r => r.statut === "Confirmée");
const clientVoyages = reservations.map(r => ({
  client: r.client,
    voyages: r.destination
}));
console.log("Clients:", clients);
console.log("Réservation 103:", res103);
console.log("Total confirmées:", totaleConfirme);
console.log("Toutes confirmées ?", toutesConfirmees);
console.log("Clients et voyages:", clientVoyages);
