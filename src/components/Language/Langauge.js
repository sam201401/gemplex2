import React,  { useState }from 'react';
import './langauge.css';
import ItemsCarousel from 'react-items-carousel';
export default function Language(){
    const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
    const images=[
       "https://preprod-gemplex-assets.gemplex.tv/language/images/thumbnails_4_4/1565963428867.jpg",
       "https://preprod-gemplex-assets.gemplex.tv/language/images/thumbnails_4_4/1565963593340.jpg",
       "https://preprod-gemplex-assets.gemplex.tv/language/images/thumbnails_4_4/1565963615694.jpg",
       "https://preprod-gemplex-assets.gemplex.tv/language/images/thumbnails_4_4/1565963643607.jpg",
       "https://preprod-gemplex-assets.gemplex.tv/language/images/thumbnails_4_4/1565965914238.jpg",
       "https://preprod-gemplex-assets.gemplex.tv/language/images/thumbnails_4_4/1581684108537.jpg"




    ]
    const lang=["Hindi","Bengali","Malayalam","Marathi","Punjabi","English","Persian"]
    return (
        
       <div>
           <div className="tittle">
           LANGUAGE
           </div>

           <div >
           <div style={{ padding: `0 ${chevronWidth}px` }}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={3}
        
        leftChevron={<button>{'<'}</button>}
        rightChevron={<button>{'>'}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
              {images.map((image,index)=>
                 ( <div className="imglang"><img className="img-class" src={image}/>
              <div style={{padding:"10px"}} >{lang[index]}</div>
              
              </div>
              ))}
              </ItemsCarousel>
    </div>
           </div>
       </div>
    )
}