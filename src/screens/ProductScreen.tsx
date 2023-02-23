import {
  StyleSheet,
  Pressable,
  Text,
  View,
  Image,
  FlatList,
} from "react-native";
import products from "../../src/data/products";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { productsSlice } from "../store/product.slice";

export default function ProductScreen() {
  const navigation = useNavigation();
  const products = useSelector(({ products }: any) => products.products);
  const dsptch = useDispatch();
  return (
    <FlatList
      data={products}
      numColumns={2}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => {
            //update selectedProduct before navigate
            dsptch(productsSlice.actions.setSelectedProduct(item.id));
            navigation.navigate("PRODUCT_SHOW");
          }}
          style={styles.itemContainer}
        >
          <Image
            source={{
              uri: item.image,
            }}
            style={styles.image}
          />
          <Text>{item.name}</Text>
        </Pressable>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  itemContainer: {
    width: "50%",
    padding: 1,
  },
});
