docker login

docker build -t knote .

docker tag knote koda2136/knote-js:1.0.0

docker push koda2136/knote-js:1.0.0

kubectl get pod

minikube service knote --url

kubectl delete pod <pod-id>
