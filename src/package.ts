
import {
  Package as BasePackage,
  PackageOptions as BasePackageOptions,
} from '@deep-foundation/deeplinks/imports/package.js';

/**
Represents a deep package

@remarks
Contains name of the package and all the links as the objects with id method which returns the id of the link.

@example
#### Use name field to get the name of the package
```ts
const package = new Package({deep});
const {name: packageName} = package;
```
#### Use id method to get the id of the link
```ts
const package = new Package({deep});
const batteryLevelValueLinkId = await package["batteryLevelValue"].id();
const batteryLevelTypeLinkId = await package["BatteryLevel"].id();
const languageTagValueLinkId = await package["languageTagValue"].id();
const languageTagTypeLinkId = await package["LanguageTag"].id();
const isChargingTypeLinkId = await package["IsCharging"].id();
const manufacturerValueLinkId = await package["manufacturerValue"].id();
const manufacturerTypeLinkId = await package["Manufacturer"].id();
const languageCodeValueLinkId = await package["languageCodeValue"].id();
const languageCodeTypeLinkId = await package["LanguageCode"].id();
const deviceTypeLinkId = await package["Device"].id();
const handleUpdateLinkId = await package["handleUpdate"].id();
const identifierTypeLinkId = await package["Identifier"].id();
const identifierValueLinkId = await package["identifierValue"].id();
const deviceValueLinkId = await package["deviceValue"].id();
const nameTypeLinkId = await package["Name"].id();
const nameValueLinkId = await package["nameValue"].id();
const operatingSystemTypeLinkId = await package["OperatingSystem"].id();
const operatingSystemValueLinkId = await package["operatingSystemValue"].id();
const osVersionTypeLinkId = await package["OsVersion"].id();
const osVersionValueLinkId = await package["osVersionValue"].id();
const isVirtualTypeLinkId = await package["IsVirtual"].id();
const platformTypeLinkId = await package["Platform"].id();
const platformValueLinkId = await package["platformValue"].id();
const modelTypeLinkId = await package["Model"].id();
const modelValueLinkId = await package["modelValue"].id();
const webViewVersionTypeLinkId = await package["WebViewVersion"].id();
const webViewVersionValueLinkId = await package["webViewVersionValue"].id();
```

#### Use idLocal method to get the local id of the link
```ts
const package = new Package({deep});
await package.applyMinilinks();
const batteryLevelValueLinkId = package["batteryLevelValue"].idLocal();
const batteryLevelTypeLinkId = package["BatteryLevel"].idLocal();
const languageTagValueLinkId = package["languageTagValue"].idLocal();
const languageTagTypeLinkId = package["LanguageTag"].idLocal();
const isChargingTypeLinkId = package["IsCharging"].idLocal();
const manufacturerValueLinkId = package["manufacturerValue"].idLocal();
const manufacturerTypeLinkId = package["Manufacturer"].idLocal();
const languageCodeValueLinkId = package["languageCodeValue"].idLocal();
const languageCodeTypeLinkId = package["LanguageCode"].idLocal();
const deviceTypeLinkId = package["Device"].idLocal();
const handleUpdateLinkId = package["handleUpdate"].idLocal();
const identifierTypeLinkId = package["Identifier"].idLocal();
const identifierValueLinkId = package["identifierValue"].idLocal();
const deviceValueLinkId = package["deviceValue"].idLocal();
const nameTypeLinkId = package["Name"].idLocal();
const nameValueLinkId = package["nameValue"].idLocal();
const operatingSystemTypeLinkId = package["OperatingSystem"].idLocal();
const operatingSystemValueLinkId = package["operatingSystemValue"].idLocal();
const osVersionTypeLinkId = package["OsVersion"].idLocal();
const osVersionValueLinkId = package["osVersionValue"].idLocal();
const isVirtualTypeLinkId = package["IsVirtual"].idLocal();
const platformTypeLinkId = package["Platform"].idLocal();
const platformValueLinkId = package["platformValue"].idLocal();
const modelTypeLinkId = package["Model"].idLocal();
const modelValueLinkId = package["modelValue"].idLocal();
const webViewVersionTypeLinkId = package["WebViewVersion"].idLocal();
const webViewVersionValueLinkId = package["webViewVersionValue"].idLocal();
```
#### Use name field to get the name of the link
```ts
const package = new Package({deep});
const batteryLevelValue = package["batteryLevelValue"].name;
const batteryLevel = package["BatteryLevel"].name;
const languageTagValue = package["languageTagValue"].name;
const languageTag = package["LanguageTag"].name;
const isCharging = package["IsCharging"].name;
const manufacturerValue = package["manufacturerValue"].name;
const manufacturer = package["Manufacturer"].name;
const languageCodeValue = package["languageCodeValue"].name;
const languageCode = package["LanguageCode"].name;
const device = package["Device"].name;
const handleUpdate = package["handleUpdate"].name;
const identifier = package["Identifier"].name;
const identifierValue = package["identifierValue"].name;
const deviceValue = package["deviceValue"].name;
const name = package["Name"].name;
const nameValue = package["nameValue"].name;
const operatingSystem = package["OperatingSystem"].name;
const operatingSystemValue = package["operatingSystemValue"].name;
const osVersion = package["OsVersion"].name;
const osVersionValue = package["osVersionValue"].name;
const isVirtual = package["IsVirtual"].name;
const platform = package["Platform"].name;
const platformValue = package["platformValue"].name;
const model = package["Model"].name;
const modelValue = package["modelValue"].name;
const webViewVersion = package["WebViewVersion"].name;
const webViewVersionValue = package["webViewVersionValue"].name;
```
*/
export class Package extends BasePackage {

