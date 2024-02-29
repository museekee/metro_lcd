import styled from "styled-components"
import LineCircle from "./LineCircle"
import stations from "../metroData/stations"
import { ExpressType, Lines } from "../metroData/types"

const BoundLCD: React.FC<{
  line: Lines
  bound: {
    stations: string[]
    express_stations: string[]
  },
  expressType?: ExpressType
}> = ({line, bound, expressType}) => {
  expressType ??= 0 // 완행
  const Stage = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    padding-bottom: 150px;
  `
  const BoundTextGroup = styled.div`
    display: grid;
    grid-template-columns: 300px 1fr;
    grid-template-rows: 300px auto auto;
    align-items: center;
    column-gap: 30px;
  `
  const lastStationCode = bound.stations[bound.stations.length - 1]
  return (
    <Stage>
      <BoundTextGroup>
        <LineCircle line={line} size={300} color={stations[line].color} stationCode={lastStationCode} />
        <article>
          <span style={{fontSize: 200}}>{stations[line].stations[lastStationCode].name}행</span>
          <ExpressText expressType={expressType} lang="kr" />
        </article>
        <article style={{gridColumn: 2}}>
          <span style={{fontSize: 100}}>For {stations[line].stations[lastStationCode].name_en}</span>
          <ExpressText expressType={expressType} lang="en" />
        </article>
        <article style={{gridColumn: 2}}>
          <span style={{fontSize: 100, fontWeight: "bold"}}>{stations[line].stations[lastStationCode].name_cn}</span>
          <ExpressText style={{fontWeight: "bold"}} expressType={expressType} lang="cn" />
        </article>
      </BoundTextGroup>
    </Stage>
  )
}

const ExpressText = (props: React.HTMLAttributes<HTMLSpanElement> & {
  expressType: ExpressType
  lang: "kr" | "en" |"cn"
}) => {
  const Exp = styled.span`
    font-size: ${`${props.lang == "kr" ? 100 : 65}px`};
    color: #E23434;
  `
  const ExpLabel = {
    kr: ["", "급행", "특급"],
    en: ["", "Express", "Limited Express"],
    cn: ["", "快速", "特快"]
  }
  return (
    <Exp {...props}>{props.expressType != 0 ? ` (${ExpLabel[props.lang][props.expressType]})` : ""}</Exp>
  )
}

export default BoundLCD