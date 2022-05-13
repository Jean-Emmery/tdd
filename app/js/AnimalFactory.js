class Dog {
    constructor(props) {
        this.animalType = "dog"
        this.props = props
    }
}
class Cat {
    constructor(props) {
        this.animalType = "cat"
        this.props = props
    }
}
class Elephant {
    constructor(props) {
        this.animalType = "elephant"
        this.props = props
    }
}
class AnimalFactory {
    constructor(type, props) {
        if (type === "dog")
            return new Dog(props)
        if (type === "cat")
            return new Cat(props)
        if (type === "elephant")
            return new Elephant(props)
    }
}
export { Dog, Cat, Elephant, AnimalFactory };