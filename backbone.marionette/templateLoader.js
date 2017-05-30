/**
 * Created by xerardoo on 7/1/16.
 */

App.Utils.loadTemplates = function (Views) {
    var deferred = $.Deferred();
    var promises = [];

    $.each(Object.keys(Views), function (i, view) {
        var request = $.get(Views[view].prototype.htmlFile)
            .done(function (html) {
                Views[view].prototype.html = html;
            });
        promises.push(request);
    });

    $.when.apply($, promises)
        .done(function (res) {
            deferred.resolve(res);
        })
        .fail(function (err) {
            deferred.reject(err);
        });

    return deferred.promise();
};