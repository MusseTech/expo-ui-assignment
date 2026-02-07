import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingVertical: 8,
    paddingBottom: 12,
    borderTopWidth: 1,
    borderTopColor: "#E4E6EB",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  tab: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 4,
  },
  label: {
    fontSize: 10,
    color: "#65676B",
    marginTop: 4,
    fontWeight: "500",
  },
  activeLabel: {
    color: "#0866FF",
  },
  activeIndicator: {
    position: "absolute",
    top: -12,
    left: 0,
    right: 0,
    height: 3,
    backgroundColor: "#0866FF",
    borderRadius: 2,
  },
  badge: {
    position: "absolute",
    right: -8,
    top: -4,
    backgroundColor: "#E41E3F",
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 4,
  },
  badgeText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default styles;
