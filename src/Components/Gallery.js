import React from 'react';
import Image from './Image';
import NoResults from './NoResults';

const Gallery = (props) => {

  const results = props.data;
  let gallery;
  if (results.length > 0) {
    gallery = results.map(image =>
      <Image url={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`}
        key={image.id}
        alt={image.title}
      />
    );
  } else {
    gallery = <NoResults />
  };

  return(
    <div className="photo-container">
      {
        (props.loading)
        ? <p className="loading">Loading results...</p>
        : <div>
            <h2>{props.title} Images</h2>
            <ul className="galleryList">
              {gallery}
            </ul>
          </div>
      }
    </div>
  );
}

export default Gallery;
