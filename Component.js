sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"gss/ui/demo/model/models"
], function(UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("gss.ui.demo.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// set the device model
				// set device model
		var deviceModel = new sap.ui.model.json.JSONModel({
			isPhone : sap.ui.Device,
			listMode : (sap.ui.Device) ? "None" : "SingleSelectMaster",
			listItemType : (sap.ui.Device) ? "Active" : "Inactive"
		});
		deviceModel.setDefaultBindingMode("OneWay");
	
			this.setModel(models.createDeviceModel(), "device");
			this.getRouter().initialize();
		}
	});

});