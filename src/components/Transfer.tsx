import { useRef, useEffect } from "react"
import styled from "styled-components"
import Dtransfers from "../metroData/transfers"
import { Bound, Lines } from "../metroData/types"
import ArrivalStation from "./ArrivalStation"
import LineCircle from "./LineCircle"
import stations from "../metroData/stations"


const TransferLCD = ({
  line, stationCode, bound
}: {
  line: Lines, stationCode: string, bound: Bound
}) => {
  const station = useRef<HTMLDivElement>(null)
  const transfer = useRef<HTMLDivElement[]>([])
  useEffect(() => {
    station.current?.style.setProperty("transition", "none")
    station.current?.style.setProperty("transform", "scaleY(1)")
    setTimeout(() => {
      let i = 0
      for (const item of transfer.current) {
        setTimeout(() => {
          item?.style.setProperty("transform", "scaleY(1)")
        }, 250*i)
        i++
      }
    }, 10)
  }, [])
  
  const Stage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `

  const Transfers = styled.div`
    display: flex;
    gap: 25px;
    height: 100%;
    align-items: center;
  `

  const nowStationName = stations[line].stations[stationCode].name
  
  let branches: string[] = []
  let transfers: {line: Lines, stationCode: string}[] = []
  
  if (bound.branch[stationCode] && bound.branch[stationCode].length !== 0)
    branches.push(...bound.branch[stationCode])
  if (Dtransfers[nowStationName].length > 1)
    transfers.push(...(Dtransfers[nowStationName].filter(v => v.line !== line)))

  return (
    <Stage>
      <ArrivalStation line={line} stationCode={stationCode} ref={station} />
      <Transfers>
        {
          branches.map((v, i) => {
            return <LineCircle
              key={i}
              line={line}
              style={{
                transition: "0.5s transform",
                transform: "scaleY(0)",
                transformOrigin: "bottom",
                fontSize: 75,
                padding: "25px"
              }}
              ref={(el) => {transfer.current[i] = el}}
              size={300}
              overrideLabel={stations[line].stations[v].name}
              color={stations[line].color} />
          })
        }
        {
          transfers.map((item, i) => {
            return <LineCircle
              key={i}
              line={item.line}
              style={{
                transition: "0.5s transform",
                transform: "scaleY(0)",
                transformOrigin: "bottom"
              }}
              ref={(el) => {transfer.current[i+branches.length] = el}}
              size={300}
              color={stations[item.line].color} />
          })
        }
      </Transfers>
    </Stage>
  )  
}

export default TransferLCD