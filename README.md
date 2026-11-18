# lonely-chat-ai

「寂寞的人坐著與AI聊天」——阿童和 AI 夥伴一起做的東西。

- 線上：https://wuguofish.github.io/lonely-chat-ai/
- 技術：手寫 HTML、CSS、JavaScript，沒有框架、沒有建置步驟、沒有相依套件
- 字體：俐方體 11 號（標題）、台北黑體（內文）、芫荽（詩句，Google Fonts）
- 配色：薄荷巧克力，跟系統明暗設定走

## 檔案

| 檔案 | 內容 |
|---|---|
| `index.html`、`7755.html` | 兩個頁面的骨架（頁首、區塊標題、關於我、頁尾） |
| `projects.js` | 所有卡片的資料 |
| `render.js` | 把 `projects.js` 的資料畫成卡片 |
| `site.js` | 頁首往下捲就縮小、頁尾年份 |
| `style.css` | 全部樣式，色票在最上面 |
| `projects/` | 卡片縮圖 |
| `fonts/` | 俐方體與台北黑體的字型檔 |

## 新增或修改作品

只改 `projects.js`：複製一筆、改內容，縮圖放進 `projects/`。

```js
{
  title: "作品名稱",
  description: "一兩句說明。",
  image: "./projects/縮圖.jpg", // 可省略，省略時卡片顯示連結文字
  fit: "contain",               // 可省略；logo 或直式圖用 "contain"，截圖不用寫
  url: "https://…",
  links: [                      // 可省略；有多個連結時用
    { label: "GitHub", url: "https://…" }
  ]
}
```

## 預覽與上線

直接用瀏覽器開 `index.html` 就能預覽。推到 `main` 會由 GitHub Actions 把檔案部署到 GitHub Pages。

## 字型授權

台北黑體（Taipei Sans TC Beta）由臺北市政府資訊局發布，採 SIL Open Font License 1.1，網頁用的分割檔來自 [vp-tw/cjk-web-fonts](https://github.com/vp-tw/cjk-web-fonts)。授權全文與來源說明在 `fonts/taipei-sans-tc/`。
