#  박건일 학번:202130115

## 3월 20일(3주차)
오늘 배운 내용
### React Project 구조 및 역할
#### project-name
-node modules/    
  1.초기 node module 및 새로 설치하는 패키지 저장
  
  2.초기 파일 37,752/폴더 4,597/용량은 200MB로 엄청난 양의 파일이 존재

  3.git으로 관리하지 않기 때문에 디렉토리 이름이 흐릿하게 나와 있는 것 확인

-public/ : 정적 파일을 저장하는 폴더로, 빌드 시 그대로 유지, 수정X
    index.html:React 앱이 마운트되는 HTMl파일.<div id="root"></div>가 포함되어 있음.

-src/: React프로젝트의 주요 위치 코드 디렉토리
  src/App.js : 메인 component로 필요한 sub component를 모아 관리, 출력을 위해 index.js로 전달
  src/App.css : App.js에 적용되는 스타일 정의
    src/index.js : React 앱의 진입 접으로 최종 렌더링이 되는 곳
  src/index.css : 전역 스타일 정의하는 스타일 파일
-
+ #### 의존성 관리와 package.json
  -package.json은 패키지의 의존성을 관리하는 파일
  -의존성이란, 하나의 소프트웨어가 다른 소프트웨어(라이브러리, 패키지, 모듈 등)에 의존하여 동작하는 관계
  -즉, 어떤 프로젝트에 사용된 각종 패키지 등의 버전을 동일하게 유지하기 위한 것

  -협업을 할 때 팀원들 각자 컴퓨터에 같은 패키지들을 설치해서 동일환 개발환경 구성해야 함. 
  -코드는 GitHub 등 Git Server를 이용하지만, node 패키지는 각 팀원들이 설치

  [의존성을 관리하는 이유]

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
