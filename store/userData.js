export const state = () => ({
    userId: null,
    isAdmin: null
})

export const mutations = {
    setUserId(state, payload){
        state.userId = payload;
        state.isAdmin = payload.isAdmin;
    }
    

}