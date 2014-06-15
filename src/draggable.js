;(function ($){
    var Draggable = function(element, options) {
        var that = this;
        that._element = element;
        that._options = options;
    };

    Draggable.prototype = {
        returnValue: function(value) {
            if (value === false) {
                return false;
            }
            return true;
        }
    };

    $.fn.Draggable = Draggable;
})(jQuery);
