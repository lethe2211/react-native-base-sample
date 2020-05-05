import React from 'react';
import { AppLoading } from 'expo';
import { Container, Text, Header, Left, Button, Icon, Title, Body, Right, Content } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './component/HomeScreen';
import { Stack } from './component/Stack';

type AppProps = {}
type AppState = {
  isReady: boolean;
}
export default class App extends React.Component<AppProps, AppState> {
  state: AppState = {
    isReady: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <HomeScreen />
    );
  }
}