import React from 'react';

import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { styles } from './styles';

const Header = ({ title, navigation }) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Icon name="arrow-back" size={30} color="white" />
    </TouchableOpacity>

    <Text style={styles.title}>{title}</Text>

    <View />
  </View>
);

export default Header;
