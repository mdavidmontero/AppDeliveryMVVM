import { Dimensions } from "react-native";
import useViewModel from "./ViewModel";
import RolesItem from "./Item";
import Carousel from "react-native-reanimated-carousel";
import { useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../App";

interface Props extends StackScreenProps<RootStackParamList, "RolesScreen"> {}

export const RolesScreen = ({ navigation, route }: Props) => {
  const { user } = useViewModel();
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  const [snapDirection, setSnapDirection] = useState<"left" | "right">("left");

  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Carousel
        loop={false}
        width={width}
        height={420} // Mantén la altura fija del carrusel
        autoPlay={false}
        data={user?.roles!}
        scrollAnimationDuration={1000}
        renderItem={({ item }) => (
          <RolesItem
            rol={item}
            height={420}
            width={width - 100}
            navigation={navigation}
          />
        )}
        modeConfig={{
          snapDirection,
          stackInterval: 30,
        }}
        style={{
          transform: [{ translateY: (height - 420) / 2 - 50 }],
        }}
      />
    </GestureHandlerRootView>
  );
};
