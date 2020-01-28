const observableModule = require("tns-core-modules/data/observable");

const SelectedPageService = require("../shared/selected-page-service");
const colors = ["black", "blue", "green", "gray"];
function SettingsViewModel(color) {
    SelectedPageService.getInstance().updateSelectedPage("Settings");

    const viewModel = observableModule.fromObject({
            colors:colors,
            color:color
            //sel_background:sel_background
    });

    return viewModel;
}

module.exports = SettingsViewModel;
