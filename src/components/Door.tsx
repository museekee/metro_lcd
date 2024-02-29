import { useEffect, useRef } from "react"
import styled from "styled-components"
import ArrivalStation from "./ArrivalStation"
import LeftDoorImg from "./../images/Door_Left.svg"
import RightDoorImg from "./../images/Door_Right.svg"
import { Lines } from "../metroData/types"

enum Door {
  Left,
  Right
}

const DoorLCD = (props: {
  line: Lines, stationCode: string, door?: Door
}) => {
  const { line, stationCode, door = Door.Left } = props;
  const station = useRef<HTMLDivElement>(null)
  useEffect(() => {
    station.current?.style.setProperty("transition", "none")
    station.current?.style.setProperty("transform", "scaleY(1)")
  }, [])

  const doors = [LeftDoorImg, RightDoorImg]
  const Stage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `
  const DoorDiv = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    gap: 60px;
    flex-direction: ${door === Door.Left ? "row" : "row-reverse"};
  `

  return (
    <Stage>
      <ArrivalStation line={line} stationCode={stationCode} ref={station} />
      <DoorDiv>
        <span style={{fontSize: 125}}>내리실 문</span>
        <img style={{height: 350}} src={doors[door]} alt={door === Door.Left ? "왼쪽" : "오른쪽"} />
      </DoorDiv>
    </Stage>
  )
}

export default DoorLCD