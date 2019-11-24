import { StyleSheet } from 'react-native';
import { colors } from '~/styles';


export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 80,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 5,
    borderRadius: 10,
    marginBottom: 10,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginLeft: 10,
    marginRight: 10,
  },
  name: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  nick: {
    color: 'black',
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
