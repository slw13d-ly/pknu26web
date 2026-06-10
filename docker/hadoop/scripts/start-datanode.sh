#!/bin/bash

# SSH 데몬 시작
service ssh start

# DataNode 데몬 시작
echo "DataNode를 시작합니다..."
$HADOOP_HOME/bin/hdfs --daemon start datanode

# YARN NodeManager 시작
echo "YARN NodeManager를 시작합니다..."
$HADOOP_HOME/bin/yarn --daemon start nodemanager

# 컨테이너가 종료되지 않도록 로그를 출력하며 유지
tail -f $HADOOP_HOME/logs/*
