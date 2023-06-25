import { DeepClient } from '@deep-foundation/deeplinks/imports/client.js';
import { PACKAGE_NAME } from './package-name.js';
import { Link } from '@deep-foundation/deeplinks/imports/minilinks.js';
import { DeviceInfo } from './device-info.js';
import { getAllDeviceInfo } from './get-all-device-info.js';

/**
 * Inserts a device into the Deep
 *
 * @param param The parameters required for the device insertion.
 * @returns A promise that resolves with the result of the device insertion.
 * 
 * @remarks
 * If the {@link InsertDeviceParam.info} parameter is undefined, the function will call {@link getAllDeviceInfo} to get the device information.
 * If the {@link InsertDeviceParam.containerLinkId} parameter is undefined, the device link will be contained in the {@link InsertDeviceParam.deep.linkId}.
 * 
 * @example
 * ```ts
const {deviceLink} = await insertDevice({
  deep,
  containerLinkId: deep.linkId,
  info: await getAllDeviceInfo(),
});
 */
export async function insertDevice(
  param: InsertDeviceParam
): Promise<InsertDeviceResult> {
  const {
    deep,
    info = await getAllDeviceInfo(),
    containerLinkId = deep.linkId,
  } = param;
  const deviceTypeLinkId = await deep.id(PACKAGE_NAME, 'Device');
  const containTypeLinkId = await deep.id('@deep-foundation/core', 'Contain');
  let {
    data: [deviceLink],
  } = await deep.insert(
    {
      type_id: deviceTypeLinkId,
      in: {
        data: [
          {
            type_id: containTypeLinkId,
            from_id: containerLinkId,
          },
        ],
      },
      object: {
        data: {
          value: info,
        },
      },
    },
    { returning: deep.selectReturning }
  );

  return { deviceLink } as InsertDeviceResult;
}
/**
 * Interface for the parameters required for the `insertDevice` function.
 */
export interface InsertDeviceParam {
  /**
   * A DeepClient instance.
   */
  deep: DeepClient;

  /**
   * A DeviceInfo instance or undefined.
   */
  info?: DeviceInfo | undefined;

  /**
   * A link where a device link will be contained in.
   */
  containerLinkId?: number | undefined;
}

/**
 * Interface for the result returned by the `insertDevice` function.
 */
export interface InsertDeviceResult {
  /**
   * A link containing the id of the inserted device.
   */
  deviceLink: Link<number>;
}
