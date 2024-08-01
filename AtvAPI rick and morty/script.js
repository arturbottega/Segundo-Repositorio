document.addEventListener('DOMContentLoaded', () => {
    const fetchRickButton = document.getElementById('fetchRickButton');
    const rickInput = document.getElementById('rickInput');
    const rickDetails = document.getElementById('rickDetails');

   
    async function fetchCharacter() {
        const characterNameOrId = rickInput.value.trim();
        if (!characterNameOrId) {
            rickDetails.innerHTML = '<p>Por favor, digite um nome ou ID do personagem.</p>';
            return;
        }

        try {
            
            let apiUrl = '';
            if (!isNaN(characterNameOrId)) {
                
                apiUrl = `https://rickandmortyapi.com/api/character/${characterNameOrId}`;
            } else {
                
                apiUrl = `https://rickandmortyapi.com/api/character/?name=${characterNameOrId}`;
            }

            const response = await fetch(apiUrl);
            const data = await response.json();

            if (data.results) {
                
                if (data.results.length > 0) {
                    displayCharacter(data.results[0]);
                } else {
                    rickDetails.innerHTML = '<p>Personagem não encontrado.</p>';
                }
            } else {
               
                displayCharacter(data);
            }
        } catch (error) {
            console.error('Erro ao buscar o personagem:', error);
            rickDetails.innerHTML = '<p>Ocorreu um erro ao buscar o personagem.</p>';
        }
    }

    
    function displayCharacter(character) {
        rickDetails.innerHTML = `
            <h2>${character.name}</h2>
             <img src="${character.image}" alt="${character.name}" style="width: 250px; height: 200px; border-radius: 50%; border: solid 5px #0fffff; margin-bottom: 15px;">
            <p><strong>Espécie:</strong> ${character.species}</p>
            <p><strong>Gênero:</strong> ${character.gender}</p>
            <p><strong>Status:</strong> ${character.status}</p>
           
        `;
    }

    
    fetchRickButton.addEventListener('click', fetchCharacter);
});
