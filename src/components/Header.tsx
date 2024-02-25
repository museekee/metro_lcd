import React from "react"
import styled from "styled-components"
import LineCircle from "./LineCircle"
import stations from "../metroData/stations"
import ProgressBar from "./ProgressBar"

const Header: React.FC<{
  line: Lines,
  before: string,
  now: string,
}> = ({line, before, now}) => {
  const HeaderElem = styled.header`
    display: grid;
    grid-template-columns: 200px 1fr;
    height: 250px;
    padding: 25px;
    gap: 75px;
    background-color: #ffffff;
    align-items: center;
  `
  return (
    <HeaderElem>
      <LineCircle size={200} line={line} color={stations[line].color} />
      <TopDistance line={line} before={before} now={now} />
    </HeaderElem>
  )
}

const TopDistance: React.FC<{
  line: Lines
  before: string
  now: string
}> = ({line, before, now}) => {
  const Div = styled.div`
    display: grid;
    width: 100%;
    height: 100%;
    align-items: center;
    grid-template-columns: auto 1fr auto;
    gap: 50px;
  `
  const bfrst = stations[line].stations[before]
  const nowst = stations[line].stations[now]
  return (
    <Div>
      <div style={{display: "flex", flexDirection: "column"}}>
        <span style={{fontSize: 70}}>{bfrst.name}</span>
        <span style={{fontSize: 30}}>{bfrst.name_en}</span>
      </div>
      <ProgressBar line={line} maxValue={100} value={10} />
      <div style={{display: "flex", flexDirection: "column"}}>
        <span style={{fontSize: 125}}>{nowst.name}</span>
        <span style={{fontSize: 50}}>{nowst.name_en}</span>
      </div>
    </Div>
  )
}

export default Header