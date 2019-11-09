import React, { Component } from 'react';

import {
  KeyboardAvoidingView, Text, ScrollView, View, TouchableOpacity, TextInput, Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { styles } from './styles';
import { colors } from '~/styles';

export default class AddConstruct extends Component {
  static navigationOptions = {
    title: 'Sobre o Empreendimento',
  }

  render() {
    const { navigation } = this.props;
    return (
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null} style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.inputView}>
            <Icon
              name="city-variant-outline"
              color={colors.primary}
              size={30}
            />
            <TextInput
              placeholder="Nome"
              placeholderTextColor="black"
              style={styles.input}
              autoCapitalize="words"
            />
          </View>

          <View style={styles.inputView}>
            <Icon
              name="calendar"
              color={colors.primary}
              size={30}
            />
            <TextInput
              placeholder="Data de Início"
              placeholderTextColor="black"
              style={styles.input}
              autoCapitalize="words"
            />
          </View>

          <View style={styles.inputView}>
            <Icon
              name="calendar-check"
              color={colors.primary}
              size={30}
            />
            <TextInput
              placeholder="Previsão de Término"
              placeholderTextColor="black"
              style={styles.input}
              autoCapitalize="words"
            />
          </View>
          <View style={styles.inputView}>
            <Icon
              name="account-details"
              color={colors.primary}
              size={30}
            />
            <TextInput
              placeholder="Cliente"
              placeholderTextColor="black"
              style={styles.input}
              autoCapitalize="words"
            />
          </View>

          <View style={styles.inputView}>
            <Icon
              name="account-badge-horizontal-outline"
              color={colors.primary}
              size={30}
            />
            <TextInput
              placeholder="Engenheiro Respnsável"
              placeholderTextColor="black"
              style={styles.input}
              autoCapitalize="words"
            />
          </View>

          <View style={styles.inputView}>
            <Icon
              name="home"
              color={colors.primary}
              size={30}
            />
            <TextInput
              placeholder="Endereço"
              placeholderTextColor="black"
              style={styles.input}
              autoCapitalize="words"
            />
          </View>

          <View style={styles.inputView}>
            <Icon
              name="home-city-outline"
              color={colors.primary}
              size={30}
            />
            <TextInput
              placeholder="Cidade"
              placeholderTextColor="black"
              style={styles.input}
              autoCapitalize="words"
            />
          </View>

          <View style={styles.inputView}>
            <Icon
              name="home-city-outline"
              color={colors.primary}
              size={30}
            />
            <TextInput
              placeholder="Estado"
              placeholderTextColor="black"
              style={styles.input}
              autoCapitalize="words"
            />
          </View>

          <View style={styles.inputView}>
            <Icon
              name="cash-usd"
              color={colors.primary}
              size={30}
            />
            <TextInput
              placeholder="Orçamento Inicíal"
              placeholderTextColor="black"
              style={styles.input}
              autoCapitalize="words"
            />
          </View>

          <TouchableOpacity style={styles.buttom} onPress={() => navigation.navigate('Project')}>
            <Text style={styles.buttomText}>SALVAR</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}
