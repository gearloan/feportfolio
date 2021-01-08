$(document).ready(function(){

  $('.project').waypoint(function(direction) {
    if (direction === 'down') {
      $('.subnav a').removeClass('active');
      var selector = ".subnav li a[href='#" + this.element.id + "']";
      $(selector).addClass('active');
      console.log(selector);
    }
  }, {
    offset: '50%',
    triggerOnce: true,
  });

  $('.project').waypoint(function(direction) {
    if (direction === 'up') {
      $('.subnav a').removeClass('active');
      var selector = ".subnav li a[href='#" + this.element.id + "']";
      $(selector).addClass('active');
    }
  }, {
    offset: '-100%',
    triggerOnce: true,
  });

});
