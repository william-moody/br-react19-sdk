import {createContext} from 'react';
import { Component } from '@bloomreach/spa-sdk';

/**
 * The React Context holding the current brXM Component.
 */
export const BrComponentContext = createContext<Component | undefined>(undefined);