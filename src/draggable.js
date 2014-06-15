;(function ($){
    var Draggable = function(element, options) {
        var that = this;
        that._element = element;
        that._options = options;
    };

    var DraggablePrototype = Draggable.prototype;
    DraggablePrototype.returnTrue = function() {
        return true;
    };

    $.fn.Draggable = Draggable;
})(jQuery);
