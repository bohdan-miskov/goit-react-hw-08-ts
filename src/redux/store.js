import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contacts/slice";
import filtersReducer from "./filters/slice";
import authReducer from "./auth/slice";
import removeModalReducer from "./removeModal/slice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const persistAuthReducer = persistReducer(authPersistConfig, authReducer);

const removeModalPersistConfig = {
  key: "removeModal",
  storage,
};

const persistRemoveModalReducer = persistReducer(
  removeModalPersistConfig,
  removeModalReducer
);

export const store = configureStore({
  reducer: {
    auth: persistAuthReducer,
    contacts: contactsReducer,
    filters: filtersReducer,
    removeModal: persistRemoveModalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
