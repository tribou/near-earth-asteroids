import AppDispatcher from '../utils/AppDispatcher.js';
import { Actions } from '../utils/AppConstants.js';
import * as NeoWsAPI from '../utils/NeoWsAPI.js';

export function getRecentAsteroids() {
  AppDispatcher.handleViewAction({
    type: Actions.GET_ASTEROIDS,
  });

  NeoWsAPI.getRecentAsteroids();
}

