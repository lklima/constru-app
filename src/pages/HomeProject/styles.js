import { StyleSheet } from 'react-native';
import { colors } from '~/styles';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  statusContainer: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  percentView: {
    height: 120,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 60,
    borderWidth: 3,
    borderColor: colors.primary,
  },
  percentValue: {
    fontSize: 26,
    color: colors.primary,
    fontWeight: 'bold',
  },
  percentText: {
    fontSize: 16,
    color: 'black',
  },
  buttomContainer: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    bottom: 10,
    position: 'absolute',
  },
  buttomView: {
    alignItems: 'center',
  },
  buttom: {
    width: 35,
    height: 35,
    marginBottom: 5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'black',
  },
});
