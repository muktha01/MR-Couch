import React from "react";
import styles from  '../../../../styles/product/3dProductview.module.css';
import { useSelector } from "react-redux";
const options = [
    {
        name: "linepattern",
        img: "/img/sofa1/Berlin/1.jpg",
        texture: [
            {
                name: "1.jpg",
                img: "/img/sofa1/Berlin/1.jpg"
            },
            {
                name: "2.jpg",
                img: "/img/sofa1/Berlin/2.jpg"
            },
            {
                name: "3.jpg",
                img: "/img/sofa1/Berlin/3.jpg"
            },
            {
                name: "4.jpg",
                img: "/img/sofa1/Berlin/4.jpg"
            },
            {
                name: "5.jpg",
                img: "/img/sofa1/Berlin/5.jpg"
            },
            {
                name: "6.jpg",
                img: "/img/sofa1/Berlin/6.jpg"
            },
            {
                name: "7.jpg",
                img: "/img/sofa1/Berlin/7.jpg"
            },
            {
                name: "8.jpg",
                img: "/img/sofa1/Berlin/8.jpg"
            },
            {
                name: "B1.jpg",
                img: "/img/sofa1/Berlin/B1.jpg"
            },
            {
                name: "B1.jpg",
                img: "/img/Texture.jpg"
            },
        ]
    },
    {
        name: "roundpattern",
        img: "/img/sofa1/Tokyo/2.jpg",
        texture: [
            {
                name: "1.jpg",
                img: "/img/sofa1/Tokyo/1.jpg"
            },
            {
                name: "2.jpg",
                img: "/img/sofa1/Tokyo/2.jpg"
            },
            {
                name: "3.jpg",
                img: "/img/sofa1/Tokyo/3.jpg"
            },
            {
                name: "4.jpg",
                img: "/img/sofa1/Tokyo/4.jpg"
            },
            {
                name: "5.jpg",
                img: "/img/sofa1/Tokyo/5.jpg"
            },
            {
                name: "6.jpg",
                img: "/img/sofa1/Tokyo/6.jpg"
            },
            {
                name: "7.jpg",
                img: "/img/sofa1/Tokyo/7.jpg"
            },
            {
                name: "8.jpg",
                img: "/img/sofa1/Tokyo/8.jpg"
            },
            {
                name: "T1.jpg",
                img: "/img/sofa1/Tokyo/T1.jpg"
            },
        ]
    },
    {
        name: "starpattern",
        img: "/img/sofa1/japan/46501.jpg",
        texture: [
            {
                name: "1.jpg",
                img: "/img/sofa1/japan/46501.jpg"
            },
            {
                name: "2.jpg",
                img: "/img/sofa1/japan/46502.jpg"
            },
            {
                name: "3.jpg",
                img: "/img/sofa1/japan/46503.jpg"
            },
            {
                name: "4.jpg",
                img: "/img/sofa1/japan/46504.jpg"
            },
            {
                name: "5.jpg",
                img: "/img/sofa1/japan/46505.jpg"
            },
            {
                name: "6.jpg",
                img: "/img/sofa1/japan/46506.jpg"
            },
            {
                name: "7.jpg",
                img: "/img/sofa1/japan/46507.jpg"
            },
            {
                name: "8.jpg",
                img: "/img/sofa1/japan/46508.jpg"
            },
            {
                name: "T1.jpg",
                img: "/img/sofa1/japan/46509.jpg"
            },
            {
                name: "T1.jpg",
                img: "/img/sofa1/japan/46511.jpg"
            },
            {
                name: "T1.jpg",
                img: "/img/sofa1/japan/46551.jpg"
            },
            {
                name: "T1.jpg",
                img: "/img/sofa1/japan/46552.jpg"
            },
        ]
    }
]


export const Options = ({ activeTexture, setActiveTexture }) => {
    const Textures = useSelector((state) => state?.texturePage?.texture);
    return (
        <div className={styles.options1}>
            {Textures?.map((item, idx) => (
                <div
                    className={`${styles.option} ${activeTexture === item?.textureName ? "--is-active" : ""}`}
                    data-option={item?.textureName}
                    onClick={() => setActiveTexture(item)}
                    key={item?.textureName}
                >
                    <img src={`http://3.0.78.116:8080${item?.image?.url}`} alt="" />
                </div>
            ))}
        </div>
    )
}