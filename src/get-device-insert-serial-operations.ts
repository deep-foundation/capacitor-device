import {
  DeepClient,
  SerialOperation,
} from '@deep-foundation/deeplinks/imports/client';
import { LinkName } from './link-name';
import { PACKAGE_NAME } from './package-name';
import { createSerialOperation } from '@deep-foundation/deeplinks/imports/gql';
import { DeviceInfo } from './device-info';
import { getAllDeviceInfo } from './get-all-device-info';

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
  param: InsertDeviceParam
): Promise<Array<SerialOperation>> {
  const {
    deep,
    info = await getAllDeviceInfo(),
    containValue,
    containerLinkId,
  } = param;
  const { containLinkId, deviceLinkId } = await getReservedLinkIds();
  const { containTypeLinkId, deviceTypeLinkId } = await getTypeLinkIds();
  const serialOperations = [];
  const deviceInsertSerialOperation = createSerialOperation({
    type: 'insert',
    table: 'links',
    objects: {
      id: deviceLinkId,
      type_id: deviceTypeLinkId,
    },
  });
  serialOperations.push(deviceInsertSerialOperation);
  const valueOfDeviceInsertSerialOperation = createSerialOperation({
    type: 'insert',
    table: 'objects',
    objects: {
      link_id: deviceLinkId,
      value: info,
    },
  });
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
    serialOperations.push(containInsertSerialOperation);
    const valueOfContainInsertSerialOperation = createSerialOperation({
      type: 'insert',
      table: 'strings',
      objects: {
        link_id: containLinkId,
        value: containValue,
      },
    });
    serialOperations.push(valueOfContainInsertSerialOperation);
  }

  return serialOperations;

  async function getReservedLinkIds(): Promise<
    Exclude<InsertDeviceParam['reservedLinkIds'], undefined>
  > {
    let result = {
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

  async function getTypeLinkIds(): Promise<
    Required<Exclude<InsertDeviceParam['typeLinkIds'], undefined>>
  > {
    return {
      containTypeLinkId:
        param.typeLinkIds?.containTypeLinkId ||
        (await deep.id('@deep-foundation/core', 'Contain')),
      deviceTypeLinkId:
        param.typeLinkIds?.deviceTypeLinkId ||
        (await deep.id(PACKAGE_NAME, LinkName[LinkName.Device])),
    };
  }
}

export interface InsertDeviceParam {
  reservedLinkIds?: {
    deviceLinkId: number;
    containLinkId: number;
  };
  typeLinkIds?: {
    containTypeLinkId?: number;
    deviceTypeLinkId?: number;
  };
  deep: DeepClient;
  info?: DeviceInfo;
  containerLinkId?: number | undefined | null;
  containValue?: string | undefined;
}
