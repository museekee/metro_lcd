import stations from "./../stations"
import bounds from "./../bounds"
import { useState } from "react"
import React from "react"
import { Link } from "react-router-dom"

const Select = () => {
  const [nowLine, setNowLine] = useState<Lines>("1호선")
  const [nowBound, setNowBound] = useState(0)
  const [isExpress, setIsExpress] = useState(0) // 0: 완행, 1: 급행
  return (
    <>
      <h1>노선 선택</h1>
      <select defaultValue={nowLine} onChange={(e) => setNowLine(e.target.value as Lines)}>
        {
          Object.keys(stations).map((v, i) => <option key={i} value={v}>{v}</option>)
        }
      </select>
      <hr />
      <h1>행선지 선택</h1>
      <select onChange={(e) => {
        setNowBound(parseInt(e.target.value.split("/")[0]))
        setIsExpress(parseInt(e.target.value.split("/")[1]))
      }}>
        {
          bounds[nowLine].map((item, i) => {
            const startStationName = stations[nowLine].stations[item.start].name
            const endStationName = stations[nowLine].stations[item.end].name
            if (item.express_pass.length != 0)
              return (
                <React.Fragment key={i}>
                  <option value={`${i}/0`}>{startStationName}-{endStationName}행</option>
                  <option value={`${i}/1`}>{startStationName}-{endStationName}급행</option>
                </React.Fragment>
              )
            return (
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