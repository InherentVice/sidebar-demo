image = inherentvice/sidebar-demo

.PHONY: build

build:
	docker build -f Dockerfile-prod -t $(image) .
push:
	docker push $(image)
deploy:
	sloppy change sloppy.yml
