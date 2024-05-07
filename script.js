// Fetch team data from backend API
document.addEventListener('DOMContentLoaded', () => {
    fetch('http://backend:3000/api/team') 
        .then(response => response.json())
        .then(data => {
            const teamList = document.getElementById('teamList');

            data.forEach(member => {
                const memberDiv = document.createElement('div');
                memberDiv.classList.add('teamMember');
                memberDiv.innerHTML = `
                    <img src="${member.photo}" alt="${member.name}">
                    <div class="overlay">
                        <h3>${member.name}</h3>
                        <p>ID: ${member.id}</p>
                        <p>Age: ${member.age}</p>
                        <p>CGPA: ${member.cgpa}</p>
                    </div>
                `;
                teamList.appendChild(memberDiv);
            });
        })
        .catch(error => console.error('Error fetching team data:', error));
});
