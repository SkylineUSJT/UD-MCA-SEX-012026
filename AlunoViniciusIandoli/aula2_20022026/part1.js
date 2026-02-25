let frutas = [
    "Maçã", "Banana", "Laranja", "Uva", "Manga",
    "Pera", "Abacaxi", "Melancia", "Kiwi", "Morango",
    "Limão", "Cereja", "Ameixa", "Mamão", "Coco",
    "Goiaba", "Caqui", "Figo", "Maracujá", "Tangerina"
];

/* A) Elementos nas posições 0,7,11,15,18 e 20 /** */
console.log(frutas[0]);
console.log(frutas[7]);
console.log(frutas[11]);
console.log(frutas[15]);
console.log(frutas[18]);
console.log(frutas[20]);

/* B) Penultima e ultima posição /** */
console.log(frutas[frutas.length - 2]);
console.log(frutas[frutas.length - 1]);

/* C) Quantos elementos existem? /** */
console.log(frutas.length);

/* D) Adicionar novo elemento /** */
frutas.push("Pitaya");

/* E) Imprimir usando for /** */
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}
