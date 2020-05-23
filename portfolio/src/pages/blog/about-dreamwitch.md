---
title: "드림위치 개발일지"
date: "2020. 5. 21"
thumbnail: '/blog/about-dreamwitch0.jpg'
---

제로초님의 트위터 클론 사이트 노드버드 제작하기 강의를 끝까지 수강하여 next와 express를 이용해 하나의 사이트를 만드는 일련의 과정을 따라갔으나, 스스로 그런 사이트를 만들 수 있을지에 대해 확신이 서지 않았다. 

확실하게 내것으로 만들기 위해서 뭔가의 토이프로젝트를 진행해야 한다는 생각을 하던 중, 함께 종종 웹작업을 해온 친구 지수가 나에게 달성표를 디자인하여 줬다.

<img src="/blog/about-dreamwitch2.png" width="800"/>

당시 나는 트렐로의 체크리스트 기능을 이용하여 매일 그날 할 일을 미션처럼 적고 수행하는 일을 반복하고 있었는데, 트렐로 자체가 그런 체크리스트 기능을 메인으로 내세우는 사이트가 아니었기 때문에 불편함을 느끼고 있었다. 그럼에도 불구하고 트렐로를 계속 사용하던 이유는 내가 원하는 방식의 투두리스트 앱을 찾지 못해서였다. 내가 이룬 일들이 기록되는 투두리스트 어플을 원했지만 적절한 것이 없었다.


지수가 만들어온 달성표를 보고 토이프로젝트를 색다른 방식의 투두리스트 웹으로 진행하면 재밌겠다는 생각이 들었고 기획은 함께, 디자인은 지수가, 코드는 내가 짜는 방식으로 함께 시작하게 되었다.

<h4>CONCEPT</h4>

지수와 나의 당시 공통 관심사는 게이미피케이션이었다. 자연스럽게 게임 방식으로 미션을 성공하면 보상을 주어 사용자가 투두리스트를 달성하도록 동기부여를 하는 방향으로 진행하게 됐다.

이전에 지수와 카툰타투 할로윈게임 사이트를 함께 진행하면서 지수의 일러스트가 웹에 얹어졌을 때의 느낌을 두사람 모두 매우 만족스러워 했기 때문에 이번에도 그런식으로 디자인을 진행하기로 했다.

<img src="/blog/about-dreamwitch0.png" width="300" height="300"/>

사이트의 컨셉은 빠르게 결정됐다. 지수가 처음 디자인해온 달성표를 보고 추억의 애니메이션 꼬마마법사 레미같다는 인상을 받으면서 대화를 나누다보니 ‘견습 마녀가 승급을 위해 인간을 도와준다. 인간이 꿈을 위해 노력했을 때 나오는 꿈의 구슬로 성장한다’는 동화스러운 도입부가 자연스럽게 나왔다.

학부시절부터 ‘언젠간 꼭 웹으로 구현해보고싶다!’라고 생각하던 것 중 하나가 커스터마이징이었다. 투두리스트 미션을 달성할 경우엔 게임머니를 주고, 모은 게임머니로는 자신의 아바타를 커스터마이징하는 기능을 메인으로 두기로 했다. 사용자에게 성취감을 주기 위해 메인에 내가 꾸민 아바타를 보여주기로 했고, 사이트에서 어떠한 동작을 수행하면 아바타가 이에 대한 반응을 구현하고자 했다.

nodebird 사이트 제작을 따라할 때는 강의에서 보여주는 그대로 따라하면 되니 자잘한 오타로 에러가 뜨는것 외에느 큰 어려움을 느끼지 못했는데, 직접 사이트를 개발해보니 이런 저런 변수가 발생하여 애를 먹었다. 최대한 혼자 풀어보고자 하고, 도무지 진행이 안된다 싶을 때에 강의 사이트에 질문글을 올려 조언을 얻으면서 하나하나 완성해나갔다.

<img src="/blog/about-dreamwitch3.png"/>

드림위치는 처음엔 아주 간단하게 진행하고자 하였으나 진행중에 아이디어가 생겨 이런저런 기능을 추가로 넣은 사이트다. 처음엔 sns 기능 없이 그저 개인의 데이터만 볼 수 있는 식이었는데, 그렇게 진행하자니 express를 사용하는 의미가 크게 없는것 같아서 중간에 sns 형식으로 바꾸자는 아이디어가 나왔다. 개인 사이트가 아닌 소셜 네트워킹 사이트로 바꾸면서 다른 이의 페이지를 확인하고, 덧글을 달 수 있는 기능을 추가했다.

