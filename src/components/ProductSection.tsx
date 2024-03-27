import FilterList from "./FilterList";
import ProductsList from "./ProductsList";

const ProductSection = () => {
    // text-eerieBlack en el boton de filter-btn si esta activo
    return (
        <section className="section product">
            <div className="container">
                <h2 className="text-font2 mobile:text-font2-mobile 
                tabletS:text-font2-tabletS text-eerieBlack 
                font-semibold section-title">Products of the week</h2>
                <FilterList/>
                <ProductsList/>
                <button className="btn btn-outline mx-auto">View All Products</button>
            </div>
        </section>
    );
}

export default ProductSection;