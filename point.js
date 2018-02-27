function NewPoint(p) {
    return new Point(p.x, p.y);
}

function Point(x, y) {
    this.x = x;
    this.y = y;
}

function triArea(p1, p2, p3) {
    return 0.5 * Math.abs((p2.x - p1.x) * (p3.y - p1.y) - (p3.x - p1.x) * (p2.y - p1.y));
}