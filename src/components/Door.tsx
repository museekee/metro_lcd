import { useEffect, useRef } from "react"
import styled from "styled-components"
import ArrivalStation from "./ArrivalStation"
import LeftDoorImg from "./../images/Door_Left.svg"
import RightDoorImg from "./../images/Door_Right.svg"

const DoorLCD = ({
  line, stationCode
}: {
  line: Lines, stationCode: string
}) => {
  const station = useRef<HTMLDivElement>(null)
  useEffect(() => {
    station.current?.style.setProperty("transition", "none")
    station.current?.style.setProperty("transform", "scaleY(1)")
  }, [])

  const Stage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 150px;
  `

  return (
    <Stage>
      <ArrivalStation line={line} stationCode={stationCode} ref={station} />
    </Stage>
  )
}

export default DoorLCD