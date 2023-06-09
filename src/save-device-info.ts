import {
  DeepClient,
  SerialOperation,
} from '@deep-foundation/deeplinks/imports/client.js';
import { Link } from '@deep-foundation/deeplinks/imports/minilinks.js';
import { createSerialOperation } from '@deep-foundation/deeplinks/imports/gql/index.js';
import { MutationInputValue } from '@deep-foundation/deeplinks/imports/client_types.js';
import { DeviceInfo } from './device-info.js';
import { getAllDeviceInfo } from './get-all-device-info.js';

/**
 * Saves device information by modifying the value of the device link.
 * Any fields not included in the `info` parameter will not be modified.
 * If the {@link SaveDeviceInfoParam.info} parameter is undefined, the function will call {@link getAllDeviceInfo} to get the device information.
 * 
 * @example
 * #### Save all device information
```ts

import { saveDeviceInfo, getAllDeviceInfo } from '@deep-foundation/capacitor-device';

// Implicitly (if you do not pass info to saveDeviceInfo - it will save all information by default)
await saveDeviceInfo({deep, deviceLinkId});

// Explicitly
const allDeviceInfo = await getAllDeviceInfo();
await saveDeviceInfo({deep, deviceLinkId, info: allDeviceInfo});
```
 * #### Save specific device information
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
 * 
 */
export async function saveDeviceInfo(param: SaveDeviceInfoParam) {
  const { deep, info: data } = param;

  const deviceLink = await getDeviceLink();

  const value = await getValue({
    deviceLink,
    data,
  });

  const serialOperations = await getSerialOperations({
    deviceLink,
    value,
  });

  await deep.serial({
    operations: serialOperations,
  });

  async function getDeviceLink() {
    let deviceLink: Link<number>;

    if ('deviceLinkId' in param) {
      if (!param.deviceLinkId) {
        throw new Error(`deviceLinkId is undefined`);
      }
      const { data } = await deep.select({
        id: param.deviceLinkId,
      });
      deviceLink = data[0];
    } else if ('deviceLink' in param) {
      if (!param.deviceLink) {
        throw new Error(`deviceLink is undefined`);
      }
      deviceLink = param.deviceLink;
    } else {
      throw new Error(`Either deviceLink or deviceLinkId must be passed`);
    }

    return deviceLink;
  }

  async function getValueInsertSerialOperation({
    deviceLink,
    value,
  }: {
    deviceLink: Link<number>;
    value: MutationInputValue<object>['value'];
  }) {
    return createSerialOperation({
      table: 'objects',
      type: 'insert',
      objects: {
        link_id: deviceLink.id,
        value: value,
      },
    });
  }

  async function getValueUpdateSerialOperation({
    deviceLink,
    value,
  }: {
    deviceLink: Link<number>;
    value: MutationInputValue<object>['value'];
  }) {
    return createSerialOperation({
      table: 'objects',
      type: 'update',
      exp: {
        link_id: deviceLink.id,
      },
      value: {
        value: value,
      },
    });
  }

  async function getValue({
    deviceLink,
    data,
  }: {
    deviceLink: Link<number>;
    data: DeviceInfo | undefined;
  }) {
    return {
      ...(deviceLink.value?.value ?? {}),
      ...(data ?? (await getAllDeviceInfo())),
    } as MutationInputValue<object>['value'];
  }

  async function getSerialOperations({
    deviceLink,
    value,
  }: {
    deviceLink: Link<number>;
    value: MutationInputValue<object>['value'];
  }) {
    let serialOperations: Array<SerialOperation> = [];
    if (!deviceLink.value) {
      serialOperations.push(
        await getValueUpdateSerialOperation({
          deviceLink,
          value,
        })
      );
    } else {
      serialOperations.push(
        await getValueInsertSerialOperation({
          deviceLink,
          value,
        })
      );
    }
    return serialOperations;
  }
}

/**
 * This type is used for the parameter of the {@link saveDeviceInfo} function.
 *
 * The `SaveDeviceInfoParam` type is an object that must have a `deep` property of type {@link DeepClient} and an optional `info` property of type {@link DeviceInfo}. 
 * In addition to these properties, the object must also have either a `deviceLinkId` property of type `number` or a `deviceLink` property of type {@link Link}.
 */
export type SaveDeviceInfoParam = { deep: DeepClient; info?: DeviceInfo | undefined } & (
  | { deviceLinkId: number }
  | { deviceLink: Link<number> }
);
