
const utilisateursDeTest = [
    {
      email: "test@e.com",
      motdepasse: "123"
    }
  ];

    
    
    document.getElementById('creerCompte').addEventListener('click', function(event) {
      event.preventDefault(); // Empêche le rechargement de la page
  
      // Récupérer les valeurs des champs de formulaire
      const prenom = document.getElementById('prenom').value;
      const nom = document.getElementById('nom').value;
      const statut = document.querySelector('input[name="option"]:checked').value;
      const email = document.getElementById('email').value;
      const motdepasse = document.getElementById('motdepasse').value;
      const confirmemotdepasse = document.getElementById('confirmemotdepasse').value;
  
      // Vérifier si les mots de passe correspondent
      if (motdepasse !== confirmemotdepasse) {
        alert("Les mots de passe ne correspondent pas.");
        return;
      }
  
      // Créer un objet utilisateur
      const utilisateur = {
        prenom: prenom,
        nom: nom,
        statut: statut,
        email: email,
        motdepasse: motdepasse
      };
  
      // Récupérer les utilisateurs existants de localStorage
      const utilisateurs = JSON.parse(localStorage.getItem('utilisateurs')) || [];
      alert(localStorage.length);
      // Ajouter le nouvel utilisateur
      utilisateurs.push(utilisateur);
  
      // Stocker les utilisateurs mis à jour dans localStorage
      localStorage.setItem('utilisateurs', JSON.stringify(utilisateurs));
  
      alert("Inscription réussie !");
    });
  


   // localStorage.setItem('utilisateurs', JSON.stringify(utilisateursDeTest));
    document.getElementById('connexionc').addEventListener('click', function(event)  {alert();
    //     event.preventDefault();
    //   // Récupérer les valeurs des champs de formulaire
    //   const email = document.getElementById('emailc').value;
    //   const password = document.getElementById('passwordc').value;

    //   // Récupérer les utilisateurs existants de localStorage
    //   const utilisateurs = JSON.parse(localStorage.getItem('utilisateurs')) || [];

    //   // Vérifier si l'utilisateur existe et si le mot de passe correspond
    //   const utilisateur = utilisateurs.find(user => user.email === email && user.motdepasse === password);

    //   if (utilisateur) {
    //     alert("Connexion réussie !");
    //     // Rediriger vers la page souhaitée après la connexion réussie
    //     window.location.href = '/trouver-talents';
    //   } else {
    //     alert("Email ou mot de passe incorrect.");
    //   }
    });
  