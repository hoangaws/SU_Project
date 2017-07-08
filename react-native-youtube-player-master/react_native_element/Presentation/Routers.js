import { StackNavigator } from 'react-navigation';
// import Menu from './Menu.js';
import Test from '../Container/Test.js';
import App from './App.js';
import ScreenA from './Screen_A.js';
import ScreenB from './Screen_B.js';
import ScreenC from './Screen_C.js';
import ScreenD from './Screen_D.js';
import RealmClass from '../Container/Realm.js';

export const Routers = StackNavigator(
  {
    App_Screens: { screen: App },
    // Menu_Screens: { screen: Menu },
    Test_Screens: { screen: Test },
    Realm_Screens: { screen: RealmClass },
    A_Screens: { screen: ScreenA },
    B_Screens: { screen: ScreenB },
    C_Screens: { screen: ScreenC },
    D_Screens: { screen: ScreenD },
  },
  {
    initialRouteName: 'App_Screens',
  }
)
