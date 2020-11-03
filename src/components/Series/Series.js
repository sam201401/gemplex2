import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import './series.css';
function Series() {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  const images =[
    {
        src: "https://preprod-gemplex-assets.gemplex.tv/define-grid/images/thumbnails_4_3/1589452551578.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
        thumbnailWidth: 480,
        thumbnailHeight: 230,
        caption: "After Rain ",
        duration:"2020 | 2hr 14min"
    },
    {
        src: "https://preprod-gemplex-assets.gemplex.tv/define-grid/images/thumbnails_4_5/1599300172915.jpg",
        thumbnail: "https://c6.staticflickr.com/9/8890/28897154101_a8f55be225_n.jpg",
        thumbnailWidth: 480,
        thumbnailHeight: 230,
        caption: "37H ",
        duration:"2020 | 2hr 14min"
    },
    {
        src: "https://preprod-gemplex-assets.gemplex.tv/define-grid/images/thumbnails_4_3/1599299973961.jpg",
        thumbnail: "https://c7.staticflickr.com/9/8106/28941228886_86d1450016_n.jpg",
        thumbnailWidth: 480,
        thumbnailHeight: 230,
        caption: "Orange Macro",
        duration:"2020 | 2hr 14min"
    },
    {
        src: "https://preprod-gemplex-assets.gemplex.tv/define-grid/images/thumbnails_4_3/1599299521488.jpg",
        thumbnail: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_n.jpg",
        thumbnailWidth: 480,
        thumbnailHeight: 230,
        caption: "201H ",
        duration:"2020 | 2hr 14min"
    },
    {
        src: "https://preprod-gemplex-assets.gemplex.tv/define-grid/images/thumbnails_4_5/1599300214508.jpg",
        thumbnail: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_n.jpg",
        thumbnailWidth: 480,
        thumbnailHeight: 230,
        caption: "Flower Interior ",
        duration:"2020 | 2hr 14min"
    },
    {
        src: "https://preprod-gemplex-assets.gemplex.tv/define-grid/images/thumbnails_4_3/1589452602814.jpg",
        thumbnail: "https://c1.staticflickr.com/9/8707/28868704912_cba5c6600e_n.jpg",
        thumbnailWidth: 480,
        thumbnailHeight: 230,
        caption: "Man on BMX ",
        duration:"2020 | 2hr 14min"
    },
    {
        src: "https://preprod-gemplex-assets.gemplex.tv/define-grid/images/thumbnails_4_3/1577707041001.jpg",
        thumbnail: "https://c4.staticflickr.com/9/8578/28357117603_97a8233cf5_n.jpg",
        thumbnailWidth: 480,
        thumbnailHeight: 230,
        caption: "Ropeman ",
        duration:"2020 | 2hr 14min"
    },
    {
        src: "https://preprod-gemplex-assets.gemplex.tv/define-grid/images/thumbnails_4_5/1599300214508.jpg",
        thumbnail: "https://c1.staticflickr.com/9/8056/28354485944_148d6a5fc1_n.jpg",
        thumbnailWidth: 480,
        thumbnailHeight: 230,
        caption: "A photo ",
        duration:"2020 | 2hr 14min"
    },
    {
        src: "https://preprod-gemplex-assets.gemplex.tv/define-grid/images/thumbnails_4_3/1577706856362.jpg",
        thumbnail: "https://c1.staticflickr.com/9/8056/28354485944_148d6a5fc1_n.jpg",
        thumbnailWidth: 480,
        thumbnailHeight: 230,
        caption: "A photo ",
        duration:"2020 | 2hr 14min"
    }
]
  return (
    <div >
    
      <div className="original">
          ORIGINALS
      </div>
     
      <div>
          <div className="tittle">
              Series
          </div>
          <div style={{ padding: `0 ${chevronWidth}px` }}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={3}
        gutter={20}
        leftChevron={<button>{'<'}</button>}
        rightChevron={<button>{'>'}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
   {images.map((image)=> 

   ( <div><img  className="image2"src={image.src} height={image.thumbnailHeight}></img>
   <div className="imagecaption">{image.caption}</div>
   <div className="timeduration">{image.duration}</div>
   
   </div>)
   )
}
      </ItemsCarousel>
    </div>
      </div>
      
    </div>
  );
}

export default Series;
