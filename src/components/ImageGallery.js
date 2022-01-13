import { ImageGroup, Image } from 'react-fullscreen-image'
import EHCHomePage from "../images/EHCHomePage.jpeg"
import EHCIssuePage from "../images/EHCIssuePage.jpeg"
import EHCReportsPage from "../images/EHCReportsPage.jpeg"
import './ImageGallery.css';
 
// const images = [
//     EHCHomePage,
//     EHCReportsPage,
//     EHCIssuePage
// ]
 
export default function ImageGallery(props) {
  return (
    <ImageGroup>
      <ul className="images">
        {props.images.map(i => (
          <li key={i}>
            <Image
              src={i}
              alt=""
            />
          </li>
        ))}
      </ul>
    </ImageGroup>
  )
}