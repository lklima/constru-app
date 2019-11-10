import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import firebase from 'react-native-firebase';

import {
  View, Text, TouchableOpacity, Image, Alert,
} from 'react-native';

import { styles } from './styles';

const Item = ({ people, navigation, project }) => (
  <View style={styles.container}>
    <View style={styles.rowView}>
      <Image
        style={styles.image}
        source={{ uri: people.photo }}
      />
      <View>
        <Text style={styles.name}>{people.name}</Text>
        <Text>{people.nick}</Text>
      </View>
    </View>

    <View style={styles.buttomView}>
      <View>
        <TouchableOpacity style={styles.buttom} onPress={() => navigation.navigate('AddPeoples', { people, project })}>
          <Icon
            name="pencil"
            color="white"
            size={18}
          />
        </TouchableOpacity>
        <Text>Editar</Text>
      </View>

      <View>
        <TouchableOpacity
          style={styles.buttom}
          onPress={() => {
            Alert.alert(
              `Excluir ${people.name}?`,
              'Essa ação não pode ser desfeita',
              [
                {
                  text: 'Não',
                  onPress: () => {},
                  style: 'cancel',
                },
                {
                  text: 'Sim',
                  onPress: () => {
                    firebase.firestore().collection('projects').doc(project.id).collection('peoples')
                      .doc(people.id)
                      .delete();
                  },
                },
              ],
              { cancelable: false },
            );
          }}
        >
          <Icon
            name="trash-can"
            color="white"
            size={20}
          />
        </TouchableOpacity>
        <Text>Excluir</Text>
      </View>
    </View>
  </View>
);

export default Item;
