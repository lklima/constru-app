import React, { Component } from 'react';

import { View, StatusBar, FlatList } from 'react-native';

import firebase from 'react-native-firebase';
import { styles } from './styles';
import { colors } from '~/styles';

import Buttom from '~/components/FloatButtom';
import Item from './Item';

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.unsubscribe = null;
    this.ref = firebase.firestore().collection('projects');
    this.state = {
      projects: [],
    };
  }

  async componentDidMount() {
    const user = await firebase.auth().currentUser;
    if (!user) {
      firebase.auth().signInAnonymously().then(() => {
        this.unsubscribe = this.ref.onSnapshot(this.loadProjects);
      }).catch((e) => console.tron.log(e));
    } else {
      this.unsubscribe = this.ref.onSnapshot(this.loadProjects);
    }
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  loadProjects = (snapshot) => {
    const projects = [];
    snapshot.forEach((doc) => {
      const {
        name, startDate, endDate, customer, enginner,
        address, city, state, coast, progress, coastPercent,
      } = doc.data();
      projects.push({
        id: doc.id,
        name,
        startDate,
        endDate,
        customer,
        progress,
        enginner,
        address,
        city,
        state,
        coast,
        coastPercent,
      });
      this.setState({ projects });
    });
  }

  static navigationOptions = {
    title: 'Meus Empreendimentos',
  }

  render() {
    const { navigation } = this.props;
    const { projects } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={colors.primary} />

        <FlatList
          style={styles.list}
          data={projects}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Item navigation={navigation} project={item} />}
        />

        <Buttom
          navigation={() => navigation.navigate('AddConstruct')}
          text="Adicionar Empreendimento"
        />
      </View>
    );
  }
}
