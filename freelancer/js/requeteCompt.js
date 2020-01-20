let tableau = document.querySelector('.compt1');
let tableau1 = document.querySelector('.compt2');

fetch('http://localhost:1337/competences')
    .then(resp => resp.json())
    .then(data => {
        data.forEach((d) => {
        
            let intitule = document.createElement('p');
            intitule.textContent = d.intitule;


            let categorie = document.createElement('p');
            categorie.textContent = d.categorie;



            // ligne.appendChild(intitule);
            // ligne.appendChild(groupe);
            // ligne.appendChild(categorie);
            tableau.append(intitule);   
            tableau1.append(categorie);
        });

    });

let tableau3 = document.querySelector('.hum1');

fetch('http://localhost:1337/competence-humaines')
    .then(resp => resp.json())
    .then(data => {
        data.forEach((d) => {

            let intitule = document.createElement('p');
            intitule.textContent = d.intitulee;


            tableau3.append(intitule);
        });

    });

let tableau4 = document.querySelector('.compt4');


fetch('http://localhost:1337/competences-technologiques')
    .then(resp => resp.json())
    .then(data => {
        data.forEach((d) => {

            let intitule = document.createElement("fieldset");
            intitule.textContent = d.intitule;

            tableau4.append(intitule);

        });

    });

let tableau6 = document.querySelector('.compt5');
let tableau7 = document.querySelector('.compt6');


fetch('http://localhost:1337/niveaus')
    .then(resp => resp.json())
    .then(data => {
        data.forEach((d) => {

            let nom = document.createElement('p');
            nom.textContent = d.nom;

            let score = document.createElement('p');
            score.textContent = d.score.nom;


            tableau6.append(nom);
            tableau7.append(score);
        });

    });