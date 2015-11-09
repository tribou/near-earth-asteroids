// Utilities for getting data from the API
import { receiveGetRecentAsteroids } from '../actions/AsteroidServerActions.js';
import request from 'superagent';

export function getRecentAsteroids() {
  request.get(`https://api.nasa.gov/neo/rest/v1/feed?api_key=DEMO_KEY`)
    .set('Accept', 'application/json')
    .end((err, response) => {
      if (err) {
        console.error(err);
        return receiveGetRecentAsteroids(false);
      }
      // Pass response payload to server action to repopulate store
      receiveGetRecentAsteroids(response.body);
    });
}

