import "./App.css";

import Cheetah from "./classes/Cheetah";
import Cat from "./classes/Cat";

function App() {

  let chiruta = new Cheetah();
 let meow = new Cat();
meow.noOfEars=2;
meow.noOfLegs = 4;
meow.eatingBehaviour();
chiruta.eatingBehaviour();

meow.facingHuman();
chiruta.facingHuman();

meow.punchPower();
chiruta.punchPower();

console.log(meow.noOfLegss);
console.log(meow.noOfEyess);
console.log(meow.noOfEarss);

console.log(chiruta.noOfLegs);
console.log(chiruta.noOfEyes);
console.log(chiruta.noOfEars);

chiruta.result(1);
   return (
    <div className="App">
      <h1 className="h1"><u><a href="./App.js #firstSub">Inheritance</a>,<a href="./App.js #secSub">Polymorphism</a>,<a href="./App.js #thirdSub">Encapsulation</a>,<a href="./App.js #fourthSub">Composition</a></u></h1>
      <br></br>
<div className="mainDiv">
<div className="div1">
      <h2 className="h2" id="firstSub"><strong><u>Inheritance:-</u></strong></h2>
      <p>In programming, inheritance refers to passing down characteristics from a parent to a child so that a new piece of code can reuse and build upon the features of an existing one. JavaScript implements inheritance by using objects. Each object has an internal link to another object called its prototype</p>
      <br></br>
      <h2 className="h2">(OR)</h2>
      <p><h3 className="h3">What is inheritance and example?</h3>
        <br></br>
Inheritance in OOPs By Logicmojo
Inheritance is a technique of modelling real-world relationships, and OOP is all about real-world objects. Here's an example: a car, a bus, and a bicycle all fall under the umbrella term "vehicle." That is, they have inherited the attributes of the vehicle class, implying that they are all utilised for transportation.</p>
    </div>

    <div className="div2">
      <h2 className="h2" id="secSub"><u>Polymorphism:-</u></h2>

      <p>Polymorphic functions in JavaScript are functions that can accept arguments of different types and adapt their behavior based on the actual types of the arguments. This flexibility allows the same function to work with various data types, promoting code reusability and versatility.</p>
      <h2 className="h2">(OR)</h2>
      <p><h3 className="h3">What is polymorphism and its example?</h3>
      The word polymorphism means having many forms. In simple words, we can define polymorphism as the ability of a message to be displayed in more than one form. Real life example of polymorphism, a person at the same time can have different characteristic. Like a man at the same time is a father, a husband, an employee.</p>
    
    
    </div>

    <div className="div3">
      <h2 className="h2" id="thirdSub"><u>Encapsulation:-</u></h2>
    <p>Encapsulation can be defined as “the packing of data and functions into one component”. Packing, which is also known as bundling, grouping, and binding, simply means bringing together data and the methods that operate on data. The component can be a function, a class, or an object</p>
    <h2 className="h2">(OR)</h2>
    <p><h3 className="h3">What is encapsulation with example?</h3>
    Encapsulation in Java is a process of wrapping code and data together into a single unit, for example, a capsule which is mixed of several medicines. We can create a fully encapsulated class in Java by making all the data members of the class private.</p>
    </div>

    <div className="div4">
    <h2 className="h2" id="fourthSub"><u>Composition:-</u></h2>
    <p>In functional programming, function composition is the process of combining multiple functions to produce a new function. This technique is used heavily in functional programming, but it can also be used in imperative programming.</p>
    <h2 className="h2">(OR)</h2>
    <p><h3 className="h3">What is composition of functions examples?</h3>
    For example, if we let f be the function given by f(x) = x2 and let g be the function given by g(x) = x + 3, then the composition of g with f is called gf and is worked out as gf(x) = g(f(x)) . gf(x) = g(f(x)) = g(x2) = x2 + 3 .</p>
    </div>
</div>
    </div>
  );
}

export default App;
