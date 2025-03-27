#  박건일 학번:202130115

## 3월 27일(4주차)
### Component의 생성 및 nesting(중첩)
* component는 

## 3월 20일(3주차)
## 오늘 배운 내용
### React Project 구조 및 역할
#### project-name
-node modules/    
  1.초기 node module 및 새로 설치하는 패키지 저장
  
  2.초기 파일 37,752/폴더 4,597/용량은 200MB로 엄청난 양의 파일이 존재

  3.git으로 관리하지 않기 때문에 디렉토리 이름이 흐릿하게 나와 있는 것 확인

-public/ : 정적 파일을 저장하는 폴더로, 빌드 시 그대로 유지, 수정X
    * index.html:React 앱이 마운트되는 HTMl파일.<div id="root"></div>가 포함되어 있음.

-src/: React프로젝트의 주요 위치 코드 디렉토리
  * src/App.js : 메인 component로 필요한 sub component를 모아 관리, 출력을 위해 index.js로 전달
  * src/App.css : App.js에 적용되는 스타일 정의
  * src/index.js : React 앱의 진입 접으로 최종 렌더링이 되는 곳
  * src/index.css : 전역 스타일 정의하는 스타일 파일

+ #### 의존성 관리와 package.json
  -package.json은 패키지의 의존성을 관리하는 파일
  -의존성이란, 하나의 소프트웨어가 다른 소프트웨어(라이브러리, 패키지, 모듈 등)에 의존하여 동작하는 관계
  -즉, 어떤 프로젝트에 사용된 각종 패키지 등의 버전을 동일하게 유지하기 위한 것

  -협업을 할 때 팀원들 각자 컴퓨터에 같은 패키지들을 설치해서 동일환 개발환경 구성해야 함. 
  -코드는 GitHub 등 Git Server를 이용하지만, node 패키지는 각 팀원들이 설치

####  [의존성을 관리하는 이유]

  -손쉬운 설치 및  업데이트
  -일관된 개발 환경 유지
  -중복 설치 방지

  -package.json은 이런 의존성을 체계적으로 관리하는 역할
  -프로젝트에 필요한 라이브러리를 설치, 업데이트, 유지할 수 있도록 도와주는 시스템
+ #### [package.json을 유지해야 하는 이유]
  1. 프로젝트의 의존성 정보 제공
  2. 버전 범위 설정 가능
  3. 스크립트와 메타데이터 저장
  4. 새로운 메타데이터 저장
+ #### node module의 재설치
node module을 다시 설치해야 하는 경우는 다음과 같은 3가지 정도의 상황이 있을 수 있다.
-팀 작업을 하면서 GitHub로 부터 프로젝트 파일을 clone했을 경우,
[프로젝트에 오류나 의존성 등의 문제가 생겼을 경우]
1. node modules 폴더와 package-lock.json파일 삭제
2. npm 패키지의 임시 저장소인 cache를 초기화
-cache가 오래되면 충돌이 발생할 수도 있기 때무에 문제 해결에 도움 될 수 있는 작업
-force옵션으로 강제 삭제
3. 패키지를 다시 설치
[package-lock.json을 삭제하는 이유]
1. package-lock.json이 손상되었거나, 잘못된 의존성이 있을 때
2. 최신 버전의 패키지를 다시 받고 싶을 때
3. 팀 프로젝트에서 다른 팀원이 이상한 상태로 package-lock.json을 업데이트했을 때

### 개요
- React는 component 단위로 개발하여 레고를 조립하듯이 앱을 완성합니다.
- component는 작은 기능을 실행할 수 있는 하나의 모듈입니다.
- 공식 사이트의 홈에는 component가 어떻게 사용되는지 설명하고 있습니다.

### Component를 사용한 유저 인터페이스 생성
- React를 사용하면 component라고 하는 개별 조각으로 사용자 인터페이스를 구축할 수 있습니다,
- Video, Thumbnail 및 LikeButton이라는 react component를 생성해서 조립할 수 있습니다.
<<<<<<< HEAD
=======

