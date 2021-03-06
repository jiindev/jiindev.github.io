---
title: "JIIN,DEV 개발일지"
date: "2020. 5. 22"
---
웹개발자 취준에 있어 메인프로젝트라고 생각한 드림위치가 어느정도 마무리 되자 프로젝트와 이력들을 정리할 포트폴리오 사이트가 필요했습니다. 리액트를 배우기 시작하면서 리액트에 익숙해지면 그 다음으로 익히게 싶었던 것이
1순위가 리액트 네이티브, 2순위가 리액트 갯츠비였습니다. (3순위는 타입스크립트!) 퍼블리셔를 준비하던 시절에 브랜드 아이덴티티를 확실하게 드러내는 소개형 사이트를 여러가지 봤었는데, 그 과정에서 정적인 사이트에 큰 끌림을 느꼈던것 같습니다. 마침 리액트도 어느정도 익혔겠다, 포트폴리오 사이트는 리액트 갯츠비를 이용하여 개발하고자 마음먹게 됐답니다.
<br><br>
이제까지 공식사이트를 참고하여 프레임워크나 라이브러리를 익힐 때에 모두 한글화가 되어 있었는데 (리액트, 코드이그나이터...) 갯츠비 공식사이트는 한글 번역없이 영어로 되어있어 조금 머뭇거리게 됐습니다. 그렇지만 저같은
초보자들도 이해하기 쉽도록 문서가 간결하게 작성되어 있어 걱정했던 것보다는 수월하게 튜토리얼을 따라갈 수 있었습니다. 일단은 폴더 구조가 이전에 next.js를 사용하여 진행했을 때와 동일했기 때문에 굳이 시간을 써가며
이해할 필요가 없었습니다. css 처리의 경우 여러가지 방법이 있었는데, 공식 사이트에서 styled component의 사용을 권장하듯 적어놓았기에 직전에 사용하여 익숙해진 styled component를 그대로
사용했습니다.
<br><br>
사이트의 구조는 다른 개발자 포트폴리오 사이트의 컨텐츠를 참고하여 결정했습니다. 거의 대부분의 개발자 포트폴리오 사이트가 자신에 대한 소개, 포트폴리오 작업물, 블로그로 구성되어 있었습니다. 이전에는 블로그의 필요성에 대해
크게 느끼지 못했는데, 드림위치를 진행하면서 문제점이 발생하여 검색을 했을 때 자신의 문제와 해결방법을 서술해둔 블로그 포스팅에 도움을 굉장히 많이 받았습니다. 또, 문제가 발생했을 때 지난번에 겪고 해결한 문제임에도
그 해결방법이 기억나지 않아 다시 똑같은 검색을 반복하는 경우도 많았고요. 뭔가 개발일지를 적어놓는 블로그가 필요하다는 생각을 마침 하고 있었기에 블로그에 적을 내용은 아직 많지 않지만, 앞으로 채워가야겠다는 뜻에서
블로그까지 구현을 하기로 했습니다.

#### GRAPHQL
일단 갯츠비에서 블로그가 어떤 식으로 구현이 되는지에 대한 사전지식 하나도 없이 튜토리얼을 따라가게 됐습니다. 이번에 공식문서에 의지하며 갯츠비를 익히면서 느낀거지만 뭔가에 처음 익숙해질때 공식문서 튜토리얼만큼 좋은게 없는것 같습니다.. 이정도면 따라갈만 한데?를 연발하며 하나하나 따라가던 중 처음으로 난관에 부딪혔습니다. 바로 이전에 경험해본 적이 아예 없는 graphQL을 다루는 순간이 온것!
일단 공식문서에 나와있는 걸 따라하면 여차저차 진행은 됐지만 graphQL 자체를 이해하기가 힘들었습니다. 앞으로 graphQL을 만날 기회는 많으니, 일단 블로그를 만들 수 있을 정도의 사전지식까지만 쌓고 진행하기로 했습니다.<br><br>


**graphQL의 개념을 이해하는 데 큰 도움을 준 영상 ⬇**
<iframe width="560" height="315" src="https://www.youtube.com/embed/EkWI6Ru8lFQ" frameborder="0" allowfullscreen></iframe>

