import { NativeModules, Platform } from 'react-native';
const { RNMainBundlePath } = NativeModules;

if (RNMainBundlePath && RNMainBundlePath.get) {
  RNMainBundlePath.get().then(path => {
    RNMainBundlePath.bundlePath = path
  })
}

export default RNMainBundlePath;
