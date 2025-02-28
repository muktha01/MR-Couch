/* eslint-disable import/prefer-default-export */
/* eslint-disable import/order */
/* eslint-disable no-param-reassign */
/* eslint-disable prettier/prettier */
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
// import localForage from 'localforage';
import { AuthSlice } from "../src/pages-sections/sessions/_redux/authSlice";
// import { ProductDetailsPageSlice } from "./ProductDetails/redux/productDetailsSlice";
// import { wishListPageSlice } from "./wishlist/redux/wishlistSlice";
// import { cartListPageSlice } from "./cart/redux/cartSlice";
// import { ProfileSlice } from "./Address/redux/ProfileSlice";
// import { LandingPageSlice } from "./LandingPage/redux/landingPageSlice";
import { OrdersPageSlice } from "./orders/redux/ordersSlice";
import { TexturePageSlice } from "./3Dview/redux/textureSlice";
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
const reducer = combineReducers({
  Auth: AuthSlice.reducer,
  // LandingPageData: LandingPageSlice.reducer,
  // ProfileData: ProfileSlice.reducer,
  orderData: OrdersPageSlice.reducer,
  // ProductDetailsPage: ProductDetailsPageSlice.reducer,
  // wishListPage: wishListPageSlice.reducer,
  // cartListPage: cartListPageSlice.reducer,
  texturePage: TexturePageSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
