import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  isDesktop: true,
  isTablet: false,
  isMobile: false,
  isPanel: true,
  isLayer: false,
  isPreview: false,
  boxWidth: window.innerWidth,
};

const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    setDesktop: (state) => ({ ...state, isDesktop: true, isTablet: false, isMobile: false }),
    setTablet: (state) => ({ ...state, isDesktop: false, isTablet: true, isMobile: false }),
    setMobile: (state) => ({ ...state, isDesktop: false, isTablet: false, isMobile: true }),
    setPanel: (state) => ({ ...state, isPanel: true, isLayer: false }),
    setLayer: (state) => ({ ...state, isPanel: false, isLayer: true }),
    setWidth: (state, action) => ({ ...state, boxWidth: action.payload }),
    openPreview: (state) => ({ ...state, isPreview: true }),
    closePreview: (state) => ({ ...state, isPreview: false }),
  },
});

export const store = configureStore({
  reducer: editorSlice.reducer,
});

export const {
  setDesktop,
  setTablet,
  setMobile,
  setLayer,
  setPanel,
  setWidth,
  openPreview,
  closePreview,
} = editorSlice.actions;
