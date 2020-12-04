class roof
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:true			
			}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);

	}
	display()
	{
			
      var r1=this.body.position;		
      push();
			translate(r1.x, r1.y);
			rectMode(CENTER);
			fill(150,200,250);
			rect(0,0,this.w, this.h);
			pop();
	}
}