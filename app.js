new Vue({
    el: '#vue-app',
    data: {
        name: 'danielle',
        job: 'pizza maker and cat catcher',
        website: 'http://www.codeiful.co.uk'
    },
    methods: {
        greet: function(time) {
            return 'Good ' + time + ', ' + this.name;
        }
    }
});