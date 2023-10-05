import { useEffect, useState } from "react";
import {
  DeepClient,
  DeepClientInstance,
} from "@deep-foundation/deeplinks/imports/client.js";
import { WithDeviceSync } from "../components/with-device-sync.js";
import { DeviceDecorator } from "../../create-device-decorator.js";
import { Link } from "@deep-foundation/deeplinks/imports/minilinks.js";
import { packageLog } from "../../package-log.js";
const moduleLog = packageLog.extend("react/hooks/use-device-sync.ts");

/**
 * A custom React Hook that checks if a device link exists in the Deep database, and if not, it inserts one
 */
export function useDeviceSync<TDeepClient extends DeepClientInstance>(
  options: UseDeviceInsertionIfDoesNotExistAndSavingInfoOptions<TDeepClient>
): UseDeviceSyncResult {
  const log = moduleLog.extend(useDeviceSync.name);
  log({ options });
  const { deviceLinkId: deviceLinkId, deep } = options;
  const [isLoading, setIsLoading] = useState<boolean | undefined>(undefined);
  log({ isLoading, setIsLoading });
  const [error, setError] = useState<unknown | undefined>(undefined);
  log({error, setError})

  useEffect(() => {
    setIsLoading(true);
    deep
      .updateDevice({
        deviceLinkId: deviceLinkId,
      })
      .then(() => {
        setIsLoading(false);
      })
      .catch(setError);
  }, [deviceLinkId]);

  return { isLoading, error };
}

export interface UseDeviceInsertionIfDoesNotExistAndSavingInfoOptions<
  TDeepClient extends DeepClientInstance = DeepClientInstance
> {
  /**
   * A device link ID.
   */
  deviceLinkId: number;
  deep: DeviceDecorator<TDeepClient>;
}

export interface UseDeviceSyncResult {
  /**
   * Indicates the loading state of the device link insertion operation.
   */
  isLoading: boolean | undefined;
  error: unknown|undefined;
}
