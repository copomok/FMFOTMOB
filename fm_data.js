// =============================================
// Football Manager Tracker - Sample Data
// =============================================

const FM_DATA = {
  leagues: [
    { id: "epl", name: "Premier League", country: "England", season: "2025/26" },
    { id: "ll",  name: "La Liga",        country: "Spain",   season: "2025/26" },
    { id: "bl",  name: "Bundesliga",     country: "Germany", season: "2025/26" },
  ],

  // --- 순위표 데이터 ---
  standings: {
    epl: [
      { pos:1,  team:"Manchester City",   played:34, won:24, drawn:5,  lost:5,  gf:78, ga:34, gd:44, pts:77, form:["W","W","D","W","W"], prev:1 },
      { pos:2,  team:"Arsenal",           played:34, won:23, drawn:6,  lost:5,  gf:71, ga:31, gd:40, pts:75, form:["W","W","W","L","W"], prev:3 },
      { pos:3,  team:"Liverpool",         played:34, won:22, drawn:7,  lost:5,  gf:74, ga:38, gd:36, pts:73, form:["D","W","W","W","D"], prev:2 },
      { pos:4,  team:"Chelsea",           played:34, won:19, drawn:8,  lost:7,  gf:63, ga:44, gd:19, pts:65, form:["W","L","W","W","D"], prev:5 },
      { pos:5,  team:"Tottenham",         played:34, won:18, drawn:6,  lost:10, gf:60, ga:50, gd:10, pts:60, form:["L","W","W","D","L"], prev:4 },
      { pos:6,  team:"Newcastle",         played:34, won:17, drawn:5,  lost:12, gf:58, ga:48, gd:10, pts:56, form:["W","D","L","W","W"], prev:6 },
      { pos:7,  team:"Aston Villa",       played:34, won:16, drawn:6,  lost:12, gf:54, ga:51, gd:3,  pts:54, form:["D","W","L","D","W"], prev:8 },
      { pos:8,  team:"Manchester Utd",    played:34, won:14, drawn:7,  lost:13, gf:49, ga:52, gd:-3, pts:49, form:["L","L","W","D","W"], prev:7 },
      { pos:9,  team:"West Ham",          played:34, won:12, drawn:9,  lost:13, gf:47, ga:55, gd:-8, pts:45, form:["D","W","L","L","D"], prev:9 },
      { pos:10, team:"Brighton",          played:34, won:12, drawn:8,  lost:14, gf:52, ga:57, gd:-5, pts:44, form:["W","D","W","L","L"], prev:11 },
      { pos:11, team:"Fulham",            played:34, won:11, drawn:9,  lost:14, gf:43, ga:53, gd:-10,pts:42, form:["L","D","D","W","L"], prev:10 },
      { pos:12, team:"Brentford",         played:34, won:10, drawn:10, lost:14, gf:45, ga:55, gd:-10,pts:40, form:["D","L","D","W","D"], prev:12 },
      { pos:13, team:"Crystal Palace",    played:34, won:10, drawn:7,  lost:17, gf:38, ga:56, gd:-18,pts:37, form:["L","W","L","D","L"], prev:13 },
      { pos:14, team:"Wolves",            played:34, won:9,  drawn:9,  lost:16, gf:36, ga:54, gd:-18,pts:36, form:["D","D","L","W","D"], prev:14 },
      { pos:15, team:"Everton",           played:34, won:8,  drawn:10, lost:16, gf:33, ga:55, gd:-22,pts:34, form:["L","D","W","D","L"], prev:16 },
      { pos:16, team:"Nottm Forest",      played:34, won:8,  drawn:9,  lost:17, gf:32, ga:58, gd:-26,pts:33, form:["W","L","D","L","W"], prev:15 },
      { pos:17, team:"Bournemouth",       played:34, won:7,  drawn:10, lost:17, gf:35, ga:61, gd:-26,pts:31, form:["D","L","L","D","L"], prev:17 },
      { pos:18, team:"Luton Town",        played:34, won:6,  drawn:8,  lost:20, gf:28, ga:66, gd:-38,pts:26, form:["L","L","D","L","L"], prev:18 },
      { pos:19, team:"Burnley",           played:34, won:5,  drawn:6,  lost:23, gf:25, ga:73, gd:-48,pts:21, form:["L","L","L","D","L"], prev:19 },
      { pos:20, team:"Sheffield Utd",     played:34, won:4,  drawn:5,  lost:25, gf:22, ga:82, gd:-60,pts:17, form:["L","D","L","L","L"], prev:20 },
    ],
    ll: [
      { pos:1,  team:"Real Madrid",    played:33, won:25, drawn:5,  lost:3,  gf:80, ga:28, gd:52, pts:80, form:["W","W","W","W","D"], prev:1 },
      { pos:2,  team:"Barcelona",      played:33, won:24, drawn:4,  lost:5,  gf:75, ga:33, gd:42, pts:76, form:["W","D","W","W","W"], prev:2 },
      { pos:3,  team:"Atletico Madrid",played:33, won:21, drawn:7,  lost:5,  gf:61, ga:30, gd:31, pts:70, form:["W","W","D","W","L"], prev:3 },
      { pos:4,  team:"Athletic Bilbao",played:33, won:18, drawn:9,  lost:6,  gf:55, ga:35, gd:20, pts:63, form:["D","W","W","D","W"], prev:4 },
      { pos:5,  team:"Real Sociedad",  played:33, won:16, drawn:7,  lost:10, gf:48, ga:42, gd:6,  pts:55, form:["L","W","D","W","L"], prev:5 },
    ],
    bl: [
      { pos:1,  team:"Bayern Munich",  played:32, won:24, drawn:4,  lost:4,  gf:87, ga:32, gd:55, pts:76, form:["W","W","W","D","W"], prev:2 },
      { pos:2,  team:"Leverkusen",     played:32, won:23, drawn:5,  lost:4,  gf:74, ga:29, gd:45, pts:74, form:["W","D","W","W","W"], prev:1 },
      { pos:3,  team:"Dortmund",       played:32, won:18, drawn:6,  lost:8,  gf:62, ga:44, gd:18, pts:60, form:["D","W","L","W","W"], prev:3 },
      { pos:4,  team:"RB Leipzig",     played:32, won:17, drawn:5,  lost:10, gf:58, ga:46, gd:12, pts:56, form:["W","L","D","W","L"], prev:4 },
      { pos:5,  team:"Eintracht",      played:32, won:14, drawn:8,  lost:10, gf:49, ga:48, gd:1,  pts:50, form:["L","D","W","D","W"], prev:5 },
    ],
  },

  // --- 경기 결과 데이터 ---
  matches: {
    epl: [
      // 라운드 34
      {
        id:"epl_r34_1", round:34, date:"2026-06-15", status:"FT",
        home:"Manchester City",  homeScore:3, homeScorerList:["Haaland 12'","Foden 45'","De Bruyne 78'"],
        away:"Sheffield Utd",    awayScore:0, awayScorerList:[],
        stadium:"Etihad Stadium"
      },
      {
        id:"epl_r34_2", round:34, date:"2026-06-15", status:"FT",
        home:"Arsenal",          homeScore:2, homeScorerList:["Saka 23'","Martinelli 67'"],
        away:"Burnley",          awayScore:1, awayScorerList:["Brownhill 88'"],
        stadium:"Emirates Stadium"
      },
      {
        id:"epl_r34_3", round:34, date:"2026-06-15", status:"FT",
        home:"Liverpool",        homeScore:1, homeScorerList:["Salah 55' (P)"],
        away:"Chelsea",          awayScore:1, awayScorerList:["Palmer 34'"],
        stadium:"Anfield"
      },
      {
        id:"epl_r34_4", round:34, date:"2026-06-16", status:"FT",
        home:"Tottenham",        homeScore:0, homeScorerList:[],
        away:"Newcastle",        awayScore:2, awayScorerList:["Isak 15'","Wilson 72'"],
        stadium:"Tottenham Hotspur Stadium"
      },
      {
        id:"epl_r34_5", round:34, date:"2026-06-16", status:"FT",
        home:"Aston Villa",      homeScore:3, homeScorerList:["Watkins 8'","McGinn 40'","Watkins 90'"],
        away:"Manchester Utd",   awayScore:2, awayScorerList:["Rashford 22'","Hojlund 61'"],
        stadium:"Villa Park"
      },
      // 라운드 35
      {
        id:"epl_r35_1", round:35, date:"2026-06-19", status:"NS",
        home:"Manchester City",  homeScore:null, homeScorerList:[],
        away:"Arsenal",          awayScore:null, awayScorerList:[],
        stadium:"Etihad Stadium"
      },
      {
        id:"epl_r35_2", round:35, date:"2026-06-19", status:"NS",
        home:"Liverpool",        homeScore:null, homeScorerList:[],
        away:"Tottenham",        awayScore:null, awayScorerList:[],
        stadium:"Anfield"
      },
      {
        id:"epl_r35_3", round:35, date:"2026-06-20", status:"NS",
        home:"Chelsea",          homeScore:null, homeScorerList:[],
        away:"Aston Villa",      awayScore:null, awayScorerList:[],
        stadium:"Stamford Bridge"
      },
    ],
    ll: [
      {
        id:"ll_r33_1", round:33, date:"2026-06-14", status:"FT",
        home:"Real Madrid",   homeScore:4, homeScorerList:["Bellingham 10'","Vinicius 28'","Mbappe 55'","Mbappe 88'"],
        away:"Real Sociedad", awayScore:1, awayScorerList:["Oyarzabal 71'"],
        stadium:"Santiago Bernabeu"
      },
      {
        id:"ll_r33_2", round:33, date:"2026-06-14", status:"FT",
        home:"Barcelona",     homeScore:2, homeScorerList:["Yamal 33'","Lewandowski 70' (P)"],
        away:"Atletico Madrid",awayScore:2,awayScorerList:["Griezmann 45'","Morata 82'"],
        stadium:"Nou Estadi"
      },
      {
        id:"ll_r34_1", round:34, date:"2026-06-21", status:"NS",
        home:"Barcelona",     homeScore:null, homeScorerList:[],
        away:"Real Madrid",   awayScore:null, awayScorerList:[],
        stadium:"Nou Estadi"
      },
    ],
    bl: [
      {
        id:"bl_r32_1", round:32, date:"2026-06-13", status:"FT",
        home:"Bayern Munich", homeScore:3, homeScorerList:["Kane 5'","Kane 44'","Musiala 77'"],
        away:"Dortmund",      awayScore:1, awayScorerList:["Sancho 60'"],
        stadium:"Allianz Arena"
      },
      {
        id:"bl_r32_2", round:32, date:"2026-06-13", status:"FT",
        home:"Leverkusen",    homeScore:2, homeScorerList:["Wirtz 19'","Boniface 54'"],
        away:"RB Leipzig",    awayScore:0, awayScorerList:[],
        stadium:"BayArena"
      },
    ],
  },

  // --- 선수 데이터 ---
  players: [
    { id:"p1",  name:"Erling Haaland",    team:"Manchester City",   league:"epl", pos:"ST", age:25, nationality:"Norway",
      stats:{ apps:32, goals:28, assists:8,  yellowCards:3, redCards:0, rating:8.4 } },
    { id:"p2",  name:"Mohamed Salah",     team:"Liverpool",         league:"epl", pos:"RW", age:33, nationality:"Egypt",
      stats:{ apps:33, goals:22, assists:14, yellowCards:2, redCards:0, rating:8.2 } },
    { id:"p3",  name:"Bukayo Saka",       team:"Arsenal",           league:"epl", pos:"RW", age:24, nationality:"England",
      stats:{ apps:33, goals:18, assists:12, yellowCards:4, redCards:0, rating:8.0 } },
    { id:"p4",  name:"Kylian Mbappe",     team:"Real Madrid",       league:"ll",  pos:"ST", age:27, nationality:"France",
      stats:{ apps:32, goals:30, assists:10, yellowCards:2, redCards:0, rating:8.6 } },
    { id:"p5",  name:"Vinicius Jr",       team:"Real Madrid",       league:"ll",  pos:"LW", age:25, nationality:"Brazil",
      stats:{ apps:31, goals:20, assists:15, yellowCards:5, redCards:1, rating:8.3 } },
    { id:"p6",  name:"Harry Kane",        team:"Bayern Munich",     league:"bl",  pos:"ST", age:32, nationality:"England",
      stats:{ apps:31, goals:27, assists:9,  yellowCards:1, redCards:0, rating:8.5 } },
    { id:"p7",  name:"Florian Wirtz",     team:"Leverkusen",        league:"bl",  pos:"AM", age:22, nationality:"Germany",
      stats:{ apps:32, goals:15, assists:18, yellowCards:3, redCards:0, rating:8.4 } },
    { id:"p8",  name:"Cole Palmer",       team:"Chelsea",           league:"epl", pos:"AM", age:23, nationality:"England",
      stats:{ apps:33, goals:20, assists:16, yellowCards:3, redCards:0, rating:8.3 } },
  ],
};
