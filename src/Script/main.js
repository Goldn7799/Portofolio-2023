// Setting up DOC directory
const root = document.getElementById('root');
// [END] Setting up DOC directory


// Setting up Global Variable
let Global = {
  "devMode": false,
  "logLevel": 1,
  "PageState": undefined,
  "navState": undefined
}
// [END] Setting up Global Variable


// Pages
// // Utility Render
const pgfun = {
  "Clear": () => {
    root.innerHTML = "";
    if (Global.devMode) {
      console.log("<< Cleared Pages >>");
    };
  },
  "Add": (ElementText) => {
    root.innerHTML += pgfun.Parse(ElementText);
    if (Global.devMode) {
      console.log("<< Add New Element >>");
    };
  },
  "Set": (ElementText) => {
    root.innerHTML = pgfun.Parse(ElementText);
    if (Global.devMode) {
      console.log("<< Set The Element >>");
    };
  },
  "SetState": (text) => {
    Global.PageState = text;
    if (Global.devMode) {
      console.log(`<< Page State set to '${text}' >>`);
    };
  },
  "Parse": (text) => {
    var ThisText = text;
    ThisText = `${ThisText}`.replaceAll('{/slash indo/}', '<span class="slash-indo"><i>/</i><i>/</i><i>/</i><i>/</i></span>');
    if (Global.devMode && Global.logLevel > 1) {
      console.log(`<< Parsed The Element >>`);
    };
    return ThisText;
  },
  "Id": {
    "Add": (id, ElementText) => {
      document.getElementById(id).innerHTML += pgfun.Parse(ElementText);
      if (Global.devMode) {
        console.log(`<< Add new Element to #${id} >>`);
      };
    },
    "Set": (id, ElementText) => {
      document.getElementById(id).innerHTML = pgfun.Parse(ElementText);
      if (Global.devMode) {
        console.log(`<< Set the Element #${id} >>`);
      };
    },
    "Clear": (id) => {
      document.getElementById(id).innerHTML = '';
      if (Global.devMode) {
        console.log(`<< Clearing #${id} >>`);
      };
    }
  }
}
// // [END] Utility Render

