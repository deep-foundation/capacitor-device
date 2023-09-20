export {
  WithDeviceSync,
  type WithDeviceSyncOptions,
} from './react/components/with-device-sync.js';
export {
  useDeviceSync,
  type UseDeviceInsertionIfDoesNotExistAndSavingInfoOptions,
  UseDeviceInsertionIfDoesNotExistAndSavingInfoResult,
} from './react/hooks/use-device-sync.js';
export {
  createDeviceDecorator,
  DeviceDecorator
} from './create-device-decorator.js'
export { type DeviceInfo } from './device-info.js';
export { getAllDeviceInfo } from './get-all-device-info.js';
export {
  getDevice,
  type GetDeviceOptions,
  type GetDevicecResult,
} from './get-device.js';
export {
  insertDevice,
  InsertDeviceOptions
} from './insert-device.js'
export {
  makeDeviceInsertOperations,
  type MakeDeviceInsertOperationsOptions,
} from './make-device-insert-operations.js';
export {
  makeDeviceValueUpdateOperations,
  MakeDeviceValueUpdateSerialOperationsOptions
} from './make-device-value-update-operations.js';
export {
  Package,
  Package as CapacitorDevicePackage,
  Package as DevicePackage,
  type PackageOptions,
  type PackageOptions as CapacitorDevicePackageConstructorOptions,
  type PackageOptions as DevicePackageConstructorOptions,
} from './package.js';
export {
  updateDevice,
  UpdateDeviceOptions
} from './update-device.js'
