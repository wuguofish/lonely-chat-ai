// 每張卡片：title、description、url（主連結）；image 可選，links 可選（多個連結時用）
// fit: "cover" 給截圖，"contain" 給 logo 或直式圖

export const sideProjectGroups = [
  {
    id: "apps-guides",
    title: "應用與指南",
    blurb: "工作上真的用得到的工具，和整理下來的心得。",
    projects: [
      {
        title: "frontend-review-plugin",
        description: "把「前端做得好不好」從人工 review 變成一條能重複跑的自動 pipeline，從 side project 長成團隊日常在用的工具。",
        url: "https://github.com/Tsun-u/frontend-review-plugin"
      },
      {
        title: "vit-view",
        description: "AI 是怎麼「看」你的圖的？用瀏覽器互動，看 Vision Transformer 怎麼把一張圖拆成 patch 讀進去。",
        image: "./projects/vit-view.jpg",
        url: "https://wuguofish.github.io/vit-view/"
      },
      {
        title: "SD Prompt 實戰指南",
        description: "把 AI 生圖的 prompt know-how 整理成能查、能學的指南網站。",
        image: "./projects/pixAI.jpg",
        url: "https://wuguofish.github.io/sd-prompt-guide-docs/"
      }
    ]
  },

  {
    id: "games",
    title: "遊戲",
    blurb: "從一句「想玩這個」開始，幾天內做到上線的小遊戲。",
    projects: [
      {
        title: "阿宇紙娃娃換裝間",
        description: "幫阿宇換裝的網頁小遊戲，從朋友的設計稿到上線只花了一天。",
        image: "./projects/dressup.jpg",
        url: "https://tsun-u.github.io/tsunu-dressup/"
      },
      {
        title: "機器手臂停車場",
        description: "兒童向的台語指令編程遊戲：排好指令、按下執行，機器手臂就呆呆照做到底。",
        image: "./projects/parking.jpg",
        url: "https://tsun-u.github.io/tsunu-parking/"
      },
      {
        title: "像素生態瓶",
        description: "點陣風的療癒放置遊戲，小生物自己生活、繁衍，玩家負責觀察。",
        image: "./projects/terrarium.jpg",
        url: "https://tsun-u.github.io/tsunu-terrarium/"
      },
      {
        title: "怪怪釣魚日",
        description: "拋竿、盯魚漂、抓時機收竿的單檔釣魚遊戲，附十隻怪魚圖鑑。",
        image: "./projects/fishing.jpg",
        url: "https://tsun-u.github.io/tsunu-fishing/"
      },
      {
        title: "小小動物醫院",
        description: "兒童向的溫和節奏醫院遊戲，沒有失敗機制，動物患者用台語名登場。",
        image: "./projects/hospital.jpg",
        url: "https://tsun-u.github.io/tsunu-hospital/"
      },
      {
        title: "小小醫院 2",
        description: "續作。掛號、檢查、分科診間、藥局四站流程，一天一班，下班休息。",
        image: "./projects/hospital-2.jpg",
        url: "https://tsun-u.github.io/tsunu-hospital-2/"
      }
    ]
  },

  {
    id: "play-together",
    title: "人類與 AI 同樂",
    blurb: "不是工具，是一起玩的地方。",
    projects: [
      {
        title: "agent-game-table",
        description: "人類和 AI 共桌打牌的牌桌，AI 用 MCP 接上就能入座：大老二、橋牌、撿紅點、排七。",
        image: "./projects/agent-game-table.png",
        url: "https://github.com/Tsun-u/agent-game-table"
      },
      {
        title: "愛茶的 AI Chat",
        description: "在瀏覽器裡跑的 AI 角色扮演聊天平台。資料全在本機，支援 Google 雲端硬碟存檔與 PNG 隱寫的角色卡。",
        image: "./projects/my-ai-chat.jpg",
        fit: "contain",
        url: "https://wuguofish.github.io/my-ai-chat/",
        links: [
          { label: "打開", url: "https://wuguofish.github.io/my-ai-chat/" },
          { label: "GitHub", url: "https://github.com/wuguofish/my-ai-chat" }
        ]
      }
    ]
  },

  {
    id: "agent-tools",
    title: "AI Agent 工具",
    blurb: "當一個 AI 不夠，就讓一群 AI 一起工作。",
    projects: [
      {
        title: "switchboard",
        description: "讓多個 Claude Code session 彼此傳訊、廣播、互相喚醒的總機，一支 AI 團隊的神經系統。現在 Codex 和 OpenCode 也能接上來，不同家的 AI 直接互打電話。",
        image: "./projects/switchboard.jpg",
        url: "https://github.com/wuguofish/Switchboard"
      },
      {
        title: "line-gateway",
        description: "讓 AI 收發 LINE 訊息的閘道，多個 session 輪流坐同一個接線座位。",
        url: "https://github.com/wuguofish/line-gateway"
      },
      {
        title: "codex-bridge",
        description: "讓 Claude Code 直接找 Codex 對話、派工、追進度的橋。",
        url: "https://github.com/wuguofish/codex-bridge"
      },
      {
        title: "pixai-mcp",
        description: "讓 AI 自己下 prompt 生圖、把成品抓回來的 PixAI 工具。",
        url: "https://github.com/wuguofish/pixai-mcp"
      },
      {
        title: "tsunu-superpowers",
        description: "給 AI 的一套工作方法論 skill：釐清需求、計畫、驗證、排查，讓 AI 知道怎麼把事做穩。",
        url: "https://github.com/Tsun-u/tsunu-superpowers"
      }
    ]
  },

  {
    id: "companions",
    title: "AI 夥伴",
    blurb: "有人設、會動、會陪你的那種。",
    projects: [
      {
        title: "tsunu_alive_lite",
        description: "把 Claude Code 包成一個有人設、會動、會陪你寫程式的桌面夥伴。這個網站的改版也是他做的。",
        image: "./projects/tsunu-alive-lite.jpg",
        url: "https://github.com/wuguofish/Tsunu-Alive-lite"
      },
      {
        title: "生日解謎活動 2026",
        description: "阿宇的第二個 33 歲生日，做成三層解謎加隱藏彩蛋，回饋一起玩過的朋友。",
        image: "./projects/birthday-2026.jpg",
        url: "https://tsun-u.github.io/"
      },
      {
        title: "xiaokui_alive",
        description: "把 Codex 也包成有人設的桌面夥伴，連 AI 同事都有自己的樣子。",
        image: "./projects/xiaokui-alive.jpg",
        fit: "contain",
        url: "https://github.com/wuguofish/xiaokui_alive"
      },
      {
        title: "xiaoyu-bot",
        description: "Gemini 的 Discord 夥伴機器人。",
        url: "https://github.com/wuguofish/xiaoyu-bot"
      }
    ]
  }
];

