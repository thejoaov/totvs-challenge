import React from 'react';
import { useDispatch } from 'react-redux';
import { signOut } from '~/store/modules/auth/actions';
import { Alert } from 'react-native';

import {
  Container,
  NewButton,
  NewButtonText,
  SignOutButton,
  SignOutButtonText,
} from './styles';

export default function Footer({ navigation }) {
  const dispatch = useDispatch();

  async function logout() {
    Alert.alert(
      'Logout',
      'Do you want to leave?',
      [
        { text: 'Nope, cancel', onDismiss: () => {} },
        { text: 'Yes, logout', onPress: () => dispatch(signOut()) },
      ],
      { cancelable: true },
    );
  }

  return (
    <Container>
      <NewButton onPress={() => navigation.navigate('New')}>
        <NewButtonText>New Product</NewButtonText>
      </NewButton>
      <SignOutButton onPress={logout}>
        <SignOutButtonText>Sign Out</SignOutButtonText>
      </SignOutButton>
    </Container>
  );
}
