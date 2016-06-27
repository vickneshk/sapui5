sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("gss.ui.demo.controller.Detail", {
			handleNavButtonPress : function (evt) {
		this.nav.back("InvoiceList");
	}

	});

});

