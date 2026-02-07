import { View } from "react-native";
import Header from "./Components/Header/header";
import BottomNav from "./Components/Navigation/bottomNav";  
import Listings from "./Components/Listings/listings";  

export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      {/* Header */}
      <Header />

      {/*Listings content*/}
      <Listings />

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Middle Content */}
      </View>

      {/* Bottom Navigation */}
      <BottomNav />
    </View>
  );
}
