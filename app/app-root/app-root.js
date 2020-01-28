const application = require("tns-core-modules/application");
const { Frame } = require("tns-core-modules/ui/frame");

const AppRootViewModel = require("./app-root-view-model");
function onLoaded(args) {
    const drawerComponent = args.object;
    //color = drawerComponent.navigationContext.bgColor||"";
    console.log("loaded", drawerComponent);
    drawerComponent.bindingContext = new AppRootViewModel();
}


function load() {
    const fs = require("tns-core-modules/file-system");
    const documents = fs.knownFolders.documents();
    // const folder = documents.getFolder("resources");
    const file = documents.getFile("inf.txt");

    //console.log(file.lastModified);
    //file.writeTextSync("blue");

    return file.readTextSync();
}


function onNavigationItemTap(args) {
    const component = args.object;
    const componentRoute = component.route;
    const componentTitle = component.title;
    const bindingContext = component.bindingContext;
    //color = component.navigationContext;
    bindingContext.set("selectedPage", componentTitle);
    //console.log("color hhh:", component);
    const color = load();
    Frame.topmost().navigate({
        moduleName: componentRoute,
        transition: {
            name: "fade"
        },
        context: { bgColor:color }
        });

    const drawerComponent = application.getRootView();
    drawerComponent.closeDrawer();
}

exports.onLoaded = onLoaded;
exports.onNavigationItemTap = onNavigationItemTap;
