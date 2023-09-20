import { DeepClient, DeepClientInstance } from "@deep-foundation/deeplinks/imports/client"
import { DeviceDecorator } from "./create-device-decorator.js";
import { MakeDeviceInsertOperationsOptions } from "./make-device-insert-operations.js";

export async function insertDevice<TDeepClient extends DeepClientInstance>(this: DeviceDecorator<TDeepClient>,options: InsertDeviceOptions) {
  const operations = await this.makeDeviceInsertOperations(options)
  return await this.serial({
    operations
  })
}

export type InsertDeviceOptions = MakeDeviceInsertOperationsOptions