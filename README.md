[![npm](https://img.shields.io/npm/v/@deep-foundation/capacitor-device.svg)](https://www.npmjs.com/package/@deep-foundation/capacitor-device) 
[![Gitpod](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/deep-foundation/capacitor-device) 
[![Discord](https://badgen.net/badge/icon/discord?icon=discord&label&color=purple)](https://discord.gg/deep-foundation)

Provides links based on [`@capacitor/device`](https://www.npmjs.com/package/@capacitor/device).

[Documentation](https://deep-foundation.github.io/capacitor-device/)

## How to use?
### Prerequisitions
1. Install this package in your deep by using npm-packager

### By using DeepClient (DeepCase/programmatic)
1. Insert a link of type Device 
2.  Change its object value to the object with propertied described in [Device Object Value](#md:device-object-value)  
or  
Insert a link of any type with a any name of the list described in [Device Object Value](#md:device-object-value) from Device link to the same Device link and set its value to the value of the corresponding property of the Device object value


### By using this library programatically
- [Save all device information](https://deep-foundation.github.io/capacitor-device/functions/saveDeviceInfo.html#md:save-all-device-information)  
- [Save specific device information](https://deep-foundation.github.io/capacitor-device/functions/saveDeviceInfo.html#md:save-specific-device-information)  
- [Save information manually](https://deep-foundation.github.io/capacitor-device/functions/saveDeviceInfo.html#md:save-information-manually)  

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

This package includes the `HandleUpdate` functionality (type: UpdateHandler) that is used to handle updates related to the `Device` object. `HandleUpdate` uses handler from [`@freephoenix888/object-to-links-async-converter`](https://www.npmjs.com/package/@freephoenix888/object-to-links-async-converter) to convert Device object value to links everytime when you update it

## Contribution

Feel free to contribute. Please fork the repository and submit a pull request for any bugs, improvements, or features.
