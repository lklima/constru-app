import React from 'react';

import {
  View, Text, TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import { styles } from './styles';

const Buttom = ({ text, navigation }) => (
  <View style={styles.container}>
    <View style={styles.textView}>
      <Text>{text}</Text>
    </View>

    <TouchableOpacity style={styles.buttom} onPress={navigation}>
      <Icon
        name="plus"
        size={25}
        color="white"
      />
    </TouchableOpacity>
  </View>
);

export default Buttom;
