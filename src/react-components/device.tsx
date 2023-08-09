import { Card, CardHeader, Heading, CardBody, Text, CardProps} from "@chakra-ui/react";
import { DeviceInfo } from "../device-info.js";

/**
 * A React component that displays a device's information in a card format.
 * 
 * @returns A `Card` component containing device model as a `Heading` in the `CardHeader` and device name as a `Text` in the `CardBody`.
 */
export function Device(param: DeviceParam) {
  const {device} = param;
  return <Card {...param.cardProps}>
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
  device: Pick<DeviceInfo, 'model'|'name'>
  /**
   * Props for the `Card` component
   */
  cardProps: CardProps
 }
