import React from "react";
import "./DetailProduct.scss";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.scss";
import "./SliderDetail.scss";
//
function SliderDetail() {
    const sp = JSON.parse(localStorage.getItem("SANPHAM"));
    const manghinh = sp.hinhAnhs;
    let hinh = [];
    manghinh.map((values, index) =>
        hinh.push({
            original: values.Url,
            thumbnail: values.Url,
        })
    );

    return (
        <ImageGallery
            items={hinh}
            showBullets={false}
            showNav={false}
            autoPlay={true}
            showPlayButton={false}
        />
    );
}
export default SliderDetail;
