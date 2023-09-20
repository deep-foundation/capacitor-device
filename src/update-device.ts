import { DeepClient, DeepClientInstance } from "@deep-foundation/deeplinks/imports/client.js"
import { DeviceDecorator } from "./create-device-decorator.js";
import { MakeDeviceValueUpdateSerialOperationsOptions } from "./make-device-value-update-operations.js";

export async function updateDevice<TDeepClient extends DeepClientInstance>(this: DeviceDecorator<TDeepClient>,options: UpdateDeviceOptions) {
  const operations = await this.makeDeviceValueUpdateOperations(options)
  return await this.deep.serial({
    operations
  })
}

export type UpdateDeviceOptions = MakeDeviceValueUpdateSerialOperationsOptions