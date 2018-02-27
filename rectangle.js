function Rectangle(p1, p2) {
    var p3 = new Point(-1, -1), p3 = new Point(-1, -1);
    p3.x = p2.x;
    p3.y = p1.y;

    p4.x = p1.x;
    p4.y = p2.y;

    this.w = NewPoint(p1);
    this.x = NewPoint(p3);
    this.y = NewPoint(p2);
    this.z = NewPoint(p4);
    this.c = getRandomColor();
    this.name = "Rectangle";
    this.draw = drawRectangle;
    this.drawPartial = drawRectanglePartial;
    this.inscribe = isInscibedRectangle;
    this.move = moveRectangle;
    this.assignFrom = assignFromRectangle;
    this.area = areaRectangle;
}

function areaRectangle(){
    return Math.abs((this.w.x - this.y.x) * (this.w.y - this.y.y));
}

function assignFromRectangle(rec) {
    this.w.x = rec.w.x;
    this.w.y = rec.w.y;

    this.x.x = rec.x.x;
    this.x.y = rec.x.y;

    this.y.x = rec.y.x;
    this.y.y = rec.y.y;

    this.z.x = rec.z.x;
    this.z.y = rec.z.y;
}

function moveRectangle(p) {
    this.w.x += p.x;
    this.w.y += p.y;
    this.x.x += p.x;
    this.x.y += p.y;
    this.y.x += p.x;
    this.y.y += p.y;
    this.z.x += p.x;
    this.z.y += p.y;
}

function drawRectangle() {
    ctx.beginPath();
    ctx.moveTo(this.w.x, this.w.y);
    ctx.lineTo(this.x.x, this.x.y);
    ctx.lineTo(this.y.x, this.y.y);
    ctx.lineTo(this.z.x, this.z.y);
    ctx.closePath();
    ctx.fillStyle = this.c;
    ctx.strokeStyle = "#000000";
    ctx.fill();
    ctx.stroke();
}

function isInscibedRectangle(p) {
    return triArea(p, this.w, this.x) + triArea(p, this.x, this.y) + triArea(p, this.y, this.z) + triArea(p, this.z, this.w) == Math.abs((this.w.x - this.y.x) * (this.w.y - this.y.y));
}

function drawRectanglePartial() {
    ctx.beginPath();
    ctx.moveTo(this.w.x, this.w.y);
    ctx.lineTo(this.x.x, this.x.y);
    ctx.lineTo(this.y.x, this.y.y);
    ctx.lineTo(this.z.x, this.z.y);
    ctx.closePath();
    ctx.strokeStyle = "#000000";
    ctx.stroke();
}