import styled from "styled-components"
import stations from "../metroData/stations"
import { normal } from "color-blend"

const ProgressBar: React.FC<{
  line: Lines
  maxValue: number
  value: number
}> = ({line, maxValue, value}) => {
  console.log(toWhite50Filter(stations[line].color))
  const ProgressBar = styled.div`
    width: 100%;
    height: 15px;
    background-color: ${`${toWhite50Filter(stations[line].color)}`};
    border-radius:12px;
    font-weight: 600;
    margin-top: 20px;
    overflow: hidden;
  `;
  const Progress = styled.div`
    width: ${value*100 / maxValue}%; 
    height: 15px;
    padding: 0;
    text-align: center;
    background-color: ${`${stations[line].color}`};
    color: #111;
  `
  return (
    <ProgressBar>
      <Progress />
    </ProgressBar>
  )
}

const toWhite50Filter = (color: string) => {
  const f = (p: number) => Math.round(0.5 * parseInt(color.slice(p, p + 2), 16) + 0.5 * 255).toString(16).padStart(2, '0');
  return `#${f(1)}${f(3)}${f(5)}80`;
}


export default ProgressBar