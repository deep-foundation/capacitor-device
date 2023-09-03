import { DeepClientInstance } from "@deep-foundation/deeplinks/imports/client";
import { InsertDeviceOptions, insertDevice } from "./insert-device";
import debug from "debug";
import { makeDeviceInsertOperations } from "./make-device-insert-operations";
import { Package } from "./package";
import { updateDevice } from "./update-device";
import { WithDeviceSync, getAllDeviceInfo, getDevice, makeDeviceValueUpdateOperations, useDeviceSync } from "./main";

export function createDeviceDecorator<TDeepClient extends DeepClientInstance>(deep: TDeepClient): DeviceDecorator<TDeepClient> {
  const log = debug(`@deep-foundation/capacitor-device:${createDeviceDecorator.name}`);
  const _package = new Package({deep})
  const decorator: DeviceDecorator<TDeepClient> = Object.assign({
    capacitorDevicePackage: _package,
    "@deep-foundation/capacitor-device": _package,
    useDeviceSync: useDeviceSync,
    WithDeviceSync: WithDeviceSync,
    getAllDeviceInfo: getAllDeviceInfo,
    getDevice: getDevice,
    insertDevice: insertDevice,
    makeDeviceInsertOperations: makeDeviceInsertOperations,
    makeDeviceValueUpdateOperations: makeDeviceValueUpdateOperations,
    updateDevice: updateDevice,
  } as DeviceDecorator<TDeepClient>, deep)
  log({decorator})
  return decorator;
}

export type DeviceDecorator<TDeepClient extends DeepClientInstance = DeepClientInstance> = TDeepClient & {
  "@deep-foundation/capacitor-device": Package,
  capacitorDevicePackage: Package,
  useDeviceSync: typeof useDeviceSync;
  WithDeviceSync: typeof WithDeviceSync;
  getAllDeviceInfo: typeof getAllDeviceInfo,
  getDevice: typeof getDevice
  insertDevice: typeof insertDevice;
  makeDeviceInsertOperations: typeof makeDeviceInsertOperations
  makeDeviceValueUpdateOperations: typeof makeDeviceValueUpdateOperations 
  updateDevice: typeof updateDevice;
}