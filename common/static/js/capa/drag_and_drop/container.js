// Wrapper for RequireJS. It will make the standard requirejs(), require(), and
// define() functions from Require JS available inside the anonymous function.
//
// See https://edx-wiki.atlassian.net/wiki/display/LMS/Integration+of+Require+JS+into+the+system
(function (requirejs, require, define) {

define(['logme'], function (logme) {
    return Container;

    function Container(state) {
        state.containerEl = $(
            '<div ' +
                'style=" ' +
                    'border: 1px solid black; ' +
                    'overflow: hidden; ' +
                    'clear: both; ' +
                '" ' +
            '></div>'
        );

        $('#inputtype_' + state.problemId).before(state.containerEl);
    }
});

// End of wrapper for RequireJS. As you can see, we are passing
// namespaced Require JS variables to an anonymous function. Within
// it, you can use the standard requirejs(), require(), and define()
// functions as if they were in the global namespace.
}(RequireJS.requirejs, RequireJS.require, RequireJS.define)); // End-of: (function (requirejs, require, define)
