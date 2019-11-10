import React, { Component } from 'react';
import ActionSheet from 'react-native-actionsheet';
import {
  ActivityIndicator, View, TouchableOpacity, Image, TextInput, Text, ScrollView,
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

  static navigationOptions = {
    title: 'Cadastro de Pessoas',
  }

  async uploadmultimedia(uri) {
    const { currentUser } = this.state;
    const imageRef = firebase
      .storage()
      .ref()
      .child(`users/profile_photo/${currentUser.uid}`);

    return imageRef
      .put(uri)
      .then(() => (
        imageRef.getDownloadURL()
      ))
      .then((url) => {
        firebase
          .database()
          .ref(`/users/${currentUser.uid}/`)
          .update({
            profile_image: url,
          });
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
    const { loader, profile } = this.state;
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
              style={styles.input}
              autoCapitalize="words"
            />
          </View>


          <TouchableOpacity style={styles.buttom} onPress={() => navigation.navigate('Project')}>
            <Text style={styles.buttomText}>ADICIONAR</Text>
          </TouchableOpacity>
          {this.uploadImage()}
        </ScrollView>
      </View>
    );
  }
}