// The Pages
const page = {
  "Home": () => {
    pgfun.Clear();
    pgfun.SetState("Home");
    pgfun.Add(`<nav class="thisNavbar" id="thisNavbar">
      <div class="navb-item navb-position">
        <div class="nitem-info">
          <!-- <img alt="profile potho" src="./src/Assets/profile.gif"/> -->
          <h5><b>Syeif Sultoni Akbar</b></h5>
        </div>
        <div class="nitem-selector d-none d-lg-flex">
          <div class="nitem-spage">
            <div onClick="mdHref('#Home')" class="thisItem navHome"><h6>Home</h6><div class="underline"></div></div>
            <div onClick="mdHref('#AboutPG')" class="thisItem navAbout"><h6>About</h6><div class="underline"></div></div>
            <div onClick="mdHref('#ExperincePG')" class="thisItem navExperince"><h6>Experince</h6><div class="underline"></div></div>
            <div onClick="mdHref('#SkillsPG')" class="thisItem navSkills"><h6>Skills</h6><div class="underline"></div></div>
            <div onClick="mdHref('#ProjectPG')" class="thisItem navProject"><h6>Project</h6><div class="underline"></div></div>
            <div onClick="mdHref('#SocialPG')" class="thisItem navSocial"><h6>Social</h6><div class="underline"></div></div>
          </div>
          <div class="nitem-ssocial d-none d-lg-flex">
            <button><i class="fa-xl fa-brands fa-github"></i><div class="sunderline"></div></button>
            <button><i class="fa-xl fa-brands fa-discord"></i><div class="sunderline"></div></button>
            <button><i class="fa-xl fa-brands fa-whatsapp"></i><div class="sunderline"></div></button>
            <button><i class="fa-xl fa-brands fa-instagram"></i><div class="sunderline"></div></button>
            <button><i class="fa-xl fa-brands fa-youtube"></i><div class="sunderline"></div></button>
          </div>
        </div>
        <div id="nitem-expand-info" class="nitem-expand-info d-flex d-lg-none">
          <div class="ne-line"></div>
          <div class="ne-line"></div>
          <div class="ne-line"></div>
        </div>
      </div>
      <div class="navb-background navb-position"></div>
    </nav>`);
    pgfun.Add(`<div id="Home">
      <div class="home-box flex-column flex-md-row">
      <div class="profileM d-block d-md-none"></div>
        <div class="home-lightabout">
          <h2>Syeif Sultoni Akbar</h2>
          <p>BackEnd? or FrontEnd?, nope i'm All Role, yes i'm <b>FullStack</b>, I can do anything as long as there is a <b>Tutorial</b> or <b>Documentation</b>.</p>
          <h5>Known As:</h5>
          <h4 class="rtext"><span id="rtext-value">GMRC79</span><span id="rtext-cursor" class="rtext-cursor-active">|</span></h4>
        </div>
        <div class="profile d-none d-md-block"></div>
      </div>
    </div>`)
    pgfun.Add(`<div id="AboutPG" class="thePG"></div><div id="About">
      <h3>{/slash indo/} <b>About Me</b> {/slash indo/}</h3>
      <div class="about-box" id="About-Box" style="opacity: 0; transform: translateY(65px);">
        <div class="profile d-none d-md-block"></div>
        <p>Hello, let me introduce myself, my name is Syeif Sultoni Akbar, I come from Malang, precisely in the district. Bululawang is in Indonesia in the province of East Java. I have approximately 4 years experience in the world of coding and more than 5 years studying electronics and machines with my father. My hobby is studying logical things such as coding, electronics and science. I also like learning about computers and networking. I'm still relatively young, yes I'm 15 years old now in 2023. I'm a perfectionist, nice to meet you :)</p>
      </div>
    </div>`);
    pgfun.Add(`<div id="ExperincePG" class="thePG"></div><div id="Experince">
      <h3>{/slash indo/} <b>Experince</b> {/slash indo/}</h3>
      <div class="experince-content exec-lg">
      <div id="expContent1" style="transform: scale(0, 0);" class="thisContent content-left">
        <div class="basicInfo">
          <h5>Learning Minecraft Server Devlopment</h5>
          <p><i class="fa-solid fa-calendar"></i> 2019-2020</p>
        </div>
        <p class="contentInfo">Create and Setup MC Server</p>
        <ul class="listLearn">
          <li>Basic Server <span>(Minecraft)</span></li>
          <li>Basic Plugin Config <span>(YML, YAML)</span></li>
          <li>Create Server <span>(Minecraft, McPlugin, [PMMP/PocketMineMP])</span></li>
          <li>Manage Server <span>(Minecraft)</span></li>
        </ul>
        <div class="usedTechnology">
          <button><img alt="Minecraft Server Icon" src="./src/Assets/Laguage/server.png"/>Minecraft Server</button>
          <button><img alt="YML Icon" src="./src/Assets/Laguage/yml.png"/>YML</button>
          <button><img alt="YAML Icon" src="./src/Assets/Laguage/yaml.png"/>YAML</button>
          <button><img alt="PMMP Icon" src="./src/Assets/Laguage/pmmp.png"/>PocketMine-MP</button>
        </div>
      </div>
        <div id="expContent2" style="transform: scale(0, 0);" class="thisContent content-right">
          <div class="basicInfo">
            <h5>First Time Learning Program</h5>
            <p><i class="fa-solid fa-calendar"></i> 2019-2021</p>
          </div>
          <p class="contentInfo">Introduction Program Laguage</p>
          <ul class="listLearn">
            <li>Basic Program <span>(C++)</span></li>
            <li>Simple Game <span>(C++)</span></li>
            <li>Math Solver <span>(C++)</span></li>
            <li>Making Calculator <span>(C++)</span></li>
          </ul>
          <div class="usedTechnology">
            <button><img alt="cpp Icon" src="./src/Assets/Laguage/cpp.png"/>C++</button>
          </div>
        </div>
        <div id="expContent3" style="transform: scale(0, 0);" class="thisContent content-left">
          <div class="basicInfo">
            <h5>Learning Python And Shell Command</h5>
            <p><i class="fa-solid fa-calendar"></i> 2020 - 2021</p>
          </div>
          <p class="contentInfo">Python and Bash/SH Laguage</p>
          <ul class="listLearn">
            <li>Basic Program <span>(Python)</span></li>
            <li>Basic <span>(Bash/SH)</span></li>
            <li>Simple Game <span>(Python)</span></li>
            <li>Making Calculator <span>(Python)</span></li>
            <li>Simple Tools <span>(Python)</span></li>
          </ul>
          <div class="usedTechnology">
            <button><img alt="Python Icon" src="./src/Assets/Laguage/python.png"/>Python</button>
            <button><img alt="Bash/SH Icon" src="./src/Assets/Laguage/bash.png"/>Bash/SH</button>
          </div>
        </div>
        <div id="expContent4" style="transform: scale(0, 0);" class="thisContent content-right">
          <div class="basicInfo">
            <h5>Learning Web Development</h5>
            <p><i class="fa-solid fa-calendar"></i> 2021-2023</p>
          </div>
          <p class="contentInfo">Learning Web Development From Youtube</p>
          <ul class="listLearn">
            <li>Basic Program <span>(HTML)</span></li>
            <li>Basic Program <span>(CSS)</span></li>
            <li>Basic Program <span>(JavaScript)</span></li>
            <li>Making simple Portofolio <span>(HTML, CSS)</span></li>
            <li>Making V2 Portofolio<span>(HTML, CSS, JS)</span></li>
            <li>Making RivCat[Realtime Web Chat] <span>(HTML, CSS, JS, [Firebase])</span></li>
            <li>Making Portofolio V3 <span>(HTML, CSS, JS, JSON)</span></li>
            <li>Making AI Whatsapp Bot With Website Control <span>(HTML, CSS, JS[API], JSON, [Node, Express, WhatsappWeb-js, OpenAI])</span></li>
            <li>Making ChatID[web, server] <span>(HTML, CSS, JS[+API], JSON, [Express, Firebase])</span></li>
            <li>Making AyKun Website <span>(HTML, CSS, JS[API], [Minecraft-MP-API])</span></li>
            <li>Making Portofolio 2023 <span>(HTML, CSS, JS)</span></li>
          </ul>
          <div class="usedTechnology">
            <button><img alt="HTML Icon" src="./src/Assets/Laguage/html.png"/>HTML</button>
            <button><img alt="CSS Icon" src="./src/Assets/Laguage/css.png"/>CSS</button>
            <button><img alt="JS Icon" src="./src/Assets/Laguage/js.png"/>Java Script</button>
            <button><img alt="JSON Icon" src="./src/Assets/Laguage/json.png"/>JSON</button>
          </div>
        </div>
        <div id="expContent5" style="transform: scale(0, 0);" class="thisContent content-left">
          <div class="basicInfo">
            <h5>Experiment With OS</h5>
            <p><i class="fa-solid fa-calendar"></i> 2022 - 2023</p>
          </div>
          <p class="contentInfo">experiment with PC and Phone</p>
          <ul class="listLearn">
            <li>Install OS <span>(Windows, Linux, MacOS)</span></li>
            <li>Setup OS <span>(Windows, Linux, MacOS[25%])</span></li>
            <li>Try Some Linux Distro <span>(Linux, [Manjaro(KDE), Ubuntu(Gnome, Budgie, Server), Debian(Server), Kubuntu, Kali, Mint(Cinamon), Fedora(Gnome), Zorin, Deepin])</span></li>
            <li>Stay dualboot Manjaro(KDE)|Windows(11) <span>(Linux)</span></li>
            <li>Experiment with  Krenel <span>(Python)</span></li>
          </ul>
          <div class="usedTechnology">
            <button><img alt="Linux Icon" src="./src/Assets/Laguage/linux.png"/>Linux</button>
            <button><img alt="Bash/SH Icon" src="./src/Assets/Laguage/bash.png"/>Shell Linux Command</button>
          </div>
        </div>
        <div id="expContent6" style="transform: scale(0, 0);"325 class="thisContent content-right">
          <div class="basicInfo">
            <h5>Web & Server Developer At AyKun Server</h5>
            <p><i class="fa-solid fa-calendar"></i> 2023</p>
          </div>
          <p class="contentInfo">As Admin, and Developer</p>
          <ul class="listLearn">
            <li>Edit Avabile Webiste <span>(HTML, CSS, JS[API])</span></li>
            <li>Create New Website <span>(HTML, CSS, JS[API])</span></li>
            <li>Create Store Website <span>(HTML, CSS, JS[+API])</span></li>
            <li>Learning Basic <span>(JAVA)</span></li>
            <li>Making Simple Plugin <span>(JAVA, Plugin[Bukkit, Paper])</span></li>
          </ul>
          <div class="usedTechnology">
            <button><img alt="HTML Icon" src="./src/Assets/Laguage/html.png"/>HTML</button>
            <button><img alt="CSS Icon" src="./src/Assets/Laguage/css.png"/>CSS</button>
            <button><img alt="JS Icon" src="./src/Assets/Laguage/js.png"/>Java Script</button>
            <button><img alt="Java Icon" src="./src/Assets/Laguage/java.png"/>Java</button>
            <button><img alt="Bukkit Icon" src="./src/Assets/Laguage/bukkit.png"/>Bukkit</button>
            <button><img alt="Paper Icon" src="./src/Assets/Laguage/paper.png"/>Paper</button>
            <button><img alt="Server Icon" src="./src/Assets/Laguage/server.png"/>Server</button>
          </div>
        </div>
      </div>
    </div>`)
    pgfun.Add(`<div id="SkillsPG" class="thePG"></div><div id="Skills">
      <h3>{/slash indo/} <b>Skills</b> {/slash indo/}</h3>
      <div class="skills-box container" id="skills-box" style="transform: scale(0, 1);">
        <div class="thisContent row justify-content-center">
          <div class="thisItem col">
            <img alt="HTML Icon" src="./src/Assets/Laguage/html.png"/>
            <div class="underline"></div>
            <p>HTML</p>
          </div>
          <div class="thisItem col">
            <img alt="CSS Icon" src="./src/Assets/Laguage/css.png"/>
            <div class="underline"></div>
            <p>CSS</p>
          </div>
          <div class="thisItem col">
            <img alt="JS Icon" src="./src/Assets/Laguage/js.png"/>
            <div class="underline"></div>
            <p>Java Script</p>
          </div>
          <div class="thisItem col">
            <img alt="Bash Icon" src="./src/Assets/Laguage/bash.png"/>
            <div class="underline"></div>
            <p>Bash</p>
          </div>
          <div class="thisItem col">
            <img alt="Java Icon" src="./src/Assets/Laguage/java.png"/>
            <div class="underline"></div>
            <p>Java</p>
          </div>
          <div class="thisItem col">
            <img alt="Linux Icon" src="./src/Assets/Laguage/linux.png"/>
            <div class="underline"></div>
            <p>Linux</p>
          </div>
          <div class="thisItem col">
            <img alt="CPP Icon" src="./src/Assets/Laguage/cpp.png"/>
            <div class="underline"></div>
            <p>Cpp</p>
          </div>
          <div class="thisItem col">
            <img alt="Server Icon" src="./src/Assets/Laguage/server.png"/>
            <div class="underline"></div>
            <p>Server</p>
          </div>
          <div class="thisItem col">
            <img alt="NodeJS Icon" src="./src/Assets/Laguage/nodejs.png"/>
            <div class="underline"></div>
            <p>Node JS</p>
          </div>
          <div class="thisItem col">
            <img alt="Bootstrap Icon" src="./src/Assets/Laguage/bootstrap.png"/>
            <div class="underline"></div>
            <p>Bootstrap</p>
          </div>
          <div class="thisItem col">
            <img alt="YML Icon" src="./src/Assets/Laguage/yml.png"/>
            <div class="underline"></div>
            <p>YML</p>
          </div>
          <div class="thisItem col">
            <img alt="Yaml Icon" src="./src/Assets/Laguage/yaml.png"/>
            <div class="underline"></div>
            <p>YAML</p>
          </div>
          <div class="thisItem col">
            <img alt="Json Icon" src="./src/Assets/Laguage/json.png"/>
            <div class="underline"></div>
            <p>JSON</p>
          </div>
          <div class="thisItem col">
            <img alt="Computer Icon" src="./src/Assets/computer.png"/>
            <div class="underline"></div>
            <p>Computer</p>
          </div>
          <div class="thisItem col">
            <img alt="React Icon" src="./src/Assets/Laguage/react.png"/>
            <div class="underline"></div>
            <p>React JS</p>
          </div>
          <div class="thisItem col">
            <img alt="Python Icon" src="./src/Assets/Laguage/python.png"/>
            <div class="underline"></div>
            <p>Python</p>
          </div>
          <div class="thisItem col">
            <img alt="Android Icon" src="./src/Assets/Laguage/android.png"/>
            <div class="underline"></div>
            <p>Android</p>
          </div>
          <div class="thisItem col">
            <img alt="Network Icon" src="./src/Assets/network.png"/>
            <div class="underline"></div>
            <p>Networking</p>
          </div>
          <div class="thisItem col">
            <img alt="Mikrotik Icon" src="./src/Assets/mikrotik.png"/>
            <div class="underline"></div>
            <p>Mikrotik</p>
          </div>
          <div class="thisItem col">
            <img alt="Firebase Icon" src="./src/Assets/Laguage/firebase.png"/>
            <div class="underline"></div>
            <p>Firebase</p>
          </div>
          <div class="thisItem col">
            <img alt="Express Icon" src="./src/Assets/Laguage/express.png"/>
            <div class="underline"></div>
            <p>Express</p>
          </div>
          <div class="thisItem col">
            <img alt="Bukkit Icon" src="./src/Assets/Laguage/bukkit.png"/>
            <div class="underline"></div>
            <p>Bukkit</p>
          </div>
          <div class="thisItem col">
            <img alt="Paper Icon" src="./src/Assets/Laguage/paper.png"/>
            <div class="underline"></div>
            <p>Paper</p>
          </div>
          <div class="thisItem col">
            <img alt="Pmmp Icon" src="./src/Assets/Laguage/pmmp.png"/>
            <div class="underline"></div>
            <p>PMMP</p>
          </div>
          <div class="thisItem col">
            <img alt="SKUnity Icon" src="./src/Assets/Laguage/skunity.png"/>
            <div class="underline"></div>
            <p>SKUnity</p>
          </div>
        </div>
        <div id="thisTransition"></div>
      </div>
    </div>`);
    pgfun.Add(`<div id="ProjectPG" class="thePG"></div><div id="Project" class="container">
      <h3>{/slash indo/} <b>Project</b> {/slash indo/}</h3>
      <div class="project-box row justify-content-center" id="project-box" style="opacity: 0; transform: translateY(40px);">
        <div class="thisItem col" style="background-image: url(./src/Assets/Screenshots/this-portofolio.png);">
          <div class="theInfo">
            <h6>Portofolio 2023</h6>
            <p>you're right, This portofolio!</p>
            <i class="fa-solid fa-link"></i>
          </div>
        </div>
        <div class="thisItem col" style="background-image: url(./src/Assets/Screenshots/aykun-web.png);">
          <div class="theInfo">
            <h6>AyKun Website</h6>
            <p>Website for Minecraft Server at Indonesia, using Minecraft-MP APi for data</p>
            <i class="fa-solid fa-link"></i>
          </div>
        </div>
        <div class="thisItem col" style="background-image: url(./src/Assets/Screenshots/openai-naonbotz.png);">
          <div class="theInfo">
            <h6>OpenAI-NaonBotz</h6>
            <p>Whatsapp AI Bots using OpenAI Apikey and WhatsappWeb-js</p>
            <i class="fa-solid fa-link"></i>
          </div>
        </div>
        <div class="thisItem col" style="background-image: url(./src/Assets/Screenshots/chatid.png);">
          <div class="theInfo">
            <h6>ChatID</h6>
            <p>Realtime Chat Web using Express and JSON+FS for Database and Firebase for Accounting</p>
            <i class="fa-solid fa-link"></i>
          </div>
        </div>
        <div class="thisItem col" style="background-image: url(./src/Assets/Screenshots/manage-aykun.png);">
          <div class="theInfo">
            <h6>Manage Aykun Server</h6>
            <p>As Developer and Admin at AyKun Minecraft Server, Manage Server and User</p>
            <i class="fa-solid fa-link"></i>
          </div>
        </div>
      </div>
    </div>`)
    pgfun.Add(`<div id="SocialPG" class="thePG"></div><div id="Social">
      <h3>{/slash indo/} <b>Social</b> {/slash indo/}</h3>
      <div class="social-box container" id="social-box" style="transform: scale(0, 1);">
        <div class="thisContent row">
          <div class="thisItem col">
            <img alt="gmail icon" src="./src/Assets/Apps/gmail.png"/>
            <div class="basic-info">
              <h6>E-Mail</h6>
              <p>syeifsultan@gmail.com</p>
            </div>
          </div>
          <div class="thisItem col">
            <img alt="whatsapp icon" src="./src/Assets/Apps/whatsapp.png"/>
            <div class="basic-info">
              <h6>WhatsApp</h6>
              <p>+62 812-2802-0195</p>
            </div>
          </div>
          <div class="thisItem col">
            <img alt="github icon" src="./src/Assets/Apps/github.png"/>
            <div class="basic-info">
              <h6>GitHub</h6>
              <p>@Goldn7799</p>
            </div>
          </div>
          <div class="thisItem col">
            <img alt="discord icon" src="./src/Assets/Apps/discord.png"/>
            <div class="basic-info">
              <h6>Discord</h6>
              <p>@gmrc79</p>
            </div>
          </div>
          <div class="thisItem col">
            <img alt="instagram icon" src="./src/Assets/Apps/instagram.png"/>
            <div class="basic-info">
              <h6>Instagram</h6>
              <p>@SyeifSultan</p>
            </div>
          </div>
          <div class="thisItem col">
            <img alt="youTube icon" src="./src/Assets/Apps/youtube.png"/>
            <div class="basic-info">
              <h6>YouTube</h6>
              <p>@syeifgamer1015</p>
            </div>
          </div>
          <div class="thisItem col">
            <img alt="epicgames icon" src="./src/Assets/Apps/epicgames.png"/>
            <div class="basic-info">
              <h6>EpicGames</h6>
              <p>@Syeif Sultan</p>
            </div>
          </div>
          <div class="thisItem col">
            <img alt="riotgames icon" src="./src/Assets/Apps/riotgames.png"/>
            <div class="basic-info">
              <h6>RiotGames</h6>
              <p>@GMRC79#syeif</p>
            </div>
          </div>
          <div class="thisItem col">
            <img alt="spotify icon" src="./src/Assets/Apps/spotify.png"/>
            <div class="basic-info">
              <h6>Spotify</h6>
              <p>@Syeif Sultan</p>
            </div>
          </div>
          <div class="thisItem col">
            <img alt="steam icon" src="./src/Assets/Apps/steam.png"/>
            <div class="basic-info">
              <h6>Steam</h6>
              <p>@syeifgamer5544</p>
            </div>
          </div>
          <div class="thisItem col">
            <img alt="tiktok icon" src="./src/Assets/Apps/tiktok.png"/>
            <div class="basic-info">
              <h6>TikTok</h6>
              <p>@syeifgamer1015_ofc</p>
            </div>
          </div>
        </div>
      </div>
    </div>`)
    pgfun.Add(`<div class="Copyringht">
      <p>Copyright ⒸSyeif Sultan 2023 <span onClick="mdHref('https://sgstudio.site')">https://sgstudio.site</span> | Made In Indonesia❤️‍🔥</p>
    </div>`)
    pgfun.Add(`<div id="scroll-mouse"></div><div id="scroll-up"></div>`)
    pgfun.Add(`<div id="expand-navbar" class="d-flex d-lg-none" style="transform: translateY(50%) translateX(500px);">
      <div class="thisItem" onClick="mdHref('#Home')">
        <p><b>Home</b></p>
        <div class="underline"></div>
      </div>
      <div class="thisItem" onClick="mdHref('#AboutPG')">
        <p><b>About</b></p>
        <div class="underline"></div>
      </div>
      <div class="thisItem" onClick="mdHref('#ExperincePG')">
        <p><b>Experince</b></p>
        <div class="underline"></div>
      </div>
      <div class="thisItem" onClick="mdHref('#SkillsPG')">
        <p><b>Skills</b></p>
        <div class="underline"></div>
      </div>
      <div class="thisItem" onClick="mdHref('#ProjectPG')">
        <p><b>Project</b></p>
        <div class="underline"></div>
      </div>
      <div class="thisItem" onClick="mdHref('#SocialPG')">
        <p><b>Social</b></p>
        <div class="underline"></div>
      </div>
    </div>`)
    // Page Variable
    var delayed = 0;
    // // Running Text
    const rtextValue = document.getElementById('rtext-value');
    const rtextCursor = document.getElementById('rtext-cursor');
    const rtextList = ['GMRC79', 'Sultan', 'Syeif Gamer1015', 'Syeif', 'Akbar'];
    const rtextConfig = {
      "delayWriteIn": 65,
      "delayDeteleIn": 40,
      "delayWaitt": {
        "Extend": 250,
        "PerTextAdd": 125
      },
      "delayWaittWrite": 400,
      "delayFirstTextWrite": 400,
      "delayFirstTextDelete": 300
    }
    // // Navbar
    const pgHome = document.querySelector('#Home')
    const pgAbout = document.querySelector('#About')
    const pgExperince = document.querySelector('#Experince')
    const pgSkills = document.querySelector('#Skills')
    const pgProject = document.querySelector('#Project')
    const pgSocial = document.querySelector('#Social')
    const expandNavbar = document.getElementById('expand-navbar')
    const expNavBtn = document.getElementById('nitem-expand-info')

    // Function Keys
    document.getElementById('scroll-up').addEventListener('click', ()=>{
      mdHref('#Home');
    })
    expNavBtn.addEventListener('click', ()=>{
      if (expNavBtn.classList.contains('expnavbtn-active')) {
        expNavBtn.classList.remove('expnavbtn-active')
        expandNavbar.style.transform = 'translateY(50%) translateX(500px)'
      } else {
        expNavBtn.classList.add('expnavbtn-active')
        expandNavbar.style.transform = 'translateY(50%) translateX(0px)'
      }
    })
    const closeExpNav = ()=>{
      expNavBtn.classList.remove('expnavbtn-active')
      expandNavbar.style.transform = 'translateY(50%) translateX(500px)'
    }

    // Update display interval
    const update = () => {
      if (Global.PageState === "Home") {
        // // Responsive
        if (window.scrollY > 100) {
          document.getElementById('thisNavbar').style.top = "";
          document.getElementById('thisNavbar').style.width = "";
          document.getElementById('scroll-mouse').style.marginBottom = "-80px";
          document.getElementById('scroll-up').style.marginBottom = "20px";
        } else {
          document.getElementById('thisNavbar').style.top = "-8.2%";
          document.getElementById('thisNavbar').style.width = "90%";
          document.getElementById('scroll-mouse').style.marginBottom = "20px";
          document.getElementById('scroll-up').style.marginBottom = "-80px";
          closeExpNav();
        }
        if (window.screen.width < 666) {
          document.querySelector('.experince-content').classList.remove('exec-lg');
          document.querySelector('.experince-content').classList.add('exec-sm');
        } else {
          document.querySelector('.experince-content').classList.add('exec-lg');
          document.querySelector('.experince-content').classList.remove('exec-sm');
        }

        // // Navbar
        const rcHome = pgHome.getBoundingClientRect();
        const rcAbout = pgAbout.getBoundingClientRect();
        const rcExperince = pgExperince.getBoundingClientRect();
        const rcSkills = pgSkills.getBoundingClientRect();
        const rcProject = pgProject.getBoundingClientRect();
        const rcSocial = pgSocial.getBoundingClientRect();
        if (Math.abs(rcHome.top) < 200) {
          Global.navState = 'Home';
        };
        if (Math.abs(rcAbout.top) < 200) {
          Global.navState = 'About';
        };
        if (Math.abs(rcExperince.top) < 200) {
          Global.navState = 'Experince';
        };
        if (Math.abs(rcSkills.top) < 400) {
          Global.navState = 'Skills';
        };
        if (Math.abs(rcProject.top) < 300) {
          Global.navState = 'Project';
        };
        if (Math.abs(rcSocial.top) < 360) {
          Global.navState = 'Social';
        };
        document.querySelector('.navHome').classList.remove('active');
        document.querySelector('.navAbout').classList.remove('active');
        document.querySelector('.navExperince').classList.remove('active');
        document.querySelector('.navSkills').classList.remove('active');
        document.querySelector('.navProject').classList.remove('active');
        document.querySelector('.navSocial').classList.remove('active');
        if (Global.navState === 'Home') {
          document.querySelector('.navHome').classList.add('active');
        } else if (Global.navState === 'About') {
          document.querySelector('.navAbout').classList.add('active');
        } else if (Global.navState === 'Experince') {
          document.querySelector('.navExperince').classList.add('active');
        } else if (Global.navState === 'Skills') {
          document.querySelector('.navSkills').classList.add('active');
        } else if (Global.navState === 'Project') {
          document.querySelector('.navProject').classList.add('active');
        } else if (Global.navState === 'Social') {
          document.querySelector('.navSocial').classList.add('active');
        };

        // // Delay
        if (delayed > 4) {
          delayed = 0;
          if (Global.devMode && Global.logLevel > 2) {
            console.log('catch');
          };
        } else {
          delayed++;
        }
        setTimeout(() => {
          update()
        }, 5);
      };
    }
    update();

    // Scroll Animation
    const obsAbout = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            document.getElementById('About-Box').style.opacity = '1';
            document.getElementById('About-Box').style.transform = 'translateY(0px)';
          }, 500);
          return;
        };
      })
    })
    obsAbout.observe(document.querySelector('.about-box'));
    const obsExpContent1 = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          document.getElementById('expContent1').style.transform = 'scale(1, 1)';
          return;
        }
      })
    })
    obsExpContent1.observe(document.querySelector('#expContent1'));
    const obsExpContent2 = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          document.getElementById('expContent2').style.transform = 'scale(1, 1)';
          return;
        }
      })
    })
    obsExpContent2.observe(document.querySelector('#expContent2'));
    const obsExpContent3 = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          document.getElementById('expContent3').style.transform = 'scale(1, 1)';
          return;
        }
      })
    })
    obsExpContent3.observe(document.querySelector('#expContent3'));
    const obsExpContent4 = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          document.getElementById('expContent4').style.transform = 'scale(1, 1)';
          return;
        }
      })
    })
    obsExpContent4.observe(document.querySelector('#expContent4'));
    const obsExpContent5 = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          document.getElementById('expContent5').style.transform = 'scale(1, 1)';
          return;
        }
      })
    })
    obsExpContent5.observe(document.querySelector('#expContent5'));
    const obsExpContent6 = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          document.getElementById('expContent6').style.transform = 'scale(1, 1)';
          return;
        }
      })
    })
    obsExpContent6.observe(document.querySelector('#expContent6'));
    const obsSkills = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          document.getElementById('skills-box').style.transform = 'scale(1, 1)';
          return;
        }
      })
    })
    obsSkills.observe(document.querySelector('#skills-box'));
    const obsProject = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          document.getElementById('project-box').style.transform = '';
          document.getElementById('project-box').style.opacity = '';
          return;
        }
      })
    })
    obsProject.observe(document.querySelector('#project-box'));
    const obsSocial = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          document.getElementById('social-box').style.transform = 'scale(1, 1)';
          return;
        }
      })
    })
    obsSocial.observe(document.querySelector('#social-box'));

    // Running Text
    const runningTextRunner = (Action, textArray) => {
      if (!rtextList[textArray]) return runningTextRunner('write', 0);
      if (Action === 'selectionDelete') {
        rtextCursor.style.opacity = '0';
        rtextValue.style.color = 'white';
        rtextValue.style.backgroundColor = '#0539A3';
        setTimeout(() => {
          rtextValue.innerText = '';
          rtextCursor.style.opacity = '';
          rtextValue.style.color = '';
          rtextValue.style.backgroundColor = '';
          setTimeout(() => {
            runningTextRunner('write', textArray + 1);
          }, rtextConfig.delayFirstTextWrite);
        }, rtextConfig.delayFirstTextDelete);
      } else if (Action === 'write') {
        const targetText = rtextList[textArray];
        const writeIn = (cout) => {
          const theText = targetText.substring(0, cout);
          rtextValue.innerText = theText;
          if (cout === targetText.length) {
            rtextCursor.classList.add('rtext-cursor-active');
            setTimeout(() => {
              if (textArray === 0) return runningTextRunner('selectionDelete', textArray);
              runningTextRunner('delete', textArray)
            }, rtextConfig.delayWaitt.Extend + (rtextConfig.delayWaitt.PerTextAdd * targetText.length));
          } else {
            setTimeout(() => {
              writeIn(cout + 1);
            }, rtextConfig.delayWriteIn);
          }
        };
        rtextCursor.classList.remove('rtext-cursor-active');
        writeIn(1)
      } else if (Action === 'delete') {
        const targetText = rtextList[textArray];
        const deleteIn = (cout) => {
          const theText = targetText.substring(0, cout);
          rtextValue.innerText = theText;
          if (cout === 0) {
            rtextCursor.classList.add('rtext-cursor-active');
            setTimeout(() => {
              runningTextRunner('write', textArray + 1)
            }, rtextConfig.delayWaittWrite);
          } else {
            setTimeout(() => {
              deleteIn(cout - 1);
            }, rtextConfig.delayDeteleIn);
          }
        };
        rtextCursor.classList.remove('rtext-cursor-active');
        deleteIn(targetText.length)
      }
    }
    setTimeout(() => {
      runningTextRunner('selectionDelete', 0)
    }, 1524);
  }
}
// [END] Pages


// on page load
window.onload = () => {
  setTimeout(() => {
    page.Home();
  }, 4500);
}
// [END] on page load

// Global Function
const mdHref = (url) => {
  window.location.replace(url);
  if (Global.devMode) {
    console.log(`Redirecting ${url}`);
  };
}
const mdOpen = (url) => {
  window.open(url);
  if (Global.devMode) {
    console.log(`Opening ${url}`);
  };
}
// // Export to Global
window.mdHref = mdHref;
window.mdOpen = mdOpen;
// [END] Global Function