import { createSlice } from '@reduxjs/toolkit'

export enum Locale {
  ENG = "ENG",
  FRA = "FRA",
  ESP = "ESP",
  GER = "GER",
  US = "US",
}
interface ILocaleState {
  current: Locale | null;
}

const initialState: ILocaleState = {
  current: Locale.ENG
}

const localeSlices = createSlice({
  name: 'locale',
  initialState,
  reducers: {
    setLocale: (state, action) => {
      state.current = action.payload
    },
  }
})

export const { setLocale } = localeSlices.actions
export default localeSlices.reducer
