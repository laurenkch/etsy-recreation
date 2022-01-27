$(document).ready(function () {

        const buttons = document.querySelectorAll(".image-buttons");
        const BASE_URL = 'https://openapi.etsy.com/v2/public/listings/active.js';
        let limit = '12';
        let pictures = ['handmade ceramic mugs', 'tea spoon rests', 'handmade sweaters', 'sewing patterns', 'candles'];

        function fetchPicture(searchTerm) {

                $.ajax({
                        url: `${BASE_URL}?api_key=${API_KEY}&limit=1&includes=Images:1&keywords=${searchTerm}`,
                        dataType: 'jsonp',
                        method: 'GET',


                        success: function (data) {
                                const source = document.getElementById('search-buttons-template').innerHTML;
                                const template = Handlebars.compile(source);
                                const context = data;
                                const html = template(context);
                                document.querySelector('.image-buttons').innerHTML += html;
                                
                        },

                        error: function (xhr) {
                                console.log('Uh oh! Something went wrong.', xhr.status);
                        }

                });
        }

        pictures.forEach(fetchPicture);

        function fetchData(searchTerm) {
                $.ajax({
                        url: `${BASE_URL}?api_key=${API_KEY}&limit=${limit}&includes=Images:1&keywords=${searchTerm}`,
                        dataType: 'jsonp',
                        method: 'GET',

                        success: function (data) {
                                const source = document.getElementById('product-image-template').innerHTML;
                                const template = Handlebars.compile(source);
                                const context = data;
                                const html = template(context);
                                document.querySelector('.products').innerHTML = html;

                        },

                              error: function (xhr) {
                                console.log('Uh oh! Something went wrong.', xhr.status);
                        }

                });
        }

        buttons.forEach(button => button.addEventListener("click", function (event) {
                searchTerm = event.target.value;
                fetchData(searchTerm);
        }));


        fetchData('pots');
});
