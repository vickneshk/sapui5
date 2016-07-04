sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"gss/ui/demo/model/formatter"
], function(Controller, formatter) {
	"use strict";

	return Controller.extend("gss.ui.demo.controller.InvoiceList", {
		formatter: formatter,
			detailactive: function (evt) {
				  	var oItem = evt.getSource();
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("detail", {
				invoicePath: oItem.getBindingContext("invoice").getPath().substr(1).replace(/\//,".")
			});
	
		
		}		
	});


});