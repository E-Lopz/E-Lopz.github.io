var projects;

async function loadProjects(){
    var response = await fetch("assets/projects.json");

    if (response.ok) { 
      var projectsJSON = await response.json();
      projects = projectsJSON.projects;
      // loads first project data
      document.getElementById("project-info").innerHTML=`<h3 class="title">`+projects[0].title+`</h3> \n <div class="content"> \n
     <img src="`+projects[0].img+`" alt="project `+0+`" height=500vh width=450vh> \n <p class="description">`+projects[0].description+`</p> \n </div>`
      for(var i=0; i < projects.length;i++){
          // appends our section divs with different id and data 
          var div=document.createElement("div");
          div.classList.add("section");
          div.id="tab"+i;
          div.setAttribute("onclick","sectionClick("+i+")");
          div.style.backgroundColor="rgb("+projects[i].rgb+")";
          div.innerHTML='<h2>'+projects[i].title+'</h2>';
          document.getElementById("project-tab").appendChild(div)
      }
    } else {
      console.log("Error-HTTP: " + response.status);
    }
}

function sectionClick(projectNum){
  console.log("hola")
  document.getElementById("project-info").style.backgroundColor = "rgb("+projects[projectNum].rgb+")";
  document.getElementById("project-info").innerHTML=`<h3 class="title">`+projects[projectNum].title+`</h3> \n <div class="content"> \n
  <img src="`+projects[projectNum].img+`" alt="project `+projectNum+`" height=500vh width=450vh> \n <p class="description">`+projects[projectNum].description+`</p> \n </div>`
}
window.addEventListener('load', function() {
   loadProjects();
});