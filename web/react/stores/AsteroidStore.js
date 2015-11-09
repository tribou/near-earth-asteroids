import AppDispatcher from '../utils/AppDispatcher.js';
import { Actions, ViewFilters } from '../utils/AppConstants.js';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

// Could be replaced with ImmutableJS or Immutability helpers:
// https://facebook.github.io/react/docs/update.html
let _store = {
  currentUser: 'username',
  asteroids: [],
  loading: false,
};

class AsteroidStoreClass extends EventEmitter {

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  getCurrentUser() {
    return _store.currentUser;
  }

  getAsteroids() {
    return _store.asteroids;
  }

  isLoading() {
    return _store.loading;
  }
}

const AsteroidStore = new AsteroidStoreClass();

AppDispatcher.register((payload) => {
  switch (payload.action.type) {

  case Actions.GET_ASTEROIDS:
    // set the status to loading
    _store.loading = true;
    AsteroidStore.emit(CHANGE_EVENT);
    break;

  case Actions.RECEIVE_GET_ASTEROIDS:
    // build a result array from the API results
    // populate asteroids with array
    _store.asteroids = payload.action.teams;
    _store.loading = false;
    // tell all store subscribers the data has changed
    AsteroidStore.emit(CHANGE_EVENT);
    break;

  default:
  }
});

export default AsteroidStore;

