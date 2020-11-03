import React from 'react';
import ImageGallery from 'react-image-gallery';
import './First.css'


function FirstImageShow() {
    const images = [
        {
          original: 'https://picsum.photos/id/1018/1000/600/',
          thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
          original: 'https://picsum.photos/id/1015/1000/600/',
          thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
          original: 'https://picsum.photos/id/1019/1000/600/',
          thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
      ];
  return (
    
    <ImageGallery 
    useBrowserFullscreen={false}
    showThumbnails={false}
     showThumbnails={false} 
     useTranslate3D={false}
     showPlayButton={false}
     fullscreen={false}
     

     items={images} />
     
  );
}

export default FirstImageShow;
