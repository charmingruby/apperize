package entity

import (
	"time"

	"github.com/charmingruby/wisp/pkg/uuid"
)

type Developer struct {
	ID             string
	Name           string
	LastName       string
	Email          string
	Password       string
	Role           string
	GithubUser     string
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
	GithubUser     string
	AvatarUrl      string
	OccupationArea string
}

func NewDeveloper(
	params CreateDeveloperParams,
) *Developer {
	return &Developer{
		ID:             uuid.GenerateUUID(),
		Name:           params.Name,
		LastName:       params.LastName,
		Email:          params.Email,
		Password:       params.Password,
		Role:           params.Role,
		GithubUser:     params.GithubUser,
		AvatarUrl:      params.AvatarUrl,
		OccupationArea: params.OccupationArea,
		CreatedAt:      time.Now(),
	}
}
