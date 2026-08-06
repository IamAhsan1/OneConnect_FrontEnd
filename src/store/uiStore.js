import { create } from 'zustand';

const useUIStore = create((set) => ({
  sidebarOpen: false,
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  setSidebarOpen: (isOpen) => set({ sidebarOpen: isOpen }),
  
  // Future architecture for global modal popups
  modal: null,
  openModal: (modalName, props = {}) => set({ modal: { name: modalName, props } }),
  closeModal: () => set({ modal: null }),
}));

export default useUIStore;
