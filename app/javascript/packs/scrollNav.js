$(document).ready(function(){

  //waypoints
  //down
  $('.project').waypoint(function(direction) {
  if (direction === 'down') {
    $('.subnav a').removeClass('disable-click');
    // form the selector dynamically.
    // "this" keyword refers waypoint object and the element is located at "this.element"
    // using "this.element.id", get the nav anchor you want to target
    // example: "nav a[href='#landing']"
    var selector = ".subnav li a[href='#" + this.element.id + "']";
    $(selector).addClass('disable-click');
    console.log(selector);
  }
  }, {
  offset: '5%'
});
//up
  $('.project').waypoint(function(direction) {
    if (direction === 'up') {
      $('.subnav a').removeClass('disable-click');
      var selector = ".subnav li a[href='#" + this.element.id + "']";
      $(selector).addClass('disable-click');
    }
  }, {
    offset: '5%'
});

/////////////////// scrollto ////////////




});
