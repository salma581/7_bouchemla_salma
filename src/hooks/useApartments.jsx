import { useState, useEffect } from "react";
export const useApartments = () => {
  // État pour stocker les appartements
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
      // Création d'un AbortController pour gérer l'annulation de la requête
      const abortController = new AbortController();

      fetch("db.json", { signal: abortController.signal })
          .then((res) => res.json())
          .then((res) => setApartments(res)) // Mise à jour de l'état avec les données récupérées
          .catch(console.error); 

      return () => {
          console.log("cleanup"); 
          abortController.abort(); 
      };
  }, []); // Exécution une seule fois après le montage du composant

  return apartments;
};

