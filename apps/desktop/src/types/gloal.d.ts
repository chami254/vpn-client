export {};

declare global {
  interface Window {
    vpn: {
      connect: () => Promise<any>;
      disconnect: () => Promise<any>;
    };
  }
}