const app = require("tns-core-modules/application");

const HomeViewModel = require("./home-view-model");
const gestures = require("tns-core-modules/ui/gestures");
const frame = require("tns-core-modules/ui/frame");
let color = "";
function onNavigatingTo(args) {

    const page = args.object;
    //console.log("bg_Color: ", page.navigationContext);
    color = page.navigationContext.bgColor;

    page.bindingContext = new HomeViewModel(color);


    page.on(gestures.GestureTypes.swipe, (args) => {
        console.log(args.direction);
        if (args.direction == 2) {
        frame.topmost().navigate({ moduleName:"help/help-page",
        context:{ bgColor:color } });
        } else {

        //frame.topmost().navigate("left");
        }
        });
}

function onDrawerButtonTap(args) {
    const sideDrawer = app.getRootView();

    sideDrawer.showDrawer();
}

function onSettingsButtonTap(args) {
    frame.topmost().navigate({ moduleName:"settings/settings-page",
context:{ bgColor:color } });

}
function onHelpButtonTap(args) {
    frame.topmost().navigate({ moduleName:"help/help-page",
context:{ bgColor:color } });
}
exports.onHelpButtonTap = onHelpButtonTap;
exports.onNavigatingTo = onNavigatingTo;
exports.onDrawerButtonTap = onDrawerButtonTap;
exports.onSettingsButtonTap = onSettingsButtonTap;
