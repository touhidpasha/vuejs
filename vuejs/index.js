const app = Vue.createApp({
    template:
        `
        //  <h2>hello ,{{title}}</h2>
        //  <p>{{count}}</p>
        // <button v-on:click="increment(5)"></button>
        // <div v-if="isEven()">even</div>
        // <div v-else>odd</div>
        <div v-for="n in evenList" v-bind:class="blue">
        <h3 >
        {{n}}
        </h3>
        </div>
         `,

    data() {

        return {
            title: "welcome to vue",
            count: 0,
            numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        }
    },
    methods: {
        increment(val) {
            this.count += val;
        },
        isEven() {
            return (this.count % 2 === 0)
        }
    },
    computed: {
        evenList() {
            return this.numbers.filter(num => num % 2 === 0)
        }
    }
})

app.mount("#app")
