import { StyleSheet } from 'react-native';
import { colors } from '~/styles';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  image: {
    borderRadius: 130 / 2,
    width: 130,
    height: 130,
  },
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 13,
  },
  imageParentView: {
    borderRadius: 140 / 2,
    width: 140,
    height: 140,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageViewStyle: {
    borderRadius: 140 / 2,
    width: 140,
    height: 140,
    backgroundColor: colors.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputView: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    marginLeft: 5,
    fontSize: 18,
    color: 'black',
  },
  buttom: {
    marginTop: 30,
    marginBottom: 70,
    height: 45,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    borderRadius: 5,
  },
  buttomText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
