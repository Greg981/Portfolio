var tableau = document.querySelector('.compt');

fetch('http://localhost:1337/aprenants')
    .then(resp => resp.json())
    .then(data => {
        data.forEach((d) => {
            let ligne = document.createElement('p');

            let nom = document.createElement('p');
            nom.textContent = d.nom;

            let prenom = document.createElement('p');
            prenom.textContent = d.prenom;

            let date = document.createElement('p');
            date.textContent = d.date;

            let email = document.createElement('P');
            email.textContent = d.email;

            // let avatar = new Image();
            // // avatar.src = 'http://localhost:1337/%27+d.avatar.url';

            // let img = document.createElement('td');
            // img.appendChild(avatar);

            ligne.appendChild(nom);
            ligne.appendChild(prenom);
            ligne.appendChild(date);
            ligne.appendChild(email),



            console.log("tableau ?", tableau);
            tableau.append(ligne);

            d.competences.forEach(comps => {
                let ligne = document.createElement('tr');

                let intitule = document.createElement('tr');
                intitule.textContent = comps.intitule;

                let groupe = document.createElement('td');
                groupe.textContent = comps.groupe;

                let categorie = document.createElement('td');
                categorie.textContent = comps.categorie;

                ligne.appendChild(intitule);
                ligne.appendChild(groupe);
                ligne.appendChild(categorie);

                tableau.appendChild(ligne);

            })

            d.competence_humaines.forEach(comphum => {
                let ligne = document.createElement('tr');

                let intitulee = document.createElement('tr');
                intitulee.textContent = comphum.intitulee;

                ligne.appendChild(intitulee);

                tableau.appendChild(ligne);

            });

        });

    });