import {
  BatteryInfo,
  GetLanguageCodeResult,
  LanguageTag,
  DeviceInfo as DeviceGeneralInfo,
} from '@capacitor/device';

/**
 * Includes all the device information fields provided by the `@capacitor/device` package.
 * 
 * @remarks
 * It's a combination of several types, including {@link DeviceGeneralInfo} (general device information), {@link BatteryInfo} (battery status information), `languageCode` (the device's current language code), and `languageTag` (the device's current language tag).
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
export type DeviceInfo = Partial<
  DeviceGeneralInfo &
    BatteryInfo & { languageCode: GetLanguageCodeResult['value'] } & {
      languageTag: LanguageTag['value'];
    }
>;
