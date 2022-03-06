import { GasCar } from "../src/GasCar";
import { SolarCar } from "../src/SolarCar";
import { Racer } from "../src/Racer";
import { findAverageSpeed } from "../src/racer-functions";
import { findRacersWithEmptyFuel } from "../src/racer-functions";
import { getFasterRacer } from "../src/racer-functions";

describe("findAverageSpeed function", () =>{

    test("Gas Cars with different speeds", ()=>{
        let racerArray: Racer[] = []
        let car1: GasCar = new GasCar("Team1");
        let car2: GasCar = new GasCar("Team2");
        let car3: GasCar = new GasCar("Team3");
        
        car1.speed=40;
        car2.speed=80;
        car3.speed=20;

        racerArray.push(car1);
        racerArray.push(car2);
        racerArray.push(car3);


        let aveSpeed: number = findAverageSpeed(racerArray);
        expect(aveSpeed).toBeCloseTo(46.666);
    })

    test("Mix of solar and gas with different speeds", ()=>{
        let racerArray: Racer[] = []
        let car1: SolarCar = new SolarCar("Team1");
        let car2: GasCar = new GasCar("Team2");
        let car3: SolarCar = new SolarCar("Team3");
        let car4: GasCar = new GasCar("Team2");

        car1.speed=60;
        car2.speed=80;
        car3.speed=50;
        car4.speed=90;

        racerArray.push(car1);
        racerArray.push(car2);
        racerArray.push(car3);
        racerArray.push(car4);

        let aveSpeed: number = findAverageSpeed(racerArray);

        expect(aveSpeed).toBeCloseTo(70);
    })

    test("Array of cars with all 0 speed", ()=>{
        let racerArray: Racer[] = []
        let car1: SolarCar = new SolarCar("Team1");
        let car2: GasCar = new GasCar("Team2");
        let car3: SolarCar = new SolarCar("Team3");
        let car4: GasCar = new GasCar("Team2");

        car1.speed=0;
        car2.speed=0;
        car3.speed=0;
        car4.speed=0;

        racerArray.push(car1);
        racerArray.push(car2);
        racerArray.push(car3);
        racerArray.push(car4);

        let aveSpeed: number = findAverageSpeed(racerArray);

        expect(aveSpeed).toEqual(0);
    })


    test("Empty Array", ()=>{
        let racerArray: Racer[] = []
        let aveSpeed: number = findAverageSpeed(racerArray);

        expect(aveSpeed).toEqual(0);
    })

})


describe("findRacerWithEmptyFuel Function", () =>{
    test("Some GasCars have no fuel", ()=>{
        let racerArray: Racer[] = []
        let car1: GasCar = new GasCar("Team1", 40);
        let car2: GasCar = new GasCar("Team1", 0);
        let car3: GasCar = new GasCar("Team2", 0);

        racerArray.push(car1);
        racerArray.push(car2);
        racerArray.push(car3);

        let fuelEmptyArray: Racer[] = findRacersWithEmptyFuel(racerArray);

        expect(fuelEmptyArray).toEqual([car2, car3]);
    })

    test("all have no fuel", ()=>{
        let racerArray:  Racer[] = []
        let car1: GasCar = new GasCar("Team1", 0);
        let car2: GasCar = new GasCar("Team1", 0);
        let car3: GasCar = new GasCar("Team2", 0);

        racerArray.push(car1);
        racerArray.push(car2);
        racerArray.push(car3);

        let fuelEmptyArray: Racer[] = findRacersWithEmptyFuel(racerArray);

        expect(fuelEmptyArray).toEqual([car1, car2, car3]);
    })
    

    test("None have no fuel", ()=>{
        let racerArray: Racer[] = []
        let car1: GasCar = new GasCar("Team1");
        let car2: GasCar = new GasCar("Team1", 20);
        let car3: GasCar = new GasCar("Team2", 30);

        racerArray.push(car1);
        racerArray.push(car2);
        racerArray.push(car3);

        let fuelEmptyArray: Racer[] = findRacersWithEmptyFuel(racerArray);

        expect(fuelEmptyArray).toEqual([]);
    })
    

    test("Array of all solarCar class", ()=>{
        let racerArray: Racer[] = []
        let car1: SolarCar = new SolarCar("Team1");
        let car2: SolarCar = new SolarCar("Team2");
        let car3: SolarCar = new SolarCar("Team3");

        racerArray.push(car1);
        racerArray.push(car2);
        racerArray.push(car3);

        let fuelEmptyArray: Racer[] = findRacersWithEmptyFuel(racerArray);

        expect(fuelEmptyArray).toEqual([]);
    })
    

    test("Mix of Solar and Gas car- one gas car with no fuel", ()=>{
        let racerArray: Racer[] = []
        let car1: SolarCar = new SolarCar("Team1");
        let car2: GasCar = new GasCar("Team2");
        let car3: SolarCar = new SolarCar("Team3");
        let car4: GasCar = new GasCar("Team2", 0);

        racerArray.push(car1);
        racerArray.push(car2);
        racerArray.push(car3);
        racerArray.push(car4);

        let fuelEmptyArray: Racer[] = findRacersWithEmptyFuel(racerArray);

        expect(fuelEmptyArray).toEqual([car4]);
    })
    

     test("Empty Array", ()=>{
        let racerArray: Racer[] = []
        let fuelEmptyArray: Racer[] = findRacersWithEmptyFuel(racerArray);

        expect(fuelEmptyArray).toEqual([]);
    })
    
})


describe("getFasterRacer function", () =>{
       
    test("racerA is faster", ()=>{
        let racerA: Racer = {
            team: "Team 1", 
            speed: 40,
            accelerate(): void{
                this.speed++
             }, 
             isFuelEmpty(): boolean {
                return false;
             }
        }

        let racerB: Racer = {
            team: "Team 2", 
            speed: 20,
            accelerate(): void{
                this.speed++
             }, 
             isFuelEmpty(): boolean {
                return false;
             }
        }

        let fastest = getFasterRacer(racerA, racerB);

        expect(fastest).toEqual(racerA);
    })


    test("racerB is faster", ()=>{
        let racerA: Racer = {
            team: "Team 1", 
            speed: 60,
            accelerate(): void{
                this.speed++
             }, 
             isFuelEmpty(): boolean {
                return false;
             }
        }

        let racerB: Racer = {
            team: "Team 2", 
            speed: 90,
            accelerate(): void{
                this.speed++
             }, 
             isFuelEmpty(): boolean {
                return false;
             }
        }

        let fastest = getFasterRacer(racerA, racerB);

        expect(fastest).toEqual(racerB);
    })

    test("racerA speed = racerB speed", ()=>{
        let racerA: Racer = {
            team: "Team 1", 
            speed: 60,
            accelerate(): void{
                this.speed++
             }, 
             isFuelEmpty(): boolean {
                return false;
             }
        }

        let racerB: Racer = {
            team: "Team 2", 
            speed: 60,
            accelerate(): void{
                this.speed++
             }, 
             isFuelEmpty(): boolean {
                return false;
             }
        }

        let fastest = getFasterRacer(racerA, racerB);

        expect(fastest).toEqual(null);
    })

    test("solarCar faster than gasCar", ()=>{
        let racerA: SolarCar = new SolarCar("Team1");
        let racerB: GasCar = new GasCar("Team2");
        racerA.speed = 80;
        racerB.speed = 50;

        let fastest = getFasterRacer(racerA, racerB);

        expect(fastest).toEqual(racerA);
    })

})
