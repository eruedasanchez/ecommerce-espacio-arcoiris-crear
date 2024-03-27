import { ProductItemProps } from "@/types/types";
import CardBanner from "./CardBanner";
import CardContent from "./CardContent";

const ProductItem = ({ src, alt, label, price, regularPrice, cardBadge} : ProductItemProps) => {
    return (
        <li>
            <div className="product-card">
                <CardBanner
                    src={src}
                    alt={alt}
                    cardBadge={cardBadge}
                />
                <CardContent
                    label={label}
                    price={price}
                    regularPrice={regularPrice}
                />
            </div>
        </li>
    );
}

export default ProductItem;




                        // <li>
                        //     <div className="product-card">
                        //         <figure className="relative mb-[20px]"> {/* card-banner */}
                        //             <a href="#">
                        //                 <img 
                        //                     src="/images/product-2.jpg" 
                        //                     alt="Fit Twill Shirt for woman" 
                        //                     loading="lazy" 
                        //                     width={800} 
                        //                     height={1034} 
                        //                     className="w-100" 
                        //                 />
                        //             </a>
                        //             <div className="bg-eerieBlack text-white absolute top-[0px] left-[0px] text-font9 font-medium py-[3px] px-[10px] green">New</div> {/* card-badge */}
                        //             <div className="border border-solid border-violet-600
                        //             flex h-[45px]"> {/* card-actions */}
                        //                 <button className="border border-solid border-cultured
                        //                 w-[45px] flex justify-center items-center gap-[8px] bg-white text-eerieBlack
                        //                 hover:border-eerieBlack focus:border-eerieBlack
                        //                 " aria-label="Quick View"> {/* card-action-btn */}
                        //                 <Eye className="text-[20px]"/>
                        //                 </button>
                        //                 <button className="border border-solid border-cultured
                        //                 w-[45px] flex justify-center items-center gap-[8px] bg-white text-eerieBlack
                        //                 hover:border-eerieBlack focus:border-eerieBlack 
                        //                 grow bg-eerieBlack text-white border-eerieBlack hover:bg-white hover:text-eerieBlack focus:bg-white focus:text-eerieBlack"> {/* card-action-btn hasta linea 55 */} {/* cart-btn toda linea 56 */}
                        //                     <BriefcaseBusiness className="text-[20px]"/>
                        //                     <p>Add to cart</p>
                        //                 </button>
                        //                 <button className="border border-solid border-cultured
                        //                 w-[45px] flex justify-center items-center gap-[8px] bg-white text-eerieBlack
                        //                 hover:border-eerieBlack focus:border-eerieBlack" aria-label="Add to Wishlist"> {/* card-action-btn */}
                        //                     <Heart className="text-[20px]"/>
                        //                 </button>

                        //             </div>
                        //         </figure>

                        //         <div className="card-content">
                        //             <h3 className="h4 border border-solid border-red-400 mb-[5px]"> {/* card-title */}
                        //                 <a href="#">Fit Twill Shirt for woman</a>
                        //             </h3>

                        //             <div className="text-eerieBlack text-font8 font-medium"> {/* card-price */}
                        //                 <data value={62.00}>&pound; 62.00</data>
                        //             </div>
                                    

                        //         </div>


                        //     </div>
                        // </li>

                        // <li>
                        //     <div className="product-card">
                        //         <figure className="relative mb-[20px]"> {/* card-banner */}
                        //             <a href="#">
                        //                 <img 
                        //                     src="/images/product-3.jpg" 
                        //                     alt="Gran Atlantic Chukka Boots" 
                        //                     loading="lazy" 
                        //                     width={800} 
                        //                     height={1034} 
                        //                     className="w-100" 
                        //                 />
                        //             </a>
                        //             <div className="border border-solid border-violet-600
                        //             flex h-[45px]"> {/* card-actions */}
                        //                 <button className="border border-solid border-cultured
                        //                 w-[45px] flex justify-center items-center gap-[8px] bg-white text-eerieBlack
                        //                 hover:border-eerieBlack focus:border-eerieBlack
                        //                 " aria-label="Quick View"> {/* card-action-btn */}
                        //                 <Eye className="text-[20px]"/>
                        //                 </button>
                        //                 <button className="border border-solid border-cultured
                        //                 w-[45px] flex justify-center items-center gap-[8px] bg-white text-eerieBlack
                        //                 hover:border-eerieBlack focus:border-eerieBlack 
                        //                 grow bg-eerieBlack text-white border-eerieBlack hover:bg-white hover:text-eerieBlack focus:bg-white focus:text-eerieBlack"> {/* card-action-btn hasta linea 55 */} {/* cart-btn toda linea 56 */}
                        //                     <BriefcaseBusiness className="text-[20px]"/>
                        //                     <p>Add to cart</p>
                        //                 </button>
                        //                 <button className="border border-solid border-cultured
                        //                 w-[45px] flex justify-center items-center gap-[8px] bg-white text-eerieBlack
                        //                 hover:border-eerieBlack focus:border-eerieBlack" aria-label="Add to Wishlist"> {/* card-action-btn */}
                        //                     <Heart className="text-[20px]"/>
                        //                 </button>

                        //             </div>
                        //         </figure>

                        //         <div className="card-content">
                        //             <h3 className="h4 border border-solid border-red-400 mb-[5px]"> {/* card-title */}
                        //                 <a href="#">Gran Atlantic Chukka Boots</a>
                        //             </h3>

                        //             <div className="text-eerieBlack text-font8 font-medium"> {/* card-price */}
                        //                 <data value={32.00}>&pound; 32.00</data>
                        //             </div>
                                    

                        //         </div>


                        //     </div>
                        // </li>

                        // <li>
                        //     <div className="product-card">
                        //         <figure className="relative mb-[20px]"> {/* card-banner */}
                        //             <a href="#">
                        //                 <img 
                        //                     src="/images/product-4.jpg" 
                        //                     alt="Women's Faux-Trim Shirt" 
                        //                     loading="lazy" 
                        //                     width={800} 
                        //                     height={1034} 
                        //                     className="w-100" 
                        //                 />
                        //             </a>
                        //             <div className="border border-solid border-violet-600
                        //             flex h-[45px]"> {/* card-actions */}
                        //                 <button className="border border-solid border-cultured
                        //                 w-[45px] flex justify-center items-center gap-[8px] bg-white text-eerieBlack
                        //                 hover:border-eerieBlack focus:border-eerieBlack
                        //                 " aria-label="Quick View"> {/* card-action-btn */}
                        //                 <Eye className="text-[20px]"/>
                        //                 </button>
                        //                 <button className="border border-solid border-cultured
                        //                 w-[45px] flex justify-center items-center gap-[8px] bg-white text-eerieBlack
                        //                 hover:border-eerieBlack focus:border-eerieBlack 
                        //                 grow bg-eerieBlack text-white border-eerieBlack hover:bg-white hover:text-eerieBlack focus:bg-white focus:text-eerieBlack"> {/* card-action-btn hasta linea 55 */} {/* cart-btn toda linea 56 */}
                        //                     <BriefcaseBusiness className="text-[20px]"/>
                        //                     <p>Add to cart</p>
                        //                 </button>
                        //                 <button className="border border-solid border-cultured
                        //                 w-[45px] flex justify-center items-center gap-[8px] bg-white text-eerieBlack
                        //                 hover:border-eerieBlack focus:border-eerieBlack" aria-label="Add to Wishlist"> {/* card-action-btn */}
                        //                     <Heart className="text-[20px]"/>
                        //                 </button>

                        //             </div>
                        //         </figure>

                        //         <div className="card-content">
                        //             <h3 className="h4 border border-solid border-red-400 mb-[5px]"> {/* card-title */}
                        //                 <a href="#">Women&apos;s Faux-Trim Shirt</a>
                        //             </h3>

                        //             <div className="text-eerieBlack text-font8 font-medium"> {/* card-price */}
                        //                 <data value={84.00}>&pound; 84.00</data>
                        //             </div>
                                    

                        //         </div>


                        //     </div>
                        // </li>

                        // <li>
                        //     <div className="product-card">
                        //         <figure className="relative mb-[20px]"> {/* card-banner */}
                        //             <a href="#">
                        //                 <img 
                        //                     src="/images/product-5.jpg" 
                        //                     alt="Soft Touch Interlock Polo" 
                        //                     loading="lazy" 
                        //                     width={800} 
                        //                     height={1034} 
                        //                     className="w-100" 
                        //                 />
                        //             </a>
                        //             <div className="border border-solid border-violet-600
                        //             flex h-[45px]"> {/* card-actions */}
                        //                 <button className="border border-solid border-cultured
                        //                 w-[45px] flex justify-center items-center gap-[8px] bg-white text-eerieBlack
                        //                 hover:border-eerieBlack focus:border-eerieBlack
                        //                 " aria-label="Quick View"> {/* card-action-btn */}
                        //                 <Eye className="text-[20px]"/>
                        //                 </button>
                        //                 <button className="border border-solid border-cultured
                        //                 w-[45px] flex justify-center items-center gap-[8px] bg-white text-eerieBlack
                        //                 hover:border-eerieBlack focus:border-eerieBlack 
                        //                 grow bg-eerieBlack text-white border-eerieBlack hover:bg-white hover:text-eerieBlack focus:bg-white focus:text-eerieBlack"> {/* card-action-btn hasta linea 55 */} {/* cart-btn toda linea 56 */}
                        //                     <BriefcaseBusiness className="text-[20px]"/>
                        //                     <p>Add to cart</p>
                        //                 </button>
                        //                 <button className="border border-solid border-cultured
                        //                 w-[45px] flex justify-center items-center gap-[8px] bg-white text-eerieBlack
                        //                 hover:border-eerieBlack focus:border-eerieBlack" aria-label="Add to Wishlist"> {/* card-action-btn */}
                        //                     <Heart className="text-[20px]"/>
                        //                 </button>

                        //             </div>
                        //         </figure>

                        //         <div className="card-content">
                        //             <h3 className="h4 border border-solid border-red-400 mb-[5px]"> {/* card-title */}
                        //                 <a href="#">Soft Touch Interlock Polo</a>
                        //             </h3>

                        //             <div className="text-eerieBlack text-font8 font-medium"> {/* card-price */}
                        //                 <data value={45.00}>&pound; 45.00</data>
                        //             </div>
                                    

                        //         </div>


                        //     </div>
                        // </li>

                        // <li>
                        //     <div className="product-card">
                        //         <figure className="relative mb-[20px]"> {/* card-banner */}
                        //             <a href="#">
                        //                 <img 
                        //                     src="/images/product-6.jpg" 
                        //                     alt="Casmart Smart Watch" 
                        //                     loading="lazy" 
                        //                     width={800} 
                        //                     height={1034} 
                        //                     className="w-100" 
                        //                 />
                        //             </a>
                        //             <div className="border border-solid border-violet-600
                        //             flex h-[45px]"> {/* card-actions */}
                        //                 <button className="border border-solid border-cultured
                        //                 w-[45px] flex justify-center items-center gap-[8px] bg-white text-eerieBlack
                        //                 hover:border-eerieBlack focus:border-eerieBlack
                        //                 " aria-label="Quick View"> {/* card-action-btn */}
                        //                 <Eye className="text-[20px]"/>
                        //                 </button>
                        //                 <button className="border border-solid border-cultured
                        //                 w-[45px] flex justify-center items-center gap-[8px] bg-white text-eerieBlack
                        //                 hover:border-eerieBlack focus:border-eerieBlack 
                        //                 grow bg-eerieBlack text-white border-eerieBlack hover:bg-white hover:text-eerieBlack focus:bg-white focus:text-eerieBlack"> {/* card-action-btn hasta linea 55 */} {/* cart-btn toda linea 56 */}
                        //                     <BriefcaseBusiness className="text-[20px]"/>
                        //                     <p>Add to cart</p>
                        //                 </button>
                        //                 <button className="border border-solid border-cultured
                        //                 w-[45px] flex justify-center items-center gap-[8px] bg-white text-eerieBlack
                        //                 hover:border-eerieBlack focus:border-eerieBlack" aria-label="Add to Wishlist"> {/* card-action-btn */}
                        //                     <Heart className="text-[20px]"/>
                        //                 </button>

                        //             </div>
                        //         </figure>

                        //         <div className="card-content">
                        //             <h3 className="h4 border border-solid border-red-400 mb-[5px]"> {/* card-title */}
                        //                 <a href="#">Casmart Smart Watch</a>
                        //             </h3>

                        //             <div className="text-eerieBlack text-font8 font-medium"> {/* card-price */}
                        //                 <data value={30.00}>&pound; 30.00</data>
                        //                 <data value={38.00} className="text-sonicSilver ml-[5px] line-through">&pound; 38.00</data>
                        //             </div>
                                    

                        //         </div>


                        //     </div>
                        // </li>

                        // <li>
                        //     <div className="product-card">
                        //         <figure className="relative mb-[20px]"> {/* card-banner */}
                        //             <a href="#">
                        //                 <img 
                        //                     src="/images/product-7.jpg" 
                        //                     alt="Casmart Smart Glass" 
                        //                     loading="lazy" 
                        //                     width={800} 
                        //                     height={1034} 
                        //                     className="w-100" 
                        //                 />
                        //             </a>
                        //             <div className="border border-solid border-violet-600
                        //             flex h-[45px]"> {/* card-actions */}
                        //                 <button className="border border-solid border-cultured
                        //                 w-[45px] flex justify-center items-center gap-[8px] bg-white text-eerieBlack
                        //                 hover:border-eerieBlack focus:border-eerieBlack
                        //                 " aria-label="Quick View"> {/* card-action-btn */}
                        //                 <Eye className="text-[20px]"/>
                        //                 </button>
                        //                 <button className="border border-solid border-cultured
                        //                 w-[45px] flex justify-center items-center gap-[8px] bg-white text-eerieBlack
                        //                 hover:border-eerieBlack focus:border-eerieBlack 
                        //                 grow bg-eerieBlack text-white border-eerieBlack hover:bg-white hover:text-eerieBlack focus:bg-white focus:text-eerieBlack"> {/* card-action-btn hasta linea 55 */} {/* cart-btn toda linea 56 */}
                        //                     <BriefcaseBusiness className="text-[20px]"/>
                        //                     <p>Add to cart</p>
                        //                 </button>
                        //                 <button className="border border-solid border-cultured
                        //                 w-[45px] flex justify-center items-center gap-[8px] bg-white text-eerieBlack
                        //                 hover:border-eerieBlack focus:border-eerieBlack" aria-label="Add to Wishlist"> {/* card-action-btn */}
                        //                     <Heart className="text-[20px]"/>
                        //                 </button>

                        //             </div>
                        //         </figure>

                        //         <div className="card-content">
                        //             <h3 className="h4 border border-solid border-red-400 mb-[5px]"> {/* card-title */}
                        //                 <a href="#">Casmart Smart Glass</a>
                        //             </h3>

                        //             <div className="text-eerieBlack text-font8 font-medium"> {/* card-price */}
                        //                 <data value={25.00}>&pound; 25.00</data>
                        //                 <data value={39.00} className="text-sonicSilver ml-[5px] line-through">&pound; 39.00</data>
                        //             </div>
                                    

                        //         </div>


                        //     </div>
                        // </li>

                        // <li>
                        //     <div className="product-card">
                        //         <figure className="relative mb-[20px]"> {/* card-banner */}
                        //             <a href="#">
                        //                 <img 
                        //                     src="/images/product-8.jpg" 
                        //                     alt="Cotton Shirt for Men" 
                        //                     loading="lazy" 
                        //                     width={800} 
                        //                     height={1034} 
                        //                     className="w-100" 
                        //                 />
                        //             </a>
                        //             <div className="border border-solid border-violet-600
                        //             flex h-[45px]"> {/* card-actions */}
                        //                 <button className="border border-solid border-cultured
                        //                 w-[45px] flex justify-center items-center gap-[8px] bg-white text-eerieBlack
                        //                 hover:border-eerieBlack focus:border-eerieBlack
                        //                 " aria-label="Quick View"> {/* card-action-btn */}
                        //                 <Eye className="text-[20px]"/>
                        //                 </button>
                        //                 <button className="border border-solid border-cultured
                        //                 w-[45px] flex justify-center items-center gap-[8px] bg-white text-eerieBlack
                        //                 hover:border-eerieBlack focus:border-eerieBlack 
                        //                 grow bg-eerieBlack text-white border-eerieBlack hover:bg-white hover:text-eerieBlack focus:bg-white focus:text-eerieBlack"> {/* card-action-btn hasta linea 55 */} {/* cart-btn toda linea 56 */}
                        //                     <BriefcaseBusiness className="text-[20px]"/>
                        //                     <p>Add to cart</p>
                        //                 </button>
                        //                 <button className="border border-solid border-cultured
                        //                 w-[45px] flex justify-center items-center gap-[8px] bg-white text-eerieBlack
                        //                 hover:border-eerieBlack focus:border-eerieBlack" aria-label="Add to Wishlist"> {/* card-action-btn */}
                        //                     <Heart className="text-[20px]"/>
                        //                 </button>

                        //             </div>
                        //         </figure>

                        //         <div className="card-content">
                        //             <h3 className="h4 border border-solid border-red-400 mb-[5px]"> {/* card-title */}
                        //                 <a href="#">Cotton Shirt for Men</a>
                        //             </h3>

                        //             <div className="text-eerieBlack text-font8 font-medium"> {/* card-price */}
                        //                 <data value={85.00}>&pound; 85.00</data>
                        //                 <data value={99.00} className="text-sonicSilver ml-[5px] line-through">&pound; 99.00</data>
                        //             </div>
                                    

                        //         </div>


                        //     </div>
                        // </li>

                        // <li>
                        //     <div className="product-card">
                        //         <figure className="relative mb-[20px]"> {/* card-banner */}
                        //             <a href="#">
                        //                 <img 
                        //                     src="/images/product-9.jpg" 
                        //                     alt="Double-breasted Blazer" 
                        //                     loading="lazy" 
                        //                     width={800} 
                        //                     height={1034} 
                        //                     className="w-100" 
                        //                 />
                        //             </a>
                        //             <div className="border border-solid border-violet-600
                        //             flex h-[45px]"> {/* card-actions */}
                        //                 <button className="border border-solid border-cultured
                        //                 w-[45px] flex justify-center items-center gap-[8px] bg-white text-eerieBlack
                        //                 hover:border-eerieBlack focus:border-eerieBlack
                        //                 " aria-label="Quick View"> {/* card-action-btn */}
                        //                 <Eye className="text-[20px]"/>
                        //                 </button>
                        //                 <button className="border border-solid border-cultured
                        //                 w-[45px] flex justify-center items-center gap-[8px] bg-white text-eerieBlack
                        //                 hover:border-eerieBlack focus:border-eerieBlack 
                        //                 grow bg-eerieBlack text-white border-eerieBlack hover:bg-white hover:text-eerieBlack focus:bg-white focus:text-eerieBlack"> {/* card-action-btn hasta linea 55 */} {/* cart-btn toda linea 56 */}
                        //                     <BriefcaseBusiness className="text-[20px]"/>
                        //                     <p>Add to cart</p>
                        //                 </button>
                        //                 <button className="border border-solid border-cultured
                        //                 w-[45px] flex justify-center items-center gap-[8px] bg-white text-eerieBlack
                        //                 hover:border-eerieBlack focus:border-eerieBlack" aria-label="Add to Wishlist"> {/* card-action-btn */}
                        //                     <Heart className="text-[20px]"/>
                        //                 </button>

                        //             </div>
                        //         </figure>

                        //         <div className="card-content">
                        //             <h3 className="h4 border border-solid border-red-400 mb-[5px]"> {/* card-title */}
                        //                 <a href="#">Double-breasted Blazer</a>
                        //             </h3>

                        //             <div className="text-eerieBlack text-font8 font-medium"> {/* card-price */}
                        //                 <data value={85.00}>&pound; 32.00</data>
                        //             </div>
                                    

                        //         </div>


                        //     </div>
                        // </li>

                        // <li>
                        //     <div className="product-card">
                        //         <figure className="relative mb-[20px]"> {/* card-banner */}
                        //             <a href="#">
                        //                 <img 
                        //                     src="/images/product-10.jpg" 
                        //                     alt="Ribbed Cotton Bodysuits" 
                        //                     loading="lazy" 
                        //                     width={800} 
                        //                     height={1034} 
                        //                     className="w-100" 
                        //                 />
                        //             </a>
                        //             <div className="bg-eerieBlack text-white absolute top-[0px] left-[0px] text-font9 font-medium py-[3px] px-[10px] green">New</div> {/* card-badge */}
                        //             <div className="border border-solid border-violet-600
                        //             flex h-[45px]"> {/* card-actions */}
                        //                 <button className="border border-solid border-cultured
                        //                 w-[45px] flex justify-center items-center gap-[8px] bg-white text-eerieBlack
                        //                 hover:border-eerieBlack focus:border-eerieBlack
                        //                 " aria-label="Quick View"> {/* card-action-btn */}
                        //                 <Eye className="text-[20px]"/>
                        //                 </button>
                        //                 <button className="border border-solid border-cultured
                        //                 w-[45px] flex justify-center items-center gap-[8px] bg-white text-eerieBlack
                        //                 hover:border-eerieBlack focus:border-eerieBlack 
                        //                 grow bg-eerieBlack text-white border-eerieBlack hover:bg-white hover:text-eerieBlack focus:bg-white focus:text-eerieBlack"> {/* card-action-btn hasta linea 55 */} {/* cart-btn toda linea 56 */}
                        //                     <BriefcaseBusiness className="text-[20px]"/>
                        //                     <p>Add to cart</p>
                        //                 </button>
                        //                 <button className="border border-solid border-cultured
                        //                 w-[45px] flex justify-center items-center gap-[8px] bg-white text-eerieBlack
                        //                 hover:border-eerieBlack focus:border-eerieBlack" aria-label="Add to Wishlist"> {/* card-action-btn */}
                        //                     <Heart className="text-[20px]"/>
                        //                 </button>

                        //             </div>
                        //         </figure>

                        //         <div className="card-content">
                        //             <h3 className="h4 border border-solid border-red-400 mb-[5px]"> {/* card-title */}
                        //                 <a href="#">Ribbed Cotton Bodysuits</a>
                        //             </h3>

                        //             <div className="text-eerieBlack text-font8 font-medium"> {/* card-price */}
                        //                 <data value={71.00}>&pound; 71.00</data>
                        //             </div>
                                    

                        //         </div>


                        //     </div>
                        // </li>