#  박건일 학번:202130115
## 2025-05-29(13주차)
### 5-2. 처음부터 React 앱 만들기
2. 스트리밍 서버 측 렌더링 (SSR)은 서버에서 페이지를 렌더링하고 완전히 렌더링된 페이지를 클라이언트로 전송합니다.
- SSR은 성능을 향상시킬 수 있지만, 단일 페이지 앱보다 설정 및 유지 관리가 더 복잡할 수 있습니다.
- 특히 스트리밍 기능이 추가되면 SSR은 설정 및 유지 관리가 매우 복잡해질 수 있습니다.
3. Vite의 SSR 가이드를 참조하세요.
- 정적 사이트 생성(SSG)은 빌드 시점에 앱의 모든 정적 HTML 파일을 생성합니다.
- SSG는 성능을 향상시킬 수 있지만, 서버 측 렌더링(SSR)보다 설정 및 유지 관리가 더 복잡할 수 있습니다.
- Vite의 SSG 가이드를 참조하세요.

4. React Server Components(RSC)를 사용하면 빌드 타임, 서버 전용, 인터랙티브 컴포넌트를 단일 React 트리에 포함할 수 있습니다.
- RSC는 성능을 향상시킬 수 있지만, 현재 설정 및 유지 관리에 대한 전문 지식이 필요합니다.
- Parcel의 RSC 예시를 참조하세요.

- 렌더링 전략은 라우터와 통합되어야 프레임워크로 빌드된 앱이 경로별로 렌더링 전략을 선택할 수 있습니다.
- 이를 통해 앱 전체를 다시 작성하지 않고도 다양한 렌더링 전략을 사용할 수 있습니다.
- 예를 들어, 앱의 랜딩 페이지는 정적으로 생성되는 SSG(정적 생성) 방식이 유리할 수 있지만, 콘텐츠 피드가 있는 페이지는 서버 측 렌더링이 가장 효과적일 수 있습니다.
- # 콘텐츠 피드란 사용자들이 자주 업데이트되는 콘텐츠를 쉽게 받아볼 수 있도록 제공되는 데이터 형식 또는 스트림을 의미합니다.
- # 소셜 미디어 웹사이트 앤 등 다양한 플랫폼에서 사용자들이 관심 있는 정보를 실시간으로 확인 하고 소통할 수 있도록 도와주는 역할을 합니다.
---
- 올바른 경로에 적합한 렌더링 전략을 사용하면
  - 콘텐츠의 첫 바이트를 로드하는 데 걸리는 시간(첫 번째 바이트까지의 시간),
  - 콘텐츠의 첫 번째 부분을 렌더링하는 데 걸리는 시간(첫 번째 콘텐츠 페인트),
  - 앱에서 가장 큰 표시 콘텐츠를 렌더링하는 데 걸리는 시간(가장 큰 콘텐츠 페인트)을 줄일 수 있습니다.
- 그리고 더 많은 것들.
- 지금까지 설명한 것은 새 앱을 처음부터 개발할 때 고려해야 할 기능의 몇 가지 예일 뿐입니다.
- 각 문제가 서로 밀접하게 연관되어 있고 익숙하지 않은 문제 영역에 대한 심층적인 전문 지식이 필요할 수 있으므로, 직면하게 될 많은 제약은 해결하기 어려울 수 있습니다.
- 이러한 문제를 스스로 해결하고 싶지 않다면, 이러한 기능을 제공하는 프레임워크를 바로 사용할 수 있습니다.
### 5-3. 기존 프로젝트에 React 추가
- 기존 프로젝트에 인터랙티브 기능을 추가하고 싶다면, React로 프로젝트를 다시 작성할 필요는 없습니다.
- #인터랙티브 기능이란 사용자와 시스템 간의 상호 작용을 가능하게 하는 기능을 말합니다.
- 기존 스택에 React를 추가하고 어디에서나 인터랙티브 React 컴포넌트를 렌더링하세요. 

[기존 웹사이트의 전체 하위 경로에 React 사용 ]
- Rails와 같은 다른 서버 기술로 구축 한 기존 웹 앱(example.com)이 있고, example.com/some-app/로 시작하는 모든 경로를 React로 완전히 구현하고 싶다고 가정해 보겠습니다.
- 설정 방법은 다음과 같습니다.
  1. React 기반 프레임워크 중 하나를 사용하여 앱의 React 부분을 빌드합니다.
  2. 프레임워크 설정에서 기본 경로를 /some-app로 지정합니다. (방법은 다음과 같습니다: Next.js, Gatsby)
  3. /some.app/ 하위의 모든 요청이 React 앱에서 처리되도록 서버나 프록시를 설정합니다.

- 이런 방법으로 앱의 React 부분에 해당 프레임워크에 포함된 모범 사례의 장점을 활용할 수 있습 니다.
- 많은 React 기반의 프레임워크는 풀스택이며, React 앱이 서버를 활용할 수 있도록 합니다.
- 그러나 서버에서 자바스크립트를 실행할 수 없거나, 실행하고 싶지 않은 경우에도 동일한 접근방 식을 사용할 수 있습니다. -> 이 경우에는 HTML/CSS/JS 내보내기를/some-app/에서 대신 제공하면 됩니다. (Next.js의 경우 next export output, Gatsby의 경우 기본값)

[기존 페이지의 일부분에 React 사용하기]

- 이미 다른 기술(Rails와 같은 서버 기술 또는 Backbone과 같은 클라이언트 기술)로 빌드된 기 존 페이지가 있고, 해당 페이지 일부에서 상호작용할 수 있는 React 컴포넌트를 렌더링하고 싶다고 가정하겠습니다.
- 이것은 React 컴포넌트를 통합하는 일반적인 방식입니다.
- 실제로 수년 동안 Meta에서 대부분의 React 사용을 이런 식으로 하였습니다. 이 방식은 두 가지 단계로 수행할 수 있습니다.
1. JSX 구문을 사용할 수 있게 자바스크립트 환경을 설정하고, import/export 구문을 통해 코드를 모듈로 분리한 다음, npm 패키지 레지스트리의 패키지(예시: React)를 사용하세요.
2. 해당 페이지에서 원하는 위치에 React 컴포넌트를 렌더링하세요.
- 정확한 접근 방식은 기존 페이지의 설정에 따라 다르기 때문에, 몇 가지 세부 사항을 함께 살펴 보겠습니다.
[1단계: 모듈 자바스크립트 환경 설정하기]

- 모듈 자바스크립트 환경은 모든 코드를 한 파일에 작성하는 것이 아닌, 각각의 React 컴포넌트를 개별 파일로 작성할 수 있게 합니다.
- 또한 (React 자체를 포함한) 다른 개발자들이 npm 레지스트리에 배포한 훌륭한 패키지들을 모두 사용할 수 있습니다.
- 이 작업을 수행하는 방법은 기존 설정에 따라 다릅니다.
1. 이미 애플리케이션이 import 문을 이용해 파일로 분리하고 있다면, 기존에 가지고 있는 설정을 이용해 보세요.
  - JS 코드에서<div />를 작성하면 문법 오류가 발생하는지 확인해 보세요.
  - 문법 오류가 발생한다면 Babel을 이용한 자바스크립트 코드 변환이 필요할 수 있으며, JSX를 사용하려면 Babel React 프리셋을 활성화해야 할 수도 있습니다.

2. 애플리케이션이 자바스크립트 모듈을 컴파일하기 위한 기존 설정이 없다면, Vite를 이용하여 설정하세요.
  - Vite 커뮤니티는 Rails, Django, Laravel을 포함한 다양한 백엔드 프레임워크와의 통합을 지원하고 있습니다.
  - 사용 중인 백엔드 프레임워크가 목록에 없다면 가이드를 참고하여 Vite 빌드를 백엔드와 수동으로 통합하세요.
  - 설정이 제대로 동작하는지 확인하려면 프로젝트 폴더에서 아래 명령어를 실행하세요. 
  ```npm install react react-dom```
- 그리고 메인 자바스크립트 파일의 최상단에 다음 코드라인을 추가하세요. index.js 혹은 main.js라는 파일일 수 있습니다.
- 페이지의 전체 내용이 "Hello, world!"로 바뀌었다면 모든 것이 정상적으로 동작하고 있는 겁니다! 계속해서 읽어보세요.
```
import { createRoot } from 'react-dom/client';

// 기존 HTML 컨텐츠를 지웁니다.
document.body.innerHTML = '<div id="app"></div>';
// 대신에 여러분이 작성한 React 컴포넌트를 렌더링합니다.
const root = createRoot(document.getElementById('app'));
root.render(<h1>Hello, world</h1>);
```
## 2025-05-22 (12주차)
### 프로젝트에 도입하기 (Installation)
- React는 점진적으로 적용할 수 있도록 설계되었으며, 필요한 만큼 React를 사용할 수 있습니다.
- React를 맛보기로 접해 보려고 하거나, 간단한 HTML 페이지에 약간의 상호작용을 추가하거나,
 복잡한 React 기반의 앱을 시작하고자 하는 경우, 이 섹션을 참고하세요.

- 이 장에서는

  - 새로운 React 프로젝트를 시작하는 방법
  - 기존 프로젝트에 React를 추가하는 방법 
  - 에디터를 설정하는 방법
  - React 개발자 도구를 설치하는 방법
### React 시도하기
- 단순히 React를 사용해 보고 싶다면, 아무것도 설치할 필요 없습니다.
- #local에서 사용해 보고 싶다면 Node.js만 설치하면 됩니다.
- 직접 편집하거나 오른쪽 상단의 "Fork(포크)" 버튼을 눌러 새 탭에서 열 수 있습니다.
- React 문서의 대부분 페이지에는 이와 같은 샌드박스가 있습니다.
- React 문서 외에도 CodeSandbox, StackBlitz, CodePen 등의 온라인 샌드박스에서 React를 지원합니다.
---
### 5-1. 새로운 React 앱 만들기
- React로 새로운 앱이나 웹사이트를 구축하려면 프레임워크부터 시작하는 것이 좋습니다. 
- 앱에 기존 프레임워크에서 잘 제공되지 않는 제약 조건이 있거나, 자체 프레임워크를 빌드하는 것을 선호하거나, React 앱의 기본 사항만 배우려는 경우 React 앱을 처음부터 빌드할 수 있습니다. 
- 풀스택 프레임워크 :
  - 권장 프레임워크는 프로덕션에서 앱을 배포하고 확장하는 데 필요한 모든 기능을 지원합니다.
  - 최신 React 기능을 통합하고 React의 아키텍처를 활용합니다.
     - 중요합니다! 풀스택 프레임워크에는 서버가 필요하지 않습니다. 이 페이지의 모든 프레임워크는 클라이언트 즉 렌더링(CSR), 단일 페이지 앱(SPA), 정적 사이트 생성(SSG)을 지 원합니다. 이러한 앱은 서버 없이 CDN 또는 점적호스팅 서비스에 배포할 수 있습니다. 또한 이러한 프레임워크를 사용하면 사용 사례에 적합한 경우 경로별로 서버 즉 렌더링을 추가할 수 있습니다. 이렇게 하면 클라이언트 전용 앱으로 시작할 수 있으며, 나중에 요구 사항이 변경되는 경우 앱을 다시 작성하지 않고도 개별 경로에서 서버 기능을 사용하도록 선택할 수 있습니다. 렌더링 전략을 구성하는 방법에 대한 프레임워크 설명서를 참조하세요.

