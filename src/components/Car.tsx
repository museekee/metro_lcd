import styled from "styled-components"

const Car = ({
  number,
  congestion
}: {
  number: number
  congestion: 0|1|2|3
}) => {
  const congestionData = [
    { label: "여유", color: "#3599FF" },
    { label: "보통", color: "#35FF35" },
    { label: "주의", color: "#FFF222" },
    { label: "혼잡", color: "#FF8080" }
  ]
  const Mother = styled.article`
    display: grid;
    width: 150px;
    grid-template-rows: auto 100px;
    gap: 10px;
    height: fit-content;
  `
  const Text = styled.span`
    font-size: 50px;
  `
  const CarBox = styled.div`
    display: flex;
    border: none;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    background-color: ${congestionData[congestion].color};
    align-items: center;
    justify-content: center;
  `
  return (
    <Mother>
      <Text>{number}</Text>
      <CarBox>
        <Text>
          {congestionData[congestion].label}
        </Text>
      </CarBox>
    </Mother>
  )
}

export default Car