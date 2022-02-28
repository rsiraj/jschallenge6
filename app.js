class Pokemon{
    constructor(name, type, attack){
        this.name = name,
        this.type = type, 
        this.attack =attack
    }
    moveAttack = () =>{
        console.log(`${this.name} used ${this.attack}!`)
    }
}

const Pikachu = new Pokemon("Pikachu", "Electric", "Thunderbolt");
const Squirtle = new Pokemon("Squirtle", "Water", "Hydro Pump");
Pikachu.moveAttack();
Squirtle.moveAttack();