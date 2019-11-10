import React, { Component } from 'react';

import { View, FlatList } from 'react-native';
import firebase from 'react-native-firebase';

import { styles } from './styles';
import Buttom from '~/components/FloatButtom';
import Item from './Item';

export default class Objectives extends Component {
  constructor(props) {
    super(props);

    this.state = {
      objectives: [],
      project: '',
    };
  }

  async componentDidMount() {
    const { navigation } = this.props;
    const project = navigation.getParam('project');
    this.setState({ project });
    this.ref = await firebase.firestore().collection('projects').doc(project.id).collection('objectives');

    this.unsubscribe = this.ref.onSnapshot(this.loadPeoples);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  loadPeoples = (snapshot) => {
    const objectives = [];

    snapshot.forEach((doc) => {
      const {
        objective, value, unit,
      } = doc.data();

      objectives.push({
        id: doc.id,
        objective,
        value,
        unit,
      });
    });

    this.setState({ objectives });
  }

  render() {
    const { navigation } = this.props;
    const { objectives, project } = this.state;
    return (
      <View style={styles.container}>
        <FlatList
          data={objectives}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Item navigation={navigation} project={project} objective={item} />}
          style={styles.list}
        />

        <Buttom
          text="Adicionar Metas"
          navigation={() => navigation.navigate('AddObjective', { project: navigation.getParam('project') })}
        />
      </View>
    );
  }
}
