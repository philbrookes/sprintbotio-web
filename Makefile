REG=quay.io
ORG=philbrookes
PROJECT=sprintbotio-web
SHELL=/bin/bash
TAG=0.0.1
PKG=github.com/philbrookes/sprintbotio-web
COMPILE_TARGET=./tmp/_output/bin/$(PROJECT)

.PHONY: test-build-and-push
test-build-and-push: test build push

.PHONY: build-and-push
build-and-push: build push

.PHONY: test
test: check-gofmt test-unit

.PHONY: build
build: compile
	docker build -t ${REG}/${ORG}/${PROJECT}:${TAG} -f Dockerfile .

.PHONY: check-gofmt
check-gofmt:
	diff -u <(echo -n) <(gofmt -d `find . -type f -name '*.go' -not -path "./vendor/*"`)

.PHONY: test-unit
test-unit:
	@echo Running tests:
	go test -v -race -cover ./pkg/...

.PHONY: push
push:
	docker push ${REG}/${ORG}/${PROJECT}:${TAG}

.PHONY: compile
compile:
	GOOS=linux GOARCH=amd64 CGO_ENABLED=0 go build -o=$(COMPILE_TARGET) ./cmd/web
	cd web && npm run build