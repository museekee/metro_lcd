import styled from "styled-components"
import stations from "../metroData/stations"
import { Lines } from "../metroData/types"
import { forwardRef } from "react"

const LineCircle = (props: React.HTMLAttributes<HTMLDivElement> & {
  line?: Lines
  color: string
  stationCode?: string
  size?: number,
  overrideLabel?: string
}, ref: React.ForwardedRef<any>) => {
  const variableFontSizeCalc = (fontSize: number) => (fontSize / 200) * (props.size ?? 200) // 200px 기준
  const Circle = styled.div`
    display: grid;
    background-color: ${props => props.color};
    border: none;
    border-radius: 50%;
    aspect-ratio: 1;
    align-items: center;
    justify-content: center;
    font-size: ${`${variableFontSizeCalc((props.line ? stations[props.line].fontSize : null) ?? 125)}px`}; // 125px기본 (원이 200px일때)
    color: #ffffff;
    align-content: center;
    width: ${`${props.size ?? 200}px`};
    white-space: pre-line;
  `
  if (props.line !== undefined && props.stationCode)
    return (
      <Circle {...props} ref={ref}>
        <div style={{fontSize: variableFontSizeCalc(30)}}>{props.stationCode}</div>
        <div style={{fontSize: variableFontSizeCalc(stations[props.line].fontSize ? stations[props.line].fontSize! * 0.8 : 100)}}>{props.overrideLabel ?? stations[props.line].icon}</div>
      </Circle>
    )
  else if (props.line)
    return (
      <Circle {...props} ref={ref}>
        {props.overrideLabel ?? stations[props.line].icon}
      </Circle>
    )
  else if (props.stationCode)
    return (
      <Circle {...props} ref={ref}>
        <div style={{fontSize: variableFontSizeCalc(60), fontFamily: "Korail_Condensed"}}>{props.overrideLabel ?? props.stationCode}</div>
      </Circle>
    )
  else
    return (
      <Circle style={{backgroundColor: "#FF8080"}} ref={ref}>E</Circle>
    )
}

export default forwardRef(LineCircle)