### Component를 작성하는 JavaScript와 Markup
- React component는 JavaScript 함수입니다.
- 조건에 따라 화면을 다르게 표시하려면 if문을 사용하면 됩니다.
- 목록을 표시하고 싶다면 map()함수를 이용하면 됩니다.
- JavaScript를 이미 알고 있다면 더 쉽게 배울 수 있습니다.
- React에서 사용되는 마크업을 JSX라고 합니다.
- JSX는 React를 통해 대중화된 JavaScipt 확장 문법입니다.
- JSX 마크업 관련된 렌더링 로직과 가까이 두면, component를 쉽게 생성, 관리, 삭제 가능합니다.

### 필요한 곳에 상호작용 기능 추가
- React component는 데이터를 수신하고, 화면에 표시해야 하는 내용을 반환합니다.
- 사용자의 입력을 받아 새로운 데이터를 component에 전달 가능합니다.
- 이때 React는 상호작용을 통해 얻은 새 데이터로 화면을 업데이트합니다.
- 이것은 SearchInput과 VideoList 두 개의 component를 결합한 또 다른 component입니다.
- React 개발은 작은 component를 합쳐서 하나의 새로운 component를 만드는 식입니다.

### full-stack App 개발을 도와주는 React Framework
- React는 라이브러리이기 때문에 component를 조합할 수는 있지만, 라우팅 및 데이터 가져오기 방법 등을 규정하진 않습니다.
- React로 전체 앱을 빌드하려면 Next.js 또는 Remix와 같은 full-stack React Framework를 사용하는 것이 좋습니다.
- 사이트의 confs/[slug].js는 Next.js에서 제공하는 routing 방법 중 하나입니다.
- React도 하나의 아키텍처
- 소프트웨어 아키텍처는 소프트웨어의 구성요소들 사이에서 유기적 관계를 표현하고 소프트웨어의 설계와 업그레이드를 통제하는 지침과 원칙
- 따라서 이를 구현하는 Framework를 사용하면, 서버에서 실행되거나 혹은 빌드 중에도 비동기 component에서 데이터를 가져올 수도 있습니다.
- 또한 파일이나 데이터베이스에서 데이터를 읽어와서 대화형 component에 전달할 수도 있습니다.
- full-stack-App을 개발하는 것이라면 Framework를 사용하는 것이 생산성이 높습니다.
### 모든 플랫폼에서 최고의 성능을 발휘하는 React
- React를 사용하면 동일한 기술로도 웹 앱과 네이티브 앱을 모두 구축할 수 있습니다.
- 각 플랫폼의 고유한 강점을 활용하여 모든 플랫폼에 잘 어울리는 인터페이스를 구현할 수 있습니다.
### [웹의 본질에 충실하기]
- 사람들은 웹 앱 페이지가 빠르게 로드되기를 기대합니다.
- React를 사용하면 서버에서 데이터를 가져오는 동안에도 HTML을 스트리밍하는 것을 시작할 수 있기 때문에, JS 코드가 로드되기 전에 콘텐츠를 점진적으로 채울 수 있습니다.
- 또한 클라이언트 측에서는 표준 웹 API를 사용해서, 렌더링 도중에도 UI를 반응하도록 할 수 있습니다.
- 이런 동작들은 사람들이 원하는 빠른 렌더링을 도와줍니다.

### 진정한 네이티브 UX를 실현
- 사람들은 네이티브 앱이 자신의 플랫폼과 같은 모양과 느낌을 주길 원합니다.
- React Native와 Expo를 사용하면 Android, iOS 등을 위한 앱을 React로 빌드할 수 있습니다.
- 앱이 네이티브처럼 보이고 느껴지는 이유는 UI가 네이티브이기 때문입니다.
- 즉 Web view가 아니라 플랫폼에서 제공하는 Android 및 iOS view를 사용하기 때문입니다.
- React를 사용하면 웹 개발자도 네이티브 개발자도 될 수 있음 사용자 경험의 희생 없이 다양한 플랫폼에 앱을 출시할 수 있습니다.
- 기업에서는 플랫폼 간의 장벽을 허물고, 전체 기능을 협업으로 개발할 수 있는 팀을 구성할 수 있습니다.
>>>>>>> 72cb298e61514638481e8f39762f5b71256886d6

