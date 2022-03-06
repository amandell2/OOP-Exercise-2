import { GasCar } from "../src/GasCar";

describe("GasCar Class", () =>{
    test("team and fuel are set from constructor", ()=>{
        let gasCar1: GasCar = new GasCar("Team 2", 20);
        expect(gasCar1.team).toEqual("Team 2");
        expect(gasCar1.fuel).toEqual(20);
    })

    test("fuel defaults to 10", ()=>{
        let gasCar2: GasCar = new GasCar("Team 2");
        expect(gasCar2.fuel).toEqual(10);
    })

    test("speed property starts at 0", ()=>{
        let gasCar3: GasCar = new GasCar("Team 2");
        expect(gasCar3.speed).toEqual(0);
    })

    test("Calling accelerate brings speed to 2", ()=>{
        let gasCar4: GasCar = new GasCar("Team 2");
        gasCar4.accelerate();
        expect(gasCar4.speed).toEqual(2);   
    })

    test("Calling accelerate twice brings speed to 4", ()=>{
        let gasCar5: GasCar = new GasCar("Team 2");
        gasCar5.accelerate();
        gasCar5.accelerate();
        expect(gasCar5.speed).toEqual(4); 
    })

    test("Calling accelerate reduces fuel by 1", ()=>{
        let gasCar6: GasCar = new GasCar("Team 2", 20);
        gasCar6.accelerate();
        expect(gasCar6.fuel).toEqual(19);   
    })

    test("Calling accelerate twice reduces fuel by 1", ()=>{
        let gasCar6: GasCar = new GasCar("Team 2", 20);
        gasCar6.accelerate();
        gasCar6.accelerate();
        expect(gasCar6.fuel).toEqual(18);   
    })
   
    test("isFuelEmpty is true when fuel is 0", ()=>{
        let gasCar7: GasCar = new GasCar("Team 2", 0);
        let checkFuel = gasCar7.isFuelEmpty();
        expect(checkFuel).toEqual(true);   
    })

    test("isFuelEmpty is false when fuel is > 0", ()=>{
        let gasCar8: GasCar = new GasCar("Team 2", 40);
        let checkFuel = gasCar8.isFuelEmpty();
        expect(checkFuel).toEqual(false);   
    })


});