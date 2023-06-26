/**
 * Contains the names of all links within this package. 
 * 
 * @example
```ts
const notifyTypeLinkId = await deep.id(
   PACKAGE_NAME,
   LinkName[LinkName.Notify]
)
```
 */
export enum LinkName {
   Device,
   Name,
   OperatingSystem,
   WebViewVersion,
   Manufacturer,
   LanguageCode,
   BatteryLevel,
   LanguageTag,
   IsCharging,
   OsVersion,
   IsVirtual,
   Platform,
   Model,
}
