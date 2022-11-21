function generateCards(teamArray) {
    const teamHtml = teamArray.map((employee) => {
        const option = getOption(employee);
        
        const html = `<div class="team-card">
        <div class="team-card__header">
            <span class="team-card__header-name">${employee.getName()}</span>
            <span class="team-card__header-role">
                <i class="fa-solid fa-laptop-code"></i> ${employee.getRole()}
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

module.exports = generateCards;