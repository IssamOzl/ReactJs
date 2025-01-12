import { useQuery } from "@tanstack/react-query"
import { cartItem, product, productVariations } from "../../Utils/Types"
import { FetchData } from "../../Utils/Helpers"
import { env } from "../../Utils/env"
import Alert, { alertType } from "../UI/Alert/Alert"
import { ChangeEvent, useContext, useEffect, useRef, useState } from "react"
import ReactImageGallery from "react-image-gallery"
import ReductionBox from "../UI/Product/ReductionBox"
import QantityBox from "../UI/Product/QantityBox"
import { useInView } from "react-intersection-observer"
import VisitorsStockBoxMemo from "../UI/Product/VisitorsSotckBox"
import ShippingInfoBox from "../UI/Product/ShippingInfoBox"
import { UseCart } from "../../Hooks/UseCart"
import { CartCountContext } from "../../Context/CartCountCntext"
import Recommendationsmemo from "../Recommendations/Recommendations"
import { useNavigate } from "react-router-dom"
import Toast from "../UI/Toast/Toast"
import ErrorOrLoading from "../UI/Alert/ErrorOrLoading"



type ProductDetailsProps = {
  slug: string
}
const cssBlock = {
  display: "block"
}
const cssNone = {
  display: "none"
}

const INIT_QTE = 1

