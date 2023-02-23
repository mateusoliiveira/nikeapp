import React from "react";
import { Pressable, Text } from "react-native";
import navigation from "../../navigation";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";

export default function CartPusher() {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate("CART")}
      style={{ flexDirection: "row", alignItems: "center" }}
    >
      <FontAwesome5 name="shopping-cart" style={{ fontSize: 14 }} />
      <Text style={{ marginLeft: 3, fontWeight: "500", fontSize: 16 }}>3</Text>
    </Pressable>
  );
}
