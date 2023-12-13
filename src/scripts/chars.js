export class Pokegochi {
  constructor(name = "Charmander") {
    this.name = name;
    this.health = 50;
    this.attack = 10;
    this.defense = 10;
    this.speed = 5;
    this.energy = 100;
    this.experience = 0;
    this.coins = 0;
    this.image = "./src/assets/images/charmander.gif";

    function initiate() {
      setInterval(() => {
        this.health--;
        this.energy--;
      }, 10000);
    }

    initiate.call(this);
  }

  checkHealth() {
    if (this.health <= 0) {
      return `${this.name} is sick!`;
    } else {
      return `${this.name} is good!`;
    }
  }

  walk() {
    if (this.energy >= 5) {
      this.energy -= 5;
      this.health++;
      this.experience += 2;
      this.evolve();

      return `${this.name} is walking!`;
    } else {
      return `${this.name} is so tired for this!`;
    }
  }

  run() {
    if (this.energy >= 10) {
      this.energy -= 10;
      this.speed++;
      this.experience += 5;
      this.evolve();

      return `${this.name} is running!`;
    } else {
      return `${this.name} is so tired for this!`;
    }
  }

  eat(food = 0) {
    if (food > 0) {
      let points = food / 2;

      this.energy = Math.ceil(points);
      this.health = Math.floor(points);
    } else {
      return `This food is not enought!`;
    }
  }

  beat() {
    if (this.energy >= 10) {
      this.energy -= 10;
      this.health -= 8;
      this.attack += 5;
      this.defense += 2;
      this.experience += 3;
      this.coins += Math.floor((Math.random() * this.experience) / 3);
      this.evolve();

      return `${this.name} is beating up!`;
    } else {
      return `${this.name} is so tired for this!`;
    }
  }

  sleep() {
    this.energy += 10;
    this.health += 2;
    return `${this.name} is sleeping!`;
  }

  evolve() {
    if (this.experience > 100) {
      this.image = "./src/assets/images/charmeleon.gif";
    }
    if (this.experience > 150) {
      this.image = "./src/assets/images/charizard.gif";
    }
  }

  status() {
    return `Name: ${this.name},
    Health: ${this.health},
    Attack: ${this.attack},
    Defense: ${this.defense},
    Speed: ${this.speed},
    Energy: ${this.energy},
    Xp: ${this.experience},
    `;
  }
}
