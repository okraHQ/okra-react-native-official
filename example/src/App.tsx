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
const banks = [
  'ecobank-nigeria',
  'fidelity-bank',
  'first-bank-of-nigeria',
  'first-city-monument-bank',
  'guaranty-trust-bank',
  'access-bank',
  'unity-bank',
  'alat',
  'polaris-bank',
  'stanbic-ibtc-bank',
  'standard-chartered-bank',
  'sterling-bank',
  'union-bank-of-nigeria',
  'united-bank-for-africa',
  'wema-bank',
  'rubies-bank',
  'kuda-bank',
];
let okraOptions: OkraOptionsProps = {
  okraOptions: {
    clientName: 'clientName',
    env: 'production', // for sandbox use production-sandbox
    key: '',
    token: '',
    color: '#3AB795',
    products: ['auth', 'identity', 'balance', 'transactions'],
    chargeAmount: 100,
    chargeNote: 'testing',
    chargeType: 'one-time',
    chargeCurrency: 'NGN',
    meta: 'Test Meta',
    options: { name: 'TrueSaver' },
    // customerBvn: dotenv.env['bvn']!,
    logo: 'https://dash.okra.ng/static/media/okra-logo.514fd943.png',
    limit: 3,
    currency: 'NGN',
    isCorporate: false,
    showBalance: true,
    geoLocation: true,
    payment: false,
    connectMessage: 'Which account do you want to connect with?',
    callback_url: '',
    widget_success: 'Your account was successfully linked to SwipeNG',
    widget_failed: 'An unknown error occurred, please try again.',
    guarantors: {
      status: false,
      message: 'Okra requires you to add guarantors',
      number: 3,
    },
    filters: { industry_type: 'all', banks: banks },
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
  shortUrl: 'Enter short Url here',
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

  // @ts-ignore
  return (
    // @ts-ignore
    <View style={styles.container}>
      <Button title="Build With Options" onPress={goToOptions} />
      {/* eslint-disable-next-line react-native/no-inline-styles */}
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
