import { useEffect, useRef } from "react"
import Car from "./Car"
import styled from "styled-components"
import ArrivalStation from "./ArrivalStation"
import { Lines } from "../metroData/types"

/**
 * 
 * @param n 최고숫자
 * @returns 0이상 n미만의 정수
 */
// const random = (n: number) => Math.floor(Math.random() * n)

const ArrivalLCD = ({
  line, stationCode
}: {
  line: Lines, stationCode: string
}) => {
  // const maxCar = 10
  const station = useRef<HTMLDivElement>(null)
  const cars = useRef<HTMLDivElement>(null)
  useEffect(() => {
    setTimeout(() => {
      station.current?.style.setProperty("transform", "scaleY(1)")
      setTimeout(() => {
        cars.current?.style.setProperty("transform", "scaleY(1)")
      }, 500)
    }, 10)
  }, [])
  const Stage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 150px;
  `

  const Cars = styled.div`
    display: flex;
    gap: 15px;
    justify-content: center;
    transition: 0.5s transform;
    transform: scaleY(0);
    transform-origin: bottom;
  `

  // const thisCar = random(maxCar)
  return (
    <Stage>
      <ArrivalStation line={line} stationCode={stationCode} ref={station} />
      <Cars ref={cars}>
        <Car number={1} congestion={0}/>
        <Car number={2} congestion={1}/>
        <Car number={3} congestion={1}/>
        <Car number={4} congestion={2}/>
        <Car number={5} congestion={3}/>
        <Car number={6} congestion={3} isThisCar/>
        <Car number={7} congestion={3}/>
        <Car number={8} congestion={1}/>
        <Car number={9} congestion={1}/>
        <Car number={10} congestion={0}/>
        {/*
          new Array(maxCar).fill(0).map((v, i) => <Car
            key={i}
            number={i+1}
            congestion={random(4) as 0|1|2|3}
            isThisCar={i === thisCar}
          />)
        */}
      </Cars>
    </Stage>
  )
}

export default ArrivalLCD