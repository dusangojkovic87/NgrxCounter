import { ActionReducerMap, combineReducers } from "@ngrx/store";
import { counterReducer } from "../reducer/counter.reducer";


export interface IAppState{
    counter:any;
}


export const reducers:ActionReducerMap<IAppState> = {
    counter:counterReducer


}