import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "pages/index";
import Products from "pages/products";
import Basket from "pages/basket";
import { configureStore } from "@reduxjs/toolkit";
import reducer from "store";
import { sagaMiddleware, rootSaga } from "store/saga";
import { Provider } from "react-redux";
import "./App.css";

const store = configureStore({
  reducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<Products />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
