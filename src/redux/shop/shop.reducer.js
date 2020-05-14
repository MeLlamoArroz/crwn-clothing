import { createReducer } from '@reduxjs/toolkit';

import SHOP_DATA from './shop.data';

const INITIAL_STATE = {
  collections: SHOP_DATA
}

const shopReducer = createReducer(INITIAL_STATE, {

})

export default shopReducer