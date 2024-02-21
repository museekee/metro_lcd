import stations from "./../stations"
import bounds from "./../bounds"
import { useParams } from "react-router-dom"

const LCD = () => {
  const params = useParams()
  const line = params.line as Lines
  const bound = bounds[line][parseInt(params.bound!)]
  const isExpress = parseInt(params.isExpress!)
  console.log("호선", line)
  console.log("행선지", `${stations[line].stations[bound.start].name}-${stations[line].stations[bound.end].name}${isExpress == 0 ? "행" : isExpress == 1 ? "급행" : "특급"}`)
  return (
    <div>
      
    </div>
  )
}

export default LCD