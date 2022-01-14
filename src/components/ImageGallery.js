import { ImageGroup, Image } from 'react-fullscreen-image'
import './ImageGallery.css';
 
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