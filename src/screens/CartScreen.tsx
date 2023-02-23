import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  Pressable,
} from "react-native";
import cart from "../data/cart";
import CartListItem from "../components/atom/CartListItem";
import { useSelector } from "react-redux";
import {
  selectSubTotal,
  selectDeliveryFee,
  selectNumberOfItems,
  selectTotal,
} from "../store/cart.slice";
import { FontAwesome5 } from "@expo/vector-icons";

export default function CartScreen() {
  const cart = useSelector(({ cart }: any) => cart.items);
  const subtotal = useSelector(selectSubTotal);
  const deliveryFee = useSelector(selectDeliveryFee);
  const total = useSelector(selectTotal);
  const numberOfItems = useSelector(selectNumberOfItems);

  function ShoppingCartPartial() {
    return (
      <View style={styles.totalsContainer}>
        <View style={styles.row}>
          <Text style={styles.text}>Subtotal</Text>
          <Text style={styles.text}>R${subtotal}</Text>
        </View>
      </View>
    );
  }
  function ShoppingCartTotal() {
    return (
      <View style={styles.totalsContainer}>
        <View style={styles.row}>
          <Text style={styles.text}>Delivery</Text>
          <Text style={styles.text}>
            {!deliveryFee ? "grátis" : `R$${deliveryFee}`}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.textBold}>Total</Text>
          <Text style={styles.textBold}>R${total}</Text>
        </View>
      </View>
    );
  }

  return (
    <>
      <FlatList
        data={cart}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        ListHeaderComponent={() => {
          return <ShoppingCartPartial />;
        }}
        ListFooterComponent={() => {
          return !numberOfItems ? (
            <Text style={{ textAlign: "center" }}>
              Seu carrinho está vazio <FontAwesome5 name="sad-tear" />
            </Text>
          ) : (
            <ShoppingCartTotal />
          );
        }}
      />
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Ir para a entrega</Text>
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  totalsContainer: {
    margin: 20,
    paddingTop: 10,
    borderColor: "gainsboro",
    borderTopWidth: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 2,
  },
  text: {
    fontSize: 16,
    color: "#00000080",
  },
  textBold: {
    fontSize: 16,
    fontWeight: "500",
  },
  button: {
    position: "absolute",
    backgroundColor: "#000",
    bottom: 30,
    width: "90%",
    alignSelf: "center",
    padding: 20,
    borderRadius: 100,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 16,
  },
});
