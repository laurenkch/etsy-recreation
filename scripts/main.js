$(document).ready(function () {

        const button = document.querySelectorAll("button");
        const BASE_URL = 'https://openapi.etsy.com/v2/public/listings/active.js';
        let searchTerm1 = 'handmade ceramic mugs';
        let searchTerm2 = 'handmade ceramic mugs';
        let searchTerm3 = 'handmade ceramic mugs';
        let searchTerm4 = 'handmade ceramic mugs';
        let searchTerm5 = 'handmade ceramic mugs';
        let searchTerm6 = 'handmade ceramic mugs';
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
                        document.querySelector('.products').innerHTML = html;

                },


                error: function (xhr) {
                        console.log('Uh oh! Something went wrong.', xhr.status);
                }

        });



        // button.forEach(button => button.addEventListener("click", function () {
        //         searchTerm = this.value;
        //         console.log(this.value);
        //         console.log(searchTerm);
        //         console.log($.ajax());
        // }));

});
