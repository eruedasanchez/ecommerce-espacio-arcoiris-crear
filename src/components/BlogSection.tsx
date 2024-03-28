import BlogList from "./BlogList";

const BlogSection = () => { 
    return (
        <section className="section blog">
            <div className="container">
                <h2 className="text-font2 mobile:text-font2-mobile 
                tabletS:text-font2-tabletS text-eerieBlack 
                font-semibold text-center mb-[40px]">
                    Latest fashion news
                </h2>
                <BlogList/>
            </div>
        </section>
    );
}

export default BlogSection;