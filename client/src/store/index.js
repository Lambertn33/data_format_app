import { createStore } from 'vuex';

import createPersistedState from "vuex-persistedstate";

import filesConstants from '@/constants/files.constants';
import filesServices from '@/services/files.services';

const store = createStore({
  plugins: [createPersistedState()],

  state: { 
    csvFileContents: [],
    prnFileContents: [],
  },

  actions: {
    // eslint-disable-next-line no-unused-vars
    fetchFileContents({ commit }, fileType) {
      if (fileType === filesConstants.csv) {
        return filesServices.readCsvFile().then(
          data => {
            return Promise.resolve(data);
          },
          error => {
            return Promise.reject(error);
          }
        );
      } else {
        return filesServices.readPrnFile().then(
          data => {
            return Promise.resolve(data);
          },
          error => {
            return Promise.reject(error);
          }
        );
      }
    }
  }
});

export default store;