### Component를 작성하는 JavaScript와 Markup
- React component는 JavaScript 함수입니다.
- 조건에 따라 화면을 다르게 표시하려면 if문을 사용하면 됩니다.
- 목록을 표시하고 싶다면 map()함수를 이용하면 됩니다.
- JavaScript를 이미 알고 있다면 더 쉽게 배울 수 있습니다.
- React에서 사용되는 마크업을 JSX라고 합니다.
- JSX는 React를 통해 대중화된 JavaScipt 확장 문법입니다.
- JSX 마크업 관련된 렌더링 로직과 가까이 두면, component를 쉽게 생성, 관리, 삭제 가능합니다.

### 필요한 곳에 상호작용 기능 추가
- React component는 데이터를 수신하고, 화면에 표시해야 하는 내용을 반환합니다.
- 사용자의 입력을 받아 새로운 데이터를 component에 전달 가능합니다.
- 이때 React는 상호작용을 통해 얻은 새 데이터로 화면을 업데이트합니다.
- 이것은 SearchInput과 VideoList 두 개의 component를 결합한 또 다른 component입니다.
- React 개발은 작은 component를 합쳐서 하나의 새로운 component를 만드는 식입니다.

### full-stack App 개발을 도와주는 React Framework
- React는 라이브러리이기 때문에 component를 조합할 수는 있지만, 라우팅 및 데이터 가져오기 방법 등을 규정하진 않습니다.
- React로 전체 앱을 빌드하려면 Next.js 또는 Remix와 같은 full-stack React Framework를 사용하는 것이 좋습니다.
- 사이트의 confs/[slug].js는 Next.js에서 제공하는 routing 방법 중 하나입니다.
- React도 하나의 아키텍처
- 소프트웨어 아키텍처는 소프트웨어의 구성요소들 사이에서 유기적 관계를 표현하고 소프트웨어의 설계와 업그레이드를 통제하는 지침과 원칙
- 따라서 이를 구현하는 Framework를 사용하면, 서버에서 실행되거나 혹은 빌드 중에도 비동기 component에서 데이터를 가져올 수도 있습니다.
- 또한 파일이나 데이터베이스에서 데이터를 읽어와서 대화형 component에 전달할 수도 있습니다.
- full-stack-App을 개발하는 것이라면 Framework를 사용하는 것이 생산성이 높습니다.
### 모든 플랫폼에서 최고의 성능을 발휘하는 React
- React를 사용하면 동일한 기술로도 웹 앱과 네이티브 앱을 모두 구축할 수 있습니다.
- 각 플랫폼의 고유한 강점을 활용하여 모든 플랫폼에 잘 어울리는 인터페이스를 구현할 수 있습니다.
### [웹의 본질에 충실하기]
- 사람들은 웹 앱 페이지가 빠르게 로드되기를 기대합니다.
- React를 사용하면 서버에서 데이터를 가져오는 동안에도 HTML을 스트리밍하는 것을 시작할 수 있기 때문에, JS 코드가 로드되기 전에 콘텐츠를 점진적으로 채울 수 있습니다.
- 또한 클라이언트 측에서는 표준 웹 API를 사용해서, 렌더링 도중에도 UI를 반응하도록 할 수 있습니다.
- 이런 동작들은 사람들이 원하는 빠른 렌더링을 도와줍니다.

### 진정한 네이티브 UX를 실현
- 사람들은 네이티브 앱이 자신의 플랫폼과 같은 모양과 느낌을 주길 원합니다.
- React Native와 Expo를 사용하면 Android, iOS 등을 위한 앱을 React로 빌드할 수 있습니다.
- 앱이 네이티브처럼 보이고 느껴지는 이유는 UI가 네이티브이기 때문입니다.
- 즉 Web view가 아니라 플랫폼에서 제공하는 Android 및 iOS view를 사용하기 때문입니다.
- React를 사용하면 웹 개발자도 네이티브 개발자도 될 수 있음 사용자 경험의 희생 없이 다양한 플랫폼에 앱을 출시할 수 있습니다.
- 기업에서는 플랫폼 간의 장벽을 허물고, 전체 기능을 협업으로 개발할 수 있는 팀을 구성할 수 있습니다.




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