  constructor(Options: PackageOptions) {
    super({
      ...Options,
      name: '@deep-foundation/capacitor-device',
    });
  }


      /**
      @example
      #### Use id method to get the id of the batteryLevelValue link
      ```ts
      const package = new Package({deep});
      const batteryLevelValueLinkId = await package["batteryLevelValue"].id();
      ```
      #### Use localId method to get the local id of the batteryLevelValue link
      ```ts
      const package = new Package({deep});
      const batteryLevelValueLinkId = await package["batteryLevelValue"].localId();
      ```
      #### Use name field to get the name of the batteryLevelValue link
      ```ts
      const package = new Package({deep});
      const batteryLevelValue = await package["batteryLevelValue"].name;
      ```
      */
      public "batteryLevelValue" = this.createEntity("batteryLevelValue");
      /**
      @example
      #### Use id method to get the id of the BatteryLevel link
      ```ts
      const package = new Package({deep});
      const batteryLevelTypeLinkId = await package["BatteryLevel"].id();
      ```
      #### Use localId method to get the local id of the BatteryLevel link
      ```ts
      const package = new Package({deep});
      const batteryLevelTypeLinkId = await package["BatteryLevel"].localId();
      ```
      #### Use name field to get the name of the BatteryLevel link
      ```ts
      const package = new Package({deep});
      const batteryLevel = await package["BatteryLevel"].name;
      ```
      */
      public "BatteryLevel" = this.createEntity("BatteryLevel");
      /**
      @example
      #### Use id method to get the id of the languageTagValue link
      ```ts
      const package = new Package({deep});
      const languageTagValueLinkId = await package["languageTagValue"].id();
      ```
      #### Use localId method to get the local id of the languageTagValue link
      ```ts
      const package = new Package({deep});
      const languageTagValueLinkId = await package["languageTagValue"].localId();
      ```
      #### Use name field to get the name of the languageTagValue link
      ```ts
      const package = new Package({deep});
      const languageTagValue = await package["languageTagValue"].name;
      ```
      */
      public "languageTagValue" = this.createEntity("languageTagValue");
      /**
      @example
      #### Use id method to get the id of the LanguageTag link
      ```ts
      const package = new Package({deep});
      const languageTagTypeLinkId = await package["LanguageTag"].id();
      ```
      #### Use localId method to get the local id of the LanguageTag link
      ```ts
      const package = new Package({deep});
      const languageTagTypeLinkId = await package["LanguageTag"].localId();
      ```
      #### Use name field to get the name of the LanguageTag link
      ```ts
      const package = new Package({deep});
      const languageTag = await package["LanguageTag"].name;
      ```
      */
      public "LanguageTag" = this.createEntity("LanguageTag");
      /**
      @example
      #### Use id method to get the id of the IsCharging link
      ```ts
      const package = new Package({deep});
      const isChargingTypeLinkId = await package["IsCharging"].id();
      ```
      #### Use localId method to get the local id of the IsCharging link
      ```ts
      const package = new Package({deep});
      const isChargingTypeLinkId = await package["IsCharging"].localId();
      ```
      #### Use name field to get the name of the IsCharging link
      ```ts
      const package = new Package({deep});
      const isCharging = await package["IsCharging"].name;
      ```
      */
      public "IsCharging" = this.createEntity("IsCharging");
      /**
      @example
      #### Use id method to get the id of the manufacturerValue link
      ```ts
      const package = new Package({deep});
      const manufacturerValueLinkId = await package["manufacturerValue"].id();
      ```
      #### Use localId method to get the local id of the manufacturerValue link
      ```ts
      const package = new Package({deep});
      const manufacturerValueLinkId = await package["manufacturerValue"].localId();
      ```
      #### Use name field to get the name of the manufacturerValue link
      ```ts
      const package = new Package({deep});
      const manufacturerValue = await package["manufacturerValue"].name;
      ```
      */
      public "manufacturerValue" = this.createEntity("manufacturerValue");
      /**
      @example
      #### Use id method to get the id of the Manufacturer link
      ```ts
      const package = new Package({deep});
      const manufacturerTypeLinkId = await package["Manufacturer"].id();
      ```
      #### Use localId method to get the local id of the Manufacturer link
      ```ts
      const package = new Package({deep});
      const manufacturerTypeLinkId = await package["Manufacturer"].localId();
      ```
      #### Use name field to get the name of the Manufacturer link
      ```ts
      const package = new Package({deep});
      const manufacturer = await package["Manufacturer"].name;
      ```
      */
      public "Manufacturer" = this.createEntity("Manufacturer");
      /**
      @example
      #### Use id method to get the id of the languageCodeValue link
      ```ts
      const package = new Package({deep});
      const languageCodeValueLinkId = await package["languageCodeValue"].id();
      ```
      #### Use localId method to get the local id of the languageCodeValue link
      ```ts
      const package = new Package({deep});
      const languageCodeValueLinkId = await package["languageCodeValue"].localId();
      ```
      #### Use name field to get the name of the languageCodeValue link
      ```ts
      const package = new Package({deep});
      const languageCodeValue = await package["languageCodeValue"].name;
      ```
      */
      public "languageCodeValue" = this.createEntity("languageCodeValue");
      /**
      @example
      #### Use id method to get the id of the LanguageCode link
      ```ts
      const package = new Package({deep});
      const languageCodeTypeLinkId = await package["LanguageCode"].id();
      ```
      #### Use localId method to get the local id of the LanguageCode link
      ```ts
      const package = new Package({deep});
      const languageCodeTypeLinkId = await package["LanguageCode"].localId();
      ```
      #### Use name field to get the name of the LanguageCode link
      ```ts
      const package = new Package({deep});
      const languageCode = await package["LanguageCode"].name;
      ```
      */
      public "LanguageCode" = this.createEntity("LanguageCode");
      /**
      @example
      #### Use id method to get the id of the Device link
      ```ts
      const package = new Package({deep});
      const deviceTypeLinkId = await package["Device"].id();
      ```
      #### Use localId method to get the local id of the Device link
      ```ts
      const package = new Package({deep});
      const deviceTypeLinkId = await package["Device"].localId();
      ```
      #### Use name field to get the name of the Device link
      ```ts
      const package = new Package({deep});
      const device = await package["Device"].name;
      ```
      */
      public "Device" = this.createEntity("Device");
      /**
      @example
      #### Use id method to get the id of the handleUpdate link
      ```ts
      const package = new Package({deep});
      const handleUpdateLinkId = await package["handleUpdate"].id();
      ```
      #### Use localId method to get the local id of the handleUpdate link
      ```ts
      const package = new Package({deep});
      const handleUpdateLinkId = await package["handleUpdate"].localId();
      ```
      #### Use name field to get the name of the handleUpdate link
      ```ts
      const package = new Package({deep});
      const handleUpdate = await package["handleUpdate"].name;
      ```
      */
      public "handleUpdate" = this.createEntity("handleUpdate");
      /**
      @example
      #### Use id method to get the id of the Identifier link
      ```ts
      const package = new Package({deep});
      const identifierTypeLinkId = await package["Identifier"].id();
      ```
      #### Use localId method to get the local id of the Identifier link
      ```ts
      const package = new Package({deep});
      const identifierTypeLinkId = await package["Identifier"].localId();
      ```
      #### Use name field to get the name of the Identifier link
      ```ts
      const package = new Package({deep});
      const identifier = await package["Identifier"].name;
      ```
      */
      public "Identifier" = this.createEntity("Identifier");
      /**
      @example
      #### Use id method to get the id of the identifierValue link
      ```ts
      const package = new Package({deep});
      const identifierValueLinkId = await package["identifierValue"].id();
      ```
      #### Use localId method to get the local id of the identifierValue link
      ```ts
      const package = new Package({deep});
      const identifierValueLinkId = await package["identifierValue"].localId();
      ```
      #### Use name field to get the name of the identifierValue link
      ```ts
      const package = new Package({deep});
      const identifierValue = await package["identifierValue"].name;
      ```
      */
      public "identifierValue" = this.createEntity("identifierValue");
      /**
      @example
      #### Use id method to get the id of the deviceValue link
      ```ts
      const package = new Package({deep});
      const deviceValueLinkId = await package["deviceValue"].id();
      ```
      #### Use localId method to get the local id of the deviceValue link
      ```ts
      const package = new Package({deep});
      const deviceValueLinkId = await package["deviceValue"].localId();
      ```
      #### Use name field to get the name of the deviceValue link
      ```ts
      const package = new Package({deep});
      const deviceValue = await package["deviceValue"].name;
      ```
      */
      public "deviceValue" = this.createEntity("deviceValue");
      /**
      @example
      #### Use id method to get the id of the Name link
      ```ts
      const package = new Package({deep});
      const nameTypeLinkId = await package["Name"].id();
      ```
      #### Use localId method to get the local id of the Name link
      ```ts
      const package = new Package({deep});
      const nameTypeLinkId = await package["Name"].localId();
      ```
      #### Use name field to get the name of the Name link
      ```ts
      const package = new Package({deep});
      const name = await package["Name"].name;
      ```
      */
      public "Name" = this.createEntity("Name");
      /**
      @example
      #### Use id method to get the id of the nameValue link
      ```ts
      const package = new Package({deep});
      const nameValueLinkId = await package["nameValue"].id();
      ```
      #### Use localId method to get the local id of the nameValue link
      ```ts
      const package = new Package({deep});
      const nameValueLinkId = await package["nameValue"].localId();
      ```
      #### Use name field to get the name of the nameValue link
      ```ts
      const package = new Package({deep});
      const nameValue = await package["nameValue"].name;
      ```
      */
      public "nameValue" = this.createEntity("nameValue");
      /**
      @example
      #### Use id method to get the id of the OperatingSystem link
      ```ts
      const package = new Package({deep});
      const operatingSystemTypeLinkId = await package["OperatingSystem"].id();
      ```
      #### Use localId method to get the local id of the OperatingSystem link
      ```ts
      const package = new Package({deep});
      const operatingSystemTypeLinkId = await package["OperatingSystem"].localId();
      ```
      #### Use name field to get the name of the OperatingSystem link
      ```ts
      const package = new Package({deep});
      const operatingSystem = await package["OperatingSystem"].name;
      ```
      */
      public "OperatingSystem" = this.createEntity("OperatingSystem");
      /**
      @example
      #### Use id method to get the id of the operatingSystemValue link
      ```ts
      const package = new Package({deep});
      const operatingSystemValueLinkId = await package["operatingSystemValue"].id();
      ```
      #### Use localId method to get the local id of the operatingSystemValue link
      ```ts
      const package = new Package({deep});
      const operatingSystemValueLinkId = await package["operatingSystemValue"].localId();
      ```
      #### Use name field to get the name of the operatingSystemValue link
      ```ts
      const package = new Package({deep});
      const operatingSystemValue = await package["operatingSystemValue"].name;
      ```
      */
      public "operatingSystemValue" = this.createEntity("operatingSystemValue");
      /**
      @example
      #### Use id method to get the id of the OsVersion link
      ```ts
      const package = new Package({deep});
      const osVersionTypeLinkId = await package["OsVersion"].id();
      ```
      #### Use localId method to get the local id of the OsVersion link
      ```ts
      const package = new Package({deep});
      const osVersionTypeLinkId = await package["OsVersion"].localId();
      ```
      #### Use name field to get the name of the OsVersion link
      ```ts
      const package = new Package({deep});
      const osVersion = await package["OsVersion"].name;
      ```
      */
      public "OsVersion" = this.createEntity("OsVersion");
      /**
      @example
      #### Use id method to get the id of the osVersionValue link
      ```ts
      const package = new Package({deep});
      const osVersionValueLinkId = await package["osVersionValue"].id();
      ```
      #### Use localId method to get the local id of the osVersionValue link
      ```ts
      const package = new Package({deep});
      const osVersionValueLinkId = await package["osVersionValue"].localId();
      ```
      #### Use name field to get the name of the osVersionValue link
      ```ts
      const package = new Package({deep});
      const osVersionValue = await package["osVersionValue"].name;
      ```
      */
      public "osVersionValue" = this.createEntity("osVersionValue");
      /**
      @example
      #### Use id method to get the id of the IsVirtual link
      ```ts
      const package = new Package({deep});
      const isVirtualTypeLinkId = await package["IsVirtual"].id();
      ```
      #### Use localId method to get the local id of the IsVirtual link
      ```ts
      const package = new Package({deep});
      const isVirtualTypeLinkId = await package["IsVirtual"].localId();
      ```
      #### Use name field to get the name of the IsVirtual link
      ```ts
      const package = new Package({deep});
      const isVirtual = await package["IsVirtual"].name;
      ```
      */
      public "IsVirtual" = this.createEntity("IsVirtual");
      /**
      @example
      #### Use id method to get the id of the Platform link
      ```ts
      const package = new Package({deep});
      const platformTypeLinkId = await package["Platform"].id();
      ```
      #### Use localId method to get the local id of the Platform link
      ```ts
      const package = new Package({deep});
      const platformTypeLinkId = await package["Platform"].localId();
      ```
      #### Use name field to get the name of the Platform link
      ```ts
      const package = new Package({deep});
      const platform = await package["Platform"].name;
      ```
      */
      public "Platform" = this.createEntity("Platform");
      /**
      @example
      #### Use id method to get the id of the platformValue link
      ```ts
      const package = new Package({deep});
      const platformValueLinkId = await package["platformValue"].id();
      ```
      #### Use localId method to get the local id of the platformValue link
      ```ts
      const package = new Package({deep});
      const platformValueLinkId = await package["platformValue"].localId();
      ```
      #### Use name field to get the name of the platformValue link
      ```ts
      const package = new Package({deep});
      const platformValue = await package["platformValue"].name;
      ```
      */
      public "platformValue" = this.createEntity("platformValue");
      /**
      @example
      #### Use id method to get the id of the Model link
      ```ts
      const package = new Package({deep});
      const modelTypeLinkId = await package["Model"].id();
      ```
      #### Use localId method to get the local id of the Model link
      ```ts
      const package = new Package({deep});
      const modelTypeLinkId = await package["Model"].localId();
      ```
      #### Use name field to get the name of the Model link
      ```ts
      const package = new Package({deep});
      const model = await package["Model"].name;
      ```
      */
      public "Model" = this.createEntity("Model");
      /**
      @example
      #### Use id method to get the id of the modelValue link
      ```ts
      const package = new Package({deep});
      const modelValueLinkId = await package["modelValue"].id();
      ```
      #### Use localId method to get the local id of the modelValue link
      ```ts
      const package = new Package({deep});
      const modelValueLinkId = await package["modelValue"].localId();
      ```
      #### Use name field to get the name of the modelValue link
      ```ts
      const package = new Package({deep});
      const modelValue = await package["modelValue"].name;
      ```
      */
      public "modelValue" = this.createEntity("modelValue");
      /**
      @example
      #### Use id method to get the id of the WebViewVersion link
      ```ts
      const package = new Package({deep});
      const webViewVersionTypeLinkId = await package["WebViewVersion"].id();
      ```
      #### Use localId method to get the local id of the WebViewVersion link
      ```ts
      const package = new Package({deep});
      const webViewVersionTypeLinkId = await package["WebViewVersion"].localId();
      ```
      #### Use name field to get the name of the WebViewVersion link
      ```ts
      const package = new Package({deep});
      const webViewVersion = await package["WebViewVersion"].name;
      ```
      */
      public "WebViewVersion" = this.createEntity("WebViewVersion");
      /**
      @example
      #### Use id method to get the id of the webViewVersionValue link
      ```ts
      const package = new Package({deep});
      const webViewVersionValueLinkId = await package["webViewVersionValue"].id();
      ```
      #### Use localId method to get the local id of the webViewVersionValue link
      ```ts
      const package = new Package({deep});
      const webViewVersionValueLinkId = await package["webViewVersionValue"].localId();
      ```
      #### Use name field to get the name of the webViewVersionValue link
      ```ts
      const package = new Package({deep});
      const webViewVersionValue = await package["webViewVersionValue"].name;
      ```
      */
      public "webViewVersionValue" = this.createEntity("webViewVersionValue");

}

export type PackageOptions = Omit<BasePackageOptions, 'name'>;
