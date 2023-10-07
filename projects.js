console.log("hello")

document.getElementById('project-1').addEventListener('click', function() {
    document.getElementById('projects-info').innerText = 'A program that takes an ASCII image of an anime girl and converts them into a 256x256 color picture using the PyTorch CycleGAN library.';
});

document.getElementById('project-2').addEventListener('click', function() {
    document.getElementById('projects-info').innerText = "My bachelor's thesis that seeks to find the impact of an update on the Ethereum Blockchain.";
});

document.getElementById('project-3').addEventListener('click', function() {
    document.getElementById('projects-info').innerText = 'A program used to track the ISS, and other cool NASA and ESA projects.';
});