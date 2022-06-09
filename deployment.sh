#!/bin/bash

docker build . -t shahrozemalik/nodeapp:latest

docker push shahrozemalik/nodeapp:latest

kubectl delete deployment backend

kubectl create -f k8s/deployment.yml