/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/azhar/app/ZFioriDemo/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});