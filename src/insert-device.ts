import { DeepClient, DeepClientInstance } from "@deep-foundation/deeplinks/imports/client.js"
import { DeviceDecorator } from "./create-device-decorator.js";
import { MakeDeviceInsertOperationsOptions } from "./make-device-insert-operations.js";

export async function insertDevice<TDeepClient extends DeepClientInstance>(this: DeviceDecorator<TDeepClient>,options: InsertDeviceOptions) {
  const {
    containLinkId,
    deviceLinkId,
    operations
  } = await this.makeDeviceInsertOperations(options)
  const serialResult = await this.serial({
    operations
  })
  return {
    containLinkId,
    deviceLinkId,
    serialResult,
    operations
  }
}

export type InsertDeviceOptions = MakeDeviceInsertOperationsOptions