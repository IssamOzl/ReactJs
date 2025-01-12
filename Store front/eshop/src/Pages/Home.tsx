import LatestProducts from "../Components/LatestProducts/LatestProducts";

interface HomeProps {
  isLost: boolean
}
export default function Home({ isLost = false }: HomeProps) {
  // this page behave's like home and 404 page
  // if isLos = true ==> 404
//throw new Error("TEST")

  return (
  <>
      {isLost === true &&
        <>
          <div className="flex-row row row_404 ">
            <div className="col-md-12 title_404">
              <i className="fa-regular fa-face-frown sad_face_404"></i>
              <br />
              <h3>Désolé, nous ne pouvons pas trouver la page que vous recherchez.</h3>
            </div>
          </div>
          <div className="row_soutit_404">
            <h4>Ramenons-vous sur la bonne voie...</h4>
          </div>
        </>
      }
         <LatestProducts />
     </>

  )
}
