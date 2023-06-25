import { Device } from "@capacitor/device";
import { DeviceInfo } from "./device-info.js";

/**
 * Gets all information about the device. 
 *
 * @example
 * ```
 * const deviceInfo = await getAllDeviceInfo();
 * ```
 */
export async function getAllDeviceInfo(): Promise<DeviceInfo> {
  const deviceInfo = await Device.getInfo();
  let batteryInfo = {};
  if (!['ios', 'mac'].includes(deviceInfo.operatingSystem)) {
    batteryInfo = await Device.getBatteryInfo();
  }
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
 