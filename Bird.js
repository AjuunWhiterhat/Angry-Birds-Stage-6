class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    this.trajectory = [];
  }

  display() {
    if(this.body.position.x>220&&this.body.velocity.x>2){
    var pos = [this.body.position.x,this.body.position.y];
    this.trajectory.push(pos);
    console.log(this.trajectory);
    }

    for(var i=0;i<this.trajectory.length;i++){
      image(this.smokeImage,this.trajectory[i][0],this.trajectory[i][1]);
    }
    



    super.display();
  }
}
