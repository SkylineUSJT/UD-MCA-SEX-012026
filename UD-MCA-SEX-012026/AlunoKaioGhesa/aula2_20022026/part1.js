let jogos = [
    "Doom", "Tetris", "Pong", "Hades", "Portal", 
    "Zelda", "Limbo", "Halo", "Fez", "Spore", 
    "Rust", "Dota 2", "Sims", "Snake", "Inside", 
    "Valorant", "Sekiro", "Journey", "Roblox", "Minecraft"
];

/* A) Elementos nas posições 0, 7, 11, 15, 18 e 20 */
// Nota: O índice 20 retornará 'undefined' pois o array tem 20 elementos (índices de 0 a 19)
console.log(jogos[0]);
console.log(jogos[7]);
console.log(jogos[11]);
console.log(jogos[15]);
console.log(jogos[18]);
console.log(jogos[20]); 

/* B) Penúltima e última posição */
console.log(jogos[jogos.length - 2]);
console.log(jogos[jogos.length - 1]);

/* C) Quantos elementos existem? */
console.log(jogos.length);

/* D) Adicionar novo elemento */
jogos.push("Outer Wilds");

/* E) Imprimir usando for */
for (let i = 0; i < jogos.length; i++) {
    console.log(jogos[i]);
}