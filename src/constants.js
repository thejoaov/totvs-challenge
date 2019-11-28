function defaultApi() {
  if (__DEV__) {
    return {
      androidClientId:
        '163428282617-s8s6or7vl5hlnedghvd15q4bqqc3hg9c.apps.googleusercontent.com',
    };
  } else {
    return {
      androidClientId:
        '163428282617-30417u25idvaon7qmre34q987fi6hpeu.apps.googleusercontent.com',
    };
  }
}

export const apiUrl = {
  dev: 'http://10.10.7.117:3333',
  prod: 'https://totvs-challenge-server.herokuapp.com',
};

const { androidClientId } = defaultApi();

export const auth = {
  androidClientId,
};
