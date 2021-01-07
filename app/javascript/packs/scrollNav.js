$(document).ready(function(){

  //waypoints
  //down
  $('.project').waypoint(function(direction) {
  if (direction === 'down') {
    $('.subnav a').removeClass('active');
    // form the selector dynamically.
    // "this" keyword refers waypoint object and the element is located at "this.element"
    // using "this.element.id", get the nav anchor you want to target
    // example: "nav a[href='#landing']"
    var selector = ".subnav li a[href='#" + this.element.id + "']";
    $(selector).addClass('active');
    console.log(selector);
  }
  }, {
  offset: '50%',
  triggerOnce: true,
});
//up
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

/////////////////// scrollto ////////////




});
