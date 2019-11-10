import { StyleSheet } from 'react-native';
import { colors } from '~/styles';


export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 60,
    right: 15,
  },
  buttom: {
    width: 50,
    height: 50,
    borderRadius: 25,
    elevation: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
  textView: {
    backgroundColor: 'white',
    marginRight: 8,
    padding: 10,
    elevation: 1,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0.5,
      height: 0.5,
    },
    shadowRadius: 0,
    shadowOpacity: 0.5,
  },
});
