import {
  DeepClient,
  DeepClientInstance,
  SerialOperation,
} from '@deep-foundation/deeplinks/imports/client.js';
import { createSerialOperation } from '@deep-foundation/deeplinks/imports/gql/index.js';
import { DeviceInfo } from './device-info.js';
import { getAllDeviceInfo } from './get-all-device-info.js';
import { MutationInputValue } from '@deep-foundation/deeplinks/imports/client_types.js';
import { Link } from '@deep-foundation/deeplinks/imports/minilinks.js';
import { debug } from './debug.js';
import { DeviceDecorator } from './create-device-decorator.js';
import deepEqual from 'deep-equal'

/**
  * Gets serial operations to insert Device
  * 
  * @example
 ```ts
 const serialOperations = await getDeviceValueInsertSerialOperations({
   deep
 });
 await deep.serial({
   operations: serialOperations
 })
 ```
  */
export async function makeDeviceValueUpdateOperations<TDeepClient extends DeepClientInstance>(
  this: DeviceDecorator<TDeepClient>,
  options: MakeDeviceValueUpdateSerialOperationsOptions
): Promise<Array<SerialOperation>> {
 const log = debug(`@deep-foundation/capacitor-device:${makeDeviceValueUpdateOperations.name}`)
 log({options})
  const { info = await this.getAllDeviceInfo() } = options;

  const deviceLink = await getDeviceLink.call(this);
  log({deviceLink})

  if(deepEqual(deviceLink.value?.value, info)) {
    log(`The same value is already set, returning []`)
    return []
  }

  const serialOperations = await makeSerialOperations({
    deviceLink,
    info: info,
  });
   log({serialOperations})

  return serialOperations;

  async function getDeviceLink(
    this: DeviceDecorator<TDeepClient>
  ) {
    let deviceLink: Link<number>;

    if ('deviceLinkId' in options) {
      if (!options.deviceLinkId) {
        throw new Error(`deviceLinkId is undefined`);
      }

      const { data } = await this.select({
        id: options.deviceLinkId,
      });
      deviceLink = data[0];
    } else if ('deviceLink' in options) {
      if (!options.deviceLink) {
        throw new Error(`deviceLink is undefined`);
      }
      deviceLink = options.deviceLink;
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

  async function makeSerialOperations({
    deviceLink,
    info: info,
  }: {
    deviceLink: Link<number>;
    info: MutationInputValue<object>['value'];
  }) {
    let serialOperations: Array<SerialOperation> = [];
    if (!deviceLink.value) {
      serialOperations.push(
        await getValueUpdateSerialOperation({
          deviceLink,
          value: info,
        })
      );
    } else {
      serialOperations.push(
        await getValueInsertSerialOperation({
          deviceLink,
          value: info,
        })
      );
    }
    return serialOperations;
  }
}

export type MakeDeviceValueUpdateSerialOperationsOptions = {
  /**
   * Device Info
   * 
   * @remarks
   * If not passed then {@link getAllDeviceInfo} is used to get the device info
   */
  info?: DeviceInfo;
} & (
  | { 
     /**
      * Device Link Id
      */
     deviceLinkId: number 
  }
  | { 
     /**
      * Device Link
      */
     deviceLink: Link<number> 
  }
)
