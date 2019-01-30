class Player {
    constructor(firstName, lastName, goals, caps) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.goals = goals;
        this.caps = caps;
    }
    calculateGoalsPerGame() {
        //this is refering to the point of refference
        return ((this.goals / this.caps).toFixed(2));
    }
}


const Messi = new Player("Leo", "Messi", 50, 65);
const CR7 = new Player("Christiano", "Ronaldo", 100, 65);


console.log(Messi.calculateGoalsPerGame());
console.log(CR7.calculateGoalsPerGame());

//  using messi function with ronaldo info
const messiWithRonaldoData = Messi.calculateGoalsPerGame.bind(CR7);
console.log(messiWithRonaldoData());
console.log(Messi.calculateGoalsPerGame.bind(CR7)());
