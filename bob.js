class bob {
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:1.2,
			friction:0,
			density:0.8
      }
		this.x=x;
		this.y=y;
		this.r=r;
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
		World.add(world, this.body);
  }
	display(){
			var p1=this.body.position;
			push()
			translate(p1.x, p1.y);
			rectMode(CENTER);
			fill(0,255,255);
			ellipse(0,0,this.r, this.r);
			pop();
	}
}