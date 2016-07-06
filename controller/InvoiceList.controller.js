sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"gss/ui/demo/model/formatter",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function(Controller, formatter, Filter, FilterOperator) {
	"use strict";

	return Controller.extend("gss.ui.demo.controller.InvoiceList", {
		formatter: formatter,
			detailactive: function (evt) {
				  	var oItem = evt.getSource();
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("detail", {
				invoicePath: oItem.getBindingContext("invoice").getPath().substr(1).replace(/\//,".")
			});
	
		
		},
		onFilterInvoices : function (oEvent) {

			// build filter array
			var aFilter = [];
			var sQuery = oEvent.getParameter("query");
			if (sQuery) {
				aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
			}

			// filter binding
			var oList = this.getView().byId("invoiceList");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);
		}		
	});


});