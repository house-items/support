(() => {
  "use strict";

  // Update this address before publishing if your support mailbox is different.
  const SUPPORT_EMAIL = "support@awibox.com";
  const APP_VERSION = "1.0.1";

  const icons = {
    box: '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="m4 7 8-4 8 4-8 4-8-4Z"/><path d="m4 7 8 4 8-4v10l-8 4-8-4V7Z"/><path d="M12 11v10"/></svg>',
    scan: '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3M7 9v6M10 9v6M14 9v6M17 9v6"/></svg>',
    activity: '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M4 19V9M10 19V5M16 19v-7M22 19H2"/><path d="m3 6 5-3 5 4 7-5"/></svg>',
    settings: '<svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1A1.7 1.7 0 0 0 9 4.6 1.7 1.7 0 0 0 10 3V2.8h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z"/></svg>',
    arrow: '<svg aria-hidden="true" viewBox="0 0 20 20"><path d="m7.5 4.5 5 5-5 5"/></svg>',
  };

  const translations = {
    en: {
      meta: {
        title: "Home Stock Support",
        description: "Help, troubleshooting, and frequently asked questions for Home Stock.",
      },
      accessibility: { skip: "Skip to content" },
      header: {
        brandLabel: "Home Stock Support home",
        support: "Support",
        navigationLabel: "Support navigation",
        guides: "Guides",
        faq: "FAQ",
        contact: "Contact",
      },
      language: { label: "Choose language" },
      hero: {
        eyebrow: "Home Stock Help Center",
        title: "Support that keeps home life moving.",
        description: "Find clear answers for inventory tracking, barcode scanning, stock activity, and more.",
        primaryAction: "Browse common questions",
        secondaryAction: "Contact support",
        highlightsLabel: "Support highlights",
        noteOne: "Three-language support",
        noteTwo: "Privacy-minded guidance",
        previewLabel: "Home Stock inventory overview",
      },
      preview: {
        caption: "Inventory overview",
        greeting: "Everything at a glance",
        totalItems: "Total items",
        lowStock: "Low stock",
        recent: "Recently updated",
        viewAll: "View all",
        milk: "Milk",
        kitchen: "Kitchen",
        bottles: "bottles",
        tissue: "Tissue",
        household: "Household",
        pack: "pack",
      },
      trust: {
        label: "Product support values",
        languagesTitle: "Made for three languages",
        languagesText: "English, 简体中文, and 繁體中文.",
        practicalTitle: "Practical answers",
        practicalText: "Short steps for the features you use most.",
        contactTitle: "A clear contact path",
        contactText: "Create a complete support email in one step.",
      },
      search: {
        kicker: "Quick help",
        title: "What can we help with?",
        description: "Search the most common Home Stock questions.",
        label: "Search support articles",
        placeholder: "Search scanning, stock, language...",
      },
      topics: {
        kicker: "Browse by topic",
        title: "Start with the essentials",
        description: "Simple guidance for setting up and managing your home inventory.",
        cards: [
          { id: "getting-started", icon: "box", color: "#176fcc", tint: "#eaf3ff", title: "Getting started", description: "Create your first item and organize it with categories, quantities, and dates." },
          { id: "barcode-scanner", icon: "scan", color: "#119b8c", tint: "#e7f8f5", title: "Barcode scanning", description: "Camera permission, scan tips, and what to do when a code is not recognized." },
          { id: "stock-activity", icon: "activity", color: "#d3830a", tint: "#fff4dc", title: "Stock & reports", description: "Record consumption and restocking, then understand activity reports." },
          { id: "language-appearance", icon: "settings", color: "#8a5bd1", tint: "#f2ecfb", title: "Language & appearance", description: "Choose English, Simplified Chinese, or Traditional Chinese and set your theme." },
        ],
      },
      faq: {
        kicker: "Frequently asked questions",
        title: "Answers, without the runaround.",
        description: "Open a question for step-by-step guidance. Still stuck? Send a support email below.",
        contactLink: "Contact support",
        emptyTitle: "No matching answers",
        emptyText: "Try a broader keyword or send us a message.",
        clearSearch: "Clear search",
        resultCount: (count) => `${count} ${count === 1 ? "answer" : "answers"} found`,
        items: [
          {
            id: "getting-started",
            category: "items add create categories quantity",
            question: "How do I add my first item?",
            answer: "You can create a complete inventory record in a few steps:",
            steps: [
              "Open the Items tab and tap Add Item.",
              "Enter the item name and quantity, then choose a unit and category.",
              "Optionally add a barcode, minimum quantity, price, location, purchase date, or expiry date.",
              "Tap Save. The item will appear in your inventory immediately.",
            ],
          },
          {
            id: "barcode-scanner",
            category: "barcode scan scanner camera permission code",
            question: "Why is the barcode scanner not working?",
            answer: "First, open your device Settings and confirm that Home Stock has Camera permission. Then clean the camera lens, use even lighting, and hold the barcode steady inside the frame. If a barcode has no product match, you can still use the code and enter the item details manually.",
          },
          {
            id: "stock-activity",
            category: "consume restock quantity history activity",
            question: "How do I record consumption or restocking?",
            answer: "Open an item and choose Consume to subtract stock or Restock to add stock. Enter the amount and confirm. Home Stock updates the current quantity and records the event for your reports.",
          },
          {
            id: "low-stock-expiry",
            category: "low stock minimum expiry expired reminder alert date",
            question: "How are low-stock and expiry statuses calculated?",
            answer: "An item is marked low stock when its current quantity is at or below the minimum quantity you set. Expiry status is based on the item's expiry date. Edit the item at any time to change either value.",
          },
          {
            id: "search-filter",
            category: "search filter find item category status",
            question: "How can I find an item quickly?",
            answer: "Use the search field on the Items page to search by item name or barcode. Filters can narrow the list by category or stock status. Clear the search and filters to return to the full inventory.",
          },
          {
            id: "data-sync",
            category: "data local guest sync offline account pending safe backup",
            question: "Where is my data stored, and how does sync work?",
            answer: "In guest mode, inventory data is stored locally on your device. Signing in enables account-based sync where available. If changes remain pending, check your internet connection and retry sync. Do not uninstall the app while you have unsynced local data.",
          },
          {
            id: "language-appearance",
            category: "language english chinese simplified traditional theme dark light settings",
            question: "How do I change the language or theme?",
            answer: "Open Settings, then select Language or Theme under Appearance. You can choose English, 简体中文, 繁體中文, light, dark, or the system default. Changes take effect immediately.",
          },
          {
            id: "reports",
            category: "reports date range no data consumed restocked value activity",
            question: "Why is my report empty?",
            answer: "Reports are built from consumption and restocking activity. Add an item, record at least one Consume or Restock event, and make sure the selected date range includes that event. Then refresh the report.",
          },
        ],
      },
      checklist: {
        kicker: "Before contacting support",
        title: "Four quick checks solve most issues.",
        description: "These steps are safe and will not remove your inventory data.",
        stepOneTitle: "Update Home Stock",
        stepOneText: "Install the latest version available in the App Store.",
        stepTwoTitle: "Close and reopen",
        stepTwoText: "Fully close the app, then open it again.",
        stepThreeTitle: "Check permissions",
        stepThreeText: "Confirm camera access in system Settings if scanning fails.",
        stepFourTitle: "Note the details",
        stepFourText: "Record the screen, action, and error message involved.",
      },
      contact: {
        kicker: "Contact support",
        title: "Need a human hand?",
        description: "Describe what happened and the page will prepare an email in your default mail app. Your message is not uploaded by this website.",
        privacyTitle: "Privacy reminder",
        privacyText: "Never include passwords, verification codes, or full payment information.",
        directEmail: "Prefer email?",
      },
      form: {
        topic: "What do you need help with?",
        version: "App version",
        device: "Device and OS",
        devicePlaceholder: "e.g. iPhone 16, iOS 26",
        message: "What happened?",
        messagePlaceholder: "Tell us what you expected, what happened, and any error you saw.",
        messageHelp: "Please avoid including sensitive personal information.",
        submit: "Create support email",
        note: "This opens your mail app. You can review everything before sending.",
        topics: [
          { value: "general", label: "General question" },
          { value: "scanner", label: "Barcode scanner" },
          { value: "inventory", label: "Items and stock" },
          { value: "sync", label: "Data and sync" },
          { value: "reports", label: "Reports" },
          { value: "bug", label: "Report a problem" },
          { value: "feedback", label: "Suggestion or feedback" },
        ],
      },
      email: {
        subjectPrefix: "Home Stock Support",
        greeting: "Hello Home Stock Support,",
        details: "Support details",
        topic: "Topic",
        version: "App version",
        device: "Device and OS",
        language: "Support language",
        description: "What happened",
        closing: "Thank you.",
        notProvided: "Not provided",
      },
      footer: {
        tagline: "A calmer way to know what you have.",
        version: "Current app version",
      },
      toast: { mailOpened: "Your support email is ready in your mail app." },
    },

    "zh-CN": {
      meta: {
        title: "家庭库存支持中心",
        description: "家庭库存应用的使用帮助、故障排查和常见问题。",
      },
      accessibility: { skip: "跳到主要内容" },
      header: {
        brandLabel: "家庭库存支持中心首页",
        support: "支持中心",
        navigationLabel: "支持页面导航",
        guides: "使用指南",
        faq: "常见问题",
        contact: "联系我们",
      },
      language: { label: "选择语言" },
      hero: {
        eyebrow: "家庭库存帮助中心",
        title: "让家庭管理继续井然有序。",
        description: "快速查找库存记录、条形码扫描、出入库操作等功能的清晰解答。",
        primaryAction: "浏览常见问题",
        secondaryAction: "联系支持",
        highlightsLabel: "支持服务特点",
        noteOne: "提供三种语言",
        noteTwo: "重视隐私的指引",
        previewLabel: "家庭库存概览预览",
      },
      preview: {
        caption: "库存概览",
        greeting: "所有信息一目了然",
        totalItems: "物品总数",
        lowStock: "库存不足",
        recent: "最近更新",
        viewAll: "查看全部",
        milk: "牛奶",
        kitchen: "厨房",
        bottles: "瓶",
        tissue: "纸巾",
        household: "家居用品",
        pack: "包",
      },
      trust: {
        label: "产品支持特点",
        languagesTitle: "支持三种语言",
        languagesText: "English、简体中文和繁體中文。",
        practicalTitle: "实用解答",
        practicalText: "用简短步骤说明最常用的功能。",
        contactTitle: "便捷联系支持",
        contactText: "一步生成信息完整的支持邮件。",
      },
      search: {
        kicker: "快速帮助",
        title: "需要什么帮助？",
        description: "搜索家庭库存最常见的使用问题。",
        label: "搜索支持内容",
        placeholder: "搜索扫描、库存、语言……",
      },
      topics: {
        kicker: "按主题浏览",
        title: "从常用功能开始",
        description: "帮助您设置和管理家庭库存的简单指南。",
        cards: [
          { id: "getting-started", icon: "box", color: "#176fcc", tint: "#eaf3ff", title: "开始使用", description: "创建第一件物品，并使用分类、数量和日期整理库存。" },
          { id: "barcode-scanner", icon: "scan", color: "#119b8c", tint: "#e7f8f5", title: "条形码扫描", description: "了解相机权限、扫描技巧以及无法识别条码时的处理方法。" },
          { id: "stock-activity", icon: "activity", color: "#d3830a", tint: "#fff4dc", title: "库存与报告", description: "记录消耗和补货，并通过活动报告了解库存变化。" },
          { id: "language-appearance", icon: "settings", color: "#8a5bd1", tint: "#f2ecfb", title: "语言与外观", description: "选择英文、简体中文或繁体中文，并设置显示主题。" },
        ],
      },
      faq: {
        kicker: "常见问题",
        title: "直接、清楚的答案。",
        description: "展开问题即可查看操作指引。如果仍未解决，请在下方发送支持邮件。",
        contactLink: "联系支持",
        emptyTitle: "没有找到相关解答",
        emptyText: "请尝试更宽泛的关键词，或向我们发送消息。",
        clearSearch: "清除搜索",
        resultCount: (count) => `找到 ${count} 条解答`,
        items: [
          {
            id: "getting-started",
            category: "物品 添加 创建 分类 数量 开始",
            question: "如何添加第一件物品？",
            answer: "只需几步即可创建完整的库存记录：",
            steps: [
              "打开“物品”页面，然后点击“添加物品”。",
              "输入物品名称和数量，再选择单位与分类。",
              "还可以添加条形码、最低数量、价格、位置、购买日期或过期日期。",
              "点击“保存”，物品会立即出现在库存列表中。",
            ],
          },
          {
            id: "barcode-scanner",
            category: "条形码 条码 扫描 相机 权限 识别",
            question: "为什么条形码扫描器无法使用？",
            answer: "请先打开设备“设置”，确认家庭库存已获得相机权限。然后清洁镜头、保持光线均匀，并将条形码稳定地放在扫描框内。如果没有匹配到商品，仍可保留该条码并手动填写物品信息。",
          },
          {
            id: "stock-activity",
            category: "消耗 补货 数量 历史 活动 出库 入库",
            question: "如何记录消耗或补货？",
            answer: "打开物品详情，选择“消耗”以减少库存，或选择“补货”以增加库存。输入数量并确认后，当前库存会更新，同时生成一条用于报告的活动记录。",
          },
          {
            id: "low-stock-expiry",
            category: "库存不足 最低数量 过期 到期 提醒 日期",
            question: "库存不足和过期状态是如何计算的？",
            answer: "当当前数量小于或等于您设置的最低数量时，物品会显示为库存不足。过期状态根据物品的过期日期计算。您可以随时编辑物品并修改这两个值。",
          },
          {
            id: "search-filter",
            category: "搜索 筛选 查找 物品 分类 状态",
            question: "如何快速找到物品？",
            answer: "在“物品”页面使用搜索框，可按物品名称或条形码搜索。筛选功能可以按分类或库存状态缩小范围。清除搜索词和筛选条件即可恢复完整列表。",
          },
          {
            id: "data-sync",
            category: "数据 本地 访客 同步 离线 账户 待同步 安全 备份",
            question: "数据保存在哪里？同步如何工作？",
            answer: "使用访客模式时，库存数据只保存在当前设备。登录后可在支持的情况下启用账户同步。如果变更一直处于待同步状态，请检查网络连接并重试。在本地数据尚未同步前，请勿卸载应用。",
          },
          {
            id: "language-appearance",
            category: "语言 英文 中文 简体 繁体 主题 深色 浅色 设置",
            question: "如何更改语言或主题？",
            answer: "打开“设置”，在“外观”下选择“语言”或“主题”。您可以选择英文、简体中文、繁体中文、浅色、深色或跟随系统，设置会立即生效。",
          },
          {
            id: "reports",
            category: "报告 日期范围 无数据 消耗 补货 价值 活动",
            question: "为什么报告中没有数据？",
            answer: "报告根据消耗和补货活动生成。请先添加物品并至少记录一次“消耗”或“补货”，同时确认所选日期范围包含该记录，然后刷新报告。",
          },
        ],
      },
      checklist: {
        kicker: "联系支持前",
        title: "四项快速检查可解决多数问题。",
        description: "以下操作安全可靠，不会删除您的库存数据。",
        stepOneTitle: "更新家庭库存",
        stepOneText: "安装 App Store 中提供的最新版本。",
        stepTwoTitle: "关闭并重新打开",
        stepTwoText: "完全退出应用，然后再次打开。",
        stepThreeTitle: "检查权限",
        stepThreeText: "如果扫描失败，请在系统设置中确认相机权限。",
        stepFourTitle: "记录问题详情",
        stepFourText: "记下相关页面、执行的操作和错误信息。",
      },
      contact: {
        kicker: "联系支持",
        title: "仍然需要帮助？",
        description: "请描述遇到的问题，本页面会在默认邮件应用中生成一封邮件。网站不会上传您的消息内容。",
        privacyTitle: "隐私提醒",
        privacyText: "请勿提供密码、验证码或完整的付款信息。",
        directEmail: "也可以直接发送邮件：",
      },
      form: {
        topic: "您需要哪方面的帮助？",
        version: "应用版本",
        device: "设备与系统",
        devicePlaceholder: "例如：iPhone 16、iOS 26",
        message: "发生了什么？",
        messagePlaceholder: "请说明预期结果、实际情况以及看到的错误信息。",
        messageHelp: "请避免填写敏感的个人信息。",
        submit: "生成支持邮件",
        note: "系统将打开邮件应用，发送前您可以检查全部内容。",
        topics: [
          { value: "general", label: "一般问题" },
          { value: "scanner", label: "条形码扫描" },
          { value: "inventory", label: "物品与库存" },
          { value: "sync", label: "数据与同步" },
          { value: "reports", label: "报告" },
          { value: "bug", label: "报告问题" },
          { value: "feedback", label: "建议或反馈" },
        ],
      },
      email: {
        subjectPrefix: "家庭库存支持",
        greeting: "家庭库存支持团队，您好：",
        details: "支持信息",
        topic: "问题类型",
        version: "应用版本",
        device: "设备与系统",
        language: "支持语言",
        description: "问题描述",
        closing: "谢谢。",
        notProvided: "未填写",
      },
      footer: {
        tagline: "轻松了解家中现有物品。",
        version: "当前应用版本",
      },
      toast: { mailOpened: "支持邮件已在您的邮件应用中准备好。" },
    },

    "zh-TW": {
      meta: {
        title: "家庭庫存支援中心",
        description: "家庭庫存應用程式的使用說明、疑難排解與常見問題。",
      },
      accessibility: { skip: "跳至主要內容" },
      header: {
        brandLabel: "家庭庫存支援中心首頁",
        support: "支援中心",
        navigationLabel: "支援頁面導覽",
        guides: "使用指南",
        faq: "常見問題",
        contact: "聯絡我們",
      },
      language: { label: "選擇語言" },
      hero: {
        eyebrow: "家庭庫存說明中心",
        title: "讓家庭管理持續井然有序。",
        description: "快速取得庫存追蹤、條碼掃描、進出庫操作等功能的清楚解答。",
        primaryAction: "瀏覽常見問題",
        secondaryAction: "聯絡支援",
        highlightsLabel: "支援服務特色",
        noteOne: "提供三種語言",
        noteTwo: "重視隱私的指引",
        previewLabel: "家庭庫存總覽預覽",
      },
      preview: {
        caption: "庫存總覽",
        greeting: "所有資訊一目瞭然",
        totalItems: "物品總數",
        lowStock: "庫存不足",
        recent: "最近更新",
        viewAll: "檢視全部",
        milk: "牛奶",
        kitchen: "廚房",
        bottles: "瓶",
        tissue: "衛生紙",
        household: "家庭用品",
        pack: "包",
      },
      trust: {
        label: "產品支援特色",
        languagesTitle: "支援三種語言",
        languagesText: "English、簡體中文與繁體中文。",
        practicalTitle: "實用解答",
        practicalText: "以簡短步驟說明最常使用的功能。",
        contactTitle: "輕鬆聯絡支援",
        contactText: "一步產生資訊完整的支援郵件。",
      },
      search: {
        kicker: "快速協助",
        title: "需要什麼協助？",
        description: "搜尋家庭庫存最常見的使用問題。",
        label: "搜尋支援內容",
        placeholder: "搜尋掃描、庫存、語言……",
      },
      topics: {
        kicker: "依主題瀏覽",
        title: "從常用功能開始",
        description: "協助您設定及管理家庭庫存的簡明指南。",
        cards: [
          { id: "getting-started", icon: "box", color: "#176fcc", tint: "#eaf3ff", title: "開始使用", description: "建立第一個物品，並使用分類、數量及日期整理庫存。" },
          { id: "barcode-scanner", icon: "scan", color: "#119b8c", tint: "#e7f8f5", title: "條碼掃描", description: "瞭解相機權限、掃描技巧，以及無法辨識條碼時的處理方式。" },
          { id: "stock-activity", icon: "activity", color: "#d3830a", tint: "#fff4dc", title: "庫存與報告", description: "記錄消耗及補貨，並透過活動報告瞭解庫存變化。" },
          { id: "language-appearance", icon: "settings", color: "#8a5bd1", tint: "#f2ecfb", title: "語言與外觀", description: "選擇英文、簡體中文或繁體中文，並設定顯示主題。" },
        ],
      },
      faq: {
        kicker: "常見問題",
        title: "直接、清楚的解答。",
        description: "展開問題即可查看操作說明。如果仍未解決，請在下方傳送支援郵件。",
        contactLink: "聯絡支援",
        emptyTitle: "找不到相關解答",
        emptyText: "請嘗試更廣泛的關鍵字，或傳送訊息給我們。",
        clearSearch: "清除搜尋",
        resultCount: (count) => `找到 ${count} 則解答`,
        items: [
          {
            id: "getting-started",
            category: "物品 新增 建立 分類 數量 開始",
            question: "如何新增第一個物品？",
            answer: "只要幾個步驟即可建立完整的庫存記錄：",
            steps: [
              "開啟「物品」頁面，然後點選「新增物品」。",
              "輸入物品名稱及數量，再選擇單位與分類。",
              "您也可以新增條碼、最低數量、價格、位置、購買日期或到期日。",
              "點選「儲存」，物品會立即顯示於庫存清單中。",
            ],
          },
          {
            id: "barcode-scanner",
            category: "條碼 掃描 相機 權限 辨識",
            question: "為什麼條碼掃描器無法使用？",
            answer: "請先開啟裝置的「設定」，確認家庭庫存已取得相機權限。接著清潔鏡頭、保持光線均勻，並將條碼穩定放在掃描框內。如果沒有相符的商品，仍可保留該條碼並手動填寫物品資訊。",
          },
          {
            id: "stock-activity",
            category: "消耗 補貨 數量 歷史 活動 出庫 入庫",
            question: "如何記錄消耗或補貨？",
            answer: "開啟物品詳情，選擇「消耗」以減少庫存，或選擇「補貨」以增加庫存。輸入數量並確認後，目前庫存會更新，同時產生一筆用於報告的活動記錄。",
          },
          {
            id: "low-stock-expiry",
            category: "庫存不足 最低數量 過期 到期 提醒 日期",
            question: "庫存不足與到期狀態如何計算？",
            answer: "當目前數量小於或等於您設定的最低數量時，物品會顯示為庫存不足。到期狀態依物品的到期日計算。您可以隨時編輯物品並修改這兩個值。",
          },
          {
            id: "search-filter",
            category: "搜尋 篩選 尋找 物品 分類 狀態",
            question: "如何快速找到物品？",
            answer: "在「物品」頁面使用搜尋欄，可依物品名稱或條碼搜尋。篩選功能可以依分類或庫存狀態縮小範圍。清除搜尋字詞及篩選條件即可回到完整清單。",
          },
          {
            id: "data-sync",
            category: "資料 本機 訪客 同步 離線 帳號 待同步 安全 備份",
            question: "資料儲存在哪裡？同步如何運作？",
            answer: "使用訪客模式時，庫存資料只會儲存在目前裝置。登入後可在支援的情況下啟用帳號同步。如果變更持續顯示為待同步，請檢查網路連線並重試。在本機資料尚未同步前，請勿刪除應用程式。",
          },
          {
            id: "language-appearance",
            category: "語言 英文 中文 簡體 繁體 主題 深色 淺色 設定",
            question: "如何變更語言或主題？",
            answer: "開啟「設定」，在「外觀」下選擇「語言」或「主題」。您可以選擇英文、簡體中文、繁體中文、淺色、深色或跟隨系統，設定會立即生效。",
          },
          {
            id: "reports",
            category: "報告 日期範圍 無資料 消耗 補貨 價值 活動",
            question: "為什麼報告中沒有資料？",
            answer: "報告是依消耗及補貨活動產生。請先新增物品並至少記錄一次「消耗」或「補貨」，同時確認所選日期範圍包含該筆記錄，然後重新整理報告。",
          },
        ],
      },
      checklist: {
        kicker: "聯絡支援前",
        title: "四項快速檢查可解決多數問題。",
        description: "以下操作安全無虞，不會刪除您的庫存資料。",
        stepOneTitle: "更新家庭庫存",
        stepOneText: "安裝 App Store 中提供的最新版本。",
        stepTwoTitle: "關閉並重新開啟",
        stepTwoText: "完整關閉應用程式，然後再次開啟。",
        stepThreeTitle: "檢查權限",
        stepThreeText: "如果掃描失敗，請在系統設定中確認相機權限。",
        stepFourTitle: "記下問題詳情",
        stepFourText: "記錄相關畫面、執行的操作及錯誤訊息。",
      },
      contact: {
        kicker: "聯絡支援",
        title: "仍然需要協助？",
        description: "請描述遇到的問題，本頁面會在預設郵件應用程式中產生一封郵件。網站不會上傳您的訊息內容。",
        privacyTitle: "隱私提醒",
        privacyText: "請勿提供密碼、驗證碼或完整的付款資訊。",
        directEmail: "也可以直接傳送郵件：",
      },
      form: {
        topic: "您需要哪方面的協助？",
        version: "應用程式版本",
        device: "裝置與系統",
        devicePlaceholder: "例如：iPhone 16、iOS 26",
        message: "發生了什麼問題？",
        messagePlaceholder: "請說明預期結果、實際情況及看到的錯誤訊息。",
        messageHelp: "請避免填寫敏感的個人資訊。",
        submit: "產生支援郵件",
        note: "系統將開啟郵件應用程式，傳送前您可以檢查所有內容。",
        topics: [
          { value: "general", label: "一般問題" },
          { value: "scanner", label: "條碼掃描" },
          { value: "inventory", label: "物品與庫存" },
          { value: "sync", label: "資料與同步" },
          { value: "reports", label: "報告" },
          { value: "bug", label: "回報問題" },
          { value: "feedback", label: "建議或意見" },
        ],
      },
      email: {
        subjectPrefix: "家庭庫存支援",
        greeting: "家庭庫存支援團隊，您好：",
        details: "支援資訊",
        topic: "問題類型",
        version: "應用程式版本",
        device: "裝置與系統",
        language: "支援語言",
        description: "問題描述",
        closing: "謝謝。",
        notProvided: "未填寫",
      },
      footer: {
        tagline: "輕鬆掌握家中現有物品。",
        version: "目前應用程式版本",
      },
      toast: { mailOpened: "支援郵件已在您的郵件應用程式中準備完成。" },
    },
  };

  const localeNames = {
    en: "English",
    "zh-CN": "简体中文",
    "zh-TW": "繁體中文",
  };

  const elements = {
    search: document.querySelector("#support-search"),
    topicGrid: document.querySelector("#topic-grid"),
    faqList: document.querySelector("#faq-list"),
    resultCount: document.querySelector("#result-count"),
    emptyState: document.querySelector("#empty-state"),
    clearSearch: document.querySelector("#clear-search"),
    topicSelect: document.querySelector("#topic"),
    supportForm: document.querySelector("#support-form"),
    toast: document.querySelector("#toast"),
  };

  let currentLanguage = detectLanguage();
  let toastTimer;

  function detectLanguage() {
    const queryLanguage = normalizeLanguage(new URLSearchParams(window.location.search).get("lang"));
    if (queryLanguage) return queryLanguage;

    const storedLanguage = normalizeLanguage(localStorage.getItem("home-stock-support-language"));
    if (storedLanguage) return storedLanguage;

    for (const language of navigator.languages || [navigator.language]) {
      const normalized = normalizeLanguage(language);
      if (normalized) return normalized;
    }
    return "en";
  }

  function normalizeLanguage(language) {
    if (!language) return null;
    const normalized = language.toLowerCase().replace("_", "-");
    if (normalized === "en" || normalized.startsWith("en-")) return "en";
    if (normalized === "zh-tw" || normalized === "zh-hk" || normalized === "zh-mo" || normalized.includes("hant")) return "zh-TW";
    if (normalized === "zh" || normalized === "zh-cn" || normalized === "zh-sg" || normalized.includes("hans")) return "zh-CN";
    return null;
  }

  function getByPath(object, path) {
    return path.split(".").reduce((value, key) => value?.[key], object);
  }

  function applyStaticTranslations(dictionary) {
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const value = getByPath(dictionary, element.dataset.i18n);
      if (typeof value === "string") element.textContent = value;
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      const value = getByPath(dictionary, element.dataset.i18nPlaceholder);
      if (typeof value === "string") element.setAttribute("placeholder", value);
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
      const value = getByPath(dictionary, element.dataset.i18nAria);
      if (typeof value === "string") element.setAttribute("aria-label", value);
    });
  }

  function renderTopics(dictionary) {
    elements.topicGrid.replaceChildren();
    dictionary.topics.cards.forEach((topic) => {
      const card = document.createElement("a");
      card.className = "topic-card";
      card.href = `#faq-${topic.id}`;
      card.style.setProperty("--card-color", topic.color);
      card.style.setProperty("--card-tint", topic.tint);
      card.innerHTML = `
        <span class="topic-card-icon">${icons[topic.icon]}</span>
        <h3></h3>
        <p></p>
        <span class="card-arrow">${icons.arrow}</span>
      `;
      card.querySelector("h3").textContent = topic.title;
      card.querySelector("p").textContent = topic.description;
      elements.topicGrid.append(card);
    });
  }

  function createFaqItem(item, index) {
    const details = document.createElement("details");
    details.className = "faq-item";
    details.id = `faq-${item.id}`;

    const summary = document.createElement("summary");
    const number = document.createElement("span");
    number.className = "faq-number";
    number.setAttribute("aria-hidden", "true");
    number.textContent = String(index + 1).padStart(2, "0");
    const question = document.createElement("span");
    question.textContent = item.question;
    summary.append(number, question);

    const answer = document.createElement("div");
    answer.className = "faq-answer";
    const paragraph = document.createElement("p");
    paragraph.textContent = item.answer;
    answer.append(paragraph);

    if (item.steps?.length) {
      const list = document.createElement("ol");
      item.steps.forEach((step) => {
        const listItem = document.createElement("li");
        listItem.textContent = step;
        list.append(listItem);
      });
      answer.append(list);
    }

    details.append(summary, answer);
    return details;
  }

  function renderFaqs(dictionary, query = "") {
    const normalizedQuery = query.trim().toLocaleLowerCase(currentLanguage);
    const matches = dictionary.faq.items.filter((item) => {
      if (!normalizedQuery) return true;
      const searchable = [item.question, item.answer, item.category, ...(item.steps || [])]
        .join(" ")
        .toLocaleLowerCase(currentLanguage);
      return searchable.includes(normalizedQuery);
    });

    elements.faqList.replaceChildren();
    matches.forEach((item) => {
      const originalIndex = dictionary.faq.items.findIndex((candidate) => candidate.id === item.id);
      elements.faqList.append(createFaqItem(item, originalIndex));
    });

    elements.emptyState.hidden = matches.length !== 0;
    elements.resultCount.textContent = normalizedQuery ? dictionary.faq.resultCount(matches.length) : "";
  }

  function renderTopicOptions(dictionary) {
    const selectedValue = elements.topicSelect.value;
    elements.topicSelect.replaceChildren();
    dictionary.form.topics.forEach((topic) => {
      const option = document.createElement("option");
      option.value = topic.value;
      option.textContent = topic.label;
      elements.topicSelect.append(option);
    });
    if (dictionary.form.topics.some((topic) => topic.value === selectedValue)) {
      elements.topicSelect.value = selectedValue;
    }
  }

  function updateMetadata(dictionary) {
    document.title = dictionary.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", dictionary.meta.description);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", dictionary.meta.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", dictionary.meta.description);
  }

  function updateUrl(language) {
    if (!window.history?.replaceState) return;
    const url = new URL(window.location.href);
    url.searchParams.set("lang", language);
    window.history.replaceState({}, "", url);
  }

  function setLanguage(language, { updateHistory = true, clearSearch = true } = {}) {
    const normalized = normalizeLanguage(language) || "en";
    currentLanguage = normalized;
    const dictionary = translations[normalized];

    document.documentElement.lang = normalized;
    applyStaticTranslations(dictionary);
    renderTopics(dictionary);
    renderTopicOptions(dictionary);

    if (clearSearch) elements.search.value = "";
    renderFaqs(dictionary, elements.search.value);
    updateMetadata(dictionary);

    document.querySelectorAll(".language-button").forEach((button) => {
      const active = button.dataset.language === normalized;
      button.setAttribute("aria-pressed", String(active));
      button.title = localeNames[button.dataset.language];
    });

    document.querySelectorAll("[data-support-email]").forEach((link) => {
      link.textContent = SUPPORT_EMAIL;
      link.href = `mailto:${SUPPORT_EMAIL}`;
    });

    localStorage.setItem("home-stock-support-language", normalized);
    if (updateHistory) updateUrl(normalized);
  }

  function showToast(message) {
    clearTimeout(toastTimer);
    elements.toast.textContent = message;
    elements.toast.hidden = false;
    toastTimer = window.setTimeout(() => {
      elements.toast.hidden = true;
    }, 4200);
  }

  function prepareSupportEmail(event) {
    event.preventDefault();
    const dictionary = translations[currentLanguage];
    const formData = new FormData(elements.supportForm);
    const selectedTopic = dictionary.form.topics.find((topic) => topic.value === formData.get("topic"));
    const topicLabel = selectedTopic?.label || dictionary.email.notProvided;
    const version = String(formData.get("appVersion") || "").trim() || APP_VERSION;
    const device = String(formData.get("device") || "").trim() || dictionary.email.notProvided;
    const message = String(formData.get("message") || "").trim();

    const subject = `[${dictionary.email.subjectPrefix}] ${topicLabel}`;
    const body = [
      dictionary.email.greeting,
      "",
      `${dictionary.email.details}:`,
      `${dictionary.email.topic}: ${topicLabel}`,
      `${dictionary.email.version}: ${version}`,
      `${dictionary.email.device}: ${device}`,
      `${dictionary.email.language}: ${localeNames[currentLanguage]}`,
      "",
      `${dictionary.email.description}:`,
      message,
      "",
      dictionary.email.closing,
    ].join("\r\n");

    showToast(dictionary.toast.mailOpened);
    window.location.href = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  document.querySelectorAll(".language-button").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.language));
  });

  elements.search.addEventListener("input", () => {
    renderFaqs(translations[currentLanguage], elements.search.value);
  });

  elements.clearSearch.addEventListener("click", () => {
    elements.search.value = "";
    renderFaqs(translations[currentLanguage]);
    elements.search.focus();
  });

  document.addEventListener("keydown", (event) => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      elements.search.focus();
      elements.search.select();
    }
  });

  elements.supportForm.addEventListener("submit", prepareSupportEmail);
  document.querySelector("#copyright-year").textContent = String(new Date().getFullYear());

  setLanguage(currentLanguage, { updateHistory: false, clearSearch: false });
})();
