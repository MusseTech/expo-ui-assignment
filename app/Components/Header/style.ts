import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingTop: 50, // status bar safe
    borderBottomWidth: 1,
    borderBottomColor: "#e4e6eb",
  },

  topRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    marginRight: 90,
  },

  icons: {
    flexDirection: "row",
    gap: 14,
  },

  tabs: {
    flexDirection: "row",
    paddingHorizontal: 16,
    marginTop: 12,
  },

  tabText: {
    fontSize: 16,
    marginRight: 20,
    fontWeight: "800",
  },

  activeTab: {
    color: "#1877F2",
    fontWeight: "600",
  },
});
