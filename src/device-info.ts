import { BatteryInfo, GetLanguageCodeResult, LanguageTag, DeviceInfo as DeviceGeneralInfo } from "@capacitor/device";
import { AllDeviceInfo } from "./all-device-info";

/**
 * The `DeviceInfo` type represents a potentially incomplete set of device information.
 * 
 * This type is a partial version of {@link AllDeviceInfo}, meaning that it includes the same fields but all of them are optional. This is useful for scenarios where only some pieces of device information might be available.
 */
export type DeviceInfo = Partial<AllDeviceInfo>;
