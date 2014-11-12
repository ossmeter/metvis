	metvis.Table = function(container, vis) {
		self = this;

		self.container = container;

		self.vis = vis;

		this.draw = function() {
			"use strict";

			// Validate vis
			if (self.vis.type != "Table") {
				console.log("Invalid visualisation type. Should be 'Table'. For non-tabular data use metvis.Chart.draw().");
				return;
			}

			$(self.container).append("<table></table>")
			var table = $(self.container).children();

			var hdr = "<thead>"
			$.each(self.vis.datatable[0], function(key, val) {
				hdr = hdr + "<th>" + key + "</th>";
			});
			hdr = hdr + "</thead>";
			table.append(hdr);

			var bdy = "<tbody>";

			$.each(self.vis.datatable, function(index, value) {
				bdy = bdy + "<tr>";
				$.each(value, function(key, val) {
					bdy = bdy + "<td>" + val + "</td>";
				});
				bdy = bdy + "</tr>";
			});

			bdy = bdy + "</tbody>";
			table.append(bdy);
		}
		return this;
	}