import React, { Component } from 'react';
import { View } from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';
import BarcodeMask from 'react-native-barcode-mask';

import { styles } from './styles';

export default class BarcodeScanner extends Component {
  async componentDidMount() {
    await Permissions.askAsync(Permissions.CAMERA);
  }

  handleBarCodeScanned = ({ type, data }) => {
    const { navigation } = this.props;
    navigation.replace('NewAvaliation', { id: data });
  };

  static navigationOptions = {
    title: 'Escanear Código',
  }

  render() {
    return (
      <View style={styles.container}>
        <BarCodeScanner
          onBarCodeScanned={this.handleBarCodeScanned}
          style={styles.barCode}
          barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
        >
          <BarcodeMask width={200} height={200} />
        </BarCodeScanner>
      </View>
    );
  }
}
