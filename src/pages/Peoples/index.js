import React, { Component } from 'react';

import { View } from 'react-native';

import { styles } from './styles';
import Buttom from '~/components/FloatButtom';

export default class Peoples extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Buttom
          text="Adicionar Pessoas"
          navigation={() => navigation.navigate('AddPeoples', { project: navigation.getParam('project') })}
        />
      </View>
    );
  }
}
