sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";
	return Controller.extend("gss.ui.demo.controller.Detail", {
		onInit: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("detail").attachPatternMatched(this._onObjectMatched, this);
		},
		_onObjectMatched: function (oEvent) {
			this.getView().bindElement({
				path:"/"+ oEvent.getParameter("arguments").invoicePath.replace(/\./,"/"),
				model: "invoice"
			});
		},
		onNavBack:function(){
	var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("Invoice");                        
		}
	});
});