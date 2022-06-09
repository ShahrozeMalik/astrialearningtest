<<<<<<< HEAD
# Application

This application consists of a single API which returns author name upon calling "/elearning".

## Docker

Dockerfile contains all the configurations for creating a docker image.

```bash
docker build . -t shahrozemalik/nodeapp:latest
```
You can create and run a container from same image with command

```bash
docker run -d -p 80:5000 shahrozemalik/nodeapp:latest
```

## Kubernetes

See the k8s folder with all the details for deployment, service and ingress. The application ready to be on boarded to k8s cluster with the following command.

```bash
kubectl create -f /k8s
```

## Automated deployment
deployment.sh in the main directory to build and push the image to docker hub and then redeploy to kubernetes.
=======

>>>>>>> d97e4db31efef98064447c655801b342ce501876
