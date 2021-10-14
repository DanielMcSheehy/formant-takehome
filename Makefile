ServerPort = 8000
ImageName = webserver

.PHONY: build_and_run

build_and_run: build_react_app run_react_app build_server run_server 

build_react_app: 
	@docker build -t react -f ./Robot-Setup/Dockerfile .

run_react_app: 
	@docker run -d -p 3000:3000 react

build_server:
	@docker build -t ${ImageName} ./Webserver
	
run_server:
	@docker run --rm -t -i -p ${ServerPort}:${ServerPort} ${ImageName}