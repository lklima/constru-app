import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import { colors } from '~/styles';

const Item = ({ project, navigation }) => (
  <TouchableOpacity onPress={() => navigation.navigate('Project', { project })}>
    <View style={styles.container}>
      <View style={styles.progressView}>
        <Text style={styles.progressText}>{project.progress}%</Text>
      </View>

      <View style={styles.infoView}>
        <Text style={styles.name}>{project.name}</Text>
        <View style={styles.rowView}>
          <Icon
            name="calendar"
            size={16}
            color={colors.regular}
          />
          <Text>Inicío - {project.startDate} </Text>
        </View>

        <View style={styles.rowView}>
          <Icon
            name="calendar"
            size={16}
            color={colors.regular}
          />
          <Text>Previsão de Término - {project.startDate} </Text>
        </View>

        <View style={styles.rowView}>
          <Icon
            name="map-marker-minus"
            size={16}
            color={colors.regular}
          />
          <Text numberOfLines={1}>{`${project.address} - ${project.city} - ${project.state}`} </Text>
        </View>
      </View>
    </View>
  </TouchableOpacity>
);

export default Item;
