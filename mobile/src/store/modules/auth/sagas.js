import { takeLatest, call, put, all } from 'redux-saga/effects';
import { Alert } from 'react-native';
import * as Google from 'expo-google-app-auth';
import { auth } from '~/constants';

import { signInSuccess, signFailure } from './actions';
import api from '~/services/api';

export function* signIn() {
  try {
    const { type, user } = yield call(Google.logInAsync, {
      androidClientId: auth.androidClientId,
      androidStandaloneAppClientId: auth.androidClientId,
    });

    if (type === 'success') {
      const loginOrCreateUser = yield call(api.post, 'users', {
        name: user.name,
        email: user.email,
        google_login: true,
        google_token: user.id,
      });
      const { token } = loginOrCreateUser.data.token;
      api.defaults.headers.Authorization = `Bearer ${token}`;
      yield put(signInSuccess(token, user));
    } else {
      yield put(signFailure());
      Alert.alert(
        'Login error',
        'It was not possible to sign in right now, please try again later',
      );
    }
  } catch (err) {
    Alert.alert(
      'Login error',
      'It was not possible to sign in right now, please try again later',
    );
    yield put(signFailure());
    throw new Error(err);
  }
}

export function setToken({ payload }) {
  if (!payload) {
    return;
  }

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('persist/REHYDRATE', setToken),
]);
