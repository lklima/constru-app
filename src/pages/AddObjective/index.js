import React, { Component } from 'react';
import {
  View, TouchableOpacity, TextInput, Text, ScrollView, Alert, ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import RNPickerSelect from 'react-native-picker-select';
import firebase from 'react-native-firebase';

import { styles } from './styles';
import { colors } from '~/styles';

export default class AddObjective extends Component {
  constructor(props) {
    super(props);
    this.state = {
      units: [],
      objective: '',
      value: '',
      unit: '',
      loading: false,
    };
  }

  componentDidMount() {
    const units = [];
    firebase.firestore().collection('units').get().then((snapshot) => {
      snapshot.forEach((doc) => {
        const { name } = doc.data();
        units.push({
          label: name,
          value: name,
        });
      });
      this.setState({ units });
    });
  }

  addObjective = () => {
    const { objective, value, unit } = this.state;
    const { navigation } = this.props;
    const project = navigation.getParam('project');

    if (objective === '' || value === '' || unit === '') {
      Alert.alert('', 'Todos os campos são obrigatórios');
    } else {
      this.setState({ loading: true });
      firebase.firestore().collection('projects').doc(project.id).collection('objectives')
        .add({
          objective,
          value: parseInt(value),
          current: 0,
          unit,
        })
        .then(() => {
          this.setState({ loading: false });
          navigation.goBack();
        });
    }
  }

  static navigationOptions = {
    title: 'Adicionar Meta',
  }

  render() {
    const {
      objective, value, units, loading,
    } = this.state;
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
              autoCorrect={false}
              autoCapitalize="words"
              placeholderTextColor="black"
              onChangeText={(t) => this.setState({ objective: t })}
              value={objective}
              style={styles.input}
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
              keyboardType="number-pad"
              placeholderTextColor="black"
              onChangeText={(t) => this.setState({ value: t })}
              value={value}
              style={styles.input}
            />
          </View>

          <View style={styles.selectView}>
            <Icon
              name="text-shadow"
              color={colors.primary}
              size={30}
            />

            <RNPickerSelect
              onValueChange={(t) => this.setState({ unit: t })}
              items={units}
              style={{ inputAndroid: styles.inputAndroid }}
              useNativeAndroidPickerStyle={false}
              placeholderTextColor="black"
              placeholder={{
                label: 'Selecione uma unidade...',
                value: '',
              }}
            />
          </View>


          <TouchableOpacity style={styles.buttom} onPress={() => this.addObjective()}>
            {loading ? <ActivityIndicator size="large" color="white" /> : <Text style={styles.buttomText}>ADICIONAR</Text>}
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
