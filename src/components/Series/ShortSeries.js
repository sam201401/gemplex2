import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import './shortseries.css';
function ShortSeries() {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  const images =[
    {
        src: "https://preprod-gemplex-originals.gemplex.tv/content/16000071/images/banner/thumbnails_4_5/1574669693893_thumbnails_4_5.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
        thumbnailWidth: 480,
        thumbnailHeight: 230,
        caption: "After Rain ",
        duration:"2020 | 2hr 14min"
    },
    {
        src: "https://preprod-gemplex-originals.gemplex.tv/content/16000069/images/banner/thumbnails_4_5/1572955158079_thumbnails_4_5.jpg",
        thumbnail: "https://c6.staticflickr.com/9/8890/28897154101_a8f55be225_n.jpg",
        thumbnailWidth: 480,
        thumbnailHeight: 230,
        caption: "37H ",
        duration:"2020 | 2hr 14min"
    },
    {
        src: "https://preprod-gemplex-originals.gemplex.tv/content/16000065/images/banner/thumbnails_4_5/1569425035862_thumbnails_4_5.jpg",
        thumbnail: "https://c7.staticflickr.com/9/8106/28941228886_86d1450016_n.jpg",
        thumbnailWidth: 480,
        thumbnailHeight: 230,
        caption: "Orange Macro",
        duration:"2020 | 2hr 14min"
    },
    {
        src: "https://preprod-gemplex-originals.gemplex.tv/content/16000047/images/banner/thumbnails_4_5/1567163540758_thumbnails_4_5.jpg",
        thumbnail: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_n.jpg",
        thumbnailWidth: 480,
        thumbnailHeight: 230,
        caption: "201H ",
        duration:"2020 | 2hr 14min"
    },
    {
        src: "https://preprod-gemplex-originals.gemplex.tv/content/16000046/images/banner/thumbnails_4_5/1566914997006_thumbnails_4_5.jpg",
        thumbnail: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_n.jpg",
        thumbnailWidth: 480,
        thumbnailHeight: 230,
        caption: "Flower Interior ",
        duration:"2020 | 2hr 14min"
    },
    {
        src: "https://preprod-gemplex-originals.gemplex.tv/content/16000016/images/banner/thumbnails_4_5/1566111822308_thumbnails_4_5.jpg",
        thumbnail: "https://c1.staticflickr.com/9/8707/28868704912_cba5c6600e_n.jpg",
        thumbnailWidth: 480,
        thumbnailHeight: 230,
        caption: "Man on BMX ",
        duration:"2020 | 2hr 14min"
    },
    {
        src: "https://preprod-gemplex-originals.gemplex.tv/content/16000013/images/banner/thumbnails_4_5/1572955608287_thumbnails_4_5.jpg",
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
    
      
     
      <div>
          <div className="tittle">
             Musicals
          </div>
          <div >
          <div style={{ padding: `0 ${chevronWidth}px` }}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex-1}
        activeItemIndex={activeItemIndex}
        numberOfCards={3}
        
        leftChevron={<button>{'<'}</button>}
        rightChevron={<button>{'>'}</button>}
        outsideChevron
        slidesToScroll={1}
        chevronWidth={chevronWidth}
      >
   {images.map((image)=> 

   ( <div ><img className="image3" src={image.src} height="257px" width="206px"></img>
   <div className="imagecaption">{image.caption}</div>
   <div className="timeduration">{image.duration}</div>
   
   </div>)
   )
}
      </ItemsCarousel>
    </div>
    </div>
      </div>
      
    </div>
  );
}

export default ShortSeries;
