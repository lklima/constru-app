import { StyleSheet } from 'react-native';
import { colors } from '~/styles';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.primary,
  },
  title: {
    color: 'white',
    fontSize: 18,
  },
});
