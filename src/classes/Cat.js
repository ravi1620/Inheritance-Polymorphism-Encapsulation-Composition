import Cheetah from "./Cheetah";

class Cat extends Cheetah{
constructor(){
    super();
    this.noOfLegss = ("no.of legs for cat are 4");
    this.noOfEarss = ("no.of Ears for cat are 2");
    this.noOfEyess = ("no.of Eyes for cat are 2");
}

eatingBehaviour=()=>{
    console.log("Cats hunts rats to eat");
}

punchPower=()=>{
    console.log("Punch power of cat is 70 PSI.")
}

facingHuman=()=>{
    console.log("Cat run away from Humans");
}

}
export default Cat;