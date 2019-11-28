import styled from 'styled-components/native';
import logo from '~/assets/logo.png';

export const Container = styled.SafeAreaView`
  height: 55px;
  justify-content: center;
  background-color: #fff;
  padding: 15px;
  flex: 1;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'contain',
})`
  margin-right: -90px;
  height: 40px;
`;
