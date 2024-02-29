/*
import stations from "./stations"
let allStations: Record<string, {line: Lines, stationCode: string}[]> = {};
for (const line in stations) {
  for (const stationCode in stations[line as Lines].stations) {
    let stationName = stations[line as Lines].stations[stationCode].name;
    if (!allStations[stationName]) {
      allStations[stationName] = [];
    }
    allStations[stationName].push({
      line: line as Lines,
      stationCode: stationCode
    })
  }
}
*/

import { Lines } from "./types"

const transfers: Record<string, {line: Lines, stationCode: string}[]> = {
  "소요산": [
    {
      line: "1호선",
      stationCode: "100"
    }
  ],
  "동두천": [
    {
      line: "1호선",
      stationCode: "101"
    }
  ],
  "보산": [
    {
      line: "1호선",
      stationCode: "102"
    }
  ],
  "동두천중앙": [
    {
      line: "1호선",
      stationCode: "103"
    }
  ],
  "지행": [
    {
      line: "1호선",
      stationCode: "104"
    }
  ],
  "덕정": [
    {
      line: "1호선",
      stationCode: "105"
    }
  ],
  "덕계": [
    {
      line: "1호선",
      stationCode: "106"
    }
  ],
  "양주": [
    {
      line: "1호선",
      stationCode: "107"
    }
  ],
  "녹양": [
    {
      line: "1호선",
      stationCode: "108"
    }
  ],
  "가능": [
    {
      line: "1호선",
      stationCode: "109"
    }
  ],
  "의정부": [
    {
      line: "1호선",
      stationCode: "110"
    }
  ],
  "회룡": [
    {
      line: "1호선",
      stationCode: "111"
    },
    {
      line: "의정부경전철",
      stationCode: "U111"
    }
  ],
  "망월사": [
    {
      line: "1호선",
      stationCode: "112"
    }
  ],
  "도봉산": [
    {
      line: "1호선",
      stationCode: "113"
    },
    {
      line: "7호선",
      stationCode: "710"
    }
  ],
  "도봉": [
    {
      line: "1호선",
      stationCode: "114"
    }
  ],
  "방학": [
    {
      line: "1호선",
      stationCode: "115"
    }
  ],
  "창동": [
    {
      line: "1호선",
      stationCode: "116"
    },
    {
      line: "4호선",
      stationCode: "412"
    }
  ],
  "녹천": [
    {
      line: "1호선",
      stationCode: "117"
    }
  ],
  "월계": [
    {
      line: "1호선",
      stationCode: "118"
    }
  ],
  "광운대": [
    {
      line: "1호선",
      stationCode: "119"
    },
    {
      line: "경춘선",
      stationCode: "P116"
    }
  ],
  "석계": [
    {
      line: "1호선",
      stationCode: "120"
    },
    {
      line: "6호선",
      stationCode: "644"
    }
  ],
  "신이문": [
    {
      line: "1호선",
      stationCode: "121"
    }
  ],
  "외대앞": [
    {
      line: "1호선",
      stationCode: "122"
    }
  ],
  "회기": [
    {
      line: "1호선",
      stationCode: "123"
    },
    {
      line: "경의중앙선",
      stationCode: "K118"
    },
    {
      line: "경춘선",
      stationCode: "P118"
    }
  ],
  "청량리": [
    {
      line: "1호선",
      stationCode: "124"
    },
    {
      line: "경의중앙선",
      stationCode: "K117"
    },
    {
      line: "경춘선",
      stationCode: "P117"
    },
    {
      line: "수인분당선",
      stationCode: "K209"
    }
  ],
  "제기동": [
    {
      line: "1호선",
      stationCode: "125"
    }
  ],
  "신설동": [
    {
      line: "1호선",
      stationCode: "126"
    },
    {
      line: "2호선",
      stationCode: "211-4"
    },
    {
      line: "우이신설선",
      stationCode: "953"
    }
  ],
  "동묘앞": [
    {
      line: "1호선",
      stationCode: "127"
    },
    {
      line: "6호선",
      stationCode: "636"
    }
  ],
  "동대문": [
    {
      line: "1호선",
      stationCode: "128"
    },
    {
      line: "4호선",
      stationCode: "421"
    }
  ],
  "종로5가": [
    {
      line: "1호선",
      stationCode: "129"
    }
  ],
  "종로3가": [
    {
      line: "1호선",
      stationCode: "130"
    },
    {
      line: "3호선",
      stationCode: "329"
    },
    {
      line: "5호선",
      stationCode: "534"
    }
  ],
  "종각": [
    {
      line: "1호선",
      stationCode: "131"
    }
  ],
  "시청": [
    {
      line: "1호선",
      stationCode: "132"
    },
    {
      line: "2호선",
      stationCode: "201"
    }
  ],
  "서울역": [
    {
      line: "1호선",
      stationCode: "133"
    },
    {
      line: "4호선",
      stationCode: "426"
    },
    {
      line: "경의중앙선",
      stationCode: "P313"
    },
    {
      line: "공항철도",
      stationCode: "A01"
    }
  ],
  "남영": [
    {
      line: "1호선",
      stationCode: "134"
    }
  ],
  "용산": [
    {
      line: "1호선",
      stationCode: "135"
    },
    {
      line: "경의중앙선",
      stationCode: "K110"
    }
  ],
  "노량진": [
    {
      line: "1호선",
      stationCode: "136"
    },
    {
      line: "9호선",
      stationCode: "917"
    }
  ],
  "대방": [
    {
      line: "1호선",
      stationCode: "137"
    },
    {
      line: "신림선",
      stationCode: "S402"
    }
  ],
  "신길": [
    {
      line: "1호선",
      stationCode: "138"
    },
    {
      line: "5호선",
      stationCode: "525"
    }
  ],
  "영등포": [
    {
      line: "1호선",
      stationCode: "139"
    }
  ],
  "신도림": [
    {
      line: "1호선",
      stationCode: "140"
    },
    {
      line: "2호선",
      stationCode: "234"
    }
  ],
  "구로": [
    {
      line: "1호선",
      stationCode: "141"
    }
  ],
  "구일": [
    {
      line: "1호선",
      stationCode: "142"
    }
  ],
  "개봉": [
    {
      line: "1호선",
      stationCode: "143"
    }
  ],
  "오류동": [
    {
      line: "1호선",
      stationCode: "144"
    }
  ],
  "온수": [
    {
      line: "1호선",
      stationCode: "145"
    },
    {
      line: "7호선",
      stationCode: "750"
    }
  ],
  "역곡": [
    {
      line: "1호선",
      stationCode: "146"
    }
  ],
  "소사": [
    {
      line: "1호선",
      stationCode: "147"
    },
    {
      line: "서해선",
      stationCode: "841"
    }
  ],
  "부천": [
    {
      line: "1호선",
      stationCode: "148"
    }
  ],
  "중동": [
    {
      line: "1호선",
      stationCode: "149"
    }
  ],
  "송내": [
    {
      line: "1호선",
      stationCode: "150"
    }
  ],
  "부개": [
    {
      line: "1호선",
      stationCode: "151"
    }
  ],
  "부평": [
    {
      line: "1호선",
      stationCode: "152"
    },
    {
      line: "인천1호선",
      stationCode: "I120"
    }
  ],
  "백운": [
    {
      line: "1호선",
      stationCode: "153"
    }
  ],
  "동암": [
    {
      line: "1호선",
      stationCode: "154"
    }
  ],
  "간석": [
    {
      line: "1호선",
      stationCode: "155"
    }
  ],
  "주안": [
    {
      line: "1호선",
      stationCode: "156"
    },
    {
      line: "인천2호선",
      stationCode: "I218"
    }
  ],
  "도화": [
    {
      line: "1호선",
      stationCode: "157"
    }
  ],
  "제물포": [
    {
      line: "1호선",
      stationCode: "158"
    }
  ],
  "도원": [
    {
      line: "1호선",
      stationCode: "159"
    }
  ],
  "동인천": [
    {
      line: "1호선",
      stationCode: "160"
    }
  ],
  "인천": [
    {
      line: "1호선",
      stationCode: "161"
    },
    {
      line: "수인분당선",
      stationCode: "K272"
    }
  ],
  "연천": [
    {
      line: "1호선",
      stationCode: "100-3"
    }
  ],
  "전곡": [
    {
      line: "1호선",
      stationCode: "100-2"
    }
  ],
  "청산": [
    {
      line: "1호선",
      stationCode: "100-1"
    }
  ],
  "병점": [
    {
      line: "1호선",
      stationCode: "P157"
    }
  ],
  "세류": [
    {
      line: "1호선",
      stationCode: "P156"
    }
  ],
  "수원": [
    {
      line: "1호선",
      stationCode: "P155"
    },
    {
      line: "수인분당선",
      stationCode: "K245"
    }
  ],
  "아산": [
    {
      line: "1호선",
      stationCode: "P172"
    }
  ],
  "봉명": [
    {
      line: "1호선",
      stationCode: "P170"
    }
  ],
  "신창": [
    {
      line: "1호선",
      stationCode: "P177"
    }
  ],
  "성균관대": [
    {
      line: "1호선",
      stationCode: "P153"
    }
  ],
  "석수": [
    {
      line: "1호선",
      stationCode: "P145"
    }
  ],
  "가산디지털단지": [
    {
      line: "1호선",
      stationCode: "P142"
    },
    {
      line: "7호선",
      stationCode: "746"
    }
  ],
  "금천구청": [
    {
      line: "1호선",
      stationCode: "P144"
    }
  ],
  "탕정": [
    {
      line: "1호선",
      stationCode: "P173"
    }
  ],
  "화서": [
    {
      line: "1호선",
      stationCode: "P154"
    }
  ],
  "군포": [
    {
      line: "1호선",
      stationCode: "P150"
    }
  ],
  "배방": [
    {
      line: "1호선",
      stationCode: "P174"
    }
  ],
  "금정": [
    {
      line: "1호선",
      stationCode: "P149"
    },
    {
      line: "4호선",
      stationCode: "443"
    }
  ],
  "독산": [
    {
      line: "1호선",
      stationCode: "P143"
    }
  ],
  "직산": [
    {
      line: "1호선",
      stationCode: "P167"
    }
  ],
  "관악": [
    {
      line: "1호선",
      stationCode: "P146"
    }
  ],
  "오산": [
    {
      line: "1호선",
      stationCode: "P160"
    }
  ],
  "서동탄": [
    {
      line: "1호선",
      stationCode: "P157-1"
    }
  ],
  "안양": [
    {
      line: "1호선",
      stationCode: "P147"
    }
  ],
  "천안": [
    {
      line: "1호선",
      stationCode: "P169"
    }
  ],
  "세마": [
    {
      line: "1호선",
      stationCode: "P158"
    }
  ],
  "서정리": [
    {
      line: "1호선",
      stationCode: "P163"
    }
  ],
  "의왕": [
    {
      line: "1호선",
      stationCode: "P152"
    }
  ],
  "광명": [
    {
      line: "1호선",
      stationCode: "P144-1"
    }
  ],
  "당정": [
    {
      line: "1호선",
      stationCode: "P151"
    }
  ],
  "두정": [
    {
      line: "1호선",
      stationCode: "P168"
    }
  ],
  "성환": [
    {
      line: "1호선",
      stationCode: "P166"
    }
  ],
  "평택": [
    {
      line: "1호선",
      stationCode: "P165"
    }
  ],
  "평택지제": [
    {
      line: "1호선",
      stationCode: "P164"
    }
  ],
  "송탄": [
    {
      line: "1호선",
      stationCode: "P162"
    }
  ],
  "진위": [
    {
      line: "1호선",
      stationCode: "P161"
    }
  ],
  "오산대": [
    {
      line: "1호선",
      stationCode: "P159"
    }
  ],
  "명학": [
    {
      line: "1호선",
      stationCode: "P148"
    }
  ],
  "온양온천": [
    {
      line: "1호선",
      stationCode: "P176"
    }
  ],
  "쌍용": [
    {
      line: "1호선",
      stationCode: "P171"
    }
  ],
  "을지로입구": [
    {
      line: "2호선",
      stationCode: "202"
    }
  ],
  "을지로3가": [
    {
      line: "2호선",
      stationCode: "203"
    },
    {
      line: "3호선",
      stationCode: "330"
    }
  ],
  "을지로4가": [
    {
      line: "2호선",
      stationCode: "204"
    },
    {
      line: "5호선",
      stationCode: "535"
    }
  ],
  "동대문역사문화공원": [
    {
      line: "2호선",
      stationCode: "205"
    },
    {
      line: "4호선",
      stationCode: "422"
    },
    {
      line: "5호선",
      stationCode: "536"
    }
  ],
  "신당": [
    {
      line: "2호선",
      stationCode: "206"
    },
    {
      line: "6호선",
      stationCode: "635"
    }
  ],
  "상왕십리": [
    {
      line: "2호선",
      stationCode: "207"
    }
  ],
  "왕십리": [
    {
      line: "2호선",
      stationCode: "208"
    },
    {
      line: "5호선",
      stationCode: "540"
    },
    {
      line: "경의중앙선",
      stationCode: "K116"
    },
    {
      line: "수인분당선",
      stationCode: "K210"
    }
  ],
  "한양대": [
    {
      line: "2호선",
      stationCode: "209"
    }
  ],
  "뚝섬": [
    {
      line: "2호선",
      stationCode: "210"
    }
  ],
  "성수": [
    {
      line: "2호선",
      stationCode: "211"
    }
  ],
  "건대입구": [
    {
      line: "2호선",
      stationCode: "212"
    },
    {
      line: "7호선",
      stationCode: "727"
    }
  ],
  "구의": [
    {
      line: "2호선",
      stationCode: "213"
    }
  ],
  "강변": [
    {
      line: "2호선",
      stationCode: "214"
    }
  ],
  "잠실나루": [
    {
      line: "2호선",
      stationCode: "215"
    }
  ],
  "잠실": [
    {
      line: "2호선",
      stationCode: "216"
    },
    {
      line: "8호선",
      stationCode: "814"
    }
  ],
  "잠실새내": [
    {
      line: "2호선",
      stationCode: "217"
    }
  ],
  "종합운동장": [
    {
      line: "2호선",
      stationCode: "218"
    },
    {
      line: "9호선",
      stationCode: "930"
    }
  ],
  "삼성": [
    {
      line: "2호선",
      stationCode: "219"
    }
  ],
  "선릉": [
    {
      line: "2호선",
      stationCode: "220"
    },
    {
      line: "수인분당선",
      stationCode: "K215"
    }
  ],
  "역삼": [
    {
      line: "2호선",
      stationCode: "221"
    }
  ],
  "강남": [
    {
      line: "2호선",
      stationCode: "222"
    },
    {
      line: "신분당선",
      stationCode: "D7"
    }
  ],
  "교대": [
    {
      line: "2호선",
      stationCode: "223"
    },
    {
      line: "3호선",
      stationCode: "340"
    }
  ],
  "서초": [
    {
      line: "2호선",
      stationCode: "224"
    }
  ],
  "방배": [
    {
      line: "2호선",
      stationCode: "225"
    }
  ],
  "사당": [
    {
      line: "2호선",
      stationCode: "226"
    },
    {
      line: "4호선",
      stationCode: "433"
    }
  ],
  "낙성대": [
    {
      line: "2호선",
      stationCode: "227"
    }
  ],
  "서울대입구": [
    {
      line: "2호선",
      stationCode: "228"
    }
  ],
  "봉천": [
    {
      line: "2호선",
      stationCode: "229"
    }
  ],
  "신림": [
    {
      line: "2호선",
      stationCode: "230"
    },
    {
      line: "신림선",
      stationCode: "S408"
    }
  ],
  "신대방": [
    {
      line: "2호선",
      stationCode: "231"
    }
  ],
  "구로디지털단지": [
    {
      line: "2호선",
      stationCode: "232"
    }
  ],
  "대림": [
    {
      line: "2호선",
      stationCode: "233"
    },
    {
      line: "7호선",
      stationCode: "744"
    }
  ],
  "문래": [
    {
      line: "2호선",
      stationCode: "235"
    }
  ],
  "영등포구청": [
    {
      line: "2호선",
      stationCode: "236"
    },
    {
      line: "5호선",
      stationCode: "523"
    }
  ],
  "당산": [
    {
      line: "2호선",
      stationCode: "237"
    },
    {
      line: "9호선",
      stationCode: "913"
    }
  ],
  "합정": [
    {
      line: "2호선",
      stationCode: "238"
    },
    {
      line: "6호선",
      stationCode: "622"
    }
  ],
  "홍대입구": [
    {
      line: "2호선",
      stationCode: "239"
    },
    {
      line: "경의중앙선",
      stationCode: "K314"
    },
    {
      line: "공항철도",
      stationCode: "A03"
    }
  ],
  "신촌": [
    {
      line: "2호선",
      stationCode: "240"
    },
    {
      line: "경의중앙선",
      stationCode: "P312"
    }
  ],
  "이대": [
    {
      line: "2호선",
      stationCode: "241"
    }
  ],
  "아현": [
    {
      line: "2호선",
      stationCode: "242"
    }
  ],
  "충정로": [
    {
      line: "2호선",
      stationCode: "243"
    },
    {
      line: "5호선",
      stationCode: "531"
    }
  ],
  "용답": [
    {
      line: "2호선",
      stationCode: "211-1"
    }
  ],
  "양천구청": [
    {
      line: "2호선",
      stationCode: "234-2"
    }
  ],
  "신답": [
    {
      line: "2호선",
      stationCode: "211-2"
    }
  ],
  "신정네거리": [
    {
      line: "2호선",
      stationCode: "234-3"
    }
  ],
  "용두": [
    {
      line: "2호선",
      stationCode: "211-3"
    }
  ],
  "도림천": [
    {
      line: "2호선",
      stationCode: "234-1"
    }
  ],
  "까치산": [
    {
      line: "2호선",
      stationCode: "234-4"
    },
    {
      line: "5호선",
      stationCode: "518"
    }
  ],
  "대화": [
    {
      line: "3호선",
      stationCode: "309"
    }
  ],
  "주엽": [
    {
      line: "3호선",
      stationCode: "310"
    }
  ],
  "정발산": [
    {
      line: "3호선",
      stationCode: "311"
    }
  ],
  "마두": [
    {
      line: "3호선",
      stationCode: "312"
    }
  ],
  "백석": [
    {
      line: "3호선",
      stationCode: "313"
    }
  ],
  "대곡": [
    {
      line: "3호선",
      stationCode: "314"
    },
    {
      line: "경의중앙선",
      stationCode: "K322"
    },
    {
      line: "서해선",
      stationCode: "836"
    }
  ],
  "화정": [
    {
      line: "3호선",
      stationCode: "315"
    }
  ],
  "원당": [
    {
      line: "3호선",
      stationCode: "316"
    }
  ],
  "원흥": [
    {
      line: "3호선",
      stationCode: "317"
    }
  ],
  "삼송": [
    {
      line: "3호선",
      stationCode: "318"
    }
  ],
  "지축": [
    {
      line: "3호선",
      stationCode: "319"
    }
  ],
  "구파발": [
    {
      line: "3호선",
      stationCode: "320"
    }
  ],
  "연신내": [
    {
      line: "3호선",
      stationCode: "321"
    },
    {
      line: "6호선",
      stationCode: "614"
    }
  ],
  "불광": [
    {
      line: "3호선",
      stationCode: "322"
    },
    {
      line: "6호선",
      stationCode: "612"
    }
  ],
  "녹번": [
    {
      line: "3호선",
      stationCode: "323"
    }
  ],
  "홍제": [
    {
      line: "3호선",
      stationCode: "324"
    }
  ],
  "무악재": [
    {
      line: "3호선",
      stationCode: "325"
    }
  ],
  "독립문": [
    {
      line: "3호선",
      stationCode: "326"
    }
  ],
  "경복궁": [
    {
      line: "3호선",
      stationCode: "327"
    }
  ],
  "안국": [
    {
      line: "3호선",
      stationCode: "328"
    }
  ],
  "충무로": [
    {
      line: "3호선",
      stationCode: "331"
    },
    {
      line: "4호선",
      stationCode: "423"
    }
  ],
  "동대입구": [
    {
      line: "3호선",
      stationCode: "332"
    }
  ],
  "약수": [
    {
      line: "3호선",
      stationCode: "333"
    },
    {
      line: "6호선",
      stationCode: "633"
    }
  ],
  "금호": [
    {
      line: "3호선",
      stationCode: "334"
    }
  ],
  "옥수": [
    {
      line: "3호선",
      stationCode: "335"
    },
    {
      line: "경의중앙선",
      stationCode: "K114"
    }
  ],
  "압구정": [
    {
      line: "3호선",
      stationCode: "336"
    }
  ],
  "신사": [
    {
      line: "3호선",
      stationCode: "337"
    },
    {
      line: "신분당선",
      stationCode: "D4"
    }
  ],
  "잠원": [
    {
      line: "3호선",
      stationCode: "338"
    }
  ],
  "고속터미널": [
    {
      line: "3호선",
      stationCode: "339"
    },
    {
      line: "7호선",
      stationCode: "734"
    },
    {
      line: "9호선",
      stationCode: "923"
    }
  ],
  "남부터미널": [
    {
      line: "3호선",
      stationCode: "341"
    }
  ],
  "양재": [
    {
      line: "3호선",
      stationCode: "342"
    },
    {
      line: "신분당선",
      stationCode: "D8"
    }
  ],
  "매봉": [
    {
      line: "3호선",
      stationCode: "343"
    }
  ],
  "도곡": [
    {
      line: "3호선",
      stationCode: "344"
    },
    {
      line: "수인분당선",
      stationCode: "K217"
    }
  ],
  "대치": [
    {
      line: "3호선",
      stationCode: "345"
    }
  ],
  "학여울": [
    {
      line: "3호선",
      stationCode: "346"
    }
  ],
  "대청": [
    {
      line: "3호선",
      stationCode: "347"
    }
  ],
  "일원": [
    {
      line: "3호선",
      stationCode: "348"
    }
  ],
  "수서": [
    {
      line: "3호선",
      stationCode: "349"
    },
    {
      line: "수인분당선",
      stationCode: "K221"
    }
  ],
  "가락시장": [
    {
      line: "3호선",
      stationCode: "350"
    },
    {
      line: "8호선",
      stationCode: "817"
    }
  ],
  "경찰병원": [
    {
      line: "3호선",
      stationCode: "351"
    }
  ],
  "오금": [
    {
      line: "3호선",
      stationCode: "352"
    },
    {
      line: "5호선",
      stationCode: "P552"
    }
  ],
  "진접": [
    {
      line: "4호선",
      stationCode: "405"
    }
  ],
  "오남": [
    {
      line: "4호선",
      stationCode: "406"
    }
  ],
  "별내별가람": [
    {
      line: "4호선",
      stationCode: "408"
    }
  ],
  "당고개": [
    {
      line: "4호선",
      stationCode: "409"
    }
  ],
  "상계": [
    {
      line: "4호선",
      stationCode: "410"
    }
  ],
  "노원": [
    {
      line: "4호선",
      stationCode: "411"
    },
    {
      line: "7호선",
      stationCode: "713"
    }
  ],
  "쌍문": [
    {
      line: "4호선",
      stationCode: "413"
    }
  ],
  "수유": [
    {
      line: "4호선",
      stationCode: "414"
    }
  ],
  "미아": [
    {
      line: "4호선",
      stationCode: "415"
    }
  ],
  "미아사거리": [
    {
      line: "4호선",
      stationCode: "416"
    }
  ],
  "길음": [
    {
      line: "4호선",
      stationCode: "417"
    }
  ],
  "성신여대입구": [
    {
      line: "4호선",
      stationCode: "418"
    },
    {
      line: "우이신설선",
      stationCode: "951"
    }
  ],
  "한성대입구": [
    {
      line: "4호선",
      stationCode: "419"
    }
  ],
  "혜화": [
    {
      line: "4호선",
      stationCode: "420"
    }
  ],
  "명동": [
    {
      line: "4호선",
      stationCode: "424"
    }
  ],
  "회현": [
    {
      line: "4호선",
      stationCode: "425"
    }
  ],
  "숙대입구": [
    {
      line: "4호선",
      stationCode: "427"
    }
  ],
  "삼각지": [
    {
      line: "4호선",
      stationCode: "428"
    },
    {
      line: "6호선",
      stationCode: "628"
    }
  ],
  "신용산": [
    {
      line: "4호선",
      stationCode: "429"
    }
  ],
  "이촌": [
    {
      line: "4호선",
      stationCode: "430"
    },
    {
      line: "경의중앙선",
      stationCode: "K111"
    }
  ],
  "동작": [
    {
      line: "4호선",
      stationCode: "431"
    },
    {
      line: "9호선",
      stationCode: "920"
    }
  ],
  "총신대입구(이수)": [
    {
      line: "4호선",
      stationCode: "432"
    },
    {
      line: "7호선",
      stationCode: "736"
    }
  ],
  "남태령": [
    {
      line: "4호선",
      stationCode: "434"
    }
  ],
  "선바위": [
    {
      line: "4호선",
      stationCode: "435"
    }
  ],
  "경마공원": [
    {
      line: "4호선",
      stationCode: "436"
    }
  ],
  "대공원": [
    {
      line: "4호선",
      stationCode: "437"
    }
  ],
  "과천": [
    {
      line: "4호선",
      stationCode: "438"
    }
  ],
  "정부과천청사": [
    {
      line: "4호선",
      stationCode: "439"
    }
  ],
  "인덕원": [
    {
      line: "4호선",
      stationCode: "440"
    }
  ],
  "평촌": [
    {
      line: "4호선",
      stationCode: "441"
    }
  ],
  "범계": [
    {
      line: "4호선",
      stationCode: "442"
    }
  ],
  "산본": [
    {
      line: "4호선",
      stationCode: "444"
    }
  ],
  "수리산": [
    {
      line: "4호선",
      stationCode: "445"
    }
  ],
  "대야미": [
    {
      line: "4호선",
      stationCode: "446"
    }
  ],
  "반월": [
    {
      line: "4호선",
      stationCode: "447"
    }
  ],
  "상록수": [
    {
      line: "4호선",
      stationCode: "448"
    }
  ],
  "한대앞": [
    {
      line: "4호선",
      stationCode: "449"
    },
    {
      line: "수인분당선",
      stationCode: "K251"
    }
  ],
  "중앙": [
    {
      line: "4호선",
      stationCode: "450"
    },
    {
      line: "수인분당선",
      stationCode: "K252"
    }
  ],
  "고잔": [
    {
      line: "4호선",
      stationCode: "451"
    },
    {
      line: "수인분당선",
      stationCode: "K253"
    }
  ],
  "초지": [
    {
      line: "4호선",
      stationCode: "452"
    },
    {
      line: "서해선",
      stationCode: "850"
    },
    {
      line: "수인분당선",
      stationCode: "K254"
    }
  ],
  "안산": [
    {
      line: "4호선",
      stationCode: "453"
    },
    {
      line: "수인분당선",
      stationCode: "K255"
    }
  ],
  "신길온천": [
    {
      line: "4호선",
      stationCode: "454"
    },
    {
      line: "수인분당선",
      stationCode: "K256"
    }
  ],
  "정왕": [
    {
      line: "4호선",
      stationCode: "455"
    },
    {
      line: "수인분당선",
      stationCode: "K257"
    }
  ],
  "오이도": [
    {
      line: "4호선",
      stationCode: "456"
    },
    {
      line: "수인분당선",
      stationCode: "K258"
    }
  ],
  "방화": [
    {
      line: "5호선",
      stationCode: "510"
    }
  ],
  "개화산": [
    {
      line: "5호선",
      stationCode: "511"
    }
  ],
  "김포공항": [
    {
      line: "5호선",
      stationCode: "512"
    },
    {
      line: "9호선",
      stationCode: "902"
    },
    {
      line: "공항철도",
      stationCode: "A05"
    },
    {
      line: "김포골드라인",
      stationCode: "699"
    },
    {
      line: "서해선",
      stationCode: "838"
    }
  ],
  "송정": [
    {
      line: "5호선",
      stationCode: "513"
    }
  ],
  "마곡": [
    {
      line: "5호선",
      stationCode: "514"
    }
  ],
  "발산": [
    {
      line: "5호선",
      stationCode: "515"
    }
  ],
  "우장산": [
    {
      line: "5호선",
      stationCode: "516"
    }
  ],
  "화곡": [
    {
      line: "5호선",
      stationCode: "517"
    }
  ],
  "신정": [
    {
      line: "5호선",
      stationCode: "519"
    }
  ],
  "목동": [
    {
      line: "5호선",
      stationCode: "520"
    }
  ],
  "오목교": [
    {
      line: "5호선",
      stationCode: "521"
    }
  ],
  "양평": [
    {
      line: "5호선",
      stationCode: "522"
    },
    {
      line: "경의중앙선",
      stationCode: "K135"
    }
  ],
  "영등포시장": [
    {
      line: "5호선",
      stationCode: "524"
    }
  ],
  "여의도": [
    {
      line: "5호선",
      stationCode: "526"
    },
    {
      line: "9호선",
      stationCode: "915"
    }
  ],
  "여의나루": [
    {
      line: "5호선",
      stationCode: "527"
    }
  ],
  "마포": [
    {
      line: "5호선",
      stationCode: "528"
    }
  ],
  "공덕": [
    {
      line: "5호선",
      stationCode: "529"
    },
    {
      line: "6호선",
      stationCode: "626"
    },
    {
      line: "경의중앙선",
      stationCode: "K312"
    },
    {
      line: "공항철도",
      stationCode: "A02"
    }
  ],
  "애오개": [
    {
      line: "5호선",
      stationCode: "530"
    }
  ],
  "서대문": [
    {
      line: "5호선",
      stationCode: "532"
    }
  ],
  "광화문": [
    {
      line: "5호선",
      stationCode: "533"
    }
  ],
  "청구": [
    {
      line: "5호선",
      stationCode: "537"
    },
    {
      line: "6호선",
      stationCode: "634"
    }
  ],
  "신금호": [
    {
      line: "5호선",
      stationCode: "538"
    }
  ],
  "행당": [
    {
      line: "5호선",
      stationCode: "539"
    }
  ],
  "마장": [
    {
      line: "5호선",
      stationCode: "541"
    }
  ],
  "답십리": [
    {
      line: "5호선",
      stationCode: "542"
    }
  ],
  "장한평": [
    {
      line: "5호선",
      stationCode: "543"
    }
  ],
  "군자": [
    {
      line: "5호선",
      stationCode: "544"
    },
    {
      line: "7호선",
      stationCode: "725"
    }
  ],
  "아차산": [
    {
      line: "5호선",
      stationCode: "545"
    }
  ],
  "광나루": [
    {
      line: "5호선",
      stationCode: "546"
    }
  ],
  "천호": [
    {
      line: "5호선",
      stationCode: "547"
    },
    {
      line: "8호선",
      stationCode: "811"
    }
  ],
  "강동": [
    {
      line: "5호선",
      stationCode: "548"
    }
  ],
  "길동": [
    {
      line: "5호선",
      stationCode: "549"
    }
  ],
  "굽은다리": [
    {
      line: "5호선",
      stationCode: "550"
    }
  ],
  "명일": [
    {
      line: "5호선",
      stationCode: "551"
    }
  ],
  "고덕": [
    {
      line: "5호선",
      stationCode: "552"
    }
  ],
  "상일동": [
    {
      line: "5호선",
      stationCode: "553"
    }
  ],
  "강일": [
    {
      line: "5호선",
      stationCode: "554"
    }
  ],
  "미사": [
    {
      line: "5호선",
      stationCode: "555"
    }
  ],
  "하남풍산": [
    {
      line: "5호선",
      stationCode: "556"
    }
  ],
  "하남시청": [
    {
      line: "5호선",
      stationCode: "557"
    }
  ],
  "하남검단산": [
    {
      line: "5호선",
      stationCode: "558"
    }
  ],
  "둔촌동": [
    {
      line: "5호선",
      stationCode: "P549"
    }
  ],
  "올림픽공원": [
    {
      line: "5호선",
      stationCode: "P550"
    },
    {
      line: "9호선",
      stationCode: "936"
    }
  ],
  "개롱": [
    {
      line: "5호선",
      stationCode: "P553"
    }
  ],
  "거여": [
    {
      line: "5호선",
      stationCode: "P554"
    }
  ],
  "마천": [
    {
      line: "5호선",
      stationCode: "P555"
    }
  ],
  "방이": [
    {
      line: "5호선",
      stationCode: "P551"
    }
  ],
  "응암": [
    {
      line: "6호선",
      stationCode: "610"
    }
  ],
  "역촌": [
    {
      line: "6호선",
      stationCode: "611"
    }
  ],
  "독바위": [
    {
      line: "6호선",
      stationCode: "613"
    }
  ],
  "구산": [
    {
      line: "6호선",
      stationCode: "615"
    }
  ],
  "새절": [
    {
      line: "6호선",
      stationCode: "616"
    }
  ],
  "증산": [
    {
      line: "6호선",
      stationCode: "617"
    }
  ],
  "디지털미디어시티": [
    {
      line: "6호선",
      stationCode: "618"
    },
    {
      line: "경의중앙선",
      stationCode: "K316"
    },
    {
      line: "공항철도",
      stationCode: "A04"
    }
  ],
  "월드컵경기장": [
    {
      line: "6호선",
      stationCode: "619"
    }
  ],
  "마포구청": [
    {
      line: "6호선",
      stationCode: "620"
    }
  ],
  "망원": [
    {
      line: "6호선",
      stationCode: "621"
    }
  ],
  "상수": [
    {
      line: "6호선",
      stationCode: "623"
    }
  ],
  "광흥창": [
    {
      line: "6호선",
      stationCode: "624"
    }
  ],
  "대흥": [
    {
      line: "6호선",
      stationCode: "625"
    }
  ],
  "효창공원앞": [
    {
      line: "6호선",
      stationCode: "627"
    },
    {
      line: "경의중앙선",
      stationCode: "K826"
    }
  ],
  "녹사평": [
    {
      line: "6호선",
      stationCode: "629"
    }
  ],
  "이태원": [
    {
      line: "6호선",
      stationCode: "630"
    }
  ],
  "한강진": [
    {
      line: "6호선",
      stationCode: "631"
    }
  ],
  "버티고개": [
    {
      line: "6호선",
      stationCode: "632"
    }
  ],
  "창신": [
    {
      line: "6호선",
      stationCode: "637"
    }
  ],
  "보문": [
    {
      line: "6호선",
      stationCode: "638"
    },
    {
      line: "우이신설선",
      stationCode: "952"
    }
  ],
  "안암": [
    {
      line: "6호선",
      stationCode: "639"
    }
  ],
  "고려대": [
    {
      line: "6호선",
      stationCode: "640"
    }
  ],
  "월곡": [
    {
      line: "6호선",
      stationCode: "641"
    }
  ],
  "상월곡": [
    {
      line: "6호선",
      stationCode: "642"
    }
  ],
  "돌곶이": [
    {
      line: "6호선",
      stationCode: "643"
    }
  ],
  "태릉입구": [
    {
      line: "6호선",
      stationCode: "645"
    },
    {
      line: "7호선",
      stationCode: "717"
    }
  ],
  "화랑대": [
    {
      line: "6호선",
      stationCode: "646"
    }
  ],
  "봉화산": [
    {
      line: "6호선",
      stationCode: "647"
    }
  ],
  "신내": [
    {
      line: "6호선",
      stationCode: "648"
    },
    {
      line: "경춘선",
      stationCode: "P122"
    }
  ],
  "장암": [
    {
      line: "7호선",
      stationCode: "709"
    }
  ],
  "수락산": [
    {
      line: "7호선",
      stationCode: "711"
    }
  ],
  "마들": [
    {
      line: "7호선",
      stationCode: "712"
    }
  ],
  "중계": [
    {
      line: "7호선",
      stationCode: "714"
    }
  ],
  "하계": [
    {
      line: "7호선",
      stationCode: "715"
    }
  ],
  "공릉": [
    {
      line: "7호선",
      stationCode: "716"
    }
  ],
  "먹골": [
    {
      line: "7호선",
      stationCode: "718"
    }
  ],
  "중화": [
    {
      line: "7호선",
      stationCode: "719"
    }
  ],
  "상봉": [
    {
      line: "7호선",
      stationCode: "720"
    },
    {
      line: "경의중앙선",
      stationCode: "K120"
    },
    {
      line: "경춘선",
      stationCode: "P120"
    }
  ],
  "면목": [
    {
      line: "7호선",
      stationCode: "721"
    }
  ],
  "사가정": [
    {
      line: "7호선",
      stationCode: "722"
    }
  ],
  "용마산": [
    {
      line: "7호선",
      stationCode: "723"
    }
  ],
  "중곡": [
    {
      line: "7호선",
      stationCode: "724"
    }
  ],
  "어린이대공원": [
    {
      line: "7호선",
      stationCode: "726"
    }
  ],
  "뚝섬유원지": [
    {
      line: "7호선",
      stationCode: "728"
    }
  ],
  "청담": [
    {
      line: "7호선",
      stationCode: "729"
    }
  ],
  "강남구청": [
    {
      line: "7호선",
      stationCode: "730"
    },
    {
      line: "수인분당선",
      stationCode: "K213"
    }
  ],
  "학동": [
    {
      line: "7호선",
      stationCode: "731"
    }
  ],
  "논현": [
    {
      line: "7호선",
      stationCode: "732"
    },
    {
      line: "신분당선",
      stationCode: "D5"
    }
  ],
  "반포": [
    {
      line: "7호선",
      stationCode: "733"
    }
  ],
  "내방": [
    {
      line: "7호선",
      stationCode: "735"
    }
  ],
  "남성": [
    {
      line: "7호선",
      stationCode: "737"
    }
  ],
  "숭실대입구": [
    {
      line: "7호선",
      stationCode: "738"
    }
  ],
  "상도": [
    {
      line: "7호선",
      stationCode: "739"
    }
  ],
  "장승배기": [
    {
      line: "7호선",
      stationCode: "740"
    }
  ],
  "신대방삼거리": [
    {
      line: "7호선",
      stationCode: "741"
    }
  ],
  "보라매": [
    {
      line: "7호선",
      stationCode: "742"
    },
    {
      line: "신림선",
      stationCode: "S404"
    }
  ],
  "신풍": [
    {
      line: "7호선",
      stationCode: "743"
    }
  ],
  "남구로": [
    {
      line: "7호선",
      stationCode: "745"
    }
  ],
  "철산": [
    {
      line: "7호선",
      stationCode: "747"
    }
  ],
  "광명사거리": [
    {
      line: "7호선",
      stationCode: "748"
    }
  ],
  "천왕": [
    {
      line: "7호선",
      stationCode: "749"
    }
  ],
  "까치울": [
    {
      line: "7호선",
      stationCode: "751"
    }
  ],
  "부천종합운동장": [
    {
      line: "7호선",
      stationCode: "752"
    },
    {
      line: "서해선",
      stationCode: "840"
    }
  ],
  "춘의": [
    {
      line: "7호선",
      stationCode: "753"
    }
  ],
  "신중동": [
    {
      line: "7호선",
      stationCode: "754"
    }
  ],
  "부천시청": [
    {
      line: "7호선",
      stationCode: "755"
    }
  ],
  "상동": [
    {
      line: "7호선",
      stationCode: "756"
    }
  ],
  "삼산체육관": [
    {
      line: "7호선",
      stationCode: "757"
    }
  ],
  "굴포천": [
    {
      line: "7호선",
      stationCode: "758"
    }
  ],
  "부평구청": [
    {
      line: "7호선",
      stationCode: "759"
    },
    {
      line: "인천1호선",
      stationCode: "I118"
    }
  ],
  "산곡": [
    {
      line: "7호선",
      stationCode: "760"
    }
  ],
  "석남": [
    {
      line: "7호선",
      stationCode: "761"
    },
    {
      line: "인천2호선",
      stationCode: "I213"
    }
  ],
  "암사": [
    {
      line: "8호선",
      stationCode: "810"
    }
  ],
  "강동구청": [
    {
      line: "8호선",
      stationCode: "812"
    }
  ],
  "몽촌토성": [
    {
      line: "8호선",
      stationCode: "813"
    }
  ],
  "석촌": [
    {
      line: "8호선",
      stationCode: "815"
    },
    {
      line: "9호선",
      stationCode: "933"
    }
  ],
  "송파": [
    {
      line: "8호선",
      stationCode: "816"
    }
  ],
  "문정": [
    {
      line: "8호선",
      stationCode: "818"
    }
  ],
  "장지": [
    {
      line: "8호선",
      stationCode: "819"
    }
  ],
  "복정": [
    {
      line: "8호선",
      stationCode: "820"
    },
    {
      line: "수인분당선",
      stationCode: "K222"
    }
  ],
  "남위례": [
    {
      line: "8호선",
      stationCode: "821"
    }
  ],
  "산성": [
    {
      line: "8호선",
      stationCode: "822"
    }
  ],
  "남한산성입구": [
    {
      line: "8호선",
      stationCode: "823"
    }
  ],
  "단대오거리": [
    {
      line: "8호선",
      stationCode: "824"
    }
  ],
  "신흥": [
    {
      line: "8호선",
      stationCode: "825"
    }
  ],
  "수진": [
    {
      line: "8호선",
      stationCode: "826"
    }
  ],
  "모란": [
    {
      line: "8호선",
      stationCode: "827"
    },
    {
      line: "수인분당선",
      stationCode: "K225"
    }
  ],
  "개화": [
    {
      line: "9호선",
      stationCode: "901"
    }
  ],
  "공항시장": [
    {
      line: "9호선",
      stationCode: "903"
    }
  ],
  "신방화": [
    {
      line: "9호선",
      stationCode: "904"
    }
  ],
  "마곡나루": [
    {
      line: "9호선",
      stationCode: "905"
    },
    {
      line: "공항철도",
      stationCode: "A042"
    }
  ],
  "양천향교": [
    {
      line: "9호선",
      stationCode: "906"
    }
  ],
  "가양": [
    {
      line: "9호선",
      stationCode: "907"
    }
  ],
  "증미": [
    {
      line: "9호선",
      stationCode: "908"
    }
  ],
  "등촌": [
    {
      line: "9호선",
      stationCode: "909"
    }
  ],
  "염창": [
    {
      line: "9호선",
      stationCode: "910"
    }
  ],
  "신목동": [
    {
      line: "9호선",
      stationCode: "911"
    }
  ],
  "선유도": [
    {
      line: "9호선",
      stationCode: "912"
    }
  ],
  "국회의사당": [
    {
      line: "9호선",
      stationCode: "914"
    }
  ],
  "샛강": [
    {
      line: "9호선",
      stationCode: "916"
    },
    {
      line: "신림선",
      stationCode: "S401"
    }
  ],
  "노들": [
    {
      line: "9호선",
      stationCode: "918"
    }
  ],
  "흑석": [
    {
      line: "9호선",
      stationCode: "919"
    }
  ],
  "구반포": [
    {
      line: "9호선",
      stationCode: "921"
    }
  ],
  "신반포": [
    {
      line: "9호선",
      stationCode: "922"
    }
  ],
  "사평": [
    {
      line: "9호선",
      stationCode: "924"
    }
  ],
  "신논현": [
    {
      line: "9호선",
      stationCode: "925"
    },
    {
      line: "신분당선",
      stationCode: "D6"
    }
  ],
  "언주": [
    {
      line: "9호선",
      stationCode: "926"
    }
  ],
  "선정릉": [
    {
      line: "9호선",
      stationCode: "927"
    },
    {
      line: "수인분당선",
      stationCode: "K214"
    }
  ],
  "삼성중앙": [
    {
      line: "9호선",
      stationCode: "928"
    }
  ],
  "봉은사": [
    {
      line: "9호선",
      stationCode: "929"
    }
  ],
  "삼전": [
    {
      line: "9호선",
      stationCode: "931"
    }
  ],
  "석촌고분": [
    {
      line: "9호선",
      stationCode: "932"
    }
  ],
  "송파나루": [
    {
      line: "9호선",
      stationCode: "934"
    }
  ],
  "한성백제": [
    {
      line: "9호선",
      stationCode: "935"
    }
  ],
  "둔촌오륜": [
    {
      line: "9호선",
      stationCode: "937"
    }
  ],
  "중앙보훈병원": [
    {
      line: "9호선",
      stationCode: "938"
    }
  ],
  "삼동": [
    {
      line: "경강선",
      stationCode: "K412"
    }
  ],
  "초월": [
    {
      line: "경강선",
      stationCode: "K414"
    }
  ],
  "이매": [
    {
      line: "경강선",
      stationCode: "K411"
    },
    {
      line: "수인분당선",
      stationCode: "K227"
    }
  ],
  "부발": [
    {
      line: "경강선",
      stationCode: "K418"
    }
  ],
  "여주": [
    {
      line: "경강선",
      stationCode: "K420"
    }
  ],
  "이천": [
    {
      line: "경강선",
      stationCode: "K417"
    }
  ],
  "곤지암": [
    {
      line: "경강선",
      stationCode: "K415"
    }
  ],
  "판교": [
    {
      line: "경강선",
      stationCode: "K410"
    },
    {
      line: "신분당선",
      stationCode: "D11"
    }
  ],
  "신둔도예촌": [
    {
      line: "경강선",
      stationCode: "K416"
    }
  ],
  "세종대왕릉": [
    {
      line: "경강선",
      stationCode: "K419"
    }
  ],
  "경기광주": [
    {
      line: "경강선",
      stationCode: "K413"
    }
  ],
  "능곡": [
    {
      line: "경의중앙선",
      stationCode: "K321"
    },
    {
      line: "서해선",
      stationCode: "837"
    }
  ],
  "파주": [
    {
      line: "경의중앙선",
      stationCode: "K334"
    }
  ],
  "월롱": [
    {
      line: "경의중앙선",
      stationCode: "K333"
    }
  ],
  "일산": [
    {
      line: "경의중앙선",
      stationCode: "K326"
    },
    {
      line: "서해선",
      stationCode: "832"
    }
  ],
  "행신": [
    {
      line: "경의중앙선",
      stationCode: "K320"
    }
  ],
  "지평": [
    {
      line: "경의중앙선",
      stationCode: "K138"
    }
  ],
  "신원": [
    {
      line: "경의중앙선",
      stationCode: "K131"
    }
  ],
  "용문": [
    {
      line: "경의중앙선",
      stationCode: "K137"
    }
  ],
  "팔당": [
    {
      line: "경의중앙선",
      stationCode: "K128"
    }
  ],
  "응봉": [
    {
      line: "경의중앙선",
      stationCode: "K115"
    }
  ],
  "문산": [
    {
      line: "경의중앙선",
      stationCode: "K335"
    }
  ],
  "운정": [
    {
      line: "경의중앙선",
      stationCode: "K329"
    }
  ],
  "야당": [
    {
      line: "경의중앙선",
      stationCode: "K328"
    }
  ],
  "탄현": [
    {
      line: "경의중앙선",
      stationCode: "K327"
    }
  ],
  "풍산": [
    {
      line: "경의중앙선",
      stationCode: "K325"
    },
    {
      line: "서해선",
      stationCode: "833"
    }
  ],
  "백마": [
    {
      line: "경의중앙선",
      stationCode: "K324"
    },
    {
      line: "서해선",
      stationCode: "834"
    }
  ],
  "곡산": [
    {
      line: "경의중앙선",
      stationCode: "K323"
    },
    {
      line: "서해선",
      stationCode: "835"
    }
  ],
  "수색": [
    {
      line: "경의중앙선",
      stationCode: "K317"
    }
  ],
  "강매": [
    {
      line: "경의중앙선",
      stationCode: "K319"
    }
  ],
  "가좌": [
    {
      line: "경의중앙선",
      stationCode: "K315"
    }
  ],
  "서강대": [
    {
      line: "경의중앙선",
      stationCode: "K313"
    }
  ],
  "망우": [
    {
      line: "경의중앙선",
      stationCode: "K121"
    },
    {
      line: "경춘선",
      stationCode: "P121"
    }
  ],
  "구리": [
    {
      line: "경의중앙선",
      stationCode: "K123"
    }
  ],
  "원덕": [
    {
      line: "경의중앙선",
      stationCode: "K136"
    }
  ],
  "한남": [
    {
      line: "경의중앙선",
      stationCode: "K113"
    }
  ],
  "양수": [
    {
      line: "경의중앙선",
      stationCode: "K130"
    }
  ],
  "금촌": [
    {
      line: "경의중앙선",
      stationCode: "K331"
    }
  ],
  "오빈": [
    {
      line: "경의중앙선",
      stationCode: "K134"
    }
  ],
  "아신": [
    {
      line: "경의중앙선",
      stationCode: "K133"
    }
  ],
  "국수": [
    {
      line: "경의중앙선",
      stationCode: "K132"
    }
  ],
  "운길산": [
    {
      line: "경의중앙선",
      stationCode: "K129"
    }
  ],
  "덕소": [
    {
      line: "경의중앙선",
      stationCode: "K126"
    }
  ],
  "중랑": [
    {
      line: "경의중앙선",
      stationCode: "K119"
    },
    {
      line: "경춘선",
      stationCode: "P119"
    }
  ],
  "양정": [
    {
      line: "경의중앙선",
      stationCode: "K125"
    }
  ],
  "도농": [
    {
      line: "경의중앙선",
      stationCode: "K124"
    }
  ],
  "서빙고": [
    {
      line: "경의중앙선",
      stationCode: "K112"
    }
  ],
  "임진강": [
    {
      line: "경의중앙선",
      stationCode: "K337"
    }
  ],
  "금릉": [
    {
      line: "경의중앙선",
      stationCode: "K330"
    }
  ],
  "운천": [
    {
      line: "경의중앙선",
      stationCode: "K336"
    }
  ],
  "도심": [
    {
      line: "경의중앙선",
      stationCode: "K127"
    }
  ],
  "한국항공대": [
    {
      line: "경의중앙선",
      stationCode: "K318"
    }
  ],
  "양원": [
    {
      line: "경의중앙선",
      stationCode: "K122"
    }
  ],
  "백양리": [
    {
      line: "경춘선",
      stationCode: "P136"
    }
  ],
  "천마산": [
    {
      line: "경춘선",
      stationCode: "P129"
    }
  ],
  "갈매": [
    {
      line: "경춘선",
      stationCode: "P123"
    }
  ],
  "사릉": [
    {
      line: "경춘선",
      stationCode: "P126"
    }
  ],
  "평내호평": [
    {
      line: "경춘선",
      stationCode: "P128"
    }
  ],
  "마석": [
    {
      line: "경춘선",
      stationCode: "P130"
    }
  ],
  "춘천": [
    {
      line: "경춘선",
      stationCode: "P140"
    }
  ],
  "퇴계원": [
    {
      line: "경춘선",
      stationCode: "P125"
    }
  ],
  "강촌": [
    {
      line: "경춘선",
      stationCode: "P137"
    }
  ],
  "금곡": [
    {
      line: "경춘선",
      stationCode: "P127"
    }
  ],
  "가평": [
    {
      line: "경춘선",
      stationCode: "P134"
    }
  ],
  "상천": [
    {
      line: "경춘선",
      stationCode: "P133"
    }
  ],
  "청평": [
    {
      line: "경춘선",
      stationCode: "P132"
    }
  ],
  "김유정": [
    {
      line: "경춘선",
      stationCode: "P138"
    }
  ],
  "대성리": [
    {
      line: "경춘선",
      stationCode: "P131"
    }
  ],
  "남춘천": [
    {
      line: "경춘선",
      stationCode: "P139"
    }
  ],
  "굴봉산": [
    {
      line: "경춘선",
      stationCode: "P135"
    }
  ],
  "별내": [
    {
      line: "경춘선",
      stationCode: "P124"
    }
  ],
  "영종": [
    {
      line: "공항철도",
      stationCode: "A072"
    }
  ],
  "인천공항2터미널": [
    {
      line: "공항철도",
      stationCode: "A11"
    }
  ],
  "인천공항1터미널": [
    {
      line: "공항철도",
      stationCode: "A10"
    }
  ],
  "공항화물청사": [
    {
      line: "공항철도",
      stationCode: "A09"
    }
  ],
  "운서": [
    {
      line: "공항철도",
      stationCode: "A08"
    }
  ],
  "청라국제도시": [
    {
      line: "공항철도",
      stationCode: "A071"
    }
  ],
  "검암": [
    {
      line: "공항철도",
      stationCode: "A07"
    },
    {
      line: "인천2호선",
      stationCode: "I207"
    }
  ],
  "계양": [
    {
      line: "공항철도",
      stationCode: "A06"
    },
    {
      line: "인천1호선",
      stationCode: "I110"
    }
  ],
  "양촌": [
    {
      line: "김포골드라인",
      stationCode: "690"
    }
  ],
  "구래": [
    {
      line: "김포골드라인",
      stationCode: "691"
    }
  ],
  "마산": [
    {
      line: "김포골드라인",
      stationCode: "692"
    }
  ],
  "장기": [
    {
      line: "김포골드라인",
      stationCode: "693"
    }
  ],
  "운양": [
    {
      line: "김포골드라인",
      stationCode: "694"
    }
  ],
  "걸포북변": [
    {
      line: "김포골드라인",
      stationCode: "695"
    }
  ],
  "사우": [
    {
      line: "김포골드라인",
      stationCode: "696"
    }
  ],
  "풍무": [
    {
      line: "김포골드라인",
      stationCode: "697"
    }
  ],
  "고촌": [
    {
      line: "김포골드라인",
      stationCode: "698"
    }
  ],
  "시우": [
    {
      line: "서해선",
      stationCode: "701"
    }
  ],
  "원시": [
    {
      line: "서해선",
      stationCode: "702"
    }
  ],
  "원종": [
    {
      line: "서해선",
      stationCode: "839"
    }
  ],
  "소새울": [
    {
      line: "서해선",
      stationCode: "842"
    }
  ],
  "시흥대야": [
    {
      line: "서해선",
      stationCode: "843"
    }
  ],
  "신천": [
    {
      line: "서해선",
      stationCode: "844"
    }
  ],
  "신현": [
    {
      line: "서해선",
      stationCode: "845"
    }
  ],
  "시흥시청": [
    {
      line: "서해선",
      stationCode: "846"
    }
  ],
  "시흥능곡": [
    {
      line: "서해선",
      stationCode: "847"
    }
  ],
  "달미": [
    {
      line: "서해선",
      stationCode: "848"
    }
  ],
  "선부": [
    {
      line: "서해선",
      stationCode: "849"
    }
  ],
  "압구정로데오": [
    {
      line: "수인분당선",
      stationCode: "K212"
    }
  ],
  "야탑": [
    {
      line: "수인분당선",
      stationCode: "K226"
    }
  ],
  "남동인더스파크": [
    {
      line: "수인분당선",
      stationCode: "K264"
    }
  ],
  "인하대": [
    {
      line: "수인분당선",
      stationCode: "K269"
    }
  ],
  "대모산입구": [
    {
      line: "수인분당선",
      stationCode: "K220"
    }
  ],
  "숭의": [
    {
      line: "수인분당선",
      stationCode: "K270"
    }
  ],
  "영통": [
    {
      line: "수인분당선",
      stationCode: "K240"
    }
  ],
  "개포동": [
    {
      line: "수인분당선",
      stationCode: "K219"
    }
  ],
  "사리": [
    {
      line: "수인분당선",
      stationCode: "K250"
    }
  ],
  "구룡": [
    {
      line: "수인분당선",
      stationCode: "K218"
    }
  ],
  "죽전": [
    {
      line: "수인분당선",
      stationCode: "K233"
    }
  ],
  "오리": [
    {
      line: "수인분당선",
      stationCode: "K232"
    }
  ],
  "한티": [
    {
      line: "수인분당선",
      stationCode: "K216"
    }
  ],
  "연수": [
    {
      line: "수인분당선",
      stationCode: "K266"
    }
  ],
  "원인재": [
    {
      line: "수인분당선",
      stationCode: "K265"
    },
    {
      line: "인천1호선",
      stationCode: "I130"
    }
  ],
  "수내": [
    {
      line: "수인분당선",
      stationCode: "K229"
    }
  ],
  "상갈": [
    {
      line: "수인분당선",
      stationCode: "K238"
    }
  ],
  "월곶": [
    {
      line: "수인분당선",
      stationCode: "K260"
    }
  ],
  "인천논현": [
    {
      line: "수인분당선",
      stationCode: "K262"
    }
  ],
  "소래포구": [
    {
      line: "수인분당선",
      stationCode: "K261"
    }
  ],
  "달월": [
    {
      line: "수인분당선",
      stationCode: "K259"
    }
  ],
  "야목": [
    {
      line: "수인분당선",
      stationCode: "K249"
    }
  ],
  "어천": [
    {
      line: "수인분당선",
      stationCode: "K248"
    }
  ],
  "고색": [
    {
      line: "수인분당선",
      stationCode: "K246"
    }
  ],
  "매교": [
    {
      line: "수인분당선",
      stationCode: "K244"
    }
  ],
  "수원시청": [
    {
      line: "수인분당선",
      stationCode: "K243"
    }
  ],
  "매탄권선": [
    {
      line: "수인분당선",
      stationCode: "K242"
    }
  ],
  "망포": [
    {
      line: "수인분당선",
      stationCode: "K241"
    }
  ],
  "청명": [
    {
      line: "수인분당선",
      stationCode: "K239"
    }
  ],
  "신갈": [
    {
      line: "수인분당선",
      stationCode: "K236"
    }
  ],
  "구성": [
    {
      line: "수인분당선",
      stationCode: "K235"
    }
  ],
  "태평": [
    {
      line: "수인분당선",
      stationCode: "K224"
    }
  ],
  "기흥": [
    {
      line: "수인분당선",
      stationCode: "K237"
    },
    {
      line: "용인에버라인",
      stationCode: "Y110"
    }
  ],
  "오목천": [
    {
      line: "수인분당선",
      stationCode: "K247"
    }
  ],
  "호구포": [
    {
      line: "수인분당선",
      stationCode: "K263"
    }
  ],
  "송도": [
    {
      line: "수인분당선",
      stationCode: "K267"
    }
  ],
  "신포": [
    {
      line: "수인분당선",
      stationCode: "K271"
    }
  ],
  "보정": [
    {
      line: "수인분당선",
      stationCode: "K234"
    }
  ],
  "미금": [
    {
      line: "수인분당선",
      stationCode: "K231"
    },
    {
      line: "신분당선",
      stationCode: "D13"
    }
  ],
  "정자": [
    {
      line: "수인분당선",
      stationCode: "K230"
    },
    {
      line: "신분당선",
      stationCode: "D12"
    }
  ],
  "서현": [
    {
      line: "수인분당선",
      stationCode: "K228"
    }
  ],
  "가천대": [
    {
      line: "수인분당선",
      stationCode: "K223"
    }
  ],
  "서울숲": [
    {
      line: "수인분당선",
      stationCode: "K211"
    }
  ],
  "보라매병원": [
    {
      line: "신림선",
      stationCode: "S406"
    }
  ],
  "보라매공원": [
    {
      line: "신림선",
      stationCode: "S405"
    }
  ],
  "서울지방병무청": [
    {
      line: "신림선",
      stationCode: "S403"
    }
  ],
  "당곡": [
    {
      line: "신림선",
      stationCode: "S407"
    }
  ],
  "관악산": [
    {
      line: "신림선",
      stationCode: "S411"
    }
  ],
  "서울대벤처타운": [
    {
      line: "신림선",
      stationCode: "S410"
    }
  ],
  "서원": [
    {
      line: "신림선",
      stationCode: "S409"
    }
  ],
  "동천": [
    {
      line: "신분당선",
      stationCode: "D14"
    }
  ],
  "수지구청": [
    {
      line: "신분당선",
      stationCode: "D15"
    }
  ],
  "상현": [
    {
      line: "신분당선",
      stationCode: "D17"
    }
  ],
  "성복": [
    {
      line: "신분당선",
      stationCode: "D16"
    }
  ],
  "광교": [
    {
      line: "신분당선",
      stationCode: "D19"
    }
  ],
  "광교중앙": [
    {
      line: "신분당선",
      stationCode: "D18"
    }
  ],
  "양재시민의숲": [
    {
      line: "신분당선",
      stationCode: "D9"
    }
  ],
  "청계산입구": [
    {
      line: "신분당선",
      stationCode: "D10"
    }
  ],
  "전대.에버랜드": [
    {
      line: "용인에버라인",
      stationCode: "Y126"
    }
  ],
  "강남대": [
    {
      line: "용인에버라인",
      stationCode: "Y111"
    }
  ],
  "지석": [
    {
      line: "용인에버라인",
      stationCode: "Y112"
    }
  ],
  "어정": [
    {
      line: "용인에버라인",
      stationCode: "Y113"
    }
  ],
  "동백": [
    {
      line: "용인에버라인",
      stationCode: "Y114"
    }
  ],
  "초당": [
    {
      line: "용인에버라인",
      stationCode: "Y115"
    }
  ],
  "삼가": [
    {
      line: "용인에버라인",
      stationCode: "Y116"
    }
  ],
  "시청.용인대": [
    {
      line: "용인에버라인",
      stationCode: "Y117"
    }
  ],
  "명지대": [
    {
      line: "용인에버라인",
      stationCode: "Y118"
    }
  ],
  "김량장": [
    {
      line: "용인에버라인",
      stationCode: "Y119"
    }
  ],
  "용인중앙시장": [
    {
      line: "용인에버라인",
      stationCode: "Y120"
    }
  ],
  "고진": [
    {
      line: "용인에버라인",
      stationCode: "Y121"
    }
  ],
  "보평": [
    {
      line: "용인에버라인",
      stationCode: "Y123"
    }
  ],
  "둔전": [
    {
      line: "용인에버라인",
      stationCode: "Y125"
    }
  ],
  "북한산우이": [
    {
      line: "우이신설선",
      stationCode: "941"
    }
  ],
  "솔밭공원": [
    {
      line: "우이신설선",
      stationCode: "942"
    }
  ],
  "4·19민주묘지": [
    {
      line: "우이신설선",
      stationCode: "943"
    }
  ],
  "가오리": [
    {
      line: "우이신설선",
      stationCode: "944"
    }
  ],
  "화계": [
    {
      line: "우이신설선",
      stationCode: "945"
    }
  ],
  "삼양": [
    {
      line: "우이신설선",
      stationCode: "946"
    }
  ],
  "삼양사거리": [
    {
      line: "우이신설선",
      stationCode: "947"
    }
  ],
  "솔샘": [
    {
      line: "우이신설선",
      stationCode: "948"
    }
  ],
  "북한산보국문": [
    {
      line: "우이신설선",
      stationCode: "949"
    }
  ],
  "정릉": [
    {
      line: "우이신설선",
      stationCode: "950"
    }
  ],
  "경기도청북부청사": [
    {
      line: "의정부경전철",
      stationCode: "U120"
    }
  ],
  "발곡": [
    {
      line: "의정부경전철",
      stationCode: "U110"
    }
  ],
  "범골": [
    {
      line: "의정부경전철",
      stationCode: "U112"
    }
  ],
  "경전철의정부": [
    {
      line: "의정부경전철",
      stationCode: "U113"
    }
  ],
  "의정부시청": [
    {
      line: "의정부경전철",
      stationCode: "U114"
    }
  ],
  "의정부중앙": [
    {
      line: "의정부경전철",
      stationCode: "U117"
    }
  ],
  "동오": [
    {
      line: "의정부경전철",
      stationCode: "U118"
    }
  ],
  "새말": [
    {
      line: "의정부경전철",
      stationCode: "U119"
    }
  ],
  "효자": [
    {
      line: "의정부경전철",
      stationCode: "U121"
    }
  ],
  "곤제": [
    {
      line: "의정부경전철",
      stationCode: "U122"
    }
  ],
  "어룡": [
    {
      line: "의정부경전철",
      stationCode: "U123"
    }
  ],
  "송산": [
    {
      line: "의정부경전철",
      stationCode: "U124"
    }
  ],
  "탑석": [
    {
      line: "의정부경전철",
      stationCode: "U125"
    }
  ],
  "흥선": [
    {
      line: "의정부경전철",
      stationCode: "U115"
    }
  ],
  "아시아드경기장": [
    {
      line: "인천2호선",
      stationCode: "I209"
    }
  ],
  "독정": [
    {
      line: "인천2호선",
      stationCode: "I206"
    }
  ],
  "왕길": [
    {
      line: "인천2호선",
      stationCode: "I202"
    }
  ],
  "검단오류": [
    {
      line: "인천2호선",
      stationCode: "I201"
    }
  ],
  "운연": [
    {
      line: "인천2호선",
      stationCode: "I227"
    }
  ],
  "인천대공원": [
    {
      line: "인천2호선",
      stationCode: "I226"
    }
  ],
  "남동구청": [
    {
      line: "인천2호선",
      stationCode: "I225"
    }
  ],
  "시민공원": [
    {
      line: "인천2호선",
      stationCode: "I219"
    }
  ],
  "주안국가산단": [
    {
      line: "인천2호선",
      stationCode: "I217"
    }
  ],
  "가재울": [
    {
      line: "인천2호선",
      stationCode: "I216"
    }
  ],
  "인천가좌": [
    {
      line: "인천2호선",
      stationCode: "I215"
    }
  ],
  "가정중앙시장": [
    {
      line: "인천2호선",
      stationCode: "I212"
    }
  ],
  "검바위": [
    {
      line: "인천2호선",
      stationCode: "I208"
    }
  ],
  "완정": [
    {
      line: "인천2호선",
      stationCode: "I205"
    }
  ],
  "마전": [
    {
      line: "인천2호선",
      stationCode: "I204"
    }
  ],
  "검단사거리": [
    {
      line: "인천2호선",
      stationCode: "I203"
    }
  ],
  "모래내시장": [
    {
      line: "인천2호선",
      stationCode: "I223"
    }
  ],
  "석천사거리": [
    {
      line: "인천2호선",
      stationCode: "I222"
    }
  ],
  "인천시청": [
    {
      line: "인천2호선",
      stationCode: "I221"
    },
    {
      line: "인천1호선",
      stationCode: "I124"
    }
  ],
  "석바위시장": [
    {
      line: "인천2호선",
      stationCode: "I220"
    }
  ],
  "서부여성회관": [
    {
      line: "인천2호선",
      stationCode: "I214"
    }
  ],
  "서구청": [
    {
      line: "인천2호선",
      stationCode: "I210"
    }
  ],
  "만수": [
    {
      line: "인천2호선",
      stationCode: "I224"
    }
  ],
  "가정": [
    {
      line: "인천2호선",
      stationCode: "I211"
    }
  ],
  "선학": [
    {
      line: "인천1호선",
      stationCode: "I128"
    }
  ],
  "문학경기장": [
    {
      line: "인천1호선",
      stationCode: "I127"
    }
  ],
  "계산": [
    {
      line: "인천1호선",
      stationCode: "I114"
    }
  ],
  "예술회관": [
    {
      line: "인천1호선",
      stationCode: "I125"
    }
  ],
  "경인교대입구": [
    {
      line: "인천1호선",
      stationCode: "I115"
    }
  ],
  "작전": [
    {
      line: "인천1호선",
      stationCode: "I116"
    }
  ],
  "갈산": [
    {
      line: "인천1호선",
      stationCode: "I117"
    }
  ],
  "인천터미널": [
    {
      line: "인천1호선",
      stationCode: "I126"
    }
  ],
  "귤현": [
    {
      line: "인천1호선",
      stationCode: "I111"
    }
  ],
  "부평시장": [
    {
      line: "인천1호선",
      stationCode: "I119"
    }
  ],
  "박촌": [
    {
      line: "인천1호선",
      stationCode: "I112"
    }
  ],
  "임학": [
    {
      line: "인천1호선",
      stationCode: "I113"
    }
  ],
  "동수": [
    {
      line: "인천1호선",
      stationCode: "I121"
    }
  ],
  "부평삼거리": [
    {
      line: "인천1호선",
      stationCode: "I122"
    }
  ],
  "간석오거리": [
    {
      line: "인천1호선",
      stationCode: "I123"
    }
  ],
  "테크노파크": [
    {
      line: "인천1호선",
      stationCode: "I134"
    }
  ],
  "송도달빛축제공원": [
    {
      line: "인천1호선",
      stationCode: "I139"
    }
  ],
  "동막": [
    {
      line: "인천1호선",
      stationCode: "I132"
    }
  ],
  "국제업무지구": [
    {
      line: "인천1호선",
      stationCode: "I138"
    }
  ],
  "센트럴파크": [
    {
      line: "인천1호선",
      stationCode: "I137"
    }
  ],
  "인천대입구": [
    {
      line: "인천1호선",
      stationCode: "I136"
    }
  ],
  "지식정보단지": [
    {
      line: "인천1호선",
      stationCode: "I135"
    }
  ],
  "캠퍼스타운": [
    {
      line: "인천1호선",
      stationCode: "I133"
    }
  ],
  "동춘": [
    {
      line: "인천1호선",
      stationCode: "I131"
    }
  ],
  "신연수": [
    {
      line: "인천1호선",
      stationCode: "I129"
    }
  ]
}

export default transfers