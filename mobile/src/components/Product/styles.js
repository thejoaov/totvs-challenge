import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.View`
  flex-direction: row;
  padding: 10px 0;
  margin: 0 15px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
`;

export const ImageBackground = styled(LinearGradient)`
  width: 100px;
  height: 130px;
  margin: 5px 10px 5px 0;
  border-radius: 10px;
`;

export const ImageBox = styled.View`
  width: 100px;
  height: 130px;
  margin: 5px 10px 5px 0;
  border-radius: 10px;
  border: 2px grey;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 100%;
  height: 100%;
  align-self: center;
`;

export const InfoView = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Name = styled.Text`
  font-size: 20px;
  color: #444;
`;

export const Price = styled.Text`
  color: #80aa57;
  margin: 15px 0;
  font-size: 20px;
`;

export const ColorSizeView = styled.View`
  flex-direction: row;
`;

export const ColorSizeInfoView = styled.View`
  width: 90px;
`;

export const ColorSizeTitle = styled.Text`
  color: #999;
`;

export const ColorSizeText = styled.Text`
  text-transform: capitalize;
`;

export const ActionsView = styled.View`
  justify-content: space-around;
  margin: 5px 0;
`;

export const ActionButton = styled.TouchableOpacity.attrs({
  highLightColor: '#000',
})`
  border: 1px solid;
  width: 80px;
  height: 40px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;

export const ActionButtonText = styled.Text`
  text-transform: uppercase;
`;
