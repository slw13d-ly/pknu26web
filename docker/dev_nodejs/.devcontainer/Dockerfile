# 베이스 이미지: Ubuntu 최신 버전
FROM ubuntu:22.04

# 필수 패키지 설치
RUN apt-get update && apt-get install -y \
    curl \
    sudo \
    bash \
    git \
    build-essential

# NodeSource 스크립트로 최신 LTS Node.js 설치
RUN curl -fsSL https://deb.nodesource.com/setup_lts.x | bash - \
    && apt-get install -y nodejs

# npm 최신 버전으로 업데이트
RUN npm install -g npm@latest

# 작업 디렉토리 설정
WORKDIR /workspace


