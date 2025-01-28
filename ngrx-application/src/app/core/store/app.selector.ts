import { IAppState } from "../models/appState";
import { createFeatureSelector } from "@ngrx/store";

export const selectRootState = createFeatureSelector<IAppState>('root');
