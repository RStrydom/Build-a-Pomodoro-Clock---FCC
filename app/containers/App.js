import Reactotron from 'reactotron-react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from '../components/HomeScreen';
import Timer from '../components/Timer';



export default Router = StackNavigator(
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
