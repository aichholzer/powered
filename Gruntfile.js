/* eslint no-nested-ternary: 0 */
module.exports = (grunt) => {
  grunt.initConfig({
    eslint: {
      target: [
        './lib/**/*.js',
        './test/**/*.js'
      ],
      options: { quiet: true }
    }
  });

  grunt.loadNpmTasks('grunt-eslint');
};