#### Next.js (앱 라우터)

- Next.js의 앱 라우터는 React의 아키텍처를 최대한 활용하여 풀 스택 React 앱을 활성화하는 React 프레임워크입니다.
- Next.js는 Vercel에서 유지 관리합니다.
- Next.js 앱을 빌드해서 Node.js와 서버리스 호스팅 혹은 자체 서버에 배포할 수 있습니다.
- Next.js는 또한 서버가 필요 없는 정적 내보내기도 지원합니다.
- Vercel은 추가적으로 옵트-인 유료 클라우드 서비스도 지원합니다.
- Opt-in이란 사용자가 옵션을 직접 선택할 수 있도록 하는 서비스입니다. 
#### React Router (v7)
- React Router는 React에서 가장 인기있는 라우팅 라이브러리이며, Vite와 함께 사용하면 풀 스택 React 프레임워크를 만들 수 있습니다.
- 표준 Web API이며, 다양한 자바스크립트 런타임과 플랫폼을 위한 준비된 배포 템플릿이 있다고 강조합니다.
- React Router는 Shopify에서 유지 관리합니다.
#### Expo (네이티브 앱용)
- Expo는 네이티브 UI를 사용하여 안드로이드, iOS, 웹을 위한 범용 앱을 만들 수 있는 React 프레임워크입니다.
- 네이티브 부분을 쉽게 사용할 수 있게 해주는 React Native SDK를 제공합니다.
- Expo Expo (the company)에서 유지 관리합니다.
- Expo로 앱을 빌드하는 것은 무료이고, 구글이나 애플 스토어에 제한 없이 제출할 수 있습니다.
- Expo는 추가적으로 옵트-인 유료 클라우드 서비스를 제공합니다.

- * 풀스택 React 비전을 향해 나아가고 있는 또 다른 떠오르는 프레임워크가 있습니다.
- TanStack Start (Beta): TanStack Start는 TanStack Router를 기반으로 하는 풀스택 React 프레임워크입니다. Nitro나 Vite와 같이 전체 문서 SSR, 스트리밍, 서버 함수, 번들링과 많은 유용한 도구를 제공합니다.
- RedwoodJS: Redwood는 쉽게 풀스택 웹 애플리케이션을 만들 수 있도록 사전탑재된 패키지와 구성을 가진 풀스택 React 프레임워크입니다.

#### [처음부터 시작하기]- 기존 프레임워크를 사용하지 않고 ...
- 앱에 기존 프레임워크에서 잘 제공되지 않는 제약 조건이 있거나, 자체 프레임워크를 구축하는 것을 선호하거나,
 React 앱의 기본 사항을 배우려는 경우 React 프로젝트를 처음부터 시작하는 데 사용할 수 있는 다른 옵션이 있습니다.
- 처음부터 시작하면 더 많은 유연성을 얻을 수 있지만 라우팅, 데이터 가져오기 및 기타 일반적인 사용 패턴에 사용할 도구를 선택해야 합니다.
- 이미 존재하는 프레임워크를 사용하는 대신 자신만의 프레임워크를 구축하는 것과 비슷합니다. 저희가 권장하는 프레임워크에는 이러한 문제에 대한 기본 제공 솔루션이 있습니다.
- 자신만의 솔루션을 구축하려면, Vite, Parcel 또는 RSbuild와 같은 빌드 도구로 시작할 수 있 도록 하는 처음부터 React 앱 만들기 가이드를 참조하세요.

1. 앱에 기존 프레임워크가 질 시원하지 않는 제약 조건이 있거나,
2. 자체 프레임워크를 구축하는 것을 선호하거나,
3. React 앱의 기본을 배우고 싶은 경우 
[1단계: 빌드 도구 설치 ]
- 첫 번째 단계는 vite, parcel, 또는 rsbuild와 같은 빌드 도구를 설치하는 것입니다. 
- 이러한 빌드 도구는 다음과 같은 기능을 갖고 있습니다.
1. 소스 코드를 패키징하고, 실행하는 기능
2. 로컬 개발을 위한 개발 서버
3. 앱을 프로덕션 서버에 배포하는 빌드 명령을 제공합니다. 
- #React 공식 빌더는 Create React App (CRA) 
- #Package.json을 확인해 보면 빌더의 기능을 알 수 있습니다.
---
### 5-2. 처음부터 React 앱 만들기
[Vite]

- Vite는 현대 웹 프로젝트에 더 빠르고, 가벼운 개발 환경을 제공하는 것을 목표로 하는 빌드 도구입니다.
- Vite는 독창적이며, 기본적으로 합리적인 기본 기능을 제공합니다.
- Vite는 빠른 새로고침, JSX, Babel/SWC 및 기타 일반적인 기능을 지원하는 풍부한 플러그인 생태계를 갖추고 있습니다.
- Vite를 시작하려면 React 플러그인 또는 React SWC 플러그인 과 React SSR 예제 프로젝트를 참조하세요.
- Vite는 이미 우리가 추천하는 프레임워크 중 하나에서 빌드 도구로 사용하고 있습니다. React Router, Next.js 등

[Parcel]

- Parcel은 뛰어난 기본 개발 경험과 확장 가능한 아키텍처를 결합하여 프로젝트를 시작 단계에서 대규모 프로덕션 애플리케이션으로 발전시킬 수 있습니다.
- Parcel은 빠른 새로고침, JSX, Typescript, Flow 및 스타일링을 기본적으로 지원합니다. Parcel의 React 레시피를 참조하여 시작해 보세요.
[Rsbuild]
- Rsbuild는 React 애플리케이션 개발에 원활한 환경을 제공하는 Rspack 기반 빌드 도구입니다.
- 세심하게 조정된 기본 설정과 성능 최적화 기능을 바로 사용할 수 있도록 제공합니다.
- Rsbuild는 빠른 새로고침, JSX, Typescript, 스타일링 등 React 기능을 기본적으로 지원합니다.
- 시작하려면 Rsbuild의 React 가이드를 참조하세요.

[React Native용 Metro]
- React Native를 처음부터 사용하려면 React Native용 JavaScript 번들러인 Metro를 사용해야 합니다.
- Metro는 iOS 및 Android와 같은 플랫폼에 대한 번들링을 지원하지만, 여기 소개된 도구에 비해 기능이 부족한 편입니다.
- 프로젝트에 React Native 지원이 필요하지 않다면 Vite, Parcel 또는 Rsbuild로 시작하는 것이 좋습니다.

[2단계: 공통 애플리케이션 패턴 구축]
- 위에 나열된 빌드 도구는 클라이언트 전용 단일 페이지 앱(SPA)으로 시작하지만 라우팅, 데이터 가져오기, 스타일링과 같은 일반적인 기능에 대한 추가 솔루션은 포함하지 않습니다.
- React 생태계에는 이러한 문제를 해결하는 다양한 도구가 있습니다.
- 널리 사용되는 몇 가지 도구를 소개했지만, 더 나은 도구가 있다면 다른 도구를 선택해도 됩니다. 
[Routing]
- 라우팅은 사용자가 특정 URL을 방문할 때 표시할 콘텐츠나 페이지를 결정합니다.
- 앱의 여러 부분에 URL을 매핑하려면 라우터를 설정해야 합니다.
- 또한 중첩된 경로, 경로 매개변수, 쿼리 매개변수도 처리해야 합니다.
- 라우터는 코드 내에서 구성하거나 구성 요소 폴더 및 파일 구조에 따라 정의할 수 있습니다.
---
- 라우터는 최신 애플리케이션의 핵심 부분이며, 일반적으로
  - 데이터 페치: 더 빠른 로딩을 위해 전체 페이지에 대한 데이터를 미리 페치하는 것 포함
  - 코드 분할: 클라이언트 번들 크기를 최소화하기 위한 것
  - 페이지 렌더링 방식: 각 페이지가 생성되는 방식을 결정하기 위한 것
- 다음을 사용하는 것을 추천합니다.
  - React Router
  - Tanstack Router 
[Data Fetching] 데이터 미리 가져오기
- 서버나 다른 데이터 소스에서 데이터를 미리 가져오는 것으로 대부분의 애플리케이션에서 핵심적인 부분입니다.
- 이를 제대로 수행하려면 로딩 상태, 오류 상태, 그리고 가져온 데이터를 캐싱 등 복잡한 기능이 포함됩니다.
---
- 특별히 제작된 데이터 가져오기 라이브러리는 데이터를 가져오고 캐싱하는 어려운 작업을 대신 처리해 주므로,
   개발자는 앱에 필요한 데이터와 이를 표시하는 방법에 집중할 수 있습니다.
- 이러한 라이브러리는 일반적으로 컴포넌트에서 직접 사용되지만, 더 빠른 프리페칭과 더 나은 
  성능을 위해 라우팅 로더에 통합되거나 서버 렌더링에도 사용할 수 있습니다.
- 컴포넌트에서 직접 데이터를 가져오면 네트워크 요청 폭주로 인해 로딩 시간이 느려질 수 있으므로, 라우터 로더나 서버에서 데이터를 미리 가져오는 것이 좋습니다. 
-> 이렇게 하면 페이지가 표시될 때 페이지의 모든 데이터를 한 번에 가져올 수 있습니다.
- 대부분의 백엔드나 REST 스타일 API에서 데이터를 가져오는 경우 다음을 사용하는 것이 좋습니다.
  - React Query
  - SWR
  - RTK Query
---
- GraphQL API에서 데이터를 가져오는 경우 다음을 사용하는 것이 좋습니다.
  - Apollo
  - Relay 
