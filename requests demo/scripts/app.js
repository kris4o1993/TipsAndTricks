//!!!!!!!!!!!!!!!!!!!
//TOVA SA KOMBINIRANI ZADACHI 1 i 3
//!!!!!!!!!!!!!!!!!!!

(function () {
    'use strict';

    require.config({
        paths: {
            jquery: 'libs/jquery-1.11.1.min',
            httpRequester: 'modules/httpRequester'
        }
    });

    require(['httpRequester', 'jquery'], function (httpRequester, $) {
        var url = 'http://localhost:3000/students';

        var studentGosho = {
            name: 'Gosho',
            grade: 5
        };

        var studentPesho = {
            name: 'Pesho',
            grade: 4
        };

        var studentStamat = {
            name: 'Stamat',
            grade: 11
        };

        //first add some students. then comment the next 3 lines
        httpRequester.postJSON(url, studentGosho);
        httpRequester.postJSON(url, studentPesho);
        httpRequester.postJSON(url, studentStamat);


        //after you add students, uncomment the next line to delete the middle one
        //httpRequester.deleteById(url, 1);


        //ne mislq 4e ima nujda da se vizualizirat mnogo fancy, vajno e da e reshena zadachata
        httpRequester.getJSON(url)
            .then(function(data) {
                $('#http-response').html(JSON.stringify(data));
                console.log(data);
            }, function(error) {
                $('#http-response').html('error');
            })


    });
}());