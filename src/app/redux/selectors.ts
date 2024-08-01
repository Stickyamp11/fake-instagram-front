import { createSelector } from "@ngrx/store";
import { AppStateInterface } from "./all.interface";

export const selectFeature = (state: AppStateInterface) => state.userAuth;

export const isLoadingSelector = createSelector(selectFeature, (state) => state?.isLoading);
export const isAuthSelector = createSelector(selectFeature, (state) => state?.isAuth );