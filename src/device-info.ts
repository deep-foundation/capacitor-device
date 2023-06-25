import { BatteryInfo, GetLanguageCodeResult, LanguageTag, DeviceInfo as DeviceGeneralInfo } from "@capacitor/device";
import { AllDeviceInfo } from "./all-device-info";

/**
 * The `DeviceInfo` type represents a potentially incomplete set of device information.
 * 
 * This type is a partial version of {@link AllDeviceInfo}, meaning that it includes the same fields but all of them are optional. This is useful for scenarios where only some pieces of device information might be available.
 * 
 * @example
 * #### Device Info Example
```ts
const deviceInfo: DeviceInfo = {
  "identifier": "d787dc6b-041f-4a61-8078-d5573c2e7a4e",
  "model": "X11",
  "platform": "web",
  "isVirtual": false,
  "osVersion": "x86.64",
  "isCharging": true,
  "languageTag": "en",
  "batteryLevel": 1,
  "languageCode": "en",
  "manufacturer": "Google Inc.",
  "webViewVersion": "113.0.0.0",
  "operatingSystem": "unknown"
}
```
 */
export type DeviceInfo = Partial<AllDeviceInfo>;
