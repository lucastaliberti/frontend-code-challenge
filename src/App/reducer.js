import { DATA_RETRIEVED } from './types'

export const INITIAL_STATE = { ads: [] }

const ads = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DATA_RETRIEVED:
      return {
        ads: action.payload
      }
    default:
      return state
  }
}

export default ads
