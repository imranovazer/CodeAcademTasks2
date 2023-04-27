const footballer = {
    fullName: 'Cristiano Ronaldo',
    attack: function () {
        console.log(`${this.fullName} is now with the ball and starting to attack!`);
    },
    scoreGoal(sound) {
        console.log(`${this.fullName} scored a goal! Wow!`);
        this.celebrate(sound);
    },
    celebrate(sound) {
        console.log(sound);
    },
    goToSubstitution: function (newPlayer) {
        console.log(`${this.fullName} goes to replace. ${newPlayer} enters the field`);
    }
}

const attack = footballer.attack.bind(footballer);
const score = footballer.scoreGoal;
const substitute = footballer.goToSubstitution;
attack()
score.call(footballer, 'Siiii');
substitute.apply(footballer, ['Paulo Dibala']);
