import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { RoundedButton } from "./RoundedButton";

interface Props {
  openGallery: () => void;
  openCamera: () => void;
  modalUsestate: boolean;
  setmodalUseState: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalPickImage = ({
  openGallery,
  openCamera,
  modalUsestate,
  setmodalUseState,
}: Props) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalUsestate}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setmodalUseState(!modalUsestate);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text>Selecciona una Opción</Text>
              <View style={styles.butttonContainer}>
                <RoundedButton
                  onPress={() => {
                    openGallery();
                    setmodalUseState(false);
                  }}
                  text="Galeria"
                />
              </View>
              <View style={styles.butttonContainer}>
                <RoundedButton
                  onPress={() => {
                    openCamera();
                    setmodalUseState(false);
                  }}
                  text="Camara"
                />
              </View>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    width: 250,
    height: 220,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    paddingTop: 35,
    paddingLeft: 25,
    paddingRight: 25,

    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  butttonContainer: {
    width: "100%",
    marginTop: 8,
  },
});
