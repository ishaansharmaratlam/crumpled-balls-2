class Paper{
    constructor(x,y,radius)
    {
        var options=
        {
            'restitution':0.3,
            'isStatic':false,
            'friction':0.5,
            'density':1.2
        }
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.body=Bodies.circle(x,y,this.radius,options);
        World.add(world,this.body);
        this.image=loadImage("paper.png")
    }

    display()
    {
        var paperpos=this.body.position;
        push();
        translate(paperpos.x,paperpos.y);
        imageMode(RADIUS);
        image(this.image,0,0,85,85);
        pop();
    }
}