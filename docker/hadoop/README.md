# Hadoop 빅데이터 분산처리 시스템 (학생 실습용)

이 프로젝트는 학생들이 Hadoop의 분산처리 시스템(NameNode 1개, DataNode 3개)을 Docker를 이용해 쉽게 이해하고 실습할 수 있도록 구성되었습니다.

## 🚀 시작하기

```bash
# Docker Compose를 사용하여 컨테이너 백그라운드 실행
docker-compose up -d
```

## 🌐 Web UI 접속

컨테이너가 모두 실행된 후 브라우저에서 아래 주소로 접속하세요.

- **HDFS UI (파일 시스템 관리)**: [http://localhost:9870](http://localhost:9870)
- **YARN UI (리소스 및 작업 관리)**: [http://localhost:8088](http://localhost:8088)

*HDFS UI의 `Datanodes` 탭에서 3개의 DataNode가 정상적으로 연결되었는지 확인해 보세요!*

## 💻 기본 실습 예제

### 1. HDFS 명령어 실습
NameNode 컨테이너에 접속하여 HDFS 파일 시스템을 조작해 봅니다.

```bash
# NameNode 컨테이너 접속
docker exec -it namenode /bin/bash

# HDFS에 디렉토리 생성
hdfs dfs -mkdir -p /user/student

# 로컬 파일을 HDFS로 복사
echo "Hello Hadoop World" > hello.txt
hdfs dfs -put hello.txt /user/student/

# HDFS의 파일 목록 확인
hdfs dfs -ls /user/student/

# HDFS의 파일 내용 확인
hdfs dfs -cat /user/student/hello.txt
```

### 2. MapReduce 예제 실행 (WordCount)
Hadoop에서 기본으로 제공하는 예제 프로그램을 실행해 봅니다.

```bash
# 입력용 디렉토리 생성 및 파일 업로드
hdfs dfs -mkdir -p /input
echo "apple banana apple" > fruit.txt
hdfs dfs -put fruit.txt /input/

# WordCount 예제 실행 (YARN을 통해 분산 처리)
hadoop jar $HADOOP_HOME/share/hadoop/mapreduce/hadoop-mapreduce-examples-3.3.6.jar wordcount /input /output

# 결과 확인
hdfs dfs -cat /output/part-r-00000
```

## 🛑 종료 및 정리

```bash
# 컨테이너 중지
docker-compose down

# 컨테이너 중지 및 데이터(볼륨)까지 완전히 삭제하고 싶을 때
docker-compose down -v
```

## 📝 구조 설명

- **NameNode**: HDFS의 메타데이터(파일 이름, 위치 등)를 관리하고, YARN의 ResourceManager 역할을 수행하여 전체 클러스터의 자원을 관리합니다.
- **DataNode (1, 2, 3)**: 실제 데이터가 3개로 복제되어 저장되는 노드이며, YARN의 NodeManager가 실행되어 실제 작업을 수행합니다.
