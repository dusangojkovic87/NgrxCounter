import {Action} from "@ngrx/store";


/*define group action types in enum for specific task */
export enum CounterActionType{
    INCREMENT = "[Counter] Increment Counter",
    DECREMENT = "[Counter] Decrement Counter" 
}

/*define action for specific task that implement Action*/ 
export class IncrementCounterAction implements Action{
    readonly type: string = CounterActionType.INCREMENT;
    //actions can have optional payload,but here is unessesary
   // constructor(public paylod:any){

   // }
}

export class DecrementAction implements Action{
    readonly type: string = CounterActionType.DECREMENT;
    //actions can have optional payload,but here is unessesary
   // constructor(public paylod:any){

   // }
}


//finally export action as type
export type CounterAction = IncrementCounterAction | DecrementAction;

