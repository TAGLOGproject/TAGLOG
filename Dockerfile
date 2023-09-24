# build stage
FROM node:18.16.1-alpine AS base

#directory 지정
WORKDIR /usr/src/app

COPY package.json yarn.lock* ./

FROM base AS deps
#패키지 다운로드
RUN yarn install


FROM deps AS builder
COPY . .
RUN yarn build

FROM base AS runner
COPY --from=builder /usr/src/app/.next ./.next
COPY --from=builder /usr/src/app/public ./public

# 컨테이너 포트 3000 설정
EXPOSE 3000

# 어플리케이션 실행
CMD ["yarn", "start"]
