package api

import (
	"encoding/json"
	"fmt"
	"github.com/gorilla/mux"
	"io/ioutil"
	"net/http"
	"regexp"
)


const emailRegex = `(?:[a-z0-9!#$%&'*+/=?^ `+"`"+`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])`

type interestRequest struct {
	Email string `json:"email"`
}

//RegisterRoutes for any web end-points
func (h *Handler)RegisterRoutes(router *mux.Router) {
	router.HandleFunc("/api/register", h.register).Methods("POST")
}

func (h *Handler) register(res http.ResponseWriter, r *http.Request) {
	req := &interestRequest{}

	body, err := ioutil.ReadAll(r.Body)
	if err != nil {
		res.WriteHeader(500)
		res.Write([]byte("invalid json request"))
		return
	}

	err = json.Unmarshal(body, req)
	if err != nil {
		res.WriteHeader(500)
		res.Write([]byte("invalid json request"))
		return
	}

	match, err := regexp.MatchString(emailRegex, req.Email)
	if !match || err != nil {
		res.WriteHeader(500)
		res.Write([]byte("invalid email address"))
		return
	}


	stmt, err := h.Database.Prepare("INSERT INTO registrations SET email=?, registration_date=NOW()")
	if err != nil {
		res.WriteHeader(500)
		return
	}

	_, err = stmt.Exec(req.Email)
	if err != nil {
		res.WriteHeader(500)
		return
	}

	res.Write([]byte(fmt.Sprintf("handling interest: %v", req.Email)))
}
