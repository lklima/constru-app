import React from 'react';

import { View, Text } from 'react-native';

import { styles } from './styles';

const Item = ({ objective }) => (
  <View style={styles.container}>
    <View style={styles.progressView}>
      <Text style={styles.progress}>{((objective.current * 100) / objective.value).toFixed()}%</Text>
    </View>

    <View>
      <Text style={styles.name}>{objective.objective}</Text>
      <Text style={styles.progressText}>{`${objective.current} ${objective.unit} de ${objective.value} ${objective.unit} `} </Text>
    </View>
  </View>
);

export default Item;
