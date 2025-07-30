const quotes = [
  "La vie est un mystère qu'il faut vivre, et non un problème à résoudre.",
  "Le succès n’est pas final, l’échec n’est pas fatal : c’est le courage de continuer qui compte.",
  "Il n’y a qu’une façon d’échouer, c’est d’abandonner avant d’avoir réussi.",
  "Fais de ta vie un rêve, et d’un rêve, une réalité.",
  "Croyez en vous, toujours."
];

function newQuote() {
  const index = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerText = quotes[index];
}
