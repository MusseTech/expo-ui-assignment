import { Image, Text, View } from "react-native";
import { styles } from "./style";
import Entypo from '@expo/vector-icons/Entypo';

const items = [
  {
    id: 1,
    price: "$500",
    name: "Google Pixel phone",
    nearby: true,
    image:
      "https://i.ebayimg.com/images/g/foAAAeSwQBBpOql4/s-l1600.webp",
  },
  {
    id: 2,
    price: "$1000",
    name: "Fender Telecaster",
    image:
      "https://i.ebayimg.com/images/g/5lIAAeSwDeJpgPj8/s-l1600.webp",
  },
  {
    id: 3,
    price: "$50",
    name: "Old t shirts",
    image:
      "https://i.ebayimg.com/images/g/d5gAAOSwq91oOSlu/s-l1600.webp",
  },
  {
    id: 4,
    price: "$600",
    name: "Abbey Road Vinyl ",
    nearby: true,
    image: "https://i.ebayimg.com/images/g/45sAAeSwUH5ph5vr/s-l1600.webp",
  },
  {
    id: 5,
    price: "$55",
    name: "Camera Need gone",
    image:
      "https://i.ebayimg.com/images/g/JSQAAeSwlrFph56C/s-l1600.webp",
  },
  {
    id: 6,
    price: "$30",
    name: "PS1 GAME",
    image:
      "https://i.ebayimg.com/images/g/DJcAAOSw0kNnoBMm/s-l1600.webp",
  },
];

const ListingCards = () => {};

export default function MiddleHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Today's Picks</Text>
        <View style={styles.locationContainer}>
          <Entypo style={styles.locationpin} name="location-pin" size={24} color="#1877F2" />
          <Text style={[styles.headerTitle, styles.location]}>Calgary, AB</Text>
        </View>
      </View>
      <View style={styles.itemsContainer}>
        {items.map((item) => (
          <View key={item.id} style={styles.itemWrapper}>
            <View style={styles.itemBox}>
              <Image source={{ uri: item.image }} style={styles.itemImage} />
              {item.nearby && <Text style={styles.nearbyLabel}>Nearby</Text>}
            </View>
            <View style={styles.itemInfo}>
              <Text style={styles.itemPrice}>{item.price}</Text>
              <Text
                style={styles.itemLabel}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {item.name}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}
