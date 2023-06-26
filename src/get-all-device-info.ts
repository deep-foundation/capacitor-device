import { Device } from "@capacitor/device";
import { DeviceInfo } from "./device-info.js";

/**
 * Gets all information about the device. 
 *
 * @example
 * ```
 * const deviceInfo = await getAllDeviceInfo();
 * ```
 * 
 * @remarks
 * Battery information is not available on iOS or macOS
 */
export async function getAllDeviceInfo(): Promise<DeviceInfo> {
  console.log("deviceInfo",await Device.getInfo())
  const deviceInfo = await Device.getInfo();
  console.log("deviceInfo",deviceInfo)
  console.log("deviceInfo.os",deviceInfo.operatingSystem)
  console.log("deviceInfo.manufacturer",deviceInfo.manufacturer)
  console.log("deviceInfo.platform",deviceInfo.platform)

  let batteryInfo = {};
  if (!['ios', 'mac', 'unknown'].includes(deviceInfo.operatingSystem)) {
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
 