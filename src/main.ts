export {
  Package,
  Package as CapacitorDevicePackage,
  Package as DevicePackage,
  type PackageOptions,
  type PackageOptions as CapacitorDevicePackageConstructorParam,
  type PackageOptions as DevicePackageConstructorParam,
} from './package.js';
export { getAllDeviceInfo } from './get-all-device-info.js';
export { type DeviceInfo } from './device-info.js';
export {
  useDeviceSync,
  type UseDeviceInsertionIfDoesNotExistAndSavingInfoParam,
  UseDeviceInsertionIfDoesNotExistAndSavingInfoResult,
} from './react/hooks/use-device-sync.js';
export {
  WithDeviceSync,
  type WithDeviceSyncOptions,
} from './react/components/with-device-sync.js';
export {
  getDevice,
  type GetDeviceOptions,
  type GetDevicecResult,
} from './get-device.js';
export {
  makeDeviceInsertOperations,
  type MakeDeviceInsertOperationsOptions,
} from './make-device-insert-operations.js';
export {
  makeDeviceValueUpdateOperations,
  MakeDeviceValueUpdateSerialOperationsOptions
} from './make-device-value-update-operations.js';
