import {Racer} from './Racer';

export function findRacersWithEmptyFuel(racers: Racer[]): Racer[]{
    let fuelEmptyArray: Racer[] = [];
    for(let racer of racers){
        if(racer.isFuelEmpty() === true){
            fuelEmptyArray.push(racer);
        }
    }
    return fuelEmptyArray;
} 

export function findAverageSpeed(racers: Racer[]): number{
    if(racers.length === 0){
        return 0;
    }
    let total = 0;
    let average = 0;
    for(let racer of racers){
        total += racer.speed;
        average = total/racers.length;
    }
    return average;
}

export function getFasterRacer(racerA: Racer, racerB: Racer): Racer|null {
    if(racerA.speed > racerB.speed){
        return racerA;
    }else if(racerB.speed > racerA.speed){
        return racerB;
    }else{
        return null;
    }
}