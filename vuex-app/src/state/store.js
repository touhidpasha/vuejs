import {createStore} from 'vuex'

export const store = createStore({
    state:{
        name:"touhid"
    },
    mutations:{
        async changeName(state) {
            console.log(state);
             state.name=state.name=="pasha"?"touhid":"pasha"
        }
    },
    actions:{
        async fetchName(context,payload) { //context==state 
            console.log("getters ")
            console.log(context.getters);
            console.log(payload);
            await setTimeout(() =>console.log("api called"),2000);
        }
    }
})