## TAGLOG

### Introduction

TAG로 관리하는 블로그

### Deploy

### 폴더구조

```
taglog
├─ public
├─ src
└─ 추가 예정

```

### 기술 Stack

- Next.js(13.4.3)
- TypeScript(5.0.4)
- React(18.2.0)
- SCSS
- esLint
- stylelint
- yarn

### 구현 기능

### 구현 상세

### 배운 점

### 아쉬운 점

### 미 구현

### convention

- #### 📝 commit message

  | 태그     | 설명                                                                        |
  | -------- | --------------------------------------------------------------------------- |
  | feat:    | 새로운 기능을 추가할 경우                                                   |
  | chore    | 패키지 매니저 설정 등 여러가지 기능과 무관한 부분 들을 수정, 추가 하는 경우 |
  | error:   | 버그를 고친경우                                                             |
  | HOTFIX:  | 치명적인 버그 수정, 운영중 빠른 수정이 필요한 경우                          |
  | design   | CSS 등 사용자 UI 디자인 변경                                                |
  | style    | 코드 포맷 변경, 세미콜론 누락 등 기능상의 코드 수정이 없는 경우             |
  | comment  | 주석 추가 및 변경                                                           |
  | docs     | 문서를 수정한 경우                                                          |
  | refactor | 프로덕션 코드 리팩토링                                                      |
  | rename   | 파일명을 수정하거나 옮기는 작업                                             |
  | remove   | 파일을 삭제하는 작업                                                        |
  | test     | Test코드 추가                                                               |

- #### 🌱 branch convention
  | 태그   | 설명                                                                                       |
  | ------ | ------------------------------------------------------------------------------------------ |
  | main   | 배포가 진행되는 브랜치 dev branch에서 pr을 진행한다.(바로 pr날리는 것 금지)                |
  | dev    | feat(feature) branch를 merge하여 기능을 확인하는 브랜치                                    |
  | feat   | 기능 단위 브랜치 작업하는 기능에 대해 Kebab Case를 통해 상세하게 작성 ex) feat/main-header |
  | HOTFIX | 긴급한 버그 수정 브랜치 (바로 main에 배포 가능)                                            |
