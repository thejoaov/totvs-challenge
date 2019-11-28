import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: space-around;
  align-items: center;
  flex: 1;
  width: 100%;
  height: 100%;
  /* background-color: red; */
`;

export const NewButton = styled.TouchableOpacity`
  background-color: #80aa57;
  height: 60px;
  width: 300px;
  border-radius: 10px;
  justify-content: center;
  flex-direction: row;
  align-items: center;
`;

export const NewButtonText = styled.Text`
  text-align: center;
  color: #fff;
`;

export const SignOutButton = styled.TouchableOpacity`
  margin-bottom: 15px;
`;

export const SignOutButtonText = styled.Text`
  font-weight: bold;
`;
