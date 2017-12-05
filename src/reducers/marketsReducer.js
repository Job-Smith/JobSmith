/**
 * ************************************
 *
 * @module  marketsReducer
 * @author
 * @date
 * @description reducer for market data
 *
 * ************************************
 */

import * as types from '../constants/actionTypes';

const initialState = {
  totalMarkets: 0,
  marketList: [],
  lastMarketId: 10000,
  newLocation: '',
};

const marketsReducer = (state=initialState, action) => {
  let marketList;

  switch(action.type) {
    case types.ADD_MARKET:
      // increment lastMarketId and totalMarkets counters
      let lastMarketId = state.lastMarketId + 1;
      let totalMarkets = state.totalMarkets + 1;
      // create the new market object from provided data
      const newMarket = {
        marketId: lastMarketId,
        location: action.payload,
        cards: 1 
      };
      
      // push the new market onto a copy of the market list
      marketList = state.marketList.slice();
      marketList.push(newMarket);

      return {
        ...state,
        marketList,
        lastMarketId,
        totalMarkets,
        newLocation: '',
      };

    case types.SET_NEW_LOCATION:


    case types.ADD_CARD:


    case types.DELETE_CARD:


    default:
      return state;
  }
};

export default marketsReducer;