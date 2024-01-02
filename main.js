const mySkills = [
    "JavaScript", "C#", "Python",
    "C++"
];

function generateProjectCard() {
    
}
function generateSkills() {
    for (const skill of mySkills) {
        let container = document.createElement('div');
        container.className = 'skill';
        let span = document.createElement('span');
        span.innerText = skill;
        container.appendChild(span);
        document.getElementById('skillsContainer').appendChild(container);
    }
}