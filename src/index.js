import { NativeModules, Platform } from 'react-native';
const { RNMainBundlePath } = NativeModules;

RNMainBundlePath.get().then(path => {
  RNMainBundlePath.bundlePath = path
})

export default RNMainBundlePath;
