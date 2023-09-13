package router

import (
	"net/http"

	"github.com/charmingruby/wisp/internal/infra/http/router/route"
	"github.com/go-chi/chi"
)

func Initialize() {
	r := chi.NewRouter()

	route.Initialize(r)

	println("Server is running at http://localhost:8888")

	http.ListenAndServe(":8888", r)

}
