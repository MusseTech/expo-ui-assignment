import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

const BottomNav = () => {
  return (
    <View style={styles.container}>
      {/* Home Tab */}
      <TouchableOpacity style={styles.tab}>
        <Ionicons name="home-outline" size={24} color="#000000" />
        <Text style={styles.label}>Home</Text>
      </TouchableOpacity>

      {/* Reels Tab */}
      <TouchableOpacity style={styles.tab}>
        <Ionicons name="play-outline" size={24} color="#000000" />
        <Text style={styles.label}>Reels</Text>
      </TouchableOpacity>

      {/* Friends Tab */}
      <TouchableOpacity style={styles.tab}>
        <Ionicons name="people-outline" size={24} color="#000000" />
        <Text style={styles.label}>Friends</Text>
      </TouchableOpacity>

      {/* Marketplace Tab - Active */}
      <TouchableOpacity style={styles.tab}>
        <View style={styles.activeIndicator} />
        <Ionicons name="storefront" size={24} color="#0866FF" />
        <Text style={[styles.label, styles.activeLabel]}>Marketplace</Text>
      </TouchableOpacity>

      {/* Notifications Tab */}
      <TouchableOpacity style={styles.tab}>
        <View>
          <Ionicons name="notifications-outline" size={24} color="#000000" />
          <View style={styles.badge}>
            <Text style={styles.badgeText}>5</Text>
          </View>
        </View>
        <Text style={styles.label}>Notifications</Text>
      </TouchableOpacity>

      {/* Profile Tab */}
      <TouchableOpacity style={styles.tab}>
        <Ionicons name="person-circle-outline" size={24} color="#000000" />
        <Text style={styles.label}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomNav;
