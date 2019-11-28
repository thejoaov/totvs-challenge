import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Entypo';
import { Logo } from '~/components/Header/styles';
import sale from '~/assets/sale.png';

export const Container = styled.View`
  background-color: #fff;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  margin: 30px;
`;

export const Header = styled.TouchableOpacity`
  align-self: flex-end;
  margin-top: 10px;
  margin-left: auto;
`;

export const TotvsLogo = styled(Logo)``;

export const ActivityView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const WelcomeView = styled.View``;

export const Sale = styled.Image.attrs({
  source: sale,
  resizeMode: 'contain',
})`
  height: 130px;
  margin-bottom: 20px;
`;

export const WelcomeText = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: 18px;
`;

export const ButtonGoogleLogin = styled.TouchableOpacity.attrs(props =>
  props.enabled ? { activeOpacity: 0.5, onPress: null } : null,
)`
  background-color: #c15545;
  height: 60px;
  width: 300px;
  border-radius: 10px;
  margin: 30px;
  flex-direction: row;
  align-items: center;
`;

export const ButtonGoogleIcon = styled(Icon).attrs({
  name: 'google-',
  color: '#fff',
  size: 22,
})`
  margin-left: 20px;
`;

export const ButtonGoogleText = styled.Text`
  color: #fff;
  left: 0;
  margin: auto;
`;
