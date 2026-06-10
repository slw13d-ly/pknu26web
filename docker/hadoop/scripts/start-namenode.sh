#!/bin/bash

# SSH 데몬 시작
service ssh start

# HDFS NameNode 포맷 (최초 1회만 실행됨)
if [ ! -d "/hadoop/dfs/name/current" ]; then
  echo "NameNode 포맷을 시작합니다..."
  $HADOOP_HOME/bin/hdfs namenode -format -force -nonInteractive
fi

# NameNode 데몬 시작
echo "NameNode를 시작합니다..."
$HADOOP_HOME/bin/hdfs --daemon start namenode

# YARN ResourceManager 시작
echo "YARN ResourceManager를 시작합니다..."
$HADOOP_HOME/bin/yarn --daemon start resourcemanager

# 컨테이너가 종료되지 않도록 로그를 출력하며 유지
tail -f $HADOOP_HOME/logs/*
