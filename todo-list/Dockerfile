# 베이스 이미지 설정
FROM node:14

# 작업 디렉토리 설정
WORKDIR /app

# 필요한 파일 복사
COPY package.json package-lock.json ./

# 패키지 설치
RUN npm install

# 소스 코드 복사
COPY . .

# 애플리케이션 실행
CMD ["node", "app.js"]
