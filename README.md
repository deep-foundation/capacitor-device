# @deep-foundation/capacitor-device
[![npm](https://img.shields.io/npm/v/@deep-foundation/capacitor-device.svg)](https://www.npmjs.com/package/@deep-foundation/capacitor-device)

Provides links based on [`@capacitor/device`](https://www.npmjs.com/package/@capacitor/device).

[Documentation](https://deep-foundation.github.io/capacitor-device/)

## How to use?
### Prerequisitions
- Install this package in your deep by using npm-packager

### By using DeepClient (DeepCase/programmatic)
- Insert a link of type Device 
- Change its object value to the object with propertied described in [Device Object Value](#device-object-value)
- 
### By using this library programatically
#### Save all information
```ts
import { saveDeviceInfo, getAllDeviceInfo } from '@deep-foundation/capacitor-device';
// Implicitly (if you do not pass info to saveDeviceInfo - it will save all information by default)
await saveDeviceInfo({deep, deviceLinkId});
// Explicitly
const allDeviceInfo = await getAllDeviceInfo();
await saveDeviceInfo({deep, deviceLinkId, info: allDeviceInfo});
```
#### Save specific information
```ts
import { saveDeviceInfo } from '@deep-foundation/capacitor-device';

const deviceBatteryInfo = await Device.getBatteryInfo();
await saveDeviceInfo({deep, deviceLinkId, info: deviceBatteryInfo});

const {value: languageCode} = await Device.getLanguageCode();
await saveDeviceInfo({deep, deviceLinkId, info: {languageCode}});

const {value: languageTag} = await Device.getLanguageTag();
await saveDeviceInfo({deep, deviceLinkId, info: {languageTag}});
```

#### Save information manually
```ts
const myDeviceData = {
  "uuid": "d787dc6b-041f-4a61-8078-d5573c2e7a4e",
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
};

await saveDeviceInfo({deep, deviceLinkId, info: myDeviceData});
```

## Device Object Value

The `Device` link can have object value that can have following properties:

- **name** (type: String): The name of the device.
- **operatingSystem** (type: String): The operating system of the device.
- **webViewVersion** (type: String): The version of the WebView on the device.
- **manufacturer** (type: String): The manufacturer of the device.
- **languageCode** (type: String): The language code set on the device.
- **batteryLevel** (type: Number): The battery level of the device.
- **languageTag** (type: String): The language tag set on the device.
- **isCharging** (type: Boolean): Whether the device is charging or not.
- **osVersion** (type: String): The version of the operating system on the device.
- **isVirtual** (type: Boolean): Whether the device is virtual or not.
- **platform** (type: String): The platform on which the device runs.
- **model** (type: String): The model of the device.  

No one field is required. You can add any of these fields as you want

### Fake Json
```json
{
  "uuid": "d787dc6b-041f-4a61-8078-d5573c2e7a4e",
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

## Update Handling

This package includes the `HandleUpdate` functionality (type: UpdateHandler) that is used to handle updates related to the `Device` object. `HandleUpdate` uses handler from `@freephoenix888/object-to-links-async-converter` to convert Device object value to links everytime when you update it

## Contribution

Feel free to contribute. Please fork the repository and submit a pull request for any bugs, improvements, or features.
