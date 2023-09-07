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
		GithubUser:     "charmingruby",
		AvatarUrl:      "https://github.com/charmingruby.png",
		OccupationArea: "Backend Developer",
	}

	developer := NewDeveloper(args)

	require.NotEmpty(t, developer)

	require.Equal(t, developer.Name, args.Name)
	require.Equal(t, developer.LastName, args.LastName)
	require.Equal(t, developer.Email, args.Email)
	require.Equal(t, developer.Password, args.Password)
	require.Equal(t, developer.AvatarUrl, args.AvatarUrl)
	require.Equal(t, developer.GithubUser, args.GithubUser)
	require.Equal(t, developer.OccupationArea, args.OccupationArea)
	require.Equal(t, developer.Role, args.Role)

	require.NotZero(t, developer.ID)
	require.NotZero(t, developer.CreatedAt)
}
