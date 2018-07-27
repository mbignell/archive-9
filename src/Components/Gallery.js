import React from 'react';
import Image from './Image';
import NoResults from './NoResults';

const Gallery = (props) => {

  // let query = match.params.que ry;
  console.log(props.match.params)
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
      <h2>{props.match.params.query} Images</h2>
      <ul className="galleryList">
        {gallery}
      </ul>
    </div>
  );
}

export default Gallery;
