# github-readme-solvedac

백준 온라인 저지 통계 앱인 [solved.ac](https://solved.ac)의 API를 이용하여 사용자의 전체 랭킹, 해결한 문제 수, 클래스, 그리고 티어를 보여주는 Stat card를 만들어주는 서비스입니다.

## 사용법

기본적인 사용방법은 [github-readme-stats](https://github.com/anuraghazra/github-readme-stats)와 동일합니다.

다음과 같이 작성하면 되며, 주소의 handle 쿼리에 자신의 백준 핸들을 입력해주세요.
```markdown
![hyp3rflow's solved.ac stats](https://github-readme-solvedac.hyp3rflow.vercel.app/api/?handle=hyperflow)
```

png 이미지 파일로 카드를 만들고 싶으신 경우, 다음과 같은 방법으로 사용할 수 있습니다.  
`https://github-readme-solvedac.hyp3rflow.vercel.app/png?handle=YOUR_HANDLE_HERE`

## 예시
![hyp3rflow's solved.ac stats](https://github-readme-solvedac.hyp3rflow.vercel.app/api/?handle=hyperflow)

## Contribution
```sh
yarn
vercel dev
```
커맨드를 이용해서 개발환경을 설정하신 후, PR을 생성해주세요.

## License
Rank, Class 등 Image Asset에 대한 저작권은 [solved.ac](https://solved.ac)에 있습니다.
