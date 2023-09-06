package entity

import (
	"testing"

	"github.com/stretchr/testify/require"
)

func TestIfShouldBeAbleToCreateADeveloperWithValidParams(t *testing.T) {
	args := CreateDeveloperParams{
		Name:           "John ",
		LastName:       "Doe",
		Email:          "john@example.com",
		Password:       "123456",
		Role:           "Founder",
		GithubUrl:      "https://github.com/charmingruby",
		AvatarUrl:      "https://github.com/charmingruby.png",
		OccupationArea: "Backend Developer",
	}

	developer := NewDeveloper(args)

	require.NotEmpty(t, developer)
}
