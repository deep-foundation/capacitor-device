import { BatteryInfo, GetLanguageCodeResult, LanguageTag , DeviceInfo as DeviceGeneralInfo} from "@capacitor/device";

/**
 * The `AllDeviceInfo` type includes all the device information fields provided by the Capacitor Device plugin.
 * 
 * It's a combination of several types, including {@link DeviceGeneralInfo} (general device information), {@link BatteryInfo} (battery status information), `languageCode` (the device's current language code), and `languageTag` (the device's current language tag).
 */
export type AllDeviceInfo = DeviceGeneralInfo &
BatteryInfo & { languageCode: GetLanguageCodeResult['value'] } & {
  languageTag: LanguageTag['value'];
};
