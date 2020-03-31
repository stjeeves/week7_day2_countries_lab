import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: "#app",
        data: {
            countries: []
        },
        mounted(){
            this.fetchCountries();
        },
        computed: {
            totalPopulation: function(){
                return this.countries.reduce((total, country) => total + country.population, 0);
            },

            findCountry: function () {
                return this.countries.find(index)
    
            }
        },
        methods: {
            fetchCountries: function(){
                fetch('https://restcountries.eu/rest/v2/all')
                .then( response => response.json())
                .then( data => this.countries = data)
                .catch( err => console.error(err))
            }

            
        }
    })
})