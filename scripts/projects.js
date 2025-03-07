var project = [
    { title: 'Airport and Airplane Database', image: "airport_database", source: 'airport',
      text: '...'}
]

function getProject(project){
    return `
        <div class="col">
            <img type="image" id="${project.source}_img" class="exp_img" src="media/projects/${project.image}.PNG" alt="some" data-bs-toggle="modal" data-bs-target="#airport">
            <p></p>
            <p></p>
            <h2>${project.title}</h2>
            <p></p>
        </div>
    `;
}

function getModal(project){
    return `
    <!-- <div class="modal fade" id="airport" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <img class="modal_img" src="media/projects/${project.image}.PNG">
            <p></p>
            <p>For my Introduction to Databases class, I worked on a project with a partner to create a database in Microsoft SQL Server and develop an application to interact with the database. My partner and I decided to make a rating system for airports and airlines using a Java application.</p>
            <p>To populate the database with info, I exported data from Wikipedia into an Excel document. Using Apache POI and SQL stored procedures, I wrote a script to import data from Excel documents into the database. </p>
            <p>With my partner, I worked on writing queries to create tables to store information within the database. I also wrote stored procedures to allow us to add, delete, and modify information in the database. I also wrote views that ensured a user could only access their information.</p>
            <p>The Java application that we created contains login, search, review, and reply features. First, a user has the option to log in to an existing account or create a new account. Rather than storing passwords in plain text, a password is salted using a hash, and the salted password with the hash is stored in the database. Next, a user can access either the airport or airline table and is able to make more specific queries. These queries are done using prepared statements to prevent SQL injection attacks. After selecting something to rate, a user is presented with all existing reviews with the option to add a new review or reply to a review. </p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
    `;
}

function buildContainer(list, selector){
    var html = "";
    console.log("building");
    for (var i = 0; i < project.length; i+=1){
        html += getProject(list[i]);
    }
    $(selector).append(html);
}

function buildModal(list, selector){
    bootstrap.getModal
    var html = "";
    for (var i = 0; i < project.length; i+=1){
        html += getModal(list[i]);
    }
    $(selector).append(html);
}


buildContainer(project, "#project_buttons");
buildModal(project, "#main_something");
