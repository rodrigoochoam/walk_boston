/* import {
  boston 
} from "./boston.js" */

function renderBoston(boston, container) {
  var person = boston.data
  var len = boston.data.length
  var html = '';
  for (let i = 0; i < len; i++) {
    html += '<li class="post">' +
      '<h2>' + person[i][8] + '</h2>' +
      '<h3>' + person[i][11] + '</h3>'
  }
  container.innerHTML = '<ul id = "boston">' + '<h1>This are all the employees.</h1>' + html + '</ul>';
}

function renderTopSalaries(boston, container) {
  var person = boston.data
  var topSalaries = person.sort(function (a, b) {
    return b[11] - a[11]
  }).slice(0, 5)
  var len = topSalaries.length
  var html = ' '
  for (let i = 0; i < len; i++) {
    html = html +
    '<li class="top">' +
    '<h2>' +
    topSalaries[i][8] +
    '</h2>' +
    '<h3>' +
    topSalaries[i][11] +
    '</h3>';
}

  container.innerHTML = '<ul id = "topSalaries">' + '<h1>This are the top 5 salaries.</h1>' + html + '</ul>'
}

function renderTopEmployees(boston, container) {
  var person = boston.data
  var topEmployees = person.filter(function (a) {
    return a[11] > 200000
  })
  const len = topEmployees.length
  var html = ' '
  for (let i = 0; i < len; i++) {
    html = html + 
    '<li class="top">' +
    '<h2>' +
    topEmployees[i][8] +
    '</h2>' +
    '<h3>' +
    topEmployees[i][11] +
    '</h3>'
  }

  container.innerHTML = '<ul id = "topEmployees">' + '<h1>This are the people with a salary of more than 200,000.</h1>' + html + '</ul>'

}

export {
  renderBoston,
  renderTopSalaries,
  renderTopEmployees
}


