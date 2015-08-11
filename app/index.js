/**
 * Created by Hooken on 15/8/6.
 */
var generators = require('yeoman-generator');

module.exports = generators.Base.extend({

    writing: function () {
        this.log('start writing');
        var done = this.async();
        this.log(this.sourceRoot());
        var files = this.expandFiles('**/*', {cwd: this.sourceRoot(), dot: true});
        this.log(files);
        files.forEach(function (file) {
            this.copy(file, file);
        }, this);
        done();

    },
    end: function () {
        this.log('end');
        this.installDependencies();
    }
});