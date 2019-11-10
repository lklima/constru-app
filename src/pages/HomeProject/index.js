import React, { Component } from 'react';

import { View, TouchableOpacity, Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { styles } from './styles';
import { colors } from '~/styles';

export default class HomeProject extends Component {
  state= {

  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.statusContainer}>
          <View style={styles.percentView}>
            <Text style={styles.percentValue}>
            50%
            </Text>
            <Text style={styles.percentText}>Progresso</Text>
          </View>
          <View style={styles.percentView}>
            <Text style={styles.percentValue}>
            85%
            </Text>
            <Text style={styles.percentText}>Orçamento</Text>
          </View>
        </View>


        <View style={styles.buttomContainer}>
          <View style={styles.buttomView}>
            <TouchableOpacity style={styles.buttom}>
              <Icon
                name="playlist-check"
                size={25}
                color="black"
              />
            </TouchableOpacity>
            <Text>Nova Avaliação</Text>
          </View>

          <View style={styles.buttomView}>
            <TouchableOpacity style={styles.buttom}>
              <Icon
                name="car-brake-alert"
                size={25}
                color="black"
              />
            </TouchableOpacity>
            <Text>Novo Evento</Text>
          </View>

          <View style={styles.buttomView}>
            <TouchableOpacity style={styles.buttom}>
              <Icon
                name="cash-usd"
                size={25}
                color="black"
              />
            </TouchableOpacity>
            <Text>Nova Despesa</Text>
          </View>
        </View>
      </View>
    );
  }
}
