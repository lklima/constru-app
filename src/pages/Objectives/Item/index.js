import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import firebase from 'react-native-firebase';

import {
  View, Text, TouchableOpacity, Alert,
} from 'react-native';

import { styles } from './styles';

const Item = ({ objective, navigation, project }) => (
  <View style={styles.container}>
    <View style={styles.rowView}>
      <View>
        <Text style={styles.name}>{objective.objective}</Text>
        <Text>{objective.value} {objective.unit}</Text>
      </View>
    </View>

    <View style={styles.buttomView}>
      <View>
        <TouchableOpacity style={styles.buttom} onPress={() => navigation.navigate('AddObjective', { objective, project })}>
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
              'Excluir ?',
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
                    firebase.firestore().collection('projects').doc(project.id).collection('objectives')
                      .doc(objective.id)
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
