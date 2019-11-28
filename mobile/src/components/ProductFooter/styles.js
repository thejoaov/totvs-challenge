import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  width: 100%;
  align-self: flex-end;
  bottom: 0;
`;

export const ActionButton = styled.TouchableOpacity`
  background-color: #80aa57;
  height: 60px;
  width: 300px;
  border-radius: 10px;
  margin: 20px 0;
  justify-content: center;
`;

export const ActionButtonText = styled.Text`
  text-align: center;
  color: #fff;
`;

export const CancelButton = styled.TouchableOpacity`
  margin-bottom: 30px;
`;

export const CancelButtonText = styled.Text`
  font-weight: bold;
`;
