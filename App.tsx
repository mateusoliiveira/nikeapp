import { StyleSheet, StatusBar, View } from "react-native";
import ProductScreen from "./src/screens/ProductScreen";
import ProductShowScreen from "./src/screens/ProductShowScreen";
import CartScreen from "./src/screens/CartScreen";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <ProductScreen /> */}
      <CartScreen />
      <StatusBar barStyle="default" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
