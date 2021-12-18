import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, DispatchType } from "../store/type";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<DispatchType>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
