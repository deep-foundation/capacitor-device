import { DeepClient } from '@deep-foundation/deeplinks/imports/client.js';
import { useState, useEffect } from 'react';
import { UseDeviceInsertionIfDoesNotExistAndSavingInfoParam, useDeviceInsertionIfDoesNotExistAndSavingData } from './use-device-insertion-if-does-not-exist-and-saving-data.js';

/**
 * A higher-order component that handles the logic of inserting a device link into Deep if it does not exist and saving device information.
 *
 * @remarks
 * This component utilizes the custom hook {@link useDeviceInsertionIfDoesNotExistAndSavingData} to manage the device link insertion operation and handles the rendering logic based on the loading and insertion state of Device link insertion.
 *
 * @returns A JSX.Element that is either the children of this component if Device link is available, or the result of {@link WithDeviceInsertionIfDoesNotExistAndSavingDataParam.renderIfLoading} if the insertion operation is loading, or the result of {@link WithDeviceInsertionIfDoesNotExistAndSavingDataParam.renderIfNotInserted} if the device link is not inserted.
 */
export function WithDeviceInsertionIfDoesNotExistAndSavingData(
  props: WithDeviceInsertionIfDoesNotExistAndSavingDataParam
): JSX.Element {
  const {
    containerLinkId,
    deep,
    deviceLinkId,
    children,
    renderIfLoading,
    renderIfNotInserted,
    insertDeviceCallback,
  } = props;

  const { isLoading } = useDeviceInsertionIfDoesNotExistAndSavingData({
    deep,
    containerLinkId,
    deviceLinkId,
    insertDeviceCallback,
  });

  if (isLoading) {
    return renderIfLoading();
  }

  if (deviceLinkId) {
    return children;
  } else {
    return renderIfNotInserted();
  }
}

/**
 * Describes the parameter object for the {@link WithDeviceInsertionIfDoesNotExistAndSavingData} higher-order component.
 *
 * @remarks
 * This interface extends from {@link UseDeviceInsertionIfDoesNotExistAndSavingInfoParam}, and adds additional properties required for rendering.
 */
export type WithDeviceInsertionIfDoesNotExistAndSavingDataParam =
  UseDeviceInsertionIfDoesNotExistAndSavingInfoParam & {
    /**
     * The ID of the container link in the Deep database.
     */
    containerLinkId: number;
    /**
     * An instance of `DeepClient`.
     */
    deep: DeepClient;
    /**
     * The ID of the device link in the Deep database.
     */
    deviceLinkId: number | undefined | null;
    /**
     * The child elements to render when the device link ID exists and the loading is finished.
     */
    children: JSX.Element;
    /**
     * A function that returns a JSX.Element to render when the insertion operation is loading.
     */
    renderIfLoading: () => JSX.Element;
    /**
     * A function that returns a JSX.Element to render when the device link ID doesn't exist.
     */
    renderIfNotInserted: () => JSX.Element;
  };