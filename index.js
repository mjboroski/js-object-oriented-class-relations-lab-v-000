let store = { drivers: [], passengers: [], trips: [] };

let driverId = 0;
let passengerId = 0;
let tripId = 0;

class Driver{
  constructor(){
    this.name = name
    this.id = driverId++
    store.drivers.push(this);
  }

  newDriver(name){

  }

  trips(){

  }

  passengers(){

  }
}

class Passenger{
  constructor(){
    this.name = name
    this.id = passengerId++
    store.passengers.push(this);
  }

  newPassenger(name){

  }

  trips(){

  }

  drivers(){

  }
}

class Trip{
  constructor(){
    this.id = tripId++
    this.driverId = driver.id
    this.passengerId = passenger.id
    store.trips.push(this);
  }

  newTrips(driver, passenger){

  }

  driver(){

  }

  passenger(){

  }
}
