import { DeepClient } from "@deep-foundation/deeplinks/imports/client.js";
import { Link } from "@deep-foundation/deeplinks/imports/minilinks.js";
import { useState, useEffect } from "react";
import { DeviceDecorator } from "../../main.js";
import { packageLog } from "../../package-log.js";

export interface UseDeviceLinkReturn {
  deviceLinkId: number | undefined;
  isLoading: boolean;
  error: unknown;
}

export interface UseDeviceLinkOptions {
  initialDeviceLinkId?: number;
  deep: DeviceDecorator;
  containerLinkId?: number;
}

export function useDeviceLink(
  options: UseDeviceLinkOptions
): UseDeviceLinkReturn {
  const log = packageLog.extend(useDeviceLink.name);
  log({ options });
  const { initialDeviceLinkId, deep, containerLinkId = deep.linkId! } = options;
  const [deviceLinkId, setDeviceLinkId] = useState<number | undefined>(
    initialDeviceLinkId
  );
  log({ deviceLinkId });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  log({ isLoading, setIsLoading });
  const [error, setError] = useState<unknown>(null);
  log({ error, setError });

  useEffect(() => {
    new Promise(async () => {
      setIsLoading(true);
      setError(null);

      try {
        let deviceLink: Link<number> | undefined;
        if (deviceLinkId) {
          deviceLink = await deep
            .select(deviceLinkId)
            .then((result) => result.data[0]);
        }
        log({ deviceLink });
        if (!deviceLink) {
          const { deviceLinkId: newDeviceLinkId } = await deep.insertDevice({
            containerLinkId,
          });
          log({ newDeviceLinkId });
          setDeviceLinkId(newDeviceLinkId);
        }
      } catch (error) {
        log({ error });
        setError(error);
      } finally {
        setIsLoading(false);
      }
    });
  }, [deviceLinkId]);

  return {
    deviceLinkId,
    isLoading,
    error,
  };
}
