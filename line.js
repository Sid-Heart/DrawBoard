function Line(p1,p2) {
    this.x = NewPoint(p1);
    this.y = NewPoint(p2);
    this.c = getRandomColor();
    this.name = "Line";
    this.draw = drawLine;
    this.drawPartial = drawLinePartial;
    this.inscribe = isInscibedLine;
    this.move = moveLine;
    this.assignFrom = assignFromLine;
    this.area = areaLine;
}

function areaLine(){
    return Math.sqrt((this.x.x-this.y.x)*(this.x.x-this.y.x)+(this.x.y-this.y.y)*(this.x.y-this.y.y));
}

function assignFromLine(lin){
    this.x.x=lin.x.x;
    this.x.y=lin.x.y;

    this.y.x=lin.y.x;
    this.y.y=lin.y.y;
}

function moveLine(p){
    this.x.x+=p.x;
    this.x.y+=p.y;
    this.y.x+=p.x;
    this.y.y+=p.y;
}

function drawLine(){
    ctx.beginPath();
    ctx.moveTo(this.x.x, this.x.y);
    ctx.lineTo(this.y.x, this.y.y);
    ctx.closePath();
    ctx.fillStyle = this.c;
    ctx.strokeStyle = "#000000";
    ctx.fill();
    ctx.stroke();
}

function isInscibedLine(p){
    return triArea(p,this.x,this.y)<window.innerWidth && new Line(new Point(Math.abs(this.x.x+this.y.x)/2,Math.abs(this.x.y+this.y.y)/2),p).area()<window.innerWidth/10;
}

function drawLinePartial() {
    ctx.beginPath();
    ctx.moveTo(this.x.x, this.x.y);
    ctx.lineTo(this.y.x, this.y.y);
    ctx.closePath();
    ctx.strokeStyle = "#000000";
    ctx.stroke();
}