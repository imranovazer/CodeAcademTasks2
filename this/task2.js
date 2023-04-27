const dog = {
    name: 'Charlie',
    type: 'Dog',
    makeSound() {
        return 'Wow-Wow'
    }
}

const bird = {
    name: 'Petya',
    type: 'Sparrow',
    makeSound() {
        return 'Cheek-chirp';
    }
}
function makeDomestic(isDomestic) {
    console.log(`${this.type} by  name ${this.name} says ${this.makeSound()}`)

    return {
        name: this.name
        , type: this.type,
        makeSound: this.makeSound,
        isDomestic: isDomestic
    }
}
const domesticDog = makeDomestic.bind(dog, true)();
console.log(domesticDog);


const domesticBirdCall = makeDomestic.call(bird, true);
console.log(domesticBirdCall);


const domesticBirdApply = makeDomestic.apply(bird, [true]);
console.log(domesticBirdApply);