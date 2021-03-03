import { Action, createStore } from 'redux';
import Provider from 'react-redux';
import IGlobalState, { initialState } from './globalState';
import {HeaderActions, IFilterCollapseAction} from '../actions/HeaderActions'


const reducer = (state: IGlobalState = initialState, action: Action) => { 
    switch (action.type){
      case HeaderActions.HEADER_COLLAPSE : 
        const collapsedAction = action as IFilterCollapseAction; 
        return {...state, collapsed: collapsedAction.payload}
    }
    return state; 
  }
  // Lugar donde se va a almacenar el estado, donde a medida que evoluciona la app los cambios se van a ver reflejados. Esos cambios se gestionan a través del reducer

export const store = createStore(reducer, initialState) 