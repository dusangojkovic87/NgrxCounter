import { Component } from '@angular/core';
import {  Store } from '@ngrx/store';
import { DecrementAction, IncrementCounterAction } from './store/actions/counter.actions';
import { CounterState } from './store/StateIntefaces/counter.state';
import { IAppState } from './store/StateIntefaces/RootState';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngrxplayground';
  counterDOM:number = 0;

  constructor(private state:Store<IAppState>){

  }

  ngOnInit(){
    this.state.select(state => state.counter).subscribe((data:CounterState) =>{
        if(data){
          this.counterDOM = data.counter;
          
        }
    
    })
   
  }

  increment(){
    this.state.dispatch(new IncrementCounterAction);
   

  }

  decrement(){
    this.state.dispatch(new DecrementAction);
  }




}
