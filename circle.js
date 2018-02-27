function Circle(p1, p2) {
    this.x = new Point((p1.x + p2.x) / 2, (p1.y + p2.y) / 2);
    this.r = Math.min(Math.abs((p2.x - p1.x)/2), Math.abs((p1.y - p2.y)/2));
    this.c = getRandomColor();
    this.name = "Circle";
    this.draw = drawCircle;
    this.drawPartial = drawCirclePartial;
    this.inscribe = isInscibedCircle;
    this.move = moveCircle;
    this.assignFrom = assignFromCircle;
    this.area = areaCircle;
}

function areaCircle() {
    return Math.PI * this.r * this.r;
}

function assignFromCircle(cir) {
    this.x.x = cir.x.x;
    this.x.y = cir.x.y;
    this.r = cir.r;
}

function moveCircle(p) {
    this.x.x += p.x;
    this.x.y += p.y;
}

function drawCircle() {
    ctx.beginPath();
    ctx.arc(this.x.x, this.x.y, this.r, 0, 2 * Math.PI);
    ctx.fillStyle = this.c;
    ctx.strokeStyle = "#000000";
    ctx.fill();
    ctx.stroke();
}

function isInscibedCircle(p) {
    return (this.x.x - p.x) * (this.x.x - p.x) + (this.x.y - p.y) * (this.x.y - p.y) <= this.r * this.r;
}

function drawCirclePartial() {
    ctx.beginPath();
    ctx.arc(this.x.x, this.x.y, this.r, 0, 2 * Math.PI);
    ctx.strokeStyle = "#000000";
    ctx.stroke();
}