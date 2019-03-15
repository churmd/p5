var allProjectsDivId = "projectList";
var singleProjectDivId = "project";

function requestData(url, callback) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      var resp = xmlhttp.responseText;
      callback(resp);
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
};

function requestJsonData(url, callback) {
  var jsonCallback = function(data) {
    var jsonData = JSON.parse(data);
    callback(jsonData);
  };
  requestData(url, jsonCallback);
}

function makeSingleProjectDiv(json) {
  var name = document.createElement("a");
  name.setAttribute("href", json.link);
  name.innerHTML = json.name;

  var title = document.createElement("h2");
  title.appendChild(name);

  var desc = document.createElement("p");
  desc.innerHTML = json.desc;

  var projectDiv = document.createElement("div");
  projectDiv.setAttribute("id", singleProjectDivId);
  projectDiv.appendChild(title);
  projectDiv.appendChild(desc);

  return projectDiv;
}

function addProjectsFromJson(jsonList) {
  var allProjectsDiv = document.getElementById(allProjectsDivId);

  for(var i = 0; i <jsonList.length; i++) {
      var singleProjectDiv = makeSingleProjectDiv(jsonList[i]);
      allProjectsDiv.appendChild(singleProjectDiv);
  }
}

function loadProjectList() {
  requestJsonData("projectList.json", addProjectsFromJson)
}
