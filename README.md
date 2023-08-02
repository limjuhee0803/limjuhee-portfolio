# 💙Portfolio 제작일지💙

![portfolio](https://github.com/limjuhee0803/limjuhee-portfolio/assets/127369461/a6ca685b-0026-41b1-8482-c9d46bddb6a7)

- 사용기술
  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white">
- 작업 기간 - 2023년 6월 22일 ~ 2023년 8월 2일
- 작업 유형 - 개인프로젝트(포트폴리오)

## ❤️메인 페이지 디자인❤️

- 메인 페이지 디자인은 평소 좋아하던 파란색과 데이지꽃을 조합하여 디자인
- 포트폴리오에 들어갈 작업물을 크게 publishing/ web & appp /3D modeling으로 레이아웃을 나눔
- 성격의 키워드를 flow text로 연출하여 시각적 재미요소 부여

## 🧡Publishing🧡

- @keyframe을 활용한 애니메이션 제어
- Swiper를 이용한 슬라이드 이미지 제어
- grid와 flex를 이용한 레이아웃 구축
- 중복 if문을 활용한 fullpage연출
- 마우스 좌표를 이용한 이벤트
- addClass를 활용한 다양한 효과

## 💛Problem & Solution💛

- **Backgound 이미지를 직접 제작한 이미지 파일을 넣다보니 업로딩이 느려짐**

  - 이미지를 svg로 변환하는 사이트에서 svg로 변환하여 Background에 적용

- **발표자료 pdf를 업로드 하고자 하였는데 100MB를 초과하여 git push에 에러가 생김**

  - 오류가 난 로컬 레파지토리를 삭제, pdf파일이 업로드 되지 않은 레파지토리를 다운
  - pdf파일을 제작한 figma에서 스케일을 조정하여 파일의 용량을 줄임.
  - 이 외에 용량을 줄여도 100mb가 넘는 경우 구글 드라이브에 연결하여 사용

- **web/app design 부분의 링크 연결이 매끄럽지 않음**

  - a태그 안에 div 등의 태그는 들어갈 수 있지만 a태그를 중복하여 사용할 수 없는 것을 알게됨
  - a태그 안에 중복하여 들어간 a태그를 수정하자 정상적으로 작동

- **Badee 프로젝트 작업 중, 부분 스크롤의 영역이 작아 그냥 지나치기 쉬움**

  - padding과 margin 값을 이용하여 스크롤이 가능한 영역을 넓힘
  - 위치가 바뀐 레이아웃은 transform으로 조정하여 레이아웃 유지

- **jQuery에서 toggle 슬라이드 사용 시 슬라이드가 열린 상태에서만 작동**

  - 슬라이드가 닫힌 상태에서 열기 위해 처음에는 display: none / block을 통해 임의로 연출
  - toggleSlide 적용 시, display:none; 을 준 다음 적용시키면 닫힌 상태에서 시작하여 여닫을 수 있다는 것을 알게 되어 수정 후 정상 작동

- **파일의 수가 많아지면서 파일 정리가 어려워짐**
  - 포트폴리오 폴더 구성을 다시 한번 정리
  - 폴더의 이름을 더욱 직관적으로 수정
