import React, { useEffect, useRef, useCallback } from "react";
import { COLORS } from "../constants/colors";
import styles from '../../../../styles/product/3dProductview.module.css'; //"../../../styles/product/3dProductview.module.css";
import { useSelector } from "react-redux";
const ColorsSlider = ({ selectSwatch, activeTexture, setActiveTexture }) => {
    console.log(activeTexture, "activeTexture");
    const productById = useSelector((state) => state?.ProductDetailsPage?.productsById);
    console.log(productById, "productById");
    const slider = useRef(),
        sliderItems = useRef();

    let posX1 = 0,
        posX2 = 0,
        posInitial,
        difference;

    const dragStart = (e) => {
        const items = sliderItems.current;
        posInitial = items.offsetLeft;
        difference = sliderItems.current.offsetWidth - slider.current.offsetWidth;
        difference = difference * -1;

        if (e.type === 'touchstart') {
            posX1 = e.touches[0].clientX;
        } else {
            posX1 = e.clientX;
            // document.addEventListener("onMouseUp",dragEnd);
            // document.addEventListener("onMouseMove",dragAction);
            document.onmouseup = dragEnd;
            document.onmousemove = dragAction;
        }
    }

    const dragAction = (e) => {
        const items = sliderItems.current;
        if (e.type === 'touchmove') {
            posX2 = posX1 - e.touches[0].clientX;
            posX1 = e.touches[0].clientX;
        } else {
            posX2 = posX1 - e.clientX;
            posX1 = e.clientX;
        }

        if (items.offsetLeft - posX2 <= 0 && items.offsetLeft - posX2 >= difference) {
            items.style.left = items.offsetLeft - posX2 + "px";
        }
    }

    const dragEnd = (e) => {
        const threshold = 20;
        let posFinal;

        const items = sliderItems.current;
        posFinal = items.offsetLeft;
        if (posFinal - posInitial < -threshold) {

        } else if (posFinal - posInitial > threshold) {

        } else {
            items.style.left = posInitial + "px";
        }
        // document.removeEventListener("onMouseUp", dragEnd)
        // document.removeEventListener("onMouseMove", dragAction)
        document.onmouseup = null;
        document.onmousemove = null;
    }

    return (
        <div id="js-tray" className={styles.colslider} ref={slider}>
            <div
                id="js-tray-slide"
                className={styles.tray__slide}
                ref={sliderItems}
                onMouseDown={dragStart}
                onTouchStart={dragStart}
                onTouchMove={dragAction}
                onTouchEnd={dragEnd}
            >
                {activeTexture?.colors?.map((item, index) => (
                    <div
                        key={index}
                        className={styles.tray__swatch}
                        style={{
                            background: `url(http://3.0.78.116:8080${item?.color.url})`
                            // `${color.color}`
                        }}
                        data-key={index}
                        onClick={() => selectSwatch(item?.color)}
                    />
                ))}
            </div>
        </div>
    )
}

export default ColorsSlider;
