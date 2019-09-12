# react-native-main-bundle-path

It allows you to get the main bundle path on iOS without requiring [react-native-fs](https://github.com/itinance/react-native-fs).
It would come in handy when you would like to load a bundled html file on WebView.

## Getting started

```shell
$ npm install react-native-main-bundle-path --save
```

### Mostly automatic installation

```shell
$ react-native link react-native-main-bundle-path
```

## Usage

Using `Promise`:

```javascript
import MainBundlePath from 'react-native-main-bundle-path'

MainBundlePath.get().then(path => {
  console.log('main bundle path:', path)
})
```

`Reference`:

```javascript
import MainBundlePath from 'react-native-main-bundle-path'

In your react component:

<Text>{MainBundlePath.bundlePath}</Text>
```

## License

MIT License. By Takuya Matsuyama ([@craftzdog](https://twitter.com/craftzdog)).
