import innerDebug from 'debug';


export function debug(namespace: string) {
  return innerDebug(`@deep-foundation/capacitor-device:${namespace}`)
}