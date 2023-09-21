# build stage
FROM node:18.16.1-alpine

#directory 지정
WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

#패키지 다운로드
RUN yarn install

# 필요한 모든 파일을 복사
COPY . .

# 빌드
RUN yarn build

# 컨테이너 포트 3000 설정
EXPOSE 3000

# 어플리케이션 실행
CMD ["yarn", "start"]
