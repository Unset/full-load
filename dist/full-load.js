// replace below with your path to OpenRCT2 - usually on C:/Users/<user>/Documents
/// <reference path="../lib/openrct2.d.ts" />
var main = function () {
    ui.registerMenuItem(shortEnglishName, createWindowIfNotExists);
    context.subscribe('interval.day', function (_) { return forceOnAll(); });
};
var metaData = {
    name: 'full-load',
    version: '0.1.1',
    authors: ['Armenlos'],
    type: 'remote',
    licence: 'MIT',
    main: main,
};
var shortEnglishName = "Always 'Full load'";
registerPlugin(metaData);
var infoWindow = null;
var infoWindowClassification = 'full-load';
function createWindowIfNotExists() {
    var infoWindow = ui.getWindow(infoWindowClassification);
    if (infoWindow) {
        infoWindow.bringToFront();
    }
    else {
        infoWindow = ui.openWindow({
            classification: infoWindowClassification,
            title: shortEnglishName + " " + metaData.version + " by " + metaData.authors,
            width: 600,
            height: 300,
            widgets: [
                {
                    type: 'label',
                    name: 'blob1-of-plugin',
                    x: 3,
                    y: 23,
                    width: 590,
                    height: 80,
                    text: "This plugin will configure all rides in your park everyday:\n - Wait for: 'Full load'\n - Enable 'Maximum waiting time'\n - Inspection: 'Every 10 minutes'\n\nAlso, if a ride has the default RCT2 operating settings:\n - Minimum waiting time: '1seconds'"
                },
                {
                    type: 'label',
                    name: 'blob2-of-plugin',
                    x: 3,
                    y: 120,
                    width: 590,
                    height: 80,
                    text: "CAUTION: When minimum waiting time is low, some ride design may clog cars.\nFor example: 2 cars are on their way to the chain lift, and the chain lift stops due to a break down.\nThe first car gets on the chain, but the second car bounces off.\n\nConfigure at least one setting (for example setting the minimum waiting time to 9 instead of the default 10) \nto prevent this plugin from setting it to 1. Or use another ride design."
                },
                {
                    type: 'label',
                    name: 'blob3-of-plugin',
                    x: 3,
                    y: 250,
                    width: 590,
                    height: 80,
                    text: "NOTE: These 'Full Load' settings match my personal playing style. \n They are not prefect or universal. \n It is MIT licensed, feel free to copy the source code and make some changes! \nThanks to wisnia74's for his mod-template and all the OpenRCT2 folks to make plugins possible!"
                }
            ],
            onClose: function onClose() {
                infoWindow = null;
            }
        });
    }
}
function forceOnAll() {
    map.rides.filter(notEmpty).forEach(function (ride) {
        if (hasVanillaSettings(ride)) {
            ride.minimumWaitingTime = 1;
        }
        ride.departFlags = ride.departFlags | DepartFlags.WaitFor | DepartFlags.MaximumWaitingTime;
        ride.inspectionInterval = 0;
    });
}
function notEmpty(value) {
    return value !== null && value !== undefined;
}
function hasVanillaSettings(ride) {
    return ride.minimumWaitingTime == 10
        && ride.maximumWaitingTime === 60
        && ((ride.departFlags & DepartFlags.MinimumWaitingTime) == DepartFlags.MinimumWaitingTime) //This makes sure it is ON
        && ((ride.departFlags & (DepartFlags.WaitFor | DepartFlags.MaximumWaitingTime | DepartFlags.AnotherTrainArives | DepartFlags.Synchronise)) == 0); //This makes sure it is OFF
}
var DepartFlags;
(function (DepartFlags) {
    DepartFlags[DepartFlags["None"] = 0] = "None";
    DepartFlags[DepartFlags["Flag0"] = 1] = "Flag0";
    DepartFlags[DepartFlags["Flag1"] = 2] = "Flag1";
    DepartFlags[DepartFlags["Flag2"] = 4] = "Flag2";
    DepartFlags[DepartFlags["WaitFor"] = 8] = "WaitFor";
    DepartFlags[DepartFlags["AnotherTrainArives"] = 16] = "AnotherTrainArives";
    DepartFlags[DepartFlags["Synchronise"] = 32] = "Synchronise";
    DepartFlags[DepartFlags["MinimumWaitingTime"] = 64] = "MinimumWaitingTime";
    DepartFlags[DepartFlags["MaximumWaitingTime"] = 128] = "MaximumWaitingTime";
})(DepartFlags || (DepartFlags = {}));
