
const application = require("tns-core-modules/application");
const fs = require("tns-core-modules/file-system");



application.run({ moduleName: "app-root/app-root",
context:{ bgColor:"black" } });

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
