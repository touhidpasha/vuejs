import { createWebHistory, createRouter } from 'vue-router'

import HelloWorld from '../src/components/HelloWorld.vue'
import Child from '../src/components/Child.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: "/helloWorld",
        component: HelloWorld,
        children: [{
            path: ":id",
            component: Child
        }]
    }]
})

export { router };