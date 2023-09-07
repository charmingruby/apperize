package usecases

import (
	"testing"

	"github.com/charmingruby/wisp/internal/domain/entity"
	"github.com/charmingruby/wisp/internal/domain/exceptions"
	inmemorydatabases "github.com/charmingruby/wisp/internal/test/in-memory-databases"
	"github.com/charmingruby/wisp/internal/utils"
	"github.com/stretchr/testify/require"
)

func TestShouldBeAbleToRegisterAnUser(t *testing.T) {
	imb := inmemorydatabases.NewDevelopersInMemoryDatabase()

	uc := RegisterUser{
		DevelopersRepository: imb,
	}

	password := "random_password"

	newDeveloperArgs := entity.CreateDeveloperParams{
		Name:           utils.RandomName(),
		LastName:       utils.RandomLastName(),
		Email:          utils.RandomEmail(),
		Password:       password,
		Role:           utils.RandomRole(),
		GithubUser:     utils.RandomGithubUser(),
		AvatarUrl:      utils.RandomAvatarUrl(),
		OccupationArea: utils.RandomOccupationArea(),
	}

	developer, err := uc.Execute(RegisterUserInput{
		Name:           newDeveloperArgs.Name,
		LastName:       newDeveloperArgs.LastName,
		Email:          newDeveloperArgs.Email,
		Password:       newDeveloperArgs.Password,
		Role:           newDeveloperArgs.Password,
		GithubUser:     newDeveloperArgs.GithubUser,
		AvatarUrl:      newDeveloperArgs.AvatarUrl,
		OccupationArea: newDeveloperArgs.OccupationArea,
	})

	imbLen := len(imb.Devs)

	require.NoError(t, err)
	require.Equal(t, imbLen, 1)
	require.Equal(t, imb.Devs[0].ID, developer.ID)
	require.NotEqual(t, &developer, password)
}

func TestShouldNotBeAbleToRegisterAUserWithSameEmail(t *testing.T) {
	imb := inmemorydatabases.NewDevelopersInMemoryDatabase()

	args1 := entity.CreateDeveloperParams{
		Name:           utils.RandomName(),
		LastName:       utils.RandomLastName(),
		Email:          "john@example.com",
		Password:       utils.RandomEmail(),
		Role:           utils.RandomRole(),
		GithubUser:     utils.RandomGithubUser(),
		AvatarUrl:      utils.RandomAvatarUrl(),
		OccupationArea: utils.RandomOccupationArea(),
	}

	developer1 := *entity.NewDeveloper(args1)

	imb.Store(&developer1)

	uc := RegisterUser{
		DevelopersRepository: imb,
	}

	result, err := uc.Execute(RegisterUserInput{
		Name:           utils.RandomName(),
		LastName:       utils.RandomLastName(),
		Email:          "john@example.com",
		Password:       "random_password",
		Role:           utils.RandomRole(),
		GithubUser:     utils.RandomGithubUser(),
		AvatarUrl:      utils.RandomAvatarUrl(),
		OccupationArea: utils.RandomOccupationArea(),
	})

	println(result)

	expectedErr := exceptions.AlreadyInUseError("email")

	require.Error(t, err)
	require.EqualError(t, err, expectedErr.Error())
	require.Empty(t, result)
	require.Equal(t, result.Password, "random_password")
}

func TestShouldNotBeAbleToRegisterAUserWithSameGithubUser(t *testing.T) {
	imb := inmemorydatabases.NewDevelopersInMemoryDatabase()

	args1 := entity.CreateDeveloperParams{
		Name:           utils.RandomName(),
		LastName:       utils.RandomLastName(),
		Email:          utils.RandomEmail(),
		Password:       utils.RandomEmail(),
		Role:           utils.RandomRole(),
		GithubUser:     "charmingruby",
		AvatarUrl:      utils.RandomAvatarUrl(),
		OccupationArea: utils.RandomOccupationArea(),
	}

	developer1 := *entity.NewDeveloper(args1)

	imb.Store(&developer1)

	uc := RegisterUser{
		DevelopersRepository: imb,
	}

	result, err := uc.Execute(RegisterUserInput{
		Name:           utils.RandomName(),
		LastName:       utils.RandomLastName(),
		Email:          utils.RandomEmail(),
		Password:       utils.RandomEmail(),
		Role:           utils.RandomRole(),
		GithubUser:     "charmingruby",
		AvatarUrl:      utils.RandomAvatarUrl(),
		OccupationArea: utils.RandomOccupationArea(),
	})

	expectedErr := exceptions.AlreadyInUseError("github user")

	require.Error(t, err)
	require.EqualError(t, err, expectedErr.Error())
	require.Empty(t, result)
}
