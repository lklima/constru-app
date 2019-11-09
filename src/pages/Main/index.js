import React, { Component } from 'react';

import { View, StatusBar } from 'react-native';

import { styles } from './styles';
import { colors } from '~/styles';

import Buttom from '~/components/FloatButtom';

export default class Main extends Component {
  static navigationOptions = {
    title: 'Meus Empreendimentos',
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={colors.primary} />

        <Buttom
          navigation={() => navigation.navigate('AddConstruct')}
          text="Adicionar Empreendimento"
        />
      </View>
    );
  }
}
