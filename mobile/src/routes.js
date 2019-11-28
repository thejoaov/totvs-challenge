import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Header from '~/components/Header';

import SignIn from '~/pages/SignIn';
import Main from '~/pages/Main';
import New from '~/pages/Product/New';
import Edit from '~/pages/Product/Edit';

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          screen: SignIn,
        }),
        App: createStackNavigator(
          {
            Main,
            New,
            Edit,
          },
          {
            defaultNavigationOptions: {
              headerRight: Header,
            },
          },
        ),
      },
      {
        initialRouteName: isSigned ? 'App' : 'Sign',
      },
    ),
  );
