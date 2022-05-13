import { AnimalFactory, Cat, Dog, Elephant } from '../js/AnimalFactory.js';
test('shoud return instance of Dog', () => {
    let result = new AnimalFactory('dog');
    expect(result).toBeInstanceOf(Dog);
})
test('shoud return instance of Cat', () => {
    let result = new AnimalFactory('cat');
    expect(result).toBeInstanceOf(Cat);
})
test('shoud return instance of Elephant', () => {
    let result = new AnimalFactory('elephant');
    expect(result).toBeInstanceOf(Elephant);
})
