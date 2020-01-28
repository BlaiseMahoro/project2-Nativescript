const observableModule = require("tns-core-modules/data/observable");

const SelectedPageService = require("../shared/selected-page-service");
const items = [{ name:"Home" }, { name: "Help" }, { name:"Settings" }];
function MenuViewModel(color) {
    SelectedPageService.getInstance().updateSelectedPage("Home");

    const viewModel = observableModule.fromObject({
        /* Add your view model properties here */
        items:items,
        color:color
    });

    return viewModel;
}

module.exports = MenuViewModel;
