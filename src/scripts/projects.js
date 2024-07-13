var project = [
    { title: 'Airport and Airplane Database', image: 'airplane_database.PNG', source: 'airport',
      text: '...'}
]

function getProject(project){
    return `
        <div class="col">
            <img type="image" id="${project.title}" class="exp_img" src="/media/projects/${project.image}" alt="some" data-bs-toggle="modal" data-bs-target="#${project.source}">
            <br>
            <h2>${project.title}</h2>
            <br>
        </div>
    `;
}

function getModal(project){
    return `
    <div class="modal fade" id="airplane" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            ${project.text}
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
            </div>
        </div>
        </div>
    </div>
    `;
}

function buildContainer(list, selector){
    var html = "";
    for (var i = 0; i < project.length; i+=1){
        html += getProject(list);
    }
    $(selector).append(html);
}

function buildModal(list, selector){
    var html = "";
    for (var i = 0; i < project.length; i+=1){
        html += getModal(list);
    }
    $(selector).append(html);
}


// buildContainer(project, "#project_buttons");
// buildModal(project, "#main_body");
