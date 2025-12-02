import "../css/categorieElement.css"

export default function CategorieElement({categorie}) {
    return (
        <div className="categorie-section">
            <p className='text'>{categorie.title}</p>
        </div>
    )
}