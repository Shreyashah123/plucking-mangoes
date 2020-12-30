class Stone{
    constructor(x,y,r){
        var options ={
            density:1.2,
            friction:1,
            isStatic:true,
            restitution:0,
        }
       this.x=x;
       this.y=y;
       this.image=loadImage("stone.png");
        this.body= Bodies.circle(x,y,40,options);
        World.add(world,this.body);
        this.r=40;
        
    }
    display()
    {
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        
    imageMode(CENTER);
        image(this.image,0,0,this.r,this.r);
        pop();
    }
}