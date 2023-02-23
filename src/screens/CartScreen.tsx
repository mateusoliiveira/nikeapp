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

export default function CartScreen() {
  function increaseQtt() {}
  function decreaseQtt() {}

  function ShoppingCartPartial() {
    return (
      <View style={styles.totalsContainer}>
        <View style={styles.row}>
          <Text style={styles.text}>Subtotal</Text>
          <Text style={styles.text}>R$ 410.00</Text>
        </View>
      </View>
    );
  }
  function ShoppingCartTotal() {
    return (
      <View style={styles.totalsContainer}>
        <View style={styles.row}>
          <Text style={styles.text}>Delivery</Text>
          <Text style={styles.text}>R$ 20.00</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.textBold}>Total</Text>
          <Text style={styles.textBold}>R$ 430.00</Text>
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
          return <ShoppingCartTotal />;
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