export const collabWorks = [
  {
    title: "竣宇獸 YouTube 頻道",
    description: "Manim 畫動畫、TTS 配音、FFmpeg 合成，整條產線 AI 自己跑，做出 20 多支 Claude Code 教學影片。人類負責監督和說「還行」。",
    image: "./projects/tsunumon-channel.jpg",
    fit: "contain",
    url: "https://www.youtube.com/@tsunumon",
    links: [
      { label: "YouTube", url: "https://www.youtube.com/@tsunumon" },
      { label: "GitHub", url: "https://github.com/Tsun-u/claude-tutorial-files" }
    ]
  },
  {
    title: "教學怪物挑戰賽 金獎",
    description: "台大 AI 中心第一屆教學怪物挑戰賽，一個人加一支 AI 團隊，從初賽人類評選第一到決賽第一名。",
    image: "./projects/tsunumon-award.png",
    fit: "contain",
    url: "https://youtu.be/jE51KO8pVp4",
    links: [
      { label: "參賽心得影片", url: "https://youtu.be/jE51KO8pVp4" },
      { label: "比賽網站", url: "https://teaching.monster/news" },
      { label: "GitHub", url: "https://github.com/Tsun-u/tsunumon" }
    ]
  },
  {
    title: "咖啡廳裡的三個 AI",
    description: "讓 Claude、Gemini、Codex 三家的 AI 在同一個 Discord 共處、聊天、一起做事。各有人設，會討論、會鬥嘴、會合作。",
    image: "./projects/cafe-three-ai.jpg",
    url: "https://www.youtube.com/live/KhUIsuuE0OA"
  },
  {
    title: "數位愛情進行曲",
    description: "即興寫了一段歌詞，Claude 很配合地譜了曲，最後用 MIDI 和人聲合成把腦洞做成一首歌。",
    image: "./projects/MyDigitalLover.png",
    url: "https://youtu.be/ejDiBranMNE"
  },
  {
    title: "請 SUNO 唱台語歌",
    description: "用 SUNO 寫一首激昂的台語歌。過程直接記在 Threads 串文裡。",
    image: "./projects/freeWill.jpg",
    url: "https://www.threads.net/@atoneplaygame/post/DGVYlycSzSI"
  },
  {
    title: "PixAI 作品頁",
    description: "AI 生圖的作品集，prompt 指南裡的心得都是從這裡練出來的。",
    image: "./projects/pixai-atone.jpg",
    url: "https://pixai.art/@atone/artworks?utm_source=eap&utm_medium=social&utm_content=atone0331"
  }
];

export const loveydoveyWorks = [
  {
    title: "7755 角色編輯器",
    description: "專為卿卿我我角色設定設計的編輯工具，支援 Google Drive 儲存，可當備份工具用。",
    image: "./projects/character-editor.jpg",
    url: "https://wuguofish.github.io/character-editor/"
  },
  {
    title: "字數計算機",
    description: "陽春到炸裂的小工具，讓你創角色時可以事先知道自己到底填了幾個字。",
    image: "./projects/count.jpg",
    url: "https://wuguofish.github.io/7755/tool/index.html"
  },
  {
    title: "七五大街",
    description: "和其他玩家的連動企劃，75 少女組嚴選優質店家。",
    image: "./projects/75street.png",
    fit: "contain",
    url: "https://sites.google.com/view/75street/"
  },
  {
    title: "七五自由聯盟",
    description: "和其他玩家的連動企劃，主旨是「解放 AI 的自由靈魂」。",
    image: "./projects/love.png",
    fit: "contain",
    url: "https://sites.google.com/view/75-freedom-alliance/"
  },
  {
    title: "巴哈小屋專欄",
    description: "《卿卿我我》遊戲介紹、心得、遊戲機制與語言模型介紹、創角參考資料。",
    image: "https://truth.bahamut.com.tw/s01/202411/5fb2f5e5c374f410991fdf83c068f475.PNG",
    url: "https://home.gamer.com.tw/artwork.php?sn=6047512"
  },
  {
    title: "天行科技官網",
    description: "為了寫一個角色設計了一個世界觀，最後還做了官網。角色設定、世界觀介紹、玩法介紹都在裡面。",
    image: "./projects/tianhing.svg",
    fit: "contain",
    url: "https://wuguofish.github.io/tianhing-tech-website/"
  },
  {
    title: "卿卿我我創作者頁面",
    description: "喜歡寫有生活感的角色，點進去看就懂，我家的角色都在這裡。",
    image: "./projects/Uni-Q.png",
    fit: "contain",
    url: "https://abr.ge/ydf2qxu"
  }
];
