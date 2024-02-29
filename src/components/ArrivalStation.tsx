import styled from "styled-components"
import LineCircle from "./LineCircle"
import stations from "../metroData/stations"
import { forwardRef } from "react"
import { Lines } from "../metroData/types"

const ArrivalStation = (props: React.HTMLAttributes<HTMLDivElement> & {
  line: Lines
  stationCode: string,
}, ref: React.ForwardedRef<any>) => {
  const Station = styled.div`
    display: grid;
    grid-template-columns: 150px auto;
    grid-template-rows: 150px auto;
    column-gap: 25px;
    transition: 0.5s transform;
    transform: scaleY(0);
    transform-origin: top;
  `
  console.log("ref", ref)
  return (
    <Station ref={ref}>
      <LineCircle color={stations[props.line].color} size={150} stationCode={props.stationCode}/>
      <span style={{fontSize: 150}}>{stations[props.line].stations[props.stationCode].name}</span>
      <span style={{fontSize: 75, gridColumn: 2}}>{stations[props.line].stations[props.stationCode].name_en}</span>
    </Station>
  )
}

export default forwardRef(ArrivalStation)