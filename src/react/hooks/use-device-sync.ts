import { useEffect, useState } from 'react';
import { DeepClient, DeepClientInstance } from '@deep-foundation/deeplinks/imports/client.js';
import { WithDeviceSync } from '../components/with-device-sync.js';
import { DeviceDecorator } from '../../create-device-decorator.js';

/**
 * A custom React Hook that checks if a device link exists in the Deep database, and if not, it inserts one. Also saves device information to deep on render.
 * 
 * @remarks
 * If the passed {@link UseDeviceInsertionIfDoesNotExistAndSavingInfoParam.initialDeviceLinkId} is not undefined, the hook verifies its existence in Deep. If it does not exist, a new device link is inserted.
 * 
 * It is recommended to use {@link WithDeviceSync} instead of using this hook directly
 */
export function useDeviceSync<TDeepClient extends DeepClientInstance>(
  this: DeviceDecorator<TDeepClient>,
  param: UseDeviceInsertionIfDoesNotExistAndSavingInfoParam,
): UseDeviceInsertionIfDoesNotExistAndSavingInfoResult {
  const { initialDeviceLinkId: initialDeviceLinkId, containerLinkId } = param;
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchAndInsertDeviceLink = async () => {
      let deviceLink;
      if (initialDeviceLinkId) {
        const { data } = await this.select(initialDeviceLinkId);
        deviceLink = data[0];
      }

      if (!initialDeviceLinkId || !deviceLink) {
        setIsLoading(true);
        await this.insertDevice({
          containerLinkId,
        })
        setIsLoading(false);
      }
    };

    fetchAndInsertDeviceLink();
  }, [initialDeviceLinkId]);

  return { isLoading };
}

/**
 * Describes the parameter object that should be passed to the {@link useDeviceSync} hook.
 */
export interface UseDeviceInsertionIfDoesNotExistAndSavingInfoParam {
  /**
   * A device link ID.
   * 
   * This field is not of type undefined because you should not call this component until you get the device link ID which is known. For these reasons there is {@link WithDeviceSync}
   */
  initialDeviceLinkId: number | null;
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
}