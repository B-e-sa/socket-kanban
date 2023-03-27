import { useDispatch, useSelector } from 'react-redux';
import { TypedUseSelectorHook } from 'react-redux/es/types';
import { RootState, AppDispatch } from '../store/store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;