[Code-splitting] 코드 분할
- 코드 분할은 앱을 필요에 따라 로드할 수 있는 작은 묶음으로 나누는 프로세스입니다.
- 앱의 코드 크기는 새로운 기능과 추가 종속성이 있을 때마다 증가합니다.
- 앱 전체의 코드를 전송해야 사용하기 때문에 앱 로드 속도가 느려질 수 있습니다.
- 캐싱, 기능/종속성 축소, 일부 코드를 서버에서 실행되도록 이동하면 로드 속도 저하를 완화하는데 도움이 되지만, 과도하게 사용하면 기능이 저하될 수 있는 불완전한 해결책입니다.
- 마찬가지로, 프레임워크를 사용하는 앱에 의존하여 코드를 분할하는 경우, 코드 분할이 전혀 발 생하지 않았을 때보다 로딩 속도가 느려지는 상황이 발생할 수 있습니다.
---
- 예를 들어, 차트를 지연 로딩하면 차트 렌더링에 필요한 코드 전송이 지연되어 차트 코드가 앱의 나머지 부분에서 분리됩니다.
- Parcel은 React.lazy를 사용하여 코드 분할을 지원합니다.
- 그러나 차트가 처음 렌더링된 후 데이터를 로드하면 두 번 대기하게 됩니다. -> 이것을 워터폴(waterfall) 현상이라고 합니다.
- 차트 데이터를 가져오는 것과 동시에 렌더링 코드를 전송하는 것이 아니라, 각 단계가 차례로 완 료될 때까지 기다려야 합니다.
- 번들링 및 데이터 페칭과 통합된 경로 별 코드 분할은
  - 앱의 초기 로드 시간과 앱에서 가장 큰 콘텐츠를 렌더링하는 데 걸리는 시간을 줄일 수 있습니다. (가장 큰 콘텐츠 페인트)
- 코드 분할 지침은 빌드 도구 문서를 참조하세요. Vite build optimizations / Parcel code splitting / Rsbuild code splitting
---
[애플리케이션 성능 개선]
- 선택한 빌드 도구는 단일 페이지 앱(SPA)만 지원하므로
  - 서버 사이드 렌더링 (SSR) # SSG와 유사하지만 매 요청 시 서버에서 정적 페이지 생성
  - 정적 사이트 생성(SSG) # 빌드 시 한 번에 모든 정적 페이지 생성
  - React 서버 컴포넌트(RSC) # 서버에서 동작하는 컴포넌트로 DB 접근 등이 가능 와 같은 다른 렌더링 패턴을 구현해야 합니다.

- 처음에는 이러한 기능이 필요하지 않더라도 나중에 SSR, SSG 또는 RSC에 도움이 될 수 있는 몇 가지 방법이 있을 수 있습니다.
1. 단일 페이지 앱(SPA)은 단일 HTML 페이지를 로드하고, 사용자가 앱과 상호작용할 때 페이지를 동적으로 업데이트합니다.
  - SPA는 시작하기는 쉽지만 초기 로드 시간이 느릴 수 있습니다.
  - SPA는 대부분의 빌드 도구에서 기본 아키텍처로 사용됩니다.
---
## 2025-05-15 (11주차)
### Step 3: 최소한의 데이터만 이용해서 완벽하게 UI State 표현하기
- 1. 제품의 원본 목록은 props로 전달되었기 때문에 state가 아닙니다.
- 2. 사용자가 입력한 검색어는 시간이 지남에 따라 변하고, 다른 요소로부터 계산될 수 없기 때문에 state로 볼 수 있습니다.
- 3. 체크박스의 값은 시간에 따라 바뀌고 다른 요소로부터 계산될 수 없기 때문에 state로 볼 수 있습니다.
- 4. 필터링된 제품 목록은 원본 제품 목록을 받아서 검색어와 체크박스의 값에 따라 계산할 수 있으므로, 이는 state가 아닙니다.
- 따라서, 검색어와 체크박스의 값 만이 state입니다.
- #공식 문서의 자세히 살펴보기를 통해서 Props와 State에 관해서 다시 한번 정리합니다.
### Props vs State
#### React는 props와 state라는 두 개의 데이터 “모델”이 존재합니다. 둘의 성격은 매우 다릅니다.

- Props는 함수를 통해 전달되는 인자 같은 성격을 가집니다.  props는 부모 컴포넌트로부터 자식 컴포넌트로 데이터를 넘겨서 외관을 커스터마이징하게 해줍니다. 
예를 들어, Form은 color라는 prop을 Button으로 보내서 Button을 내가 원하는 형태로 커스터마이징시킬 수 있습니다.
- State는 컴포넌트의 메모리 같은 성격을 가집니다. state는 컴포넌트가 몇몇 정보를 계속 따라갈 수 있게 해주고 변화하면서 상호작용(interaction)을 만들어 냅니다. 예를 들어, Button은 isHovered라는 state를 따라갈 것입니다.
- props와 state는 다르지만, 함께 동작합니다. state는 보통 부모 컴포넌트에 저장됩니다. ( 그래서 부모 컴포넌트는 그 state를 변경할 수 있습니다. ) 그리고 부모 컴포넌트는 state를 자식 컴포넌트에 props로서 전달합니다. 처음 봤을 때 둘의 차이를 잘 알기 어려워도 괜찮습니다. 약간 연습이 필요할 거예요!
---
### Step 4: State가 어디에 있어야 할 지 정하기
- 이제 앱에서 최소한으로 필요한 state를 결정했습니다.
- 다음으로는 어떤 컴포넌트가 이 state를 소유하고, 변경할 책임을 지게 할 지 정해야 합니다.
- React는 항상 컴포넌트 계층구조를 따라 부모에서 자식으로 데이터를 전달하는 단방향 데이터 흐름을 사용하는 것을 기억하세요!
- 앱을 구현하면서 어떤 컴포넌트가 state를 가져야 하는 지 바로 명확하지 않을 수 있습니다.
- 이 개념이 처음이라면 더 어려울 수 있습니다.
- 그러나 아래의 과정을 따라가면 해결할 수 있습니다.
- 애플리케이션의 각 state에 대해서,
- 1. 해당 state를 기반으로 렌더링하는 모든 컴포넌트를 찾으세요.
- 2. 그들의 가장 가까운 공통되는 부모 컴포넌트를 찾으세요. - 계층에서 모두를 포괄하는 상위 컴포넌트
- 3. state가 어디에 위치 돼야 하는지 결정합시다

- state가 어디에 위치되어야 하는지 결정하려면,
- 1. 대개, 공통 부모에 state를 그냥 두면 됩니다.
- 2. 혹은, 공통 부모 상위의 컴포넌트에 둬도 됩니다.
- 3. state를 소유할 적절한 컴포넌트를 찾지 못했다면, state를 소유하는 컴포넌트를 하나 만들어서 상위 계층에 추가하세요.
- 이전 단계에서, 이 애플리케이션의 두 가지 state인 “사용자의 검색어 입력과 체크박스의 값"을 발견하였습니다.
- 이 예시에서 두 가지 state 항상 함께 나타나기 때문에 같은 위치에 두는 것이 합리적입니다.

- 1. state를 쓰는 컴포넌트를 찾아봅시다.
  - ProductTable은 state에 기반한 상품 리스트를 필터링해야 합니다.
  (검색어와 체크 박스의 값)
  - SearchBar는 state를 표시해 주어야 합니다. (검색어와 체크 박스의 값)
- 2. 공통 부모를 찾아봅시다.
  - 둘 모두가 공유하는 첫 번째 부모는 FilterableProductTable입니다.
- 3. 어디에 state가 존재해야 할지 정해봅시다: 
  - 우리는 FilterableProductTable에 검색어와 체크 박스 값을 state로 둘 겁니다.
- 이제 state 값은 FilterableProductTable 안에 있습니다.
- useState() Hook을 이용해서 state를 컴포넌트에 추가하세요.
- Hooks는 React 기능에 "연결할 수(hook into)" 있게 해주는 특별한 함수입니다.

- 1. FilterableProductTable의 상단에 두 개의 state 변수를 추가해서 초기값을 명확하게 보여주세요.
- 2. 다음으로, filterText와 inStockOnly를 ProductTable와 SearchBar에게 props로 전달하세요.
```
<div>
  <SearchBar
    filterText={filterText}
    inStockOnly={inStockOnly} />
  <ProductTable
    products={products}
    filterText={filterText}
    inStockOnly={inStockOnly} />
</div>
```
- 이제 애플리케이션이 어떻게 동작하는지 알 수 있습니다.
- filterText의 초깃값을 useState('')에서 useState('fruit')로 수정해 보세요.
- 검색창과 데이터 테이블이 모두 업데이트됨을 확인할 수 있습니다.

- 3.ProductTable의 props를 추가해 줍니다. products, filterText, inStockOnly
- 4.ProductTable의 forEach문을 수정합니다.
- #첫 번째 코드와 비교해 보면서 어디가 수정되었는지 정확하게 수정해 줘야 합니다.
- 아직 폼을 수정하는 작업이 작동하지 안습니다. 문서의 샌드박스에서 콘솔 에러가 발생하고 그 이유를 설명하겠습니다.
- 완성된 코드를 보면, ProductTable와 SearchBar가 filterText와 inStockOnly props를 table, input과 체크 박스를 렌더링하기 위해서 읽고 있습니다.
- 예를 들면, SearchBar input의 value를 아래와 같이 채우고 있습니다.
- 그러나 아직 사용자의 키보드 입력과 같은 행동에 반응하는 코드는 작성하지 않았습니다. 이 과정을 마지막 단계에서 진행할 예정입니다.
---
### Step5: 역 데이터 흐름 추가하기
- 지금까지 우리는 계층 구조 아래로 흐르는 props와 state의 함수로써 앱을 만들었습니다.
- 이제 사용자 입력에 따라 state를 변경하려면 반대 방향의 데이터 흐름을 만들어야 합니다.
- 이를 위해서는 계층 구조의 하단에 있는 컴포넌트에서 FilterableProductTable의 state를 업데이트할 수 있어야 합니다.
- React는 데이터 흐름을 명시적으로 보이게 만들어 줍니다.
- 그러나 이는 전통적인 양방향 데이터 바인딩보다 조금 더 많은 타이핑이 필요합니다.
- 4단계의 예시에서 체크하거나 키보드를 타이핑할 경우 UI의 변화가 없고 입력을 무시하는 것을 확인할 수 있습니다.
- 이것은 의도적으로 로 코드를 쓰면서 value라는 prop이 항상 FilterableProductTable의 filterText라는 state를 통해서 데이터를 받도록 정했기 때문입니다.
- filterText라는 state가 변경되는 게 아니기 때문에 input의 value는 변하지 않고 화면도 바뀌는 게 없습니다.

- filterText라는 state가 변경되는 것이 아니기 때문에 input의 value는 변하지 않고 화면도 바뀌는 것이 없습니다.
- 우리는 사용자가 input을 변경할 때마다 사용자의 입력을 반영할 수 있도록 state를 업데이트하기를 원합니다.
- state는 FilterableProductTable이 가지고 있고 state 변경을 위해서는 setFilterText와 setInStockOnly를 호출을 하면 됩니다.
- SearchBar가 FilterableProductTable의 state를 업데이트할 수 있도록 하려면, 이 함수들을 SearchBar로 전달해야 합니다.
```
function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly} />
```

