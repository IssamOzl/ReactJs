import { memo, useContext } from "react"
import { CartCountContext } from "../../Context/CartCountCntext"

function Header() {


  // trying to get local storage if already stored
  const { siteParams } = useContext(CartCountContext)
  if (siteParams)
    return (
      <div className="header-img" >
        <center>
          <p className="header-txt">
            <a rel="nofollow noopener noreferrer" href={`tel:${siteParams.phone}`} target="_blank" className="fix-header-link">06.43.34.57.85</a> : بغيتي تشري ؟ أو محتاج أي مساعدة ! إتصل بنا على
          </p>
        </center>
      </div>
    )
}

export default memo(Header)