// Variáveis de entrada
let nome = "Arthas";  // pode trocar por gets() se estiver no ambiente de avaliação
let xp = 7500;        // pode trocar por gets() também (lembrando de converter para número)

// Variável para guardar o nível
let nivel = "";

// Estrutura de decisão
if (xp < 1000) {
  nivel = "Ferro";
} else if (xp <= 2000) {
  nivel = "Bronze";
} else if (xp <= 5000) {
  nivel = "Prata";
} else if (xp <= 7000) {
  nivel = "Ouro";
} else if (xp <= 8000) {
  nivel = "Platina";
} else if (xp <= 9000) {
  nivel = "Ascendente";
} else if (xp <= 10000) {
  nivel = "Imortal";
} else {
  nivel = "Radiante";
}

// Saída final
console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
