import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import todoSlice from "../features/todoSlice";

const store = configureStore({
  reducer: {
    todos: todoSlice,
  },
});

export default store;
// reducer içine girdiğimiz sliceların typeları otomatik olarak alınıyor ve tek bir rootState type i olarak dönüyor.
export type RootState = ReturnType<typeof store.getState>;
// store daki dispatch in typei ni belirler
export type appDispatch = typeof store.dispatch;

//  method halinde export edilecekler
// herzamank kullandığımız usedispatch methoduna doğrudan tip ataması yapmak için kullanacagız.
export const useAppDispatch = () => useDispatch<appDispatch>();
// useseloctor kullanırken react-reduxtan gelen hook methoduumza doğrudan tip ataması yapıyoruz.

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
