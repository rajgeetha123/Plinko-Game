class particle{
    constructor(x,y,radius)
    {
        var options={
            isStatic:false,
            restitution:0.04,

        }
        this.radius=radius;
        this.body=Bodies.circle(x,y,this.radius,options);
        this.color=color(random(0,255), random(0,255),random(0,255));
        World.add(world,this.body)
    }

    display()
    {   

        var pos=this.body.position;
        var angle=this.body.angle;


        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}