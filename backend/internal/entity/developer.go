package entity

import (
	"time"

	"github.com/charmingruby/wisp/internal/utils"
)

type Developer struct {
	ID             string
	Name           string
	LastName       string
	Email          string
	Password       string
	Role           string
	GithubUrl      string
	AvatarUrl      string
	OccupationArea string
	CreatedAt      time.Time
}

type CreateDeveloperParams struct {
	Name           string
	LastName       string
	Email          string
	Password       string
	Role           string
	GithubUrl      string
	AvatarUrl      string
	OccupationArea string
}

func NewDeveloper(
	params CreateDeveloperParams,
) *Developer {
	return &Developer{
		ID:             utils.GenerateUUID(),
		Name:           params.Name,
		LastName:       params.LastName,
		Email:          params.Email,
		Password:       params.Password,
		Role:           params.Role,
		GithubUrl:      params.GithubUrl,
		AvatarUrl:      params.AvatarUrl,
		OccupationArea: params.OccupationArea,
		CreatedAt:      time.Now(),
	}
}
