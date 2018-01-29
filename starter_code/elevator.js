class Elevator {
  constructor(direction, currentPosition){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
    this.direction = direction;
    this.currentPosition = currentPosition;
  }


  start() {
    this.listeningInterval = setInterval(this.update(), 1000);
   }

  stop() {
    clearInterval(listeningInterval);
   }

  update() {
    this.log();
   }

  _passengersEnter() { }

  _passengersLeave() { }

  floorUp() {
    if (this.currentPosition < this.MAXFLOOR){
      this.currentPosition++;
      this.direction = 'up';
    } 
   }

  floorDown() {
    if (this.currentPosition > this.floor){
      this.currentPosition--;
      this.direction = 'down';
    }
   }

  call(Person1) {
    this.requests.push(Person1)
   }

  log() {
    console.log(this.currentPosition);
    console.log(this.direction);
   }
}

ascensor = new Elevator ('up', 0);
ascensor.update();
ascensor.floorUp();
ascensor.update();
ascensor.floorUp();
ascensor.update();
ascensor.floorUp();
ascensor.update();
ascensor.floorUp();
ascensor.update();
ascensor.floorUp();
ascensor.update();
ascensor.floorUp();
ascensor.update();
ascensor.floorUp();
ascensor.update();
ascensor.floorUp();
ascensor.update();
ascensor.floorUp();
ascensor.update();
ascensor.floorUp();
ascensor.update();
ascensor.floorUp();
ascensor.update();
ascensor.floorUp();
ascensor.update();
ascensor.floorUp();
ascensor.update();
ascensor.floorUp();
ascensor.update();
ascensor.floorUp();
ascensor.update();
ascensor.floorUp();
ascensor.update();

module.exports = Elevator;
