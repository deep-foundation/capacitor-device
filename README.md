[![npm](https://img.shields.io/npm/v/@deep-foundation/capacitor-device.svg)](https://www.npmjs.com/package/@deep-foundation/capacitor-device)

# @deep-foundation/capacitor-device

This documentation describes the `@deep-foundation/capacitor-device` package, currently at version `1.0.3`.

## Overview

The `@deep-foundation/capacitor-device` package provides tools for working with device-related features from Capacitor.

## Device Information

The `Device` object in this package holds several properties which provide various details about the device. The details and their types are as follows:

- **Name** (type: String): The name of the device.
- **OperatingSystem** (type: String): The operating system of the device.
- **WebViewVersion** (type: String): The version of the WebView on the device.
- **Manufacturer** (type: String): The manufacturer of the device.
- **LanguageCode** (type: String): The language code set on the device.
- **BatteryLevel** (type: Number): The battery level of the device.
- **LanguageTag** (type: String): The language tag set on the device.
- **IsCharging** (type: Boolean): Whether the device is charging or not.
- **OsVersion** (type: String): The version of the operating system on the device.
- **IsVirtual** (type: Boolean): Whether the device is virtual or not.
- **Platform** (type: String): The platform on which the device runs.
- **Model** (type: String): The model of the device.

## Update Handling

This package includes the `HandleUpdate` functionality (type: UpdateHandler) that is used to handle updates related to the `Device` object. `HandleUpdate` uses handler from `@freephoenix888/object-to-links-async-converter` to convert Device object value to links everytime when you update it

## Contribution

Contributions are welcomed. Please fork the repository and submit a pull request for any bugs, improvements, or features.
