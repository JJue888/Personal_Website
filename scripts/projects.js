var project = [
    { title: 'Media Rating and Recommendation', image: "books.PNG", source: '433',
    text1: "",
    text2: "...",
    text3: "",
    text4: "" },
    { title: 'Airport and Airplane Database', image: "airport_database.PNG", source: 'airplane',
      text1: "For my Introduction to Databases class, I worked on a project with a partner to create a database in Microsoft SQL Server and develop an application to interact with the database. My partner and I decided to make a rating system for airports and airlines using a Java application.",
      text2: "To populate the database with info, I exported data from Wikipedia into an Excel document. Using Apache POI and SQL stored procedures, I wrote a script to import data from Excel documents into the database.",
      text3: "With my partner, I worked on writing queries to create tables to store information within the database. I also wrote stored procedures to allow us to add, delete, and modify information in the database. I also wrote views that ensured a user could only access their information.",
      text4: "The Java application that we created contains login, search, review, and reply features. First, a user has the option to log in to an existing account or create a new account. Rather than storing passwords in plain text, a password is salted using a hash, and the salted password with the hash is stored in the database. Next, a user can access either the airport or airline table and is able to make more specific queries. These queries are done using prepared statements to prevent SQL injection attacks. After selecting something to rate, a user is presented with all existing reviews with the option to add a new review or reply to a review." },
      { title: 'Delta Sigma Phi Webmaster', image: "webmaster.PNG", source: 'webmaster',
      text1: "I am the Webmaster for the Delta Sigma Phi Zeta Lambda Chapter. My responsibilities include giving weekly reports on what I am working on, updating the website to be more relevant, and adding new features based on current needs.",
      text2: "Through this role, I have experimented with different ways of displaying information and trying to improve user experience. This has allowed me to have a more in-depth understanding of what goes into creating and maintaining a website.",
      text3: "Recently, I was tasked with finding a way to display all of the past composites to allow alumni to view them. To create this page, I developed different methods in JavaScript to build each part of the page. This allowed me to keep the code organized by having each method build off the other and helped me learn more about JavaScript. To display the composite in full screen, I used modal contents with onclick functions.",
      text4: "" },
      { title: 'Schedule Planner', image: "Schedule_img.PNG", source: '280',
      text1: "For my Introduction to Web Design final project, I worked with a partner to develop a web application that allows a user to create and customize various schedules based on their major at Rose-Hulman.",
      text2: "The main functionality of the application was accomplished using a combination of Bootstrap cards and the Firestore database. The preset schedules were stored within a collection in Firestore with hashmaps and arrays and were displayed using interactive Bootstrap cards. A user had the option to save a schedule that would be stored in another Firestore collection. They would then be able to edit and delete the schedules that had been created by the user.",
      text3: "Additionally, we implemented an authentication system that included both Firebase authentication and Rose-Hulman’s unique authentication. This allowed us to ensure a users would only be able to edit their own schedules by using the authentication to give a user a unique ID.",
      text4: "" },
      { title: 'Genetic Algorithm Research Project', image: "Garp1.gif", source: '230',
      text1: "For my Introduction to Object-Oriented Programming final project, I worked with a team to develop a GUI that simulated the evolution of a population over generations using Java. Throughout this project, I practiced pair programming and got comfortable coding in a group environment.",
      text2: "We used various JFrames to display the different aspects of the project such as the current population and the object in the population that fits whatever arbitrary criteria set. Additionally, we created an interactive graph that allowed a user to input different settings into the graph. This allowed us to visualize how each setting impacted the evolution of the population. One example of this would be a population that used truncation and had crossover.",
      text3: "To wrap up the project, we created a presentation and paper to show our findings. We conducted various experiments using our GUI to see how various factors impacted the evolution of the population. We presented our findings to the class and successfully completed this project.",
      text4: "" }, 
]

function getProject(project){
    return `
        <div class="col">
            <img type="image" id="${project.source}_img" class="exp_img" src="media/projects/${project.image}" alt="some" data-bs-toggle="modal" data-bs-target="#${project.source}">
            <p></p>
            <p></p>
            <h2>${project.title}</h2>
            <p></p>
        </div>
    `;
}

function getModal(project){
    return `
    <div class="modal fade" id=${project.source} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <img class="modal_img" src="media/projects/${project.image}">
            <p></p>
            <p>${project.text1}</p>
            <p>${project.text2}</p>
            <p>${project.text3}</p>
            <p>${project.text4}</p>
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
