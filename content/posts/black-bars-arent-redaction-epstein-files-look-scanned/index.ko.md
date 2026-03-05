---
date: "2026-03-04T00:00:00+08:00"
draft: false
title: "검은 막대는 레닥션이 아니다 (맞다, “Epstein files” PDF 논쟁이 또 모두에게 상기시켰다)"
summary: "PDF의 검은 박스가 왜 실패할 수 있는지, 보내기 전에 내가 하는 간단한 점검, 그리고 최종 스캔 스타일 결과물에 Look Scanned를 쓰는 이유를 짧고 실무적으로 정리한다."
description: "PDF의 검은 박스가 왜 실패할 수 있는지, 보내기 전에 내가 하는 간단한 점검, 그리고 최종 스캔 스타일 결과물에 Look Scanned를 쓰는 이유를 짧고 실무적으로 정리한다."
slug: "black-bars-arent-redaction-epstein-files-look-scanned"
tags: ["PDF", "레닥션", "문서 보안", "Look Scanned"]
keywords:
  - "Epstein files"
  - "PDF 레닥션"
  - "비효율적 레닥션"
  - "PDF 검은 막대"
  - "PDF를 스캔본처럼 만들기"
  - "Look Scanned"
---

# 검은 막대는 레닥션이 아니다 (맞다, “Epstein files” PDF 논쟁이 또 모두에게 상기시켰다)

큰 이슈의 문서 공개가 바이럴될 때마다, 내 피드에는 늘 같은 PDF 논쟁이 올라온다.  
이번에도 **“Epstein files”** PDF를 두고, 사람들이 검게 가린 부분을 확대해 보며 “이게 진짜 레닥션인지, 아니면 그냥 위에 검은 사각형만 올린 건지”를 묻고 있었다.

나는 사건 자체를 다시 다투려는 게 아니다. 다만 이 논쟁은 꽤 유용하다. 많은 팀이 인정하고 싶어 하지 않는 흔한 실수를 정확히 보여주기 때문이다.

**검은 막대는 대개 ‘시각적 가림’일 뿐이다. 진짜 레닥션은 콘텐츠를 제거하는 것이다.**

둘은 완전히 다르다.

## “검게 보인다”만으로는 왜 위험한가

PDF는 항상 “페이지 이미지”가 아니다. 오히려 컨테이너에 가깝다. 하나의 파일에 다음이 함께 들어갈 수 있다.

- 보이는 페이지
- 선택 가능한 텍스트
- 숨겨진 OCR 텍스트(눈에는 안 보이지만 검색 가능)
- 주석(하이라이트, 도형, 코멘트)
- 메타데이터(author/title/subject 등)

즉 화면에서는 가려져 보여도, 실제로는 아래 텍스트나 OCR, 잔여 객체가 그대로 남아 전송될 수 있다. 이게 바로 **비효율적 레닥션(ineffective redaction)** 이다. 고급 해킹 문제가 아니라, “덮기”와 “삭제”를 혼동한 워크플로 문제다.

만약 프로세스가 “Word/PowerPoint에서 검은 사각형 그린 뒤 PDF로 내보내기”라면, 그건 리스크다. 괜찮을 수도 있고 아닐 수도 있다. 실제로 보내는 *최종 파일*을 점검하기 전엔 알 수 없다.

## 내가 “레닥션된” PDF를 보내기 전에 하는 빠른 점검

이건 컴플라이언스 프로그램이 아니다. 단순 실수를 잡아내는 60–90초 루틴이다.

나는 **최종 export 파일**만 확인한다(실제로 upload/email/share 할 파일).

- 민감 키워드 **Search**(이름, ID, 이메일 조각, 주소)
- 검은 영역 주변을 선택해서 **copy/paste** 후 plain text editor에서 확인
- **서로 다른 viewer 2개**에서 열어보기(데스크톱 앱 + 브라우저면 보통 충분)
- 남아 있는 **annotations/comments** 확인(highlights, notes, shapes)
- 외부 전달 시 **metadata**(author/title/subject) 점검

문서가 스캔본에서 시작했거나 OCR을 거쳤다면 더 조심한다. 숨겨져 있지만 검색되는 텍스트는 전형적인 “surprise layer”이기 때문이다.

이게 전부다. 간단하고, 반복 가능하고, 꽤 효과적이다.

## 문제를 줄여주는 내 워크플로

문서에 민감 정보가 있으면, 릴리스 플로를 최대한 단순하게 유지한다.

1) **진짜 레닥션 수행**(overlay가 아니라 콘텐츠 삭제)  
2) **부가 레이어 정리**(annotations, attachments, hidden layers, metadata)  
3) **최종 export 검증**(위 체크리스트 기준)  
4) **전송용 버전 생성**(대개 scan-style, 일관된 최종 형태)

마지막 단계는 생각보다 중요하다. “security theater”를 위한 게 아니라, 기기별 우발적 깨짐을 줄이고 결과를 더 일관되게 만들기 위해서다.

## 내 프로세스에서 Look Scanned의 위치

나는 Look Scanned를 레닥션 도구로 쓰지 않는다. 그 용도가 아니다.  
내게 Look Scanned는 **last-mile deliverable tool** 이다.

문서를 올바르게 레닥션하고 최종 export까지 검증한 다음, Look Scanned로 깔끔한 **scan-style PDF**를 만든다. 공식 제출이나 포멀한 교환에서 사람들이 실제로 기대하는 형태다.

실무적으로는 다음 이점이 있다.

- “내 컴퓨터에서 서식이 바뀌었다”는 대화가 줄어든다  
- 더 강한 “final artifact” 느낌을 준다(특히 스캔본 기대가 있을 때)  
- 랜덤 markup 레이어가 섞일 가능성을 낮추기 쉽다(export pipeline에 따라 다름)

핵심은 순서다. **remove → verify → finalize**.

## 짧은 결론

“Epstein files” PDF 논쟁이 다시 알려준 건 이것이다.  
**검은 박스는 증거가 아니다.**

레닥션을 데이터 작업으로 다루고, 공개할 정확한 파일을 검증한 뒤, 그다음에 스캔 스타일의 최종 외형을 다듬어야 한다.

Look Scanned 써보기: https://lookscanned.io
