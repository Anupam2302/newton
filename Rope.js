class rope{
  constructor(bodyA,bodyB){//,offsetX,offsetY){
    //this.offsetX=offsetX
    //this.offsetY=offsetY
    var options={
        bodyA:bodyA,
        bodyB:bodyB,
        //pointB:{x:this.offsetX, y:this.offsetY},

        stiffness:3,
        length:0.2
    }
    this.rope=Constraint.create(options);
    World.add(world,this.rope); 
 }
  display(){
    fill("yellow") 
    strokeWeight(1);
    line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.rope.bodyB.position.x,this.rope.bodyB.position.y);//+this.rope.pointB.x,this.rope.bodyB.position.y+this.rope.pointB.y);
  
  }
}