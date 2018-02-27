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


var button = document.getElementById('saveAsPNG');
button.addEventListener('click', function (e) {
    if (confirm("Confirm save!")) {
    var link = document.createElement('a');
    link.download = "drawing.png";
    link.href = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");;
    link.click();
    }
});