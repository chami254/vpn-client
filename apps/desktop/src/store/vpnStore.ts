import { create } from "zustand";

type VPNState = {
  connected: boolean;
  setConnected: (value: boolean) => void;
};

export const useVPNStore = create<VPNState>((set) => ({
  connected: false,
  setConnected: (value) => set({ connected: value }),
}));
