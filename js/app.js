// The application specific JS goes in here

// Global namespace
var leaderboard = {};

// Closure to encapsule the executables
(function () {

  leaderboard.mostActiveOf = function (data) {
    var counts = [], components = [];
    if (Object.keys(data).length !== 0) {
      for (var i in data) {
        components.push(i);
        counts.push(data[i]);
      }
      return components[counts.indexOf(Math.max.apply(window, counts))];
    } else return "";
  }

  leaderboard.bugLinksOf = function (nick) {
    if (nick) {
      return 'target="_blank" href="https://github.com/' + nick + '"';
    } else return "";
  }

  leaderboard.sortResults = function () {
    var table = document.querySelector("#list tbody")
    ,   items = table.childNodes
    ,   itemsArr = [];

    for (var i in items) {
      if (items[i].nodeType == 1) itemsArr.push(items[i]);
    }

    itemsArr.sort(function(a, b) {
      a = a.childNodes[3].childNodes[0].innerHTML;
      b = b.childNodes[3].childNodes[0].innerHTML;
      return (b-a);
    });

    for (var i in itemsArr) {
      table.appendChild(itemsArr[i]);
    }
  }

  
