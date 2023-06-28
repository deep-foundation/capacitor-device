import { useEffect, useState } from 'react';
import { DeepClient } from '@deep-foundation/deeplinks/imports/client.js';
import { WithDeviceInsertionIfDoesNotExistAndSavingData } from './with-device-insertion-if-does-not-exist-and-saving-data.js';

/**
 * A custom React Hook that checks if a device link exists in the Deep database, and if not, it inserts one. Also saves device information to deep on render.
 * 
 * @remarks
 * If the passed {@link UseDeviceInsertionIfDoesNotExistAndSavingInfoParam.deviceLinkId} is not undefined, the hook verifies its existence in Deep. If it does not exist, a new device link is inserted.
 * 
 * It is recommended to use {@link WithDeviceInsertionIfDoesNotExistAndSavingData} instead of using this hook directly
 */
export function useDeviceInsertionIfDoesNotExistAndSavingData(
  param: UseDeviceInsertionIfDoesNotExistAndSavingInfoParam,
): UseDeviceInsertionIfDoesNotExistAndSavingInfoResult {
  const { deep, deviceLinkId, containerLinkId, insertDeviceCallback } = param;
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchAndInsertDeviceLink = async () => {
      let deviceLink;
      if (deviceLinkId) {
        const { data } = await deep.select(deviceLinkId);
        deviceLink = data[0];
      }

      if (!deviceLinkId || !deviceLink) {
        setIsLoading(true);
        await insertDeviceCallback()
        setIsLoading(false);
      }
    };

    fetchAndInsertDeviceLink();
  }, [deviceLinkId]);

  return { isLoading };
}

/**
 * Describes the parameter object that should be passed to the {@link useDeviceInsertionIfDoesNotExistAndSavingData} hook.
 */
export interface UseDeviceInsertionIfDoesNotExistAndSavingInfoParam {
  /**
   * A DeepClient instance.
   */
  deep: DeepClient;
  /**
   * A device link ID.
   * 
   * This field is not of type undefined because you should not call this component until you get the device link ID which is known. For these reasons there is {@link WithDeviceInsertionIfDoesNotExistAndSavingData}
   */
  deviceLinkId: number | null;
  /**
   * A container with ID of current space 
   */
  containerLinkId: number;
  /**
   * Callback that will be called when {@link UseDeviceInsertionIfDoesNotExistAndSavingInfoParam.deviceLinkId} is not provided or does not exist in deep
   */
  insertDeviceCallback: () => Promise<void>;
}

/**
 * Describes the return object of the {@link useDeviceInsertionIfDoesNotExistAndSavingData} hook.
 */
export interface UseDeviceInsertionIfDoesNotExistAndSavingInfoResult {
  /**
   * Indicates the loading state of the device link insertion operation.
   */
  isLoading: boolean;
}