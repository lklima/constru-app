import { StyleSheet } from 'react-native';
import { colors } from '~/styles';


export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 100,
    width: '100%',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: colors.primary,
    marginBottom: 10,
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  progressView: {
    height: 60,
    width: 60,
    marginRight: 8,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    borderWidth: 2,
    borderColor: colors.primary,
  },
  progressText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primary,
  },
  name: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  infoView: {

  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
