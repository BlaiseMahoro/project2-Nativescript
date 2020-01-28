
const app = require("tns-core-modules/application");
const colors = ["black", "blue", "green", "gray", "lightGray"];
const backg_color = colors[1];
const SettingsViewModel = require("./settings-view-model");
const gestures = require("tns-core-modules/ui/gestures");
const frame = require("tns-core-modules/ui/frame");
let color = "";

//module.exports = SettingsViewModel;
function onNavigatingTo(args) {
    const page = args.object;
    color = page.navigationContext.bgColor;

    console.log(color);
    //console.log(color);
    page.bindingContext = new SettingsViewModel(color);
    page.on(gestures.GestureTypes.swipe, (args) => {
        //console.log(args.direction);
        if (args.direction == 2) {
              //frame.topmost().navigate("home/home_page");
        } else {
               frame.topmost().navigate({
                   moduleName:"help/help-page",
                   context:{ bgColor:color }
                }
                   );
        }

        });

}

function onDrawerButtonTap(args) {
    const sideDrawer = app.getRootView();
    sideDrawer.showDrawer();
}
function onHomeButtonTap(args) {
    frame.topmost().navigate({
        moduleName:"home/home-page",
        context:{ bgColor:color } });
}
function onListPickerLoaded(args) {
    console.log(args);
}
const getViewById = require("tns-core-modules/ui/core/view").getViewById;
const fs = require("tns-core-modules/file-system");

function onSaveTap(args) {

    //const picker = getElementsByTagName("ListPicker");
    const page = frame.topmost().currentPage;
    const listPicker = getViewById(page, "picker1");
    color = colors[listPicker.selectedIndex];
    //console.log(color);

    const documents = fs.knownFolders.documents();
    // const folder = documents.getFolder("resources");
    const file = documents.getFile("inf.txt");
    file.writeTextSync(color);

    frame.topmost().navigate({ moduleName: "settings/settings-page",
        transition: {
            name: "fade"
        },
        context: { bgColor:color }
    });
}
exports.onListPickerLoaded = onListPickerLoaded;
exports.onSaveTap = onSaveTap;
exports.onHomeButtonTap = onHomeButtonTap;
exports.onNavigatingTo = onNavigatingTo;
exports.onDrawerButtonTap = onDrawerButtonTap;
