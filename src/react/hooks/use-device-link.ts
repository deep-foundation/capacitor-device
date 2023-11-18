import { DeepClient } from "@deep-foundation/deeplinks/imports/client.js";
import { Link } from "@deep-foundation/deeplinks/imports/minilinks.js";
import { useState, useEffect } from "react";
import { DeviceDecorator } from "../../main.js";
import { packageLog } from "../../package-log.js";

export interface UseDeviceLinkReturn {
  deviceLinkId: number | undefined;
  isLoading: boolean | undefined;
  error: unknown;
}

export interface UseDeviceLinkOptions {
  initialDeviceLinkId?: number;
  deep: DeviceDecorator;
  containerLinkId?: number;
  shouldAct?: boolean;
}

export function useDeviceLink(
  options: UseDeviceLinkOptions
): UseDeviceLinkReturn {
  const log = packageLog.extend(useDeviceLink.name);
  log({ options });
  const {
    initialDeviceLinkId,
    deep,
    containerLinkId = deep.linkId!,
    shouldAct = true,
  } = options;
  const [deviceLinkId, setDeviceLinkId] = useState<number | undefined>(
    initialDeviceLinkId
  );
  log({ deviceLinkId });
  const [isLoading, setIsLoading] = useState<boolean | undefined>(undefined);
  log({ isLoading, setIsLoading });
  const [error, setError] = useState<unknown | undefined>(undefined);
  log({ error, setError });

  useEffect(() => {
    if (!shouldAct) return;
    new Promise(async () => {
      setIsLoading(true);
      log(`setIsLoading(true)`);
      setError(null);
      log(`setError(null)`);

      try {
        let deviceLink: Link<number> | undefined;
        if (deviceLinkId || initialDeviceLinkId) {
          deviceLink = await deep
            .select(deviceLinkId ?? initialDeviceLinkId!)
            .then((result) => result.data[0]);
        }
        log({ deviceLink });
        if (!deviceLink || !initialDeviceLinkId) {
          const { deviceLinkId: newDeviceLinkId } = await deep.insertDevice({
            containerLinkId,
          });
          log({ newDeviceLinkId });
          setDeviceLinkId(newDeviceLinkId);
        } else {
          setDeviceLinkId(deviceLink.id);
        }
      } catch (error) {
        log({ error });
        setError(error);
      } finally {
        setIsLoading(false);
      }
    });
  }, [initialDeviceLinkId, shouldAct]);

  return {
    deviceLinkId,
    isLoading,
    error,
  };
}
