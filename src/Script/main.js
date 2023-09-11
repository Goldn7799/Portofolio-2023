// Setting up DOC directory
const root = document.getElementById('root');
// [END] Setting up DOC directory


// Setting up Global Variable
let Global = {
  "devMode": false,
  "PageState": undefined
}
// [END] Setting up Global Variable


// Pages
const pgfun = {
  "Clear": ()=>{
    root.innerHTML = "";
    if (Global.devMode) {
      console.log("<< Cleared Pages >>");
    };
  },
  "Add": (ElementText) => {
    root.innerHTML += pgfun.Parse(ElementText);
  },
  "Set": (ElementText) => {
    root.innerHTML = pgfun.Parse(ElementText);
  },
  "SetState": (text) => {
    Global.PageState = text;
  },
  "Parse": (text) => {
    var ThisText = text;
    ThisText = `${ThisText}`.replaceAll('{/slash indo/}', '<span class="slash-indo"><i>/</i><i>/</i><i>/</i><i>/</i></span>');
    return ThisText;
  }
}

// The Pages
const page = {
  "Home": ()=>{
    pgfun.Clear();
    pgfun.SetState("Home");
    pgfun.Add(`<nav class="thisNavbar" id="thisNavbar">
      <div class="navb-item navb-position">
        <div class="nitem-info">
          <img alt="profile potho" src="./src/Assets/profile.gif"/>
          <h5>Syeif Sultoni Akbar</h5>
        </div>
        <div class="nitem-selector d-none d-lg-flex">
          <div class="nitem-spage">
            <div class="thisItem active"><h6>Home</h6><div class="underline"></div></div>
            <div class="thisItem"><h6>About</h6><div class="underline"></div></div>
            <div class="thisItem"><h6>Experince</h6><div class="underline"></div></div>
            <div class="thisItem"><h6>Skills</h6><div class="underline"></div></div>
            <div class="thisItem"><h6>Project</h6><div class="underline"></div></div>
            <div class="thisItem"><h6>Hobby</h6><div class="underline"></div></div>
            <div class="thisItem"><h6>Contact</h6><div class="underline"></div></div>
          </div>
          <div class="nitem-ssocial d-none d-lg-flex">
            <button><i class="fa-xl fa-brands fa-github"></i><div class="sunderline"></div></button>
            <button><i class="fa-xl fa-brands fa-discord"></i><div class="sunderline"></div></button>
            <button><i class="fa-xl fa-brands fa-whatsapp"></i><div class="sunderline"></div></button>
            <button><i class="fa-xl fa-brands fa-instagram"></i><div class="sunderline"></div></button>
            <button><i class="fa-xl fa-brands fa-youtube"></i><div class="sunderline"></div></button>
          </div>
        </div>
        <div class="nitem-expand-info d-flex d-lg-none">
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
    pgfun.Add(`<div id="About">
      <h3>{/slash indo/} About Me {/slash indo/}</h3>
      <div class="about-box">
        <div class="profile"></div>
        <p>Hello, let me introduce myself, my name is Syeif Sultoni Akbar, I come from Malang, precisely in the district. Bululawang is in Indonesia in the province of East Java. I have approximately 4 years experience in the world of coding and more than 5 years studying electronics and machines with my father. My hobby is studying logical things such as coding, electronics and science. I also like learning about computers and networking. I'm still relatively young, yes I'm 15 years old now in 2023. I'm a perfectionist, nice to meet you :)</p>
      </div>
    </div><canvas style="height: 25vh;"></canvas>`);
    pgfun.Add(`<div id="Experince">
      <h3>{/slash indo/} Experince {/slash indo/}</h3>
      <div class="experince-content">
      <div class="thisContent" style="float: left;">
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
          <button><img alt="Python" src="./src/Assets/Laguage/cpp.png"/>Python</button>
          <button><img alt="Bash/SH" src="./src/Assets/Laguage/cpp.png"/>Bash/SH</button>
        </div>
      </div>
        <div class="thisContent" style="float: right;">
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
            <button><img alt="cpp" src="./src/Assets/Laguage/cpp.png"/>C++</button>
          </div>
        </div>
        <div class="thisContent" style="float: left;">
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
            <button><img alt="Python" src="./src/Assets/Laguage/cpp.png"/>Python</button>
            <button><img alt="Bash/SH" src="./src/Assets/Laguage/cpp.png"/>Bash/SH</button>
          </div>
        </div>
        <div class="thisContent" style="float: right;">
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
            <button><img alt="cpp" src="./src/Assets/Laguage/cpp.png"/>C++</button>
          </div>
        </div>
        <div class="thisContent" style="float: left;">
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
            <button><img alt="Python" src="./src/Assets/Laguage/cpp.png"/>Python</button>
            <button><img alt="Bash/SH" src="./src/Assets/Laguage/cpp.png"/>Bash/SH</button>
          </div>
        </div>
        <div class="thisContent" style="float: right;">
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
            <button><img alt="Python" src="./src/Assets/Laguage/cpp.png"/>Python</button>
            <button><img alt="Bash/SH" src="./src/Assets/Laguage/cpp.png"/>Bash/SH</button>
          </div>
        </div>
      </div>
    </div><canvas style="height: 125px"></canvas>`)
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

    // Update display interval
    const update = ()=>{
      if (Global.PageState === "Home") {
        if (window.scrollY > 100) {
          document.getElementById('thisNavbar').style.top = "";
          document.getElementById('thisNavbar').style.width = "";
        } else {
          document.getElementById('thisNavbar').style.top = "-8.2%";
          document.getElementById('thisNavbar').style.width = "90%";
        }
        if (delayed > 4) {
          delayed = 0;
          if (Global.devMode) {
            console.log('catch');
          };
        } else {
          delayed++;
        }
        setTimeout(() => {
          update()
        }, 250);
      };
    }
    update();
    const runningTextRunner = (Action, textArray)=>{
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
            runningTextRunner('write', textArray+1);
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
              writeIn(cout+1);
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
              runningTextRunner('write', textArray+1)
            }, rtextConfig.delayWaittWrite);
          } else {
            setTimeout(() => {
              deleteIn(cout-1);
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
window.onload = ()=>{
  setTimeout(() => {
    page.Home();
  }, 4500);
}
// [END] on page load