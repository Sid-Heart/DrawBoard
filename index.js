var canvas = document.getElementById("myCanvas");
canvas.width = window.innerWidth - 200;
canvas.height = window.innerHeight - 75;
var ctx = canvas.getContext("2d");
var flag = 0;
Math.degToRad = (Math.PI / 180);
var moving = -1;
var p1 = new Point(0, 0);
var p2 = new Point(0, 0);
var p3 = new Point(0, 0);
var p4 = new Point(0, 0);
var obj = [], len = 0;
var pp1, pp2, pp3;
var shapeType = "Line";
var tracker = new UndoStack();
tracker.record();

function mouseDown(event) {
    console.log(tracker.stack);
    flag = 1;
    p1.x = event.x - 10;
    p1.y = event.y - 10;
    moving = Moving(p1);
    pp1 = new Point(-1, -1);
}

function mouseDrag(event) {
    if (flag != 1) {
        return;
    }

    p2.x = event.x - 10;
    p2.y = event.y - 10;

    if (moving >= 0) {
        pp1 = new Point((p2.x - p1.x), (p2.y - p1.y));
        clearCanvas(ctx, canvas);
        drawAll(moving);

        var t = getNewShape(obj[moving].name, p1, p2);
        t.assignFrom(obj[moving])
        t.move(pp1);
        t.drawPartial();
    } else {
        clearCanvas(ctx, canvas);
        drawAll();

        getNewShape(shapeType, p1, p2).drawPartial();
        moving = -1;
    }
}

function Moving(p) {
    for (var i = obj.length - 1; i >= 0; i--) {
        if (obj[i].inscribe(p) == true) {
            return i;
        }
    }
    return -1;
}

function mouseUp(event) {
    if (flag != 1)
        return;
    if (moving >= 0 && pp1.x != -1) {
        var newShape=getNewShape(obj[moving].name,p1,pp1);
        newShape.assignFrom(obj[moving]);
        newShape.c = obj[moving].c;
        newShape.move(pp1);
        obj[moving]=newShape;
        tracker.record();
    } else {
        p2.x = event.x - 10;
        p2.y = event.y - 10;
        var newShape = getNewShape(shapeType, p1, p2);
        if (newShape.area() > 0.5) {
            obj.push(newShape);
            tracker.record();
        }
    }
    clearCanvas(ctx, canvas);
    drawAll();
    moving = -1;
    flag = 0;
}
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    if (document.getElementById("pickerEnabled").checked) {
        color = document.getElementById("pickedColor").value;
    } else {
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
    }
    return color;
}

function mouseDouble(event) {
    moving = -1;
    var cur = Moving(new Point(event.x - 10, event.y - 10));
    if (obj.length > 0 && cur >= 0) {
        for (var i = cur + 1; i < obj.length; i++)
            obj[i - 1] = obj[i];
        obj.length--;
        tracker.record();
    }
    clearCanvas(ctx, canvas);
    drawAll();
    flag = 0;
}

function clearCanvas(context, canvas) {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

function drawAll(moved) {
    for (var i = 0; i < obj.length; i++) {
        if (moved === i)
            continue;
        obj[i].draw();
    }
}

function getNewShape(shapeup, p1, p2) {
    if (shapeup === "Rectangle")
        return new Rectangle(p1, p2);
    if (shapeup === "Triangle")
        return new Triangle(p1, p2);
    if (shapeup === "Circle")
        return new Circle(p1, p2);
    if (shapeup === "Line")
        return new Line(p1, p2);
    if (shapeup === "Polygon" && parseInt(document.getElementById("side").value) <= 10)
        return new Polygon(p1, p2, parseInt(document.getElementById("side").value));
    else {
        showAlert("Enter Valid Number Of Sides (5-10)");
        return new Polygon(p1, p2, 0);
    }
}

function setShapeType(st) {
    shapeType = st;
    document.getElementById("shapeIndicator").innerHTML = "Select Shape : " + st;
}

function showAlert(msg) {
    document.getElementById("alert").innerHTML = `<div class="alert">
    <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
    <strong style="text-align:left;">Alert!&nbsp &nbsp &nbsp &nbsp</strong>` + msg +
        `</div>`;
}