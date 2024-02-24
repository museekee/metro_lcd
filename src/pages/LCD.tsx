import stations from "../metroData/stations"
import bounds from "../metroData/bounds"
import { useParams } from "react-router-dom"
import Header from "../components/Header"
import BoundLCD from "../components/Bound"

const LCD = () => {
  const params = useParams()
  const line = params.line as Lines
  const bound = bounds[line][parseInt(params.bound!)]
  const expressType = parseInt(params.isExpress!) as ExpressType
  const startStation = bound.stations[0]
  const endStation = bound.stations[bound.stations.length-1]
  const startStationText = stations[line].stations[startStation].name
  const endStationText = stations[line].stations[endStation].name
  const expressText = expressType === 0 ? "행" : expressType === 1 ? "급행" : "특급"
  // console.log("호선", line)
  // console.log("행선지", `${startStationText}-${endStationText}${expressText}`)
  let allStations: Record<string, {line: Lines, stationCode: string}[]> = {};
  for (const line in stations) {
    for (const stationCode in stations[line as Lines].stations) {
      let stationName = stations[line as Lines].stations[stationCode].name;
      if (!allStations[stationName]) {
        allStations[stationName] = [];
      }
      allStations[stationName].push({
        line: line as Lines,
        stationCode: stationCode
      })
    }
  }
  console.log(JSON.stringify(allStations, null, 2))
  return (
    <div style={{display: "grid", gridTemplateRows: "auto 1fr", height: "100%"}}>
      <Header line={line} bound={bound} />
      <BoundLCD line={line} bound={bound} expressType={expressType} />
    </div>
  )
}

export default LCD