/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import { WebView } from 'react-native-webview';
export default class Webview extends Component{
  render() {
    return <WebView source={{ uri: 'https://reactnative.dev/' }} style={{ flex: 1 }} />;
    }
}
