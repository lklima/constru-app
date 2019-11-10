import React, { Component } from 'react';
import firebase from 'react-native-firebase';

import {
  KeyboardAvoidingView, Text, ScrollView, View, TouchableOpacity, TextInput, Platform, Alert, ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { styles } from './styles';
import { colors } from '~/styles';

export default class AddConstruct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      startDate: '',
      endDate: '',
      customer: '',
      enginner: '',
      address: '',
      city: '',
      state: '',
      coast: '',
      loading: false,
    };
  }

  addProject = () => {
    const {
      name, startDate, endDate, customer, enginner, address, city, state, coast,
    } = this.state;
    const { navigation } = this.props;

    if (name === '' || startDate === '' || endDate === '' || customer === '' || enginner === ''
    || address === '' || city === '' || state === '' || coast === '') {
      Alert.alert('', 'Todos os campos são obrigatórios');
    } else {
      this.setState({ loading: true });
      firebase.firestore().collection('projects').add({
        name,
        startDate,
        endDate,
        customer,
        enginner,
        address,
        city,
        state,
        coast,
        progress: 0,
        coastPercent: 0,
      }).then(() => {
        this.setState({ loading: false });
        navigation.navigate('Main');
      })
        .catch(() => Alert.alert('Erro', 'Erro ao realizar cadastro'));
    }
  }

  static navigationOptions = {
    title: 'Sobre o Empreendimento',
  }

  render() {
    const {
      name, startDate, endDate, customer, enginner, address, city, state, coast, loading,
    } = this.state;
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
              value={name}
              onChangeText={(t) => this.setState({ name: t })}
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
              onChangeText={(t) => this.setState({ startDate: t })}
              value={startDate}
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
              onChangeText={(t) => this.setState({ endDate: t })}
              value={endDate}
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
              onChangeText={(t) => this.setState({ customer: t })}
              value={customer}
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
              onChangeText={(t) => this.setState({ enginner: t })}
              value={enginner}
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
              onChangeText={(t) => this.setState({ address: t })}
              value={address}
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
              onChangeText={(t) => this.setState({ city: t })}
              value={city}
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
              onChangeText={(t) => this.setState({ state: t })}
              value={state}
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
              onChangeText={(t) => this.setState({ coast: t })}
              value={coast}
              style={styles.input}
              autoCapitalize="words"
            />
          </View>

          <TouchableOpacity style={styles.buttom} onPress={() => this.addProject()}>
            {loading ? <ActivityIndicator size="large" color="white" /> : <Text style={styles.buttomText}>SALVAR</Text>}
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}
