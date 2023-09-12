package router

import (
	"net/http"

	"github.com/charmingruby/wisp/internal/infra/handler"
	"github.com/go-chi/chi"
)

func Initialize() {
	r := chi.NewRouter()

	r.Get("/health-check", handler.HealthCheckHandler)

	println("Server is running at http://localhost:8888")

	http.ListenAndServe(":8888", r)

}
