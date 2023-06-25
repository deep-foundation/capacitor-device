[![npm](https://img.shields.io/npm/v/@deep-foundation/capacitor-device.svg)](https://www.npmjs.com/package/@deep-foundation/capacitor-device) 
[![Gitpod](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/deep-foundation/capacitor-device) 
[![Discord](https://badgen.net/badge/icon/discord?icon=discord&label&color=purple)](https://discord.gg/deep-foundation)

Provides links based on [`@capacitor/device`](https://www.npmjs.com/package/@capacitor/device). 

[**Documentation**](https://deep-foundation.github.io/capacitor-device/) 

[**List of links**](https://deep-foundation.github.io/capacitor-device/enums/LinkName.html)

## Prerequisitions
- Install this package in your deep by using npm-packager
- Provide permissions to this package

## Usage

### Manually
1. Insert a link of type [`Device`] 
2.  Change its object value to the object with propertied described in [Device Object Value](#md:device-object-value)  
or  
Insert a link of any type with a any name of the list described in [Device Object Value](#md:device-object-value) from [`Device`] link to the same [`Device`] link and set its value to the value of the corresponding property of the [`Device`] object value


### By using this library programatically
- [Save all device information](https://deep-foundation.github.io/capacitor-device/functions/saveDeviceInfo.html#md:save-all-device-information)  
- [Save specific device information](https://deep-foundation.github.io/capacitor-device/functions/saveDeviceInfo.html#md:save-specific-device-information)  
- [Save information manually](https://deep-foundation.github.io/capacitor-device/functions/saveDeviceInfo.html#md:save-information-manually)  

## Device Object Value

The [`Device`] link can have object value that can have following properties:

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

Information about possible fields can be found in the [`DeviceInfo` interface](https://deep-foundation.github.io/capacitor-device/types/DeviceInfo.html)  

[Example of Device Object Value](https://deep-foundation.github.io/capacitor-device/types/deviceInfo.html#md:device-info-example)

## Update Handling

[`Device`] updates are handled by the [`UpdateHandler`](https://freephoenix888.github.io/object-to-links-async-converter/enums/LinkName.html#UpdateHandler) to represent [`Device`] object value as links

## Contribution

Feel free to contribute. Please fork the repository and submit a pull request for any bugs, improvements, or features.

[`Device`]: https://deep-foundation.github.io/firebase-push-notification/enums/LinkName.html#Device