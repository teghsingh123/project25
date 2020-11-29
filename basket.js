class Basket{
    constructor(x,y){
        var options ={
            isStatic: true
        }
this.x = x;
this.y = y;
    
    this.width=200;
    this.height=213;
    this.thickness = 20;
    this.image = loadImage("dustbingreen.png")
    this.bottomBody = Bodies.rectangle(this.x,this.y,this.width,this.height,this.thickness,options);
    this.leftBody = Bodies.rectangle(this.x-this.width/2,this.y-this.height/2,this.thickness,this.height,options)
    this.rightBody = Bodies.rectangle(this.x+this.width/2,this.y-this.height/2,this.thickness,this.height,options)
    World.add(world,this.bottomBody);
    World.add(world,this.leftBody);
    World.add(world,this.rightBody);
    }
    display(){
        var pos1 = this.bottomBody.position;
        var pos2 = this.leftBody.position;
        var pos3 = this.rightBody.position;
        push()
        translate(pos2.x,pos2.y);
        angleMode(RADIANS);
        fill("white");
        rotate(this.angle);
        pop()
       
        push()
        translate(pos3.x,pos3.y);
        angleMode(RADIANS);
        fill("white");
        rotate(this.angle*(-1));
        pop()
       
        push()
        translate(pos1.x,pos1.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        fill("white");
        imageMode(CENTER);
        image(this.image, 0, -this.height/2, this.width, this.height);
        pop()

        
    }
}