package api

import (
	"github.com/gorilla/mux"
	"github.com/sirupsen/logrus"
	"net/http"
)

//RegisterRoutes for any web end-points
func RegisterRoutes(router *mux.Router) {
	router.HandleFunc("/api/interest", interest).Methods("GET")
}

func interest(res http.ResponseWriter, _ *http.Request) {
	logrus.Infof("handling interest")
	res.Write([]byte("test response"))
}
