// =============================================
// FM Tracker Data — 이 파일만 수정하면 됩니다
// =============================================
const FM = {

  // ── 내 팀 설정 ──────────────────────────────
  myTeam: "Manchester City",
  myLeague: "epl",

  // ── 리그 목록 ──────────────────────────────
  leagues: [
    { id:"epl", name:"Premier League", country:"England", season:"2025/26", flag:"🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
    { id:"ll",  name:"La Liga",        country:"Spain",   season:"2025/26", flag:"🇪🇸" },
    { id:"bl",  name:"Bundesliga",     country:"Germany", season:"2025/26", flag:"🇩🇪" },
  ],

  // ── 순위표 ─────────────────────────────────
  standings: {
    epl: [
      { pos:1,  team:"Manchester City",   played:34, won:24, drawn:5,  lost:5,  gf:78, ga:34, pts:77, form:["W","W","D","W","W"], prev:1 },
      { pos:2,  team:"Arsenal",           played:34, won:23, drawn:6,  lost:5,  gf:71, ga:31, pts:75, form:["W","W","W","L","W"], prev:3 },
      { pos:3,  team:"Liverpool",         played:34, won:22, drawn:7,  lost:5,  gf:74, ga:38, pts:73, form:["D","W","W","W","D"], prev:2 },
      { pos:4,  team:"Chelsea",           played:34, won:19, drawn:8,  lost:7,  gf:63, ga:44, pts:65, form:["W","L","W","W","D"], prev:5 },
      { pos:5,  team:"Tottenham",         played:34, won:18, drawn:6,  lost:10, gf:60, ga:50, pts:60, form:["L","W","W","D","L"], prev:4 },
      { pos:6,  team:"Newcastle",         played:34, won:17, drawn:5,  lost:12, gf:58, ga:48, pts:56, form:["W","D","L","W","W"], prev:6 },
      { pos:7,  team:"Aston Villa",       played:34, won:16, drawn:6,  lost:12, gf:54, ga:51, pts:54, form:["D","W","L","D","W"], prev:8 },
      { pos:8,  team:"Manchester Utd",    played:34, won:14, drawn:7,  lost:13, gf:49, ga:52, pts:49, form:["L","L","W","D","W"], prev:7 },
      { pos:9,  team:"West Ham",          played:34, won:12, drawn:9,  lost:13, gf:47, ga:55, pts:45, form:["D","W","L","L","D"], prev:9 },
      { pos:10, team:"Brighton",          played:34, won:12, drawn:8,  lost:14, gf:52, ga:57, pts:44, form:["W","D","W","L","L"], prev:11 },
      { pos:11, team:"Fulham",            played:34, won:11, drawn:9,  lost:14, gf:43, ga:53, pts:42, form:["L","D","D","W","L"], prev:10 },
      { pos:12, team:"Brentford",         played:34, won:10, drawn:10, lost:14, gf:45, ga:55, pts:40, form:["D","L","D","W","D"], prev:12 },
      { pos:13, team:"Crystal Palace",    played:34, won:10, drawn:7,  lost:17, gf:38, ga:56, pts:37, form:["L","W","L","D","L"], prev:13 },
      { pos:14, team:"Wolves",            played:34, won:9,  drawn:9,  lost:16, gf:36, ga:54, pts:36, form:["D","D","L","W","D"], prev:14 },
      { pos:15, team:"Everton",           played:34, won:8,  drawn:10, lost:16, gf:33, ga:55, pts:34, form:["L","D","W","D","L"], prev:16 },
      { pos:16, team:"Nottm Forest",      played:34, won:8,  drawn:9,  lost:17, gf:32, ga:58, pts:33, form:["W","L","D","L","W"], prev:15 },
      { pos:17, team:"Bournemouth",       played:34, won:7,  drawn:10, lost:17, gf:35, ga:61, pts:31, form:["D","L","L","D","L"], prev:17 },
      { pos:18, team:"Luton Town",        played:34, won:6,  drawn:8,  lost:20, gf:28, ga:66, pts:26, form:["L","L","D","L","L"], prev:18 },
      { pos:19, team:"Burnley",           played:34, won:5,  drawn:6,  lost:23, gf:25, ga:73, pts:21, form:["L","L","L","D","L"], prev:19 },
      { pos:20, team:"Sheffield Utd",     played:34, won:4,  drawn:5,  lost:25, gf:22, ga:82, pts:17, form:["L","D","L","L","L"], prev:20 },
    ],
    ll: [
      { pos:1, team:"Real Madrid",     played:33, won:25, drawn:5,  lost:3,  gf:80, ga:28, pts:80, form:["W","W","W","W","D"], prev:1 },
      { pos:2, team:"Barcelona",       played:33, won:24, drawn:4,  lost:5,  gf:75, ga:33, pts:76, form:["W","D","W","W","W"], prev:2 },
      { pos:3, team:"Atletico Madrid", played:33, won:21, drawn:7,  lost:5,  gf:61, ga:30, pts:70, form:["W","W","D","W","L"], prev:3 },
      { pos:4, team:"Athletic Bilbao", played:33, won:18, drawn:9,  lost:6,  gf:55, ga:35, pts:63, form:["D","W","W","D","W"], prev:4 },
      { pos:5, team:"Real Sociedad",   played:33, won:16, drawn:7,  lost:10, gf:48, ga:42, pts:55, form:["L","W","D","W","L"], prev:5 },
    ],
    bl: [
      { pos:1, team:"Bayern Munich", played:32, won:24, drawn:4, lost:4,  gf:87, ga:32, pts:76, form:["W","W","W","D","W"], prev:2 },
      { pos:2, team:"Leverkusen",    played:32, won:23, drawn:5, lost:4,  gf:74, ga:29, pts:74, form:["W","D","W","W","W"], prev:1 },
      { pos:3, team:"Dortmund",      played:32, won:18, drawn:6, lost:8,  gf:62, ga:44, pts:60, form:["D","W","L","W","W"], prev:3 },
      { pos:4, team:"RB Leipzig",    played:32, won:17, drawn:5, lost:10, gf:58, ga:46, pts:56, form:["W","L","D","W","L"], prev:4 },
      { pos:5, team:"Eintracht",     played:32, won:14, drawn:8, lost:10, gf:49, ga:48, pts:50, form:["L","D","W","D","W"], prev:5 },
    ],
  },

  // ── 경기 데이터 ────────────────────────────
  // 내 팀 경기에만 lineup, stats, events 추가
  matches: {
    epl: [
      {
        id:"epl_r34_mc_ars", round:34, date:"2026-06-15", status:"FT",
        home:"Manchester City", homeScore:2,
        away:"Arsenal",         awayScore:1,
        stadium:"Etihad Stadium", attendance:53400,
        // 내 팀 경기 상세 데이터
        events:[
          { min:12, type:"goal",  team:"Manchester City", player:"Haaland",    detail:"헤더", assist:"De Bruyne" },
          { min:34, type:"goal",  team:"Arsenal",         player:"Saka",       detail:"오른발", assist:"Martinelli" },
          { min:45, type:"yellow",team:"Arsenal",         player:"Rice",       detail:"" },
          { min:67, type:"goal",  team:"Manchester City", player:"Foden",      detail:"왼발", assist:"Gündoğan" },
          { min:71, type:"sub",   team:"Manchester City", player:"De Bruyne",  sub:"Silva, B" },
          { min:78, type:"yellow",team:"Manchester City", player:"Rodri",      detail:"" },
          { min:82, type:"sub",   team:"Arsenal",         player:"Saka",       sub:"Nelson" },
          { min:88, type:"red",   team:"Arsenal",         player:"Havertz",    detail:"2차 경고" },
        ],
        stats:{
          possession:[58,42],
          shots:[14,9],
          shotsOnTarget:[6,3],
          corners:[7,4],
          fouls:[10,14],
          xg:[2.1,0.9],
        },
        lineup:{
          home:{
            formation:"4-3-3",
            motm:"Haaland", motmRating:8.7,
            players:[
              { no:31, name:"Ederson",    pos:"GK", rating:7.2, starter:true  },
              { no:2,  name:"Walker",     pos:"RB", rating:6.8, starter:true  },
              { no:5,  name:"Stones",     pos:"CB", rating:7.1, starter:true  },
              { no:3,  name:"Ruben Dias", pos:"CB", rating:7.4, starter:true  },
              { no:6,  name:"Gvardiol",   pos:"LB", rating:7.0, starter:true  },
              { no:16, name:"Rodri",      pos:"DM", rating:7.3, starter:true  },
              { no:8,  name:"Gündoğan",   pos:"CM", rating:7.5, starter:true, goal:1 },
              { no:17, name:"De Bruyne",  pos:"CM", rating:8.1, starter:true, assist:1, subOut:71 },
              { no:47, name:"Foden",      pos:"LW", rating:8.4, starter:true, goal:1 },
              { no:26, name:"Mahrez",     pos:"RW", rating:7.2, starter:true  },
              { no:9,  name:"Haaland",    pos:"ST", rating:8.7, starter:true, goal:1 },
              { no:20, name:"Silva, B",   pos:"CM", rating:6.9, starter:false, subIn:71 },
            ]
          },
          away:{
            formation:"4-3-3",
            motm:"Saka", motmRating:7.6,
            players:[
              { no:1,  name:"Raya",       pos:"GK", rating:6.5, starter:true  },
              { no:4,  name:"White",      pos:"RB", rating:6.7, starter:true  },
              { no:6,  name:"Gabriel",    pos:"CB", rating:6.4, starter:true  },
              { no:12, name:"Saliba",     pos:"CB", rating:6.8, starter:true  },
              { no:35, name:"Zinchenko",  pos:"LB", rating:6.6, starter:true  },
              { no:5,  name:"Partey",     pos:"DM", rating:6.3, starter:true  },
              { no:41, name:"Rice",       pos:"CM", rating:6.9, starter:true, yellow:true },
              { no:29, name:"Havertz",    pos:"CM", rating:5.8, starter:true, red:true },
              { no:7,  name:"Saka",       pos:"RW", rating:7.6, starter:true, goal:1, subOut:82 },
              { no:11, name:"Martinelli", pos:"LW", rating:7.0, starter:true, assist:1 },
              { no:9,  name:"Jesus",      pos:"ST", rating:6.2, starter:true  },
              { no:23, name:"Nelson",     pos:"RW", rating:6.1, starter:false, subIn:82 },
            ]
          }
        }
      },
      {
        id:"epl_r34_liv_che", round:34, date:"2026-06-15", status:"FT",
        home:"Liverpool", homeScore:1,
        away:"Chelsea",   awayScore:1,
        stadium:"Anfield",
        events:[
          { min:34, type:"goal",  team:"Chelsea",    player:"Palmer",  detail:"오른발" },
          { min:55, type:"goal",  team:"Liverpool",  player:"Salah",   detail:"페널티" },
        ],
        stats:{
          possession:[54,46],
          shots:[12,10],
          shotsOnTarget:[4,4],
          corners:[6,5],
          fouls:[11,13],
          xg:[1.4,1.2],
        }
      },
      {
        id:"epl_r35_mc_tot", round:35, date:"2026-06-19", status:"NS",
        home:"Manchester City", homeScore:null,
        away:"Tottenham",       awayScore:null,
        stadium:"Etihad Stadium",
      },
      {
        id:"epl_r35_liv_ars", round:35, date:"2026-06-20", status:"NS",
        home:"Liverpool", homeScore:null,
        away:"Arsenal",   awayScore:null,
        stadium:"Anfield",
      },
    ],
    ll: [
      {
        id:"ll_r33_rma_soc", round:33, date:"2026-06-14", status:"FT",
        home:"Real Madrid",   homeScore:4,
        away:"Real Sociedad", awayScore:1,
        stadium:"Santiago Bernabeu",
        events:[
          { min:10, type:"goal", team:"Real Madrid",   player:"Bellingham", detail:"헤더" },
          { min:28, type:"goal", team:"Real Madrid",   player:"Vinicius",   detail:"왼발" },
          { min:55, type:"goal", team:"Real Madrid",   player:"Mbappe",     detail:"오른발" },
          { min:71, type:"goal", team:"Real Sociedad", player:"Oyarzabal",  detail:"오른발" },
          { min:88, type:"goal", team:"Real Madrid",   player:"Mbappe",     detail:"오른발" },
        ],
        stats:{ possession:[62,38], shots:[18,7], shotsOnTarget:[8,2], corners:[9,3], fouls:[8,16], xg:[3.8,0.7] }
      },
    ],
    bl: [
      {
        id:"bl_r32_bay_bvb", round:32, date:"2026-06-13", status:"FT",
        home:"Bayern Munich", homeScore:3,
        away:"Dortmund",      awayScore:1,
        stadium:"Allianz Arena",
        events:[
          { min:5,  type:"goal", team:"Bayern Munich", player:"Kane",   detail:"오른발" },
          { min:44, type:"goal", team:"Bayern Munich", player:"Kane",   detail:"헤더" },
          { min:60, type:"goal", team:"Dortmund",      player:"Sancho", detail:"왼발" },
          { min:77, type:"goal", team:"Bayern Munich", player:"Musiala",detail:"왼발" },
        ],
        stats:{ possession:[57,43], shots:[16,9], shotsOnTarget:[7,3], corners:[8,4], fouls:[9,13], xg:[3.1,1.1] }
      },
    ],
  },

  // ── 선수 데이터 ────────────────────────────
  // 내 팀(Manchester City) 선수 위주 상세 기입
  players: [
    {
      id:"p_haaland",
      name:"Erling Haaland",
      team:"Manchester City", league:"epl",
      pos:"ST", no:9, age:25, nationality:"노르웨이", foot:"오른발",
      height:"194cm", value:"€180M",
      bio:"세계 최고의 스트라이커. 강력한 피지컬과 뛰어난 결정력으로 득점 기록을 갈아치우고 있다.",
      seasonStats:{
        apps:32, starts:30, mins:2620,
        goals:28, assists:8,
        shots:87, shotsOnTarget:52,
        passAcc:78, keyPasses:24,
        dribbles:18, duelsWon:61,
        yellowCards:3, redCards:0,
        rating:8.4,
        xg:25.2, xa:6.1,
      },
      matchLog:[
        { date:"2026-06-15", opponent:"Arsenal",    result:"W 2-1", mins:90, goals:1, assists:0, rating:8.7 },
        { date:"2026-06-08", opponent:"Newcastle",  result:"W 3-1", mins:90, goals:2, assists:1, rating:9.0 },
        { date:"2026-06-01", opponent:"West Ham",   result:"D 1-1", mins:82, goals:0, assists:0, rating:6.8 },
        { date:"2026-05-25", opponent:"Brighton",   result:"W 4-0", mins:90, goals:2, assists:0, rating:8.5 },
        { date:"2026-05-18", opponent:"Liverpool",  result:"L 1-2", mins:90, goals:1, assists:0, rating:7.1 },
        { date:"2026-05-10", opponent:"Brentford",  result:"W 3-0", mins:90, goals:1, assists:1, rating:8.2 },
      ]
    },
    {
      id:"p_foden",
      name:"Phil Foden",
      team:"Manchester City", league:"epl",
      pos:"LW", no:47, age:26, nationality:"잉글랜드", foot:"왼발",
      height:"171cm", value:"€120M",
      bio:"맨시티 아카데미 출신. 창의적인 플레이와 왼발 슈팅이 일품인 미드필더.",
      seasonStats:{
        apps:33, starts:29, mins:2480,
        goals:16, assists:13,
        shots:64, shotsOnTarget:28,
        passAcc:88, keyPasses:56,
        dribbles:42, duelsWon:55,
        yellowCards:2, redCards:0,
        rating:7.9,
        xg:12.4, xa:10.8,
      },
      matchLog:[
        { date:"2026-06-15", opponent:"Arsenal",    result:"W 2-1", mins:90, goals:1, assists:0, rating:8.4 },
        { date:"2026-06-08", opponent:"Newcastle",  result:"W 3-1", mins:82, goals:0, assists:2, rating:8.1 },
        { date:"2026-06-01", opponent:"West Ham",   result:"D 1-1", mins:90, goals:0, assists:0, rating:6.6 },
        { date:"2026-05-25", opponent:"Brighton",   result:"W 4-0", mins:75, goals:1, assists:1, rating:8.0 },
        { date:"2026-05-18", opponent:"Liverpool",  result:"L 1-2", mins:90, goals:0, assists:1, rating:7.0 },
        { date:"2026-05-10", opponent:"Brentford",  result:"W 3-0", mins:90, goals:1, assists:0, rating:7.8 },
      ]
    },
    {
      id:"p_debruyne",
      name:"Kevin De Bruyne",
      team:"Manchester City", league:"epl",
      pos:"CM", no:17, age:34, nationality:"벨기에", foot:"오른발",
      height:"181cm", value:"€45M",
      bio:"현존 최고의 미드필더 중 하나. 정확한 패스와 시야로 경기를 지배한다.",
      seasonStats:{
        apps:28, starts:25, mins:2050,
        goals:8, assists:18,
        shots:42, shotsOnTarget:18,
        passAcc:91, keyPasses:74,
        dribbles:21, duelsWon:48,
        yellowCards:4, redCards:0,
        rating:8.1,
        xg:7.2, xa:15.3,
      },
      matchLog:[
        { date:"2026-06-15", opponent:"Arsenal",    result:"W 2-1", mins:71, goals:0, assists:1, rating:8.1 },
        { date:"2026-06-08", opponent:"Newcastle",  result:"W 3-1", mins:90, goals:1, assists:1, rating:8.6 },
        { date:"2026-06-01", opponent:"West Ham",   result:"D 1-1", mins:90, goals:0, assists:0, rating:6.9 },
        { date:"2026-05-25", opponent:"Brighton",   result:"W 4-0", mins:80, goals:0, assists:2, rating:8.3 },
        { date:"2026-05-18", opponent:"Liverpool",  result:"L 1-2", mins:90, goals:0, assists:0, rating:6.5 },
        { date:"2026-05-10", opponent:"Brentford",  result:"W 3-0", mins:90, goals:1, assists:1, rating:8.0 },
      ]
    },
    {
      id:"p_rodri",
      name:"Rodri",
      team:"Manchester City", league:"epl",
      pos:"DM", no:16, age:28, nationality:"스페인", foot:"오른발",
      height:"191cm", value:"€100M",
      bio:"발롱도르 수상자. 미드필드의 수호자로 수비와 빌드업을 동시에 책임진다.",
      seasonStats:{
        apps:31, starts:31, mins:2790,
        goals:5, assists:9,
        shots:28, shotsOnTarget:11,
        passAcc:93, keyPasses:38,
        dribbles:15, duelsWon:72,
        yellowCards:5, redCards:0,
        rating:7.8,
        xg:3.8, xa:7.5,
      },
      matchLog:[
        { date:"2026-06-15", opponent:"Arsenal",    result:"W 2-1", mins:90, goals:0, assists:0, rating:7.3 },
        { date:"2026-06-08", opponent:"Newcastle",  result:"W 3-1", mins:90, goals:0, assists:1, rating:7.8 },
        { date:"2026-06-01", opponent:"West Ham",   result:"D 1-1", mins:90, goals:0, assists:0, rating:7.0 },
        { date:"2026-05-25", opponent:"Brighton",   result:"W 4-0", mins:90, goals:1, assists:0, rating:8.0 },
        { date:"2026-05-18", opponent:"Liverpool",  result:"L 1-2", mins:90, goals:0, assists:0, rating:7.2 },
        { date:"2026-05-10", opponent:"Brentford",  result:"W 3-0", mins:90, goals:0, assists:1, rating:7.9 },
      ]
    },
    {
      id:"p_salah",
      name:"Mohamed Salah",
      team:"Liverpool", league:"epl",
      pos:"RW", no:11, age:33, nationality:"이집트", foot:"왼발",
      height:"175cm", value:"€40M",
      bio:"리버풀의 레전드. 놀라운 속도와 왼발 슈팅으로 꾸준히 득점을 기록한다.",
      seasonStats:{
        apps:33, starts:32, mins:2760,
        goals:22, assists:14,
        shots:92, shotsOnTarget:45,
        passAcc:82, keyPasses:61,
        dribbles:67, duelsWon:58,
        yellowCards:2, redCards:0,
        rating:8.2,
        xg:19.1, xa:11.2,
      },
      matchLog:[
        { date:"2026-06-15", opponent:"Chelsea",    result:"D 1-1", mins:90, goals:1, assists:0, rating:7.5 },
        { date:"2026-06-08", opponent:"Burnley",    result:"W 3-0", mins:75, goals:1, assists:1, rating:8.0 },
        { date:"2026-06-01", opponent:"Everton",    result:"W 2-0", mins:90, goals:1, assists:0, rating:7.8 },
      ]
    },
    {
      id:"p_kane",
      name:"Harry Kane",
      team:"Bayern Munich", league:"bl",
      pos:"ST", no:9, age:32, nationality:"잉글랜드", foot:"오른발",
      height:"188cm", value:"€70M",
      bio:"분데스리가에서도 폭발적인 득점력을 보여주는 잉글랜드 역대 최다 득점자.",
      seasonStats:{
        apps:31, starts:31, mins:2740,
        goals:27, assists:9,
        shots:89, shotsOnTarget:46,
        passAcc:80, keyPasses:38,
        dribbles:12, duelsWon:65,
        yellowCards:1, redCards:0,
        rating:8.5,
        xg:24.1, xa:7.2,
      },
      matchLog:[
        { date:"2026-06-13", opponent:"Dortmund",   result:"W 3-1", mins:90, goals:2, assists:0, rating:9.1 },
        { date:"2026-06-06", opponent:"Leverkusen", result:"D 1-1", mins:90, goals:1, assists:0, rating:7.6 },
      ]
    },
  ],
};
