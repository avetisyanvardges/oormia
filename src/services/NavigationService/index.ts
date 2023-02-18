import { CommonActions, createNavigationContainerRef, StackActions } from "@react-navigation/native";

export const navigationRef = createNavigationContainerRef();

export function navigate(name: string, params?: object) {
  navigationRef?.dispatch(CommonActions.navigate(name, params));
}

export function back() {
  navigationRef?.goBack();
}

export function replace(name: string, params?: any) {
  navigationRef?.dispatch(StackActions.replace(name, params));
}
