function UndoStack(){
    this.top=-1;
    this.stack=[];
    this.undo=undoStack;
    this.redo=redoStack;
    this.record=recordAction;
}

function recordAction(){
    this.stack.push(obj.slice());
    this.top++;
}

function undoStack(){
    if(this.top>0)
    obj= this.stack[--this.top];
    else
    showAlert("Nothing to Undo!");
    clearCanvas(ctx, canvas);
    drawAll();
    console.log(this.stack);
}

function redoStack(){
    if (this.top<this.stack.length-1)
    obj= this.stack[++this.top];
    else
    showAlert("Nothing to Redo!");
    clearCanvas(ctx, canvas);
    drawAll();
}