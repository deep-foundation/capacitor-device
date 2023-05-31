import { Device } from "@capacitor/device";
import { AllDeviceInfo } from "./all-device-info.js";

export async function getAllDeviceInfo(): Promise<AllDeviceInfo> {
   return {
     ...(await Device.getInfo()),
     ...(await Device.getBatteryInfo()),
     ...(await Device.getId()),
     ...{
       languageCode: (await Device.getLanguageCode()).value,
     },
     ...{
       languageTag: (await Device.getLanguageCode()).value,
     },
   };
 }
 
