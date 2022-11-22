function generateCards(teamArray) {
    const teamHtml = teamArray.map((employee) => {
        const option = getOption(employee);
        const role = getRoleHtml(employee);
        
        const html = `<div class="team-card">
        <div class="team-card__header">
            <span class="team-card__header-name">${employee.getName()}</span>
            <span class="team-card__header-role">
                ${role}
            </span>
        </div>
        <div class="team-card__body">
            <span>ID: ${employee.getId()}</span>
            <span>Email: <a href="mailto: ${employee.getEmail()}">${employee.getEmail()}</a></span>
            <span>${option}</span>
        </div>
    </div>`
        return html;
    })

    return teamHtml;
}

function getOption(employee) {
    if(employee.getRole() === 'Manager') return `Office Number: ${employee.getOfficeNumber()}`;
    if(employee.getRole() === 'Engineer') return `GitHub: <a href="${employee.getGithub()}">${employee.getGithub()}</a>`;
    if(employee.getRole() === 'Intern') return `School: ${employee.getSchool()}`;
}

function getRoleHtml(employee) {
    if(employee.getRole() === 'Manager') return `<i class="fa-brands fa-black-tie"></i> Manager`;
    if(employee.getRole() === 'Engineer') return `<i class="fa-solid fa-laptop-code"></i> Engineer`;
    if(employee.getRole() === 'Intern') return `<i class="fa-solid fa-graduation-cap"></i> Intern`;
}

module.exports = generateCards;