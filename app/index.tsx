import { View } from "react-native";
import Header from "./Components/Header/header";

export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      {/* Header */}
      <Header />

      {/* Page Content (temporary) */}
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Middle + Bottom will come later */}
      </View>
    </View>
  );
}
