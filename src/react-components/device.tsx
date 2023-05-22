import { Card, CardHeader, Heading, CardBody, Stack, StackDivider, Box, Text, Image } from "@chakra-ui/react";
import { AllDeviceInfo } from "../all-device-info";

export function Device({ device }: { device: AllDeviceInfo }) {
  return <Card >
    <CardHeader>
      <Heading >
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