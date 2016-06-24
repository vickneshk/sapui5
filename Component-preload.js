/**
* This file was auto-generated by SAP Web IDE build and includes all
* the source files required by SAPUI5 runtime for performance optimization.
* PLEASE DO NOT EDIT THIS FILE!! Changes will be overwritten the next time the build is run.
*/
jQuery.sap.registerPreloadedModules({
	"version": "2.0",
	"name": "gss/ui/demo/Component-preload",
	"modules": {
		"gss/ui/demo/view/View1.view.xml": "<mvc:View controllerName=\"gss.ui.demo.controller.View1\" xmlns:html=\"http://www.w3.org/1999/xhtml\" xmlns:mvc=\"sap.ui.core.mvc\" xmlns=\"sap.m\">\n\t<App>\n\t\t<pages>\n\t\t\t<Page title=\"{i18n>title}\">\n\t\t\t\t<content>\n\t\t\t\t\t<mvc:XMLView viewName=\"gss.ui.demo.view.InvoiceList\"/>\n\t\t\t\t</content>\n\t\t\t</Page>\n\t\t</pages>\n\t</App>\n</mvc:View>",
		"gss/ui/demo/view/InvoiceList.view.xml": "<mvc:View\r\n\t\r\n   xmlns=\"sap.m\"\r\n   xmlns:mvc=\"sap.ui.core.mvc\">\r\n   <List\r\n      headerText=\"{i18n>invoiceListTitle}\"\r\n      class=\"sapUiResponsiveMargin\"\r\n      width=\"auto\"\r\n      items=\"{invoice>/Invoices}\" >\r\n      <items>\r\n         <ObjectListItem\r\n            title=\"{invoice>ProductName}\"\r\n           />\r\n      </items>\r\n   </List>\r\n</mvc:View>",
		"gss/ui/demo/controller/View1.controller.js": "sap.ui.define([\n\t\"sap/ui/core/mvc/Controller\"\n], function(Controller) {\n\t\"use strict\";\n\n\treturn Controller.extend(\"gss.ui.demo.controller.View1\", {\n\n\t});\n\n});",
		"gss/ui/demo/controller/InvoiceList.controller.js": "",
		"gss/ui/demo/model/models.js": "sap.ui.define([\n\t\"sap/ui/model/json/JSONModel\",\n\t\"sap/ui/Device\"\n], function(JSONModel, Device) {\n\t\"use strict\";\n\n\treturn {\n\n\t\tcreateDeviceModel: function() {\n\t\t\tvar oModel = new JSONModel(Device);\n\t\t\toModel.setDefaultBindingMode(\"OneWay\");\n\t\t\treturn oModel;\n\t\t}\n\n\t};\n\n});",
		"gss/ui/demo/Component.js": "sap.ui.define([\n\t\"sap/ui/core/UIComponent\",\n\t\"sap/ui/Device\",\n\t\"gss/ui/demo/model/models\"\n], function(UIComponent, Device, models) {\n\t\"use strict\";\n\n\treturn UIComponent.extend(\"gss.ui.demo.Component\", {\n\n\t\tmetadata: {\n\t\t\tmanifest: \"json\"\n\t\t},\n\n\t\t/**\n\t\t * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.\n\t\t * @public\n\t\t * @override\n\t\t */\n\t\tinit: function() {\n\t\t\t// call the base component's init function\n\t\t\tUIComponent.prototype.init.apply(this, arguments);\n\n\t\t\t// set the device model\n\t\t\tthis.setModel(models.createDeviceModel(), \"device\");\n\t\t}\n\t});\n\n});"
	}
});