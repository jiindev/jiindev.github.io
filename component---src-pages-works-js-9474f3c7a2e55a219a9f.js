(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"2RVH":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s})),n.d(t,"Button",(function(){return m}));n("tUrg");var i=n("q1tI"),a=n.n(i),r=n("vOnD"),l=n("LbRr"),o=n("uxIN"),c=n.n(o),d=n("Wbzz");function s(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(p,null,a.a.createElement(l.a,{headerText:"WORKS"}),c.a.map((function(e,t){return a.a.createElement(g,{key:t},a.a.createElement("div",{className:"center"},a.a.createElement(u,{link:e.imgLink}),a.a.createElement("div",{className:"description"},a.a.createElement("h4",null,e.title),a.a.createElement(h,null,e.date),a.a.createElement("p",null,e.description),a.a.createElement("ul",null,e.skills.map((function(e,t){return a.a.createElement("li",{key:t},e)}))),a.a.createElement("div",null,e.siteUrl&&a.a.createElement("a",{href:e.siteUrl,target:"blank"},a.a.createElement(m,null,"사이트 바로가기")),e.githubUrl&&a.a.createElement("a",{href:e.githubUrl,target:"blank"},a.a.createElement(m,null,a.a.createElement("i",{className:"fab fa-github"})," GITHUB 바로가기")),e.blogUrl&&a.a.createElement(d.a,{to:e.blogUrl},a.a.createElement(m,null,"개발일지 보기"))))))}))))}var p=r.default.div.withConfig({displayName:"works__Wrap",componentId:"usrnmq-0"})(["padding-bottom:50px;"]),u=r.default.div.withConfig({displayName:"works__Image",componentId:"usrnmq-1"})(["background:",";height:500px;flex:1;background-size:contain;background-position:center center;background-repeat:no-repeat;margin:0 30px;@media only screen and (max-width:767px){flex:none;height:300px;}"],(function(e){return"url("+e.link+")"})),g=r.default.div.withConfig({displayName:"works__Work",componentId:"usrnmq-2"})(["width:100%;padding:30px 0;&>div{display:flex;flex-direction:row-reverse;}& .img{}& .description{flex:1;line-height:1.5;padding:0 30px;}& h4{font-size:36px;font-weight:700;}& ul{padding:30px 0;font-weight:600;& li{&:before{width:10px;height:3px;content:'';display:inline-block;background:black;vertical-align:middle;margin-right:10px;}}}@media only screen and (max-width:767px){padding:10px 0;&>div{flex-direction:column;}& .description{flex:3;line-height:1.5;padding:0 30px 30px 30px;}& p{& br{display:none;}}& h4{font-size:24px;}& .img{flex:none;}}"]),m=r.default.button.withConfig({displayName:"works__Button",componentId:"usrnmq-3"})(["border:3px solid black;outline:none;padding:10px 30px;font-size:14px;margin-top:10px;font-family:'Montserrat','Noto Sans KR',san-serif;transition:all .2s ease;cursor:pointer;background-color:transparent;margin-right:10px;& a{color:black;text-decoration:none;}&:hover{background-color:black;color:white;font-weight:900;& a{color:white;}}"]),h=r.default.div.withConfig({displayName:"works__Date",componentId:"usrnmq-4"})(["font-size:16px;font-weight:500;margin-bottom:20px;"])},LbRr:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n("q1tI"),a=n.n(i);function r(e){var t=e.headerText;return a.a.createElement(l,null,t)}var l=n("vOnD").default.h2.withConfig({displayName:"header__H2",componentId:"w0084c-0"})(["font-size:64px;font-weight:700;text-align:center;padding:100px 15px 50px 15px;transition:all .2s ease;@media only screen and (max-width:767px){font-size:48px;}"])},OGtf:function(e,t,n){var i=n("XKFU"),a=n("eeVq"),r=n("vhPU"),l=/"/g,o=function(e,t,n,i){var a=String(r(e)),o="<"+t;return""!==n&&(o+=" "+n+'="'+String(i).replace(l,"&quot;")+'"'),o+">"+a+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(o),i(i.P+i.F*a((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}},tUrg:function(e,t,n){"use strict";n("OGtf")("link",(function(e){return function(t){return e(this,"a","href",t)}}))},uxIN:function(e,t){e.exports=[{title:"DREAMWITCH",date:"2020. 04 - 2020. 05",description:"투두리스트 SNS 웹서비스를 공동기획 및 풀스택 개발했습니다. \n그날 하루동안의 해야 할 일을 기록하고,\n12시가 가기 전에 미션을 성공하면 보상을 줌으로써 사용자에게 동기부여를 줍니다. \n모은 화폐로는 아바타를 커스터마이징 할 수 있으며, \n다른 사용자의 페이지에 방문하여 덧글을 남김으로써 소통할 수 있습니다. \nAWS에서 EC2서비스를 이용하여 배포하였습니다.\n",skills:["REACT (REACT HOOKS)","REDUX & REDUX-SAGA","NEXT.js","Express.js","STYLED COMPONENT","서버사이드 렌더링","AWS 배포"],siteUrl:"http://dreamwitch.kr/",githubUrl:"https://github.com/jiindev/DREAMWITCH",imgLink:"/dreamwitch.jpg",blogUrl:"/blog/about-dreamwitch/"},{title:"마리의 할로윈 파티",date:"2019. 9 - 2019. 10",description:"카툰타투 텀블벅 판매에서 이벤트로 진행한 스낵게임 웹사이트를 공동기획 및 개발했습니다. \n별도의 라이브러리 없이 순수 자바스크립트 만으로 개발하였으며 \n카드 뒤집기와 지뢰찾기 기본 동작 원리는 강의를 참고하여 진행하였고 \n추가로 스테이지 게임 클리어 팝업 등의 기능을 커스텀하였습니다. \n모든 미니게임을 클리어하면 특별한 엔딩을 확인할 수 있습니다.\n",skills:["VANILA JS","RESPONSIVE WEB"],siteUrl:"http://cartoontattoo.cafe24.com/halloween/",githubUrl:"https://github.com/jiindev/CTTT_halloween",imgLink:"/cttt.jpg"},{title:"JIIN, DEV",date:"2020. 05",description:"포트폴리오용 개인 사이트를 디자인 및 개발하였습니다.\n갯츠비를 이용하여 만든 정적인 사이트로, graphQL을 이용하여 \n마크다운 파일을 빌드 과정에서 블로그 페이지로 생성해주었습니다.\nABOUT에선 저의 이력을, WORKS에선 진행한 프로젝트를, BLOG에선 작성한 글을 확인할 수 있습니다.\n",skills:["REACT GATSBY.js","GRAPHQL","STYLED COMPONENT"],siteUrl:"https://jiindev.github.io/",githubUrl:"https://github.com/jiindev/jiindev.github.io",imgLink:"/jiindev.jpg",blogUrl:"/blog/about-jiindev/"},{title:"I AM A MEDIA ARTIST",date:"2018",description:"시민청에서 진행한 프로젝트 '아임 어 미디어 아티스트'의 웹사이트를 개발하였습니다.\n시민들이 직접 미디어아티스트와 소통하며 작품을 만들어 보는 프로젝트로,\n작가들의 작업과 시민들의 작업, 워크샵 내용을 아카이빙하는 원페이지 사이트입니다.\n",skills:["JQUERY","RESPONSIVE WEB"],siteUrl:"http://aliceon.net/iam/",githubUrl:"https://github.com/Studiojiji/I-AM-A-MEDIA-ARTIST",imgLink:"/iam.jpg"},{title:"THE PERFORM",date:"2018",description:"미디어아트 웹진 더퍼폼 사이트 개발 업무를 맡았습니다.\n기획과 디자인 컨셉 도출에 참여하였으며 이후 풀스택 개발을 했습니다.\n현재 실제로는 사용되지 않고 있지만 사용자페이지, 관리페이지로 \n나뉘어진 완전한 하나의 사이트를 제작해볼 수 있는 좋은 기회였고 \n이 프로젝트를 통해서 코드이그나이터와 mvc패턴을 이해하고 익힐 수 있었습니다.\n",skills:["PHP","CODEIGNITER","RESPONSIVE WEB"],siteUrl:null,githubUrl:"https://github.com/jiindev/THE-PERFORM",imgLink:"/theperform.jpg"}]}}]);
//# sourceMappingURL=component---src-pages-works-js-9474f3c7a2e55a219a9f.js.map