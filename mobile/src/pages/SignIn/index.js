import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import {
  Container,
  Header,
  TotvsLogo,
  ActivityView,
  ButtonGoogleLogin,
  ButtonGoogleIcon,
  ButtonGoogleText,
  WelcomeText,
  Sale,
  WelcomeView,
} from './styles';
import { signInRequest, signFailure } from '~/store/modules/auth/actions';

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  async function login() {
    dispatch(signInRequest());
  }

  return (
    <Container>
      <Header onPress={() => dispatch(signFailure())}>
        <TotvsLogo />
      </Header>
      {loading ? (
        <ActivityView>
          <ActivityIndicator size={50} color="#80aa57" />
          <WelcomeText>Sign In with Google...</WelcomeText>
        </ActivityView>
      ) : (
        <>
          <WelcomeView>
            <Sale />
            <WelcomeText>Welcome to our</WelcomeText>
            <WelcomeText>Mobile Coding Challenge</WelcomeText>
          </WelcomeView>
          <ButtonGoogleLogin onPress={!loading && login}>
            <ButtonGoogleIcon />
            <ButtonGoogleText>Login with Google</ButtonGoogleText>
          </ButtonGoogleLogin>
        </>
      )}
    </Container>
  );
}
