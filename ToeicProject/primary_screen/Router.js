import { StackNavigator } from 'react-navigation';
import Welcome from './Welcome.js';
import Test from '../area_screen/Test.js';
import Setting from './Setting.js';
import Detail from '../sreens/Detail.js';

export const Routers = StackNavigator(
  {
    Welcome_Screens: { screen: Welcome },
    Test_Screens: { screen: Test },
    Setting_s: { screen: Setting },
    ManHinh_Detail:{ screen: Detail},
  },
  {
    initialRouteName: 'Welcome_Screens',
  }
)
