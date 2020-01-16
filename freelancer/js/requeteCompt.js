let tableau = document.querySelector('.compt1');
let tableau2= document.querySelector('.compt2');
let tableau3= document.querySelector('.compt3');

fetch('http://localhost:1337/competences')
    .then(resp => resp.json())
    .then(data => {
        data.forEach((d) => {
            let ligne = document.createElement('p');

            let intitule = document.createElement('p');
            intitule.textContent = d.intitule;

            let groupe = document.createElement('p');
            groupe.textContent = d.groupe;

            let categorie = document.createElement('p');
            categorie.textContent = d.categorie;



            // ligne.appendChild(intitule);
            // ligne.appendChild(groupe);
            // ligne.appendChild(categorie);
            tableau.append(intitule);
            tableau2.append(groupe);
            tableau3.append(categorie);
        });

    });
