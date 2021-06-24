var apps = new Vue({
    el: '#apps',
    data: {
        shows_1: false,
        shows_2: false,
        shows_3: false,
        shows_4: false,
        shows_5: false,

        num: 1
    },
    methods: {
        handleClick: function (event) {
            alert(event.target) // [object HTMLButtonElement]     
        }
    }
})