import React from "react";
import {
    TopBannerBgStyled,
    TopBannerColumn,
    TopBannerContainerStyled,
    TopBannerDescription,
    TopBannerRow
} from "./TopBannerStyled";
import BannerSlider from "../BannerSlider/BannerSlider";
import bannerBg from '../../imges/svg/wave-haikei.svg'

const TopBanner = () => {

    return (
        <>
            <TopBannerContainerStyled bg={bannerBg}>

                <TopBannerBgStyled>
                    <TopBannerRow style={{zIndex: 1}}>
                        <TopBannerColumn>
                            <BannerSlider/>
                        </TopBannerColumn>
                        <TopBannerColumn>
                            <TopBannerDescription>
                                <div>
                                    <h1>Vivian Zamkovaya</h1>
                                    <ul>
                                        <li>6 y.o. 134 cm</li>
                                        <li>128 cm</li>
                                        <li>Russia, Moscow/Kaliningrad</li>
                                    </ul>
                                </div>
                            </TopBannerDescription>

                        </TopBannerColumn>
                    </TopBannerRow>
                </TopBannerBgStyled>
            </TopBannerContainerStyled>
        </>
    )
}

// Напиши скрипт для определения разрешения экрана

export default TopBanner;