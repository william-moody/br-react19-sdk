import { BrProps } from "component";
import { Component } from '@bloomreach/spa-sdk';

export interface ContentBlockProps<T extends Component> extends BrProps<T>{
    divClassName?: string,
    pClassName?: string
}