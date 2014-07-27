define(['jquery'], function ($) {
    'use strict';
    var httpRequester = (function () {
        function getJSON(url) {
            var deferred = $.Deferred();

            $.ajax({
                url: url,
                contentType: 'application/json',
                type: 'GET',
                timeout: 5000,
                success: function(data) {
                    deferred.resolve(data);
                },
                error: function(data) {
                    deferred.reject(data);
                }
            });

            return deferred.promise();
        }

        function postJSON(url, item) {
            var deferred = $.Deferred();

            $.ajax({
                url: url,
                type: 'POST',
                timeout: 5000,
                data: JSON.stringify(item),
                contentType: 'application/json',
                success: function(data) {
                    deferred.resolve(data);
                },
                error: function(data) {
                    deferred.reject(data);
                }
            });

            return deferred.promise();
        }

        function deleteById(url, id) {
            var deferred = $.Deferred();

            $.ajax({
                url: url+ '/'+ id,
                type: 'POST',
                timeout: 5000,
                data: {_method: 'delete'},
                success: function(data) {
                    deferred.resolve(data);
                },
                error: function(data) {
                    deferred.reject(data);
                }
            });

            return deferred.promise();
        }

        return {
            getJSON: getJSON,
            postJSON: postJSON,
            deleteById: deleteById
        }
    }());
    return httpRequester;
});