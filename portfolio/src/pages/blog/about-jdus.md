---
title: "jdus 개발일지"
date: "2020. 6. 10"
thumbnail: '/blog/about-jdus0.jpg'
---
어느정도 포트폴리오가 끝났다고 생각했는데, 약간 마음 한구석에 찝찝한 것이 있었습니다. 포트폴리오 사이트를 '재밌는걸 만들자'라고 결심하고 진행했더니 진행한 포트폴리오가 게임 위주의 사이트였던 것인데요. 포트폴리오에 일반적으로 사용되는 웹사이트를 구현한 것이 있었으면 좋았을텐데 하며 아쉬워하던 중이었습니다.

당시 인프런에서 [비전공자를 위한 개발자 취업 실전 가이드](https://www.inflearn.com/course/%EB%B9%84%EC%A0%84%EA%B3%B5%EC%9E%90%EB%A5%BC-%EC%9C%84%ED%95%9C-%EA%B0%9C%EB%B0%9C%EC%9E%90-%EC%B7%A8%EC%97%85/dashboard)를 구매하여 수강했는데 강의를 작성하신 한정수님께서 1:1 질문방을 운영하고 계셔서 이력서에 대한 조언을 조심스럽게 부탁드렸습니다. 감사하게도 아주 도움이 되는 조언을 많이 주셨는데, 시간이 남으면 기존의 사이트를 클론코딩 해보라는 권유를 해주셨습니다. 

마침 제가 가지고 있던 불안과도 일맥상통했기 때문에 리액트를 이용해 기존의 서비스를 클론코딩하고자 결심했고, 평상시에 자주 사용하던 서비스인 아이디어스 클론코딩을 시작했습니다. 더이상 구직 시기를 늦추고 싶지 않았기 때문에 일주일 내로 단기간에 완성하는 것을 목표로 잡았습니다.

![아이디어스를 패러디한 제이디어스 로고](/blog/about-jdus0.jpg)

#### CREATE REACT APP? GATSBY? 

일단은 취업용 포트폴리오에 들어가는 작업이기 때문에 리액트로 한다고 해도 시작을 뭘로 할지 신중하게 고민하게 됐습니다. next.js의 경우 드림위치에서 사용하면서 익숙해졌지만 이번엔 백엔드 작업 없이 프론트만 진행하고자 마음먹었기 때문에 굳이 쓸 필요가 없었습니다. 리액트 공부를 하는 초기에는 create react app을 이용해 리액트 뼈대를 셋팅하고 진행했는데, 실무에서 create react app이 많이 쓰이는 듯 하여 이번 프로젝트는 그렇게 진행을 해야할지 아니면 이전에 포트폴리오 사이트를 만들면서 사용한 갯츠비를 다시 사용할지 고민이 됐습니다. 
리액트 공식 문서에는 다음과 같이 세가지 툴체인을 설명해주고 있습니다.

![리액트 공식 문서의 툴체인 설명글](/blog/about-jdus1.png)

이번 프로젝트는 디자인을 있는 그대로 구현하고, ui 기능을 리액트에 맞춰 구현해보는 것이었으며 다른 부가적인 기능이 필요없는 정적인 웹사이트를 만들 계획이었기 때문에 결국 갯츠비를 선택했습니다.

#### React slick

아이디어스엔 여러가지 ui가 화면에 구현되어 있었는데, 특히나 캐러셀 형식의 이미지 슬라이드가 많이 보였습니다. 이것을 직접 구현할지 라이브러리 사용을 할지 고민되었지만 결국 라이브러리를 사용하는 방향으로 결정하여 리액트 슬라이더 라이브러리를 찾아보았습니다.

결국 사용하게 된 것이 React slick입니다. 이전에 제이쿼리를 다룰 때에 사용했던 기억이 어렴풋이 있는데, 리액트 버전으로도 제작되어 있으며 리액트 슬라이더 라이브러리 중 특히나 이용자가 많아 택하게 되었습니다.
<br/><br/>
slick 자체의 기본적인 사용법은 매우 간단하여 기본 슬라이더는 구현을 하였으나, 아이디어스 사이트에 맞추기 위해서 버튼과 이미지 썸네일 네비게이션 등을 추가해야 했는데 응용법을 기재해둔 slick의 예제 페이지의 코드가 다 hooks 문법이 아닌 이전의 리액트 문법을 기준으로 적혀 있었습니다. hooks를 알게 된 이후에는 리액트 코딩 시 다 hooks를 이용하여 코딩을 했기 때문에 기억이 흐릿하여 보자마자 조금 막막했고, 진행하면서 여러가지 에러를 띄었습니다. 가장 고전한 것이 이전, 다음 버튼을 따로 띄우는 것이었는데, 이전의 문법을 찾아가며 hooks 형태로 변환하여 결국 제대로 동작하도록 구현해낼 수 있었습니다.
[예제 페이지](https://react-slick.neostack.com/docs/example/previous-next-methods)
<br/><br/>

**slick 예제 페이지에 기재된 코드**
```
import React, { Component } from "react";
import Slider from "react-slick";

export default class PreviousNextMethods extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <h2>Previous and Next methods</h2>
        <Slider ref={c => (this.slider = c)} {...settings}>
          <div key={1}>
            <h3>1</h3>
          </div>
          <div key={2}>
            <h3>2</h3>
          </div>
          <div key={3}>
            <h3>3</h3>
          </div>
          <div key={4}>
            <h3>4</h3>
          </div>
          <div key={5}>
            <h3>5</h3>
          </div>
          <div key={6}>
            <h3>6</h3>
          </div>
        </Slider>
        <div style={{ textAlign: "center" }}>
          <button className="button" onClick={this.previous}>
            Previous
          </button>
          <button className="button" onClick={this.next}>
            Next
          </button>
        </div>
      </div>
    );
  }
}
```
<br/>

**Hooks 문법으로 전환**

```
import React, {useRef} from "react";
import Slider from "react-slick";

const Slider = () => {
  const sliderRef = useRef();
  const next = () => {
    sliderRef.current.slickNext();
  }
  const previous = () => {
    sliderRef.current.slickPrev();
  }
  const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
   };
   return (
      <div>
        <h2>Previous and Next methods</h2>
        <Slider ref={sliderRef)} {...settings}>
          <div key={1}>
            <h3>1</h3>
          </div>
          <div key={2}>
            <h3>2</h3>
          </div>
          <div key={3}>
            <h3>3</h3>
          </div>
          <div key={4}>
            <h3>4</h3>
          </div>
          <div key={5}>
            <h3>5</h3>
          </div>
          <div key={6}>
            <h3>6</h3>
          </div>
        </Slider>
        <div style={{ textAlign: "center" }}>
          <button className="button" onClick={previous}>
            Previous
          </button>
          <button className="button" onClick={next}>
            Next
          </button>
        </div>
      </div>
    );
}
```

#### Dummy data

데이터 처리를 어떻게 할지에 대해서도 많은 고민을 했습니다. 정석대로라면 리듀서와 리듀서 사가를 이용해서 데이터를 가져오는 동작을 하여, 백엔드가 데이터를 전송하는 부분만을 더미 데이터를 뿌려주는 식으로 전환하여 진행을 해야겠지만 UI 구현 능력을 중점으로 두고 진행하는 클론코딩인데 그렇게까지 사이트를 부풀리고 싶지 않았습니다. 결국 data.js를 따로 만들어주어 더미데이터 목록을 선언하고, 쓰임새에 따라서 그 데이터를 리턴해주는 함수를 만들기로 하였습니다.

더미데이터의 썸네일 이미지는 저작권 문제가 염려되어 unsplash에서 제공되는 이미지를 제가 아이디어스에서 작업했던 캐리커쳐 이미지와 함께 사용했습니다. 50개의 데이터 배열을 작성했고, 함수는 N개의 더미데이터를 가져오기 / 해당 아티스트의 다른 데이터 가져오기 / 기본 데이터 가져오기로 나누었습니다.

<br/>

**원하는 갯수의 더미데이터 가져오기 (랜덤출력)**
```
  export const getDummyDataRandomly = (dataSize)  => {
    const dummyCopy = [...dummyData];
    for (let i = dummyCopy.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [dummyCopy[i], dummyCopy[j]] = [dummyCopy[j], dummyCopy[i]];
    }
    return dummyCopy.slice(0,dataSize);
  };
  ```

<br/>

**해당 아티스트의 다른 상품정보 가져오기**
```
  export const getArtistProducts = (artistName, productId) => {
    const dummyCopy = [...dummyData];
    return dummyCopy.filter((v)=>(v.artist === artistName && v.id !== productId)).slice(0,4);
  }
```
<br/>

**전달된 데이터 값이 없을 경우 디폴트 데이터 출력**
```
  export const getDefaultDummy = () => {
    return dummyData[35];
  };
```

#### 실시간 순위 보여주기

아이디어스 사이트를 쭉 훑어보았을 때엔 실시간 순위 보여주기가 단순해보였는데, 실제로 구현해보니 굉장히 애를 먹었습니다.
처음에 생각할 땐 단순하게 키워드 순위를 배열 형태의 더미데이터로 뿌려주고 그것을 n초마다 움직이게 하여 나머지 부분은 보여주지 않는 식이라고 생각했는데 실제로 사이트를 확인해보니 실제 element는 현재 순위 / 다음 순위 두가지로 이루어져있었으며 n초마다 움직인 이후 데이터를 전환하는 방식이었습니다.
실제 사이트와 비슷하게 구현하고 싶다는 욕심에 아이디어스 사이트의 실시간 순위 보여주기 방식대로 두개의 엘레멘트를 가지고 구현해보았습니다.

![실시간 순위 보여주기 캡쳐](/blog/about-jdus2.png)

자바스크립트로 애니메이션을 주는 방식을 찾아보니 너무 복잡해서 css로 값을 처리하고 transition을 이용해 클래스 유무로 애니메이션이 작동되도록 했습니다.
ranking값에 변화가 생기면 4초 후에 랭킹값을 감싸고 있는 div에 moving클래스가 추가되어, position이 relative로 바뀌고 (본래는 static) 위로 이동하게 됩니다. 이것을 transition을 이용해 0.5초로 설정하였고, moving클래스가 추가된지 0.5초가 지나면 moving 클래스를 제거하고(static으로 본래의 위치로 돌아옵니다. 이때의 transition은 0초로 하여 애니메이션 없이 바로 바뀌도록 합니다.) 현재의 ranking 값을 원래 값에서 1 더해준 값으로 바꾸어줍니다. (랭킹은 20위까지만 표시되기 때문에 그 이상 넘어가면 ranking을 0으로 되돌려줍니다.) ranking값에 변화가 생겼기 때문에 또 다시 같은 동작을 반복합니다. 이렇게 되면 실제로는 랭킹값을 감싸는 div가 실제로는 왔다 갔다 이동하지만 사용자가 보기에는 자연스럽게 N초마다 다음 순위를 보여주는 랭킹 슬라이더가 완성됩니다. 

```
    const dummyRanking = ['폰케이스','생일선물', '커플', '에어팟케이스', '키링', '반지', '팔찌', '그립톡', '가방', '귀걸이', '카드지갑', '에코백', '목걸이', '파우치', '버즈케이스', '캠핑', '케이크', '마스크', '지갑', 'nokchaba...'];
    const [ranking, setRanking] = useState(0);
    const rankingDiv = useRef();

    useEffect(() => {
        setTimeout(()=>{
            rankingDiv.current && rankingDiv.current.classList.add("moving");
            setTimeout(()=>{
                rankingDiv.current && rankingDiv.current.classList.remove("moving");
                if(ranking===19){
                    setRanking(0);
                }else setRanking(ranking+1);
            }, 500);
        }, 4000);
    }, [ranking, rankingDiv]);

    return(
    <Wrap>
        <RankingSlider>
            <div ref={rankingDiv}>
                <span><strong>{ranking+1}.</strong> {dummyRanking[ranking]}</span>
                <span><strong>{ranking === 19 ? 1 : ranking+2}.</strong> {ranking === 19 ? dummyRanking[0] : dummyRanking[ranking+1]}</span>
            </div>
        </RankingSlider>
    </Wrap>
    );

const RankingSlider = styled.div`
  font-size: 14px;
  color: #666;
  position: relative;
  overflow: hidden;
  width: auto;
  height: 15px;
  &>div{
    display: flex;
    flex-direction: column;
    position: static;
    transition: all .5s ease;
    top: 0;
    &.moving{
      position: relative;
      top: -19px;
      transition: all 0 ease;
    }
  }
`;

```

#### Link를 이용하여 state 전달하기

처음에 product 페이지는 하나의 더미데이터를 넣어주어, 어떤 것을 누르던 하나의 기본 데이터에 대한 페이지값을 보여주는 것으로 하고자 했습니다. 각 상품별로 페이지를 만들려면 기존에 포트폴리오 사이트를 작업했을 때처럼 graphQL을 사용해야 할 듯 보였는데, 아직 graphQL에 익숙하지 않아 망설여졌습니다. 
그렇지만 메인페이지에 더미데이터가 채워지면서 욕심이 생겼고, 간단하게 Link로 이동했을 때에 해당 데이터 값을 전달할 수 없을까를 고민하게 됐습니다. 컴포넌트에는 props를 전달할 수 있는데 Link로 이동할 때 동일한 방식으로 전달할 수는 없을까? 
찾아보니 갯츠비 Link에서 state값을 전달해줄 수 있었습니다. [공식문서](https://www.gatsbyjs.org/docs/gatsby-link/)

```
<Link
  to={'/somepagecomponent'}
  state={{modal: true}}
/>
```
Link를 사용하는 컴포넌트에서 state값을 객체 형식으로 전달해주고

<br/>

```
const SomePageComponent = ({ location }) => {
  const { state = {} } = location
  const { modal } = state
  return modal ? (
    <dialog className="modal">I'm a modal of Some Page Component!</dialog>
  ) : (
    <div>Welcome to the Some Page Component!</div>
  )
}
```
이동한 컴포넌트에서 props로 location을 받아오면 location.state에 이전 페이지에서 넘긴 값이 전달됩니다.
<br/><br/>

![product 페이지](/blog/about-jdus3.png)

위와 같은 방식을 이용하여 상품카드를 클릭하여 해당 상품의 페이지로 이동할 때에, 상품카드에 존재하는 데이터 값을 Link에 state 값으로 넘겨주고 상품 페이지에서 location.state.data로 가져와 화면에 뿌려주는 방식으로 구현할 수 있었습니다.


#### useMemo?

product 페이지에서 더미데이터를 함수를 이용해서 넣어주었는데, 모바일 화면에서 구매하기 버튼을 누를때마다 state가 변화되는데 그 때마다 더미데이터 내용이 바뀌는 문제점이 생겼습니다. 해당 페이지를 다시 렌더해오면서 다시 더미데이터를 랜덤으로 조회해와서 발생하는 문제였습니다.
useState를 이용해서 선언해줄까 생각해보았지만, 더미데이터의 경우 setState를 이용하여 데이터 내용을 바꾸어줄 필요 없는 정적 데이터였기 때문에 어떤 식으로 다루어야 할지 고민이 됐습니다. 찾아보던 중 useMemo를 발견했습니다. 

<br/>

**리액트 공식문서의 useMemo 설명**

메모이제이션된 값을 반환합니다.

“생성(create)” 함수와 그것의 의존성 값의 배열을 전달하세요. useMemo는 의존성이 변경되었을 때에만 메모이제이션된 값만 다시 계산 할 것입니다. 이 최적화는 모든 렌더링 시의 고비용 계산을 방지하게 해 줍니다.

useMemo로 전달된 함수는 렌더링 중에 실행된다는 것을 기억하세요. 통상적으로 렌더링 중에는 하지 않는 것을 이 함수 내에서 하지 마세요. 예를 들어, 사이드 이펙트(side effects)는 useEffect에서 하는 일이지 useMemo에서 하는 일이 아닙니다.

배열이 없는 경우 매 렌더링 때마다 새 값을 계산하게 될 것입니다.

<br/>

제가 문서를 읽고 이해하기에는 함수에 useCallback이 있다면 변수에는 useMemo가 있다! 라는 느낌이었습니다. product 페이지의 경우 전달된 data state를 기준으로 화면이 보여지는데, 의존성 값에 해당 data state를 넣을 경우 화면 전환 될때만 더미데이터 값을 바꾸어주게 됩니다. 제가 원하는 쓰임새에 맞는 방법이라고 생각되어 기존에 더미데이터를 불러오는 함수를 실행하여 바로 전달한 더미데이터들을 useMemo로 선언하여 해당 값을 컴포넌트에 전달해주었습니다. 

<br/>

**기존의 더미데이터 전달 (state에 변화가 생길 시 더미데이터 값이 바뀜)**
```
<div className="center">
    <div>
        <SectionTitle>이 작품과 함께 많이 본 다른 작품</SectionTitle>
        <ul>
            {getDummyDataRandomly(10).map((v, i)=>{
            return
                <ProductItem noReview={true} data={v} key={i} />
            })}
        </ul>
    </div>
    <div>
        <SectionTitle>{data.category} 인기 작품<button>더보기</button></SectionTitle>
        <ul>
            {getDummyDataRandomly(10).map((v, i)=>{
            return
                <ProductItem noReview={true} data={v} key={i} />
            })}
        </ul>
    </div>
</div>
```
<br/>

**useMemo를 이용하여 선언 후 전달**
```
const otherProducts = useMemo(()=>(getDummyDataRandomly(10)),[data]);
const categoryProducts = useMemo(()=>(getDummyDataRandomly(10)),[data]);

<div className="center">
    <div>
        <SectionTitle>이 작품과 함께 많이 본 다른 작품</SectionTitle>
        <ul>
            {otherProducts.map((v, i)=>{
            return
                <ProductItem noReview={true} data={v} key={i} />
            })}
        </ul>
    </div>
    <div>
        <SectionTitle>{data.category} 인기 작품<button>더보기</button></SectionTitle>
        <ul>
            {categoryProducts.map((v, i)=>{
            return
                <ProductItem noReview={true} data={v} key={i} />
            })}
        </ul>
    </div>
</div>
```
이렇게 되니 state에 변화가 생겨도 더미데이터들이 그대로 유지되었습니다. 

#### 소소한 UX 고민

아이디어스의 전체를 그대로 구현하는 것을 무리라고 생각되어 공통적인 스타일을 가지고 있는 서브페이지와 메인 페이지, 상품 상세 페이지를 구현하고자 마음먹고 그렇게 진행했습니다. 이때 또 문제가 생겼습니다. 버튼이라고 생각되는 부분에 모두 css 값으로 cursor: pointer;를 주었는데, 구현되지 않은 부분이어서 아무런 동작 처리가 없는 경우가 빈번하여 사이트를 방문한 이들이 어느 부분이 구현된 부분인지 인지하기가 힘들것 같다는 생각이 들었습니다.
동작하지 않는 버튼의 경우 cursor: pointer;를 없애 일반 마우스로 표시되도록 하고, 메뉴형 버튼인 경우 링크가 있는 버튼과 색깔을 다르게 하여 별다른 설명 없이 사용자가 인지하고 피해갈 수 있도록 스타일을 변경했습니다. 클릭할 수 있는 부분과 할 수 없는 부분에 차이를 주어 스타일링한것인데요.

![모바일 네비게이션 캡쳐](/blog/about-jdus4.png)

이렇게 스타일을 변경한 후 어머니께 아무말 없이 사이트를 보여드렸더니, 클릭할 수 있는 부분과 할 수 없는 부분이 금방 인지되었는지 헛 클릭 없이 무난하게 사이트를 둘러보시는 모습을 확인할 수 있었습니다.

#### 마치며

처음엔 가벼운 마음으로 시작한 클론코딩이었지만, 리액트에서 기본적인 UI 동작을 어떻게 구현할지 고민하게 되는 좋은 경험을 했습니다. 아이디어스 사이트의 경우 웹사이트에서 많이 사용되는 UI기능이 사이트 곳곳에 많이 존재하여 더욱 재밌게 코딩할 수 있었던것 같습니다. 드림위치와 포트폴리오 사이트 코딩때도, 이번 아이디어스 클론코딩때도 느꼈지만 코딩은 기본 개념이해도 중요하지만 실제로 직접 무언갈 만들어보면서 많은 것을 얻어가는 것 같습니다. 
<br/><br/>
<a href="https://jdus.netlify.app/" target="blank">제이디어스 바로가기</a>