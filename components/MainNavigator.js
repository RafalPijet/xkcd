import {createStackNavigator} from 'react-navigation-stack';
import ComicList from './ComicList';
import ComicItem from './ComicItem';

const MainNavigator = createStackNavigator({
      Home: {screen: ComicList},
      Item: {screen: ComicItem}
    },
    {
      initialRouteName: 'Home'
    })

export default MainNavigator;
