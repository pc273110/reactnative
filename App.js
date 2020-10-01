import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ComponentsExercise from "./src/screens/ListScreen";
import ListScreen from "./src/screens/ListScreen";
import ListAge from "./src/screens/ListAge";
// its a tool from a library called 'React Navigation' that is used to show different screens to the user
const navigator = createStackNavigator(
  {
      Home: HomeScreen,
      Component: ComponentsScreen,
      Exercise: ComponentsExercise,
      List: ListScreen,   
      Age: ListAge,
  },
  {
      initialRouteName: "Home",
      defaultNavigationOptions: {
        title: "Home Screen"
    }
  }
);

export default createAppContainer(navigator);
 