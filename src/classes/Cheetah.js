class Cheetah {
  constructor() {
    this.noOfLegs = "no.of legs for cheetah are 4";
    this.noOfEars = "no.of Ears for cheetah are 2";
    this.noOfEyes = "no.of Eyes for cheetah are 2";
  }
  eatingBehaviour = () => {
    console.log("Tiger hunts the deers and other animals to eat");
  };
  punchPower = () => {
    console.log(
      "A tiger's paw swipe can have a force of up to 4,500 kilograms."
    );
  };
  facingHuman = () => {
    console.log("Cheetah attacks Humans when they have faced each other");
  };

  result = () => {
    console.log("function with no parameters");
  };

  result = (a) => {
    console.log("function with one parameters");
  };

  result = (a) => {
    console.log("function with two parameters");
  };

  result = (a, b, c) => {
    console.log("function with three parameters");
  };

  result = (a, b, c, d) => {
    console.log("function with four parameters");
  };
}
export default Cheetah;
