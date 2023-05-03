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
    isCorporate: false,
    key: '09147b06-b9f2-5516-8286-743eca44a95d',
    token: '63d901f3bad20d13e7643fd4',
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
