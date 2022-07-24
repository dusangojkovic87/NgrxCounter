import { InitialState } from "@ngrx/store/src/models";
import { CounterAction, CounterActionType } from "../actions/counter.actions";
import { CounterState } from "../StateIntefaces/counter.state";

 const InitialState:CounterState = {
    counter:0
}

//define reducer that except state and action as params
export function counterReducer(state = InitialState,action:CounterAction){
    switch (action.type) {
        case CounterActionType.INCREMENT:

            return {...state,counter:state.counter +1};
            
            break;
            case CounterActionType.DECREMENT:
                return {...state,counter:state.counter -1};
                break;
    
        default:
            return {...state};
            break;
    }



}