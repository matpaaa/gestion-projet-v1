import { useEffect, useState  } from "react-router-dom"
import CategorieService from "../services/categorie.service";
import LocalStorageService from "../services/localStorage.service"; 

export default function Categories() {
  const [categories, setCategories] = useState([]);

  // Instancie le service
  const categorieService = new CategorieService(new LocalStorageService());

  // Récupère les catégories au chargement
  useEffect(() => {
    const data = categorieService.getCategories();
    setCategories(data);
  }, []);

  return (
    <div>
      <h2>Liste des catégories</h2>
      {categories.length === 0 ? (
        <p>Aucune catégorie disponible.</p>
      ) : (
        <ul>
          {categories.map((categorie, index) => (
            <li key={index}>{categorie.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

