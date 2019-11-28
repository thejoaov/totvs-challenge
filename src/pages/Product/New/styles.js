import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

export const Container = styled.KeyboardAvoidingView.attrs({
  behavior: 'position',
  enabled: true,
  keyboardVerticalOffset: 5,
})`
  flex: 1;
`;

export const ScrollContainer = styled.ScrollView``;

export const Form = styled.View`
  margin: 0 30px;
`;

export const ProductImageView = styled.ImageBackground.attrs({
  resizeMode: 'cover',
})`
  height: 230px;
  width: 100%;
  background-color: #999;
  flex-direction: row-reverse;
`;

export const ProductImageButton = styled.TouchableOpacity`
  border: 1px solid;
  width: 180;
  height: 44px;
  border-radius: 22px;
  border-color: #000;
  background-color: rgba(255, 255, 255, 0.5);
  align-self: flex-end;
  align-items: center;
  justify-content: center;
  align-content: center;
  flex-direction: row;
  margin: 10px 15px;
`;

export const ProductImageButtonIcon = styled(Icon).attrs({
  name: 'camera',
  color: '#000',
  size: 22,
})`
  margin-left: 15px;
`;

export const ProductImageButtonText = styled.Text`
  color: #000;
  text-transform: uppercase;
  flex: 1;
  margin-left: 20px;
`;

export const ProductName = styled.View``;

export const ProductLabel = styled.Text`
  margin-top: 10px;
  color: #333;
`;

export const ProductInput = styled.TextInput`
  width: 100%;
  height: 50px;
  border: 1px solid;
  border-radius: 5px;
  border-color: #999;
  padding: 5px 20px;
  font-weight: bold;
  margin-top: 5px;
`;

export const ColorSizeView = styled.View`
  flex: 1;
  flex-direction: row;
  align-content: space-between;
`;

export const ProductPrice = styled.View``;

export const ProductColor = styled.View`
  flex: 1;
`;

export const ProductSize = styled.View`
  flex: 1;
  margin-left: 20px;
`;

export const ButtonContainer = styled.View`
  flex: 0;
  flex-direction: row;
  justify-content: center;
`;
