[![npm](https://img.shields.io/npm/v/@deep-foundation/capacitor-device.svg)](https://www.npmjs.com/package/@deep-foundation/capacitor-device) 
[![Gitpod](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/deep-foundation/capacitor-device) 
[![Discord](https://badgen.net/badge/icon/discord?icon=discord&label&color=purple)](https://discord.gg/deep-foundation)

Provides links based on [`@capacitor/device`](https://www.npmjs.com/package/@capacitor/device). 

[**Documentation**](https://deep-foundation.github.io/capacitor-device/) 

[**List of links**](https://deep-foundation.github.io/capacitor-device/enums/LinkName.html)

## Device Object Value

The [`Device`] link can have object value.  
No one field is required. You can add any fields as you want.  Only the fields that are supported by this package will be represented as links   
[Supported fields can be found in the `DeviceInfo` interface](https://deep-foundation.github.io/capacitor-device/types/DeviceInfo.html)  
[Example of Device Object Value](https://deep-foundation.github.io/capacitor-device/types/DeviceInfo.html#md:device-info-example)

## Prerequisitions
- Install this package in your deep by using npm-packager
- Provide permissions to this package

## Usage

### Manually
1. Insert a link of type [`Device`] 
2.  Change its object value to the object with properties described in [Device Object Value](#md:device-object-value) and this update will be handled by the [`UpdateHandler`](https://freephoenix888.github.io/object-to-links-async-converter/enums/LinkName.html#UpdateHandler) to represent [`Device`] object value as links
or  
Insert a link of any type with a any name of the list described in [Device Object Value](#md:device-object-value) from [`Device`] link to the same [`Device`] link and set its value to the value of the corresponding property of the [`Device`] object value

### By using this library programatically
- [Save all device information](https://deep-foundation.github.io/capacitor-device/functions/saveDeviceInfo.html#md:save-all-device-information)  
- [Save specific device information](https://deep-foundation.github.io/capacitor-device/functions/saveDeviceInfo.html#md:save-specific-device-information)  
- [Save information manually](https://deep-foundation.github.io/capacitor-device/functions/saveDeviceInfo.html#md:save-information-manually)  

## Update Handling

[`Device`] updates are handled by the [`UpdateHandler`](https://freephoenix888.github.io/object-to-links-async-converter/enums/LinkName.html#UpdateHandler) to represent [`Device`] object value as links

## Contribution

Feel free to contribute. Please fork the repository and submit a pull request for any bugs, improvements, or features.

[`Device`]: https://deep-foundation.github.io/capacitor-device/enums/LinkName.html#Device