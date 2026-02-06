import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

const Header = () => {
  return (
    <View style={styles.container}>
      {/* Top Row */}
      <View style={styles.topRow}>
        <TouchableOpacity onPress={() => console.log("menu pressed")}>
          <Ionicons name="menu" size={30} color="black" />
        </TouchableOpacity>

        <Text style={styles.title}>Marketplace</Text>

        <View style={styles.icons}>
          <TouchableOpacity>
            <Ionicons name="chatbubble-ellipses" size={24} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Ionicons name="person-outline" size={26} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Ionicons name="search-outline" size={24} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        <Text style={styles.tabText}>Sell</Text>
        <Text style={[styles.tabText, styles.activeTab]}>For you</Text>
        <Text style={styles.tabText}>Categories</Text>
      </View>
    </View>
  );
};

export default Header;
