import { DeepClient, DeepClientInstance } from "@deep-foundation/deeplinks/imports/client"
import { DeviceDecorator } from "./create-device-decorator";
import { MakeDeviceValueUpdateSerialOperationsOptions } from "./make-device-value-update-operations";

export async function updateDevice<TDeepClient extends DeepClientInstance>(this: DeviceDecorator<TDeepClient>,options: UpdateDeviceOptions) {
  const operations = await this.makeDeviceValueUpdateOperations(options)
  return await this.deep.serial({
    operations
  })
}

export type UpdateDeviceOptions = MakeDeviceValueUpdateSerialOperationsOptions