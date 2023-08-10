import {
  DeepClient,
  SerialOperation,
} from '@deep-foundation/deeplinks/imports/client.js';
import { createSerialOperation } from '@deep-foundation/deeplinks/imports/gql/index.js';
import { debug } from './debug.js';
import { DeviceInfo } from './device-info.js';
import { getAllDeviceInfo } from './get-all-device-info.js';
import { Package } from './package.js';

/**
  * Gets serial operations to insert Device
  * 
  * @example
 ```ts
 const serialOperations = await getDeviceInsertSerialOperations({
   deep
 });
 await deep.serial({
   operations: serialOperations
 })
 ```
  */
export async function getDeviceInsertSerialOperations(
  param: GetDeviceInsertSerialOperationsParam
): Promise<Array<SerialOperation>> {
  const log = debug(getDeviceInsertSerialOperations.name);
  log({ param });
  const {
    deep,
    info = await getAllDeviceInfo(),
    containValue,
    containerLinkId,
  } = param;
  const _package = new Package({deep})
  log({ info });
  const reservedLinkIds = await getReservedLinkIds();
  log({ reservedLinkIds });
  const { containLinkId, deviceLinkId } = reservedLinkIds;
  log({ containLinkId, deviceLinkId });
  const typeLinkIds = await getTypeLinkIds();
  log({ typeLinkIds });
  const { containTypeLinkId, deviceTypeLinkId } = typeLinkIds;
  log({ containTypeLinkId, deviceTypeLinkId });
  const serialOperations = [];
  const deviceInsertSerialOperation = createSerialOperation({
    type: 'insert',
    table: 'links',
    objects: {
      id: deviceLinkId,
      type_id: deviceTypeLinkId,
    },
  });
  log({ deviceInsertSerialOperation });
  serialOperations.push(deviceInsertSerialOperation);
  const valueOfDeviceInsertSerialOperation = createSerialOperation({
    type: 'insert',
    table: 'objects',
    objects: {
      link_id: deviceLinkId,
      value: info,
    },
  });
  log({ valueOfDeviceInsertSerialOperation });
  serialOperations.push(valueOfDeviceInsertSerialOperation);
  if (containerLinkId !== null) {
    const containInsertSerialOperation = createSerialOperation({
      type: 'insert',
      table: 'links',
      objects: {
        type_id: containTypeLinkId,
        from_id: containerLinkId || deep.linkId,
        to_id: deviceLinkId,
      },
    });
    log({ containInsertSerialOperation });
    serialOperations.push(containInsertSerialOperation);
    const valueOfContainInsertSerialOperation = createSerialOperation({
      type: 'insert',
      table: 'strings',
      objects: {
        link_id: containLinkId,
        value: containValue,
      },
    });
    log({ valueOfContainInsertSerialOperation });
    serialOperations.push(valueOfContainInsertSerialOperation);
  }

  log({ serialOperations })
  return serialOperations;

  type GetReservedLinkIdsResult = Required<
    Exclude<
      GetDeviceInsertSerialOperationsParam['reservedLinkIds'],
      undefined
    >
  >;

  async function getReservedLinkIds(): Promise<GetReservedLinkIdsResult> {
    let result: GetReservedLinkIdsResult = {
      containLinkId: 0,
      deviceLinkId: 0,
    };
    const linksToReserveCount =
      Object.keys(result).length -
      Object.keys(param.reservedLinkIds || {}).length;
    const reservedLinkIds: number[] =
      linksToReserveCount > 0 ? await deep.reserve(linksToReserveCount) : [];
    result = {
      containLinkId:
        param.reservedLinkIds?.containLinkId ?? reservedLinkIds.pop()!,
      deviceLinkId:
        param.reservedLinkIds?.deviceLinkId ?? reservedLinkIds.pop()!,
    };
    return result;
  }

  type GetTypeLinkIdsResult = Required<
    Exclude<GetDeviceInsertSerialOperationsParam['typeLinkIds'], undefined>
  >;

  async function getTypeLinkIds(): Promise<GetTypeLinkIdsResult> {
    const result: GetTypeLinkIdsResult = {
      containTypeLinkId:
        param.typeLinkIds?.containTypeLinkId ||
        (await deep.id('@deep-foundation/core', 'Contain')),
      deviceTypeLinkId:
        param.typeLinkIds?.deviceTypeLinkId ||
        (await _package.Device.id()),
    };
    return result;
  }
}

export interface GetDeviceInsertSerialOperationsParam {
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
   * Deep Client
   */
  deep: DeepClient;
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
   * @defaultValue {@link GetDeviceInsertSerialOperationsParam.deep.linkId} if not provided or undefined
   */
  containerLinkId?: number | undefined | null;
  /**
   * Value of the contain link
   *
   * @remarks
   * If {@link GetDeviceInsertSerialOperationsParam.containerLinkId} is null, this will be ignored
   */
  containValue?: string | undefined;
}
