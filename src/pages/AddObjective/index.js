import React, { Component } from 'react';
import {
  View, TouchableOpacity, TextInput, Text, ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { styles } from './styles';
import { colors } from '~/styles';

export default class AddObjective extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loader: false,
      profile: '',
    };
  }

  static navigationOptions = {
    title: 'Adicionar Meta',
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>

          <View style={styles.inputView}>
            <Icon
              name="check-box-outline"
              color={colors.primary}
              size={30}
            />
            <TextInput
              placeholder="Meta"
              placeholderTextColor="black"
              style={styles.input}
              autoCapitalize="words"
            />
          </View>

          <View style={styles.inputView}>
            <Icon
              name="dice-d10"
              color={colors.primary}
              size={30}
            />
            <TextInput
              placeholder="Valor"
              placeholderTextColor="black"
              style={styles.input}
              autoCapitalize="words"
            />
          </View>

          <View style={styles.inputView}>
            <Icon
              name="text-shadow"
              color={colors.primary}
              size={30}
            />
            <TextInput
              placeholder="Unidade"
              placeholderTextColor="black"
              style={styles.input}
              autoCapitalize="words"
            />
          </View>


          <TouchableOpacity style={styles.buttom} onPress={() => {}}>
            <Text style={styles.buttomText}>ADICIONAR</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
