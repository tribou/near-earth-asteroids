import AppDispatcher from '../utils/AppDispatcher.js';
import { Actions } from '../utils/AppConstants.js';

export function receiveGetRecentAsteroids(teams) {
  AppDispatcher.handleServerAction({
    type: Actions.RECEIVE_GET_ASTEROIDS,
    teams: teams,
  });
}

