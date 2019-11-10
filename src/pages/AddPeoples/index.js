import React, { Component } from 'react';
import ActionSheet from 'react-native-actionsheet';
import {
  ActivityIndicator, View, TouchableOpacity, Image, TextInput, Text, ScrollView, Alert,
} from 'react-native';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import firebase from 'react-native-firebase';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import RNPickerSelect from 'react-native-picker-select';

import { styles } from './styles';
import { colors } from '~/styles';

export default class AddPeoples extends Component {
  constructor(props) {
    super(props);
    this.state = {
      funcs: '',
      imageLoader: false,
      loader: false,
      profile: '',
      name: '',
      nick: '',
      cpf: '',
      birthday: '',
      phone: '',
      func: '',
      uri: '',
      update: false,
    };
  }

  componentDidMount() {
    const { navigation } = this.props;
    const funcs = [];
    const project = navigation.getParam('project');
    const people = navigation.getParam('people');

    if (people) {
      this.setState({
        idProject: project.id,
        idUser: people.id,
        func: people.func,
        profile: people.photo,
        name: people.name,
        nick: people.nick,
        cpf: people.cpf,
        birthday: people.birthday,
        phone: people.phone,
        update: true,
      });
    }
    firebase.firestore().collection('projects').doc(project.id).collection('objectives')
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          const { objective } = doc.data();
          funcs.push({
            label: objective,
            value: doc.id,
          });
        });
        this.setState({ funcs });
      });
  }

  pickImage = async (res) => {
    const pickFrom = res;
    const { status } = await Permissions.askAsync(
      Permissions.CAMERA,
      Permissions.CAMERA_ROLL,
    );

    if (status === 'granted') {
      this.setState({ imageLoader: true });
      const result = await pickFrom({
        allowsEditing: true,
        aspect: [3, 3],
        base64: true,
      });
      if (!result.cancelled) {
        this.setState({
          profile: `data:image/jpeg;base64,${result.base64}`,
          uri: result.uri,
          imageLoader: false,
        });
      } else {
        this.setState({ imageLoader: false });
      }
    }
  };

  loader = () => (
    <View style={[styles.loadingcontainer, styles.horizontal]}>
      <ActivityIndicator size="large" color="white" />
    </View>
  );

  addPeople = async () => {
    const {
      name, nick, cpf, birthday, phone, func, uri, update, idProject, idUser, profile,
    } = this.state;
    const { navigation } = this.props;
    const project = navigation.getParam('project');

    if (name === '' || nick === '' || cpf === '' || birthday === '' || phone === '' || func === '') {
      Alert.alert('', 'Todos os Campos são obrigatórios');
    } else if (uri === '' && profile === '') {
      Alert.alert('', 'Adicione a foto do usuário');
    } else if (update) {
      const imageRef = firebase
        .storage()
        .ref()
        .child(`peoples/photo/${cpf}/`);

      this.setState({ imageLoader: true, loader: true });

      if (profile === '') {
        return imageRef
          .put(uri)
          .then(() => (
            imageRef.getDownloadURL()
          ))
          .then((url) => {
            this.setState({ imageLoader: false });

            firebase.firestore().collection('projects').doc(idProject).collection('peoples')
              .doc(idUser)
              .update({
                name,
                nick,
                cpf,
                birthday,
                phone,
                func,
                photo: url,
              })
              .then(() => navigation.goBack());
          });
      }
      firebase.firestore().collection('projects').doc(idProject).collection('peoples')
        .doc(idUser)
        .update({
          name,
          nick,
          cpf,
          birthday,
          phone,
          func,
          photo: profile,
        })
        .then(() => navigation.goBack());
    } else {
      const imageRef = firebase
        .storage()
        .ref()
        .child(`peoples/photo/${cpf}/`);

      this.setState({ imageLoader: true, loader: true });

      return imageRef
        .put(uri)
        .then(() => (
          imageRef.getDownloadURL()
        ))
        .then((url) => {
          this.setState({ imageLoader: false });
          firebase.firestore().collection('projects').doc(project.id).collection('peoples')
            .add({
              name,
              nick,
              cpf,
              birthday,
              phone,
              func,
              photo: url,
            })
            .then(() => {
              this.setState({ loader: false });
              navigation.goBack();
            });
        })
        .catch((e) => console.log(e));
    }
  }

  static navigationOptions = {
    title: 'Cadastro de Pessoas',
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
      name, nick, cpf, birthday, phone, loader, profile, funcs, imageLoader, func, update,
    } = this.state;

    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.viewStyle}>
            <View style={styles.imageParentView}>
              <View style={styles.imageViewStyle}>
                {imageLoader ? (
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

          <View style={styles.selectView}>
            <Icon
              name="text-shadow"
              color={colors.primary}
              size={30}
            />

            <RNPickerSelect
              onValueChange={(t) => this.setState({ func: t })}
              items={funcs || []}
              style={{ inputAndroid: styles.inputAndroid }}
              useNativeAndroidPickerStyle={false}
              value={func}
              placeholderTextColor="black"
              placeholder={{
                label: 'Escolha uma função...',
                value: '',
              }}
            />
          </View>


          <TouchableOpacity style={styles.buttom} onPress={() => this.addPeople()}>
            {loader ? <ActivityIndicator size="large" color="white" /> : <Text style={styles.buttomText}>{update ? 'ATUALIZAR ' : 'ADICIONAR'}</Text>}
          </TouchableOpacity>
          {this.uploadImage()}
        </ScrollView>
      </View>
    );
  }
}
