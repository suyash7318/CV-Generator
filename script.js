let profileDetails = {};

function addNewTSFeild() {
    let newNode = document.createElement('textarea');
    newNode.classList.add("form-control", "tsfeild");
    newNode.setAttribute("rows", 3);

    let tsOb = document.getElementById("ts");
    let tsAddButtonOb = document.getElementById("tsAddButton");
   
    tsOb.insertBefore(newNode, tsAddButtonOb);
}

function addNewPRFeild() {
    let newNode = document.createElement('textarea');
    newNode.classList.add("form-control", "prfeild");
    newNode.setAttribute("rows", 3);

    let prOb = document.getElementById("pr");
    let prAddButtonOb = document.getElementById("prAddButton");
   
    prOb.insertBefore(newNode, prAddButtonOb);
}


function addNewWEFeild() {
    let newNode = document.createElement('textarea');
    newNode.classList.add("form-control", "wefeild");
    newNode.setAttribute("rows", 3);

    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQFeild() {
    let newNode = document.createElement('textarea');
    newNode.classList.add("form-control", "aqfeild");
    newNode.setAttribute("rows", 3);
    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode, aqAddButtonOb);
}

// Generating CV
function generateCV() {
    profileDetails.name = document.getElementById("namefeild").value;
    profileDetails.contact = document.getElementById("contactfeild").value;
    profileDetails.address = document.getElementById("addressfeild").value;
    profileDetails.facebook = document.getElementById("fbfeild").value;
    profileDetails.instagram = document.getElementById("instafeild").value;
    profileDetails.linkedin = document.getElementById("linkedfeild").value;
    profileDetails.objective = document.getElementById("objecivefeild").value;

    // Technical Skills
    let tss = document.getElementsByClassName('tsfeild');
    profileDetails.technicalSkills = [];
    for (let e of tss) {
        profileDetails.technicalSkills.push(e.value);
    }

    // Project
    let pro = document.getElementsByClassName('prfeild');
    profileDetails.projectDetails = [];
    for (let e of pro) {
        profileDetails.projectDetails.push(e.value);
    }

    // Work Experience
    let wes = document.getElementsByClassName('wefeild');
    profileDetails.workExperience = [];
    for (let e of wes) {
        profileDetails.workExperience.push(e.value);
    }

    // Academic Qualification
    let aqs = document.getElementsByClassName('aqfeild');
    profileDetails.academicQualification = [];
    for (let e of aqs) {
        profileDetails.academicQualification.push(e.value);
    }

    // Image Handling
    let file = document.getElementById('imgfeild').files[0];
    if (file) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function () {
            profileDetails.image = reader.result;
            document.getElementById('imgTemplate').src = profileDetails.image;
        };
    }

    // Setting values in the template
    document.getElementById("nameT1").innerHTML = profileDetails.name;
    document.getElementById("nameT2").innerHTML = profileDetails.name;
    document.getElementById("contactT").innerHTML = profileDetails.contact;
    document.getElementById("addressT").innerHTML = profileDetails.address;
    document.getElementById("fbT").innerHTML = profileDetails.facebook; 
    document.getElementById("instaT").innerHTML = profileDetails.instagram;
    document.getElementById("linkedT").innerHTML = profileDetails.linkedin;
    document.getElementById("objectiveT").innerHTML = profileDetails.objective;

    // Technical Skills
    document.getElementById("tsT").innerHTML = profileDetails.technicalSkills.map(skill => `<li>${skill}</li>`).join('');

    // Project
    document.getElementById("prT").innerHTML = profileDetails.projectDetails.map(pro => `<li>${pro}</li>`).join('');

    // Work Experience
    document.getElementById("weT").innerHTML = profileDetails.workExperience.map(exp => `<li>${exp}</li>`).join('');

    // Academic Qualification
    document.getElementById("aqT").innerHTML = profileDetails.academicQualification.map(edu => `<li>${edu}</li>`).join('');

    // Display template and hide form
    document.getElementById('cv-form').style.display = 'none';
    document.getElementById('cv-template').style.display = 'block';

    console.log(profileDetails); // Debugging: To check stored details in console
}

// Print CV
function printCV() {
    window.print();
}

function changeTemplate() {
    let selectedTemplate = document.getElementById("template").value;
    let resumeDiv = document.getElementById("cv-template");
    resumeDiv.className = "container cv-template-" + selectedTemplate;
    resumeDiv.style.display = "block";
}
