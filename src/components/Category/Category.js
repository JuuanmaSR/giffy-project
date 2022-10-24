import { CategoryLink, CategoryListItem, CategoryList, CategoryTitle } from './styles'
const Category = ({ name, options = [] }) => {
    return (
        <section className="app-list-category">
            <CategoryTitle>{name}</CategoryTitle>
            <CategoryList>
                {options.map((singleOptions) => {
                    return <CategoryListItem key={singleOptions} >
                        <CategoryLink to={`/search/${singleOptions}`} >{singleOptions}</CategoryLink>
                    </CategoryListItem>
                })}
            </CategoryList>
        </section>
    )
}

export default Category