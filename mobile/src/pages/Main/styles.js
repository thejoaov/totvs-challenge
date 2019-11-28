import styled from 'styled-components/native';
import Footer from '~/components/Footer';

export const Container = styled.View`
  height: 80%;
`;

export const ProductList = styled.FlatList`
  padding-left: auto;
`;

export const WelcomeView = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

export const WelcomeText = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: 18px;
`;

export const MainFooter = styled(Footer)``;
