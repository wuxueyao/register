module.exports = function (grunt) {
  grunt.initConfig({
    htmlmin: {
      options: {
        collapseWhitespace: true,
        preserveLineBreaks: false
      },
      files: {
        src: './index.html',
        dest: 'dist/index.html'
      }
    },
    cssmin: {
      'dist/register.css': 'register.css'
    },
    uglify: {
      'dist/register.js': 'register.js'
    },
    imagemin:{
      files:{
          expand:true,
          src:['images/*.{png,jpg}'],
          dest:'dist/'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  grunt.registerTask('default', ['htmlmin', 'cssmin', 'uglify','imagemin']);
};
 

