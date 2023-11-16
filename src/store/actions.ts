export default {
  setIsLoading({commit}: any, value: any){
    commit('setIsLoading', {
      value,
      done: false
    })
  }
}