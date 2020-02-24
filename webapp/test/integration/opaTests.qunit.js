/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/azhar/app/ZFioriDemo/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});