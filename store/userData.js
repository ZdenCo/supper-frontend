export const state = () => ({
    userId: 1
})

export const mutations = {
    setUserId(state, payload){
        state.userId = payload;
    }

}