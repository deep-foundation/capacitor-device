import { DeepClient, DeepClientInstance } from "@deep-foundation/deeplinks/imports/client.js"
import { DeviceDecorator } from "./create-device-decorator.js";
import { MakeDeviceValueUpdateSerialOperationsOptions } from "./make-device-value-update-operations.js";

export async function updateDevice<TDeepClient extends DeepClientInstance>(this: DeviceDecorator<TDeepClient>,options: UpdateDeviceOptions) {
  const operations = await this.makeDeviceValueUpdateOperations(options)
  if(operations.length > 0) {
    return await this.serial({
      operations
    })
  } else {
    return undefined
  }
}

export type UpdateDeviceOptions = MakeDeviceValueUpdateSerialOperationsOptions