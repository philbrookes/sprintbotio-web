package api

import "database/sql"

//Handler for api requests
type Handler struct{
	Database *sql.DB
}

func NewHandler(con *sql.DB) *Handler{
	return &Handler{Database: con}
}

