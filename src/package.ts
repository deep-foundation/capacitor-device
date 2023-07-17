
import {Package as BasePackage} from '@deep-foundation/deeplinks/imports/package';

/**
 * Represents a deep package
 * 
 * @remarks
 * Contains name of the package and all the links as the objects with id method which returns the id of the link.
 * 
 * @example
 * #### Use name field to get the name of the package
```ts
const package = new Package({deep});
const {name: packageName} = package;
```
 * #### Use id method to get the id of the link
```ts
const package = new Package({deep});

const batteryLevelValueLinkId = await package.batteryLevelValue.id();

const BatteryLevelLinkId = await package.BatteryLevel.id();

const languageTagValueLinkId = await package.languageTagValue.id();

const LanguageTagLinkId = await package.LanguageTag.id();

const IsChargingLinkId = await package.IsCharging.id();

const manufacturerValueLinkId = await package.manufacturerValue.id();

const ManufacturerLinkId = await package.Manufacturer.id();

const languageCodeValueLinkId = await package.languageCodeValue.id();

const LanguageCodeLinkId = await package.LanguageCode.id();

const DeviceLinkId = await package.Device.id();

const handleUpdateLinkId = await package.handleUpdate.id();

const IdentifierLinkId = await package.Identifier.id();

const identifierValueLinkId = await package.identifierValue.id();

const deviceValueLinkId = await package.deviceValue.id();

const NameLinkId = await package.Name.id();

const nameValueLinkId = await package.nameValue.id();

const OperatingSystemLinkId = await package.OperatingSystem.id();

const operatingSystemValueLinkId = await package.operatingSystemValue.id();

const OsVersionLinkId = await package.OsVersion.id();

const osVersionValueLinkId = await package.osVersionValue.id();

const IsVirtualLinkId = await package.IsVirtual.id();

const PlatformLinkId = await package.Platform.id();

const platformValueLinkId = await package.platformValue.id();

const ModelLinkId = await package.Model.id();

const modelValueLinkId = await package.modelValue.id();

const WebViewVersionLinkId = await package.WebViewVersion.id();

const webViewVersionValueLinkId = await package.webViewVersionValue.id();
```
  *
  * #### Use idLocal method to get the local id of the link
```ts
const package = new Package({deep});

const batteryLevelValueLinkId = package.batteryLevelValue.idLocal();

const BatteryLevelLinkId = package.BatteryLevel.idLocal();

const languageTagValueLinkId = package.languageTagValue.idLocal();

const LanguageTagLinkId = package.LanguageTag.idLocal();

const IsChargingLinkId = package.IsCharging.idLocal();

const manufacturerValueLinkId = package.manufacturerValue.idLocal();

const ManufacturerLinkId = package.Manufacturer.idLocal();

const languageCodeValueLinkId = package.languageCodeValue.idLocal();

const LanguageCodeLinkId = package.LanguageCode.idLocal();

const DeviceLinkId = package.Device.idLocal();

const handleUpdateLinkId = package.handleUpdate.idLocal();

const IdentifierLinkId = package.Identifier.idLocal();

const identifierValueLinkId = package.identifierValue.idLocal();

const deviceValueLinkId = package.deviceValue.idLocal();

const NameLinkId = package.Name.idLocal();

const nameValueLinkId = package.nameValue.idLocal();

const OperatingSystemLinkId = package.OperatingSystem.idLocal();

const operatingSystemValueLinkId = package.operatingSystemValue.idLocal();

const OsVersionLinkId = package.OsVersion.idLocal();

const osVersionValueLinkId = package.osVersionValue.idLocal();

const IsVirtualLinkId = package.IsVirtual.idLocal();

const PlatformLinkId = package.Platform.idLocal();

const platformValueLinkId = package.platformValue.idLocal();

const ModelLinkId = package.Model.idLocal();

const modelValueLinkId = package.modelValue.idLocal();

const WebViewVersionLinkId = package.WebViewVersion.idLocal();

const webViewVersionValueLinkId = package.webViewVersionValue.idLocal();

```
  */

export class Package extends BasePackage {


