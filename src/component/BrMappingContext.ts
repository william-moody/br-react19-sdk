import {createContext, ComponentType} from 'react';
import { Component, Container, ContainerItem } from '@bloomreach/spa-sdk';
import { BrProps } from './BrProps';

type BrComponent = ComponentType<BrProps<Component>> | ComponentType<BrProps<Container>> | ComponentType<BrProps<ContainerItem>>
type BrMapping = Record<keyof any, BrComponent>;

export const BrMappingContext = createContext<BrMapping>({});