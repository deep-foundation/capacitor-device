# [`@deep-foundation/capacitor-device`](https://www.npmjs.com/package/@deep-foundation/device)

# How to use?
- Give permissions
```ts
const joinTypeLinkId = await deep.id("@deep-foundation/core", "Join");
const packageLinkId = await deep.id("@freephoenix888/object-to-links-async-converter");
await deep.insert([
  {
    type_id: joinTypeLinkId,
    from_id: packageLinkId,
    to_id: await deep.id('deep', 'users', 'packages'),
  },
  {
    type_id: joinTypeLinkId,
    from_id: packageLinkId,
    to_id: await deep.id('deep', 'admin'),
  },
])
```
- 
