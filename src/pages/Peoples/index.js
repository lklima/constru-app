import React, { Component } from 'react';

import { View, FlatList } from 'react-native';
import firebase from 'react-native-firebase';

import { styles } from './styles';
import Buttom from '~/components/FloatButtom';
import Item from './Item';

export default class Peoples extends Component {
  constructor(props) {
    super(props);

    this.state = {
      peoples: [],
      project: '',
    };
  }

  async componentDidMount() {
    const { navigation } = this.props;
    const project = navigation.getParam('project');
    this.setState({ project });
    this.ref = await firebase.firestore().collection('projects').doc(project.id).collection('peoples');

    this.unsubscribe = this.ref.onSnapshot(this.loadPeoples);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  loadPeoples = (snapshot) => {
    const peoples = [];

    snapshot.forEach((doc) => {
      const {
        name, nick, func, photo, birthday, cpf, phone,
      } = doc.data();

      peoples.push({
        id: doc.id,
        name,
        nick,
        func,
        birthday,
        cpf,
        photo,
        phone,
      });
    });

    this.setState({ peoples });
  }

  render() {
    const { navigation } = this.props;
    const { peoples, project } = this.state;
    return (
      <View style={styles.container}>
        <FlatList
          data={peoples}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Item navigation={navigation} project={project} people={item} />}
          style={styles.list}
        />

        <Buttom
          text="Adicionar Pessoas"
          navigation={() => navigation.navigate('AddPeoples', { project: navigation.getParam('project') })}
        />
      </View>
    );
  }
}
