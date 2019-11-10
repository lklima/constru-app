import { StyleSheet } from 'react-native';
import { colors } from '~/styles';


export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 70,
    width: '100%',
    elevation: 2,
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10,
  },
  progressView: {
    height: 50,
    width: 50,
    marginRight: 8,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  progressText: {
    fontSize: 14,
    color: 'black',
  },
  progress: {
    fontSize: 18,
    color: colors.primary,
  },
  name: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
