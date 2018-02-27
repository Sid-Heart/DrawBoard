function Triangle(p1,p2) {
    var p3 = new Point(-1,-1),p3=new Point(-1,-1);
    p3.x = p1.x;
    p3.y = p2.y;

    p4.x = (p2.x + p3.x) / 2;
    p4.y = p1.y;

    this.x = NewPoint(p2);
    this.y = NewPoint(p3);
    this.z = NewPoint(p4);
    this.c = getRandomColor();
    this.name = "Triangle";
    this.draw = drawTriangle;
    this.drawPartial = drawTrianglePartial;
    this.inscribe = isInscibedTriangle;
    this.move = moveTriangle;
    this.assignFrom = assignFromTriangle;
    this.area = areaTriangle;
}

function areaTriangle(){
    return triArea(this.x,this.y,this.z);
}

function assignFromTriangle(tri){
    this.x.x=tri.x.x;
    this.x.y=tri.x.y;

    this.y.x=tri.y.x;
    this.y.y=tri.y.y;

    this.z.x=tri.z.x;
    this.z.y=tri.z.y;
}

function moveTriangle(p){
    this.x.x+=p.x;
    this.x.y+=p.y;
    this.y.x+=p.x;
    this.y.y+=p.y;
    this.z.x+=p.x;
    this.z.y+=p.y;
}

function drawTriangle(){
    ctx.beginPath();
    ctx.moveTo(this.x.x, this.x.y);
    ctx.lineTo(this.y.x, this.y.y);
    ctx.lineTo(this.z.x, this.z.y);
    ctx.lineTo(this.x.x, this.x.y);
    ctx.closePath();
    ctx.fillStyle = this.c;
    ctx.strokeStyle = "#000000";
    ctx.fill();
    ctx.stroke();
}

function isInscibedTriangle(p){
    return triArea(p, this.x, this.y) + triArea(p, this.y, this.z) + triArea(p, this.x, this.z) == triArea(this.z, this.x, this.y);
}

function drawTrianglePartial() {
    ctx.beginPath();
    ctx.moveTo(this.x.x, this.x.y);
    ctx.lineTo(this.y.x, this.y.y);
    ctx.lineTo(this.z.x, this.z.y);
    ctx.lineTo(this.x.x, this.x.y);
    ctx.closePath();
    ctx.strokeStyle = "#000000";
    ctx.stroke();
}