export default function ProductDetails({ slug }: ProductDetailsProps) {

  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  const [visible, setVisible] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)

  const [qte, setQte] = useState(INIT_QTE)
  const [variationState, setVariationState] = useState(0)

  const [varError, setVarError] = useState(false)

  const varsBtnsGroupRef = useRef<HTMLDivElement>(null)

  const { addToCart, getCartItemsCount } = UseCart()
  const { setterCartCount } = useContext(CartCountContext)




  // Function to update scroll position
  const handleScroll = () => {
    setScrollPosition(window.scrollY); // Get scroll position of the window
  };



  useEffect(() => {
    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);


    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures this runs only once after the initial render


  const { ref, inView } = useInView({
    /* Optional options */
    initialInView: true,
  });

  useEffect(() => {
    //console.log("inView check");
    //console.log("inView " + inView);
    //console.log("scrollY " + window.scrollY);
    if (!inView && scrollPosition > 100) {

      setVisible(false)

    } else {
      setVisible(true)
    }
  }, [inView, scrollPosition])

  const { data, isSuccess,isLoading ,error} = useQuery({
    queryFn: () => FetchData<product>(`${env.VITE_API_URL + env.VITE_ROUTE_PRODUCT_DETAILS}?slug=${slug}`),
    queryKey: [`${slug}`]
  })
 
  const prod: product = data as unknown as product

  let vars: productVariations[] = []

  if (prod?.variations) {
    vars = prod.variations as unknown as productVariations[]
  }

  //console.log(prod);
  let imgs: {
    original: string;
    thumbnail: string;
  }[] | undefined = []

  imgs = prod?.images?.map(image => {
    return (
      {
        original: env.VITE_IMAGES_FOLDER + image.name_image,
        thumbnail: env.VITE_IMAGES_FOLDER + image.name_image
      }
    )
  })

  const variationsRadioHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    setVarError(false)
    setVariationState(parseInt(val))
  }

  const addToCartHandler = () => {
    // cartItemId:string // => product_id+"_"+variationId 
    // no varation was selected
    if (vars.length === 0) return

    const { thumbnail, product_id, product_name, slug, product_base_price, free_shipping, variations } = prod
    let variationId = vars[0].id
    let varName = vars[0].name

    if (vars.length > 1) {
      if (variationState === 0) {
        setVarError(true)
        if (varsBtnsGroupRef.current) {
          varsBtnsGroupRef.current?.scrollIntoView()
        }
        return
      }

      variationId = variationState
      variations?.map(variation => {
        if (variation.id == variationId) varName = variation.name
      })

    }

    const item: cartItem = {
      product_id: product_id,
      product_name: product_name,
      slug: slug,
      product_base_price: product_base_price,
      free_shipping: free_shipping,

      variationId: variationId,
      variationName: varName,
      thumbnail: thumbnail,
      // qte is the state
      Qte: qte,

      // => product_id+"_"+variationId
      cartItemId: product_id + "_" + variationId
    }

    if (addToCart(item)) {
      setterCartCount(getCartItemsCount())
      setQte(INIT_QTE)
      setVariationState(0)
      Toast().notify("Ajouté au panier !")
      navigate("/cart")
    }

  }

  function LoadVariationsCheckBoxes(vars: productVariations[]) {

    let innerComp = <></>

    if (vars.length > 0) {
      // if (vars.length === 1) {
      // const callsetVariationState =  useCallback(() => setVariationState(vars[0].id), [])
      // callsetVariationState()
      // }
      if (vars.length > 1) {
        innerComp = (
          <div ref={varsBtnsGroupRef}>
            <div className="det_label">Détails du produit :</div>
            <div className="vars_container"   >
              {


                vars.map(variation => {
                  return (
                    <>
                      <label key={variation.id} className={"btn btn-success check-label " + (variation.id === variationState ? "active " : "") + (varError ? "varError" : "")}>
                        {variation.name}
                        <input key={variation.id} checked={variation.id == variationState} onChange={variationsRadioHandler} type="radio" value={variation.id} name="variation" className="check-input" />
                      </label>
                    </>
                  )

                })

              }
            </div>
          </div>
        )
      }
    } else {
      innerComp = <Alert text="Pas de variation pour ce produit" type={alertType.danger} />
    }

    return innerComp



  }
  

  if (isSuccess) {
 
    return (
      <>
        <div
          className="lx-purchase-btns-floating"
          style={visible ? cssNone : cssBlock}
        >
          <button id="ord_now" onClick={() => addToCartHandler()}>Acheter Maintenant</button>
        </div>
        <div className="container">

          <div className="card">
            <div className="container-fliud">
              <div className="wrapper row">
                <div className="preview col-md-6 col-sm-12 col-xs-12">
                  {(imgs && imgs.length > 0)   && <ReactImageGallery items={imgs} />}
                </div>
                <div className="details col-md-6 col-sm-12 col-xs-12">
                  <form className="product-form">

                    <h3 className="product-title">
                      {prod?.product_name}
                    </h3>
                    <h4 className="price">
                      {prod?.product_base_price > 0 && <span>{prod?.product_base_price + "DH"}</span>}
                      {prod?.old_price > 0 && <span className="det_old_price">{prod?.old_price + 'DH'}</span>}
                    </h4>
                    {prod?.old_price > 0 && <ReductionBox product_base_price={prod?.product_base_price} old_price={prod?.old_price} />}
                    <VisitorsStockBoxMemo stock={prod?.product_quantity} endDate={new Date(prod?.product_date)} />
                    {prod?.product_description && <p className="product-description" dangerouslySetInnerHTML={{ __html: prod.product_description }}></p>}
                    {prod?.free_shipping == 1 && <h3 className="free_shipping_h3">livraison gratuite partout au Maroc</h3>}

                    {
                      LoadVariationsCheckBoxes(vars)

                    }
                    {/* {
  
                      vars.length >= 1
                      &&
                      <div ref={varsBtnsGroupRef}>
                        <span className="det_label">Détails du produit :</span>
                        <span className="btn-group" data-toggle="buttons" >
                          {
                            vars.map(variation => {
                              return (
                                <>
                                  <label className={"btn btn-success check-label " + (variation.id === variationState ? "active " : "") + (varError ? "varError" : "")}>
                                    {variation.name}
                                    <input key={variation.id} checked={variation.id == variationState} onChange={variationsRadioHandler} type="radio" value={variation.id} name="variation" className="check-input" />
                                  </label>
                                </>
                              )
  
                            })
                          }
                        </span>
                      </div>
                    } */}
                    <QantityBox max={prod?.product_quantity} qte={qte} setQte={setQte} />

                    <div className="action" ref={ref}>
                      <a onClick={() => addToCartHandler()} className="sc-add-to-cart add-to-cart btn btn-default" id="big-add-tocart">Acheter Maintenant</a>
                    </div>
                    <ShippingInfoBox free_shipping={prod?.free_shipping} />
                  </form>
                </div>
              </div>
            </div>
          </div>
          <Recommendationsmemo slug={prod?.slug} />
        </div>
      </>
    )
  } else {
    return  <div className="container"><ErrorOrLoading isLoading={isLoading} error={error}/></div>
  }

}
