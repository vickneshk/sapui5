sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("gss.ui.demo.controller.Detail", {
				onInit: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("detail").attachPatternMatched(this._onObjectMatched, this);
		},
		_onObjectMatched: function (evt) {
			this.getView().bindElement({
				path: "/" + evt.getParameter("arguments").invoicePath,
				model: "invoice"
			});
		},
			handleNavButtonPress : function (evt) {
		this.nav.back("InvoiceList");
	}

	});

});

