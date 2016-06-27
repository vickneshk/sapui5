sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("gss.ui.demo.controller.InvoiceList", {
			detailactive  : function (evt) {
				sap.m.messagebox.show("hello");
		var context = evt.getSource().getBindingContext();
		this.nav.to("Detail", context);
	}
	});


});