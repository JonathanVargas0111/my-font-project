// components/CategorySection.js

function CategorySection() {
    return (
        <div className="bg-slate-100 p-12 text-center">
            <h2 className="text-5xl text-slate-900 mb-8">Categorías</h2>
            <ul className="w-full max-w-screen-md mx-auto flex flex-row justify-around">
                <li><span className="category-name">Zapatos deportivos</span></li>
                <li><span className="category-name">Ropa casual</span></li>
                <li><span className="category-name">Accesorios elegantes</span></li>
            </ul>
        </div>
    );
}

export default CategorySection;
