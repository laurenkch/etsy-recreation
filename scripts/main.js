let keyword = 'ceramics';



// const generateHTML = (data) => {
//     console.log(data)
//     const source = document.getElementById('product-image-template').innerHTML;
//     const template = Handlebars.compile(source);
//     // const context = data;
//     const html = template(data);
//     document.querySelector('.container').innerHTML = html;
// }

const BASE_URL = 'https://openapi.etsy.com/v2/public/listings/active.js';
let searchTerm = 'ceramics';
let limit = '12';

$.ajax({
        url: `${BASE_URL}?api_key=${API_KEY}&limit=${limit}&includes=Images:1&keywords=${searchTerm}`,
        dataType: 'jsonp',
        method: 'GET',

        success: function (data) {
                // this is where you run const source, const template, etc.
                // const source;
                // const template;
                // const context;
                // const html = template(context);
                console.log(data);

        },


        error: function (xhr) {
                console.log('Uh oh! Something went wrong.', xhr.status);
        }

});
