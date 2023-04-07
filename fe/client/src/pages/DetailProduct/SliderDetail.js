import React from "react";
import "./DetailProduct.scss";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/scss/image-gallery.scss";

function SliderDetail() {
    // const imgproduct = [
    //     {
    //         link: "https://i.imgur.com/925KFMA.png",
    //     },
    //     {
    //         link: "https://i.imgur.com/lHBUTSz.png",
    //     },
    //     {
    //         link: "https://i.imgur.com/haGvDwU.png",
    //     },
    // ];
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
       <ImageGallery items={images}/>
    );
}
export default SliderDetail;
