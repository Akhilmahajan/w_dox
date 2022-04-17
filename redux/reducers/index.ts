import { combineReducers } from 'redux'

import demoReducer from '../slice/demoSlice'
import localeReducer from '../slice/localeSlice'

export default combineReducers({
  demo: demoReducer,
  locale: localeReducer,
})
