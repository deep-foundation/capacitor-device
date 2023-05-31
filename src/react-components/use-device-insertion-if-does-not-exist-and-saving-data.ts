import { useEffect, useState } from 'react';
import { DeepClient } from '@deep-foundation/deeplinks/imports/client.js';
import { insertDevice } from '../insert-device.js';
import { getAllDeviceInfo } from '../get-all-device-info.js';

export function useDeviceInsertionIfDoesNotExistAndSavingData(param: UseDeviceInsertionIfDoesNotExistAndSavingInfoParam) {
  const { deep, deviceLinkId, setDeviceLinkId, containerLinkId } = param;
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
        const insertionResult = await insertDevice({
          deep,
          containerLinkId,
          info: await getAllDeviceInfo(),
        });
        setDeviceLinkId(insertionResult.deviceLink.id);
        setIsLoading(false);
      }
    };

    fetchAndInsertDeviceLink();
  }, [deviceLinkId]);

  return { isLoading };
}

export interface UseDeviceInsertionIfDoesNotExistAndSavingInfoParam {
  deep: DeepClient;
  deviceLinkId: number | null;
  setDeviceLinkId: (id: number | null) => void;
  containerLinkId: number;
}
