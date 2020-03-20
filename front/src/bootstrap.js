import * as Font from "expo-font";

export async function bootstrap() {
  try {
    await Font.loadAsync({
      "PT-Sans-regular": require("../assets/fonts/PTSans-Regular.ttf"),
      "PT-Sans-bold": require("../assets/fonts/PTSans-Bold.ttf"),
      "Roboto-black": require("../assets/fonts/Roboto-Black.ttf"),
      "Roboto-bold": require("../assets/fonts/Roboto-Bold.ttf"),
      "Roboto-light": require("../assets/fonts/Roboto-Light.ttf"),
      "Roboto-medium": require("../assets/fonts/Roboto-Medium.ttf"),
      "Roboto-regular": require("../assets/fonts/Roboto-Regular.ttf"),
      "Roboto-thin": require("../assets/fonts/Roboto-Thin.ttf"),
    });
  } catch (error) {
    console.log(error);
  }
}