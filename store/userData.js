export const state = () => ({
    userId: null
})

export const mutations = {
    setUserId(state, payload){
        state.userId = payload;
    }

}