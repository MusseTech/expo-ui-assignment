import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#e4e6eb",
  },

  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  locationpin: {
    color: "#1877F2",
  },

  headerTitle: {
    fontSize: 16,
    fontWeight: "700",
    paddingHorizontal: 16,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
  },

  location: {
    color: "#1877F2",
  },

  itemsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 5,
    paddingBottom: 5,
  },

  itemBox: {
    width: "100%",
    aspectRatio: 1,
    backgroundColor: "#f0f2f5",
    position: "relative",
    overflow: "hidden",
  },

  itemImage: {
    width: "100%",
    height: "100%",
  },

  nearbyLabel: {
    position: "absolute",
    top: 8,
    left: 8,
    backgroundColor: "white",
    color: "#000",
    fontSize: 15,
    fontWeight: "700",
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 4,
  },

  itemWrapper: {
    width: "49.4%",
  },

  itemLabel: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginLeft: 8,
  },

  itemInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },

  itemPrice: {
    fontSize: 18,
    fontWeight: "700",
  },
});
