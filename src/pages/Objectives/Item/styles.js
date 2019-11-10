import { StyleSheet } from 'react-native';
import { colors } from '~/styles';


export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 80,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 2,
    borderRadius: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  nick: {
    color: 'black',
  },
  list: {
    width: '100%',
  },
  buttom: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  buttomView: {
    flexDirection: 'row',
    marginRight: 10,
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