- SearchBar에서 onChange 이벤트 핸들러를 추가하여 부모 state를 변경할 수 있도록 구현할 수 있습니다.
```
function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange
}) {
  return (
    <form>
      <input
        type="text"
        value={filterText}
        placeholder="Search..."
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => onInStockOnlyChange(e.target.checked)}
```          
- App.css를 import하기
## 2025-05-08 (10주차)
### React로 사고하기
- React를 사용하게 되면 우리가 고려하고 있는 디자인이나 만들 앱들에 대한 생각을 바꿀 수 있습니다.
- React로 사용자 인터페이스를 빌드할 때, 먼저 이를 컴포넌트라는 조각으로 나눕니다.
- 그리고 각 컴포넌트의 다양한 시각적 상태들을 정의합니다.
- 마지막으로 컴포넌트들을 연결하여 데이터가 그 사이를 흘러가게 합니다.
- 이 자습서에서는 React로 검색할 수 있는 '상품 테이블을 만드는 과정을 체계적으로 안내해 드리 겠습니다.
  - React는 component 기반으로 개발 합니다. 이 번 장을 통해서 component의 조각 들이 어떻게 App으로 완성되는지 다시 한번 확인해보세요.
### Step 1: UI를 컴포넌트 계층으로 쪼개기
- 먼저 모의 시안에 있는 모든 컴포넌트와 하위 컴포넌트 주변에 박스를 그리고, 그들에게 이름을 붙이면서 시작해보세요.
- 디자이너와 함께 일한다면 그들이 이미 디자인 툴을 통하여 이 컴포넌트들에 이름을 정해 두었을 수도 있습니다. 
- 어떤 배경을 가지고 있냐에 따라, 디자인을 컴포넌트로 나누는 방법에 대한 관점이 달라질 수 있습니다.
- Programming : 새로운 함수나 객체를 만드는 방식과 같은 방법으로 해봅시다.
- 이 중 단일책임 원칙을 반영하고자 한다면 컴포넌트는 이상적으로는 한 번에 한 가지 일만 해야 합니다.
- 만약 컴포넌트가 점점 커진다면 작은 하위 컴포넌트로 쪼개져야 하겠죠.
- CSS: 클래스 선택자를 무엇으로 만들지 생각해 봅시다. (실제 컴포넌트들은 약간 좀 더 세분되어 있습니다.)
- Design : 디자인 계층을 어떤 식으로 구성할 지 생각해 봅시다.
---
- JSON이 잘 구조화 되어 있다면, 종종 이것이 UI의 컴포넌트 구조가 자연스럽게 데이터 모델에 대응된다는 것을 발견할 수 있습니다.
- 이는 UI와 데이터 모델은 보통 같은 정보 아키텍처, 즉 같은 구조를 가지기 때문입니다.
- UI를 컴포넌트로 분리하고, 각 컴포넌트가 데이터 모델에 매칭될 수 있도록 하세요.
- 여기 다섯 개의 컴포넌트가 있습니다.
  1. FilterableProductTable(회색): 예시 전체를 포괄합니다.
  2. SearchBar(파란색): 사용자의 입력을 받습니다.
  3. ProductTable(라벤더색): 데이터 리스트를 보여주고, 사용자의 입력을 기반으로 필터링합니다.
  4. ProductCategoryRow(초록색): 각 카테고리의 헤더를 보여줍니다.
  5. ProductRow(노란색): 각각의 제품에 해당하는 행을 보여줍니다.
---
- ProductTable을 보면 "Name"과 "Price" 레이블을 포함한 테이블 헤더 기능만을 가진 컴포넌트는 없습니다.
- 독립된 컴포넌트를 따로 생성할 지 생성하지 않을지는 당신의 선택입니다.
- 이 예시에서는 3.ProductTable에 있는 단순한 헤더들이 ProductTable의 일부이기 때문에 위 레이블들을 컴포넌트로 만들지 않고 그냥 남겨두었습니다.
- 그러나 이 헤더가 복잡해지면 (즉 정렬을 위한 기능을 추가하는 등) ProductTableHeader 컴포 넌트를 만드는 것이 더 합리적일 것입니다.
- 이제 모의 시안 내의 컴포넌트들을 확인했으니, 이들을 계층 구조로 정리해 봅시다.
- 모의 시안에서 한 컴포넌트 내에 있는 다른 컴포넌트는 계층 구조에서 자식으로 표현됩니다. 
---
### Step 2: React로 정적인 버전 구현하기
- (앱구현)가장 쉬운 접근 방법은 상호작용 기능은 아직 추가하지 않고, 데이터 모델로부터 UI를 렌더링하는 버전을 만드는 것입니다.
- 대체로 먼저 정적인 버전을 만들고 상호작용 기능을 추가하는 게 더 쉽습니다.
- 정적 버전을 만드는 것은 많은 타이핑이 필요하지만, 생각할 것은 적습니다.
- 반대로 상호작용 기능을 추가하는 것은 많은 생각이 필요하지만, 타이핑은 그리 많이 필요하지 않습니다.
- 데이터 모델을 렌더링하는 앱의 정적인 버전을 만들기 위해서는 다른 컴포넌트를 재사용하고, props를 이용하여 데이터를 넘겨주는 컴포넌트를 구현하는 것이 좋습니다.
- props는 부모가 자식에게 데이터를 넘겨줄 때 사용할 수 있는 방법입니다.
- 혹시 state 개념에 익숙하다고 해도 정적인 버전을 만드는 데는 state를 쓰지 마세요!
- state는 오직 상호작용을 위해, 즉 시간이 지남에 따라 데이터가 바뀌는 것에 사용합니다.
- 우리는 앱의 정적 버전을 만들고 있기 때문에 지금은 필요하지 않습니다.
- 앱을 만들 때 계층 구조에 따라 상층부에 있는 컴포넌트 즉, 1. FilterableProductTable부터 시작하는 하향식(top-down)으로 만드는 방법이 있습니다.
또는 하층부에 있는 컴포넌트인 5. ProductRow)부터 상향식(bottom-up)으로 만들 수도 있습니다.
- 간단한 예시에서는 보통 하향식으로 만드는 게 쉽지만, 프로젝트가 커지면 상향식으로 만들고 테스트를 작성하면서 개발하기가 더 쉽습니다.
- 공식 문서의 첫 번째 코드는 state를 사용하기 전 완성된 코드입니다. 천천히 component 하나씩 완성해 봅니다.
---
- 이 단계가 끝나면 데이터 렌더링을 위해 만들어진 재사용 가능한 component들의 라이브러리를 가지게 됩니다.
- 현재는 앱의 정적 버전이기 때문에 component는 단순히 JSC만 리턴합니다.
- 계층구조의 최상위 component(FilterableProductTable)는 prop으로 데이터 모델을 받습니다.
- 이는 데이터가 최상위 component부터 트리의 맨 아래까지 흘러가기 때문에 단방향 데이터 흐름이라고 부릅니다.
- 주의하세요! 여기까지는 아직 state값을 쓰지 마세요. 다음 단계에서 사용할 겁니다!
---
  1. Project를 새로 생성하거나, 초기 commit으로 switch하여 실행에 이상이 없는지 확인합니다.
  2. src/ 아래 필요 없는 파일을 제거합니다. (logo.svg / setupTest.js)
  3. App.js에 있는 코드를 모두 삭제합니다.
  4. 먼저 다음 코드로 App.js가 정상적으로 동작하는지 확인합니다.
  5. 사용할 데이터 PRODUCTS를 적당한 위치에 작성합니다. 여기에서는 제일 아래에 작성 하도록 하겠습니다.
  6. 다음으로 FilterableProductTable component를 만듭니다.
  7. SearchBar와 ProductTable component를 작성합니다.
  8. 다음으로 ProductCategoryRow와 ProductRow를 작성합니다.
  9. 마지막으로 처음에 수정한 App component를 다시 수정합니다.
  10. 공식 문서의 출력과 동일하게 출력하는지 확인합니다.
