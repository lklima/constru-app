import { StyleSheet } from 'react-native';
import { colors } from '~/styles';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerView: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 15,
  },
  statusContainer: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  list: {
    width: '100%',
    marginTop: 20,
    marginBottom: 50,
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
    width: '100%',
    height: 55,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    bottom: 0,
    position: 'absolute',
  },
  buttomView: {
    alignItems: 'center',
  },
  buttom: {
    width: 30,
    height: 30,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'black',
  },
  buttomText: {
    color: 'black',
    fontSize: 14,
  },
});
