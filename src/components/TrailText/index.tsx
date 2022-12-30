import { a, animated, useTrail } from "@react-spring/web"
import React from "react"
import styled from "styled-components"

interface TrailProps {
    open?: boolean
    children?: any
}

export const TrailText: React.FC<TrailProps> = ({ open, children }) => {
    const items = React.Children.toArray(children)
    const trail = useTrail(items.length, {
        config: { mass: 5, tension: 2000, friction: 200 },
        opacity: open ? 1 : 0,
        x: open ? 0 : 20,
        height: open ? 80 : 0,
        from: { opacity: 0, x: 20, height: 0 },
    })

    return (
        <div style={{ marginLeft: '10rem' }}>
            {trail.map(({ height, ...style }, index) => (
                <TrailsText key={index} style={style}>
                    <a.div style={{ height }}>{items[index]}</a.div>
                </TrailsText>
            ))}
        </div>
    )
}

const TrailsText = styled(animated.a)`
  position: relative;
  width: 100%;
  height: 80px;
  line-height: 80px;
  color: black;
  font-size: 6em;
  font-weight: 800;
  letter-spacing: -0.05em;
  will-change: transform, opacity;
  overflow: hidden;

    div {
        padding-right: 0.05em;
        overflow: hidden;
    }
  `