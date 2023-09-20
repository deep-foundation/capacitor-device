import {
  DeepClient,
  DeepClientInstance,
  SerialOperation,
} from '@deep-foundation/deeplinks/imports/client.js';
import { createSerialOperation } from '@deep-foundation/deeplinks/imports/gql/index.js';
import { debug } from './debug.js';
import { DeviceInfo } from './device-info.js';
import { getAllDeviceInfo } from './get-all-device-info.js';
import { Package } from './package.js';
import { DeviceDecorator } from './create-device-decorator.js';

/**
  * Gets serial operations to insert Device
  * 
  * @example
 ```ts
 const serialOperations = await makeDeviceInsertOperations({
   deep
 });
 await deep.serial({
   operations: serialOperations
 })
 ```
  */
export async function makeDeviceInsertOperations<TDeepClient extends DeepClientInstance>(
  this: DeviceDecorator<TDeepClient>,
  options: MakeDeviceInsertOperationsOptions
){
  const log = debug(makeDeviceInsertOperations.name);
  log({ Options: options });
  const {
    info = await getAllDeviceInfo(),
    containerLinkId,
  } = options;
  log({ info });
  const {containValue} = options;
  const reservedLinkIds = await this.deep.reserve(2);
  log({reservedLinkIds})
  const deviceLinkId = options.reservedLinkIds?.deviceLinkId ?? reservedLinkIds.pop()!;
  log({deviceLinkId})
  const containLinkId = options.reservedLinkIds?.containLinkId ?? reservedLinkIds.pop()!;
  log({containLinkId})
  const operations = [
    createSerialOperation({
      type: 'insert',
      table: 'links',
      objects: {
        id: deviceLinkId,
        type_id: this.capacitorDevicePackage.Device.idLocal(),
      },
    }),
    createSerialOperation({
      type: 'insert',
      table: 'objects',
      objects: {
        link_id: deviceLinkId,
        value: info,
      }
    }),
    createSerialOperation({
      type: 'insert',
      table: 'links',
      objects: {
        id: containLinkId,
        type_id: this.idLocal("@deep-foundation/core", "Contain"),
        from_id: containerLinkId || this.linkId,
        ...(containValue ? { value: containValue } : {})
      }
    })
  ]
  log({operations})

  return {
    operations,
    deviceLinkId,
    containLinkId,
  };
}

export interface MakeDeviceInsertOperationsOptions {
  /**
   * Reserved link ids that will be used in the serial operations
   */
  reservedLinkIds?: {
    /**
     * Reserved link id for the device
     */
    deviceLinkId?: number;
    /**
     * Reserved link id for the contain
     */
    containLinkId?: number;
  };
  /**
   * Link ids of types that will be used in the serial operations
   */
  typeLinkIds?: {
    /**
     * Link id of the contain type
     */
    containTypeLinkId?: number;
    /**
     * Link id of the device type
     */
    deviceTypeLinkId?: number;
  };
  /**
   * Device Info
   *
   * @defaultValue result of {@link getAllDeviceInfo} if not provided or undefined
   */
  info?: DeviceInfo;
  /**
   * Link id of the container
   *
   * @remarks
   * If it is null, contain link will not be created
   * @defaultValue {@link MakeDeviceInsertOperationsOptions.deep.linkId} if not provided or undefined
   */
  containerLinkId?: number | undefined | null;
  /**
   * Value of the contain link
   *
   * @remarks
   * If {@link MakeDeviceInsertOperationsOptions.containerLinkId} is null, this will be ignored
   */
  containValue?: string | undefined;
}
