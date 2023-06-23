import { Device } from "@capacitor/device";
import { AllDeviceInfo } from "./all-device-info.js";

/**
 * Asynchronously retrieves comprehensive information about the device. 
 *
 * This function aggregates data from various sources, specifically using several methods from the `Device` class 
 * provided by the "@capacitor/device" module. The methods used include:
 *  - Device.getInfo()
 *  - Device.getBatteryInfo()
 *  - Device.getId()
 *  - Device.getLanguageCode()
 * 
 * The return object includes data from all of these sources.
 *
 * @returns {Promise<AllDeviceInfo>} A Promise that resolves with an `AllDeviceInfo` object that includes all device information.
 * 
 * @example
 * ```
 * getAllDeviceInfo().then(info => console.log(info));
 * ```
 *
 * Note: To get detailed documentation about the methods used from the `Device` class, refer to the official 
 * documentation for "@capacitor/device".
 *
 * @export
 * @async
 * @function getAllDeviceInfo
 */
export async function getAllDeviceInfo(): Promise<AllDeviceInfo> {
  const deviceInfo = await Device.getInfo();
  const batteryInfo = deviceInfo.platform !== 'ios' ? await Device.getBatteryInfo() : {};
   return {
     ...deviceInfo,
     ...batteryInfo,
     ...(await Device.getId()),
     ...{
       languageCode: (await Device.getLanguageCode()).value,
     },
     ...{
       languageTag: (await Device.getLanguageCode()).value,
     },
   };
 }
 