// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack () {
        return this.strength;
    }
    receiveDamage (damage) {
        this.health = this.health - damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super (health, strength);
        this.name = name;
    }
    attack () {
        return super.attack();
    }
    receiveDamage (damage) {
        this.health = this.health - damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else { 
            return `${this.name} has died in act of combat`;
        }
    }
    battleCry () {
        return `Odin Owns You All!`;
    }
}

// Saxon
class Saxon extends Soldier {
    attack () {
        return super.attack();
    }
    receiveDamage (damage) {
        this.health = this.health - damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } else { 
            return `A Saxon has died in combat`;
        }
    }
}

// War
class War {
    vikingArmy = []; 
    saxonArmy = []; 
    addViking (viking) {
        this.vikingArmy.push(viking);
    }
    addSaxon (saxon) {
        this.saxonArmy.push(saxon);
    }
    vikingAttack(){
        Saxon.receiveDamage() = Viking.strength;
        if (Saxon.health <= 0) {
            this.saxonArmy.pop(saxon);
        }
        return receiveDamage(Viking.strength);
    }
    saxonAttack(){
        Viking.receiveDamage() = Saxon.strength;
        for (i = 0; i < this.vikingArmy.length; i++) {
            if (Viking.health <= 0) {
                this.vikingArmy.splice(i,1);
            }
        }
        return receiveDamage(Saxon.strength);
    };
    showStatus(){
        ;
    }
}