12시 이전에 투두를 성공할 경우 성공화면이 보이지만, 실패화면은 따로 보여주지 않고 12시가 지났을 때 자동으로 투두가 리셋됐다. 이 점이 어색하다고 느껴져 12시를 기점으로 성공과 실패 여부를 보여주는 화면을 넣기로 했다. 사용자의 달성욕구를 높이기 위해 성공한 날짜의 투두리스트만 히스토리 db에 저장하기로 했는데, 생각해보니 이렇게 되면 지난 날의 todo 데이터들은 다신 쓰이지 않는 쓰레기 데이터가 되어 버린다. 쓸데없는 데이터가 남아있는 건 디비에 무리를 줄 수도 있다고 생각되어 실패했을 경우 해당하는 날짜의 투두들은 삭제하도록 했다. 지난 투두 결과는 오늘의 todo들을 조회해보고 결과가 없을 때에 해당 사용자의 지난 투두들 중 가장 최근의 투두를 조회하여 그에 해당하는 투두들을 불러오게 했다. 이렇게 되니 투두를 갱신하지 않는다면 방문할때마다 같은 투두들을 보게 된다는 문제점이 생겼다. 지난 번 투두 결과들을 보는 것은 한번이면 된다고 생각하여 User 모델에 lastStart라는 column을 넣어주고, 지난 결과를 확인하고 새로운 투두를 시작할 때에 lastStart가 그 날의 날짜로 갱신되도록 했다. 그리고 지난 날의 투두들을 불러올 때의 조건을 그 날짜 이후의 것으로 제한했더니 원하는 대로 동작했다.

<h4>TIME</h4>

특히나 코드수정이 가장 많이 이루어진 부분은 날짜처리 부분이었다. 

데이터가 db에 입력될 때에 시퀄라이즈에서 자동으로 해당 데이터가 생성된 시간인 createdAt column을 만들어주었는데, timezone이 한국이 아닌 미국으로 설정되어 있는지 계속 9시간씩 차이가 났다.

사용자가 접속했을 때 그날의 날짜에 해당하는 투두들을 불러와 화면에 뿌려주는 식으로 구현했는데, 9시간 차이가 나다보니 시간차로 인해 엉뚱한 날짜의 투두들을 불러오는 문제가 있었다. 처음엔 바보같이 Todo 모델에 date라는 column을 따로 만들어 투두가 삽입될 때마다 그날 날짜를 넘겨서 기록되게 했는데 일단 제대로 작동은 되긴 하나 미숙한 내가 보기에도 나중가서 반드시 문제가 생길것 같은 우스워 보이는 코드였다. 게다가 date 컬럼은 createAt과 의미도 중복됐다.

결국 date column을 중간에 지우고, sequelize의 시간 설정을 9시간 더한 시간으로 바꾸어 주었다. <a href="https://lemontia.tistory.com/873" target="blank">(참고한 포스팅)</a> 일차적으로 이렇게 되니 제대로 작동했다.

진행을 하면서 위에 말한대로 지난 투두 결과를 보여주는 기능을 추가하게 됐는데, 이 때 날짜처리 코드가 추가로 들어가면서 코드가 굉장히 꼬이게 됐다. 또 날짜를 받아올 때에 string 형식으로 받아와 뒷부분을 자르고 YYYY-MM-DD 형태로 사용하고 있었는데, 이게 미관상 그닥 좋아보이지 않았다. 고민하던 중 moment.js를 알게 됐다. 날짜처리를 보다 쉽게 해주는 라이브러리였는데, 날짜 처리로 고민하던 나에게 정말 단비같은 존재였다. 결국 moment를 이용하여 코드에 들어간 날짜를 깔끔하게 정리했다.

그리하여 날짜처리는 더이상 손댈 일이 없을거라고 생각했는데, aws를 이용하여 배포하고 하루가 지나자마자 또 문제가 생겼다. 본래에는 12시를 기점으로 투두가 리셋되는데 12시를 한참 넘긴 시간에 투두리스트가 리셋되지 않은 것.. 처음에는 내가 코드를 잘못 작성한게 있었나 하고 한참을 헤맸는데 아침 9시가 지나니까 아무 일도 없었던것마냥 투두리스트가 리셋됐다. 알고보니 aws EC2의 기본 timezone 설정이 미국시간으로 되어 있어서 그날에 해당하는 투두들을 불러오는 코드에서 ‘그날’이 9시간 전의 날짜로 입력되어 생기는 문제였다. EC2에 접속하여 timezone 설정을 변경해두었지만 제대로 작동하지 않았다. 고민하던 중 사이트에 질문을 올렸는데 알고보니 내가 moment에서 timezone을 설정했다고 생각한 코드인 moment.locale()은 언어설정을 위한 코드였다.. 사이트의 설명을 제대로 보고 사용했어야 했는데 통탄하며 moment에 timezone을 제대로 설정해두었더니 12시가 지나자 제대로 리셋됐다. 그렇게 날짜처리와의 싸움은 끝이 났다…

