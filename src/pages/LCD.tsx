import stations from "./../stations"
import bounds from "./../bounds"
import { useParams } from "react-router-dom"
import Header from "../components/Header"

const LCD = () => {
  const params = useParams()
  const line = params.line as Lines
  const bound = bounds[line][parseInt(params.bound!)]
  const isExpress = parseInt(params.isExpress!)
  const startStation = bound.stations[0]
  const endStation = bound.stations[bound.stations.length-1]
  const startStationText = stations[line].stations[startStation].name
  const endStationText = stations[line].stations[endStation].name
  const expressText = isExpress === 0 ? "행" : isExpress === 1 ? "급행" : "특급"
  console.log("호선", line)
  console.log("행선지", `${startStationText}-${endStationText}${expressText}`)
  return (
    <div>
      <Header line={line} bound={bound} />
    </div>
  )
}

export default LCD