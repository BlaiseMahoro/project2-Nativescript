const observableModule = require("tns-core-modules/data/observable");

const SelectedPageService = require("../shared/selected-page-service");

function HelpViewModel(color) {
    SelectedPageService.getInstance().updateSelectedPage("Featured");

    const viewModel = observableModule.fromObject({
        /* Add your view model properties here */
        color:color
    });

    return viewModel;
}

module.exports = HelpViewModel;
