import React from "react";
import styles from  '../../../../styles/product/3dProductview.module.css';
const options = [
    // {
    //     name: "wall",
    //     img: "/img/sofasvg/Wall.svg"
    // },
    // {
    //     name: "ground",
    //     img: "/img/sofasvg/floor.svg"
    // },
    {
        name: "body",
        img: "/img/sofasvg/Sofa.png"
    },
    {
        name: "legs",
        img: "/img/sofasvg/Legs.png"
    },
    {
        name: "pillow",
        img: "/img/sofasvg/Pillow.png"
    },
    // {
    //     name: "sofa_geo",
    //     img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1376484/back.svg"
    // },
]

export const OptionsMenu = ({ activeOption, setActiveOption }) => {
    return (
        <div className={styles.options}>
            {options.map(({ name, img }, idx) => (
                <div
                    className={`${styles.option} ${activeOption === name ? "--is-active" : ""}`}
                    data-option={name}
                    onClick={() => setActiveOption(name)}
                    key={name}
                >
                    <img src={img} alt="" />
                </div>
            ))}
        </div>
    )
}