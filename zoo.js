var animalPopulation = 0;
function run() {
    var tigger = new Tiger("Tigger");
    tigger.eat("meat");

    var pooh = new Bear("Pooh");
    pooh.eat("fish");
    pooh.eat("meat");

    var rarity = new Unicorn("Rarity");
    rarity.eat("marshmallows");
    rarity.sleep();

    var gemma = new Giraffe("Gemma");
    gemma.eat("meat");
    gemma.eat("leaves");

    var stinger = new Bee("Stinger");
    stinger.eat("pollen");
    stinger.sleep();

    var animals = [tigger, pooh, rarity, gemma, stinger];

    var zoebot = new Zookeeper('Jackson');
    zoebot.feedAnimals(animals, 'pasta');

    Animal.getPopulation();


}





class Animal{
    constructor(name, favoriteFood){
        this.name = name;
        this.favoriteFood = favoriteFood;
        animalPopulation++;
    }
    sleep() {
        console.log(this.name + " sleeps for 8 hours");
    }

    eat(food) {
        console.log(this.name + " eats " + food);
        food == this.favoriteFood ? console.log("YUM!!! " + this.name + " wants more " + food) : this.sleep(this.name);
    }
    static getPopulation() {
        return animalPopulation;
    }
}




class Tiger extends Animal {
    constructor(name) {
        super(name, "meat")
    }
}
class Bear extends Animal{
    constructor(name){
        super(name, "fish")
    }

    sleep() {
        console.log(this.name + " hibernates for 4 months");
    }
}
class Unicorn extends Animal {
    constructor(name){
        super(name, "marshmallows")
    }
    sleep() {
        console.log(this.name + " sleeps in a cloud");
    }
}
class Giraffe extends Animal {
    constructor(name){
        super(name, "leaves")
    }
    eat(food){
        if(food == this.favoriteFood){
            super.eat('leaves');
            this.sleep()
        }else {
            console.log("YUCK!!! " + this.name + " will not eat " + food);
        }
    }
}
class Bee extends Animal {
    constructor(name) {
        super(name, "pollen")
    }
    sleep() {
        console.log(this.name + " never sleeps")
    }
}
class Zookeeper {
    constructor(name) {
        this.name = name;
    }

    feedAnimals(animals, food){
    console.log(this.name + " is feeding " + food + " to " + animalPopulation + " total animals");
    for (var i = 0; i < animals.length; i++) {
        animals[i].eat(food);
    }
    }
}

//age < 21 ? serveGrape() : serveWine();

//if(age<21) {
    //grape()
//} else {
    //wine();
//}
    //     sleep("Tigger");
//     eat("Tigger", "meat");
//     eat("Tigger", "bacon");
//     var tigger = new Tiger("Tigger");
//     tigger.eat("meat");
//     tigger.eat("kibble");
// }

// function sleep(name){
//     console.log(name + " sleeps for 8 hours");
//
// }
// var favoriteFood = "bacon";
// function eat(name, food) {
//     console.log(name + " eats " + food);
//     food == this.favoriteFood ? console.log("YUM!!! " + name + " wants more " + food) : this.sleep(this.name);
// }
