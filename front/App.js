import React, { useState } from "react";
import { AppLoading } from "expo";
import { Provider } from "react-redux";

import store from "./src/store";
import { MainLayout } from "./src/MainLayout";
import { bootstrap } from "./src/bootstrap";

export default function App() {
  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={bootstrap}
        onFinish={() => setIsReady(true)}
        onError={e => console.log(e)}
      />
    )
  }

  return (
    <Provider store={store}>
      <MainLayout />
    </Provider>
  );
}
