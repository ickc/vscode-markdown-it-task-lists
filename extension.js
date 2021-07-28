'use strict'

function activate(context) {
    return {
        extendMarkdownIt(md) {
            return md.use(require('markdown-it-task-lists'), {enabled: true});
        }
    };
}
exports.activate = activate;
