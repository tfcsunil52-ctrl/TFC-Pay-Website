import { create } from 'zustand';

interface DownloadDialogStore {
    isOpen: boolean;
    open: () => void;
    close: () => void;
}

export const useDownloadDialog = create<DownloadDialogStore>((set) => ({
    isOpen: false,
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false }),
}));
