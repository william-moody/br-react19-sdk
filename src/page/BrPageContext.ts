import { Page } from '@bloomreach/spa-sdk';
import {createContext} from 'react';

export const BrPageContext = createContext<Page | undefined>(undefined);