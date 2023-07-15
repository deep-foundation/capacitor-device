
/**
 * Represents a deep package
 * 
 * @remarks
 * Contains name of the package and all the links as the objects with id method which returns the id of the link.
 * 
 * @example
```ts
const package = nwe Package({deep});
const {name: packageName} = package;
const batteryLevelValueLinkId = await package.batteryLevelValue.id();
```
  */
import { DeepClient } from '@deep-foundation/deeplinks/imports/client';

export class Package {
  private deep: DeepClient;
  /**
   * Name of the package
   */
  public name: string = '@deep-foundation/capacitor-device';

  constructor(param: PackageConstructorParam) {
    this.deep = param.deep;
  }

  private createEntity(...names: string[]) {
    return {
      id: async () => {
        return await this.id(this.name, ...names);
      },
    };
  }

  async id(...names: string[]) {
    return await this.deep.id(this.name, ...names);
  }

  /**
   * @example
```ts
const package = new Package({deep});
const batteryLevelValueLinkId = await package.batteryLevelValue.id();
```
    */
  public batteryLevelValue = this.createEntity("batteryLevelValue");
  /**
   * @example
```ts
const package = new Package({deep});
const BatteryLevelLinkId = await package.BatteryLevel.id();
```
    */
  public BatteryLevel = this.createEntity("BatteryLevel");
  /**
   * @example
```ts
const package = new Package({deep});
const languageTagValueLinkId = await package.languageTagValue.id();
```
    */
  public languageTagValue = this.createEntity("languageTagValue");
  /**
   * @example
```ts
const package = new Package({deep});
const LanguageTagLinkId = await package.LanguageTag.id();
```
    */
  public LanguageTag = this.createEntity("LanguageTag");
  /**
   * @example
```ts
const package = new Package({deep});
const IsChargingLinkId = await package.IsCharging.id();
```
    */
  public IsCharging = this.createEntity("IsCharging");
  /**
   * @example
```ts
const package = new Package({deep});
const manufacturerValueLinkId = await package.manufacturerValue.id();
```
    */
  public manufacturerValue = this.createEntity("manufacturerValue");
  /**
   * @example
```ts
const package = new Package({deep});
const ManufacturerLinkId = await package.Manufacturer.id();
```
    */
  public Manufacturer = this.createEntity("Manufacturer");
  /**
   * @example
```ts
const package = new Package({deep});
const languageCodeValueLinkId = await package.languageCodeValue.id();
```
    */
  public languageCodeValue = this.createEntity("languageCodeValue");
  /**
   * @example
```ts
const package = new Package({deep});
const LanguageCodeLinkId = await package.LanguageCode.id();
```
    */
  public LanguageCode = this.createEntity("LanguageCode");
  /**
   * @example
```ts
const package = new Package({deep});
const DeviceLinkId = await package.Device.id();
```
    */
  public Device = this.createEntity("Device");
  /**
   * @example
```ts
const package = new Package({deep});
const handleUpdateLinkId = await package.handleUpdate.id();
```
    */
  public handleUpdate = this.createEntity("handleUpdate");
  /**
   * @example
```ts
const package = new Package({deep});
const IdentifierLinkId = await package.Identifier.id();
```
    */
  public Identifier = this.createEntity("Identifier");
  /**
   * @example
```ts
const package = new Package({deep});
const identifierValueLinkId = await package.identifierValue.id();
```
    */
  public identifierValue = this.createEntity("identifierValue");
  /**
   * @example
```ts
const package = new Package({deep});
const deviceValueLinkId = await package.deviceValue.id();
```
    */
  public deviceValue = this.createEntity("deviceValue");
  /**
   * @example
```ts
const package = new Package({deep});
const NameLinkId = await package.Name.id();
```
    */
  public Name = this.createEntity("Name");
  /**
   * @example
```ts
const package = new Package({deep});
const nameValueLinkId = await package.nameValue.id();
```
    */
  public nameValue = this.createEntity("nameValue");
  /**
   * @example
```ts
const package = new Package({deep});
const OperatingSystemLinkId = await package.OperatingSystem.id();
```
    */
  public OperatingSystem = this.createEntity("OperatingSystem");
  /**
   * @example
```ts
const package = new Package({deep});
const operatingSystemValueLinkId = await package.operatingSystemValue.id();
```
    */
  public operatingSystemValue = this.createEntity("operatingSystemValue");
  /**
   * @example
```ts
const package = new Package({deep});
const OsVersionLinkId = await package.OsVersion.id();
```
    */
  public OsVersion = this.createEntity("OsVersion");
  /**
   * @example
```ts
const package = new Package({deep});
const osVersionValueLinkId = await package.osVersionValue.id();
```
    */
  public osVersionValue = this.createEntity("osVersionValue");
  /**
   * @example
```ts
const package = new Package({deep});
const IsVirtualLinkId = await package.IsVirtual.id();
```
    */
  public IsVirtual = this.createEntity("IsVirtual");
  /**
   * @example
```ts
const package = new Package({deep});
const PlatformLinkId = await package.Platform.id();
```
    */
  public Platform = this.createEntity("Platform");
  /**
   * @example
```ts
const package = new Package({deep});
const platformValueLinkId = await package.platformValue.id();
```
    */
  public platformValue = this.createEntity("platformValue");
  /**
   * @example
```ts
const package = new Package({deep});
const ModelLinkId = await package.Model.id();
```
    */
  public Model = this.createEntity("Model");
  /**
   * @example
```ts
const package = new Package({deep});
const modelValueLinkId = await package.modelValue.id();
```
    */
  public modelValue = this.createEntity("modelValue");
  /**
   * @example
```ts
const package = new Package({deep});
const WebViewVersionLinkId = await package.WebViewVersion.id();
```
    */
  public WebViewVersion = this.createEntity("WebViewVersion");
  /**
   * @example
```ts
const package = new Package({deep});
const webViewVersionValueLinkId = await package.webViewVersionValue.id();
```
    */
  public webViewVersionValue = this.createEntity("webViewVersionValue");

}

export interface PackageConstructorParam {
  deep: DeepClient;
}
