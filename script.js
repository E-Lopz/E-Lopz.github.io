async function loadProjects(){
    var response = await fetch("assets/projects.json");

    if (response.ok) { 
      var projectsJSON = await response.json();
      var projects = projectsJSON.projects;
      for(var i=0; i < projects.length;i++){
          var div=document.createElement("div");
          div.classList.add("section");
          div.innerHTML='<p>'+projects[i].title+'</p>';
          document.getElementById("project-tab").appendChild(div)
      }
    } else {
      console.log("Error-HTTP: " + response.status);
    }
}

window.addEventListener('load', function() {
   loadProjects();
});