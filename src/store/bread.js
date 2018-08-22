export const BREAD = 'BREAD'

export default {
  state: {
    matchedRouter: []
  },
  getters: {
    bread: state => {
      let bread = []
      for (let i = 1; i < state.matchedRouter.length; i++) {
        let obj = {
          title: state.matchedRouter[i].meta.title,
          routerName: state.matchedRouter[i].name,
          disabled: i === 1 || i === (state.matchedRouter.length - 1)
        }
        bread.push(obj)
      }
      return bread
    }
  },
  mutations: {
    [BREAD](state, data) {
      state.matchedRouter = data.slice()
    }
  },
  actions: {
    [BREAD]({commit}, data) {
      commit(BREAD, data)
    }
  }
}
