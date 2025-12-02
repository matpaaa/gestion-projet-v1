import CategorieService from "../services/categorieService";
import LocalStorageService from "../services/localStorageService"; 
import CategorieElement from '../components/CategorieElement'
import { useState, useEffect } from "react";


export default function Categories({ onSelected, categorieSelected }) {
  const [categories, setCategories] = useState([]);
  const categorieService = new CategorieService(new LocalStorageService());
  useEffect(() => {
    const data = categorieService.getCategories();
    setCategories(data);
  }, []);

  return (
    <div>
      {categories.length === 0 ? (
        <p>Aucune catégorie disponible.</p>
      ) : (
        <div className="categories-container">
          {categories.map((categorie, index) => (
            <CategorieElement
              key={index}
              categorie={categorie}
              onSelected={onSelected}
              isSelected={categorieSelected?.title === categorie.title}
            />
          ))}
        </div>
      )}
    </div>
  );
}

