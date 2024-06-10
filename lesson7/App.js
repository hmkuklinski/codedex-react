export default function App() {
    const barcelonaImage = <img src={"https://bit.ly/3HNBfm9"}  alt="Barcelona" />;
  const tokyoImage = <img src={"https://bit.ly/3uqeiSM"}  alt="Tokyo" />;
  const ohioImage = <img src={"https://bit.ly/3whR81p"}  alt="Ohio" />;
  
    const imageGallery = [barcelonaImage, tokyoImage, ohioImage];
    
    return (
      <div>
        <div >
          <h1>My Recent Trips</h1>
        </div>
        <div className="trip-container">
          <ul>
            <li>{imageGallery[0]}
            </li>
            <li>{imageGallery[1]}</li>
            <li>{imageGallery[2]}</li>
          </ul>
          </div>
      </div>
    );
  }
  