---
### Step 3: 최소한의 데이터만 이용해서 완벽하게 UI State 표현하기
- UI를 상호작용(interactive)하게 만들려면, 사용자가 기반 데이터 모델을 변경할 수 있게 해야 합니다.
- React는 state를 통해 기반 데이터 모델을 변경할 수 있게 합니다.
- state는 앱이 기억해야 하는, 변경할 수 있는 데이터의 최소 집합이라고 생각하세요. state를 구조화 하는데 가장 중요한 원칙은 중복배제원칙(Don't Repeat Yourself)입니다.
- 애플리케이션이 필요로 하는 가장 최소한의 state를 파악하고, 나머지 모든 것들은 필요에 따라 실시간으로 계산하세요.
- 예를 들어, 쇼핑 리스트를 만든다고 하면 당신은 배열에 상품 아이템들을 넣을 겁니다.
- UI에 상품 아이템의 개수를 노출하고 싶다면, 상품 아이템 개수를 따로 state 값으로 가지는 게 아니라 단순하게 배열의 길이만 쓰면 됩니다.
- 예시 애플리케이션 내 데이터들을 생각해 봅시다. 애플리케이션은 다음과 같은 데이터를 가지고 있습니다.
  1. 제품의 원본 목록
  2. 사용자가 입력한 검색어
  3. 체크박스의 값
  4. 필터링된 제품 목록
- 이 중 어떤 것이 state가 되어야 할까요? 아래의 세 가지 질문을 통해 결정할 수 있습니다.
  1. 시간이 지나도 변하지 않나요? 그러면 확실히 state가 아닙니다.
  2. 부모로부터 props를 통해 전달됩니까? 그러면 확실히 state가 아닙니다.
  3. 컴포넌트 안의 다른 state나 props를 가지고 계산 가능한가요? 그렇다면 절대로 state가 아닙니다!
- 이 외 남는 건 아마 state일 겁니다.
---
## 2025-04-18(보강)
### 한 번 더 state 끌어올리기
- 다음 플레이어와 플레이 기록을 추적하기 위해 Game 컴포넌트에 몇 개의 state를 추가하세요.
```
export default function Game() {
const [xIsNext, setxIsNext] - useState(true);
const [history, setHistory] - usestate([Array(9).fill(null)]);
```
- 현재 플레이에 대한 square을 렌더링하려면 history에서 마지막 squares의 배열을 읽어야 합니다.
- 렌더링 중에 계산할 수 있는 충분한 정보가 이미 있으므로 usestate는 필요하지 않습니다.
```
export default function Game() {
const [xIsNext, setXIsNext]-useState(true);
const [history, setHistory]-usestate([Array(1).fill(null)]);
const currentsquares - history[history.length - 1];
// ...
```
- 다음으로 Game 컴포넌트 안의 Board 컴포넌트가 게임을 업데이트할 때 호출할 handlePlay 함수를 만드세요.
- xIsNext, currentSquares, handlePlay 를 Board 컴포넌트에 | props로 전달하세요.
```
 function handlePlay (nextSquares) {
    // TODO
  }
  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        // ...
  )
```
---
- Board 컴포넌트가 props에 의해 완전히 제어되도록 만들겠습니다.
- Board 컴포넌트가 xIsNext, squares, onPlay 함수를 props로 받을 수 있도록 변경합니다. - onPlay는 Board가 - 업데이트된 squares를 배열로 호출할 수 있는 새로운 함수입니다.
- 다음으로 Board 함수에서 useState를 호출하는 처음 두 줄을 제거하세요.
```
function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    //...
  }
  // ...
}
```
- 이제 Board 컴포넌트의 handleClick에 있는 setSquares 및 setXIsNext 호출을 새로운 onPlay 함수에 대한 단일   호출로 대체함으로써 사용자가 사각형을 클릭할 때 Game 컴포넌트가 Board를 업데이트할 수 있습니다.
```
 if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
```
- Board 컴포넌트는 Game 컴포넌트가 전달한 props에 의해 완전히 제어됩니다.
- 게임이 다시 작동하게 하려면 Game 컴포넌트에서 handlePlay 함수를 구현해야 합니다.
- handlePlay가 호출되면 무엇을 해야 할까요?
-  이전의 Board는 업데이트된 setSquares를 호출했지만, 이제는 업데이트된 squares 배열을 onPlay로 전달한다는 걸 기억하세요.
- handlePlay 함수는 리렌더링을 트리거하기 위해 Game의 state를 업데이트해야 하지만, 더 이상 호출할 수 있는 setSquares 함수가 없습니다.
- 대신 이 정보를 저장하기 위해 history state 변수를 사용하고 있습니다.
업데이트된 squares 배열을 새 히스토리 항목으로 추가하여 history를 업데이트해야 하고, Board에서 했던 것처럼 xIsNext 값을 반전시켜야 합니다.
```
export default function Game() {
  //...
  function handlePlay(nextSquares) {
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  }
  //...
}
```
### 화면 한 줄로 깨져서 보이는 이유
- 화면이 다음과 같이 한 줄로 깨져서 보이는 경우가 있습니다.
- React Fragment(>...</>)로 감싸거나, 만 남겨 주세요.
- React Fragment를 사용하면 구조도 깔끔하고, 유지 보수도 편합니다.
- 우리가 사용하는 튜토리얼에서는 버튼들을 float 스타일로 정렬하고 있습니다.
- (<div>)지우기
### 과거 움직임 보여주기
- JavaScript에서 한 배열을 다른 배열로 변환하려면 배열 map 메서드를 사용하면 됩니다.
1. 플레이 history 배열을 화면의 버튼을 나타내는 React 엘리먼트로 변환합니다.
2. 과거의 플레이로 "점프할 수 있는 버튼 목록을 표시하세요.
3. 이 것을 구현하기 위해서 Game 컴포넌트에서 history를 map을 이용해보겠습니다.
```
 function jumpTo(nextMove) {
    // TODO
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

   return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
```
```
export default function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];

  function handlePlay(nextSquares) {
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  }

  function jumpTo(nextMove) {
    // TODO
  }
}
```
- 경고: 배열 또는 반목자의 각 자식 요소는 고유한 "key" 속성을 가져야 합니다. 'Game'의 렌더 메서드를 확인하세요.
---
### map함수의 사용
1. history.map: history는 모든 플레이를 저장하는 배열입니다. 이 history에 map 함수를 적용 한다는 의미 입니다.
2. map 함수는 history 각각의 요소 index를 순회하면서 squares 추출합니다.
3. 각 요소는 { }안의 실행문을 실행하면서 버튼을 생성합니다.
4. 이렇게 생성된 버튼은 moves 객체(배열)에 다시 저장됩니다.
5. move는 최종 rendering에 사용됩니다.
- 원본 배열 (history): map이 호출된 원본 배열.
- 원본 배열의 인덱스 (move): 현재 순환 중인 원본 배열 요소의 인덱스.
- 요소 값 (squares): 현재 순회 중인 요소 배열의 값.
- 각각의 history 요소에 대한 { }의 실행문(후작업) 실행합니다.
- moves 객체에 저장합니다.
- 최종 출력에 사용합니다.
---
### key 선택하기
- 리스트를 렌더링할 때 react는 렌더링 된 각 리스트 항목에 대한 몇가지 정보 제공
- 리스트를 업데이트할 때 React는 무엇이 변경되었는지 확인해야 합니다.
- 리스트의 항목은 추가, 제거, 재정렬 또는 업데이트될 수 있습니다.
- 리스트의 항목에 key 프로퍼티를 지정하여 각 리스트의 항목이 다른 항목과 다르다는 것을 구별해 주어야 합니다.

- 만약 데이터베이스에서 데이터를 불러와서 사용한다면 Alexa, Ben, Claudia의 데이터베이스 ID 를 key로 사용할 수 있습니다.
- 리스트가 다시 렌더링 되면 React는 각 리스트 항목의 key를 가져와서 이전 리스트의 항목에서 일치하는 key를 탐색합니다.
- 현재 리스트에서 이전에 존재하지 않았던 key가 있으면 React는 컴포넌트를 생성합니다.
- 만약 현재 리스트에 이전 리스트에 존재했던 key를 가지고 있지 않다면 React는 그 key를 가진 컴포넌트를 제거합니다.
- 두 key가 일치한다면 해당 컴포넌트는 이동합니다.
- key는 각 React가 각 컴포넌트를 구별할 수 있도록 하여, 컴포넌트가 다시 렌더링 될 때 React 가 해당 컴포넌트의 state를 유지할 수 있게 합니다.
- 컴포넌트의 key가 변하면 컴포넌트는 제거되고 새로운 state와 함께 다시 생성됩니다.
---
- key는 React에서 특별하게 미리 지정된 프로퍼티입니다.
- 엘리먼트가 생성되면 React는 key 프로퍼티를 추출하여 반환되는 엘리먼트에 직접 key를 저장합니다.
- key가 props로 전달되는 것처럼 보일 수 있지만, React는 자동으로 key를 사용해 업데이트할 컴포넌트를 결정합니다.
- 부모가 지정한 key가 무엇인지 컴포넌트는 알 수 없습니다.
- 동적인 리스트를 만들 때마다 적절한 key를 할당하는 것을 강력하게 추천합니다.
- 적절한 key가 없는 경우 데이터의 재구성을 고려해 보세요.
- key가 지정되지 않은 경우, React는 경고를 표시하며 배열의 인덱스를 기본 key로 사용합니다.
- 배열 인덱스를 key로 사용하면 리스트 항목의 순서를 바꾸거나 항목을 추가/제거할 때 문제가 발생합니다.
- 명시적으로 key={i}를 전달하면 경고는 사라지지만 배열의 인덱스를 사용할 때와 같은 문제가 발생하므로 대부분은 추천하지 않습니다.
- key는 전역적으로 고유할 필요는 없으며, 컴포넌트와 해당 컴포너늩의 형제 컴포넌트 사이에서만 고유하면 됩니다.
---
### 시간여행 구현하기 -1
- 틱택토 게임의 기록에서 과거의 각 플레이에는 해당 플레이의 일련번호인 고유 ID가 있습니다.
- 플레이는 중간에 순서를 바꾸거나 삭제하거나 삽입할 수 없기 때문에 플레이 인덱스를 key로 사 용하는 것이 안전합니다.
1. Game 함수에서 <li_key={move}>로 key를 추가할 수 있으며, 렌더링 된 게임을 다시 로드하면 React의 "key" 에러가 사라질 것입니다.
```
const moves = history.map((squares, move) => {
  //...
  return (
    <li key={move}>
      <button onClick={() => jumpTo(move)}>{description}</button>
    </li>
  );
});
```
---
- jumpTo를 구현하기 전에 사용자가 현재 어떤 단계를 보고 있는지를 추적할 수 있는 Game 컴포넌트의 state가 하나 더 필요합니다.
1. 이를 위해 초기값이 0인 currentMove 라는 새 state 변수를 정의하세요.
```
export default function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[history.length - 1];
  //...
}
```
2. 다음으로 Game 내부의 jumpTo 함수를 수정해서, 해당 currentMove를 업데이트하세요.
3. 또한 currentMove를 변경하는 숫자가 짝수면 xIsNext를 true로 설정하세요.
```
export default function Game() {
  // ...
  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
    setXIsNext(nextMove % 2 === 0);
  }
  //...
}
```
- 여기까지만 하면 내부적으로는 동작하지만 렌더링은 안되는 상태입니다.
---
### 시간여행 구현하기 -2
6. 마지막으로 항상 마지막 동작을 렌더링하는 대신 현재 선택한 동작을 렌더링하도록 Game 컴포넌트를 수정하겠습니다.
```
export default function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];

  // ...
}
```
- 게임 히스토리의 특정 단계를 클릭하면 틱택토 보드가 즉시 업데이트되어 해당 단계가 발생한 시점의 보드 모양이 표시됩니다.

### 최종 정리
- 코드를 자세히 살펴보면 currentMove가 짝수일 때는 xIsNext === true가 되고,
   currentMove가 홀수일 때는 xIsNext === false가 되는 것을 알 수 있습니다.
- 즉, currentMove의 값을 알고 있다면 언제나 xIsNext가 무엇인지 알아낼 수 있습니다.
- 따라서 이 두 가지 state를 모두 저장할 이유가 없습니다.
- 항상 중복되는 state는 피하세요.
- state에 저장하는 것을 단순화하면 버그를 줄이고 코드를 더 쉽게 이해할 수 있습니다.
- Game을 변경하여 더 이상 xIsNext를 별도의 state 변수로 저장하지 않고 currentMove를 기반으로 알아내도록 수정하겠습니다.
- 더 이상 xIsNext state 선언이나 setXIsNext 호출이 필요하지 않습니다.
- 이제 컴포넌트를 코딩하는 동안 실수를 하더라도 xIsNext가 currentMove와 동기화되지 않을 가능성이 없습니다.
```
export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }
  // ...
}
```
---
## 2025-04-17 7주차
### state끌어올리기(6주차 이어서)
- handleClick 함수는 JavaScript의 slice() 배열 메서드를 사용하여 squares 배열의 사본인 nextSquares를 생성합니다. (참고 : developer.mozilla.org)
- 그 다음 handleClick 함수는 nextSquares 배열의 첫 번째 Squares(index [0])에 X를 추가하여 업데이트합니다.
- setSquares 함수를 호출하면 React는 컴포넌트의 state가 변경되었음을 알 수 있습니다.
- 그러면 squares의 state를 사용하는 컴포넌트(Board)와 그 하위 컴포넌트(보드를 구성하는 Square 컴포넌트)가 다시 렌더링 됩니다.
- 중요 합니다! : #이 설명은 문서의 코드 중 Board가 Square를 포함하고 있음을 전재.
- JavaScript는 클로저를 지원하기 때문에 내부 함수가(예: handleClick) 외부 함수(예: Board) 에 정의된 변수 및 함수에 접근할 수 있습니다.
- handleClick 함수는 squares의 state를 읽고 setSquares 메서드를 호출할 수 있는데, 이 두 함수는 Board 함수 내부에 정의되어 있기 때문입니다.
### Closure의 개념
- 클로저의 핵심은 스코프를 이용하여 변수의 접근 범위를 '폐쇄'하는 것에 있습니다.
- 외부 함수 스코프에서 내부 함수 스코프로 접근이 불가능합니다.
- 내부 함수에서는 외부 함수 스코프에서 선언된 변수에 접근이 가능합니다.
- 장점
1. 전역변수 사용의 최소화
2. 데이터 보존 가능 (폐쇄성)
3. 모듈화를 통한 코드 재사용에 편리
4. 정보의 접근 제한 (캡슐화)
### state 끌어올리기
```
export default function Board() {
  const (squares, setsquares) usestate(Array()).fill(null));
  function handleClick(1) {
    const nextsquares - squares.slice();
    nextSquares[1] = "x";
    setsquares (nextsquares);
  }
  return (
    // ...
  )
}
```
- 9. handleClick 함수에 업데이트할 Square의 index를 나타내는 인수 i를 추가하세요.
```
<Square value-(squares[0]} onsquareClick"(handleClick(1)} />
```
- 다음으로 인수 is handleClick에 전달해야 합니다.
- Square의 onSquareClick prop를 아래와 같이 JSX에서 직접 handleClick(0)으로 설정할 수도 있지만, 이 방법은 작동하지 않습니다.
- 그 이유는 다음과 같습니다.
- handleClick(0) 호출은 Board 컴포넌트 렌더링의 일부가 됩니다.
- handleClick(0)은 setSquares를 호출하여, Board 컴포넌트의 state를 변경하기 때문에 Board 컴포넌트 전체가 다시 렌더링 됩니다.
- 하지만 이 과정에서 handleClick(0)은 다시 실행되기 때문에 무한 루프에 빠지게 됩니다.
---
- 10. 대신 이렇게 해보겠습니다.
대신 이렇게 해보겠습니다.
```
export default function Board() { 
  // ...
  return (
  <>
    <div className="board-row">
      <square value(squares[0]} onsquareclick"(()> handleClick(0)}/>
      // ...
  );
}
```
- 새로운 문법()>에 주목하세요.
- 여기서 () handleClick(0)은 화살표 함수로, 함수를 짧게 정의하는 방법입니다.
- Square가 클릭 되면 => "화살표" 뒤의 코드가 실행되어 handleClick(0)을 호출합니다.
- handleClick(0) 함수를 화살표 함수가 호출하고, 화살표 함수를 Square에 전달하는 것입니다.
11. 이제 전달한 화살표 함수에서 handleClick을 호출하도록 나머지 8개의 Square 컴포넌트를 수정해야 합니다.
```
<Square value={squares[0]} onSquareClick={() => handleClick(0)} />
''
```
-이제 Board가 모든 state를 관리하므로 부모 Board 컴포넌트는 자식 Square 컴포넌트가 올바르 게 표시될 수 있도록 props를 전달합니다.
- Square를 클릭하면 자식 Square 컴포넌트가 부모 Board 컴포넌트에 Board의 state를 업데이트하도록 요청합니다.
- Board의 state가 변경되면 Board 컴포넌트와 모든 자식 Square 컴포넌트가 자동으로 다시 렌더링 됩니다.
- Board 컴포넌트에 속한 모든 Square의 state를 유지하면 나중에 승자를 결정할 수 있습니다.
---
- 사용자가 Board의 왼쪽 위 사각형을 클릭하여 X를 추가하면 어떤 일이 발생하는지 다시 한번 정리해 보겠습니다.
- 왼쪽 위 사각형을 클릭하면 button이 Square로부터 onClick prop으로 받은 함수가 실행됩니다.
- Square 컴포넌트는 Board에서 해당 함수를 onSquareclick props로 받았습니다.
- Board 컴포넌트는 JSX에서 해당 함수를 직접 정의했습니다.
- 이 함수는 0을 인수로 handleClick을 호출합니다.
- handleClick은 인수 0을 사용하여 squares 배열의 첫 번째 엘리먼트를 null에서 X로 업데이트 합니다.
- Board 컴포넌트의 squares state가 업데이트되어 Board와 그 모든 자식이 다시 렌더링 됩니 다.
- 이에 따라 인덱스가 0인 Square 컴포넌트의 value prop이 null에서 X로 변경됩니다.
- 최종적으로 사용자는 왼쪽 위 사각형을 클릭한 후 비어 있는 사각형이 X로 변경된 것을 확인할 수 있습니다.
---
- !중요합니다!
- DOM 엘리먼트의 onClick 어트리뷰트(속성)는 빌트인 컴포넌트이기 때문에 React에서 특별한 의미를 갖습니다.
- 사용자 정의 컴포넌트, 예를 들어 Square의 경우 이름은 사용자가 원하는 대로 지을 수 있습니다.
- Square의 onSquareclick prop나 Board의 handleClick 함수에 어떠한 이름을 붙여도 코드는 동일하게 작동합니다.
- React에서는 주로 이벤트를 나타내는 prop에는 onSomething과 같은 이름을 사용하고, 이벤트를 처리하는 함수를 정의 할 때는 handleSomething과 같은 이름을 사용합니다.
### 불변성이 왜 중요할까요
- 최종 결과는 같지만, 원본 데이터를 직접 변형하지 않음으로써 몇 가지 이점을 얻을 수 있습니다.
1. 불변성을 사용하면 복잡한 기능을 훨씬 쉽게 구현할 수 있습니다.
- 우리는 이 자습서의 뒷부분에서 게임의 진행 과정을 검토하고 과거 움직임으로 "돌아가기"를 할 수 있는 "시간 여행" 기능을 구현할 예정입니다.
- 특정 작업을 실행 취소하고 다시 실행하는 기능은 이 게임에만 국한된 것이 아닌 앱의 일반적인 요구사항입니다.
- 직접적인 데이터 변경을 피하면 이전 버전의 데이터를 그대로 유지하여 나중에 재사용(또는 초기화)할 수 있습니다.
- 불변성을 사용하는 것의 또 다른 장점이 있습니다.
- 기본적으로 부모 컴포넌트의 state가 변경되면 모든 자식 컴포넌트가 자동으로 다시 렌더링 됩니다.
- 여기에는 변경 사항이 없는 자식 컴포넌트도 포함됩니다.
- 리렌더링 자체가 사용자에게 보이는 것은 아니지만, 성능상의 이유로 트리의 영향을 받지 않는 부분의 리렌더링을 피하는 것이 좋습니다.
- 불변성을 사용하면 컴포넌트가 데이터의 변경 여부를 저렴한 비용으로 판단할 수 있습니다.
- memo API 참고서에서 React가 컴포넌트를 다시 렌더링할 시점을 선택하는 방법에 대해 살펴볼 수 있습니다.
---
### 교대로 두기
```
export default function Board() { 
  const [xIsNext, setXIsNext]useState(true);
  const (squares, setsquares)-usestate(Array(9).fill(null));
  function handleClick(1) 
    const nextsquares-squares.slice(); 
    if (xisNext) {
      nextSquares[1] "x";
    } else {
      nextSquares[1] "0";
    }
    setSquares (nextSquares);
    setxisNext(IxIsNext);
    return (
      // ...
  );
}
```
- X와 O 번갈아가면서 표시 수정
- 같은 사각형 여러번 클릭 시 문제 발생  
```
function handleClick {
  if (squares[1]) {
    return;
  }
  const nextsquares-squares.slice();
  // ...
}
```
- 이제 빈 사각형에 X 또는 0만 추가할 수 있습니다!
### return의 의미
- 작성한 코드에는 return 값이 없습니다.
- JavaScript에서 return 값이 없는 return;은 함수를 즉시 종료하라는 의미입니다.
- 이때 값을 반환하지 않으면 자동으로 undefined를 반환합니다. = squares[i]가 이미 값이 있다면(누군가 이미 둔 곳이라면), 그 자리에 다시 둘 수 없으니 아무일도 하지 말고 함수를 끝내는 것입니다.
---
### 승자 결정하기
```
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
```
- 승리할 수 있는 경우 2차원 배원 선언, line과 squares 비교 위한 for문 작성, 비교 위해 구조 분해 할당
### 구조 분해 할당
- lines는 승리 할 수 있는 squares의 index 번호입니다.
- for문을 통해 lines의 길이 만큼 비교를 반복합니다.
- 구조 분해 할당을 통해 lines의 index를 a, b, c에 보관합니다.
- squares의 해당 index 값을 비교하여 3개가 모두 일치하면 값이 X인지 0인지를 return합니다.
- 일치하는 것이 없으면 null을 return합니다. 
### 승자 결정하기
```
function handleClick(1) {
  if (squares[1] || calculatewinner(squares)) { 
    return;
  }
  const nextsquares-squares.slice();
  // ...
}
```
- Board 컴포넌트의 handleClick 함수에서 calculateWinner(squares)를 호출하여 플레이어가 이겼는지 확인하세요.
- 이 검사는 사용자가 이미 X 또는 0가 있는 사각형을 클릭했는지를 확인하는 것과 동시에 수행할 수 있습니다.
- 두 경우 모두 함수를 조기 반환하겠습니다. 함수를 즉시 종료한다는 의미 입니다.
- 여기까지 작성하면 경기는 정상적으로 진행되지만, 경기 종료 알림 표시가 나오지 않습니다.
---
- 게임이 끝났을 때 플레이어에게 알리기 위해 "Winner: X" 또는 Winner: "라고 표시하겠습니다.
- 이렇게 하려면 Board 컴포넌트에 status 구역을 추가하면 됩니다.
- 게임이 끝나면 status는 승자를 표시하고, 게임이 진행 중인 경우 다음 플레이어의 차례를 표시합니다.
```
export default function Board() {
  // ...
  const winner calculatewinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "0");
  }

  return (
    <>
    <div className="status">{status}</div>
    <div className="board-row">
    //...
  )
}
```
### 한번 더 state 끌어올리기

- 이제 과거 플레이 목록을 표시하기 위해 새로운 최상의 컴포넌트 Game을 작성.
- 여기에 전체 게임 기록을 포함하는 history state를 배치.
- history state를 Game 컴포넌트에 배치하면 자식 Board 컴포넌트에서 squares state를 제거할 수 있음.
- Square 컴포넌트에서 Board 컴포넌트로 state를 "끌어올렸던" 것처럼, 이제 Board 컴포넌트에서 최상의 Game 컴포넌트로 state를 끌어올릴 수 있음.
- 이렇게 하면 Game 컴포넌트가 Board 컴포넌트의 데이터를 완전히 제거하고 Board의 history에서 이전 순서를 렌더링하도록 지시할 수 있음.
### 한번 더 state 끌어올리기
- !Board 컴포넌트를 Game 컴포넌트로 변경
1. 먼저 export default가 있는 Game 컴포넌트를 추가하세요.
2. 마크업 안에 Board 컴포넌트를 렌더링하도록 하세요.
3. export default 컴포넌트는 하나의 컴포넌트 파일 안에 하나만 존재해야 하므로 Board에서는 삭제합니다.
4. 이것은 index.js 파일에서 Board 컴포넌트 대신 Game 컴포넌트를 최상위 컴포넌트로 사용하도록 지시합니다.
5. Game 컴포넌트가 반환하는 내용에 추가한 div는 나중에 보드에 추가할 게임 정보를 위한 공간을 확보합니다.
▲ 주의
#우리는 index가 아니고 App에서 불러오고 있습니다.
#최상위 컴포넌트이기 때문에 최상위에 선언합니다.
#최상위 컴포넌트와 파일이름은 일치 시키는 것이 좋습니다.
```
function Board() {
  // ...
}
export default function Game() { 
  return (
    <div className="game">
      <div className="game-board"> 
        <Board/>
      </div>
      <div className="game-info"> 
        <ol>{/*TODO*/}</ol>
      </div>
    </div>
  );
}
```
---
## 2025-04-10 6주차
### 틱택토 만들기
#### props를 통해 데이터 전달하기

- React의 component architecture를 사용해서 재사용할 수 있는 component를 만들어서 지저분하고 중복된 코드를 삭제
- Board component를 만들고, Square component의 내용을 복사
- Square component의 button을 하나만 남기고 모두 삭제
- Board component의 button을 Square component로 교체
- App에서 호출하는 component를 Square에서 Board로 바꿔줌.

- 여기까지 하면 component는 깔끔하게 정리 됐지만, 숫자 출력이 1만 나오게 됨.
- 이 문제를 해결하기 위해 props를 사용하여 각 사각형이 가져야 할 값을 부모 component (Board)에서 자식 component(Square)로 전달하겠습니다.
- component를 호출하는 쪽이 부모 component입니다.

- Square component value prop을 전달 받을 수 있도록 수정합니다.
```
function Square() {
  return <button className="square">1</button>;
}
```
- 이렇게 수정한다고 해서 변하는 것은 없습니다. 왜냐하면 return 값은 1이 전달되기 때문입니다.
- 문서처럼 value를 문자열로 1과 교체해도 마찬가지 입니다.
- 문자열 "value"가 아닌 JavaScript 변수가 렌더링 되어야 합니다.
- JSX에서 "JavaScript로 탈출" 하려면, 중괄호가 필요합니다. JSX에서 value 주위에 중 괄호를 추가합니다.
```
function Square({ value }) {
  return <button className="square">{value}</button>;
}
```
- 하지만 Board로 부터 value prop이 전달되지 않았기 때문에 않아 아무 것도 표시되지 않습니다.
---
#### 사용자와 상호작용하는 컴포넌트 만들기
* 한글 문서에서 "사각형"이라고 번역된 것은 모두 Square 컴포넌트를 의미합니다.

- Square 컴포넌트를 클릭하면 X로 채워지게 코드를 수정해 보겠습니다.

- 먼저 Square 내부에 handleClick 함수를 선언하세요.
- 다음 Square 컴포넌트에서 반환되는 JSX 버튼의 props에 onClick을 추가하세요.
- 이제 사각형을 클릭하면, 브라우저의 console 탭에 "clicked!" 라는 로그가 표시됩니다.
- 사각형을 한 번 더 클릭하면 "clicked!" 라는 로그가 다시 생성됩니다.
- 같은 메시지가 포함된 콘솔 로그를 반복해도 콘솔에 더 많은 줄이 생기지 않습니다.
- 대신 첫 번째 "clicked!" 로그 옆의 숫자가 증가하는 것을 볼 수 있습니다.

- 다음으로 사각형 컴포넌트가 클릭 된 것을 "기억"하고 "X" 표시로 채워보겠습니다.
- 컴포넌트는 무언가 "기억"하기 위해 state를 사용합니다.
- React는 상태 기억을 위해 useState라는 Hook을 제공합니다.
- Square의 현재 값을 state에 저장하고 Square가 클릭하면 값이 변경되도록 하겠습니다.
- 1. 파일 상단에서 useState import합니다.
- 2. Square 컴포넌트에서 value prop을 제거합니다. 대신 useState를 사용합니다.
- 3. Square 컴포넌트의 시작 부분에 usestate를 호출하고, value라는 이름의 state 변수를 반환하도록 하세요. 

- value는 값을 저장하는 변수, setValue는 값을 변경하는 데 사용하는 함수입니다.
- useState에 전달된 null은 이 state 변수의 초기값으로 현재 value는 null이라는 의미 입니다.
- 앞에서 Square 컴포넌트는 더 이상 props를 사용하지 않게 수정 하였습니다.
- 4. 따라서 Board 컴포넌트가 생성한 9개의 Square 컴포넌트에서도 value prop를 제거합니다.

- 이제 Square가 클릭 되었을 때 "X"를 표시하도록 변경하겠습니다.
- console.log("clicked!"); 이벤트 핸들러를 setValue('x');로 변경하세요. 
- onclick 핸들러에서 set 함수를 호출해서 이 클릭 될 때마다 Square를 다시 렌더링하도록 했습니다.
- 업데이트 후 Square의 value는 'X'가 되므로, 앞으로 Board에서 "X"를 볼 수 있습니다.
- Square를 클릭하면 "X"가 표시됩니다. 

- 각 Square에는 고유한 state가 있습니다.
- 각각의 Square에 저장된 value는 다른 Square과 완전히 독립적입니다.
- 컴포넌트에서 set 함수를 호출하면 React는 그 안에 있는 자식 컴포넌트도 자동으로 업데이트합니다.
---
#### React Developer Tools
- React 개발자 도구를 사용하면 React 컴포넌트의 props와 state를 확인할 수 있습니다.
- CodeSandBox의 브라우저 구역 하단에서 React 개발자 도구 탭을 찾을 수 있습니다.
- React 개발자 도구는 Chrome, Firefox, 그리고 Edge 브라우저의 확장 프로그램으로 사용할 수 있습니다.
- #chrome 웹 스토어에서 React Developer Tools을 설치 합니다. 

- #개발자 도구에서 component를 열면 프로젝트 관련 정보를 얻을 수 있습니다.
- #이제 Square를 클릭했을 때 value값이, 즉 상태가 변하는지 확인해 보겠습니다. 
---
#### 게임 완료하기.
- 이제 틱택토 게임을 위한 기본적인 구성 요소는 모두 갖추었습니다.
- 게임을 완성하기 위해서는 Board에 "X"와 "0"를 번갈아 배치해야 하며, 승자를 결정할 방법이 필요합니다.
#### state 끌어올리기
- 현재 각 Square 컴포넌트는 게임 state의 일부를 기억합니다.
- 틱택토 게임에서 승자를 확인하려면 Board가 9개의 Square 컴포넌트 각각의 state를 기억하고 있어야 합니다.

- Board가 각각의 Square에 state를 "요청"해야 한다고 생각해 보겠습니다.
- 이 접근 방식은 React에서 기술적으로는 가능하지만, 코드가 이해하기 어렵고 버그에 취약하며 리팩토링하기 어렵기 때문에 권장하지 않습니다.
- 가장 좋은 방법은 게임의 state를 각 Square가 아닌 부모 컴포넌트인 Board에 저장하는 것입니다.
- Board 컴포넌트는 각 Square에 숫자를 전달했을 때와 같이 prop를 전달하여 각 Square 에 표시할 내용을 정할 수 있습니다.

- 여러 자식 컴포넌트에서 데이터를 수집하거나 두 자식 컴포넌트가 서로 통신하도록 하려면, 부모 컴포넌트에서 공유 state를 선언해야 합니다.
- 부모 컴포넌트는 props를 통해 해당 state를 자식 컴포넌트에 전달할 수 있습니다.
- 이렇게 하면 자식 컴포넌트가 서로 동기화되고, 부모 컴포넌트와도 동기화되도록 할 수 있습니다.

- React 컴포넌트를 리팩토링할 때 부모 컴포넌트로 state를 끌어올리는 것은 많이 사용 하는 방법입니다.


1. Board 컴포넌트를 편집해서 9개 Square에 해당하는 9개의 null의 배열을 기본값으로 하는 state 변수 squares를 선언하세요. 
  - Array(9).fill(null)은 9개의 엘리먼트로 배열을 생성하고, 각 엘리먼트를 null로 설정합니다. (참고 : developer.mozilla.org)
  - 그리고 state 변수 squares와 함수 setSquares 선언합니다.
  - 배열의 각 항목은 각 Square 컴포넌트의 값에 해당합니다.
  - 보드를 채우면, squares 배열은 다음과 같은 모양이 됩니다. 
#### component 분리하기
- Board component가 export default로 선언된 것을 보면, component가 분리되었다는 것 을 알 수 있습니다.
- 문서에서는 Board와 Square를 함께 두었지만 우리는 모두 분리합니다.
- [분리 순서]
  1. component이름과 동일한 파일을 만듭니다.
  2. 해당 파일에 코드를 복사하고 export default 키워드를 추가 합니다.
  3. 필요한 component와 useState를 추가합니다.
  4. App.js에서 해당 코드를 삭제하고, Board component import해 줍니다.
  5. App.js에서 useState의 import를 제거합니다.
  6. 정상적으로 동작하는지 확인합니다.
#### state 끌어올리기
2. 이제 Board 컴포넌트는 렌더링하는 각 Square 컴포넌트에 value prop를 전달해야 합니다. 

3. 다음으로 Board 컴포넌트에서 각 value prop를 받을 수 있도록 Square 컴포넌트를 수정합니다.
4. 이를 위해 Square 컴포넌트에서 value의 상태 추적과 버튼의 onClick prop를 제거해야 합니다. 

- 이제 각 Square는 'x', '0', 또는 빈 Square의 경우 null이 되는 value prop를 받습니다.
- 다음으로 Square가 클릭 되었을 때 발생하는 동작을 변경하겠습니다.
- 이제 Board 컴포넌트가 Square를 관리하므로 Square가 Board의 state를 업데이트할 방법을 만들어야 합니다.
-  컴포넌트는 자신이 정의한 state에만 접근할 수 있으므로 Square에서 Board의 state를 변경할 수 없습니다.
---
- 대신에 Board 컴포넌트에서 Square 컴포넌트로 함수를 전달하고, Square가 클릭 될 때 Square 가 해당 함수를 호출하도록 할 수 있습니다.
5. Square 컴포넌트가 클릭 될 때 호출할 함수부터 시작하겠습니다.onSquareClick으로 해당 함수를 호출하세요. 
6.다음으로, Square 컴포넌트의 props에 onSquareclick 함수를 추가하세요. 

7. 이제 onSquareclick prop을 Board 컴포넌트의 handleClick 함수와 연결하세요.
- onSquareClick 함수를 handleClick과 연결하려면 첫 번째 Square 컴포넌트의 onSquareClick prop에 해당 함수를 전달하면 됩니다. 

8. 마지막으로 보드 컴포넌트 내부에 handleClick 함수를 정의하여, 보드의 state를 담고있는 squares 배열을 업데이트하세요. 

- handleClick 함수는 JavaScript의 slice() 배열 메서드를 사용하여 squares 배열의 사본인 nextSquares를 생성합니다. (참고 : developer.mozilla.org)
- 그 다음 handleClick 함수는 nextSquares 배열의 첫 번째 Squares(index [0])에 X를 추가하여 업데이트합니다.
- setSquares 함수를 호출하면 React는 컴포넌트의 state가 변경되었음을 알 수 있습니다.
- 그러면 squares의 state를 사용하는 컴포넌트(Board)와 그 하위 컴포넌트(보드를 구성하는 Square 컴포넌트)가 다시 렌더링 됩니다.
* 중요 합니다! #이 설명은 문서의 코드 중 Board가 Square를 포함하고 있음을 전재.
- JavaScript는 클로저를 지원하기 때문에 내부 함수가(예: handleClick) 외부 함수(예: Board)에 정의된 변수 및 함수에 접근할 수 있습니다.
- handleClick 함수는 squares의 state를 읽고 setSquares 메서드를 호출할 수 있는데, Develop 함수는 Board 함수 내부에 정의되어 있기 때문입니다.

## 4월 4일(5주차)
### 이벤트에 응답하기
- component 내부에 event handler 함수를 선언하면 event에 응답할 수 있다.
- onClick={handleClick}의 끝에 소괄호가 없다.
- 함수를 호출하지 말고 전달만 하면 된다.
- React는 사용자가 버튼을 클릭할 때 이벤트 핸들러를 호출한다.


### 화면 업데이트하기
- 컴포넌트가 특정 정보를 “기억”하여 표시하기를 원하는 경우가 종종 있다.
- 예를 들어 버튼이 클릭된 횟수를 세고 싶을 수 있다.
- 이렇게 하려면 컴포넌트에 state를 추가하면 된다.
- 먼저, react에서 useState를 import한다.
- import {useState} from 'react';
- 이 코드를 보면 usetState는 react 파일 안에 Named Exports로 선언되어 있는 여러 개의 
  componet 중 하나라는 것을 알 수 있다.
- 이제 component 내부에 state 변수 선언할 수 있다.

- useState로부터 현재의 state를 저장할 수 있는 변수 count와 이를 업데이트할 수 있는 함수 setCount를 얻을 수 있다.
- 이들을 어떤 이름으로도 지정할 수 있지만 [something, setSomething]으로 작성하는 것이 일반적이다.
- 즉, 변수 이름과 변수 이름 앞에 set을 붙인 업데이트 함수를 관용적으로 사용한다.

- 버튼이 처음 표시될 때는 useState()에 0을 전달했기 때문에 count가 0이 된다.
- state를 변경하고 싶다면 setCount()를 실행하고 새 값을 전달 이 버튼을 클릭하면 카운터가 증가한다.  


### Hook 사용하기
- use로 시작하는 함수가 Hook이라고 한다.
- useState는 React에서 기본 제공하는 내장 Hook이다.
- 다른 내장 Hook은 공식 API 참고서에서 찾을 수 있다.
- 기존 Hook을 조합해서 직접 Hook 만들 수도 있다.
- Hook은 일반 함수보다 더 제한적이다.
- component 또는 다른 Hook의 최상단에서만 호출 할 수 있다.
- 조건문이나 반복문 안에서 useState 쓰고 싶다면 새 컴포넌트를 추출하여 그곳에 넣는다.
### Hook 사용 규칙
- React의 렌더링 및 상태 메터니즘과 밀접하게 연결되어 있다.
- 1. 최상위에서만 호출한다.
* if, for, while 등의 블록 내에서 호출 안된다.
* 함수의 조건문 내부에서 호출하면 실행 순서가 달라질 수 있다.
- 2. React 함수형 component 또는 사용자 Hook 내부에서만 사용 가능하다.
* 일반적인 JavaScript 함수에서 useState, useEfect 등의 Hook 사용할 수 없다.
- 왜 이런 제한 필요한가?
- React의 동작을 예측 가능하고, 안정성 높이기 위해 필요한 규칙
- 1. 렌더링 순서를 보장하기 위해
- 2. 불필요한 사이드 이펙트 방지
### function형 컴포넌트에서만 Hook을 사용할까?
- class형 component는 lifecycle 함수를 통해서 상태 관리를 했습니다.
- 그런 이유 때문에 class형 componet는 유지보수가 어렵고 복잡해지 수 있었습니다.
- React는 component의 상태 관리와 로직을 더 관결하게 만들기 위해 Hooks를 도입 하게 됩니다.
- 따라서 React 팀은 function형 component를 권장하고 있습니다.
- Hook은 function형 component 전용으로 설계되었습니다.
### funtion component vs class component
- 왜 요즘은 function형 component 사용하냐면 인터넷 자료를 찾다보면 class component를 많이 볼 수 있기 때문이다.
- React 역사를 살피면 이유를 알 수 있다.
- 1. React 초창기 (2013년 5월 29일~ 2014년)
  -함수형 컴포넌트는 존재했지만, 단순히 props를 받아 UI 반환하는 역할만 가능
  - 상태나 생명주기 기능 없음
  -그래서 주요 component는 주로 class component 작성
- 2. React 16.8 (2019년 2월) ->Hooks 도입
  -useState, useEffect 등의 Hook이 추가, 함수형 component에서도 상태 관리와 생명주기 기능을 구현할 수 있게됨
- 3. React 17(2020년 10월) 이후
  -React 17은 주로 내부적인 개선이 많았고, function형 component와 Hooks 사요이 사실상 표준이 됨.
- 4. React 18(2022년 3월)
  - 자동 배치 등 function 형 component에서 동작 최적화
  - .useTrasition, useDeferredValue 같은 새로운 Hook이 추가되면서, class componet에서 funtion component로의 전환이 더욱 가속화됨.

### 컴포넌트 간에 데이터 공유하기
- 공식 문서에서는 MyButton과 MyApp을 계속 수정해 가면서 설명을 하고 있어서 이전 상태를 확인하기가 어렵습니다.
- 물론 변경이 있을 때마다 꼼꼼히 commit을 해두면 checkout을 통해서 확인이 가능합니다.
- 다만 이 경우 checkout을 반복해야 하기 때문에 확인하는데 불편합니다.

- 두 개의 CountState2 component가 동일한 count를 표시하고 함께 업데이트하려면, state를 개별 버튼에서 모든 버튼이 포함된 가장 가까운 component 안으로 이동해야 함함.(App component 제일 가까움)
### Tutorial에서 학습할 내용
- 1. Tutorial 환경 설정 : 개발환경에 대한 설명
- 2. 개요: React의 핵심인 components, props, state에 대해 학습
- 3. 게임 완료하기 : 가장 많이 사용되는 기술
- 4. 시간여행 추가하기 : React 만의 강점에 대해 더 깊은 통찰력

### 틱택토 만들기
### Tutorial에서 학습할 내용
- 1. Tutorial 환경 설정 : 개발환경에 대한 설명
- 2. 개요: React의 핵심인 components, props, state에 대해 학습
- 3. 게임 완료하기 : 가장 많이 사용되는 기술
- 4. 시간여행 추가하기 : React 만의 강점에 대해 더 깊은 통찰력

- 상호작용할 수 있는 틱택토 게임
- 틱택토 게임은 두 사람이 번갈아 빈칸에 말을 놓아서 3개의 말을 한 줄로 완성하면 승리한다.
- 화면 오른쪽에 번호가 있는 목록을 봐야함.
- 목록에 게임에서 발생한 착수를 모두 기록하며 게임이 진행될 때 동시에 업데이트된다.
- 먼저 정사각형부터 만들기
```
export default function Square() {
  return <button className="square">1</button>;
}
```
## 3월 27일(4주차)
### Component의 생성 및 nesting(중첩)
* 먼저 프로젝트 실행 $npm start
* App.js의 내용 모두 삭제하고 코딩
* <MyButton /> 호출해서 중첩
* export default 키워드는 파일내의 component 중 기본 component를 지정
* 이 키워드의 사용도 JavaScript 문법

- [export default와 export의 차이]
* Named Exports (export)
 - 하나의 파일안에 여러 개의 component가 있을 때 사용한다.
 - component를 사용하는 쪽에서는 component  정확한 이름을 반드시 명시해야 합니다.
- Ex) import{add, subtract, multiply, divide} from './math'
* Default Exports (export default)
 - 하나의 파일안에서 하나의 component만 내보내는 경우
 - component를 사용하는 쪽에서는 어떤 이름을 사용해도 상관없다.

