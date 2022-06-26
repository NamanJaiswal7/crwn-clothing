import CategoryItem from '../category-item/category-item.component'
import './catergories-container.styles.scss'
const CategoriesContainer=({categories})=>{
    
    return( <div className="categories-container">
    {categories.map((category)=>{
  return (<CategoryItem category={category} key={category.id} /> )
    })}
    </div>
    )
    
}
export default CategoriesContainer;