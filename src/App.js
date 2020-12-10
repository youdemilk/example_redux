import React from "react";
import MainPage from "./pages/mainPage";
import { Provider } from "react-redux";
import { getStore } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

class App extends React.Component {
  render() {
    const { store, persistor } = getStore();

    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <MainPage
            decreaseButtonText={"Decrease value"}
            increaseButtonText={"Increase Value"}
            mainText={"Hello, World!"}
            resetButtonText={"Reset value"}
          />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
