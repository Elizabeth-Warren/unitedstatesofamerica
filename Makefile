build-image:
	docker build . -t unitedstatesofamerica

build-lib:
	docker run --rm \
		-v $(shell pwd):/usr/src/app \
		unitedstatesofamerica npm run build

tests:
	make build-image
	make build-lib
	docker run --rm \
		-v $(shell pwd):/usr/src/app \
		unitedstatesofamerica
