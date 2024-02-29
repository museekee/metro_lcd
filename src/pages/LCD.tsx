import stations from "../metroData/stations"
import bounds from "../metroData/bounds"
import { useParams } from "react-router-dom"
import Header from "../components/Header"
import BoundLCD from "../components/Bound"
import { useState } from "react"
import ArrivalLCD from "../components/Arrival"
import DoorLCD from "../components/Door"
import { Lines, ExpressType } from "../metroData/types"

/**
 * 
 * @param n 최고숫자
 * @returns 0이상 n미만의 정수
 */
const random = (n: number) => Math.floor(Math.random() * n)

const LCD = () => {
  const [nowLCD, setNowLCD] = useState(2)
  const [nowStationIdx, setNowStationIdx] = useState(43)
  const params = useParams()
  const line = params.line as Lines
  const bound = bounds[line][parseInt(params.bound!)]
  const expressType = parseInt(params.isExpress!) as ExpressType
  const before = bound.stations[nowStationIdx-1]
  const now = bound.stations[nowStationIdx]
  const lcd = [
    <BoundLCD line={line} bound={bound} expressType={expressType} />,
    <ArrivalLCD line={line} stationCode={bound.stations[nowStationIdx]} />,
    <DoorLCD line={line} stationCode={bound.stations[nowStationIdx]} door={random(2)} />,
  ]
  return (
    <div style={{display: "grid", gridTemplateRows: "auto 1fr", height: "100%"}}>
      <Header line={line} before={before} now={now} />
      {lcd[nowLCD]}
    </div>
  )
}

export default LCD