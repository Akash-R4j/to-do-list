// import React from "react";
// import ReactDOM from "react-dom";
// import cars from "./components/practice";

// const [honda, tesla] = cars;

// const {
//   speedStats: { topSpeed: hondaTopSpeed }
// } = honda;
// const {
//   speedStats: { topSpeed: teslaTopSpeed }
// } = tesla;

// const {
//   coloursByPopularity: [hondaTopColour]
// } = honda;
// const {
//   coloursByPopularity: [teslaTopColour]
// } = tesla;

// ReactDOM.render(
//   <table>
//     <tr>
//       <th>Brand</th>
//       <th>Top Speed</th>
//       <th>Top Colour</th>
//     </tr>
//     <tr>
//       <td>{tesla.model}</td>
//       <td>{teslaTopSpeed}</td>
//       <td>{teslaTopColour}</td>
//     </tr>
//     <tr>
//       <td>{honda.model}</td>
//       <td>{hondaTopSpeed}</td>
//       <td>{hondaTopColour}</td>
//     </tr>
//   </table>,
//   document.getElementById("root")
// );

//import animals, {useAnimals} from "./data";

// //Destructuring Arrays
// // console.log(animals);
//const [cat, dog] = animals;
// // console.log(cat);

//const [animal, makeSound] = useAnimals(cat);
// console.log(animal);
// makeSound();

// //Destructuring Objects
//const {name, sound, feedingRequirements} = cat;
//const {name, sound, feedingRequirements :{food, water}} = cat;
// // console.log(food);


// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

//CHALLENGE: Make this app work by applying what you've learnt.
//1. When new text is written into the input, its state should be saved.
//2. When the add button is pressed, the current data in the input should be
//added to an array.
//3. The <ul> should display all the array items as <li>s
