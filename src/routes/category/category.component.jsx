import { useContext, useState, useEffect } from 'react';
import { CategoriesContext } from '../../context/categories.context';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/product-card/product-card.component';
import './category.styles.scss';

const Category = () => {
	const { category } = useParams();
	const { categoriesMap } = useContext(CategoriesContext);

	const [products, setProducts] = useState(categoriesMap[category]);

	useEffect(() => {
		setProducts(categoriesMap[category]);
	}, [category, categoriesMap]);

	return (
		<div className="category-container">
			{products && products.map((prod) => <ProductCard key={prod.id} product={prod} />)}
		</div>
	);
};

export default Category;
