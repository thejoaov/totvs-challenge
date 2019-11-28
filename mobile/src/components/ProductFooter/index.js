import React from 'react';
import { ActivityIndicator } from 'react-native';
import {
  Container,
  CancelButton,
  CancelButtonText,
  ActionButton,
  ActionButtonText,
} from './styles';

export default function ProductFooter({ navigation, execute, edit, loading }) {
  return (
    <Container>
      <ActionButton onPress={() => execute()}>
        {loading ? (
          <ActivityIndicator size={25} color="#fff" />
        ) : (
          <ActionButtonText>
            {edit ? 'Save' : 'Save New'} Product
          </ActionButtonText>
        )}
      </ActionButton>
      <CancelButton onPress={() => navigation.navigate('Main')}>
        <CancelButtonText>Cancel</CancelButtonText>
      </CancelButton>
    </Container>
  );
}
