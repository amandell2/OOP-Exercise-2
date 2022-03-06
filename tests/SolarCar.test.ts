import { SolarCar } from "../src/SolarCar";
//import { Racer } from "../src/Racer";

describe("SolarCar Class", () => {
    test("team property is set from constructor", () => {
        let solarCar1: SolarCar = new SolarCar("Team 1");
        expect(solarCar1.team).toEqual("Team 1");
    })

    test("speed starts at 0", () => {
        let solarCar2: SolarCar = new SolarCar("Team 1");
        expect(solarCar2.speed).toEqual(0);
      })

      test("calling accelerate once adds 1", () => {
        let solarCar3: SolarCar = new SolarCar("Team 1");
        solarCar3.accelerate();
        expect(solarCar3.speed).toEqual(1);
      })

      test("calling accelerate twice adds 2", () => {
        let solarCar4: SolarCar = new SolarCar("Team 1");
        solarCar4.accelerate();
        solarCar4.accelerate();
        expect(solarCar4.speed).toEqual(2);
      })

      test("isFuelEmpty returns false", () => {
        let solarCar5: SolarCar = new SolarCar("Team 1");
        expect(solarCar5.isFuelEmpty()).toEqual(false);
      })

});