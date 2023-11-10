# 🔖 TAGLOG

## 1. Introduction 👩🏻‍🦰

`Tag`를 활용해 `Next.js`로 구축해보는 `개인 블로그` 입니다.

|                                                           다크모드 테마 & 로그인/로그아웃                                                           |                                                         게시글 작성/수정/삭제                                                         |                                                      게시글 필터링                                                       |
| :-------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------: |
| ![다크모드 테마 및 로그인:로그아웃](https://github.com/TAGLOGproject/TAGLOG/assets/115159126/d236518e-f334-43d9-9d65-0320d9469942) | ![게시글 작성,수정,삭제](https://github.com/TAGLOGproject/TAGLOG/assets/115159126/7977868b-68cc-4cf1-8f45-0b68c90c1e04) | ![게시글 필터링](https://github.com/TAGLOGproject/TAGLOG/assets/115159126/5e5ff618-fea8-4fd7-86d8-103bcca6aa80) |

|

## 2. Deploy 💻

[서비스 바로가기 https://www.taglog.site](https://www.taglog.site/)

## 3. 디렉토리 구조 📂

```
TAGLOG
├─ src
│  ├─ app
│  │  ├─ (blog)
│  │  │  └─ [id]
│  │  ├─ api
│  │  │  ├─ auth
│  │  │  │  └─ kakao-login
│  │  │  ├─ contact
│  │  │  └─ post
│  │  ├─ editor
│  │  ├─ oauth
│  │  ├─ post-details
│  │  │  └─ [id]
│  │  └─ signin
│  ├─ components
│  │  ├─ DropDown
│  │  ├─ FlotingButtons
│  │  │  ├─ LoginButton
│  │  │  └─ToggleThemeButton
│  │  ├─ Layout
│  │  ├─ LoadingUI
│  │  ├─ MarkdownBlogViewer
│  │  ├─ Modal
│  │  ├─ Pagination
│  │  ├─ Post
│  │  │  ├─ PostFilter
│  │  │  ├─ PostItem
│  │  │  └─PostList
│  │  ├─ Provider
│  │  ├─ SideBar
│  │  │  └─  SideBarLink
│  │  ├─ SyntaxHighLighter
│  │  ├─ Tag
│  │  ├─ ToastProvider
│  │  └─ Typography
│  ├─ constants
│  ├─ hooks
│  ├─ lib
│  ├─ models
│  ├─ pages
│  ├─ service
│  ├─ store
│  │  └─ zustand
│  ├─ styles
│  ├─ types
│  └─ utils

```

## 4. 구현 기능 👩🏻‍💻

✅ **인증/인가 (카카오 소셜 로그인)**

- `OAuth2.0 프로토콜을` 활용하였고, 이를 통해 `유저의 편의성`을 높임.
- 카카오 서버로부터 받은 인가 코드를 `Next.js의 useSearchParams 훅`을 사용하여 클라이언트에 저장.
- `Token(JWT)방식`을 사용하고, 서버로부터 받은 accessToken을 Local storage에 저장.
- `유저 정보 및 accessToken`을 `Zunstand`에서 관리하고, `perisist 미들웨어`를 사용해 `localStorage에 저장`함으로서 `새로고침시에도 데이터가 유지`되도록 함

✅ **Light/Dark 테마 기능 구현**

- `데이터 속성`을 사용해서 `html요소`에 `data-theme 속성`을 생성.
- `setAttribute 메서드`를 사용해서 theme이 바뀔 때마다 html요소의 data-theme 속성에 `theme 상태값 업데이트`.
- theme 상태값은 `Zustand`에서 관리.
- ` CSS 변수`를 사용해서 Light 모드 및 Dark 모드에서 `변경되는 요소의 색상을 일괄 적용`함.

✅ **메인 페이지 및 게시글 상세 페이지 기능 개발**

- `RESTFul API 연동`, `HTTP 통신`.
- 데스크탑, 태블릿, 모바일에 따른 `반응형 UI 구현`.
- 태그에 따른 게시글 필터 기능.
- `Pagination` 기능 구현.

✅ **Zustand 라이브러리 사용해 전역 상태 관리**

- `유저 정보 및 accessToken`을 `Zunstand`에서 관리
- 게시글 관련 상태와 필터 액션을 스토어에서 관리하여 `태그에 따른 게시글 필터`시 `API 호출을 최소화`.
- Theme의 `light/dark 상태와 액션`을 스토어에서 관리.
- 로그인 기능을 별도의 페이지 없이 DropDown으로 구현하였기에, DropDown의 open/close 상태와 액션을 스토어에서 관리.

✅ **SCSS를 사용한 스타일링 작업**

- `중첩(Nesting)구문을 활용`하여 코드의 `가독성`을 높임.
- `variable`을 사용해 `코드 스타일의 일관성과 유지 보수성을 향상`시킴.

✅ **S3를 통한 MarkDown 이미지 업로더 구현**

- Markdown 에디터에서 이미지를 업로드하는 부분에는 커스텀 이미지 업로더를 도입
- `AWS S3` 서비스를 활용하여 이미지 업로더 구현.

✅ **AWS & Docker & CI/CD를 활용한 배포**

- `GitHub Actions`를 활용하여 `CI/CD 파이프라인`을 구축했고, 이를 통해 main 브랜치에 코드 변경 사항이 `자동으로 빌드 및 배포`되며, `지속적인 통합 및 배포`를 실현.
- 프론트엔드와 백엔드 코드가 함께 동작하는 풀스택 구조를 가지고 있어서 배포 환경을 일관되게 유지하기 위해 `Docker 컨테이너` 사용.
- PaaS(Pass Platform as a Service) 서비스인 `AWS Elastic Beanstalk`를 사용하여 Docker 컨테이너를 배포하여 인프라 관리를 최소화 함.

✅ **SSL 및 HTTPS 보안 설정**

- `Elastic Beanstalk`를 통해 생성한 `Application Load Balancer`에 `Route53` 및 `ACM(AWS Certificate Manager)`을 활용하여 `SSL 및 HTTPS` 보안 통신을 구성.

✅ **SEO(검색 엔진 최적화) 및 웹 접근성 향상**

- `시맨틱 마크업`을 사용해서 `웹 접근성을 향상`시킴.
- Next.js의 `metadata API`를 사용해 HTML <head>요소 내부에 title 태그와 meta 태그를 정의.
- Next.js의 `<Image>태그`를 사용하여 `이미지 최적화`를 통해 페이지 로딩 속도 개선.

### 4. STACKS 📚

<div align=center> 
 <img src="https://img.shields.io/badge/JAVASCRIPT-F7DF1E?style=for-the-badge&logo=JAVASCRIPT&logoColor=black">
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> 
 </br>

  <img src="https://img.shields.io/badge/NEXT.JS-000000?style=for-the-badge&logo=NEXT.JS&logoColor=black">
  <img src="https://img.shields.io/badge/TYPESCRIPT-3178C6?style=for-the-badge&logo=TYPESCRIPT&logoColor=black">
    <img src="https://img.shields.io/badge/ZUSTAND-007054?style=for-the-badge&logo=ZUSTAND&logoColor=black">
  </br>

  <img src="https://img.shields.io/badge/AXIOS-5A29E4?style=for-the-badge&logo=AXIOS&logoColor=black">
  <img src="https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=SCSS&logoColor=black">
  <img src="https://img.shields.io/badge/MONGODB-47A248?style=for-the-badge&logo=MONGODB&logoColor=black">
    <img src="https://img.shields.io/badge/GITHUB ACTIONS-2088FF?style=for-the-badge&logo=GITHUB ACTIONS&logoColor=black">
  </br>

<img src="https://img.shields.io/badge/DOCKER-2496ED?style=for-the-badge&logo=DOCKER&logoColor=black">
<img src="https://img.shields.io/badge/AMAZON EC2-FF9900?style=for-the-badge&logo=AMAZON EC2&logoColor=black">
<img src="https://img.shields.io/badge/AMAZON ELASTIC BEANSTALK-CC6699?style=for-the-badge&logo=AMAZON ELASTIC BEANSTALK&logoColor=black">
<img src="https://img.shields.io/badge/AMAZON S3-1572B6?style=for-the-badge&logo=AMAZON S3&logoColor=black"> </br>

<img src="https://img.shields.io/badge/AMAZON ROUTE 53-8C4FFF?style=for-the-badge&logo=AMAZON ROUTE 53&logoColor=black">
<img src="https://img.shields.io/badge/AMAZON IAM-569A31?style=for-the-badge&logo=AMAZON IAM&logoColor=black">
<img src="https://img.shields.io/badge/REACT MARKDOWN-61DAFB?style=for-the-badge&logo=REACT MARKDOWN&logoColor=black"></br>
<img src="https://img.shields.io/badge/REACT MARKDOWN EDITOR LITE-632CA6?style=for-the-badge&logo=REACT MARKDOWN EDITOR LITE&logoColor=black">

</div>

### 5. Git Convention 🖍️

| 태그     | 설명                                                                        |
| -------- | --------------------------------------------------------------------------- |
| feat     | 새로운 기능을 추가할 경우                                                   |
| chore    | 패키지 매니저 설정 등 여러가지 기능과 무관한 부분 들을 수정, 추가 하는 경우 |
| error    | 버그를 고친경우                                                             |
| HOTFIX   | 치명적인 버그 수정, 운영중 빠른 수정이 필요한 경우                          |
| design   | CSS 등 사용자 UI 디자인 변경                                                |
| style    | 코드 포맷 변경, 세미콜론 누락 등 기능상의 코드 수정이 없는 경우             |
| comment  | 주석 추가 및 변경                                                           |
| docs     | 문서를 수정한 경우                                                          |
| refactor | 프로덕션 코드 리팩토링                                                      |
| rename   | 파일명을 수정하거나 옮기는 작업                                             |
| remove   | 파일을 삭제하는 작업                                                        |
| test     | Test코드 추가                                                               |

## 6. 프로젝트 실행 방법

```bash
# 레포지토리 클론
git clone https://github.com/TAGLOGproject/TAGLOG.git

# 패키지 설치
yarn

# 실행
yarn build 후에 yarn start
```
