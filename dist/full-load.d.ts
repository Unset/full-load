/// <reference path="../lib/openrct2.d.ts" />
declare const main: () => void;
declare const metaData: PluginMetadata;
declare const shortEnglishName = "Always 'Full load'";
declare let infoWindow: Window;
declare const infoWindowClassification = "full-load";
declare function createWindowIfNotExists(): void;
declare function forceOnAll(): void;
declare function notEmpty<TValue>(value: TValue | null | undefined): value is TValue;
declare function hasVanillaSettings(ride: Ride): boolean;
declare enum DepartFlags {
    None = 0,
    Flag0 = 1,
    Flag1 = 2,
    Flag2 = 4,
    WaitFor = 8,
    AnotherTrainArives = 16,
    Synchronise = 32,
    MinimumWaitingTime = 64,
    MaximumWaitingTime = 128
}
