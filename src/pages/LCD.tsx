import stations from "../metroData/stations"
import bounds from "../metroData/bounds"
import { useParams } from "react-router-dom"
import Header from "../components/Header"
import BoundLCD from "../components/Bound"
import { useState } from "react"
import Arrival from "../components/Arrival"

const LCD = () => {
  const [nowLCD, setNowLCD] = useState(1)
  const [nowStationIdx, setNowStationIdx] = useState(10)
  const params = useParams()
  const line = params.line as Lines
  const bound = bounds[line][parseInt(params.bound!)]
  const expressType = parseInt(params.isExpress!) as ExpressType
  const before = bound.stations[nowStationIdx-1]
  const now = bound.stations[nowStationIdx]
  const lcd = [
    <BoundLCD line={line} bound={bound} expressType={expressType} />,
    <Arrival line={line} stationCode={bound.stations[nowStationIdx]} />
  ]
  return (
    <div style={{display: "grid", gridTemplateRows: "auto 1fr", height: "100%"}}>
      <Header line={line} before={before} now={now} />
      {lcd[nowLCD]}
    </div>
  )
}

export default LCD