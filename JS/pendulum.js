class BOB{
	constructor(x,y,color)
	{
		var options={
			isStatic:false,
			restitution:1,
			friction:0,
			density:0.8
			
			}
        this.body=Bodies.circle(x, y, 30, options);
       this.color = color
		World.add(world, this.body);

	}
	display()
	{
			
			var pos=this.body.position;
			push()
			translate(pos.x, pos.y);
			ellipseMode(RADIUS)
			fill(this.color);
			ellipse(0,0,30, 30);
			pop()
			
	}
}