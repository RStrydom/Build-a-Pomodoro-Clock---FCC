import { StackNavigator } from 'react-navigation';

import HomeScreen from './components/HomeScreen';
import Timer from './components/Timer';

const Router = StackNavigator(
    {
        Home: { screen: HomeScreen },
        Timer: { screen: Timer },
    },
    {
        initialRouteName: 'Home',
        headerMode: 'screen',
        navigationOptions: {
            header: {
                visible: false,
            }
        }
    }
)

export default Router;
