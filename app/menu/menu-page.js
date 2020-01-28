const app = require("tns-core-modules/application");

const MenuViewModel = require("./menu-view-model");
//const gestures = require("tns-core-modules/ui/gestures");
const frame = require("tns-core-modules/ui/frame");

function load() {
    const fs = require("tns-core-modules/file-system");
    const documents = fs.knownFolders.documents();
    // const folder = documents.getFolder("resources");
    const file = documents.getFile("inf.txt");

    //console.log(file.lastModified);
    //file.writeTextSync("blue");

    return file.readTextSync();
}
let color = "";
function onNavigatingTo(args) {

    const page = args.object;

    //color = page.navigationContext;
    if (page.navigationContext) {
        color = page.navigationContext.bgColor;

    } else {
        color = load();
    }
    //console.log(page.navigationContext);

    page.bindingContext = MenuViewModel(color);
}

function onDrawerButtonTap(args) {
    const sideDrawer = app.getRootView();
    sideDrawer.showDrawer();
}


function onItemTap(args) {
    const index = args.index;
    const items = ["home", "help", "settings"];
    frame.topmost().navigate({ moduleName:`${items[index]}/${items[index]}-page`,
context:{ bgColor:color } });

}
exports.onItemTap = onItemTap;
exports.onNavigatingTo = onNavigatingTo;
exports.onDrawerButtonTap = onDrawerButtonTap;

