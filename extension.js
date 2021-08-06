'use strict'

const vscode = require('vscode');

function activate(context) {
    return {
        extendMarkdownIt(md) {
            return md.use(
                require('markdown-it-task-lists'),
                vscode.workspace.getConfiguration('vscode-markdown-it-task-lists').options
            );
        }
    };
}
exports.activate = activate;
