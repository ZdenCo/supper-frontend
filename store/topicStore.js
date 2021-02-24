export const state = () => ({
    selectedTopic: null
})

export const mutations = {
    setTopic(state, payload){
        state.selectedTopic = payload;
    }

}