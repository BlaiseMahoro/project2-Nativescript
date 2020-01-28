const app = require("tns-core-modules/application");

const HelpViewModel = require("./help-view-model");
const gestures = require("tns-core-modules/ui/gestures");
const frame = require("tns-core-modules/ui/frame");
let color = "";
function onNavigatingTo(args) {
    const page = args.object;
    color = page.navigationContext.bgColor;
    page.on(gestures.GestureTypes.swipe, (args) => {
        if (args.direction == 2) {
              frame.topmost().navigate({
                  moduleName:"settings/settings-page",
                context:{ bgColor:color } });
        } else {
            frame.topmost().navigate({
                moduleName:"home/home-page",
            context:{ bgColor:color } });
        }
        });
    page.bindingContext = new HelpViewModel(color);
    
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
exports.onHomeButtonTap = onHomeButtonTap;
exports.onNavigatingTo = onNavigatingTo;
exports.onDrawerButtonTap = onDrawerButtonTap;