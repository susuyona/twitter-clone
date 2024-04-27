# nextjs-final-project

## Description
1주일 동안 아래 졸업작품을 마무리하고 제출합니다.
이때까지 배운 것을 토대로, 미니 트위터 클론을 완성합니다.

## Backlog
- / : 로그인 여부를 확인하여 로그인이 되어있다면 홈페이지를 그렇지 않다면 계정 생성 / 로그인 페이지로 이동하세요.
- /create-account : 계정을 생성하는 페이지입니다.
- /log-in : 로그인을 진행하는 페이지입니다.
- /tweet/[id] : 트윗의 상세 정보를 보는 페이지 입니다.

## Routes
### /:
- After logging in, in the Home Page, the user should see all the Tweets on the database
- Also the user should be able to POST a Tweet.

### /tweet/[id]:
- The user should be able to see the tweet corresponding to its ID and a Like button.
- When the Like button is pressed, save the like on the database and reflect the update using mutate from useSWR.

## 제출방법
- Use Code Sandbox, but this time, download the Blueprint and work with it on your local machine.
- Open it on your computer and run npm i.
- After completing the coding challenge, upload your work to your own Github.
- Submit the corresponding repository address.
- Submit a link to github.com/username/repository name.
- (ex) https://github.com/escriboy/nomad-twitter
- The visibility of the repository must be public.
- Submit by next Monday (the 29th) at 6am KST.