import stations from "../metroData/stations"
import bounds from "../metroData/bounds"
import { useState } from "react"
import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const Select = () => {
  const [nowLine, setNowLine] = useState<Lines>("1호선")
  const [nowBound, setNowBound] = useState(0)
  const [isExpress, setIsExpress] = useState(0) // 0: 완행, 1: 급행
  const H1 = styled.h1`
    font-weight: normal;
    margin: 0;
    padding: 20px;
  `
  return (
    <>
      <H1>노선 선택</H1>
      <select defaultValue={nowLine} onChange={(e) => setNowLine(e.target.value as Lines)}>
        {
          Object.keys(stations).map((v, i) => <option key={i} value={v}>{v}</option>)
        }
      </select>
      <hr />
      <H1>행선지 선택</H1>
      <select onChange={(e) => {
        setNowBound(parseInt(e.target.value.split("/")[0]))
        setIsExpress(parseInt(e.target.value.split("/")[1]))
      }}>
        {
          bounds[nowLine].map((item, i) => {
            const startStationName = stations[nowLine].stations[item.stations[0]].name
            const endStationName = stations[nowLine].stations[item.stations[item.stations.length-1]].name
            if (item.express_stations.length !== 0) // 급행 있음
              if (item.stations.length !== 0) // 완행도 있음
                return (
                  <React.Fragment key={i}>
                    <option value={`${i}/0`}>{startStationName}-{endStationName}행</option>
                    <option value={`${i}/1`}>{startStationName}-{endStationName}급행</option>
                  </React.Fragment>
                )
              else // 완행은 없음(급행만)
                return (
                  <option value={`${i}/1`} key={i}>{startStationName}-{endStationName}급행</option>
                )
            return ( // 완행만 있음
              <option value={`${i}/0`} key={i}>{startStationName}-{endStationName}행</option>
            )
          })
        }
      </select>
      <hr />
      <Link to={`/lcd/${nowLine}/${nowBound}/${isExpress}`}>LCD 실행</Link>
    </>
  )
}

export default Select