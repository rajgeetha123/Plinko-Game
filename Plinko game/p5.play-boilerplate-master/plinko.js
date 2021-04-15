class plinko{
    constructor(x,y)
    {
        var options={
            
                isStatic:true,
                restitution:0.3,
                friction:0.5,
                density:1.2,
            }
        this.body=Bodies.circle(x,y,10,options);
        this.x=x;
        this.y=y;
        
        World.add(world,this.body);
        }
       
        display()
    {
        ellipseMode(CENTER);
        ellipse(this.body.position.x,this.body.position.y,10);
    }
        
    }

    
