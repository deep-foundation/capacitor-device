import { DeepClient } from '@deep-foundation/deeplinks/imports/client';
import { useState, useEffect } from 'react';
import { UseDeviceInsertionIfDoesNotExistAndSavingInfoParam, useDeviceInsertionIfDoesNotExistAndSavingData } from './use-device-insertion-if-does-not-exist-and-saving-data';

export function WithDeviceInsertionIfDoesNotExistAndSavingdata(
  props: WithDeviceInsertionIfDoesNotExistAndSavingdataParam
): JSX.Element {
  const {
    containerLinkId,
    deep,
    deviceLinkId,
    setDeviceLinkId,
    children,
    renderIfLoading,
    renderIfNotInserted,
  } = props;

  const { isLoading } = useDeviceInsertionIfDoesNotExistAndSavingData({
    deep,
    containerLinkId,
    deviceLinkId,
    setDeviceLinkId,
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

export type WithDeviceInsertionIfDoesNotExistAndSavingdataParam =
  UseDeviceInsertionIfDoesNotExistAndSavingInfoParam & {
    containerLinkId: number;
    deep: DeepClient;
    deviceLinkId: number | undefined;
    setDeviceLinkId: (deviceLinkId: number) => void;
    children: JSX.Element;
    renderIfLoading: () => JSX.Element;
    renderIfNotInserted: () => JSX.Element;
  };
