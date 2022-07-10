import { applyMiddleware, createStore, compose } from "redux";

// Saga
import createSagaMiddleware from "redux-saga";

// Persist
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { rootReducer } from "./rootReducer";
import rootSaga from "./userSaga";

const persistConfig = {
  key: "root",
  storage
};

const sagaMiddleware = createSagaMiddleware();

const middleWares = [sagaMiddleware];

const persisterReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window?.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composeEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(persisterReducer, undefined, composeEnhancers);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
