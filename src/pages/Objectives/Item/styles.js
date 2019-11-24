import { StyleSheet } from 'react-native';
import { colors } from '~/styles';


export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 80,
    backgroundColor: 'white',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
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
