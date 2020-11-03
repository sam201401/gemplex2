import React,  { useState }from 'react';
import './genre.css';
import ItemsCarousel from 'react-items-carousel';
export default function genre(){
    const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
    
    const genre=["Drama","Action","Thriller","Horror","Comedy","Adult","Documentry","Classic","RomCom","Crime","Reality","Romantic","Musical"]
    return (
        
       <div>
           <div className="tittle">
           Genre
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
        slidesToScroll={1}
        chevronWidth={chevronWidth}
      >
              {genre.map((image,index)=>
                 ( <div className="imggenre"><img className="img-genreclass" src="https://preprod-gemplex-assets.gemplex.tv/genre/images/thumbnails_4_3/1566655412281.jpg"/>
              
              
              </div>
              ))}
              </ItemsCarousel>
    </div>
           </div>
       </div>
    )
}