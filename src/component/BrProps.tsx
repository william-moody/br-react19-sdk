import { Component, Page } from '@bloomreach/spa-sdk';

export interface BrProps<T extends Component = Component>{
    //the mapped component
    component?: T;
    //the current page
    page?: Page;
}