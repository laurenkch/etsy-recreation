$(document).ready(function () {

        const BASE_URL = 'https://openapi.etsy.com/v2/public/listings/active.js';
        let searchTerm = 'handmade ceramic mugs';
        let limit = '12';

        $.ajax({
                url: `${BASE_URL}?api_key=${API_KEY}&limit=${limit}&includes=Images:1&keywords=${searchTerm}`,
                dataType: 'jsonp',
                method: 'GET',

                success: function (data) {
                        console.log(data);
                        const source = document.getElementById('product-image-template').innerHTML;
                        const template = Handlebars.compile(source);
                        const context = data;
                        const html = template(context);
                        console.log(html);
                        document.querySelector('.products').innerHTML = html;

                },


                error: function (xhr) {
                        console.log('Uh oh! Something went wrong.', xhr.status);
                }

        });

});
