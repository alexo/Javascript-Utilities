/**
 * Add 'NEW' icon to each element.
 */
(function($) {
  $.fn.markAsNew = function() {
    return this.each(function(){
      var self = $(this);
      var wrapper = $("<div class='markAsNew'/>");
      self.wrap(wrapper).parent().append("<div class='icon'/>");
    });
  }
})(jQuery);