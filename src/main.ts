export {
  Package,
  Package as CapacitorDevicePackage,
  type PackageOptions,
  type PackageOptions as CapacitorDevicePackageConstructorParam,
} from './package.js';
export { getAllDeviceInfo } from './get-all-device-info.js';
export { type DeviceInfo } from './device-info.js';
export { Device as DeviceComponent, type DeviceOptions as DeviceComponentOptions } from './react-components/device.js';
export {
  useDeviceSync,
  type UseDeviceInsertionIfDoesNotExistAndSavingInfoParam,
  UseDeviceInsertionIfDoesNotExistAndSavingInfoResult,
} from './react/hooks/use-device-sync.js';
export {
  WithDeviceSync,
  type WithDeviceSyncParam,
} from './react/components/with-device-sync.js';
export {
  getDevice,
  type GetDeviceArg,
  type GetDevicecResult,
} from './get-device.js';
export {
  getDeviceInsertSerialOperations,
  type GetDeviceInsertSerialOperationsParam,
} from './get-device-insert-serial-operations.js';
export {
  getDeviceValueUpdateSerialOperations ,
  type GetDeviceValueUpdateSerialOperationsParam,
} from './get-device-value-update-serial-operations.js';
