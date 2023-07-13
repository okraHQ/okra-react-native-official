# okra-react-native-official

Okra's official package for React Native Apps

## Installation

```sh
npm install okra-react-native-official
```

## Usage

```js
import React, { Component } from 'react';
import {
  Okra,
  OkraOptionsProps,
  OkraUrlProps,
} from 'okra-react-native-official';
import { Button, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

let okraOptions: OkraOptionsProps = {
  okraOptions: {
    callback_url: 'https://webhook.site/ded54b3f-f4f5-4fa1-86c3-0def6098fb4d',
    clientName: 'client',
    color: '#953ab7',
    connectMessage: 'Which account do you want to connect with?',
    currency: 'NGN',
    env: 'production-sandbox', // for sandbox use production-sandbox
    filters: {
      banks: ['access-bank', 'guaranty-trust-bank'],
      industry_type: 'all',
    },
    meta: "Any data type",
    options: {
      name: "Client Name"
    },
    isCorporate: false,
    key: 'Enter Key here',
    token: 'Enter token here',
    limit: 24,
    logo: 'https://cdn.okra.ng/images/icon.svg',
    products: ['auth', 'balance', 'identity', 'transactions'],
    widget_failed: '',
    widget_success: 'Your account was successfully linked to Okra, Inc',
  },
  onError: (error) => {
    console.log(error);
  },
  onSuccess: (data) => {
    console.log(data);
  },
  onClose: () => {
    console.log('on close');
  },
  onBeforeClose: () => {
    console.log('on before close');
  },
};

let okraUrl: OkraUrlProps = {
  shortUrl: 'bc_kWKf2l',
  onError: (error) => {
    console.log(error);
  },
  onSuccess: (data) => {
    console.log(data);
  },
  onClose: () => {
    console.log('on close');
  },
  onBeforeClose: () => {
    console.log('on before close');
  },
};

// @ts-ignore
function HomeScreen({ navigation }) {
  const goToOptions = () => {
    navigation.navigate('WithOptions');
  };

  const goToShortUrl = () => {
    navigation.navigate('WithShortUrl');
  };

  return (
    // @ts-ignore
    <View style={styles.container}>
      <Button title="Build With Options" onPress={goToOptions} />
      <View style={{ marginVertical: 10 }} />
      <Button title="Build With ShortUrl" onPress={goToShortUrl} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// @ts-ignore
function OkraOptionsScreen() {
  return Okra.buildWithOptions(okraOptions);
}

function OkraShortUrlScreen() {
  return Okra.buildWithShortUrl(okraUrl);
}

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="WithOptions" component={OkraOptionsScreen} />
          <Stack.Screen name="WithShortUrl" component={OkraShortUrlScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
