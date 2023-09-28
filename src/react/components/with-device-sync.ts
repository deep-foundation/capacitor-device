import { UseDeviceInsertionIfDoesNotExistAndSavingInfoOptions, useDeviceSync } from '../hooks/use-device-sync.js';
import { DeviceDecorator } from '../../create-device-decorator.js';

/**
 * A higher-order component that handles the logic of inserting a device link into Deep if it does not exist and saving device information.
 *
 * @remarks
 * This component uses the custom hook {@link useDeviceSync} 
 *
 * @returns The result of {@link WithDeviceSyncOptions.renderIfLoading} if the synchronization is in the process, or the result of {@link WithDeviceSyncOptions.renderChildren} if synchronization is done.
 */
export function WithDeviceSync(
  options: WithDeviceSyncOptions
): JSX.Element {
  const {
    children,
    renderIfLoading,
    deep
  } = options;

  const { isLoading } = deep.useDeviceSync(options);

  if (isLoading) {
    return renderIfLoading();
  }

  return children;

}

export type WithDeviceSyncOptions =
  UseDeviceInsertionIfDoesNotExistAndSavingInfoOptions & {
    /**
     * The ID of the container link in the Deep database.
     */
    containerLinkId: number;
    /**
     * An instance of `DeepClient`.
     */
    deep: DeviceDecorator;
    /**
     * The ID of the device link in the Deep database.
     */
    deviceLinkId: number | undefined | null;
    /**
     * A JSX.Element to render when the synchronization is finished.
     */
    children: JSX.Element;
    /**
     * A function that returns a JSX.Element to render when synchronization is in the process.
     */
    renderIfLoading: () => JSX.Element;
  };