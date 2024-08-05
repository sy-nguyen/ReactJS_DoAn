import React from 'react'
import ScrollToTop from 'react-scroll-to-top';
import './scrollUp.css'

export default function ScrollUp() {
    const svgP = "M 240.971 130.524 l 194.343 194.343 c 9.373 9.373 9.373 24.569 0 33.941 l -22.667 22.667 c -9.357 9.357 -24.522 9.375 -33.901 0.04 L 224 227.495 L 69.255 381.516 c -9.379 9.335 -24.544 9.317 -33.901 -0.04 l -22.667 -22.667 c -9.373 -9.373 -9.373 -24.569 0 -33.941 L 207.03 130.525 c 9.372 -9.373 24.568 -9.373 33.941 -0.001 Z"
    return(
    <div>
        <ScrollToTop color='#fff' viewBox="0 0 448 512" svgPath = {svgP} height="1em" width='1em' className="custom-scroll-to-top"/>
    </div>
  )
}
