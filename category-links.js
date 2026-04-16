const categoryLinks = [
  {
    categoryTitle: 'Notes',
    links: [
      { text: 'LocalNotes', url: 'https://rfd3344.github.io/pages/local-notes.html?notes=2' },
      { text: 'DailyNote', url: 'https://rfd3344.atlassian.net/wiki/spaces/estelspace/pages/20480026/DailyNotes' },
      { text: 'DriveDocs', url: 'https://drive.google.com/drive/folders/1XA8VemDb4wW-kstLImPOuOEW9Qi6g02J' },
      { text: 'VoidChat', url: 'https://voidchat.org/v/rfd3344' },
      // { text: 'slack', url: 'https://app.slack.com/client/T07BG5VAJTS/C08Q2LDL7BR' },
      // { text: 'teams', url: 'https://teams.live.com/v2' },
      { text: 'StaticFiles', url: 'https://rfd3344.vercel.app/github-repo' },
      { text: 'GithubRepo', url: 'https://github.com/rfd3344?tab=repositories' },
    ],
  },
  {
    categoryTitle: 'www.com',
    links: [
      { text: 'GoogleDrive', url: 'https://drive.google.com/drive/folders/1SPa-puKlt5b8IE8JcvkCiwv8u2WK6F8M' },
      { text: "Mail", url: 'https://outlook.office365.com/mail/' },
      { text: 'Jira', url: 'https://cardiex.atlassian.net/jira/software/c/projects/CCA/boards/191?assignee=712020%3A44d493fb-32ce-4106-808e-5cc38ee4746f' },
      { text: 'Confluence', url: 'https://cardiex.atlassian.net/wiki/spaces/NB/overview' },
      { text: 'Github', url: 'https://github.com/orgs/CardieX/repositories?type=all' },
      { text: 'AWS', url: 'https://us-east-1.console.aws.amazon.com/console/home?region=us-east-1#' },
      { text: 'AWS Portal', url: 'https://d-9067cf9945.awsapps.com/start/#/?tab=accounts' },
      { text: 'Vercel', url: 'https://vercel.com/conneqthealth' },
      { text: 'Firebase', url: 'https://console.firebase.google.com/u/2/project/dev-bp-conneqt/overview' },
    ],
  },
  {
    categoryTitle: 'Tools',
    links: [
      { text: 'Calculator', url: 'https://rfd3344.github.io/pages/calculator.html' },
      { text: 'AUD_CNY', url: 'https://share.google/xlYoiO4BStMaEFTGE' },

      { text: 'ChatGPT', url: 'https://chat.openai.com' },
      { text: 'Qwen', url: 'https://chat.qwen.ai/' },

      { text: 'PayCalculator', url: 'https://paycalculator.com.au' },
      { text: 'ILovePdf', url: 'https://www.ilovepdf.com' },
      { text: 'tinyTools', url: 'https://tinywow.com/' },
      { text: 'snap-drop', url: 'https://www.snap-drop.net/' },
      { text: 'ManualsLib', url: 'https://www.manualslib.com/' },
      { text: 'WebsiteInChina', url: 'https://www.app2china.com/tool/test-website' },

    ],
  },
  {
    categoryTitle: 'Image',
    links: [
      { text: 'ColorTable', url: 'https://rfd3344.github.io/pages/color-table.html' },
      { text: 'PhotoPea', url: 'https://photopea.com' },
      { text: 'ImageOnline', url: 'https://www.imgonline.com.ua/eng' },
      { text: 'ExcaliDraw', url: 'https://excalidraw.com/' },

      { text: 'Pixabay', url: 'https://pixabay.com' },
      { text: 'Unsplash', url: 'https://unsplash.com' },
      { text: 'Pexels', url: 'https://www.pexels.com' },
    ],
  },

  {
    categoryTitle: 'Tech',
    links: [
      { text: 'APIGenerator', url: 'https://retool.com/api-generator' },
      { text: 'DBDiagram', url: 'https://dbdiagram.io/d/demo-6724a1c7b1b39dd8582997d4' },
      { text: 'AWSCheatSheets', url: 'https://digitalcloud.training/aws-cheat-sheets' },
      { text: 'CodingNConcepts', url: 'https://codingnconcepts.com/aws/aws-certified-solutions-architect-associate' },
      { text: 'ToolFKDevTools', url: 'https://www.toolfk.com' },
      { text: '算法总结', url: 'https://github.com/youngyangyang04/leetcode-master/tree/master/problems' },
      { text: 'LeetCode', url: 'https://leetcode.com/problemset/all/' },
      { text: 'ReactNativeSample', url: 'https://github.com/ReactNativeNews/React-Native-Apps' },
    ],
  },
  {
    categoryTitle: 'Tech',
    links: [
      { text: 'SeekReact', url: 'https://www.seek.com.au/react-jobs/in-Sydney-NSW-2000' },
      { text: 'WNote', url: 'https://rfd3344.atlassian.net/wiki/spaces/rfd3344/pages/edit-v2/18055186' },

      { text: 'GoogleDrive', url: 'https://drive.google.com/drive/folders/1SPa-puKlt5b8IE8JcvkCiwv8u2WK6F8M' },
      { text: 'Jira', url: 'https://cardiex.atlassian.net/jira/software/c/projects/SR/boards/27/backlog?assignee=712020%3A44d493fb-32ce-4106-808e-5cc38ee4746f' },

      { text: 'Confluence', url: 'https://cardiex.atlassian.net/wiki/spaces/NB/overview' },
      { text: 'Github', url: 'https://github.com/orgs/CardieX/repositories?type=all' },
      { text: 'AWSPortal', url: 'https://d-9067cf9945.awsapps.com/start/#/?tab=accounts' },
    ],
  },
  {
    categoryTitle: 'Bill',
    links: [
      { text: 'CleanUpCollection', url: 'https://www.thehills.nsw.gov.au/Services/For-Residents/Waste-Recycling/Clean-Up-Collection' },
      { text: 'SydneyWater', url: 'https://myaccount.sydneywater.com.au/Portal/Dashboard.aspx' },
      { text: 'HillsCouncilInvoice', url: 'https://thehills.enotices.com.au/login?email=rfd3344@gmail.com' },
      { text: 'DEFTLevy', url: 'https://personal.deft.com.au/#/payer/dashboard/transactions' },
      { text: 'EToll', url: 'https://account.myetoll.transport.nsw.gov.au/login' },
      { text: 'NRMA', url: 'https://connect.nrma.com.au/welcome/login/username' },
      { text: 'ServiceNSW', url: 'https://account.service.nsw.gov.au/overview' },
      { text: 'Bupa', url: 'https://my.bupa.com.au/' },
      { text: 'ColesMobile', url: 'https://colesmobile.com.au/pages/dashboard/service/84870' },

    ],
  },
  {
    categoryTitle: 'Fun',
    links: [
      { text: '爱壹帆', url: 'https://www.google.com/search?q=yfsp' },
      { text: 'BiLiBiLi', url: 'https://www.bilibili.com' },
      { text: 'Youtube', url: 'https://www.youtube.com/' },
      { text: '虎牙直播', url: 'https://www.huya.com/g/wzry' },
      { text: 'ClashOfClans', url: 'https://clashpost.com/upgrade/category/home' },
      { text: 'Poki', url: 'https://poki.com/' },
      { text: 'RedAlert2', url: 'https://ra2web.com' },
      { text: 'CS-Online', url: ' https://play-cs.com/en/servers' },
      { text: 'DosGame', url: '  https://dos.zczc.cz/' },
      { text: 'BoardGame', url: ' https://game.hullqin.cn/' },
      { text: 'skylinewebcams', url: 'https://www.skylinewebcams.com/en.html' },

    ],
  },
  {
    categoryTitle: 'Health',
    links: [
      { text: 'tennis.com.au', url: 'https://www.tennis.com.au/book/court-hire/kellyville-ridge-nsw-2155' },

      { text: 'CastleHillTennis', url: 'https://www.tennisvenues.com.au/booking/hdta-caterson-tc' },
      { text: 'TennisParramatta', url: 'https://www.cityofparramatta.nsw.gov.au/recreation/tennis-courts' },
      { text: 'TennisAustralia', url: 'https://play.tennis.com.au/search?location=KELLYVILLE,%20NSW%202135&dateDisplay=Today&time=1230&orderBy=DISTANCE&activities=RESOURCE&quickbook=true' },
      { text: 'TennisHill', url: 'https://hills.bookable.net.au/search?categoryId=4' },

      { text: 'PerisherSki', url: 'https://www.epicaustraliapass.com.au/' },
      { text: 'HillsLeague', url: 'https://my.gloryleague.basketball/games' },
      { text: 'InstantScript', url: 'https://www.instantscripts.com.au/' },
    ],
  },
  {
    categoryTitle: 'Shopping',
    links: [
      { text: 'StockX', url: 'https://stockx.com/' },
      { text: 'OzBargain', url: 'https://www.ozbargain.com.au/' },
      { text: '澳洲省钱快报', url: 'https://www.dealmoon.com.au/' },
      { text: 'Temu', url: 'https://www.temu.com/au' },
      { text: 'Shein', url: 'https://au.shein.com/' },
      { text: 'MSY', url: 'https://www.msy.com.au/' },
      { text: 'MVave', url: 'https://www.mwave.com.au/' },
      { text: 'Groupon', url: 'https://www.groupon.com.au/' },
    ],
  },
  {
    categoryTitle: 'Others',
    links: [
      { text: 'Demo', url: 'https://rfd3344.vercel.app/demo' },
      { text: 'Demo', url: 'https://rfd3344.vercel.app/demo' },
    ],
  },
];




const renderCategoryList = (categoryLinks) => {
  const container = document.getElementById("container");

  categoryLinks.forEach(category => {
    const categoryDiv = document.createElement("div");
    categoryDiv.className = "category";

    const titleEl = document.createElement("div");
    titleEl.className = "category-title";
    titleEl.textContent = category.categoryTitle;
    categoryDiv.appendChild(titleEl);

    const buttonList = document.createElement("div");
    buttonList.className = "button-list";

    category.links.forEach(item => {
      const link = document.createElement("a");
      link.href = item.url;
      link.textContent = item.text;
      // link.target = "_blank"; // Open in new tab
      buttonList.appendChild(link);
    });

    categoryDiv.appendChild(buttonList);
    container.appendChild(categoryDiv);
  });
};

renderCategoryList(categoryLinks);