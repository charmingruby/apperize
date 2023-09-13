package route

import (
	"net/http"

	"github.com/go-chi/chi"
)

type Route struct {
	Uri     string
	Method  string
	Handler func(http.ResponseWriter, *http.Request)
	Admin   bool
}

func createRoute(router *chi.Mux, route Route) {
	switch route.Method {
	case "GET":
		router.Get("/health-check", route.Handler)

	case "POST":
		router.Post("/health-check", route.Handler)

	case "PUT":
		router.Put("/health-check", route.Handler)

	case "DELETE":
		router.Delete("/health-check", route.Handler)

	case "PATCH":
		router.Patch("/health-check", route.Handler)
	}

}

func Initialize(r *chi.Mux) {
	for _, route := range healthCheckRoutes {
		createRoute(r, route)
	}
}
