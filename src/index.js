import { NativeModules, Platform } from 'react-native';
const { RNMainBundlePath } = NativeModules;

let bundlePath = null

RNMainBundlePath.get().then(path => {
  bundlePath = path
})

export bundlePath
export default RNMainBundlePath;
