import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchSreen from './src/screens/SearchScreen';


const navigator = createStackNavigator({
  Search: SearchSreen
},{
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title:'Bussiness Search'
  }
});

export default createAppContainer(navigator);