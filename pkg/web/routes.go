package web

import (
	"github.com/gorilla/mux"
	"net/http"
)

//RegisterRoutes for any web end-points
func RegisterRoutes(router *mux.Router) {
	router.PathPrefix("/").Handler(http.FileServer(http.Dir("./sprintbotio/build/")))
}
