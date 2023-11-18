
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
const deviceTypeLinkId = await package["Device"].id();
const typeOfValueOfDeviceTypeLinkId = await package["TypeOfValueOfDevice"].id();
const handleUpdateTypeLinkId = await package["HandleUpdate"].id();
```

#### Use idLocal method to get the local id of the link
```ts
const package = new Package({deep});
await package.applyMinilinks();
const deviceTypeLinkId = package["Device"].idLocal();
const typeOfValueOfDeviceTypeLinkId = package["TypeOfValueOfDevice"].idLocal();
const handleUpdateTypeLinkId = package["HandleUpdate"].idLocal();
```
#### Use name field to get the name of the link
```ts
const package = new Package({deep});
const device = package["Device"].name;
const typeOfValueOfDevice = package["TypeOfValueOfDevice"].name;
const handleUpdate = package["HandleUpdate"].name;
```
*/
export class Package extends BasePackage {

  constructor(param: PackageOptions) {
    super({
      ...param,
      name: '@deep-foundation/capacitor-device',
    });
  }


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
      #### Use id method to get the id of the TypeOfValueOfDevice link
      ```ts
      const package = new Package({deep});
      const typeOfValueOfDeviceTypeLinkId = await package["TypeOfValueOfDevice"].id();
      ```
      #### Use localId method to get the local id of the TypeOfValueOfDevice link
      ```ts
      const package = new Package({deep});
      const typeOfValueOfDeviceTypeLinkId = await package["TypeOfValueOfDevice"].localId();
      ```
      #### Use name field to get the name of the TypeOfValueOfDevice link
      ```ts
      const package = new Package({deep});
      const typeOfValueOfDevice = await package["TypeOfValueOfDevice"].name;
      ```
      */
      public "TypeOfValueOfDevice" = this.createEntity("TypeOfValueOfDevice");
      /**
      @example
      #### Use id method to get the id of the HandleUpdate link
      ```ts
      const package = new Package({deep});
      const handleUpdateTypeLinkId = await package["HandleUpdate"].id();
      ```
      #### Use localId method to get the local id of the HandleUpdate link
      ```ts
      const package = new Package({deep});
      const handleUpdateTypeLinkId = await package["HandleUpdate"].localId();
      ```
      #### Use name field to get the name of the HandleUpdate link
      ```ts
      const package = new Package({deep});
      const handleUpdate = await package["HandleUpdate"].name;
      ```
      */
      public "HandleUpdate" = this.createEntity("HandleUpdate");

}

export type PackageOptions = Omit<BasePackageOptions, 'name'>;