* 예제 코드에서 MyButton component만 분리
* ButtonLib라는 component를 새로 만든다.
* button component 3개 만든다.
* BUttonLib에 선언한 component를 2개만 App으로 중첩

### 3.JSX로 마크업 작성하기
* 앞에서 작성한 코드의 마크업 문법을 JSX라고 함.
* 반드시 사용해야 하는 것은 아니지만, React 프로젝트에서는 편의성을 위해 JSX를 사용해야 함.
* JSX는 HTML보다 더욱 엄격한 문법을 적용
* JSX에서는 <br /> 같이 싱글 태그라도 태그를 닫아야 함.
* React에서는 여러 개의 component를 JSX태그로 반환할 수 있다.
* 다만 여러 개의 component를 <div>...</div>또는 빈 <>...</> wrapping해 줘야 함.
* AboutPage component 작성
* component를 화면에서 확인하려면? -> App.js를 불러오면 됨.
### 4. 스타일 추가하기
* React에서는 className으로 CSS 클래스를 지정함.
* className은 HTML의 class 속성과 동일한 방식으로 동작함.
* CSS 규칙은 별도의 CSS 파일에 작성, React는 CSS 파일을 추가하는 방법을 규정하지는 않는다.
* 가장 간단한 방법은 HTML에 태그 추가하는 법 그러나 정적 페이지를 수정해야 하므로 추천하지 않는다.
### 5. 데이터 표시하기
* 아바타 사진 동그란 모습으로 스타일링
* JSX 코드 내에서 JavaScript로 탈출하여 변수나 표현식을 사용
* 이 방법을 Escape Back이라고 함
* 중괄호를 사용해서 변수나 표현식을 사용자에게 표시

* 데이터 중앙에 오게하기
### 6. 조건부 렌더링
* 일반적인 자바스크립트 코드를 작성할 때 사용하는 것과 동일한 방법 사용
* 일반적인 if-else문, 삼항 연산자, 이항 연산자(&& 연산자/|| 연산자)
### 7. 리스트 렌더링  
* 컴포넌트 리스트를 렌더링하기 위해서는 for문 및 map()함수와 같은 자바스크립트 기능 사용
*  li>에 key 속성이 있는 것 주목
* 목록을 사용할 때는 각 항목에 대해 고유하게 식별하는 문자열 또는 숫자를 전달
* 항목을 삽입, 삭제, 재정렬할 때 어떤 일이 일어났는지 알기 위해 key 사용
* 이것을 key props라고 함.
* ShoppingList component 작
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
