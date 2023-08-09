import { Device } from "@capacitor/device";
import { DeviceInfo } from './device-info.js.js';

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
  const deviceInfo = await Device.getInfo();

   return {
     ...deviceInfo,
     ...(await Device.getId()),
     ...{
       languageCode: (await Device.getLanguageCode()).value,
     },
     ...{
       languageTag: (await Device.getLanguageCode()).value,
     },
   };
 }
 