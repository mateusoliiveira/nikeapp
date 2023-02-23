import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductScreen from "./screens/ProductScreen";
import ProductShowScreen from "./screens/ProductShowScreen";
import CartScreen from "./screens/CartScreen";
import CartPusher from "./components/atom/CartPusher";
import { selectNumberOfItems } from "./store/cart.slice";
import { useSelector } from "react-redux";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  const numberOfItems = useSelector(selectNumberOfItems);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerTitle: "Produtos",
            headerRight: () => <CartPusher numberOfItems={numberOfItems} />,
          }}
          name="PRODUCTS"
          component={ProductScreen}
        />
        <Stack.Screen name="PRODUCT_SHOW" component={ProductShowScreen} />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="CART"
          component={CartScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
