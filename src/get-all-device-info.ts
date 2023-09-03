import { Device } from "@capacitor/device";
import { DeviceInfo } from './device-info.js';

/**
 * Gets all information about the device. 
 *
 * @remarks
 * Battery information is not available on iOS or macOS
 * This method does not get data from deep. It uses local device information
 * 
 * @example
 * ```
 * const deviceInfo = await getAllDeviceInfo();
 * ```
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
 