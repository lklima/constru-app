import React, { Component } from 'react';

import {
  View, TouchableOpacity, Text, FlatList,
} from 'react-native';
import firebase from 'react-native-firebase';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { styles } from './styles';
import Item from './Item';

export default class HomeProject extends Component {
  constructor(props) {
    super(props);

    this.unsubscribe = null;
    this.state = {
      objectives: [],
      progressTotal: 0,
    };
  }

  async componentDidMount() {
    const { navigation } = this.props;
    const project = navigation.getParam('project');
    navigation.setParams({ id: project.id });

    this.ref = await firebase.firestore().collection('projects').doc(project.id).collection('objectives');

    this.unsubscribe = this.ref.onSnapshot(this.loadObjectives);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  loadObjectives = (snapshot) => {
    const objectives = [];
    let progressTotal = 0;
    snapshot.forEach((doc) => {
      const {
        objective, unit, value, current,
      } = doc.data();

      objectives.push({
        id: doc.id,
        objective,
        unit,
        value,
        current,
      });

      progressTotal += ((current * 100) / value);
    });
    this.setState({ objectives, progressTotal });
  }


  render() {
    const { objectives, progressTotal } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.statusContainer}>
          <View style={styles.percentView}>
            <Text style={styles.percentValue}>
              {progressTotal ? (progressTotal / objectives.length).toFixed() : '0'}%
            </Text>
            <Text style={styles.percentText}>Progresso</Text>
          </View>

          <View style={styles.percentView}>
            <Text style={styles.percentValue}>
              0%
            </Text>
            <Text style={styles.percentText}>Orçamento</Text>
          </View>
        </View>

        <FlatList
          data={objectives}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Item objective={item} />}
          style={styles.list}
        />

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
