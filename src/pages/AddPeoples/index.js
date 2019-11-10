import React, { Component } from 'react';
import ActionSheet from 'react-native-actionsheet';
import {
  ActivityIndicator, View, TouchableOpacity, Image, TextInput, Text, ScrollView, Alert,
} from 'react-native';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import firebase from 'react-native-firebase';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { styles } from './styles';
import { colors } from '~/styles';

export default class AddPeoples extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loader: false,
      profile: '',
      name: '',
      nick: '',
      cpf: '',
      birthday: '',
      phone: '',
      func: '',
      profileUrl: '',
    };
  }

  pickImage = async (res) => {
    const pickFrom = res;
    const { status } = await Permissions.askAsync(
      Permissions.CAMERA,
      Permissions.CAMERA_ROLL,
    );

    if (status === 'granted') {
      this.setState({ loader: true });
      const result = await pickFrom({
        allowsEditing: true,
        aspect: [3, 3],
        base64: true,
      });
      if (!result.cancelled) {
        this.uploadmultimedia(result.uri);
        this.setState(
          { profile: `data:image/jpeg;base64,${result.base64}` },
          () => {
            this.setState({ loader: false });
          },
        );
      } else {
        this.setState({ loader: false });
      }
    }
  };

  loader = () => (
    <View style={[styles.loadingcontainer, styles.horizontal]}>
      <ActivityIndicator size="large" color="gray" />
    </View>
  );

  addPeople = () => {
    const {
      name, nick, cpf, birthday, phone, func, profileUrl,
    } = this.state;

    if (name === '' || nick === '' || nick === '' || cpf === '' || birthday === '' || phone === '' || func === '') {
      Alert.alert('', 'Todos os Campos são obrigatórios');
    } else if (profileUrl === '') {
      Alert.alert('', 'Todos os Campos são obrigatórios');
    } else {

    }
  }

  static navigationOptions = {
    title: 'Cadastro de Pessoas',
  }

  async uploadmultimedia(uri) {
    const { cpf } = this.state;
    const imageRef = firebase
      .storage()
      .ref()
      .child(`peoples/photo/${cpf}`);

    return imageRef
      .put(uri)
      .then(() => (
        imageRef.getDownloadURL()
      ))
      .then((url) => {
        this.setState({ profileUrl: url });
      })
      .catch((e) => console.log(e));
  }

  uploadImage() {
    return (
      <View>
        <ActionSheet
          ref={(o) => { this.ActionSheet = o; }}
          title="Escolher uma Foto"
          options={['Câmera', 'Galeria', 'Cancelar']}
          cancelButtonIndex={2}
          destructiveButtonIndex={2}
          onPress={(index) => {
            if (index === 0) {
              this.pickImage(ImagePicker.launchCameraAsync);
            } else if (index === 1) {
              this.pickImage(ImagePicker.launchImageLibraryAsync);
            }
          }}
        />
      </View>
    );
  }

  render() {
    const {
      name, nick, cpf, birthday, phone, func, loader, profile,
    } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.viewStyle}>
            <View style={styles.imageParentView}>
              <View style={styles.imageViewStyle}>
                {loader ? (
                  this.loader()
                ) : (
                  <TouchableOpacity onPress={() => this.ActionSheet.show()}>
                    <Image
                      source={
                        profile
                          ? { uri: profile }
                          : require('~/assets/images/profilePic.png')
                      }
                      style={styles.image}
                    />
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </View>

          <View style={styles.inputView}>
            <Icon
              name="worker"
              color={colors.primary}
              size={30}
            />
            <TextInput
              placeholder="Nome"
              placeholderTextColor="black"
              onChangeText={(t) => this.setState({ name: t })}
              value={name}
              style={styles.input}
              autoCapitalize="words"
            />
          </View>

          <View style={styles.inputView}>
            <Icon
              name="worker"
              color={colors.primary}
              size={30}
            />
            <TextInput
              placeholder="Apelido"
              placeholderTextColor="black"
              onChangeText={(t) => this.setState({ nick: t })}
              value={nick}
              style={styles.input}
              autoCapitalize="words"
            />
          </View>

          <View style={styles.inputView}>
            <Icon
              name="toaster-oven"
              color={colors.primary}
              size={30}
            />
            <TextInput
              placeholder="CPF"
              placeholderTextColor="black"
              onChangeText={(t) => this.setState({ cpf: t })}
              value={cpf}
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
              placeholder="Data de Nascimento"
              placeholderTextColor="black"
              onChangeText={(t) => this.setState({ birthday: t })}
              value={birthday}
              style={styles.input}
              autoCapitalize="words"
            />
          </View>

          <View style={styles.inputView}>
            <Icon
              name="cellphone"
              color={colors.primary}
              size={30}
            />
            <TextInput
              placeholder="Telefone"
              placeholderTextColor="black"
              onChangeText={(t) => this.setState({ phone: t })}
              value={phone}
              style={styles.input}
              autoCapitalize="words"
            />
          </View>

          <View style={styles.inputView}>
            <Icon
              name="check-box-multiple-outline"
              color={colors.primary}
              size={30}
            />
            <TextInput
              placeholder="Responsabilidade"
              placeholderTextColor="black"
              onChangeText={(t) => this.setState({ func: t })}
              value={func}
              style={styles.input}
              autoCapitalize="words"
            />
          </View>


          <TouchableOpacity style={styles.buttom} onPress={() => this.addPeople()}>
            <Text style={styles.buttomText}>ADICIONAR</Text>
          </TouchableOpacity>
          {this.uploadImage()}
        </ScrollView>
      </View>
    );
  }
}
