import { StyleSheet } from "react-native";

const ProfileInfoStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  form: {
    width: "100%",
    height: "45%",
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 30,
  },
  formText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  formImage: {
    height: 30,
    width: 30,
  },
  formInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  formTextDescription: {
    fontSize: 12,
    color: "gray",
  },
  formContent: {
    marginLeft: 15,
  },
  imageBackground: {
    width: "100%",
    height: "100%",
    opacity: 0.7,
    bottom: "30%",
  },
  logoContainer: {
    position: "absolute",
    alignSelf: "center",
    top: "14%",
  },
  logoImage: {
    width: 180,
    height: 180,
    borderRadius: 100,
    borderColor: "white",
    borderWidth: 2,
  },
  logoText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    marginTop: 10,
    fontWeight: "bold",
  },
  logout: {
    position: "absolute",
    top: 40,
    right: 15,
  },
  imageLogout: {
    width: 40,
    height: 40,
  },
});

export default ProfileInfoStyles;
