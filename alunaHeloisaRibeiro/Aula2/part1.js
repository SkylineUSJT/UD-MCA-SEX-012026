let flores = [
    "Lírios", "Rosas", "Orquídeas", "Girassóis", "Margaridas", 
    "Tulipas", "VIoletas", "Gérberas", "Lisianthus", "Hortências", 
    "Lavanda", "Antúrios", "Astromélias", "Crisântemos", "Bromélias", 
    "Flor-de-Maio", "Onze-horas", "Ipê", "Jasmim", "Peônias"
];

/* A) Elementos nas posições 0, 7, 11, 15, 18 e 20 */
// Nota: O índice 20 retornará 'undefined' pois o array tem 20 elementos (índices de 0 a 19)
console.log(flores[0]);
console.log(flores[7]);
console.log(flores[11]);
console.log(flores[15]);
console.log(flores[18]);
console.log(flores[20]); 

/* B) Penúltima e última posição */
console.log(flores[flores.length - 2]);
console.log(flores[flores.length - 1]);

/* C) Quantos elementos existem? */
console.log(flores.length);

/* D) Adicionar novo elemento */
flores.push("Dália");

/* E) Imprimir usando for */
for (let i = 0; i < flores.length; i++) {
    console.log(flores[i]);
}