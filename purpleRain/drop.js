class Drop {

  constructor(){
    this.x = random();
    this.y = this.setStart();
    this.width = 10;
    this.velocity = this.setVelocity();
  }

  setStart(){
    let scale = -100;
    return random() * scale;
  }

  setVelocity(){
    let min = 2;
    let max = 8;
    let v = map(random(), 0, 1, min, max);
    return v;
  }

  update(){
    this.y += this.velocity;
    if(this.y > windowHeight){
      this.y = this.setStart();
      this.x = random();
    }
  }

  show(){

    let xpos = this.x * windowWidth;
    rect(xpos, this.y, this.width, this.width);
  }
}
