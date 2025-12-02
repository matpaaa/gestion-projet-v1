import "../css/categorieElement.css"

export default function CategorieElement({ categorie, onSelected, isSelected }) {
    return (
        <div role="button" onClick={() => onSelected && onSelected(categorie)} className={`categorie-section ${isSelected && 'categorie-selected'}`}>
            <p className='text'>{categorie.title}</p>
        </div>
    )
}