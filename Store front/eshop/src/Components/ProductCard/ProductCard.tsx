import { Link } from "react-router-dom"
import { env } from "../../Utils/env"
import { product } from "../../Utils/Types"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/black-and-white.css';

type ProductCardProps =
    {
        product: product
    }

export default function ProductCard({ product }: ProductCardProps) {
    let reduction = 0
    if(product.old_price > 0) reduction = (product.product_base_price - product.old_price) / product.old_price * 100
    return (
        <>
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 product-home">
                <Link to={`/product/${product?.slug}`}>
                    <div className="my-list">
                        {(product.old_price > 0 && product.product_base_price != product.old_price)&& <span className="remise">{Math.trunc(reduction*-1) }%OFF</span>}
                        <LazyLoadImage 
                        placeholder={<h1>test..</h1>}
                        height="auto"
                        width="auto"
                            src={ env.VITE_IMAGES_FOLDER+ product?.thumbnail}
                            effect="blur"
                            placeholderSrc={ env.VITE_IMAGES_FOLDER+ "placeholder.png"}/>
                            
                         <h3>{product.product_name}</h3>

                        <div className="price_div">
                            <center>
                                <span className="base-price">{product.product_base_price}DH</span>
                                {(product.old_price > 0 && product.product_base_price != product.old_price) && <span className="old_price">{product.old_price}DH</span>}
                            </center>
                        </div>
                        {
                            product.free_shipping === 1
                            &&
                            <div className="freeshipping_label_div"><center><span className="freeshipping_label" >Livraison Gratuite</span></center></div>
                        }


                    </div>
                </Link>
            </div>
        </>
    )
}
