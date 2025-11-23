import React from "react"
import { IconType } from "react-icons"

export const IconWrap = ({Icon, style = {}}: {Icon: IconType, style?: React.CSSProperties}) => {

    return (
        <Icon style={{...style}}/>
    )
}