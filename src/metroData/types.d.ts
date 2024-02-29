export interface Bound {
  stations: string[]
  express_stations: string[],
  branch: Record<string, string[]>
}

export type Lines =
  "1호선"|
  "2호선"|
  "3호선"|
  "4호선"|
  "5호선"|
  "6호선"|
  "7호선"|
  "8호선"|
  "9호선"|
  "경강선"|
  "경의중앙선"|
  "경춘선"|
  "공항철도"|
  "김포골드라인"|
  "서해선"|
  "수인분당선"|
  "신림선"|
  "신분당선"|
  "용인에버라인"|
  "우이신설선"|
  "의정부경전철"|
  "인천2호선"|
  "인천1호선"

export enum ExpressType {
  allStop = 0,
  express = 1,
  limitedExpress = 2
}