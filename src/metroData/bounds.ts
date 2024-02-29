import type { Bound, Lines } from "./types"

const splitArray = <T>(arr: T[], value: T): T[][] => {
  const index = arr.indexOf(value)
  return [arr.slice(0, index), arr.slice(index + 1)]
}
const 구로경부 = [
  'P142', 'P143', 'P144', 'P145', 'P146', 'P147', 'P148', 'P149', 'P150', 'P151',
  'P152', 'P153', 'P154', 'P155', 'P156', 'P157', 'P158', 'P159', 'P160', 'P161',
  'P162', 'P163', 'P164', 'P165', 'P166', 'P167', 'P168', 'P169', 'P170', 'P171',
  'P172', 'P173', 'P174', 'P176', 'P177'
]
const 구로경인 = [
  '142', '143', '144', '145', '146', '147', '148', '149', '150', '151',
  '152', '153', '154', '155', '156', '157', '158', '159', '160', '161'
]
const 구로경원 = [
  '100-3', '100-2', '100-1', '100', '101', '102', '103', '104', '105', '106',
  '107', '108', '109', '110', '111', '112', '113', '114', '115', '116',
  '117', '118', '119', '120', '121', '122', '123', '124', '125', '126',
  '127', '128', '129', '130', '131', '132', '133', '134', '135', '136',
  '137', '138', '139', '140'
]

const bounds: Record<Lines, Bound[]> = {
  "1호선": [
    {
      stations: [...구로경부.reverse(), '141', ...splitArray(구로경원, '124')[1].reverse(), '124'],
      express_stations: [...구로경부.reverse(), '141', ...splitArray(구로경원, '124')[1].reverse(), '124'].filter(v => ![
        "P164", "P162", "P161", "P159", "P158", "P156", "P154", "P151", "P150", "P148", "P146", "P145"
      ].includes(v)),
      branch: {
        "P157": ["P157-1"],
        "P144": ["P144-1"],
        "141": ["142"]
      }
    }
  ],
  "2호선": [],
  "3호선": [],
  "4호선": [],
  "5호선": [],
  "6호선": [],
  "7호선": [],
  "8호선": [],
  "9호선": [],
  "경강선": [],
  "경의중앙선": [
    {
      stations: ["K334", "K316", "K315", "K314", "K313", "K312"],
      express_stations: [],
      branch: {}
    }
  ],
  "경춘선": [],
  "공항철도": [],
  "김포골드라인": [],
  "서해선": [],
  "수인분당선": [],
  "신림선": [],
  "신분당선": [],
  "용인에버라인": [],
  "우이신설선": [],
  "의정부경전철": [],
  "인천2호선": [],
  "인천1호선": []
}

export default bounds