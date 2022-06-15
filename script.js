async function loadProjects(){
    var response = await fetch("assets/projects.json");

    if (response.ok) { 
      var projectsJSON = await response.json();
      var projects = projectsJSON.projects;
      globalThis.projects;
      for(var i=0; i < projects.length;i++){
          //appends our section divs with different id and data 
          var div=document.createElement("div");
          div.classList.add("section");
          div.id="tab"+i;
          div.onclick=sectionClick(i);
          div.style.backgroundColor="rgb("+projects[i].rgb+")";
          div.innerHTML='<p>'+projects[i].title+'</p>';
          document.getElementById("project-tab").appendChild(div)
      }
    } else {
      console.log("Error-HTTP: " + response.status);
    }
}

function sectionClick(projectNum){
  return;
}
window.addEventListener('load', function() {
   loadProjects();
});