<h4>RE-RENDERING</h4>

그 다음으로 고전했던 것은 쓸데없는 리렌더링을 막는 최적화 작업이었다. 단순히 React memo를 사용하면 어느정도 쓸데없는 리렌더링이 잡힐거라고 생각했는데, 데이터의 변동이 일어나는 부분은 관련없는 데이터를 처리하는 동작에도 계속 리렌더링 되는 문제점이 있었다. 

<h4>아쉬운 점</h4>

화면에 어떻게 보이는지가 신경쓰여 크롬 개발자도구로 각 디바이스별 화면을 체크해가며 style을 진행했는데, 그 때엔 아무런 문제가 보이지 않아 안심하고 사이트를 배포하여 주변인들에게 링크를 나눠줬다. 안드로이드는 큰 문제가 보이지 않았는데 유독 아이폰에서 문제가 생겼다. 

첫번째 문제는 아이폰이 키보드 입력 상태가 되면 활성화된 input폼을 중심으로 화면을 zoom 시키는데 친구들이 입력하기가 너무 불편하다고 하소연했다. 찾아보니 아이폰의 해당 기능은 viewport 태그에 “ maximum-scale=1, user-scalable=no”를 추가하니까 더이상 화면을 자동확대하지 않게 되어 해결됐다. 

문제는 두번째였다. 핸드폰사이즈로 보았을 때에 화면의 높이만큼 사이트의 높이를 설정했는데, 아이폰에선 이 화면 높이가 주소창까지 포함하여 처리되는 것인지 계속 화면에 세로스크롤이 생겨 스크롤을 내린다면 아바타의 얼굴이 제대로 보이지 않는 문제점이 있다. 이에 대한 해법을 찾지 못해 테스트폰을 옆에 두고 스타일을 바꾸며 확인하는 식으로 진행을 해보아야 할것 같은데, 내 폰은 안드로이드라서 테스트가 불가능하고 코로나로 인한 사회적 거리두기로 친구에게 부탁하기도 애매해서 일단은 보류중이다. 아이폰을 가진 친구를 자유롭게 만날 수 있는 날이 오면 언젠가 날잡고 꼭 개선하리라…
<br/><br/>

드림위치는 디자인이 모바일 사이즈 화면을 기준으로 나왔기 때문에 PC버전 사이즈의 경우 임의로 사이즈를 제한하는 프레임을 넣어 그 안에서 화면이 처리되도록 했다. 크게 불편하진 않지만 아무래도 모니터에서 봤을 때 조금 답답한 인상이 드는것도 같아서 기회가 생긴다면 PC버전 레이아웃을 한번 변경해보고 싶다. 게임머니를 얻는 방법이 투두 미션을 완료하는 것 하나밖에 없어 조금 아쉽다. 구직활동 이후 필요한 부분을 보충하여 정식배포하고자 하는데 그 때엔 친구의 진행중인 투두를 응원해주면 그 투두미션이 성공했을 때에 친구와 사용자 모두에게 조금의 보상이 돌아가는 식의 기능을 추가하고 싶다.

<h4>좋았던 점</h4>

일단 내가 평소에 필요하다고 느꼈던 기능의 사이트를 직접 만들게 되어 좋았다. 그리고 강의를 따라가면서 사용해보긴 했지만 내것이 아닌것 같았던 기술들을 이번 기회에 제대로 익힐 수 있었다. 

매번 닷홈이나 카페24에 ftp로 업로드하는 방식으로만 사이트를 배포하고, react로 만든 풀스택 사이트를 아마존을 통해 배포해보는 것은 처음이었는데 한번 해보니 생각 외로 복잡하지 않았다. 도메인을 구매하여 내 사이트에 연결해본 경험도 처음이었다! 

자바스크립트 프레임워크의 튜토리얼에 빠짐 없이 있는것이 투두리스트여서 구현하기 쉬울거라고 생각되었는데 막상 해보니 시간을 기준으로 조건을 주어 데이터를 처리하는 작업이 많아서 의외로 힘들었다. 

드림위치를 구현하는 과정에서 처음에는 막연하게만 느껴졌던 것을 어떻게든 방법을 찾아내 구현해내는 경험을 많이 했다. 이 과정에서 문제를 어떻게 해결해야 하는지 제대로 부딪혀본 것 같아서 좋았고… 리액트의 개념에 대해 제대로 이해하기가 어려워 리액트 강의만 3개씩 듣고 다녔는데, 그런 식으로 개념만 줄창 공부하는 것보다 실제로 프로젝트를 직접 만들면서 경험하는 것이 훨씬 더 와닿는 공부법이구나 깨달았다.

<br/>
<a href="http://dreamwitch.kr/" target="blank">드림위치 바로가기</a>