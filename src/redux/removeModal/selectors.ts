import { RootState } from "../store";

export const selectEnabled = (state: RootState) => state.removeModal.enabled;
