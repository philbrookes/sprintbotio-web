package main

import (
	"github.com/gorilla/mux"
	"github.com/philbrookes/sprintbotio-web/pkg/api"
	"github.com/philbrookes/sprintbotio-web/pkg/web"
	"github.com/sirupsen/logrus"
	"net/http"
	"os"
)

func main() {
	portString := "8080"
	router := mux.NewRouter()
	if v, ok := os.LookupEnv("WEB_PORT"); ok {
		portString = v
	}

	api.RegisterRoutes(router)

	// must be last as it acts as a catch-all route
	web.RegisterRoutes(router)

	logrus.Infof("starting server")
	logrus.Fatal(http.ListenAndServe(":"+portString, router))
	logrus.Infof("Listening on port: :%v", portString)
}
