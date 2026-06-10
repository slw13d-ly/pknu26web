FROM ubuntu:22.04

# 한글 입력을 위한 환경변수 설정
ENV LANG C.UTF-8

# 패키지 설치: Java 11, SSH, wget
RUN apt-get update && \
    DEBIAN_FRONTEND=noninteractive apt-get install -y openjdk-11-jdk ssh wget tzdata sudo less && \
    apt-get clean

# 환경변수 설정
ENV JAVA_HOME /usr/lib/jvm/java-11-openjdk-amd64
ENV HADOOP_VERSION 3.3.6
ENV HADOOP_HOME /usr/local/hadoop
ENV PATH $PATH:$HADOOP_HOME/bin:$HADOOP_HOME/sbin

# Hadoop 다운로드 및 설치
RUN wget -q https://archive.apache.org/dist/hadoop/common/hadoop-${HADOOP_VERSION}/hadoop-${HADOOP_VERSION}.tar.gz && \
    tar -xzf hadoop-${HADOOP_VERSION}.tar.gz && \
    mv hadoop-${HADOOP_VERSION} /usr/local/hadoop && \
    rm hadoop-${HADOOP_VERSION}.tar.gz

# SSH 키 생성 (비밀번호 없는 통신을 위해)
RUN ssh-keygen -t rsa -P '' -f ~/.ssh/id_rsa && \
    cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys && \
    chmod 0600 ~/.ssh/authorized_keys

# Hadoop 설정 파일들을 복사할 디렉토리 생성
RUN mkdir -p /hadoop/dfs/name && \
    mkdir -p /hadoop/dfs/data

# 시작 스크립트 복사 및 실행 권한 부여
COPY scripts/* /usr/local/bin/
RUN chmod +x /usr/local/bin/start-namenode.sh && \
    chmod +x /usr/local/bin/start-datanode.sh

WORKDIR $HADOOP_HOME
