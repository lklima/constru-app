import React, { Component } from 'react';

import { View } from 'react-native';

import { styles } from './styles';
import Buttom from '~/components/FloatButtom';

export default class Objectives extends Component {
  state = {

  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Buttom
          text="Adicionar Metas"
          navigation={() => navigation.navigate('AddObjective')}
        />
      </View>
    );
  }
}
