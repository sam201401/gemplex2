import React from 'react';
import './gridphotos.css';
function GridPhotos() {
    const images =[
        {
            src: "https://preprod-gemplex-assets.gemplex.tv/define-grid/images/thumbnails_4_3/1589452551578.jpg",
            thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
            thumbnailWidth: 480,
            thumbnailHeight: 230,
            caption: "After Rain (Jeshu John - designerspics.com)"
        },
        {
            src: "https://preprod-gemplex-assets.gemplex.tv/define-grid/images/thumbnails_4_5/1599300172915.jpg",
            thumbnail: "https://c6.staticflickr.com/9/8890/28897154101_a8f55be225_n.jpg",
            thumbnailWidth: 480,
            thumbnailHeight: 346,
            caption: "37H (gratispgraphy.com)"
        },
        {
            src: "https://preprod-gemplex-assets.gemplex.tv/define-grid/images/thumbnails_4_3/1599299973961.jpg",
            thumbnail: "https://c7.staticflickr.com/9/8106/28941228886_86d1450016_n.jpg",
            thumbnailWidth: 480,
            thumbnailHeight: 230,
            caption: "Orange Macro (Tom Eversley - isorepublic.com)"
        },
        {
            src: "https://preprod-gemplex-assets.gemplex.tv/define-grid/images/thumbnails_4_3/1599299521488.jpg",
            thumbnail: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_n.jpg",
            thumbnailWidth: 480,
            thumbnailHeight: 230,
            caption: "201H (gratisography.com)"
        },
        {
            src: "https://preprod-gemplex-assets.gemplex.tv/define-grid/images/thumbnails_4_5/1599300214508.jpg",
            thumbnail: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_n.jpg",
            thumbnailWidth: 480,
            thumbnailHeight: 346,
            caption: "Flower Interior Macro (Tom Eversley - isorepublic.com)"
        },
        {
            src: "https://preprod-gemplex-assets.gemplex.tv/define-grid/images/thumbnails_4_3/1589452602814.jpg",
            thumbnail: "https://c1.staticflickr.com/9/8707/28868704912_cba5c6600e_n.jpg",
            thumbnailWidth: 480,
            thumbnailHeight: 230,
            caption: "Man on BMX (Tom Eversley - isorepublic.com)"
        },
        {
            src: "https://preprod-gemplex-assets.gemplex.tv/define-grid/images/thumbnails_4_3/1577707041001.jpg",
            thumbnail: "https://c4.staticflickr.com/9/8578/28357117603_97a8233cf5_n.jpg",
            thumbnailWidth: 480,
            thumbnailHeight: 230,
            caption: "Ropeman - Thailand (Tom Eversley - isorepublic.com)"
        },
        {
            src: "https://preprod-gemplex-assets.gemplex.tv/define-grid/images/thumbnails_4_5/1599300214508.jpg",
            thumbnail: "https://c1.staticflickr.com/9/8056/28354485944_148d6a5fc1_n.jpg",
            thumbnailWidth: 480,
            thumbnailHeight: 230,
            caption: "A photo by 贝莉儿 NG. (unsplash.com)"
        },
        {
            src: "https://preprod-gemplex-assets.gemplex.tv/define-grid/images/thumbnails_4_3/1577706856362.jpg",
            thumbnail: "https://c1.staticflickr.com/9/8056/28354485944_148d6a5fc1_n.jpg",
            thumbnailWidth: 480,
            thumbnailHeight: 230,
            caption: "A photo by 贝莉儿 NG. (unsplash.com)"
        }
    ]


  return (
    <div >
    
      
    
<div className="main">
    <div className="container">
   
        <img className="image" src={images[0].src} height={images[0].thumbnailHeight} width={images[0].width}  ></img>
        <img className="image" src={images[3].src} height={images[3].thumbnailHeight} width={images[3].width}  ></img>
        <img className="image" src={images[6].src} height={images[6].thumbnailHeight} width={images[6].width}  ></img>
        </div>
    
        

        <div className="container">
    
        <img className="image" src={images[1].src} height={images[1].thumbnailHeight} width={images[1].width}  ></img>
        <img className="image" src={images[4].src} height={images[4].thumbnailHeight} width={images[4].width}  ></img>
   
    
    
        </div>
        <div className="container">
    
    <img className="image" src={images[2].src} height={images[2].thumbnailHeight} width={images[2].width}  ></img>
    <img className="image" src={images[5].src} height={images[5].thumbnailHeight} width={images[5].width}  ></img>
    <img className="image" src={images[8].src} height={images[8].thumbnailHeight} width={images[8].width}  ></img>



    </div>
        </div>
    </div>
    
  );
}

export default GridPhotos;
