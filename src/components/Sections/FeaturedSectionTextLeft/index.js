import React from 'react'
import './style.scss'
import { Spacer } from '../../Spacer'

export const FeaturedSectionTextLeft = ({
    listItem,
    headerText,
    descriptionText,
    image,
    color = 'yellow',
    imgDesktopHeight = 413,
    imgDesktopWidth = 621,
    mobileSpacerHeight = 50,
    imgStyle = {},
}) => {
    const styleMap = {
        yellow: ['yellowText', 'yellowLine'],
        red: ['redText', 'redLine'],
        blue: ['blueText', 'blueLine'],
        navy: ['darkBlueText', 'darkBlueLine'],
    }

    const imageStyle = {
        ...imgStyle,
        backgroundImage: `url(${image})`,
        backgroundSize: imgStyle.backgroundSize ? imgStyle.backgroundSize : `${imgDesktopWidth} ${imgDesktopHeight}`,
        height: imgDesktopHeight,
        width: imgDesktopWidth,
    }

    return (
        <div className="featured-section-left-wrapper">
            <div className="fs-wrapper feature-section">
                {/*02 - Understand how traffic really flows through your app*/}
                <div className="row">
                    <div className="section-banner-image" style={imageStyle} />
                    <div className="list-item number">
                        <h1 className={styleMap[color][0]} id="feature-header-01">
                            {listItem}
                        </h1>
                    </div>
                    <div className="col">
                        <h2 className="gosha fs-left-header-2">{headerText}</h2>
                        <br className="revHiddenBreak" />
                        <hr className={styleMap[color][1]} />
                        <br className="revHiddenBreak" />
                        <p className="fs-left-paragraph">{descriptionText}</p>
                    </div>
                </div>
            </div>
            <Spacer onlyMobile={true} height={mobileSpacerHeight} />
        </div>
    )
}
