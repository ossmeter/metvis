
(function() {
	"use strict";

	metvis.generate = function(xs, gen) {
		return $.map(xs, function(val, i){
			return gen(val);
		});
	}

	metvis.generate_from_spec = function(vis, points) {
		var data = [];
	  	for (var i = 0; i < 10; i++) {
			var obj = {};
			for (var c in vis.datatable.cols) {
				var col = vis.datatable.cols[c];
				if (col._gen_generator) {
					var gen = metvis.Generators.get_by_name(col._gen_generator);
					var val = gen(i);

					obj[col.name] = val;
				}
			}
			data.push(obj);
		}
		return data;
	}

	metvis.Generators = {
		linear : function(x, a, b) {
			a = typeof a !== 'undefined' ? a : 3;
			b = typeof b !== 'undefined' ? b : 1;
			return a * x + b;
		},
		exponential : function(x) {
			return Math.exp(x);
		},
		power : function(x, y) {
			y = typeof y !== 'undefined' ? y : 2;
			return Math.pow(x, y);
		},
		empty : function(x) {

		},
		date : function(x) {

		},
		get_by_name : function(name) {
			var gen = metvis.Generators[name];
			if (gen == undefined) {
				gen = metvis.Generators.empty;
			}
			return gen;
		}
	}
})();
