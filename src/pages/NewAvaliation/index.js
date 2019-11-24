import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';

export default class NewAvaliation extends Component {
  componentDidMount() {
    const { navigation } = this.props;
    const data = navigation.getParam('id');
    if (data) alert(data);
  }

  static navigationOptions = {
    title: 'Avaliação',
  }

  render() {
    return (
      <View style={styles.container} />
    );
  }
}
