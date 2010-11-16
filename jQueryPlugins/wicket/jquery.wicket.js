/**
 * Helper for registerin ajax callbacks.
 * This plugin is dependent on jquery.namespace
 */
(function($) {
	$.wicket = {
	  /**
	   * Register a callback function to be executed after wicket ajax call is complete.
	   */  
	  ajaxCallback: function(fn) {
      this.registerCallbacks({
        onSuccess: fn
      });
    },	      
	  registerCallbacks: function(arg) {
	    if ($.namespaceExist('Wicket.Ajax')) {
	      if (arg.onBefore) {
  	      Wicket.Ajax.registerPreCallHandler(arg.onBefore);
  	    }
  	    if (arg.onSuccess) {
  	      Wicket.Ajax.registerPostCallHandler(arg.onSuccess);
  	    }
  	    if (arg.onFailure) {
  	      Wicket.Ajax.registerFailureHandler(arg.onFailure);
  	    }
	    }
	  }
	}
})(jQuery);


$.wicket.ajaxCallback(function() {
  //execute something when ajax response is ready
});