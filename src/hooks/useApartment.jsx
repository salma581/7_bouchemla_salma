import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
export function useApartment() {
  // État pour stocker les informations de l'appartement
  const [flat, setFlat] = useState(null);

  // Récupération de l'objet location pour obtenir l'ID de l'appartement depuis l'état de navigation
  const location = useLocation();

  useEffect(() => {
      // Création d'un AbortController pour pouvoir annuler la requête si nécessaire
      const abortController = new AbortController();

      fetch("db.json")
          .then((res) => res.json()) 
          .then((flats) => {
              const flat = flats.find((flat) => flat.id === location.state.apartmentId);
              // Mise à jour de l'état avec les données de l'appartement trouvé
              setFlat(flat);
          })
          .catch(console.error); 

      return () => { 
          abortController.abort();
      };
  }, []); // Exécution une seule fois après le montage du composant
  return flat;
}

    
   