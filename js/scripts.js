var drawPaginationLinks = function (result) {
  var totalResults = result.totalResults,
  perPage = 10,
  numPages = Math.ceil(totalResults / perPage),
  $links = $('<ul></ul>');
  for ( var i = 1; i <= numPages; i++ ) {
    $links.append('<li><a href="#job-search">' + i + '</a></li>');
  }
  $links.children('li').eq(0).children('a').addClass('active');
  $resultLinks.append($links);
};

var doSearch = function (params, done, fail) {
  $.ajax({ [Initial Parameters] }, params),
    dataType: 'jsonp',
    type: 'GET',
    timeout: 5000,
    url: 'http://api.indeed.com/ads/apisearch'
  }).done(done).fail(fail);



$(function () {

$("button").click(function () {
  var param = $("#search").val()
  $("button").append(drawPaginationLinks())
}


});
