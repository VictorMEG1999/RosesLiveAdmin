import { Center } from "native-base";
import { StyleSheet } from "react-native";

export const colors = {
  primary: "#000000",
  text: "black",
  background: "#F3F2F7",
  cardBackground: "white",
  buttonTextColor: "white",
};


const styles = StyleSheet.create({
  title: {
    fontSize: 15,
    fontWeight: "bold",
    color: colors.text,
    marginTop: 10
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.text,
  },

  mainContainer: {
    flex: 1,
    backgroundColor: colors.background,
  },
  globalMargin: {
    paddingHorizontal: 20,
    flex: 1,
  },

  btnPrimary: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
  },
  btnPrimaryText: {
    color: colors.text,
    fontSize: 16,
  },

});

export default styles;