  /**
   * @example
   * #### Use id method to get the id of the link
```ts
const package = new Package({deep});
const batteryLevelValueLinkId = await package.batteryLevelValue.id();
```
    * #### Use localId method to get the local id of the link
```ts
const package = new Package({deep});
const batteryLevelValueLinkId = await package.batteryLevelValue.localId();
```
    */
  public batteryLevelValue = this.createEntity("batteryLevelValue");
  /**
   * @example
   * #### Use id method to get the id of the link
```ts
const package = new Package({deep});
const BatteryLevelLinkId = await package.BatteryLevel.id();
```
    * #### Use localId method to get the local id of the link
```ts
const package = new Package({deep});
const BatteryLevelLinkId = await package.BatteryLevel.localId();
```
    */
  public BatteryLevel = this.createEntity("BatteryLevel");
  /**
   * @example
   * #### Use id method to get the id of the link
```ts
const package = new Package({deep});
const languageTagValueLinkId = await package.languageTagValue.id();
```
    * #### Use localId method to get the local id of the link
```ts
const package = new Package({deep});
const languageTagValueLinkId = await package.languageTagValue.localId();
```
    */
  public languageTagValue = this.createEntity("languageTagValue");
  /**
   * @example
   * #### Use id method to get the id of the link
```ts
const package = new Package({deep});
const LanguageTagLinkId = await package.LanguageTag.id();
```
    * #### Use localId method to get the local id of the link
```ts
const package = new Package({deep});
const LanguageTagLinkId = await package.LanguageTag.localId();
```
    */
  public LanguageTag = this.createEntity("LanguageTag");
  /**
   * @example
   * #### Use id method to get the id of the link
```ts
const package = new Package({deep});
const IsChargingLinkId = await package.IsCharging.id();
```
    * #### Use localId method to get the local id of the link
```ts
const package = new Package({deep});
const IsChargingLinkId = await package.IsCharging.localId();
```
    */
  public IsCharging = this.createEntity("IsCharging");
  /**
   * @example
   * #### Use id method to get the id of the link
```ts
const package = new Package({deep});
const manufacturerValueLinkId = await package.manufacturerValue.id();
```
    * #### Use localId method to get the local id of the link
```ts
const package = new Package({deep});
const manufacturerValueLinkId = await package.manufacturerValue.localId();
```
    */
  public manufacturerValue = this.createEntity("manufacturerValue");
  /**
   * @example
   * #### Use id method to get the id of the link
```ts
const package = new Package({deep});
const ManufacturerLinkId = await package.Manufacturer.id();
```
    * #### Use localId method to get the local id of the link
```ts
const package = new Package({deep});
const ManufacturerLinkId = await package.Manufacturer.localId();
```
    */
  public Manufacturer = this.createEntity("Manufacturer");
  /**
   * @example
   * #### Use id method to get the id of the link
```ts
const package = new Package({deep});
const languageCodeValueLinkId = await package.languageCodeValue.id();
```
    * #### Use localId method to get the local id of the link
```ts
const package = new Package({deep});
const languageCodeValueLinkId = await package.languageCodeValue.localId();
```
    */
  public languageCodeValue = this.createEntity("languageCodeValue");
  /**
   * @example
   * #### Use id method to get the id of the link
```ts
const package = new Package({deep});
const LanguageCodeLinkId = await package.LanguageCode.id();
```
    * #### Use localId method to get the local id of the link
```ts
const package = new Package({deep});
const LanguageCodeLinkId = await package.LanguageCode.localId();
```
    */
  public LanguageCode = this.createEntity("LanguageCode");
  /**
   * @example
   * #### Use id method to get the id of the link
```ts
const package = new Package({deep});
const DeviceLinkId = await package.Device.id();
```
    * #### Use localId method to get the local id of the link
```ts
const package = new Package({deep});
const DeviceLinkId = await package.Device.localId();
```
    */
  public Device = this.createEntity("Device");
  /**
   * @example
   * #### Use id method to get the id of the link
```ts
const package = new Package({deep});
const handleUpdateLinkId = await package.handleUpdate.id();
```
    * #### Use localId method to get the local id of the link
```ts
const package = new Package({deep});
const handleUpdateLinkId = await package.handleUpdate.localId();
```
    */
  public handleUpdate = this.createEntity("handleUpdate");
  /**
   * @example
   * #### Use id method to get the id of the link
```ts
const package = new Package({deep});
const IdentifierLinkId = await package.Identifier.id();
```
    * #### Use localId method to get the local id of the link
```ts
const package = new Package({deep});
const IdentifierLinkId = await package.Identifier.localId();
```
    */
  public Identifier = this.createEntity("Identifier");
  /**
   * @example
   * #### Use id method to get the id of the link
```ts
const package = new Package({deep});
const identifierValueLinkId = await package.identifierValue.id();
```
    * #### Use localId method to get the local id of the link
```ts
const package = new Package({deep});
const identifierValueLinkId = await package.identifierValue.localId();
```
    */
  public identifierValue = this.createEntity("identifierValue");
  /**
   * @example
   * #### Use id method to get the id of the link
```ts
const package = new Package({deep});
const deviceValueLinkId = await package.deviceValue.id();
```
    * #### Use localId method to get the local id of the link
```ts
const package = new Package({deep});
const deviceValueLinkId = await package.deviceValue.localId();
```
    */
  public deviceValue = this.createEntity("deviceValue");
  /**
   * @example
   * #### Use id method to get the id of the link
```ts
const package = new Package({deep});
const NameLinkId = await package.Name.id();
```
    * #### Use localId method to get the local id of the link
```ts
const package = new Package({deep});
const NameLinkId = await package.Name.localId();
```
    */
  public Name = this.createEntity("Name");
  /**
   * @example
   * #### Use id method to get the id of the link
```ts
const package = new Package({deep});
const nameValueLinkId = await package.nameValue.id();
```
    * #### Use localId method to get the local id of the link
```ts
const package = new Package({deep});
const nameValueLinkId = await package.nameValue.localId();
```
    */
  public nameValue = this.createEntity("nameValue");
  /**
   * @example
   * #### Use id method to get the id of the link
```ts
const package = new Package({deep});
const OperatingSystemLinkId = await package.OperatingSystem.id();
```
    * #### Use localId method to get the local id of the link
```ts
const package = new Package({deep});
const OperatingSystemLinkId = await package.OperatingSystem.localId();
```
    */
  public OperatingSystem = this.createEntity("OperatingSystem");
  /**
   * @example
   * #### Use id method to get the id of the link
```ts
const package = new Package({deep});
const operatingSystemValueLinkId = await package.operatingSystemValue.id();
```
    * #### Use localId method to get the local id of the link
```ts
const package = new Package({deep});
const operatingSystemValueLinkId = await package.operatingSystemValue.localId();
```
    */
  public operatingSystemValue = this.createEntity("operatingSystemValue");
  /**
   * @example
   * #### Use id method to get the id of the link
```ts
const package = new Package({deep});
const OsVersionLinkId = await package.OsVersion.id();
```
    * #### Use localId method to get the local id of the link
```ts
const package = new Package({deep});
const OsVersionLinkId = await package.OsVersion.localId();
```
    */
  public OsVersion = this.createEntity("OsVersion");
  /**
   * @example
   * #### Use id method to get the id of the link
```ts
const package = new Package({deep});
const osVersionValueLinkId = await package.osVersionValue.id();
```
    * #### Use localId method to get the local id of the link
```ts
const package = new Package({deep});
const osVersionValueLinkId = await package.osVersionValue.localId();
```
    */
  public osVersionValue = this.createEntity("osVersionValue");
  /**
   * @example
   * #### Use id method to get the id of the link
```ts
const package = new Package({deep});
const IsVirtualLinkId = await package.IsVirtual.id();
```
    * #### Use localId method to get the local id of the link
```ts
const package = new Package({deep});
const IsVirtualLinkId = await package.IsVirtual.localId();
```
    */
  public IsVirtual = this.createEntity("IsVirtual");
  /**
   * @example
   * #### Use id method to get the id of the link
```ts
const package = new Package({deep});
const PlatformLinkId = await package.Platform.id();
```
    * #### Use localId method to get the local id of the link
```ts
const package = new Package({deep});
const PlatformLinkId = await package.Platform.localId();
```
    */
  public Platform = this.createEntity("Platform");
  /**
   * @example
   * #### Use id method to get the id of the link
```ts
const package = new Package({deep});
const platformValueLinkId = await package.platformValue.id();
```
    * #### Use localId method to get the local id of the link
```ts
const package = new Package({deep});
const platformValueLinkId = await package.platformValue.localId();
```
    */
  public platformValue = this.createEntity("platformValue");
  /**
   * @example
   * #### Use id method to get the id of the link
```ts
const package = new Package({deep});
const ModelLinkId = await package.Model.id();
```
    * #### Use localId method to get the local id of the link
```ts
const package = new Package({deep});
const ModelLinkId = await package.Model.localId();
```
    */
  public Model = this.createEntity("Model");
  /**
   * @example
   * #### Use id method to get the id of the link
```ts
const package = new Package({deep});
const modelValueLinkId = await package.modelValue.id();
```
    * #### Use localId method to get the local id of the link
```ts
const package = new Package({deep});
const modelValueLinkId = await package.modelValue.localId();
```
    */
  public modelValue = this.createEntity("modelValue");
  /**
   * @example
   * #### Use id method to get the id of the link
```ts
const package = new Package({deep});
const WebViewVersionLinkId = await package.WebViewVersion.id();
```
    * #### Use localId method to get the local id of the link
```ts
const package = new Package({deep});
const WebViewVersionLinkId = await package.WebViewVersion.localId();
```
    */
  public WebViewVersion = this.createEntity("WebViewVersion");
  /**
   * @example
   * #### Use id method to get the id of the link
```ts
const package = new Package({deep});
const webViewVersionValueLinkId = await package.webViewVersionValue.id();
```
    * #### Use localId method to get the local id of the link
```ts
const package = new Package({deep});
const webViewVersionValueLinkId = await package.webViewVersionValue.localId();
```
    */
  public webViewVersionValue = this.createEntity("webViewVersionValue");

}
