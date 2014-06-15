var Draggable = null;

function initializeDraggable() {
    Draggable = $.fn.Draggable;
}

testStart(initializeDraggable);

test( "returnTrue methods returns true", function() {
    var draggable = new Draggable();
    equal(true, draggable.returnValue(true));
});

test( "returnTrue methods returns true", function() {
    var draggable = new Draggable();
    equal(true, draggable.returnValue(true));
});















