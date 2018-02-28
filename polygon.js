function Polygon(p1, p2, n) {
    this.x = new Point((p1.x + p2.x) / 2, (p1.y + p2.y) / 2);
    this.r = Math.min(Math.abs((p2.x - p1.x) / 2), Math.abs((p1.y - p2.y) / 2));
    this.n = n;
    this.c = getRandomColor();
    this.name = "Polygon";
    this.draw = drawPolygon;
    this.drawPartial = drawPolygonPartial;
    this.inscribe = isInscibedPolygon;
    this.move = movePolygon;
    this.assignFrom = assignFromPolygon;
    this.area = areaPolygon;
}

function areaPolygon() {
    if (this.n != 0)
        return Math.PI * this.r * this.r;
    else return 0;
}

function assignFromPolygon(pol) {
    this.x.x = pol.x.x;
    this.x.y = pol.x.y;
    this.r = pol.r;
    this.n = pol.n;
}

function movePolygon(p) {
    this.x.x += p.x;
    this.x.y += p.y;
}

function drawPolygon() {
    ctx.beginPath();
    ctx.moveTo(this.x.x + this.r * Math.cos(Math.degToRad * -90), this.x.y + this.r * Math.sin(Math.degToRad * -90));
    for (var i = -90; i <= 360 - 90; i += 360 / this.n)
        ctx.lineTo(this.x.x + this.r * Math.cos(Math.degToRad * i), this.x.y + this.r * Math.sin(Math.degToRad * i));
    ctx.closePath();
    ctx.fillStyle = this.c;
    ctx.strokeStyle = "#000000";
    ctx.fill();
    ctx.stroke();
}

function isInscibedPolygon(p) {
    return (this.x.x - p.x) * (this.x.x - p.x) + (this.x.y - p.y) * (this.x.y - p.y) <= this.r * this.r;
}

function drawPolygonPartial() {
    ctx.beginPath();
    ctx.moveTo(this.x.x + this.r * Math.cos(Math.degToRad * -90), this.x.y + this.r * Math.sin(Math.degToRad * -90));
    for (var i = -90; i <= 360 - 90; i += 360 / this.n)
        ctx.lineTo(this.x.x + this.r * Math.cos(Math.degToRad * i), this.x.y + this.r * Math.sin(Math.degToRad * i));
    ctx.closePath();
    ctx.strokeStyle = "#000000";
    ctx.stroke();
}