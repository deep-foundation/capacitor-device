import { Card, CardHeader, Heading, CardBody, Text } from "@chakra-ui/react";
import { AllDeviceInfo } from "../all-device-info.js";

/**
 * A React component that displays a device's information in a card format.
 *
 * @param param - An object of type `DeviceParam`
 * 
 * @returns A `Card` component containing device model as a `Heading` in the `CardHeader` and device name as a `Text` in the `CardBody`.
 */
export function Device(param: DeviceParam) {
  const {device} = param;
  return <Card>
    <CardHeader>
      <Heading>
        {
          device.model
        }
      </Heading>
    </CardHeader>
    <CardBody>
      <Text>
        {
          device.name
        }
      </Text>
    </CardBody>
  </Card>
}

/**
 * An interface defines the params that the `Device` component expects.
 */
export interface DeviceParam { 
  /**
   * All device information
   */
  device: AllDeviceInfo
 }