이전에 드림위치 작업은 REST API로 진행을 했는데, graphQL은 REST API의 대안으로 꼽히는 듯 합니다. REST API가 정의 내려져 있는 endpoint에 정해진 요청을 보내면 정해진 수순대로 데이터를 돌려주는 반면 graphQL은 훨씬 더 유연하게 요청을 보내 데이터를 가져올 수 있는 것. 각각의 장단점이 있기 때문에 상황에 따라서 복합적으로 사용하는 것을 권장하고 있습니다. 

<br>

**REST API**

- 장점 : 직관적이며 구현하기 단순하다. 범용성. 
- 단점 : 정의 내려진 동작만 처리가 가능하다. (유연하지 못함)

**graphQL**

- 장점 : 유연하다. 정해진 틀이 없음. 한번에 원하는 데이터 처리가 가능하여 요청의 횟수를 줄일 수 있다. 
- 단점 : text만으로 전달하기 힘든 데이터는 처리가 어렵다. 고정된 요청과 응답만이 필요할 경우엔 효율적이지 못하다.

<br>
DB를 연결하지 않고 어떻게 블로그를 만들 수 있다는 건지가 참 궁금했는데, graphQL로 사이트의 구조를 분석하여 특정 폴더에 있는 마크다운 파일들의 데이터를 가져오는 것이 가능했습니다. gatsby-node.js 파일을 만들어 빌드 시 마크다운 파일들을 각각의 페이지로 만들어 링크로 연결이 가능하도록 설정하여, 단순히 pages 안에 마크다운 파일을 넣어두는것만으로 블로그란에 포스팅을 추가할 수 있었습니다.

<h4>TRANSITION</h4>
만들기 전 걱정했던 블로그 연결 등은 튜토리얼을 따라가며 무난하게 잘 끝냈으나 페이지 전환에서 긴 시간을 썼습니다. 다른 페이지로 이동할 때에 일반 사이트처럼 아무런 전환효과 없이 이동하게 되는데, 이왕 SPA로
사이트를 만들었으니 페이지 간 전환효과를 넣고 싶다는 생각이 들었습니다. 마침 갯츠비의 경우 키워드만 잘 조합해서 검색하면 금방 내가 원하는 플러그인 혹은 라이브러리 관련 공식 문서가 나왔기 때문에 크게 문제없이 구현할
수 있으리라고 생각했습니다.

