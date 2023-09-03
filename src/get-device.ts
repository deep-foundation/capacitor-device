import { Device } from "@capacitor/device";
import { DeepClient, DeepClientInstance } from "@deep-foundation/deeplinks/imports/client.js";
import { DeviceInfo } from './device-info.js';
import { DeviceDecorator } from "./create-device-decorator.js";

export interface GetDeviceOptions {
  deviceLinkId: number
}

export async function getDevice<TDeepClient extends DeepClientInstance>(
  this: DeviceDecorator<TDeepClient>,
  options: GetDeviceOptions
  ): Promise<GetDevicecResult> {
  const {deviceLinkId} = options;
//   const nameTypeLinkId = await deep.id(DEVICE_PACKAGE_NAME, "Name");
//   const modelTypeLinkId = await deep.id(DEVICE_PACKAGE_NAME, "Model");

//   const {data: deviceTreeLinksUpToParentDevice} = await deep.select({
//     up: {
//       tree_id: {
//         _id: [DEVICE_PACKAGE_NAME, "DeviceTree"]
//       },
//       parent_id: {_eq: deviceLinkId}
//     }
//   });
//   const nameLink = deviceTreeLinksUpToParentDevice.find(link => link.type_id === nameTypeLinkId);
//   if(!nameLink) {
//     throw new Error(`A link with type ##${nameTypeLinkId} associated with ##${deviceLinkId} is not found`);
//   }
//   if(!nameLink.value?.value) {
//     throw new Error(`${nameLink.id} must have a value`)
//   }
//   const name = nameLink.value.value;

//   const modelLink = deviceTreeLinksUpToParentDevice.find(link => link.type_id === modelTypeLinkId);
//   if(!modelLink) {
//     throw new Error(`A link with type ##${modelTypeLinkId} associated with ##${deviceLinkId} is not found`);
//   }
//   if(!modelLink.value?.value) {
//     throw new Error(`${modelLink.id} must have a value`)
//   }
//   const model = modelLink.value.value;

//   return {
//     name,
//     model
//   }

   const {data: [deviceLink]} = await this.select(deviceLinkId)

   if(!deviceLink) {
      throw new Error(`A link with id ##${deviceLinkId} is not found`)
   }
   
   return deviceLink.value.value;
}

export type GetDevicecResult = Partial<DeviceInfo>;