import { createStore } from 'vuex';

export default createStore({
  state () {
    return {
      gender: null,
      user1_list: [],
      user2_list: []
    };
  },
  mutations: {
    setGender (state, value) {
      state.gender = value;
    },
    setListUser (state, value) {
      if((state.user1_list).length==0) state.user1_list = value;
      else state.user2_list = value;
    }
  },
  actions: {
    setGender (context, value) {
      context.commit('setGender', value);
    },
    setList (context, llista) {
      context.commit('setListUser', llista);
    }
  },
  modules: {
  }
});
