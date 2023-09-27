import { useEffect, useState } from 'react';
import { DeepClient, DeepClientInstance } from '@deep-foundation/deeplinks/imports/client.js';
import { WithDeviceSync } from '../components/with-device-sync.js';
import { DeviceDecorator } from '../../create-device-decorator.js';
import { Link } from '@deep-foundation/deeplinks/imports/minilinks.js';

/**
 * A custom React Hook that checks if a device link exists in the Deep database, and if not, it inserts one. Also saves device information to deep on render.
 * 
 * @remarks
 * If the passed {@link UseDeviceSyncOptions.initialDeviceLinkId} is not undefined, the hook verifies its existence in Deep. If it does not exist, a new device link is inserted.
 * 
 * It is recommended to use {@link WithDeviceSync} instead of using this hook directly
 */
export function useDeviceSync(
  this: DeviceDecorator,
  options: UseDeviceSyncOptions,
): UseDeviceInsertionIfDoesNotExistAndSavingInfoResult {
  const { initialDeviceLinkId: initialDeviceLinkId, containerLinkId} = options;
  const [isLoading, setIsLoading] = useState(true);
  const [deviceLinkId, setDeviceLinkId] = useState<number | undefined>(initialDeviceLinkId);

  useEffect(() => {
    const fetchAndInsertDeviceLink = async () => {
      setIsLoading(true);
      let deviceLink: Link<number>|undefined;
      if (initialDeviceLinkId) {
        deviceLink = await this.select(initialDeviceLinkId).then(result => result.data[0]);
      }

      if (!initialDeviceLinkId || !deviceLink) {
        const {deviceLinkId} = await this.insertDevice({
          containerLinkId,
        })
        setDeviceLinkId(deviceLinkId)
      }
      setIsLoading(false);
    };

    fetchAndInsertDeviceLink();
  }, [initialDeviceLinkId]);

  return { isLoading, deviceLinkId };
}

/**
 * Describes the Optionseter object that should be passed to the {@link useDeviceSync} hook.
 */
export interface UseDeviceSyncOptions {
  /**
   * A device link ID.
   * 
   * This field is not of type undefined because you should not call this component until you get the device link ID which is known. For these reasons there is {@link WithDeviceSync}
   */
  initialDeviceLinkId?: number | undefined;
  /**
   * A container with ID of current space 
   */
  containerLinkId: number;
}

/**
 * Describes the return object of the {@link useDeviceSync} hook.
 */
export interface UseDeviceInsertionIfDoesNotExistAndSavingInfoResult {
  /**
   * Indicates the loading state of the device link insertion operation.
   */
  isLoading: boolean;
  /**
   * Device link id
   */
  deviceLinkId: number | undefined;
}