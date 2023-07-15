
  import { DeepClient } from '@deep-foundation/deeplinks/imports/client';

  export class Package {
    private deep: DeepClient;
    public name: string = '@deep-foundation/capacitor-device';

    constructor(deep: DeepClient) {
      this.deep = deep;
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

  public batteryLevelValue = this.createEntity("batteryLevelValue");
  public BatteryLevel = this.createEntity("BatteryLevel");
  public languageTagValue = this.createEntity("languageTagValue");
  public LanguageTag = this.createEntity("LanguageTag");
  public IsCharging = this.createEntity("IsCharging");
  public manufacturerValue = this.createEntity("manufacturerValue");
  public Manufacturer = this.createEntity("Manufacturer");
  public languageCodeValue = this.createEntity("languageCodeValue");
  public LanguageCode = this.createEntity("LanguageCode");
  public Device = this.createEntity("Device");
  public handleUpdate = this.createEntity("handleUpdate");
  public Identifier = this.createEntity("Identifier");
  public identifierValue = this.createEntity("identifierValue");
  public deviceValue = this.createEntity("deviceValue");
  public Name = this.createEntity("Name");
  public nameValue = this.createEntity("nameValue");
  public OperatingSystem = this.createEntity("OperatingSystem");
  public operatingSystemValue = this.createEntity("operatingSystemValue");
  public OsVersion = this.createEntity("OsVersion");
  public osVersionValue = this.createEntity("osVersionValue");
  public IsVirtual = this.createEntity("IsVirtual");
  public Platform = this.createEntity("Platform");
  public platformValue = this.createEntity("platformValue");
  public Model = this.createEntity("Model");
  public modelValue = this.createEntity("modelValue");
  public WebViewVersion = this.createEntity("WebViewVersion");
  public webViewVersionValue = this.createEntity("webViewVersionValue");

  }
