(function($) {
	$.namespace = function() {
		var a = arguments, o = null, i, j, d;
		for (i = 0; i < a.length; i = i + 1) {
			d = a[i].split(".");
			o = window;
			for (j = 0; j < d.length; j = j + 1) {
				o[d[j]] = o[d[j]] || {};
				o = o[d[j]];
			}
		}
		return o;
	};
	$.namespaceExist = function(funcName) {
		if (typeof(funcName) != "string") {
			return typeof(funcName);
		}
		var fnArray = funcName.split(".");
		var namespace = [];
		for (index in fnArray) {
			namespace.push(fnArray[index]);
			var token = namespace.join(".");
			if (eval("typeof " + token + " == 'undefined'")) {
				return false;
			}
		}
		return true;
	}
})(jQuery);