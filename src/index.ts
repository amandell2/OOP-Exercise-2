/* EXTRA PRACTICE
 Start OOP Exercise 2
    Create TS Project from scratch with Jest tests. 
 For now, complete the Racer interface, SolarCar class and findRacersWithEmptyFuel Function.
    Skip tests for now.
 Use an index.ts file to test your findRacersWithEmptyFuel and declare instances of SolarCar and Racer.
 Do not forget to import necessary interfaces, functions and classes!
 Call findRacersWithEmptyFuel with an array mixed with Racer types and SolarCar instances. 
 (not in the assignment but only for exercise today) in index.ts.
*/ 

import { Racer } from './Racer';
import { SolarCar } from './SolarCar';
import { findRacersWithEmptyFuel } from './racer-functions';

//EXTRA EXERCISE IN CLASS
let racerArray: Racer[]= []; 

let solarCar1: SolarCar = new SolarCar("Blue");
let racer1: Racer = {
   team: "Red", 
   speed: 80, 
   accelerate(): void{
      this.speed++
   }, 
   isFuelEmpty(): boolean {
      return true;
   }
}

solarCar1.accelerate();
solarCar1.accelerate();
solarCar1.accelerate();
solarCar1.accelerate();
racer1.accelerate();

racerArray.push(solarCar1);
racerArray.push(racer1);

console.log(findRacersWithEmptyFuel(racerArray));


