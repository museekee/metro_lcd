import { Lines } from "./types"

const stations: Record<Lines, {
  icon: string
  fontSize?: number
  color: string
  stations: Record<string, {
    code: string
    name: string
    name_en: string
    name_cn: string
    name_jp: string
  }>
}> = {
  "1호선": {
    icon: "1",
    color: "#0052A4",
    stations: {
      "100-3": {
        code: "100-3",
        name: "연천",
        name_en: "Yeoncheon",
        name_cn: "涟川",
        name_jp: "ヨンチョン"
      },
      "100-2": {
        code: "100-2",
        name: "전곡",
        name_en: "Jeongok",
        name_cn: "全谷",
        name_jp: "チョンゴク"
      },
      "100-1": {
        code: "100-1",
        name: "청산",
        name_en: "Cheongsan",
        name_cn: "青山",
        name_jp: "チョンサン"
      },
      "100": {
        code: "100",
        name: "소요산",
        name_en: "Soyosan",
        name_cn: "逍遥山",
        name_jp: "ソヨサン"
      },
      "101": {
        code: "101",
        name: "동두천",
        name_en: "Dongducheon",
        name_cn: "东豆川",
        name_jp: "トンドゥチョン"
      },
      "102": {
        code: "102",
        name: "보산",
        name_en: "Bosan",
        name_cn: "保山",
        name_jp: "ポサン"
      },
      "103": {
        code: "103",
        name: "동두천중앙",
        name_en: "Dongducheon  jungang",
        name_cn: "东豆川中央",
        name_jp: "トンドゥチョン・チュンアン"
      },
      "104": {
        code: "104",
        name: "지행",
        name_en: "Jihaeng",
        name_cn: "纸杏",
        name_jp: "チヘン"
      },
      "105": {
        code: "105",
        name: "덕정",
        name_en: "Deokjeong",
        name_cn: "德亭",
        name_jp: "トクチョン"
      },
      "106": {
        code: "106",
        name: "덕계",
        name_en: "Deokgye",
        name_cn: "德溪",
        name_jp: "トッケ"
      },
      "107": {
        code: "107",
        name: "양주",
        name_en: "Yangju",
        name_cn: "杨州",
        name_jp: "ヤンジュ"
      },
      "108": {
        code: "108",
        name: "녹양",
        name_en: "Nogyang",
        name_cn: "绿杨",
        name_jp: "ノギャン"
      },
      "109": {
        code: "109",
        name: "가능",
        name_en: "Ganeung",
        name_cn: "佳陵",
        name_jp: "カヌン"
      },
      "110": {
        code: "110",
        name: "의정부",
        name_en: "Uijeongbu",
        name_cn: "议政府",
        name_jp: "ウィジョンブ"
      },
      "111": {
        code: "111",
        name: "회룡",
        name_en: "Hoeryong",
        name_cn: "回龙",
        name_jp: "フェリョン"
      },
      "112": {
        code: "112",
        name: "망월사",
        name_en: "Mangwolsa",
        name_cn: "望月寺",
        name_jp: "マンウォルサ"
      },
      "113": {
        code: "113",
        name: "도봉산",
        name_en: "Dobongsan",
        name_cn: "道峰山",
        name_jp: "トボンサン"
      },
      "114": {
        code: "114",
        name: "도봉",
        name_en: "Dobong",
        name_cn: "道峰",
        name_jp: "トボン"
      },
      "115": {
        code: "115",
        name: "방학",
        name_en: "Banghak",
        name_cn: "放鹤",
        name_jp: "パンハク"
      },
      "116": {
        code: "116",
        name: "창동",
        name_en: "Chang-dong",
        name_cn: "仓洞",
        name_jp: "チャンドン"
      },
      "117": {
        code: "117",
        name: "녹천",
        name_en: "Nokcheon",
        name_cn: "鹿川",
        name_jp: "ノクチョン"
      },
      "118": {
        code: "118",
        name: "월계",
        name_en: "Wolgye",
        name_cn: "月溪",
        name_jp: "ウォルゲ"
      },
      "119": {
        code: "119",
        name: "광운대",
        name_en: "Kwangwoon Univ.",
        name_cn: "光云大",
        name_jp: "光云大"
      },
      "120": {
        code: "120",
        name: "석계",
        name_en: "Seokgye",
        name_cn: "石溪",
        name_jp: "ソッケ"
      },
      "121": {
        code: "121",
        name: "신이문",
        name_en: "Sinimun",
        name_cn: "新里门",
        name_jp: "シニムン"
      },
      "122": {
        code: "122",
        name: "외대앞",
        name_en: "Hankuk Univ. of Foreign Studies",
        name_cn: "韩国外国语大学",
        name_jp: "ウェデアプ"
      },
      "123": {
        code: "123",
        name: "회기",
        name_en: "Hoegi",
        name_cn: "回基",
        name_jp: "フェギ"
      },
      "124": {
        code: "124",
        name: "청량리",
        name_en: "Cheongnyangni",
        name_cn: "清凉里",
        name_jp: "チョンニャンニ"
      },
      "125": {
        code: "125",
        name: "제기동",
        name_en: "Jegi-dong",
        name_cn: "祭基洞",
        name_jp: "チェギドン"
      },
      "126": {
        code: "126",
        name: "신설동",
        name_en: "Sinseol-dong",
        name_cn: "新设洞",
        name_jp: "シンソルトン"
      },
      "127": {
        code: "127",
        name: "동묘앞",
        name_en: "Dongmyo",
        name_cn: "东庙",
        name_jp: "トンミョアプ"
      },
      "128": {
        code: "128",
        name: "동대문",
        name_en: "Dongdaemun",
        name_cn: "东大门",
        name_jp: "トンデムン"
      },
      "129": {
        code: "129",
        name: "종로5가",
        name_en: "Jongno 5(o)-ga",
        name_cn: "钟路五街",
        name_jp: "チョンノオガ"
      },
      "130": {
        code: "130",
        name: "종로3가",
        name_en: "Jongno 3(sam)-ga",
        name_cn: "钟路三街",
        name_jp: "チョンノサムガ"
      },
      "131": {
        code: "131",
        name: "종각",
        name_en: "Jonggak",
        name_cn: "钟阁",
        name_jp: "チョンガク"
      },
      "132": {
        code: "132",
        name: "시청",
        name_en: "City Hall",
        name_cn: "市厅",
        name_jp: "シチョン"
      },
      "133": {
        code: "133",
        name: "서울역",
        name_en: "Seoul Station",
        name_cn: "首尔",
        name_jp: "ソウル"
      },
      "134": {
        code: "134",
        name: "남영",
        name_en: "Namyeong",
        name_cn: "南营",
        name_jp: "ナミョン"
      },
      "135": {
        code: "135",
        name: "용산",
        name_en: "Yongsan",
        name_cn: "龙山",
        name_jp: "ヨンサン"
      },
      "136": {
        code: "136",
        name: "노량진",
        name_en: "Noryangjin",
        name_cn: "鹭梁津",
        name_jp: "ノリャンジン"
      },
      "137": {
        code: "137",
        name: "대방",
        name_en: "Daebang",
        name_cn: "大方",
        name_jp: "テバン"
      },
      "138": {
        code: "138",
        name: "신길",
        name_en: "Singil",
        name_cn: "新吉",
        name_jp: "シンギル"
      },
      "139": {
        code: "139",
        name: "영등포",
        name_en: "Yeongdeungpo",
        name_cn: "永登浦",
        name_jp: "ヨンドゥンポ"
      },
      "140": {
        code: "140",
        name: "신도림",
        name_en: "Sindorim",
        name_cn: "新道林",
        name_jp: "シンドリム"
      },
      "141": {
        code: "141",
        name: "구로",
        name_en: "Guro",
        name_cn: "九老",
        name_jp: "クロ"
      },
      "142": {
        code: "142",
        name: "구일",
        name_en: "Guil",
        name_cn: "九一",
        name_jp: "クイル"
      },
      "143": {
        code: "143",
        name: "개봉",
        name_en: "Gaebong",
        name_cn: "开峰",
        name_jp: "ケボン"
      },
      "144": {
        code: "144",
        name: "오류동",
        name_en: "Oryu-dong",
        name_cn: "梧柳洞",
        name_jp: "オリュドン"
      },
      "145": {
        code: "145",
        name: "온수",
        name_en: "Onsu",
        name_cn: "温水",
        name_jp: "オンス"
      },
      "146": {
        code: "146",
        name: "역곡",
        name_en: "Yeokgok",
        name_cn: "驿谷",
        name_jp: "ヨッコク"
      },
      "147": {
        code: "147",
        name: "소사",
        name_en: "Sosa",
        name_cn: "素砂",
        name_jp: "ソサ"
      },
      "148": {
        code: "148",
        name: "부천",
        name_en: "Bucheon",
        name_cn: "富川",
        name_jp: "プチョン"
      },
      "149": {
        code: "149",
        name: "중동",
        name_en: "Jung-dong",
        name_cn: "中洞",
        name_jp: "チュンドン"
      },
      "150": {
        code: "150",
        name: "송내",
        name_en: "Songnae",
        name_cn: "松内",
        name_jp: "ソンネ"
      },
      "151": {
        code: "151",
        name: "부개",
        name_en: "Bugae",
        name_cn: "富开",
        name_jp: "プゲ"
      },
      "152": {
        code: "152",
        name: "부평",
        name_en: "Bupyeong",
        name_cn: "富平",
        name_jp: "プピョン"
      },
      "153": {
        code: "153",
        name: "백운",
        name_en: "Baegun",
        name_cn: "白云",
        name_jp: "ペグン"
      },
      "154": {
        code: "154",
        name: "동암",
        name_en: "Dongam",
        name_cn: "铜岩",
        name_jp: "トンアム"
      },
      "155": {
        code: "155",
        name: "간석",
        name_en: "Ganseok",
        name_cn: "间石",
        name_jp: "カンソク"
      },
      "156": {
        code: "156",
        name: "주안",
        name_en: "Juan",
        name_cn: "朱安",
        name_jp: "チュアン"
      },
      "157": {
        code: "157",
        name: "도화",
        name_en: "Dohwa",
        name_cn: "道禾",
        name_jp: "トファ"
      },
      "158": {
        code: "158",
        name: "제물포",
        name_en: "Jemulpo",
        name_cn: "济物浦",
        name_jp: "チェムルポ"
      },
      "159": {
        code: "159",
        name: "도원",
        name_en: "Dowon",
        name_cn: "桃源",
        name_jp: "トウォン"
      },
      "160": {
        code: "160",
        name: "동인천",
        name_en: "Dongincheon",
        name_cn: "东仁川",
        name_jp: "トンインチョン"
      },
      "161": {
        code: "161",
        name: "인천",
        name_en: "Incheon",
        name_cn: "仁川",
        name_jp: "インチョン"
      },
      "P157": {
        code: "P157",
        name: "병점",
        name_en: "Byeongjeom",
        name_cn: "饼店",
        name_jp: "ピョンチョム"
      },
      "P156": {
        code: "P156",
        name: "세류",
        name_en: "Seryu",
        name_cn: "细柳",
        name_jp: "セリュ"
      },
      "P155": {
        code: "P155",
        name: "수원",
        name_en: "Suwon",
        name_cn: "水原",
        name_jp: "スウォン"
      },
      "P172": {
        code: "P172",
        name: "아산",
        name_en: "Asan",
        name_cn: "牙山",
        name_jp: "アサン"
      },
      "P170": {
        code: "P170",
        name: "봉명",
        name_en: "Bongmyeong",
        name_cn: "凤鸣",
        name_jp: "ポンミョン"
      },
      "P177": {
        code: "P177",
        name: "신창",
        name_en: "Sinchang",
        name_cn: "新昌",
        name_jp: "シンチャン"
      },
      "P153": {
        code: "P153",
        name: "성균관대",
        name_en: "Sungkyunkwan  Univ.",
        name_cn: "成均馆大学",
        name_jp: "ソンギュングァンデ"
      },
      "P145": {
        code: "P145",
        name: "석수",
        name_en: "Seoksu",
        name_cn: "石水",
        name_jp: "ソッス"
      },
      "P142": {
        code: "P142",
        name: "가산디지털단지",
        name_en: "Gasan Digital Complex",
        name_cn: "加山数码园区",
        name_jp: "カサン・デジタルダンジ"
      },
      "P144": {
        code: "P144",
        name: "금천구청",
        name_en: "Geumcheon-Gu Office",
        name_cn: "衿川区厅",
        name_jp: "クムチョングチョン"
      },
      "P173": {
        code: "P173",
        name: "탕정",
        name_en: "Tangjeong",
        name_cn: "汤井",
        name_jp: "タンジョン"
      },
      "P154": {
        code: "P154",
        name: "화서",
        name_en: "Hwaseo",
        name_cn: "华西",
        name_jp: "ファソ"
      },
      "P150": {
        code: "P150",
        name: "군포",
        name_en: "Gunpo",
        name_cn: "军浦",
        name_jp: "クンポ"
      },
      "P174": {
        code: "P174",
        name: "배방",
        name_en: "Baebang",
        name_cn: "排芳",
        name_jp: "ペバン"
      },
      "P149": {
        code: "P149",
        name: "금정",
        name_en: "Geumjeong",
        name_cn: "衿井",
        name_jp: "クムジョン"
      },
      "P143": {
        code: "P143",
        name: "독산",
        name_en: "Doksan",
        name_cn: "秃山",
        name_jp: "トッサン"
      },
      "P167": {
        code: "P167",
        name: "직산",
        name_en: "Jiksan",
        name_cn: "稷山",
        name_jp: "チッサン"
      },
      "P146": {
        code: "P146",
        name: "관악",
        name_en: "Gwanak",
        name_cn: "冠岳",
        name_jp: "クァナク"
      },
      "P160": {
        code: "P160",
        name: "오산",
        name_en: "Osan",
        name_cn: "乌山",
        name_jp: "オサン"
      },
      "P157-1": {
        code: "P157-1",
        name: "서동탄",
        name_en: "Seodongtan",
        name_cn: "西东滩",
        name_jp: "ソドンタン"
      },
      "P147": {
        code: "P147",
        name: "안양",
        name_en: "Anyang",
        name_cn: "安养",
        name_jp: "アニヤン"
      },
      "P169": {
        code: "P169",
        name: "천안",
        name_en: "Cheonan",
        name_cn: "天安",
        name_jp: "チョナン"
      },
      "P158": {
        code: "P158",
        name: "세마",
        name_en: "Sema",
        name_cn: "洗马",
        name_jp: "セマ"
      },
      "P163": {
        code: "P163",
        name: "서정리",
        name_en: "Seojeong-ri",
        name_cn: "西井里",
        name_jp: "ソジョンニ"
      },
      "P152": {
        code: "P152",
        name: "의왕",
        name_en: "Uiwang",
        name_cn: "儀王",
        name_jp: "ウィワン"
      },
      "P144-1": {
        code: "P144-1",
        name: "광명",
        name_en: "Gwangmyeong",
        name_cn: "光明",
        name_jp: "クァンミョン"
      },
      "P151": {
        code: "P151",
        name: "당정",
        name_en: "Dangjeong",
        name_cn: "堂井",
        name_jp: "タンジョン"
      },
      "P168": {
        code: "P168",
        name: "두정",
        name_en: "Dujeong",
        name_cn: "斗井",
        name_jp: "トゥジョン"
      },
      "P166": {
        code: "P166",
        name: "성환",
        name_en: "Seonghwan",
        name_cn: "成欢",
        name_jp: "ソンファン"
      },
      "P165": {
        code: "P165",
        name: "평택",
        name_en: "Pyeongtaek",
        name_cn: "平泽",
        name_jp: "ピョンテク"
      },
      "P164": {
        code: "P164",
        name: "평택지제",
        name_en: "PyeongtaekJije",
        name_cn: "平泽芝制",
        name_jp: "ピョンテクチジェ"
      },
      "P162": {
        code: "P162",
        name: "송탄",
        name_en: "Songtan",
        name_cn: "松炭",
        name_jp: "ソンタン"
      },
      "P161": {
        code: "P161",
        name: "진위",
        name_en: "Jinwi",
        name_cn: "振威",
        name_jp: "チヌィ"
      },
      "P159": {
        code: "P159",
        name: "오산대",
        name_en: "Osan College",
        name_cn: "乌山大学",
        name_jp: "オサンデ"
      },
      "P148": {
        code: "P148",
        name: "명학",
        name_en: "Myeonghak",
        name_cn: "鸣鹤",
        name_jp: "ミョンハク"
      },
      "P176": {
        code: "P176",
        name: "온양온천",
        name_en: "Onyang oncheon",
        name_cn: "温阳温泉",
        name_jp: "オニャンオンチョン"
      },
      "P171": {
        code: "P171",
        name: "쌍용",
        name_en: "Ssangyong",
        name_cn: "双龙",
        name_jp: "サンヨン"
      }
    }
  },
  "2호선": {
    color: "#00A84D",
    icon: "2",
    stations: {
      "201": {
        code: "201",
        name: "시청",
        name_en: "City Hall",
        name_cn: "市廳",
        name_jp: "シチョン"
      },
      "202": {
        code: "202",
        name: "을지로입구",
        name_en: "Euljiro 1(il)-ga",
        name_cn: "乙支路入口",
        name_jp: "ウルチロイック"
      },
      "203": {
        code: "203",
        name: "을지로3가",
        name_en: "Euljiro 3(sam)-ga",
        name_cn: "乙支路三街",
        name_jp: "ウルチロサムガ"
      },
      "204": {
        code: "204",
        name: "을지로4가",
        name_en: "Euljiro 4(sa)-ga",
        name_cn: "乙支路四街",
        name_jp: "ウルチロサガ"
      },
      "205": {
        code: "205",
        name: "동대문역사문화공원",
        name_en: "Dongdaemun History  Culture Park",
        name_cn: "东大门历史文化公园(DDP)",
        name_jp: "トンデムンヨクサムンファゴンウォン(DDP)"
      },
      "206": {
        code: "206",
        name: "신당",
        name_en: "Sindang",
        name_cn: "新堂",
        name_jp: "シンダン"
      },
      "207": {
        code: "207",
        name: "상왕십리",
        name_en: "Sangwangsimni",
        name_cn: "上往十里",
        name_jp: "サンワンシムニ"
      },
      "208": {
        code: "208",
        name: "왕십리",
        name_en: "Wangsimni",
        name_cn: "往十里",
        name_jp: "ワンシムニ"
      },
      "209": {
        code: "209",
        name: "한양대",
        name_en: "Hanyang Univ.",
        name_cn: "汉阳大学",
        name_jp: "ハニャンデ"
      },
      "210": {
        code: "210",
        name: "뚝섬",
        name_en: "Ttukseom",
        name_cn: "纛岛",
        name_jp: "トゥッソム"
      },
      "211": {
        code: "211",
        name: "성수",
        name_en: "Seongsu",
        name_cn: "圣水",
        name_jp: "ソンス"
      },
      "212": {
        code: "212",
        name: "건대입구",
        name_en: "Konkuk Univ.",
        name_cn: "建国大学",
        name_jp: "コンデイック"
      },
      "213": {
        code: "213",
        name: "구의",
        name_en: "Guui",
        name_cn: "九宜",
        name_jp: "クイ"
      },
      "214": {
        code: "214",
        name: "강변",
        name_en: "Gangbyeon",
        name_cn: "江边(东首尔客运站)",
        name_jp: "カンビョン"
      },
      "215": {
        code: "215",
        name: "잠실나루",
        name_en: "Jamsillaru",
        name_cn: "蚕室渡口",
        name_jp: "チャムシルナル"
      },
      "216": {
        code: "216",
        name: "잠실",
        name_en: "Jamsil",
        name_cn: "蚕室(松坡区厅)",
        name_jp: "チャムシル"
      },
      "217": {
        code: "217",
        name: "잠실새내",
        name_en: "Jamsilsaenae",
        name_cn: "蚕室新川",
        name_jp: "チャムシルセネ"
      },
      "218": {
        code: "218",
        name: "종합운동장",
        name_en: "Sports Complex",
        name_cn: "综合运动场",
        name_jp: "チョンハブンドンジャン"
      },
      "219": {
        code: "219",
        name: "삼성",
        name_en: "Samseong",
        name_cn: "三成(会展中心)",
        name_jp: "サムソン(三成)"
      },
      "220": {
        code: "220",
        name: "선릉",
        name_en: "Seolleung",
        name_cn: "宣陵",
        name_jp: "ソンルン"
      },
      "221": {
        code: "221",
        name: "역삼",
        name_en: "Yeoksam",
        name_cn: "驿三",
        name_jp: "ヨッサム"
      },
      "222": {
        code: "222",
        name: "강남",
        name_en: "Gangnam",
        name_cn: "江南",
        name_jp: "カンナム"
      },
      "223": {
        code: "223",
        name: "교대",
        name_en: "Seoul Nat`l Univ. of Education",
        name_cn: "首尔教育大学",
        name_jp: "キョデ"
      },
      "224": {
        code: "224",
        name: "서초",
        name_en: "Seocho",
        name_cn: "瑞草",
        name_jp: "ソチョ"
      },
      "225": {
        code: "225",
        name: "방배",
        name_en: "Bangbae",
        name_cn: "方背",
        name_jp: "パンベ"
      },
      "226": {
        code: "226",
        name: "사당",
        name_en: "Sadang",
        name_cn: "舍堂",
        name_jp: "サダン"
      },
      "227": {
        code: "227",
        name: "낙성대",
        name_en: "Nakseongdae",
        name_cn: "落星垈",
        name_jp: "ナクソンデ"
      },
      "228": {
        code: "228",
        name: "서울대입구",
        name_en: "Seoul Nat`l Univ.",
        name_cn: "首尔大学(冠岳区厅)",
        name_jp: "ソウルデイック"
      },
      "229": {
        code: "229",
        name: "봉천",
        name_en: "Bongcheon",
        name_cn: "奉天",
        name_jp: "ポンチョン"
      },
      "230": {
        code: "230",
        name: "신림",
        name_en: "Sillim",
        name_cn: "新林",
        name_jp: "シンリム"
      },
      "231": {
        code: "231",
        name: "신대방",
        name_en: "Sindaebang",
        name_cn: "新大方",
        name_jp: "シンデバン"
      },
      "232": {
        code: "232",
        name: "구로디지털단지",
        name_en: "Guro Digital Complex",
        name_cn: "九老数码园区",
        name_jp: "クロ・デジタルダンジ"
      },
      "233": {
        code: "233",
        name: "대림",
        name_en: "Daerim",
        name_cn: "大林(九老区厅)",
        name_jp: "テリム"
      },
      "234": {
        code: "234",
        name: "신도림",
        name_en: "Sindorim",
        name_cn: "新道林",
        name_jp: "シンドリム"
      },
      "235": {
        code: "235",
        name: "문래",
        name_en: "Mullae",
        name_cn: "文來",
        name_jp: "ムンレ"
      },
      "236": {
        code: "236",
        name: "영등포구청",
        name_en: "Yeongdeungpo-gu Office",
        name_cn: "永登浦区厅",
        name_jp: "ヨンドゥンポグチョン"
      },
      "237": {
        code: "237",
        name: "당산",
        name_en: "Dangsan",
        name_cn: "堂山",
        name_jp: "タンサン"
      },
      "238": {
        code: "238",
        name: "합정",
        name_en: "Hapjeong",
        name_cn: "合井",
        name_jp: "ハプチョン"
      },
      "239": {
        code: "239",
        name: "홍대입구",
        name_en: "Hongik Univ.",
        name_cn: "弘益大学",
        name_jp: "ホンデイック"
      },
      "240": {
        code: "240",
        name: "신촌",
        name_en: "Sinchon",
        name_cn: "新村",
        name_jp: "シンチョン(新村)"
      },
      "241": {
        code: "241",
        name: "이대",
        name_en: "Ewha Womans Univ.",
        name_cn: "梨花女子大学",
        name_jp: "イデ"
      },
      "242": {
        code: "242",
        name: "아현",
        name_en: "Ahyeon",
        name_cn: "阿岘",
        name_jp: "アヒョン"
      },
      "243": {
        code: "243",
        name: "충정로",
        name_en: "Chungjeongno",
        name_cn: "忠正路(京畿大学)",
        name_jp: "チュンジョンノ"
      },
      "211-1": {
        code: "211-1",
        name: "용답",
        name_en: "Yongdap",
        name_cn: "龙踏",
        name_jp: "ヨンダプ"
      },
      "234-2": {
        code: "234-2",
        name: "양천구청",
        name_en: "Yangcheon-gu Office",
        name_cn: "阳川区厅",
        name_jp: "ヤンチョングチョン"
      },
      "211-2": {
        code: "211-2",
        name: "신답",
        name_en: "Sindap",
        name_cn: "新踏",
        name_jp: "シンダプ"
      },
      "234-3": {
        code: "234-3",
        name: "신정네거리",
        name_en: "Sinjeongnegeori",
        name_cn: "新亭十字路口",
        name_jp: "シンジョンネゴリ"
      },
      "211-3": {
        code: "211-3",
        name: "용두",
        name_en: "Yongdu",
        name_cn: "龙头(东大门区厅)",
        name_jp: "ヨンドゥ"
      },
      "211-4": {
        code: "211-4",
        name: "신설동",
        name_en: "Sinseol-dong",
        name_cn: "新設洞",
        name_jp: "シンソルトン"
      },
      "234-1": {
        code: "234-1",
        name: "도림천",
        name_en: "Dorimcheon",
        name_cn: "道林川",
        name_jp: "トリムチョン"
      },
      "234-4": {
        code: "234-4",
        name: "까치산",
        name_en: "Kkachisan",
        name_cn: "喜鹊山",
        name_jp: "カチサン"
      }
    }
  },
  "3호선": {
    color: "#EF7C1C",
    icon: "3",
    stations: {
      "309": {
        code: "309",
        name: "대화",
        name_en: "Daehwa",
        name_cn: "大化",
        name_jp: "大化"
      },
      "310": {
        code: "310",
        name: "주엽",
        name_en: "Juyeop",
        name_cn: "注葉",
        name_jp: "注葉"
      },
      "311": {
        code: "311",
        name: "정발산",
        name_en: "Jeongbalsan",
        name_cn: "鼎鉢山",
        name_jp: "鼎鉢山"
      },
      "312": {
        code: "312",
        name: "마두",
        name_en: "Madu",
        name_cn: "馬頭",
        name_jp: "馬頭"
      },
      "313": {
        code: "313",
        name: "백석",
        name_en: "Baekseok",
        name_cn: "白石",
        name_jp: "白石"
      },
      "314": {
        code: "314",
        name: "대곡",
        name_en: "Daegok",
        name_cn: "大谷",
        name_jp: "大谷"
      },
      "315": {
        code: "315",
        name: "화정",
        name_en: "Hwajeong",
        name_cn: "花井",
        name_jp: "花井"
      },
      "316": {
        code: "316",
        name: "원당",
        name_en: "Wondang",
        name_cn: "元堂",
        name_jp: "元堂"
      },
      "317": {
        code: "317",
        name: "원흥",
        name_en: "Wonheung",
        name_cn: "元興",
        name_jp: "ウォンフン"
      },
      "318": {
        code: "318",
        name: "삼송",
        name_en: "Samsong",
        name_cn: "三松",
        name_jp: "三松"
      },
      "319": {
        code: "319",
        name: "지축",
        name_en: "Jichuk",
        name_cn: "纸杻",
        name_jp: "チチュク"
      },
      "320": {
        code: "320",
        name: "구파발",
        name_en: "Gupabal",
        name_cn: "旧把拨",
        name_jp: "クパバル"
      },
      "321": {
        code: "321",
        name: "연신내",
        name_en: "Yeonsinnae",
        name_cn: "延新川",
        name_jp: "ヨンシンネ"
      },
      "322": {
        code: "322",
        name: "불광",
        name_en: "Bulgwang",
        name_cn: "佛光",
        name_jp: "プルグァン"
      },
      "323": {
        code: "323",
        name: "녹번",
        name_en: "Nokbeon",
        name_cn: "碌磻",
        name_jp: "ノッポン"
      },
      "324": {
        code: "324",
        name: "홍제",
        name_en: "Hongje",
        name_cn: "弘济",
        name_jp: "ホンジェ"
      },
      "325": {
        code: "325",
        name: "무악재",
        name_en: "Muakjae",
        name_cn: "毋岳岭",
        name_jp: "ムアクチェ"
      },
      "326": {
        code: "326",
        name: "독립문",
        name_en: "Dongnimmun",
        name_cn: "独立门",
        name_jp: "トンニンムン"
      },
      "327": {
        code: "327",
        name: "경복궁",
        name_en: "Gyeongbokgung",
        name_cn: "景福宫(政府首尔厅舍)",
        name_jp: "キョンボックン"
      },
      "328": {
        code: "328",
        name: "안국",
        name_en: "Anguk",
        name_cn: "安国",
        name_jp: "アングク"
      },
      "329": {
        code: "329",
        name: "종로3가",
        name_en: "Jongno 3(sam)-ga",
        name_cn: "钟路三街",
        name_jp: "チョンノサムガ"
      },
      "330": {
        code: "330",
        name: "을지로3가",
        name_en: "Euljiro 3(sam)-ga",
        name_cn: "乙支路三街",
        name_jp: "ウルチロサムガ"
      },
      "331": {
        code: "331",
        name: "충무로",
        name_en: "Chungmuro",
        name_cn: "忠武路",
        name_jp: "チュンムロ"
      },
      "332": {
        code: "332",
        name: "동대입구",
        name_en: "Dongguk Univ.",
        name_cn: "东国大学",
        name_jp: "トンデイック"
      },
      "333": {
        code: "333",
        name: "약수",
        name_en: "Yaksu",
        name_cn: "药水",
        name_jp: "ヤクス"
      },
      "334": {
        code: "334",
        name: "금호",
        name_en: "Geumho",
        name_cn: "金湖",
        name_jp: "クムホ"
      },
      "335": {
        code: "335",
        name: "옥수",
        name_en: "Oksu",
        name_cn: "玉水",
        name_jp: "オクス"
      },
      "336": {
        code: "336",
        name: "압구정",
        name_en: "Apgujeong",
        name_cn: "狎鸥亭",
        name_jp: "アックジョン"
      },
      "337": {
        code: "337",
        name: "신사",
        name_en: "Sinsa",
        name_cn: "新沙",
        name_jp: "シンサ"
      },
      "338": {
        code: "338",
        name: "잠원",
        name_en: "Jamwon",
        name_cn: "蚕院",
        name_jp: "チャムォン"
      },
      "339": {
        code: "339",
        name: "고속터미널",
        name_en: "Express Bus Terminal",
        name_cn: "高速巴士客运站",
        name_jp: "コソクターミナル"
      },
      "340": {
        code: "340",
        name: "교대",
        name_en: "Seoul Nat`l Univ. of Education",
        name_cn: "首尔教育大学",
        name_jp: "キョデ "
      },
      "341": {
        code: "341",
        name: "남부터미널",
        name_en: "Nambu Bus Terminal",
        name_cn: "南部客运站",
        name_jp: "ナンブターミナル"
      },
      "342": {
        code: "342",
        name: "양재",
        name_en: "Yangjae",
        name_cn: "良才(瑞草区厅)",
        name_jp: "ヤンジェ"
      },
      "343": {
        code: "343",
        name: "매봉",
        name_en: "Maebong",
        name_cn: "梅峰",
        name_jp: "メボン"
      },
      "344": {
        code: "344",
        name: "도곡",
        name_en: "Dogok",
        name_cn: "道谷",
        name_jp: "トゴク"
      },
      "345": {
        code: "345",
        name: "대치",
        name_en: "Daechi",
        name_cn: "大峙",
        name_jp: "テチ"
      },
      "346": {
        code: "346",
        name: "학여울",
        name_en: "Hangnyeoul",
        name_cn: "鹤滩",
        name_jp: "ハンニョウル"
      },
      "347": {
        code: "347",
        name: "대청",
        name_en: "Daecheong",
        name_cn: "大厅",
        name_jp: "テチョン"
      },
      "348": {
        code: "348",
        name: "일원",
        name_en: "Irwon",
        name_cn: "逸院",
        name_jp: "イルォン"
      },
      "349": {
        code: "349",
        name: "수서",
        name_en: "Suseo",
        name_cn: "水西",
        name_jp: "スソ"
      },
      "350": {
        code: "350",
        name: "가락시장",
        name_en: "Garak Market",
        name_cn: "可乐市场",
        name_jp: "カラク・シジャン"
      },
      "351": {
        code: "351",
        name: "경찰병원",
        name_en: "National Police Hospital",
        name_cn: "警察医院",
        name_jp: "キョンチャル・ピョンウォン"
      },
      "352": {
        code: "352",
        name: "오금",
        name_en: "Ogeum",
        name_cn: "梧琴",
        name_jp: "オグム"
      }
    }
  },
  "4호선": {
    color: "#00A4E3",
    icon: "4",
    stations: {
      "405": {
        code: "405",
        name: "진접",
        name_en: "Jinjeop",
        name_cn: "榛接",
        name_jp: "チンジョプ"
      },
      "406": {
        code: "406",
        name: "오남",
        name_en: "Onam",
        name_cn: "梧 南",
        name_jp: "オナム"
      },
      "408": {
        code: "408",
        name: "별내별가람",
        name_en: "Byeollae Byeolgaram",
        name_cn: "別內星江",
        name_jp: "ピョルネビョルガラム"
      },
      "409": {
        code: "409",
        name: "당고개",
        name_en: "Danggogae",
        name_cn: "堂岭",
        name_jp: "タンゴゲ"
      },
      "410": {
        code: "410",
        name: "상계",
        name_en: "Sanggye",
        name_cn: "上溪",
        name_jp: "サンゲ"
      },
      "411": {
        code: "411",
        name: "노원",
        name_en: "Nowon",
        name_cn: "芦原",
        name_jp: "ノウォン"
      },
      "412": {
        code: "412",
        name: "창동",
        name_en: "Chang-dong",
        name_cn: "仓洞",
        name_jp: "チャンドン"
      },
      "413": {
        code: "413",
        name: "쌍문",
        name_en: "Ssangmun",
        name_cn: "双门",
        name_jp: "サンムン"
      },
      "414": {
        code: "414",
        name: "수유",
        name_en: "Suyu",
        name_cn: "水逾(江北区厅)",
        name_jp: "スユ"
      },
      "415": {
        code: "415",
        name: "미아",
        name_en: "Mia",
        name_cn: "弥阿(首尔网络大学)",
        name_jp: "ミア"
      },
      "416": {
        code: "416",
        name: "미아사거리",
        name_en: "Miasageori",
        name_cn: "弥阿十字路口",
        name_jp: "ミアサゴリ"
      },
      "417": {
        code: "417",
        name: "길음",
        name_en: "Gireum",
        name_cn: "吉音",
        name_jp: "キルム"
      },
      "418": {
        code: "418",
        name: "성신여대입구",
        name_en: "Sungshin Women`s Univ.",
        name_cn: "诚信女子大学(敦岩)",
        name_jp: "ソンシンヨデイック"
      },
      "419": {
        code: "419",
        name: "한성대입구",
        name_en: "Hansung Univ.",
        name_cn: "汉城大学",
        name_jp: "ハンソンデイック"
      },
      "420": {
        code: "420",
        name: "혜화",
        name_en: "Hyehwa",
        name_cn: "惠化",
        name_jp: "ヘファ"
      },
      "421": {
        code: "421",
        name: "동대문",
        name_en: "Dongdaemun",
        name_cn: "东大门",
        name_jp: "トンデムン"
      },
      "422": {
        code: "422",
        name: "동대문역사문화공원",
        name_en: "Dongdaemun History  Culture Park",
        name_cn: "东大门历史文化公园",
        name_jp: "トンデムンヨクサムンファゴンウォン"
      },
      "423": {
        code: "423",
        name: "충무로",
        name_en: "Chungmuro",
        name_cn: "忠武路",
        name_jp: "チュンムロ"
      },
      "424": {
        code: "424",
        name: "명동",
        name_en: "Myeong-dong",
        name_cn: "明洞",
        name_jp: "ミョンドン"
      },
      "425": {
        code: "425",
        name: "회현",
        name_en: "Hoehyeon",
        name_cn: "会贤(南大门市场)",
        name_jp: "フェヒョン"
      },
      "426": {
        code: "426",
        name: "서울역",
        name_en: "Seoul Station",
        name_cn: "首尔站",
        name_jp: "ソウルヨク"
      },
      "427": {
        code: "427",
        name: "숙대입구",
        name_en: "Sookmyung Women`s Univ.",
        name_cn: "淑明女子大学(葛月)",
        name_jp: "スクテイック"
      },
      "428": {
        code: "428",
        name: "삼각지",
        name_en: "Samgakji",
        name_cn: "三角地",
        name_jp: "サムガクチ"
      },
      "429": {
        code: "429",
        name: "신용산",
        name_en: "Sinyongsan",
        name_cn: "新龙山",
        name_jp: "シニョンサン"
      },
      "430": {
        code: "430",
        name: "이촌",
        name_en: "Ichon",
        name_cn: "二村",
        name_jp: "イチョン"
      },
      "431": {
        code: "431",
        name: "동작",
        name_en: "Dongjak",
        name_cn: "铜雀(显忠院)",
        name_jp: "トンジャク"
      },
      "432": {
        code: "432",
        name: "총신대입구(이수)",
        name_en: "Chongshin Univ.",
        name_cn: "总神大学",
        name_jp: "チョンシンデイック"
      },
      "433": {
        code: "433",
        name: "사당",
        name_en: "Sadang",
        name_cn: "舍堂",
        name_jp: "サダン"
      },
      "434": {
        code: "434",
        name: "남태령",
        name_en: "Namtaeryeong",
        name_cn: "南泰岭",
        name_jp: "ナムテリョン"
      },
      "435": {
        code: "435",
        name: "선바위",
        name_en: "Seonbawi",
        name_cn: "立岩",
        name_jp: "ソンバウィ"
      },
      "436": {
        code: "436",
        name: "경마공원",
        name_en: "Seoul Racecourse Park",
        name_cn: "赛马公园",
        name_jp: "キョンマゴンウォン"
      },
      "437": {
        code: "437",
        name: "대공원",
        name_en: "Seoul Grand Park",
        name_cn: "首尔大公园",
        name_jp: "テゴンウォン"
      },
      "438": {
        code: "438",
        name: "과천",
        name_en: "Gwacheon",
        name_cn: "果川",
        name_jp: "クァチョン"
      },
      "439": {
        code: "439",
        name: "정부과천청사",
        name_en: "Government Complex Gwacheon",
        name_cn: "政府果川厅舍",
        name_jp: "チョンブ・クァチョンチョンサ"
      },
      "440": {
        code: "440",
        name: "인덕원",
        name_en: "Indeogwon",
        name_cn: "仁德院",
        name_jp: "インドグォン"
      },
      "441": {
        code: "441",
        name: "평촌",
        name_en: "Pyeongchon",
        name_cn: "坪村",
        name_jp: "ピョンチョン"
      },
      "442": {
        code: "442",
        name: "범계",
        name_en: "Beomgye",
        name_cn: "凡溪",
        name_jp: "ポムゲ"
      },
      "443": {
        code: "443",
        name: "금정",
        name_en: "Geumjeong",
        name_cn: "衿井",
        name_jp: "クムジョン"
      },
      "444": {
        code: "444",
        name: "산본",
        name_en: "Sanbon",
        name_cn: "山本",
        name_jp: "サンボン"
      },
      "445": {
        code: "445",
        name: "수리산",
        name_en: "Surisan",
        name_cn: "修理山",
        name_jp: "スリサン"
      },
      "446": {
        code: "446",
        name: "대야미",
        name_en: "Daeyami",
        name_cn: "大夜味",
        name_jp: "テヤミ"
      },
      "447": {
        code: "447",
        name: "반월",
        name_en: "Banwol",
        name_cn: "半月",
        name_jp: "パヌォル"
      },
      "448": {
        code: "448",
        name: "상록수",
        name_en: "Sangnoksu",
        name_cn: "常绿树",
        name_jp: "サンロッス"
      },
      "449": {
        code: "449",
        name: "한대앞",
        name_en: "Hanyang Univ. at Ansan",
        name_cn: "汉阳大学",
        name_jp: "ハンデアプ"
      },
      "450": {
        code: "450",
        name: "중앙",
        name_en: "Jungang",
        name_cn: "中央",
        name_jp: "チュンアン"
      },
      "451": {
        code: "451",
        name: "고잔",
        name_en: "Gojan",
        name_cn: "古栈",
        name_jp: "コジャン"
      },
      "452": {
        code: "452",
        name: "초지",
        name_en: "Choji",
        name_cn: "草芝",
        name_jp: "チョジ"
      },
      "453": {
        code: "453",
        name: "안산",
        name_en: "Ansan",
        name_cn: "安山",
        name_jp: "アンサン"
      },
      "454": {
        code: "454",
        name: "신길온천",
        name_en: "Neunggil",
        name_cn: "新吉温泉",
        name_jp: "シンギル・オンチョン"
      },
      "455": {
        code: "455",
        name: "정왕",
        name_en: "Jeongwang",
        name_cn: "正往",
        name_jp: "チョンワン"
      },
      "456": {
        code: "456",
        name: "오이도",
        name_en: "Oido",
        name_cn: "乌耳岛",
        name_jp: "オイド"
      }
    }
  },
  "5호선": {
    color: "#996CAC",
    icon: "5",
    stations: {
      "510": {
        code: "510",
        name: "방화",
        name_en: "Banghwa",
        name_cn: "傍花",
        name_jp: "パンファ"
      },
      "511": {
        code: "511",
        name: "개화산",
        name_en: "Gaehwasan",
        name_cn: "开花山",
        name_jp: "ケファサン"
      },
      "512": {
        code: "512",
        name: "김포공항",
        name_en: "Gimpo Intl. Airport",
        name_cn: "金浦机场",
        name_jp: "キンポゴンハン"
      },
      "513": {
        code: "513",
        name: "송정",
        name_en: "Songjeong",
        name_cn: "松亭",
        name_jp: "ソンジョン"
      },
      "514": {
        code: "514",
        name: "마곡",
        name_en: "Magok",
        name_cn: "麻谷",
        name_jp: "マゴク"
      },
      "515": {
        code: "515",
        name: "발산",
        name_en: "Balsan",
        name_cn: "钵山",
        name_jp: "パルサン"
      },
      "516": {
        code: "516",
        name: "우장산",
        name_en: "Ujangsan",
        name_cn: "雨装山",
        name_jp: "ウジャンサン"
      },
      "517": {
        code: "517",
        name: "화곡",
        name_en: "Hwagok",
        name_cn: "禾谷",
        name_jp: "ファゴク"
      },
      "518": {
        code: "518",
        name: "까치산",
        name_en: "Kkachisan",
        name_cn: "喜鹊山",
        name_jp: "カチサン"
      },
      "519": {
        code: "519",
        name: "신정",
        name_en: "Sinjeong",
        name_cn: "新亭",
        name_jp: "シンジョン"
      },
      "520": {
        code: "520",
        name: "목동",
        name_en: "Mok-dong",
        name_cn: "木洞",
        name_jp: "モクトン"
      },
      "521": {
        code: "521",
        name: "오목교",
        name_en: "Omokgyo",
        name_cn: "梧木桥",
        name_jp: "オモッキョ"
      },
      "522": {
        code: "522",
        name: "양평",
        name_en: "Yangpyeong",
        name_cn: "杨坪",
        name_jp: "ヤンピョン"
      },
      "523": {
        code: "523",
        name: "영등포구청",
        name_en: "Yeongdeungpo-gu Office",
        name_cn: "永登浦区厅",
        name_jp: "ヨンドゥンポグチョン"
      },
      "524": {
        code: "524",
        name: "영등포시장",
        name_en: "Yeongdeungpo Market",
        name_cn: "永登浦市场",
        name_jp: "ヨンドゥンポシジャン"
      },
      "525": {
        code: "525",
        name: "신길",
        name_en: "Singil",
        name_cn: "新吉",
        name_jp: "シンギル"
      },
      "526": {
        code: "526",
        name: "여의도",
        name_en: "Yeouido",
        name_cn: "汝矣岛",
        name_jp: "ヨイド"
      },
      "527": {
        code: "527",
        name: "여의나루",
        name_en: "Yeouinaru",
        name_cn: "汝矣渡口",
        name_jp: "ヨイナル"
      },
      "528": {
        code: "528",
        name: "마포",
        name_en: "Mapo",
        name_cn: "麻浦",
        name_jp: "マポ"
      },
      "529": {
        code: "529",
        name: "공덕",
        name_en: "Gongdeok",
        name_cn: "孔德",
        name_jp: "コンドク"
      },
      "530": {
        code: "530",
        name: "애오개",
        name_en: "Aeogae",
        name_cn: "儿岭",
        name_jp: "エオゲ"
      },
      "531": {
        code: "531",
        name: "충정로",
        name_en: "Chungjeongno",
        name_cn: "忠正路",
        name_jp: "チュンジョンノ"
      },
      "532": {
        code: "532",
        name: "서대문",
        name_en: "Seodaemun",
        name_cn: "西大门",
        name_jp: "ソデムン"
      },
      "533": {
        code: "533",
        name: "광화문",
        name_en: "Gwanghwamun",
        name_cn: "光化门",
        name_jp: "クァンファムン"
      },
      "534": {
        code: "534",
        name: "종로3가",
        name_en: "Jongno 3(sam)-ga",
        name_cn: "钟路三街",
        name_jp: "チョンノサムガ"
      },
      "535": {
        code: "535",
        name: "을지로4가",
        name_en: "Euljiro 4(sa)-ga",
        name_cn: "乙支路四街",
        name_jp: "ウルチロサガ"
      },
      "536": {
        code: "536",
        name: "동대문역사문화공원",
        name_en: "Dongdaemun History  Culture Park",
        name_cn: "东大门历史文化公园",
        name_jp: "トンデムンヨクサムンファゴンウォン"
      },
      "537": {
        code: "537",
        name: "청구",
        name_en: "Cheonggu",
        name_cn: "青丘",
        name_jp: "チョング"
      },
      "538": {
        code: "538",
        name: "신금호",
        name_en: "Singeumho",
        name_cn: "新金湖",
        name_jp: "シングムホ"
      },
      "539": {
        code: "539",
        name: "행당",
        name_en: "Haengdang",
        name_cn: "杏堂",
        name_jp: "ヘンダン"
      },
      "540": {
        code: "540",
        name: "왕십리",
        name_en: "Wangsimni",
        name_cn: "往十里",
        name_jp: "ワンシムニ"
      },
      "541": {
        code: "541",
        name: "마장",
        name_en: "Majang",
        name_cn: "马场",
        name_jp: "マジャン"
      },
      "542": {
        code: "542",
        name: "답십리",
        name_en: "Dapsimni",
        name_cn: "踏十里",
        name_jp: "タプシムニ"
      },
      "543": {
        code: "543",
        name: "장한평",
        name_en: "Janghanpyeong",
        name_cn: "长汉坪",
        name_jp: "チャンハンピョン"
      },
      "544": {
        code: "544",
        name: "군자",
        name_en: "Gunja",
        name_cn: "君子",
        name_jp: "クンジャ"
      },
      "545": {
        code: "545",
        name: "아차산",
        name_en: "Achasan",
        name_cn: "峨嵯山",
        name_jp: "アチャサン"
      },
      "546": {
        code: "546",
        name: "광나루",
        name_en: "Gwangnaru",
        name_cn: "广渡口",
        name_jp: "クァンナル"
      },
      "547": {
        code: "547",
        name: "천호",
        name_en: "Cheonho",
        name_cn: "千戶",
        name_jp: "チョンホ"
      },
      "548": {
        code: "548",
        name: "강동",
        name_en: "Gangdong",
        name_cn: "江东",
        name_jp: "カンドン"
      },
      "549": {
        code: "549",
        name: "길동",
        name_en: "Gil-dong",
        name_cn: "吉洞",
        name_jp: "キルトン"
      },
      "550": {
        code: "550",
        name: "굽은다리",
        name_en: "Gubeundari",
        name_cn: "曲桥",
        name_jp: "クブンダリ"
      },
      "551": {
        code: "551",
        name: "명일",
        name_en: "Myeongil",
        name_cn: "明逸",
        name_jp: "ミョンイル"
      },
      "552": {
        code: "552",
        name: "고덕",
        name_en: "Godeok",
        name_cn: "高德",
        name_jp: "コドク"
      },
      "553": {
        code: "553",
        name: "상일동",
        name_en: "Sangil-dong",
        name_cn: "上一洞",
        name_jp: "サンイルトン"
      },
      "554": {
        code: "554",
        name: "강일",
        name_en: "Gangil",
        name_cn: "江一",
        name_jp: "カンイル"
      },
      "555": {
        code: "555",
        name: "미사",
        name_en: "Misa",
        name_cn: "渼沙",
        name_jp: "ミサ"
      },
      "556": {
        code: "556",
        name: "하남풍산",
        name_en: "Hanam Pungsan",
        name_cn: "河南丰山",
        name_jp: "ハナンプンサン"
      },
      "557": {
        code: "557",
        name: "하남시청",
        name_en: "Hanam City Hall",
        name_cn: "河南市厅",
        name_jp: "ハナムシチョン"
      },
      "558": {
        code: "558",
        name: "하남검단산",
        name_en: "Hanam Geomdansan",
        name_cn: "河南黔丹山",
        name_jp: "ハナムゴムダンサン"
      },
      "P549": {
        code: "P549",
        name: "둔촌동",
        name_en: "Dunchon-dong",
        name_cn: "遁村洞",
        name_jp: "トゥンチョンドン"
      },
      "P550": {
        code: "P550",
        name: "올림픽공원",
        name_en: "Olympic Park",
        name_cn: "奥林匹克公园",
        name_jp: "オリンピックゴンウォン"
      },
      "P553": {
        code: "P553",
        name: "개롱",
        name_en: "Gaerong",
        name_cn: "开笼",
        name_jp: "ケロン"
      },
      "P554": {
        code: "P554",
        name: "거여",
        name_en: "Geoyeo",
        name_cn: "巨余",
        name_jp: "コヨ"
      },
      "P555": {
        code: "P555",
        name: "마천",
        name_en: "Macheon",
        name_cn: "马川",
        name_jp: "マチョン"
      },
      "P552": {
        code: "P552",
        name: "오금",
        name_en: "Ogeum",
        name_cn: "梧琴",
        name_jp: "オグム"
      },
      "P551": {
        code: "P551",
        name: "방이",
        name_en: "Bangi",
        name_cn: "芳荑",
        name_jp: "パンイ"
      }
    }
  },
  "6호선": {
    color: "#CD7C2F",
    icon: "7",
    stations: {
      "610": {
        code: "610",
        name: "응암",
        name_en: "Eungam",
        name_cn: "鹰岩",
        name_jp: "ウンアム"
      },
      "611": {
        code: "611",
        name: "역촌",
        name_en: "Yeokchon",
        name_cn: "驿村",
        name_jp: "ヨクチョン"
      },
      "612": {
        code: "612",
        name: "불광",
        name_en: "Bulgwang",
        name_cn: "佛光",
        name_jp: "プルグァン"
      },
      "613": {
        code: "613",
        name: "독바위",
        name_en: "Dokbawi",
        name_cn: "瓮岩",
        name_jp: "トッパウィ"
      },
      "614": {
        code: "614",
        name: "연신내",
        name_en: "Yeonsinnae",
        name_cn: "延新川",
        name_jp: "ヨンシンネ"
      },
      "615": {
        code: "615",
        name: "구산",
        name_en: "Gusan",
        name_cn: "龟山",
        name_jp: "クサン"
      },
      "616": {
        code: "616",
        name: "새절",
        name_en: "Saejeol",
        name_cn: "赛折",
        name_jp: "セジョル"
      },
      "617": {
        code: "617",
        name: "증산",
        name_en: "Jeungsan",
        name_cn: "缯山",
        name_jp: "チュンサン"
      },
      "618": {
        code: "618",
        name: "디지털미디어시티",
        name_en: "Digital Media City",
        name_cn: "数码媒体城",
        name_jp: "デジタルメディアシティ"
      },
      "619": {
        code: "619",
        name: "월드컵경기장",
        name_en: "World Cup Stadium",
        name_cn: "世界杯体育场",
        name_jp: "ワールドカップ・キョンギジャン"
      },
      "620": {
        code: "620",
        name: "마포구청",
        name_en: "Mapo-gu Office",
        name_cn: "麻浦区厅",
        name_jp: "マポグチョン"
      },
      "621": {
        code: "621",
        name: "망원",
        name_en: "Mangwon",
        name_cn: "望远",
        name_jp: "マンウォン"
      },
      "622": {
        code: "622",
        name: "합정",
        name_en: "Hapjeong",
        name_cn: "合井",
        name_jp: "ハプチョン"
      },
      "623": {
        code: "623",
        name: "상수",
        name_en: "Sangsu",
        name_cn: "上水",
        name_jp: "サンス"
      },
      "624": {
        code: "624",
        name: "광흥창",
        name_en: "Gwangheungchang",
        name_cn: "广兴仓",
        name_jp: "クァンフンチャン"
      },
      "625": {
        code: "625",
        name: "대흥",
        name_en: "Daeheung",
        name_cn: "大兴",
        name_jp: "テフン"
      },
      "626": {
        code: "626",
        name: "공덕",
        name_en: "Gongdeok",
        name_cn: "孔德",
        name_jp: "コンドク"
      },
      "627": {
        code: "627",
        name: "효창공원앞",
        name_en: "Hyochang park",
        name_cn: "孝昌公园",
        name_jp: "ヒョチャンゴンウォンアプ"
      },
      "628": {
        code: "628",
        name: "삼각지",
        name_en: "Samgakji",
        name_cn: "三角地",
        name_jp: "サムガクチ"
      },
      "629": {
        code: "629",
        name: "녹사평",
        name_en: "Noksapyeong",
        name_cn: "绿莎坪",
        name_jp: "ノッサピョン"
      },
      "630": {
        code: "630",
        name: "이태원",
        name_en: "Itaewon",
        name_cn: "梨泰院",
        name_jp: "イテウォン"
      },
      "631": {
        code: "631",
        name: "한강진",
        name_en: "Hangangjin",
        name_cn: "汉江镇",
        name_jp: "ハンガンジン"
      },
      "632": {
        code: "632",
        name: "버티고개",
        name_en: "Beotigogae",
        name_cn: "波堤岭",
        name_jp: "ポティゴゲ"
      },
      "633": {
        code: "633",
        name: "약수",
        name_en: "Yaksu",
        name_cn: "药水",
        name_jp: "ヤッス"
      },
      "634": {
        code: "634",
        name: "청구",
        name_en: "Cheonggu",
        name_cn: "青丘",
        name_jp: "チョング"
      },
      "635": {
        code: "635",
        name: "신당",
        name_en: "Sindang",
        name_cn: "新堂",
        name_jp: "シンダン"
      },
      "636": {
        code: "636",
        name: "동묘앞",
        name_en: "Dongmyo",
        name_cn: "东庙",
        name_jp: "トンミョアプ"
      },
      "637": {
        code: "637",
        name: "창신",
        name_en: "Changsin",
        name_cn: "昌信",
        name_jp: "チャンシン"
      },
      "638": {
        code: "638",
        name: "보문",
        name_en: "Bomun",
        name_cn: "普门",
        name_jp: "ポムン"
      },
      "639": {
        code: "639",
        name: "안암",
        name_en: "Anam",
        name_cn: "安岩",
        name_jp: "アナム"
      },
      "640": {
        code: "640",
        name: "고려대",
        name_en: "Korea Univ.",
        name_cn: "高丽大学",
        name_jp: "コリョデ"
      },
      "641": {
        code: "641",
        name: "월곡",
        name_en: "Wolgok",
        name_cn: "月谷",
        name_jp: "ウォルゴク"
      },
      "642": {
        code: "642",
        name: "상월곡",
        name_en: "Sangwolgok",
        name_cn: "上月谷",
        name_jp: "サンウォルゴク"
      },
      "643": {
        code: "643",
        name: "돌곶이",
        name_en: "Dolgoji",
        name_cn: "石串",
        name_jp: "トルゴジ"
      },
      "644": {
        code: "644",
        name: "석계",
        name_en: "Seokgye",
        name_cn: "石溪",
        name_jp: "ソッケ"
      },
      "645": {
        code: "645",
        name: "태릉입구",
        name_en: "Taereung",
        name_cn: "泰陵",
        name_jp: "テルンイック"
      },
      "646": {
        code: "646",
        name: "화랑대",
        name_en: "Hwarangdae",
        name_cn: "花郞台",
        name_jp: "ファランデ"
      },
      "647": {
        code: "647",
        name: "봉화산",
        name_en: "Bonghwasan",
        name_cn: "烽火山",
        name_jp: "ポンファサン"
      },
      "648": {
        code: "648",
        name: "신내",
        name_en: "Sinnae",
        name_cn: "新內",
        name_jp: "シンネ"
      }
    }
  },
  "7호선": {
    color: "#747F00",
    icon: "7",
    stations: {
      "709": {
        code: "709",
        name: "장암",
        name_en: "Jangam",
        name_cn: "长岩",
        name_jp: "チャンアム"
      },
      "710": {
        code: "710",
        name: "도봉산",
        name_en: "Dobongsan",
        name_cn: "道峰山",
        name_jp: "トボンサン"
      },
      "711": {
        code: "711",
        name: "수락산",
        name_en: "Suraksan",
        name_cn: "水落山",
        name_jp: "スラッサン"
      },
      "712": {
        code: "712",
        name: "마들",
        name_en: "Madeul",
        name_cn: "马得",
        name_jp: "マドゥル"
      },
      "713": {
        code: "713",
        name: "노원",
        name_en: "Nowon",
        name_cn: "芦原",
        name_jp: "ノウォン"
      },
      "714": {
        code: "714",
        name: "중계",
        name_en: "Junggye",
        name_cn: "中溪",
        name_jp: "チュンゲ"
      },
      "715": {
        code: "715",
        name: "하계",
        name_en: "Hagye",
        name_cn: "下溪",
        name_jp: "ハゲ"
      },
      "716": {
        code: "716",
        name: "공릉",
        name_en: "Gongneung",
        name_cn: "孔陵",
        name_jp: "コンヌン"
      },
      "717": {
        code: "717",
        name: "태릉입구",
        name_en: "Taereung",
        name_cn: "泰陵",
        name_jp: "テルンイック"
      },
      "718": {
        code: "718",
        name: "먹골",
        name_en: "Meokgol",
        name_cn: "墨谷",
        name_jp: "モッコル"
      },
      "719": {
        code: "719",
        name: "중화",
        name_en: "Junghwa",
        name_cn: "中和",
        name_jp: "チュンファ"
      },
      "720": {
        code: "720",
        name: "상봉",
        name_en: "Sangbong",
        name_cn: "上凤(市外巴士客运站)",
        name_jp: "サンボン  "
      },
      "721": {
        code: "721",
        name: "면목",
        name_en: "Myeonmok",
        name_cn: "面牧",
        name_jp: "ミョンモク"
      },
      "722": {
        code: "722",
        name: "사가정",
        name_en: "Sagajeong",
        name_cn: "四佳亭",
        name_jp: "サガジョン"
      },
      "723": {
        code: "723",
        name: "용마산",
        name_en: "Yongmasan",
        name_cn: "龙马山",
        name_jp: "ヨンマサン"
      },
      "724": {
        code: "724",
        name: "중곡",
        name_en: "Junggok",
        name_cn: "中谷",
        name_jp: "チュンゴク"
      },
      "725": {
        code: "725",
        name: "군자",
        name_en: "Gunja",
        name_cn: "君子",
        name_jp: "クンジャ"
      },
      "726": {
        code: "726",
        name: "어린이대공원",
        name_en: "Children`s  Grand Park",
        name_cn: "儿童大公园",
        name_jp: "オリニ・テゴンウォン"
      },
      "727": {
        code: "727",
        name: "건대입구",
        name_en: "Konkuk Univ.",
        name_cn: "建国大学",
        name_jp: "コンデイック"
      },
      "728": {
        code: "728",
        name: "뚝섬유원지",
        name_en: "Ttukseom Park",
        name_cn: "纛岛游园地",
        name_jp: "トゥッソム・ユウォンジ"
      },
      "729": {
        code: "729",
        name: "청담",
        name_en: "Cheongdam",
        name_cn: "清潭",
        name_jp: "チョンダム"
      },
      "730": {
        code: "730",
        name: "강남구청",
        name_en: "Gangnam-gu Office",
        name_cn: "江南区厅",
        name_jp: "カンナムグチョン"
      },
      "731": {
        code: "731",
        name: "학동",
        name_en: "Hak-dong",
        name_cn: "鹤洞",
        name_jp: "ハクトン"
      },
      "732": {
        code: "732",
        name: "논현",
        name_en: "Nonhyeon",
        name_cn: "论岘",
        name_jp: "ノンヒョン"
      },
      "733": {
        code: "733",
        name: "반포",
        name_en: "Banpo",
        name_cn: "盘浦",
        name_jp: "パンポ"
      },
      "734": {
        code: "734",
        name: "고속터미널",
        name_en: "Express Bus Terminal",
        name_cn: "高速巴士客运站",
        name_jp: "コソクターミナル"
      },
      "735": {
        code: "735",
        name: "내방",
        name_en: "Naebang",
        name_cn: "內方",
        name_jp: "ネバン"
      },
      "736": {
        code: "736",
        name: "총신대입구(이수)",
        name_en: "Isu",
        name_cn: "梨水",
        name_jp: "イス"
      },
      "737": {
        code: "737",
        name: "남성",
        name_en: "Namseong",
        name_cn: "南城",
        name_jp: "ナムソン"
      },
      "738": {
        code: "738",
        name: "숭실대입구",
        name_en: "Soongsil Univ.",
        name_cn: "崇实大学(赛毗岭)",
        name_jp: "スンシルデイック"
      },
      "739": {
        code: "739",
        name: "상도",
        name_en: "Sangdo",
        name_cn: "上道",
        name_jp: "サンド"
      },
      "740": {
        code: "740",
        name: "장승배기",
        name_en: "Jangseungbaegi",
        name_cn: "长丞拜基",
        name_jp: "チャンスンベギ"
      },
      "741": {
        code: "741",
        name: "신대방삼거리",
        name_en: "Sindaebang  samgeori",
        name_cn: "新大方丁字路口",
        name_jp: "シンデバンサムゴリ"
      },
      "742": {
        code: "742",
        name: "보라매",
        name_en: "Boramae",
        name_cn: "波拉美",
        name_jp: "ポラメ"
      },
      "743": {
        code: "743",
        name: "신풍",
        name_en: "Sinpung",
        name_cn: "新丰",
        name_jp: "シンプン"
      },
      "744": {
        code: "744",
        name: "대림",
        name_en: "Daerim",
        name_cn: "大林",
        name_jp: "テリム"
      },
      "745": {
        code: "745",
        name: "남구로",
        name_en: "Namguro",
        name_cn: "南九老",
        name_jp: "ナムグロ"
      },
      "746": {
        code: "746",
        name: "가산디지털단지",
        name_en: "Gasan Digital Complex",
        name_cn: "加山数码园区",
        name_jp: "カサン・デジタルダンジ"
      },
      "747": {
        code: "747",
        name: "철산",
        name_en: "Cheolsan",
        name_cn: "铁山",
        name_jp: "チョルサン"
      },
      "748": {
        code: "748",
        name: "광명사거리",
        name_en: "Gwangmyeongsageori",
        name_cn: "光明十字路口",
        name_jp: "クァンミョンサゴリ"
      },
      "749": {
        code: "749",
        name: "천왕",
        name_en: "Cheonwang",
        name_cn: "天旺",
        name_jp: "チョヌァン"
      },
      "750": {
        code: "750",
        name: "온수",
        name_en: "Onsu",
        name_cn: "温水",
        name_jp: "オンス"
      },
      "751": {
        code: "751",
        name: "까치울",
        name_en: "Kkachiul",
        name_cn: "喜鹊屋",
        name_jp: "カチウル"
      },
      "752": {
        code: "752",
        name: "부천종합운동장",
        name_en: "Bucheon Stadium",
        name_cn: "富川综合运动场",
        name_jp: "プチョンジョンハブンドンジャン"
      },
      "753": {
        code: "753",
        name: "춘의",
        name_en: "Chunui",
        name_cn: "春衣",
        name_jp: "チュニ"
      },
      "754": {
        code: "754",
        name: "신중동",
        name_en: "Sinjung-dong",
        name_cn: "新中洞",
        name_jp: "シンジュンドン"
      },
      "755": {
        code: "755",
        name: "부천시청",
        name_en: "Bucheon City Hall",
        name_cn: "富川市厅",
        name_jp: "プチョンシチョン"
      },
      "756": {
        code: "756",
        name: "상동",
        name_en: "Sang-dong",
        name_cn: "上洞",
        name_jp: "サンドン"
      },
      "757": {
        code: "757",
        name: "삼산체육관",
        name_en: "Samsan Gymnasium",
        name_cn: "三山体育馆",
        name_jp: "サムサン・チェユックァン"
      },
      "758": {
        code: "758",
        name: "굴포천",
        name_en: "Gulpocheon",
        name_cn: "掘浦川",
        name_jp: "クルポチョン"
      },
      "759": {
        code: "759",
        name: "부평구청",
        name_en: "Bupyeong-gu Office",
        name_cn: "富平区厅",
        name_jp: "プピョングチョン"
      },
      "760": {
        code: "760",
        name: "산곡",
        name_en: "Sangok",
        name_cn: "山谷",
        name_jp: "サンゴク"
      },
      "761": {
        code: "761",
        name: "석남",
        name_en: "Seongnam",
        name_cn: "石南",
        name_jp: "石南"
      }
    }
  },
  "8호선": {
    color: "#E6186C",
    icon: "8",
    stations: {
      "810": {
        code: "810",
        name: "암사",
        name_en: "Amsa",
        name_cn: "岩寺",
        name_jp: "アムサ"
      },
      "811": {
        code: "811",
        name: "천호",
        name_en: "Cheonho",
        name_cn: "千戶",
        name_jp: "チョンホ"
      },
      "812": {
        code: "812",
        name: "강동구청",
        name_en: "Gangdong-gu Office",
        name_cn: "江东区厅",
        name_jp: "カンドングチョン"
      },
      "813": {
        code: "813",
        name: "몽촌토성",
        name_en: "Mongchontoseong",
        name_cn: "梦村土城",
        name_jp: "モンチョントソン"
      },
      "814": {
        code: "814",
        name: "잠실",
        name_en: "Jamsil",
        name_cn: "蚕室",
        name_jp: "チャムシル"
      },
      "815": {
        code: "815",
        name: "석촌",
        name_en: "Seokchon",
        name_cn: "石村",
        name_jp: "ソクチョン"
      },
      "816": {
        code: "816",
        name: "송파",
        name_en: "Songpa",
        name_cn: "松坡",
        name_jp: "ソンパ"
      },
      "817": {
        code: "817",
        name: "가락시장",
        name_en: "Garak Market",
        name_cn: "可乐市场",
        name_jp: "カラク・シジャン"
      },
      "818": {
        code: "818",
        name: "문정",
        name_en: "Munjeong",
        name_cn: "文井",
        name_jp: "ムンジョン"
      },
      "819": {
        code: "819",
        name: "장지",
        name_en: "Jangji",
        name_cn: "长旨",
        name_jp: "チャンジ"
      },
      "820": {
        code: "820",
        name: "복정",
        name_en: "Bokjeong",
        name_cn: "福井",
        name_jp: "ポクチョン"
      },
      "821": {
        code: "821",
        name: "남위례",
        name_en: "Namwirye",
        name_cn: "南慰礼",
        name_jp: "ナムィレ"
      },
      "822": {
        code: "822",
        name: "산성",
        name_en: "Sanseong",
        name_cn: "山城",
        name_jp: "サンソン"
      },
      "823": {
        code: "823",
        name: "남한산성입구",
        name_en: "Namhansanseong",
        name_cn: "南汉山城",
        name_jp: "ナムハンサンソンイック"
      },
      "824": {
        code: "824",
        name: "단대오거리",
        name_en: "Dandaeogeori",
        name_cn: "丹垈五岔路口",
        name_jp: "タンデオゴリ"
      },
      "825": {
        code: "825",
        name: "신흥",
        name_en: "Sinheung",
        name_cn: "新兴",
        name_jp: "シンフン"
      },
      "826": {
        code: "826",
        name: "수진",
        name_en: "Sujin",
        name_cn: "寿进",
        name_jp: "スジン"
      },
      "827": {
        code: "827",
        name: "모란",
        name_en: "Moran",
        name_cn: "牡丹",
        name_jp: "モラン"
      }
    }
  },
  "9호선": {
    color: "#BDB092",
    icon: "9",
    stations: {
      "901": {
        code: "901",
        name: "개화",
        name_en: "Gaehwa",
        name_cn: "開化",
        name_jp: "ケファ"
      },
      "902": {
        code: "902",
        name: "김포공항",
        name_en: "Gimpo Intl. Airport",
        name_cn: "金浦机场",
        name_jp: "キンポゴンハン"
      },
      "903": {
        code: "903",
        name: "공항시장",
        name_en: "Airport Market",
        name_cn: "空港市场",
        name_jp: "コンハンシジャン"
      },
      "904": {
        code: "904",
        name: "신방화",
        name_en: "Sinbanghwa",
        name_cn: "新傍花",
        name_jp: "シンバンファ"
      },
      "905": {
        code: "905",
        name: "마곡나루",
        name_en: "Magongnaru",
        name_cn: "麻谷渡口",
        name_jp: "マゴンナル"
      },
      "906": {
        code: "906",
        name: "양천향교",
        name_en: "Yangcheon Hyanggyo",
        name_cn: "阳川乡校",
        name_jp: "ヤンチョンヒャンギョ"
      },
      "907": {
        code: "907",
        name: "가양",
        name_en: "Gayang",
        name_cn: "加阳",
        name_jp: "カヤン"
      },
      "908": {
        code: "908",
        name: "증미",
        name_en: "Jeungmi",
        name_cn: "曾米",
        name_jp: "チュンミ"
      },
      "909": {
        code: "909",
        name: "등촌",
        name_en: "Deungchon",
        name_cn: "登村",
        name_jp: "トゥンチョン"
      },
      "910": {
        code: "910",
        name: "염창",
        name_en: "Yeomchang",
        name_cn: "盐仓",
        name_jp: "ヨムチャン"
      },
      "911": {
        code: "911",
        name: "신목동",
        name_en: "Sinmokdong",
        name_cn: "新木洞",
        name_jp: "シンモクトン"
      },
      "912": {
        code: "912",
        name: "선유도",
        name_en: "Seonyudo",
        name_cn: "仙游岛",
        name_jp: "ソニュド"
      },
      "913": {
        code: "913",
        name: "당산",
        name_en: "Dangsan",
        name_cn: "堂山",
        name_jp: "タンサン"
      },
      "914": {
        code: "914",
        name: "국회의사당",
        name_en: "National Assembly",
        name_cn: "国会议事堂",
        name_jp: "ククェウィサダン"
      },
      "915": {
        code: "915",
        name: "여의도",
        name_en: "Yeouido",
        name_cn: "汝矣岛",
        name_jp: "ヨイド"
      },
      "916": {
        code: "916",
        name: "샛강",
        name_en: "Saetgang",
        name_cn: "赛江",
        name_jp: "セッカン"
      },
      "917": {
        code: "917",
        name: "노량진",
        name_en: "Noryangjin",
        name_cn: "鹭梁津",
        name_jp: "ノリャンジン"
      },
      "918": {
        code: "918",
        name: "노들",
        name_en: "Nodeul",
        name_cn: "鹭得",
        name_jp: "ノドゥル"
      },
      "919": {
        code: "919",
        name: "흑석",
        name_en: "Heukseok",
        name_cn: "黑石",
        name_jp: "フッソク"
      },
      "920": {
        code: "920",
        name: "동작",
        name_en: "Dongjak",
        name_cn: "铜雀",
        name_jp: "トンジャク"
      },
      "921": {
        code: "921",
        name: "구반포",
        name_en: "Gubanpo",
        name_cn: "旧盘浦",
        name_jp: "クバンポ"
      },
      "922": {
        code: "922",
        name: "신반포",
        name_en: "Sinbanpo",
        name_cn: "新盘浦",
        name_jp: "シンバンポ"
      },
      "923": {
        code: "923",
        name: "고속터미널",
        name_en: "Express Bus Terminal",
        name_cn: "高速巴士客运站",
        name_jp: "コソクターミナル"
      },
      "924": {
        code: "924",
        name: "사평",
        name_en: "Sapyeong",
        name_cn: "砂平",
        name_jp: "サピョン"
      },
      "925": {
        code: "925",
        name: "신논현",
        name_en: "Sinnonhyeon",
        name_cn: "新论岘",
        name_jp: "シンノンヒョン"
      },
      "926": {
        code: "926",
        name: "언주",
        name_en: "Eonju",
        name_cn: "彦州",
        name_jp: "オンジュ"
      },
      "927": {
        code: "927",
        name: "선정릉",
        name_en: "Seonjeongneung",
        name_cn: "宣靖陵",
        name_jp: "ソンジョンヌン"
      },
      "928": {
        code: "928",
        name: "삼성중앙",
        name_en: "Samseong Jungang",
        name_cn: "三成中央",
        name_jp: "サムソン・チュンアン"
      },
      "929": {
        code: "929",
        name: "봉은사",
        name_en: "Bongeunsa",
        name_cn: "奉恩寺",
        name_jp: "ポンウンサ"
      },
      "930": {
        code: "930",
        name: "종합운동장",
        name_en: "Sports Complex",
        name_cn: "综合运动场",
        name_jp: "チョンハブンドンジャン"
      },
      "931": {
        code: "931",
        name: "삼전",
        name_en: "Samjeon",
        name_cn: "三田",
        name_jp: "サムジョン"
      },
      "932": {
        code: "932",
        name: "석촌고분",
        name_en: "Seokchon Gobun",
        name_cn: "石村古坟",
        name_jp: "ソクチョンコブン"
      },
      "933": {
        code: "933",
        name: "석촌",
        name_en: "Seokchon(Hansol Hospital)",
        name_cn: "石村",
        name_jp: "ソクチョン"
      },
      "934": {
        code: "934",
        name: "송파나루",
        name_en: "Songpanaru",
        name_cn: "松坡渡口",
        name_jp: "ソンパナル"
      },
      "935": {
        code: "935",
        name: "한성백제",
        name_en: "Hanseong Baekje",
        name_cn: "汉城百济",
        name_jp: "ハンソンベクチェ"
      },
      "936": {
        code: "936",
        name: "올림픽공원",
        name_en: "Olympic Park",
        name_cn: "奥林匹克公园",
        name_jp: "オリンピックゴンウォン"
      },
      "937": {
        code: "937",
        name: "둔촌오륜",
        name_en: "Dunchon Oryun",
        name_cn: "遁村五轮",
        name_jp: "トゥンチョノリュン"
      },
      "938": {
        code: "938",
        name: "중앙보훈병원",
        name_en: "VHS Medical Center",
        name_cn: "中央报勋医院",
        name_jp: "チュンアンボフンビョンウォン"
      }
    }
  },
  "경강선": {
    color: "#0054A6",
    icon: "경강선",
    fontSize: 65,
    stations: {
      "K412": {
        code: "K412",
        name: "삼동",
        name_en: "Samdong",
        name_cn: "三洞",
        name_jp: ""
      },
      "K414": {
        code: "K414",
        name: "초월",
        name_en: "Chowol",
        name_cn: "草月",
        name_jp: ""
      },
      "K411": {
        code: "K411",
        name: "이매",
        name_en: "Imae",
        name_cn: "二梅",
        name_jp: ""
      },
      "K418": {
        code: "K418",
        name: "부발",
        name_en: "Bubal",
        name_cn: "夫鉢",
        name_jp: ""
      },
      "K420": {
        code: "K420",
        name: "여주",
        name_en: "Yeoju",
        name_cn: "驪州",
        name_jp: ""
      },
      "K417": {
        code: "K417",
        name: "이천",
        name_en: "Icheon",
        name_cn: "利川",
        name_jp: ""
      },
      "K415": {
        code: "K415",
        name: "곤지암",
        name_en: "Gonjiam",
        name_cn: "昆池岩",
        name_jp: ""
      },
      "K410": {
        code: "K410",
        name: "판교",
        name_en: "Pangyo",
        name_cn: "板橋",
        name_jp: ""
      },
      "K416": {
        code: "K416",
        name: "신둔도예촌",
        name_en: "Sindundoyechon",
        name_cn: "新屯陶藝村",
        name_jp: ""
      },
      "K419": {
        code: "K419",
        name: "세종대왕릉",
        name_en: "Sejongdaewangneung",
        name_cn: "世宗大王陵",
        name_jp: ""
      },
      "K413": {
        code: "K413",
        name: "경기광주",
        name_en: "GyeonggiGwangju",
        name_cn: "京畿廣州",
        name_jp: ""
      }
    }
  },
  "경의중앙선": {
    color: "#77C4A3",
    icon: "경의\n중앙",
    fontSize: 65,
    stations: {
      "K111": {
        code: "K111",
        name: "이촌",
        name_en: "Ichon",
        name_cn: "二村",
        name_jp: "イチョン"
      },
      "K322": {
        code: "K322",
        name: "대곡",
        name_en: "Daegok",
        name_cn: "大谷",
        name_jp: "テゴク"
      },
      "K321": {
        code: "K321",
        name: "능곡",
        name_en: "Neunggok",
        name_cn: "陵谷",
        name_jp: "ヌンゴク"
      },
      "K334": {
        code: "K334",
        name: "파주",
        name_en: "Paju",
        name_cn: "坡州",
        name_jp: "パジュ"
      },
      "K333": {
        code: "K333",
        name: "월롱",
        name_en: "Wollong",
        name_cn: "月笼",
        name_jp: "ウォルロン"
      },
      "K326": {
        code: "K326",
        name: "일산",
        name_en: "Ilsan",
        name_cn: "一山",
        name_jp: "イルサン"
      },
      "K320": {
        code: "K320",
        name: "행신",
        name_en: "Haengsin",
        name_cn: "幸信",
        name_jp: "ヘンシン"
      },
      "K138": {
        code: "K138",
        name: "지평",
        name_en: "Jipyeong",
        name_cn: "砥平",
        name_jp: "チピョン"
      },
      "K131": {
        code: "K131",
        name: "신원",
        name_en: "Sinwon",
        name_cn: "新院",
        name_jp: "シヌォン"
      },
      "K314": {
        code: "K314",
        name: "홍대입구",
        name_en: "Hongik Univ.",
        name_cn: "弘益大学",
        name_jp: "ホンデイック"
      },
      "K137": {
        code: "K137",
        name: "용문",
        name_en: "Yongmun",
        name_cn: "龙门",
        name_jp: "ヨンムン"
      },
      "K128": {
        code: "K128",
        name: "팔당",
        name_en: "Paldang",
        name_cn: "八堂",
        name_jp: "パルタン"
      },
      "K118": {
        code: "K118",
        name: "회기",
        name_en: "Hoegi",
        name_cn: "回基",
        name_jp: "フェギ"
      },
      "K115": {
        code: "K115",
        name: "응봉",
        name_en: "Eungbong",
        name_cn: "鹰峰",
        name_jp: "ウンボン"
      },
      "K114": {
        code: "K114",
        name: "옥수",
        name_en: "Oksu",
        name_cn: "玉水",
        name_jp: "オッス"
      },
      "K335": {
        code: "K335",
        name: "문산",
        name_en: "Munsan",
        name_cn: "汶山",
        name_jp: "ムンサン"
      },
      "K329": {
        code: "K329",
        name: "운정",
        name_en: "Unjeong",
        name_cn: "云井",
        name_jp: "ウンジョン"
      },
      "K328": {
        code: "K328",
        name: "야당",
        name_en: "Yadang",
        name_cn: "野塘",
        name_jp: "ヤダン"
      },
      "K327": {
        code: "K327",
        name: "탄현",
        name_en: "Tanhyeon",
        name_cn: "炭岘",
        name_jp: "タンヒョン"
      },
      "K325": {
        code: "K325",
        name: "풍산",
        name_en: "Pungsan",
        name_cn: "枫山",
        name_jp: "プンサン"
      },
      "K324": {
        code: "K324",
        name: "백마",
        name_en: "Baengma",
        name_cn: "白马",
        name_jp: "ペンマ"
      },
      "K323": {
        code: "K323",
        name: "곡산",
        name_en: "Goksan",
        name_cn: "谷山",
        name_jp: "コッサン"
      },
      "K317": {
        code: "K317",
        name: "수색",
        name_en: "Susaek",
        name_cn: "水色",
        name_jp: "スセク"
      },
      "K319": {
        code: "K319",
        name: "강매",
        name_en: "Gangmae",
        name_cn: "江梅",
        name_jp: "カンメ"
      },
      "K316": {
        code: "K316",
        name: "디지털미디어시티",
        name_en: "Digital Media City",
        name_cn: "数码媒体城",
        name_jp: "デジタルメディアシティ"
      },
      "K315": {
        code: "K315",
        name: "가좌",
        name_en: "Gajwa",
        name_cn: "加佐",
        name_jp: "カジュア"
      },
      "K313": {
        code: "K313",
        name: "서강대",
        name_en: "Sogang Univ.",
        name_cn: "西江大",
        name_jp: "ソガンデ"
      },
      "K121": {
        code: "K121",
        name: "망우",
        name_en: "Mangu",
        name_cn: "忘忧",
        name_jp: "マンウ"
      },
      "K116": {
        code: "K116",
        name: "왕십리",
        name_en: "Wangsimni",
        name_cn: "往十里",
        name_jp: "ワンシムニ"
      },
      "K826": {
        code: "K826",
        name: "효창공원앞",
        name_en: "Hyochang Park",
        name_cn: "孝昌公园",
        name_jp: "ヒョチャンゴンウォンアプ"
      },
      "P313": {
        code: "P313",
        name: "서울역",
        name_en: "Seoul Station",
        name_cn: "首爾站",
        name_jp: "ソウル"
      },
      "K123": {
        code: "K123",
        name: "구리",
        name_en: "Guri",
        name_cn: "九里",
        name_jp: "クリ"
      },
      "K136": {
        code: "K136",
        name: "원덕",
        name_en: "Wondeok",
        name_cn: "元德",
        name_jp: "ウォンドク"
      },
      "K113": {
        code: "K113",
        name: "한남",
        name_en: "Hannam",
        name_cn: "汉南",
        name_jp: "ハンナム"
      },
      "K130": {
        code: "K130",
        name: "양수",
        name_en: "Yangsu",
        name_cn: "兩水",
        name_jp: "ヤンス"
      },
      "K135": {
        code: "K135",
        name: "양평",
        name_en: "Yangpyeong",
        name_cn: "杨平",
        name_jp: "ヤンピョン"
      },
      "K331": {
        code: "K331",
        name: "금촌",
        name_en: "Geumchon",
        name_cn: "金村",
        name_jp: "クムチョン"
      },
      "K134": {
        code: "K134",
        name: "오빈",
        name_en: "Obin",
        name_cn: "梧滨",
        name_jp: "オビン"
      },
      "K133": {
        code: "K133",
        name: "아신",
        name_en: "Asin",
        name_cn: "我新",
        name_jp: "アシン"
      },
      "K132": {
        code: "K132",
        name: "국수",
        name_en: "Guksu",
        name_cn: "菊秀",
        name_jp: "クッス"
      },
      "K129": {
        code: "K129",
        name: "운길산",
        name_en: "Ungilsan",
        name_cn: "云吉山",
        name_jp: "ウンギルサン"
      },
      "K126": {
        code: "K126",
        name: "덕소",
        name_en: "Deokso",
        name_cn: "德沼",
        name_jp: "トッソ"
      },
      "K119": {
        code: "K119",
        name: "중랑",
        name_en: "Jungnang",
        name_cn: "中浪",
        name_jp: "チュンナン"
      },
      "K125": {
        code: "K125",
        name: "양정",
        name_en: "Yangjeong",
        name_cn: "养正",
        name_jp: "ヤンジョン"
      },
      "K124": {
        code: "K124",
        name: "도농",
        name_en: "Donong",
        name_cn: "陶农",
        name_jp: "トノン"
      },
      "K112": {
        code: "K112",
        name: "서빙고",
        name_en: "Seobinggo",
        name_cn: "西冰库",
        name_jp: "ソビンゴ"
      },
      "K337": {
        code: "K337",
        name: "임진강",
        name_en: "Imjingang",
        name_cn: "臨津江",
        name_jp: "イムジンガン"
      },
      "K330": {
        code: "K330",
        name: "금릉",
        name_en: "Geum  neung",
        name_cn: "金陵",
        name_jp: "クムヌン"
      },
      "P312": {
        code: "P312",
        name: "신촌",
        name_en: "Sinchon",
        name_cn: "新村",
        name_jp: "シンチョン"
      },
      "K336": {
        code: "K336",
        name: "운천",
        name_en: "Uncheon",
        name_cn: "云泉",
        name_jp: "ウンチョン"
      },
      "K117": {
        code: "K117",
        name: "청량리",
        name_en: "Cheongnyangni",
        name_cn: "清凉里",
        name_jp: "チョンニャンニ"
      },
      "K110": {
        code: "K110",
        name: "용산",
        name_en: "Yongsan",
        name_cn: "龙山",
        name_jp: "ヨンサン"
      },
      "K127": {
        code: "K127",
        name: "도심",
        name_en: "Dosim",
        name_cn: "陶深",
        name_jp: "トシム"
      },
      "K318": {
        code: "K318",
        name: "한국항공대",
        name_en: "Korea Aerospace Univ.",
        name_cn: "韩国航空大学",
        name_jp: "ハングクハンゴンデ"
      },
      "K122": {
        code: "K122",
        name: "양원",
        name_en: "Yangwon",
        name_cn: "养源",
        name_jp: "ヤンウォン"
      },
      "K120": {
        code: "K120",
        name: "상봉",
        name_en: "Sangbong",
        name_cn: "上凤",
        name_jp: "サンボン"
      },
      "K312": {
        code: "K312",
        name: "공덕",
        name_en: "Gongdeok",
        name_cn: "孔德",
        name_jp: "コンドク"
      }
    }
  },
  "경춘선": {
    color: "#178C72",
    icon: "경춘선",
    fontSize: 65,
    stations: {
      "P136": {
        code: "P136",
        name: "백양리",
        name_en: "Baegyang-ri",
        name_cn: "白楊里",
        name_jp: "ペギャンニ"
      },
      "P129": {
        code: "P129",
        name: "천마산",
        name_en: "Cheonmasan",
        name_cn: "天摩山",
        name_jp: "チョンマサン"
      },
      "P123": {
        code: "P123",
        name: "갈매",
        name_en: "Galmae",
        name_cn: "葛梅",
        name_jp: "カルメ"
      },
      "P126": {
        code: "P126",
        name: "사릉",
        name_en: "Sareung",
        name_cn: "思陵",
        name_jp: "サルン"
      },
      "P117": {
        code: "P117",
        name: "청량리",
        name_en: "Cheongnyangni",
        name_cn: "淸凉里",
        name_jp: "チョンニャンニ"
      },
      "P116": {
        code: "P116",
        name: "광운대",
        name_en: "Kwangwoon Univ.",
        name_cn: "光云大学",
        name_jp: "クァンウンデ"
      },
      "P128": {
        code: "P128",
        name: "평내호평",
        name_en: "Pyeongnae  Hopyeong",
        name_cn: "坪內好坪",
        name_jp: "ピョンネホピョン"
      },
      "P122": {
        code: "P122",
        name: "신내",
        name_en: "Sinnae",
        name_cn: "新內",
        name_jp: "シンネ"
      },
      "P130": {
        code: "P130",
        name: "마석",
        name_en: "Maseok",
        name_cn: "磨石",
        name_jp: "マソク"
      },
      "P140": {
        code: "P140",
        name: "춘천",
        name_en: "Chuncheon",
        name_cn: "春川",
        name_jp: "チュンチョン"
      },
      "P125": {
        code: "P125",
        name: "퇴계원",
        name_en: "Toegyewon",
        name_cn: "退溪院",
        name_jp: "トェゲウォン"
      },
      "P137": {
        code: "P137",
        name: "강촌",
        name_en: "Gangchon",
        name_cn: "江村",
        name_jp: "カンチョン"
      },
      "P127": {
        code: "P127",
        name: "금곡",
        name_en: "Geumgok",
        name_cn: "金谷",
        name_jp: "クムゴク"
      },
      "P134": {
        code: "P134",
        name: "가평",
        name_en: "Gapyeong",
        name_cn: "加平",
        name_jp: "カピョン"
      },
      "P120": {
        code: "P120",
        name: "상봉",
        name_en: "Sangbong",
        name_cn: "上鳳",
        name_jp: "サンボン"
      },
      "P133": {
        code: "P133",
        name: "상천",
        name_en: "Sangcheon",
        name_cn: "上泉",
        name_jp: "サンチョン"
      },
      "P132": {
        code: "P132",
        name: "청평",
        name_en: "Cheongpyeong",
        name_cn: "淸平",
        name_jp: "チョンピョン"
      },
      "P121": {
        code: "P121",
        name: "망우",
        name_en: "Mangu",
        name_cn: "忘憂",
        name_jp: "マンウ"
      },
      "P138": {
        code: "P138",
        name: "김유정",
        name_en: "Gimyujeong",
        name_cn: "金裕貞",
        name_jp: "キミュジョン"
      },
      "P131": {
        code: "P131",
        name: "대성리",
        name_en: "Daeseong-ri",
        name_cn: "大成里",
        name_jp: "テソンニ"
      },
      "P139": {
        code: "P139",
        name: "남춘천",
        name_en: "Namchuncheon",
        name_cn: "南春川",
        name_jp: "ナムチュンチョン"
      },
      "P118": {
        code: "P118",
        name: "회기",
        name_en: "Hoegi",
        name_cn: "回基",
        name_jp: "フェギ"
      },
      "P119": {
        code: "P119",
        name: "중랑",
        name_en: "Jungnang",
        name_cn: "中浪",
        name_jp: "チュンナン"
      },
      "P135": {
        code: "P135",
        name: "굴봉산",
        name_en: "Gulbongsan",
        name_cn: "屈峰山",
        name_jp: "クルボンサン"
      },
      "P124": {
        code: "P124",
        name: "별내",
        name_en: "Byeollae",
        name_cn: "別內",
        name_jp: "ピョルネ"
      }
    }
  },
  "공항철도": {
    color: "#0090D2",
    icon: "공항\n철도",
    fontSize: 65,
    stations: {
      "A03": {
        code: "A03",
        name: "홍대입구",
        name_en: "Hongik Univ.",
        name_cn: "弘益大学",
        name_jp: "ホンデイック"
      },
      "A02": {
        code: "A02",
        name: "공덕",
        name_en: "Gongdeok",
        name_cn: "孔德",
        name_jp: "コンドク"
      },
      "A01": {
        code: "A01",
        name: "서울역",
        name_en: "Seoul Station",
        name_cn: "首爾站",
        name_jp: "ソウルヨク"
      },
      "A072": {
        code: "A072",
        name: "영종",
        name_en: "Yeongjong",
        name_cn: "永宗",
        name_jp: "ヨンジョン"
      },
      "A11": {
        code: "A11",
        name: "인천공항2터미널",
        name_en: "Incheon Int’l Airport Terminal 2",
        name_cn: "仁川国际机场 2号航站楼",
        name_jp: "仁川国際空港 ２ターミナル"
      },
      "A10": {
        code: "A10",
        name: "인천공항1터미널",
        name_en: "Incheon Int’l Airport Terminal 1",
        name_cn: "仁川国际机场 1号航站楼",
        name_jp: "仁川国際空港 1ターミナル"
      },
      "A09": {
        code: "A09",
        name: "공항화물청사",
        name_en: "Incheon Intl. Airport Cargo Terminal",
        name_cn: "机场货物厅舍",
        name_jp: "コンハンファムルチョンサ"
      },
      "A08": {
        code: "A08",
        name: "운서",
        name_en: "Unseo",
        name_cn: "云西",
        name_jp: "ウンソ"
      },
      "A071": {
        code: "A071",
        name: "청라국제도시",
        name_en: "Cheongna Int’l City Station",
        name_cn: "靑羅國際城驛",
        name_jp: "チョンナグクチェドシ"
      },
      "A07": {
        code: "A07",
        name: "검암",
        name_en: "Geomam",
        name_cn: "黔岩",
        name_jp: "コマム"
      },
      "A042": {
        code: "A042",
        name: "마곡나루",
        name_en: "Magongnaru",
        name_cn: "麻谷渡口",
        name_jp: "マゴンナル"
      },
      "A04": {
        code: "A04",
        name: "디지털미디어시티",
        name_en: "Digital Media City",
        name_cn: "数码媒体城",
        name_jp: "デジタルメディアシティ"
      },
      "A06": {
        code: "A06",
        name: "계양",
        name_en: "Gyeyang",
        name_cn: "桂阳",
        name_jp: "ケヤン"
      },
      "A05": {
        code: "A05",
        name: "김포공항",
        name_en: "Gimpo Intl. Airport",
        name_cn: "金浦机场",
        name_jp: "キンポゴンハン"
      }
    }
  },
  "김포골드라인": {
    color: "#AD8605",
    icon: "김포\n골드",
    fontSize: 65,
    stations: {
      "690": {
        code: "690",
        name: "양촌",
        name_en: "Yangchon",
        name_cn: "阳村",
        name_jp: "ヤンチョン"
      },
      "691": {
        code: "691",
        name: "구래",
        name_en: "Gurae",
        name_cn: "九來",
        name_jp: "クレ"
      },
      "692": {
        code: "692",
        name: "마산",
        name_en: "Masan",
        name_cn: "麻山",
        name_jp: "マサン"
      },
      "693": {
        code: "693",
        name: "장기",
        name_en: "Janggi",
        name_cn: "场基",
        name_jp: "チャンギ"
      },
      "694": {
        code: "694",
        name: "운양",
        name_en: "Unyang",
        name_cn: "云阳",
        name_jp: "ウニャン"
      },
      "695": {
        code: "695",
        name: "걸포북변",
        name_en: "Geolpo Bukbyeon",
        name_cn: "杰浦北边",
        name_jp: "コルポブクビョン"
      },
      "696": {
        code: "696",
        name: "사우",
        name_en: "Sau",
        name_cn: "沙隅",
        name_jp: "サウ"
      },
      "697": {
        code: "697",
        name: "풍무",
        name_en: "Pungmu",
        name_cn: "丰舞",
        name_jp: "プンム"
      },
      "698": {
        code: "698",
        name: "고촌",
        name_en: "Gochon",
        name_cn: "高村",
        name_jp: "コチョン"
      },
      "699": {
        code: "699",
        name: "김포공항",
        name_en: "Gimpo Int’l Airport",
        name_cn: "金浦机场",
        name_jp: "キンポ空港"
      }
    }
  },
  "서해선": {
    color: "#8FC31F",
    icon: "서해선",
    fontSize: 65,
    stations: {
      "701": {
        code: "701",
        name: "시우",
        name_en: "Siu",
        name_cn: "元谷",
        name_jp: "ウォンゴク"
      },
      "702": {
        code: "702",
        name: "원시",
        name_en: "Wonsi",
        name_cn: "元?",
        name_jp: "ウォンシ"
      },
      "832": {
        code: "832",
        name: "일산",
        name_en: "Ilsan",
        name_cn: "一山",
        name_jp: "一山"
      },
      "833": {
        code: "833",
        name: "풍산",
        name_en: "Pungsan",
        name_cn: "楓山",
        name_jp: "楓山"
      },
      "834": {
        code: "834",
        name: "백마",
        name_en: "Baengma",
        name_cn: "白馬",
        name_jp: "白馬"
      },
      "835": {
        code: "835",
        name: "곡산",
        name_en: "Goksan",
        name_cn: "谷山",
        name_jp: "谷山"
      },
      "836": {
        code: "836",
        name: "대곡",
        name_en: "Daegok",
        name_cn: "大谷",
        name_jp: "大谷"
      },
      "837": {
        code: "837",
        name: "능곡",
        name_en: "Neunggok",
        name_cn: "陵谷",
        name_jp: "陵谷"
      },
      "838": {
        code: "838",
        name: "김포공항",
        name_en: "Gimpo Int'l Airport",
        name_cn: "金浦空港",
        name_jp: "キンポ"
      },
      "839": {
        code: "839",
        name: "원종",
        name_en: "Wonjong",
        name_cn: "遠宗",
        name_jp: "ウォンジョン"
      },
      "840": {
        code: "840",
        name: "부천종합운동장",
        name_en: "Bucheon Stadium",
        name_cn: "富川綜合運動場",
        name_jp: "プチョンジョンハブンドンジャン"
      },
      "841": {
        code: "841",
        name: "소사",
        name_en: "Sosa",
        name_cn: "素砂",
        name_jp: "ソサ"
      },
      "842": {
        code: "842",
        name: "소새울",
        name_en: "Sosaeul",
        name_cn: "素砂屋",
        name_jp: "ソセウル"
      },
      "843": {
        code: "843",
        name: "시흥대야",
        name_en: "Siheung Daeya",
        name_cn: "始?大也",
        name_jp: "シフンデヤ"
      },
      "844": {
        code: "844",
        name: "신천",
        name_en: "Sincheon",
        name_cn: "新川",
        name_jp: "シンチョン(新川)?"
      },
      "845": {
        code: "845",
        name: "신현",
        name_en: "Sinhyeon",
        name_cn: "新?",
        name_jp: "シンヒョン"
      },
      "846": {
        code: "846",
        name: "시흥시청",
        name_en: "Siheung City Hall",
        name_cn: "始?市?",
        name_jp: "シフンシチョン"
      },
      "847": {
        code: "847",
        name: "시흥능곡",
        name_en: "Siheung Neunggok",
        name_cn: "始?陵谷",
        name_jp: "シフンヌンゴク"
      },
      "848": {
        code: "848",
        name: "달미",
        name_en: "Dalmi",
        name_cn: "?美",
        name_jp: "タルミ"
      },
      "849": {
        code: "849",
        name: "선부",
        name_en: "Seonbu",
        name_cn: "仙府",
        name_jp: "ソンブ"
      },
      "850": {
        code: "850",
        name: "초지",
        name_en: "Choji",
        name_cn: "草芝",
        name_jp: "チョジ"
      }
    }
  },
  "수인분당선": {
    color: "#FABE00",
    icon: "수인\n분당",
    fontSize: 65,
    stations: {
      "K212": {
        code: "K212",
        name: "압구정로데오",
        name_en: "Apgujeong rodeo",
        name_cn: "狎鸥亭罗德奥",
        name_jp: "アックジョンロデオ"
      },
      "K245": {
        code: "K245",
        name: "수원",
        name_en: "Suwon",
        name_cn: "水原",
        name_jp: "スウォン"
      },
      "K226": {
        code: "K226",
        name: "야탑",
        name_en: "Yatap",
        name_cn: "野塔",
        name_jp: "ヤタプ"
      },
      "K264": {
        code: "K264",
        name: "남동인더스파크",
        name_en: "Namdong Induspark",
        name_cn: "南洞产业园地",
        name_jp: "ナムドン・インドスパーク"
      },
      "K269": {
        code: "K269",
        name: "인하대",
        name_en: "Inha Univ.",
        name_cn: "仁荷大学 ",
        name_jp: "インハデ"
      },
      "K209": {
        code: "K209",
        name: "청량리",
        name_en: "Cheongnyangni",
        name_cn: "清凉里",
        name_jp: "チョンニャンニ"
      },
      "K257": {
        code: "K257",
        name: "정왕",
        name_en: "Jeongwang",
        name_cn: "正往",
        name_jp: "チョンワン"
      },
      "K256": {
        code: "K256",
        name: "신길온천",
        name_en: "Neunggil",
        name_cn: "新吉温泉",
        name_jp: "シンギル・オンチョン"
      },
      "K254": {
        code: "K254",
        name: "초지",
        name_en: "Choji",
        name_cn: "草芝",
        name_jp: "チョジ"
      },
      "K253": {
        code: "K253",
        name: "고잔",
        name_en: "Gojan",
        name_cn: "古栈",
        name_jp: "コジャン"
      },
      "K251": {
        code: "K251",
        name: "한대앞",
        name_en: "Hanyang Univ. at Ansan",
        name_cn: "汉阳大学",
        name_jp: "ハンデアプ"
      },
      "K220": {
        code: "K220",
        name: "대모산입구",
        name_en: "Daemosan",
        name_cn: "大母山",
        name_jp: "テモサンイック"
      },
      "K258": {
        code: "K258",
        name: "오이도",
        name_en: "Oido",
        name_cn: "乌耳岛",
        name_jp: "オイド"
      },
      "K270": {
        code: "K270",
        name: "숭의",
        name_en: "Sungui",
        name_cn: "崇义 ",
        name_jp: "スンイ"
      },
      "K240": {
        code: "K240",
        name: "영통",
        name_en: "Yeongtong",
        name_cn: "灵通",
        name_jp: "ヨントン"
      },
      "K222": {
        code: "K222",
        name: "복정",
        name_en: "Bokjeong",
        name_cn: "福井",
        name_jp: "ポクチョン"
      },
      "K210": {
        code: "K210",
        name: "왕십리",
        name_en: "Wangsimni",
        name_cn: "往十里",
        name_jp: "ワンシムニ"
      },
      "K215": {
        code: "K215",
        name: "선릉",
        name_en: "Seolleung",
        name_cn: "宣陵",
        name_jp: "ソンルン"
      },
      "K219": {
        code: "K219",
        name: "개포동",
        name_en: "Gaepo-dong",
        name_cn: "开浦洞",
        name_jp: "ケポドン"
      },
      "K221": {
        code: "K221",
        name: "수서",
        name_en: "Suseo",
        name_cn: "水西",
        name_jp: "スソ"
      },
      "K250": {
        code: "K250",
        name: "사리",
        name_en: "Sari",
        name_cn: "四里",
        name_jp: "サリ"
      },
      "K218": {
        code: "K218",
        name: "구룡",
        name_en: "Guryong",
        name_cn: "九龙",
        name_jp: "クリョン"
      },
      "K217": {
        code: "K217",
        name: "도곡",
        name_en: "Dogok",
        name_cn: "道谷",
        name_jp: "トゴク"
      },
      "K233": {
        code: "K233",
        name: "죽전",
        name_en: "Jukjeon",
        name_cn: "竹田",
        name_jp: "チュクチョン"
      },
      "K232": {
        code: "K232",
        name: "오리",
        name_en: "Ori",
        name_cn: "梧里",
        name_jp: "オリ"
      },
      "K216": {
        code: "K216",
        name: "한티",
        name_en: "Hanti",
        name_cn: "汉堤",
        name_jp: "ハンティ"
      },
      "K266": {
        code: "K266",
        name: "연수",
        name_en: "Yeonsu",
        name_cn: "延寿",
        name_jp: "ヨンス"
      },
      "K265": {
        code: "K265",
        name: "원인재",
        name_en: "Woninjae",
        name_cn: "源仁斋",
        name_jp: "ウォニンジェ"
      },
      "K252": {
        code: "K252",
        name: "중앙",
        name_en: "Jungang",
        name_cn: "中央",
        name_jp: "チュンアン"
      },
      "K214": {
        code: "K214",
        name: "선정릉",
        name_en: "Seonjeongneung",
        name_cn: "宣靖陵",
        name_jp: "ソンジョンヌン"
      },
      "K229": {
        code: "K229",
        name: "수내",
        name_en: "Sunae",
        name_cn: "薮内",
        name_jp: "スネ"
      },
      "K238": {
        code: "K238",
        name: "상갈",
        name_en: "Sanggal",
        name_cn: "上葛",
        name_jp: "サンガル"
      },
      "K260": {
        code: "K260",
        name: "월곶",
        name_en: "Wolgot",
        name_cn: "月串",
        name_jp: "ウォルゴッ"
      },
      "K272": {
        code: "K272",
        name: "인천",
        name_en: "Incheon",
        name_cn: "仁川",
        name_jp: "インチョン"
      },
      "K262": {
        code: "K262",
        name: "인천논현",
        name_en: "Incheon Nonhyeon",
        name_cn: "仁川论岘",
        name_jp: "インチョンノンヒョン"
      },
      "K261": {
        code: "K261",
        name: "소래포구",
        name_en: "Soraepogu",
        name_cn: "苏莱浦口",
        name_jp: "ソレポグ"
      },
      "K259": {
        code: "K259",
        name: "달월",
        name_en: "Dalwol",
        name_cn: "達月",
        name_jp: "タロル"
      },
      "K249": {
        code: "K249",
        name: "야목",
        name_en: "Yamok",
        name_cn: "野牧",
        name_jp: "ヤモク"
      },
      "K248": {
        code: "K248",
        name: "어천",
        name_en: "Eocheon",
        name_cn: "漁川",
        name_jp: "オチョン"
      },
      "K246": {
        code: "K246",
        name: "고색",
        name_en: "Gosaek",
        name_cn: "古索",
        name_jp: "ゴセク"
      },
      "K244": {
        code: "K244",
        name: "매교",
        name_en: "Maegyo",
        name_cn: "梅桥",
        name_jp: "メギョ"
      },
      "K243": {
        code: "K243",
        name: "수원시청",
        name_en: "Suwon City Hall",
        name_cn: "水原市厅",
        name_jp: "スウォンシチョン"
      },
      "K242": {
        code: "K242",
        name: "매탄권선",
        name_en: "MaetanGwonseon",
        name_cn: "梅滩",
        name_jp: "メタン"
      },
      "K241": {
        code: "K241",
        name: "망포",
        name_en: "Mangpo",
        name_cn: "网浦",
        name_jp: "マンポ"
      },
      "K239": {
        code: "K239",
        name: "청명",
        name_en: "Cheongmyeong",
        name_cn: "清明",
        name_jp: "チョンミョン"
      },
      "K236": {
        code: "K236",
        name: "신갈",
        name_en: "Singal",
        name_cn: "新葛",
        name_jp: "シンガル"
      },
      "K235": {
        code: "K235",
        name: "구성",
        name_en: "Guseong",
        name_cn: "驹城",
        name_jp: "クソン"
      },
      "K224": {
        code: "K224",
        name: "태평",
        name_en: "Taepyeong",
        name_cn: "太平",
        name_jp: "テピョン"
      },
      "K237": {
        code: "K237",
        name: "기흥",
        name_en: "Giheung",
        name_cn: "器兴",
        name_jp: "キフン"
      },
      "K247": {
        code: "K247",
        name: "오목천",
        name_en: "Omokcheon",
        name_cn: "梧木川",
        name_jp: "オモックチョン"
      },
      "K263": {
        code: "K263",
        name: "호구포",
        name_en: "Hogupo",
        name_cn: "虎口浦",
        name_jp: "ホグポ"
      },
      "K267": {
        code: "K267",
        name: "송도",
        name_en: "Songdo",
        name_cn: "松岛",
        name_jp: "ソンド"
      },
      "K271": {
        code: "K271",
        name: "신포",
        name_en: "Sinpo",
        name_cn: "新浦",
        name_jp: "シンポ"
      },
      "K234": {
        code: "K234",
        name: "보정",
        name_en: "Bojeong",
        name_cn: "宝亭",
        name_jp: "ポジョン"
      },
      "K227": {
        code: "K227",
        name: "이매",
        name_en: "Imae",
        name_cn: "二梅",
        name_jp: "イメ"
      },
      "K231": {
        code: "K231",
        name: "미금",
        name_en: "Migeum",
        name_cn: "美金",
        name_jp: "ミグム"
      },
      "K255": {
        code: "K255",
        name: "안산",
        name_en: "Ansan",
        name_cn: "安山",
        name_jp: "アンサン"
      },
      "K230": {
        code: "K230",
        name: "정자",
        name_en: "Jeongja",
        name_cn: "亭子",
        name_jp: "チョンジャ"
      },
      "K228": {
        code: "K228",
        name: "서현",
        name_en: "Seohyeon",
        name_cn: "书岘",
        name_jp: "ソヒョン"
      },
      "K225": {
        code: "K225",
        name: "모란",
        name_en: "Moran",
        name_cn: "牡丹",
        name_jp: "モラン"
      },
      "K223": {
        code: "K223",
        name: "가천대",
        name_en: "Gachon Univ.",
        name_cn: "嘉泉大学",
        name_jp: "カチョンデ"
      },
      "K213": {
        code: "K213",
        name: "강남구청",
        name_en: "Gangnam-gu Office",
        name_cn: "江南区厅",
        name_jp: "カンナムグチョン"
      },
      "K211": {
        code: "K211",
        name: "서울숲",
        name_en: "Seoul-forest",
        name_cn: "首尔林",
        name_jp: "ソウルスプ"
      }
    }
  },
  "신림선": {
    color: "#6789CA",
    icon: "신림선",
    fontSize: 65,
    stations: {
      "S408": {
        code: "S408",
        name: "신림",
        name_en: "Sillim",
        name_cn: "新林",
        name_jp: "シンリム"
      },
      "S406": {
        code: "S406",
        name: "보라매병원",
        name_en: "Boramae MedicalCenter",
        name_cn: "波拉美医院",
        name_jp: "ポラメビョンウォン"
      },
      "S405": {
        code: "S405",
        name: "보라매공원",
        name_en: "Boramae Park",
        name_cn: "波拉美公园",
        name_jp: "ポラメゴンウォン"
      },
      "S404": {
        code: "S404",
        name: "보라매",
        name_en: "Boramae",
        name_cn: "波拉美",
        name_jp: "ポラメ"
      },
      "S403": {
        code: "S403",
        name: "서울지방병무청",
        name_en: "Seoul Regional Office of Military Manpower",
        name_cn: "首尔地方兵务厅",
        name_jp: "ソウルジバンビョンムチョン"
      },
      "S402": {
        code: "S402",
        name: "대방",
        name_en: "Daebang",
        name_cn: "大方",
        name_jp: "テバン"
      },
      "S401": {
        code: "S401",
        name: "샛강",
        name_en: "Saetgang",
        name_cn: "赛江",
        name_jp: "セッカン"
      },
      "S407": {
        code: "S407",
        name: "당곡",
        name_en: "Danggok",
        name_cn: "堂谷",
        name_jp: "タンゴク"
      },
      "S411": {
        code: "S411",
        name: "관악산",
        name_en: "Gwanaksan",
        name_cn: "冠岳山",
        name_jp: "クァナクサン"
      },
      "S410": {
        code: "S410",
        name: "서울대벤처타운",
        name_en: "Seoul National Univ. Venture Town",
        name_cn: "首尔大学创投城",
        name_jp: "ソウルデベンチャータウン"
      },
      "S409": {
        code: "S409",
        name: "서원",
        name_en: "Sutgogae",
        name_cn: "炭岭",
        name_jp: "スッコゲ"
      }
    }
  },
  "신분당선": {
    color: "#D4003B",
    icon: "신분당",
    fontSize: 65,
    stations: {
      "D11": {
        code: "D11",
        name: "판교",
        name_en: "Pangyo",
        name_cn: "板橋",
        name_jp: "パンギョ"
      },
      "D12": {
        code: "D12",
        name: "정자",
        name_en: "Jeongja",
        name_cn: "亭子",
        name_jp: "チョンジャ"
      },
      "D14": {
        code: "D14",
        name: "동천",
        name_en: "Dongcheon",
        name_cn: "東川",
        name_jp: "トンチョン"
      },
      "D15": {
        code: "D15",
        name: "수지구청",
        name_en: "Suji-gu office",
        name_cn: "水枝區廳",
        name_jp: "スヅグチョン"
      },
      "D17": {
        code: "D17",
        name: "상현",
        name_en: "Sanghyeon",
        name_cn: "上峴",
        name_jp: "サンヒョン"
      },
      "D16": {
        code: "D16",
        name: "성복",
        name_en: "Seongbok",
        name_cn: "星福",
        name_jp: "ソンボク"
      },
      "D19": {
        code: "D19",
        name: "광교",
        name_en: "Gwanggyo",
        name_cn: "光敎",
        name_jp: "クァンギョ"
      },
      "D18": {
        code: "D18",
        name: "광교중앙",
        name_en: "GwanggyoJungang",
        name_cn: "光敎中央",
        name_jp: "クァンギョジュンアン"
      },
      "D4": {
        code: "D4",
        name: "신사",
        name_en: "Sinsa",
        name_cn: "新沙",
        name_jp: "シンサ"
      },
      "D5": {
        code: "D5",
        name: "논현",
        name_en: "Nonhyeon",
        name_cn: "论岘",
        name_jp: "ノンヒョン"
      },
      "D6": {
        code: "D6",
        name: "신논현",
        name_en: "Sinnonhyeon",
        name_cn: "江南",
        name_jp: "カンナム"
      },
      "D7": {
        code: "D7",
        name: "강남",
        name_en: "Gangnam",
        name_cn: "江南",
        name_jp: "カンナム"
      },
      "D8": {
        code: "D8",
        name: "양재",
        name_en: "Yangjae",
        name_cn: "良才",
        name_jp: "ヤンジェ"
      },
      "D13": {
        code: "D13",
        name: "미금",
        name_en: "Migeum",
        name_cn: "美金",
        name_jp: "ミグム"
      },
      "D9": {
        code: "D9",
        name: "양재시민의숲",
        name_en: "Yangjae Citizen's Forest",
        name_cn: "良才市民之林",
        name_jp: "ヤンジェ・シミネスプ"
      },
      "D10": {
        code: "D10",
        name: "청계산입구",
        name_en: "Cheonggyesan",
        name_cn: "淸溪山入口",
        name_jp: "チョンゲサンイック"
      }
    }
  },
  "용인에버라인": {
    color: "#56AB2D",
    icon: "용인",
    fontSize: 75,
    stations: {
      "Y126": {
        code: "Y126",
        name: "전대.에버랜드",
        name_en: "Jeondae · Everland",
        name_cn: "前垈･愛寶樂園",
        name_jp: "チョンデ・エバーランド"
      },
      "Y111": {
        code: "Y111",
        name: "강남대",
        name_en: "Kangnam Univ.",
        name_cn: "江南大学",
        name_jp: "カンナムデ"
      },
      "Y112": {
        code: "Y112",
        name: "지석",
        name_en: "Jiseok",
        name_cn: "支石",
        name_jp: "チソク"
      },
      "Y113": {
        code: "Y113",
        name: "어정",
        name_en: "Eojeong",
        name_cn: "御井",
        name_jp: "オジョン"
      },
      "Y114": {
        code: "Y114",
        name: "동백",
        name_en: "Dongbaek",
        name_cn: "東栢",
        name_jp: "トンベク"
      },
      "Y115": {
        code: "Y115",
        name: "초당",
        name_en: "Chodang",
        name_cn: "草堂",
        name_jp: "チョダン"
      },
      "Y116": {
        code: "Y116",
        name: "삼가",
        name_en: "Samga",
        name_cn: "三街",
        name_jp: "サムガ"
      },
      "Y117": {
        code: "Y117",
        name: "시청.용인대",
        name_en: "City Hall, Yongin Univ.",
        name_cn: "市廳 龍仁大",
        name_jp: "シチョン, ヨンインデ"
      },
      "Y118": {
        code: "Y118",
        name: "명지대",
        name_en: "Myongji Univ.",
        name_cn: "明知大",
        name_jp: "ミョンジデ"
      },
      "Y119": {
        code: "Y119",
        name: "김량장",
        name_en: "Gimnyangjang",
        name_cn: "金良場",
        name_jp: "キムニャンジャン"
      },
      "Y120": {
        code: "Y120",
        name: "용인중앙시장",
        name_en: "Yongin Jungang Market",
        name_cn: "龙仁中央市场",
        name_jp: "ヨンインチュンアンシジャン"
      },
      "Y121": {
        code: "Y121",
        name: "고진",
        name_en: "Gojin",
        name_cn: "古陣",
        name_jp: "コジン"
      },
      "Y123": {
        code: "Y123",
        name: "보평",
        name_en: "Bopyeong",
        name_cn: "洑坪",
        name_jp: "ポピョン"
      },
      "Y125": {
        code: "Y125",
        name: "둔전",
        name_en: "Dunjeon",
        name_cn: "屯田",
        name_jp: "トゥンジョン"
      },
      "Y110": {
        code: "Y110",
        name: "기흥",
        name_en: "Giheung",
        name_cn: "器興",
        name_jp: "キフン"
      }
    }
  },
  "우이신설선": {
    color: "#B7C450",
    icon: "우이\n신설",
    fontSize: 65,
    stations: {
      "941": {
        code: "941",
        name: "북한산우이",
        name_en: "Bukhansan Ui",
        name_cn: "北漢山牛耳",
        name_jp: "プカンサンウイ"
      },
      "942": {
        code: "942",
        name: "솔밭공원",
        name_en: "Solbat Park",
        name_cn: "松林公園",
        name_jp: "ソルバッコンウォン"
      },
      "943": {
        code: "943",
        name: "4·19민주묘지",
        name_en: "April 19th National Cemetery",
        name_cn: "四一九民主墓地",
        name_jp: "サ.イルグミンジュミョジ"
      },
      "944": {
        code: "944",
        name: "가오리",
        name_en: "Gaori",
        name_cn: "加五里",
        name_jp: "カオリ"
      },
      "945": {
        code: "945",
        name: "화계",
        name_en: "Hwagye",
        name_cn: "華溪",
        name_jp: "ファゲ"
      },
      "946": {
        code: "946",
        name: "삼양",
        name_en: "Samyang",
        name_cn: "三陽",
        name_jp: "サミャン"
      },
      "947": {
        code: "947",
        name: "삼양사거리",
        name_en: "Samyang Sageori",
        name_cn: "三阳十字路口",
        name_jp: "サミャンサゴリ"
      },
      "948": {
        code: "948",
        name: "솔샘",
        name_en: "Solsaem",
        name_cn: "松泉",
        name_jp: "ソルセム"
      },
      "949": {
        code: "949",
        name: "북한산보국문",
        name_en: "Bukhansan Bogungmun",
        name_cn: "北漢山輔國門",
        name_jp: "プカンサンボグンムン"
      },
      "950": {
        code: "950",
        name: "정릉",
        name_en: "Jeongneung",
        name_cn: "貞陵",
        name_jp: "チョンヌン"
      },
      "951": {
        code: "951",
        name: "성신여대입구",
        name_en: "Sungshin Women`s Univ.",
        name_cn: "誠信女大入口",
        name_jp: "誠信女大入口"
      },
      "952": {
        code: "952",
        name: "보문",
        name_en: "Bomun",
        name_cn: "普門",
        name_jp: "ポムン"
      },
      "953": {
        code: "953",
        name: "신설동",
        name_en: "Sinseoldong",
        name_cn: "新 設 洞",
        name_jp: "シンソルトン"
      }
    }
  },
  "의정부경전철": {
    color: "#FB8100",
    icon: "의정부",
    fontSize: 65,
    stations: {
      "U120": {
        code: "U120",
        name: "경기도청북부청사",
        name_en: "Gyeonggi Provincial Government Northern Office",
        name_cn: "京畿道廳北部廳舍",
        name_jp: "キョンギドチョンプップチョンサ"
      },
      "U110": {
        code: "U110",
        name: "발곡",
        name_en: "Balgok",
        name_cn: "鉢谷",
        name_jp: "バルゴク"
      },
      "U111": {
        code: "U111",
        name: "회룡",
        name_en: "Hoeryong",
        name_cn: "回龍",
        name_jp: "フェリョン"
      },
      "U112": {
        code: "U112",
        name: "범골",
        name_en: "Beomgol",
        name_cn: "虎谷",
        name_jp: "ポムゴル"
      },
      "U113": {
        code: "U113",
        name: "경전철의정부",
        name_en: "Lrt Uijeongbu",
        name_cn: "輕電鐵議政府",
        name_jp: "キョンジョンチョルウィジョンブ"
      },
      "U114": {
        code: "U114",
        name: "의정부시청",
        name_en: "Uijeongbu City Hall",
        name_cn: "議政府市廳",
        name_jp: "ウィジョンブシチョン"
      },
      "U117": {
        code: "U117",
        name: "의정부중앙",
        name_en: "Uijeongbu Jung-ang",
        name_cn: "議政府中央",
        name_jp: "ウィジョンブチュンアン"
      },
      "U118": {
        code: "U118",
        name: "동오",
        name_en: "Dong-o",
        name_cn: "東梧",
        name_jp: "トンオ"
      },
      "U119": {
        code: "U119",
        name: "새말",
        name_en: "sae-mal",
        name_cn: "赛马",
        name_jp: "セマル"
      },
      "U121": {
        code: "U121",
        name: "효자",
        name_en: "hyoja",
        name_cn: "孝子",
        name_jp: "ヒョジャ"
      },
      "U122": {
        code: "U122",
        name: "곤제",
        name_en: "gonjae",
        name_cn: "昆弟",
        name_jp: "コンジェ"
      },
      "U123": {
        code: "U123",
        name: "어룡",
        name_en: "eoryong",
        name_cn: "魚龍",
        name_jp: "オリョン"
      },
      "U124": {
        code: "U124",
        name: "송산",
        name_en: "Songsan",
        name_cn: "松山",
        name_jp: "ソンサン"
      },
      "U125": {
        code: "U125",
        name: "탑석",
        name_en: "Tapseok",
        name_cn: "塔石",
        name_jp: "タプソク"
      },
      "U115": {
        code: "U115",
        name: "흥선",
        name_en: "Heungseon",
        name_cn: "興宣",
        name_jp: "ホンソン"
      }
    }
  },
  "인천2호선": {
    color: "#F5A251",
    icon: "인천2",
    fontSize: 68,
    stations: {
      "I209": {
        code: "I209",
        name: "아시아드경기장",
        name_en: "Asiad Stadium",
        name_cn: "亚运会赛场",
        name_jp: "アジアード競技場"
      },
      "I207": {
        code: "I207",
        name: "검암",
        name_en: "Geomam",
        name_cn: "黔岩",
        name_jp: "黔岩"
      },
      "I206": {
        code: "I206",
        name: "독정",
        name_en: "Dokjeong",
        name_cn: "",
        name_jp: ""
      },
      "I202": {
        code: "I202",
        name: "왕길",
        name_en: "Wanggil",
        name_cn: "旺吉",
        name_jp: "旺吉"
      },
      "I201": {
        code: "I201",
        name: "검단오류",
        name_en: "Geomdan Oryu",
        name_cn: "黔丹梧柳",
        name_jp: "黔丹梧柳"
      },
      "I227": {
        code: "I227",
        name: "운연",
        name_en: "Unyeon",
        name_cn: "云宴",
        name_jp: "雲宴"
      },
      "I226": {
        code: "I226",
        name: "인천대공원",
        name_en: "Incheon Grand Park",
        name_cn: "仁川大公园",
        name_jp: "仁川大公園"
      },
      "I225": {
        code: "I225",
        name: "남동구청",
        name_en: "Namdong-gu Office",
        name_cn: "南洞区厅",
        name_jp: "南洞区庁"
      },
      "I219": {
        code: "I219",
        name: "시민공원",
        name_en: "Citizens Park",
        name_cn: "市民公园",
        name_jp: "市民公園"
      },
      "I217": {
        code: "I217",
        name: "주안국가산단",
        name_en: "Juan National Industrial Complex",
        name_cn: "朱安国家産团",
        name_jp: "朱安国家産団"
      },
      "I216": {
        code: "I216",
        name: "가재울",
        name_en: "Gajaeul",
        name_cn: "蝲蛄溪",
        name_jp: "カジェウル"
      },
      "I215": {
        code: "I215",
        name: "인천가좌",
        name_en: "Incheon Gajwa",
        name_cn: "",
        name_jp: ""
      },
      "I212": {
        code: "I212",
        name: "가정중앙시장",
        name_en: "Gajeong Jungang Market",
        name_cn: "佳亭中央市场",
        name_jp: "佳亭中央市場"
      },
      "I208": {
        code: "I208",
        name: "검바위",
        name_en: "Geombawi",
        name_cn: "黔石",
        name_jp: "コムバウィ"
      },
      "I205": {
        code: "I205",
        name: "완정",
        name_en: "Wanjeong",
        name_cn: "完井",
        name_jp: "完井"
      },
      "I204": {
        code: "I204",
        name: "마전",
        name_en: "Majeon",
        name_cn: "麻田",
        name_jp: "麻田"
      },
      "I203": {
        code: "I203",
        name: "검단사거리",
        name_en: "Geomdan Sageori",
        name_cn: "黔丹十字路口",
        name_jp: "黔丹サゴリ"
      },
      "I223": {
        code: "I223",
        name: "모래내시장",
        name_en: "Moraenae Market",
        name_cn: "沙丘市场",
        name_jp: "モレネ市場"
      },
      "I222": {
        code: "I222",
        name: "석천사거리",
        name_en: "Seokcheon Sageori",
        name_cn: "石泉十字路口",
        name_jp: "石泉サゴリ"
      },
      "I221": {
        code: "I221",
        name: "인천시청",
        name_en: "Inchon City Hall",
        name_cn: "仁川市厅",
        name_jp: "仁川市庁"
      },
      "I220": {
        code: "I220",
        name: "석바위시장",
        name_en: "Seokbawi Market",
        name_cn: "石岩市场",
        name_jp: "ソッバウィ市場"
      },
      "I214": {
        code: "I214",
        name: "서부여성회관",
        name_en: "West Woman's Community Center",
        name_cn: "",
        name_jp: ""
      },
      "I210": {
        code: "I210",
        name: "서구청",
        name_en: "Seo-gu Office",
        name_cn: "西区厅",
        name_jp: "西区庁"
      },
      "I218": {
        code: "I218",
        name: "주안",
        name_en: "Juan",
        name_cn: "朱安",
        name_jp: "朱安"
      },
      "I224": {
        code: "I224",
        name: "만수",
        name_en: "Mansu",
        name_cn: "万寿",
        name_jp: "萬寿"
      },
      "I213": {
        code: "I213",
        name: "석남",
        name_en: "Seongnam",
        name_cn: "石南",
        name_jp: "石南"
      },
      "I211": {
        code: "I211",
        name: "가정",
        name_en: "Gajeong",
        name_cn: "佳亭",
        name_jp: "佳亭"
      }
    }
  },
  "인천1호선": {
    color: "#759CCE",
    icon: "인천1",
    fontSize: 68,
    stations: {
      "I128": {
        code: "I128",
        name: "선학",
        name_en: "Seonhak",
        name_cn: "仙鹤",
        name_jp: "ソンハク"
      },
      "I127": {
        code: "I127",
        name: "문학경기장",
        name_en: "Munhak Sports Complex",
        name_cn: "文鹤体育场",
        name_jp: "ムンハク・キョンギジャン"
      },
      "I114": {
        code: "I114",
        name: "계산",
        name_en: "Gyesan",
        name_cn: "桂山",
        name_jp: "ケサン"
      },
      "I125": {
        code: "I125",
        name: "예술회관",
        name_en: "Arts Center",
        name_cn: "艺术会馆",
        name_jp: "イェスルフェグァン"
      },
      "I115": {
        code: "I115",
        name: "경인교대입구",
        name_en: "Gyeong-in Nat`l Univ. of Education",
        name_cn: "京仁教育大学",
        name_jp: "キョンインギョデイック"
      },
      "I116": {
        code: "I116",
        name: "작전",
        name_en: "Jakjeon",
        name_cn: "鹊田",
        name_jp: "チャクチョン"
      },
      "I117": {
        code: "I117",
        name: "갈산",
        name_en: "Galsan",
        name_cn: "葛山",
        name_jp: "カルサン"
      },
      "I118": {
        code: "I118",
        name: "부평구청",
        name_en: "Bupyeong-gu Office",
        name_cn: "富平区厅",
        name_jp: "プピョングチョン"
      },
      "I126": {
        code: "I126",
        name: "인천터미널",
        name_en: "Incheon Bus Terminal",
        name_cn: "仁川客运站",
        name_jp: "インチョンターミナル"
      },
      "I111": {
        code: "I111",
        name: "귤현",
        name_en: "Gyulhyeon",
        name_cn: "橘岘",
        name_jp: "キュルチョン"
      },
      "I110": {
        code: "I110",
        name: "계양",
        name_en: "Gyeyang",
        name_cn: "桂阳",
        name_jp: "ケヤン"
      },
      "I119": {
        code: "I119",
        name: "부평시장",
        name_en: "Bupyeong Market",
        name_cn: "富平市場",
        name_jp: "富平市場"
      },
      "I120": {
        code: "I120",
        name: "부평",
        name_en: "Bupyeong",
        name_cn: "富平",
        name_jp: "プピョン"
      },
      "I112": {
        code: "I112",
        name: "박촌",
        name_en: "Bakchon",
        name_cn: "朴村",
        name_jp: "パクチョン"
      },
      "I113": {
        code: "I113",
        name: "임학",
        name_en: "Imhak",
        name_cn: "林鹤",
        name_jp: "イムハク"
      },
      "I121": {
        code: "I121",
        name: "동수",
        name_en: "Dongsu",
        name_cn: "东树",
        name_jp: "トンス"
      },
      "I122": {
        code: "I122",
        name: "부평삼거리",
        name_en: "Bupyeongsamgeori",
        name_cn: "富平丁字路口",
        name_jp: "プピョンサムゴリ"
      },
      "I123": {
        code: "I123",
        name: "간석오거리",
        name_en: "Ganseogogeori",
        name_cn: "间石五岔路口",
        name_jp: "カンソク・オゴリ"
      },
      "I124": {
        code: "I124",
        name: "인천시청",
        name_en: "Incheon City Hall",
        name_cn: "仁川市廳",
        name_jp: "インチョンシチョン"
      },
      "I134": {
        code: "I134",
        name: "테크노파크",
        name_en: "Technopark",
        name_cn: "科技园",
        name_jp: "テクノパーク"
      },
      "I139": {
        code: "I139",
        name: "송도달빛축제공원",
        name_en: "Songdo Moonlight Festival Park",
        name_cn: "松岛月光庆典公园",
        name_jp: "ソンドダルピッチュクチェゴンウォン"
      },
      "I132": {
        code: "I132",
        name: "동막",
        name_en: "Dongmak",
        name_cn: "东幕",
        name_jp: "トンマク"
      },
      "I130": {
        code: "I130",
        name: "원인재",
        name_en: "Woninjae",
        name_cn: "源仁斋",
        name_jp: "ウァニンジエ"
      },
      "I138": {
        code: "I138",
        name: "국제업무지구",
        name_en: "Intl. Business District",
        name_cn: "国际业务园区",
        name_jp: "ククチェオンムジグ"
      },
      "I137": {
        code: "I137",
        name: "센트럴파크",
        name_en: "Central Park",
        name_cn: "中央公园",
        name_jp: "セントラルパーク"
      },
      "I136": {
        code: "I136",
        name: "인천대입구",
        name_en: "Incheon Nat'l Univ.",
        name_cn: "仁川大学",
        name_jp: "インチョンデイック"
      },
      "I135": {
        code: "I135",
        name: "지식정보단지",
        name_en: "BIT Zone",
        name_cn: "知识信息园区",
        name_jp: "チシク・チョンボダンジ"
      },
      "I133": {
        code: "I133",
        name: "캠퍼스타운",
        name_en: "Campus Town",
        name_cn: "大学城",
        name_jp: "キャンパスタウン"
      },
      "I131": {
        code: "I131",
        name: "동춘",
        name_en: "Dongchun",
        name_cn: "东春",
        name_jp: "トンチュン"
      },
      "I129": {
        code: "I129",
        name: "신연수",
        name_en: "Sinyeonsu",
        name_cn: "新延寿",
        name_jp: "シニョンス"
      }
    }
  }
}

export default stations