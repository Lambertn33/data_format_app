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
          response => {
            commit('setCsvFileContents', response.data);
            return Promise.resolve(response);
          },
          error => {
            return Promise.reject(error);
          }
        );
      } else {
        return filesServices.readPrnFile().then(
          response => {
            commit('setPrnFileContents', response.data);
            return Promise.resolve(response);
          },
          error => {
            return Promise.reject(error);
          }
        );
      }
    }
  },

  mutations: {
    setCsvFileContents(state, contents) {
      state.csvFileContents = contents;
    },

    setPrnFileContents(state, contents) {
      state.prnFileContents = contents;
    }
  },

  getters: {
    getCsvFileContents(state) {
      return state.csvFileContents;
    },
    getPrnFileContents(state) {
      return state.prnFileContents;
    }
  }
});

export default store;