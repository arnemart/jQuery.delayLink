jQuery.delayLink
================

Quick'n'dirty jQuery plugin for delaying loading of links until some action (typically analytics) has been performed.

If the action takes too long, the link will be opened anyway. The default is 100ms, adjust this with the `timeout` setting.

Call the callback with `false` to prevent the link from being opened.

Usage
-----

    $('a').delayLink(function(callback) {
        $.ajax({
            //stuff
        }).done(function() {
            callback();
        });
    }, {
        timeout: 200
    });
