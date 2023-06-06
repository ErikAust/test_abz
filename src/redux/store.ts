import {
    legacy_createStore as createStore,
    applyMiddleware,
    AnyAction,
  } from "redux";
  import { composeWithDevTools } from "redux-devtools-extension";
  import thunk, { ThunkAction, ThunkDispatch } from "redux-thunk";
  import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
  import { rootReducer } from "./reducers";
  
  export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );
  
  export type ReduxState = ReturnType<typeof rootReducer>;
  export type TypedDispatch = ThunkDispatch<ReduxState, any, AnyAction>;
  export type TypedThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    ReduxState,
    unknown,
    AnyAction
  >;
  export type AppDispatch = typeof store.dispatch;
  
  export const useAppDispatch: () => AppDispatch = useDispatch;
  export const useTypedDispatch = () => useDispatch<TypedDispatch>();
  export const useTypedSelector: TypedUseSelectorHook<ReduxState> = useSelector;