서치를 통해 갯츠비로 페이지 전환 효과를 낼 수 있는 방법 두가지를 찾았습니다.
<br /><br />
첫번째는 [gatsby-plugin-transition-link](https://transitionlink.tylerbarnes.ca/docs/)를 이용한 전환효과
주기. 검색을 하자마자 갯츠비 공식문서에 [관련 글](https://www.gatsbyjs.org/docs/adding-page-transitions-with-plugin-transition-link/)이 나왔습니다. 일단 [데모
 사이트](https://gatsby-plugin-transition-link.netlify.app/)에서 보여지는 애니메이션 효과가 굉장히 화려했던지라 바로 눈길을 잡았습니다. AniLink로 이와 같은 효과를 아주 간단한 방법으로 줄 수 있는데, 무궁무진한 애니메이션 효과 중 하나를 골라
적용하는걸 기대하고 들어왔으나 적용할 수 있는 애니메이션이 fade, paintDrip, swipe, cover 네가지밖에 없었습니다. 간단한 페이드인아웃 전환효과를 구현하고 싶었는데, AniLink로 낼 수 있는
페이드인아웃 효과는 시간차없이 동시에 전환되어서 썩 보기 좋지가 않았습니다. 그 외의 효과들은 간단한 코드로 화려한 효과를 낼 수 있다는 장점이 있었지만 심플한 제 사이트와는 어울리지가 않았습니다. AniLink의 fade
효과를 동시에 주지 않고 시간차로 줄 수 있는 방법이 없나 찾아보았지만 찾은 답변은 해당 플러그인은 유연성이 떨어지기 때문에 추천하지 않는다는 글 뿐이었습니다. TransitionLink를 사용하여 커스텀해볼까 하는
생각도 들었지만 검색하는 과정에서 react-transition-group을 알게 되었습니다.
<br /><br />
두번째로 시도하게 된 [react-transition-group](https://reactcommunity.org/react-transition-group/),리액트에서 가장 잘 알려진 전환 애니메이션 라이브러리라고 하네요. 이런게 있는줄 알았더라면 드림위치에서도 써볼걸 하는 후회와 함께... 서치를 해보니 갯츠비에서 적용하는 방법을 상세하게 적어놓은 [튜토리얼 포스트](https://www.digitalocean.com/community/tutorials/how-to-animate-page-transitions-on-a-static-gatsbyjs-site)가 있어서 이를 참고하여 진행했습니다.

적어놓은 전환 효과도 내가 원했던 시간차 페이드인&아웃 효과였기 때문에 코드 이해를 하는것 외엔 거의 동일하게 진행했습니다. 스크롤을 내렸을 때에 다른 페이지 링크를 클릭하면 스크롤 최상단으로 이동한 후 페이지가
바뀌어 거슬렸는데 이에 대한 해결방법도 자세히 적혀 있었습니다. 
```
const transitionDelay = 500
exports.shouldUpdateScroll = ({
    routerProps: { location },
    getSavedScrollPosition,
}) => {
    if (location.action === 'PUSH') {
        window.setTimeout(() => window.scrollTo(0, 0), transitionDelay)
    } else {
        const savedPosition = getSavedScrollPosition(location)
        window.setTimeout(
            () => window.scrollTo(...(savedPosition || [0, 0])),
            transitionDelay
        )
    }
    return false
}
```
현재 스크롤값을 기억한 뒤 페이지가 변환되는 타이밍에 스크롤이 0,0으로 가지 않고 기억한 스크롤값으로 이동하게 한 뒤, 페이지가 전환된 후에는 0,0으로
스크롤을 이동시키는 코드를 gatsby-browser.js로 작성하니 페이지가 어색하지 않게 전환될 수 있었습니다.

이 과정에서 생긴 문제점! transition 파일에 layout에서 생성된 location 객체를 넘겨주어 transition.js에서 location.pathname을 key값으로 사용하게 되는데 블로그 포스팅
md파일로 빌드시킨 링크의 경우 location 객체가 계속 undefined로 뜨는 문제가 있었습니다.

**TypeError: Cannot read property 'pathname' of undefined**

처음에는 이런 방식으로 빌드시킨 경우엔 갯츠비가 location 객체를 얻어오지 못하나? 하는 생각에 location 객체가 없을 경우 빈 객체를 넣어주는 식으로 수정하고, location.pathname을
key값으로 갖는 코드도 임시로 지우고 진행을 했습니다. 계속 key를 지정하지 않아 에러가 뜨는 것이 신경쓰여 location을 콘솔에 찍어봤는데, location이 제대로 한번 뜨고 바로 이어서 undefined가
따라왔다. 왜 location이 한번 로드된 이후에 undefined로 바뀌는지에 대해선 자세한 원인을 찾지 못했습니다. 그렇지만 제 예상과는 달리 처음에 렌더되었을 때 location이 제대로 따라오는 것은 맞았기에
location.pathname을 location && location.pathname으로 바꿔주었더니 이후 블로그 포스팅 링크에 들어갔을 때도 트랜지션이 제대로 동작했습니다.

```
<TransitionGroup>
    <ReactTransition 
    key={location && location.pathname} 
    timeout={{ enter: timeout, exit: timeout }}
    >
        {status => (
        <div style={{
                ...getTransitionStyles[status],
              }}>
            {children}
        </div>
        )}
    </ReactTransition>
</TransitionGroup>
```
#### YAML & 코드 중복 잡기!

works 페이지에서 같은 코드가 여러번 반복되는 문제점이 있었습니다. 데이터를 수정하기 위해서는 각 li코드 내부의 복잡한 코드들을 읽어가며 맞는 위치에 원하는 데이터를 적어넣어야 했기 때문에 직관적이지 못했습니다.

보다 효율적인 코드작성을 위해, works의 데이터들을 따로 전달하고 map 함수를 이용하여 이것을 정해진 형태로 화면에 뿌려지는 방식으로 코드를 전환하기로 했습니다. 여태껏 데이터를 전달해줄 때엔 json 형식을 사용했기 때문에 이번에도 익숙한 json을 사용하고자 하였으나, 갯츠비의 테마배포 튜토리얼을 보던 중 같은 상황에서 yaml 형식으로 데이터를 전달해주는 것을 보았습니다. 

<br/>

**[json 형식]**
```
{
    title: 'DREAMWITCH',
    date: '2020. 04 - 2020. 05',
    description: '투두리스트 SNS 웹서비스를 공동기획 및 풀스택 개발했습니다. 
    그날 하루동안의 해야 할 일을 기록하고,
    12시가 가기 전에 미션을 성공하면 보상을 줌으로써 사용자에게 동기부여를 줍니다. 
    모은 화폐로는 아바타를 커스터마이징 할 수 있으며, 
    다른 사용자의 페이지에 방문하여 덧글을 남김으로써 소통할 수 있습니다. 
    AWS에서 EC2서비스를 이용하여 배포하였습니다.',
    skills: ['REACT (REACT HOOKS)','REDUX & REDUX-SAGA', 
            'NEXT.js', 'Express.js', 'STYLED COMPONENT',
            '서버사이드 렌더링', 'AWS 배포'],
    siteUrl: 'http://dreamwitch.kr/',
    githubUrl: 'https://github.com/jiindev/DREAMWITCH',
    imgLink: '/dreamwitch.jpg',
    blogUrl: '/blog/about-dreamwitch/'
}
```

**[yaml 형식]**
```
- title: DREAMWITCH
  date: 2020. 04 - 2020. 05
  description: |
    투두리스트 SNS 웹서비스를 공동기획 및 풀스택 개발했습니다. 
    그날 하루동안의 해야 할 일을 기록하고,
    12시가 가기 전에 미션을 성공하면 보상을 줌으로써 사용자에게 동기부여를 줍니다. 
    모은 화폐로는 아바타를 커스터마이징 할 수 있으며, 
    다른 사용자의 페이지에 방문하여 덧글을 남김으로써 소통할 수 있습니다. 
    AWS에서 EC2서비스를 이용하여 배포하였습니다.
  skills: 
    - REACT (REACT HOOKS)
    - REDUX & REDUX-SAGA
    - NEXT.js
    - Express.js
    - STYLED COMPONENT
    - 서버사이드 렌더링
    - AWS 배포
  siteUrl: http://dreamwitch.kr/
  githubUrl: https://github.com/jiindev/DREAMWITCH
  imgLink: /dreamwitch.jpg
  blogUrl: /blog/about-dreamwitch/
```

갯츠비 문서에서 사용을 권장하고 있기도 하고, json보다 yaml 형식의 데이터가 직관적이고 보다 간편하다는 인상을 받아 yaml으로 데이터를 전달해주기로 했습니다.

<br/>

**[복잡했던 코드를 map 함수를 이용해서 반복시켜 간결화]**
```
{worksData.map((v, i)=>{
return (
<Work key={i}>
    <div className="center">
        <Image link={v.imgLink}></Image>
        <div className="description">
            <h4>{v.title}</h4>
            <Date>{v.date}</Date>
            <p>{v.description}</p>
            <ul>
                {v.skills.map((skill, skillKey)=>{
                return <li key={skillKey}>{skill}</li>
                })}
            </ul>
            <div>
                {v.siteUrl && <a href={v.siteUrl} target="blank"><Button>사이트 바로가기</Button></a>}
                {v.githubUrl && <a href={v.githubUrl} target="blank"><Button><i className="fab fa-github" /> GITHUB
                        바로가기</Button></a>}
                {v.blogUrl && <GatsbyLink to={v.blogUrl}><Button>개발일지 보기</Button></GatsbyLink>}
            </div>
        </div>
    </div>
</Work>
)
})}
```
데이터를 복잡한 코드의 내부에서 편집하던 이전과는 달리 yaml 파일 데이터 수정 시 바로 사이트에 반영이 되어 보다 간단하게 내용을 수정할 수 있도록 개선했습니다. 

#### THEME

데이터를 화면에 뿌려주는 방식을 위의 방식대로 바꾸고 나니 커스텀에 용이하겠다는 생각이 들었습니다. about 페이지를 살펴보니 마찬가지로 반복되는 데이터가 보였고 (경험을 서술한 리스트 형식의 데이터가 반복) 동일한 방식대로 코드를 단축시킬 예정입니다. 기존의 갯츠비 테마를 사용하지 않고 처음부터 끝까지 스스로 구현해낸 것은 갯츠비를 공부하고 싶다는 학구열도 있었지만, 테마중에 제가 원하는 스타일이 없어서이기도 했습니다. 이런 깔끔한 스타일의 포트폴리오 테마를 원하는 이들이 있을 수도 있다는 생각이 들어, 추후 갯츠비 테마로 배포하고자 합니다. [(튜토리얼 링크)](https://www.gatsbyjs.org/docs/themes/building-themes/)