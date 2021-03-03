import { Action } from 'redux'

export enum HeaderActions{
    HEADER_COLLAPSE = "HEADER_COLLAPSE"
}

export interface IFilterCollapseAction extends Action {
    payload: boolean;
}