const observableModule = require("tns-core-modules/data/observable");

const SelectedPageService = require("../shared/selected-page-service");
const colors = ["black", "lightblue", "green", "gray"];
function SettingsViewModel(color) {
    SelectedPageService.getInstance().updateSelectedPage("Settings");
    const sel_index = colors.indexOf(color);
    const viewModel = observableModule.fromObject({
            colors:colors,
            color:color,
            sel_index:sel_index
            //sel_background:sel_background
    });

    return viewModel;
}

module.exports = SettingsViewModel;
