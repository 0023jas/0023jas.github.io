console.log("hello")

document.getElementById('project-1').addEventListener('click', function() {
    document.getElementById('projects-info').innerText = 'Content changed for project 1!';
});

document.getElementById('project-2').addEventListener('click', function() {
    document.getElementById('projects-info').innerText = 'Content changed for project 2 woo hoo!';
});

document.getElementById('project-3').addEventListener('click', function() {
    document.getElementById('projects-info').innerText = 'Content changed for project 3 boo doo doo!';
});