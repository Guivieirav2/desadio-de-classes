// Classe que representa um herói de aventura
class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo.toLowerCase(); // garantir letras minúsculas
    }
  
    atacar() {
      let ataque = "";
  
      if (this.tipo === "mago") {
        ataque = "magia";
      } else if (this.tipo === "guerreiro") {
        ataque = "espada";
      } else if (this.tipo === "monge") {
        ataque = "artes marciais";
      } else if (this.tipo === "ninja") {
        ataque = "shuriken";
      } else {
        ataque = "um ataque indefinido";
      }
  
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Exemplos de uso
  const heroi1 = new Heroi("Aragorn", 35, "guerreiro");
  const heroi2 = new Heroi("Merlin", 70, "mago");
  const heroi3 = new Heroi("Liu Kang", 30, "monge");
  const heroi4 = new Heroi("Hanzo", 28, "ninja");
  
  heroi1.atacar();
  heroi2.atacar();
  heroi3.atacar();
  heroi4.atacar();