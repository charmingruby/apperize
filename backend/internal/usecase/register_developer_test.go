package usecases

import (
	"testing"

	"github.com/charmingruby/wisp/internal/domain/entity"
	"github.com/charmingruby/wisp/internal/domain/exception"
	inmemorydatabase "github.com/charmingruby/wisp/internal/test/in-memory-database"
	"github.com/charmingruby/wisp/internal/util"
	"github.com/stretchr/testify/require"
)

func TestShouldBeAbleToRegisterADeveloper(t *testing.T) {
	imb := inmemorydatabase.NewDevelopersInMemoryDatabase()

	uc := RegisterDeveloper{
		DevelopersRepository: imb,
	}

	newDeveloperArgs := entity.CreateDeveloperParams{
		Name:           util.RandomName(),
		LastName:       util.RandomLastName(),
		Email:          util.RandomEmail(),
		Password:       util.RandomPassword(),
		Role:           util.RandomRole(),
		GithubUser:     util.RandomGithubUser(),
		AvatarUrl:      util.RandomAvatarUrl(),
		OccupationArea: util.RandomOccupationArea(),
	}

	developer, err := uc.Execute(RegisterDeveloperInput{
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
	require.NotEqual(t, developer.Password, newDeveloperArgs.Password)
}

func TestShouldNotBeAbleToRegisterADeveloperWithSameEmail(t *testing.T) {
	imb := inmemorydatabase.NewDevelopersInMemoryDatabase()

	args1 := entity.CreateDeveloperParams{
		Name:           util.RandomName(),
		LastName:       util.RandomLastName(),
		Email:          "john@example.com",
		Password:       util.RandomEmail(),
		Role:           util.RandomRole(),
		GithubUser:     util.RandomGithubUser(),
		AvatarUrl:      util.RandomAvatarUrl(),
		OccupationArea: util.RandomOccupationArea(),
	}

	developer1 := *entity.NewDeveloper(args1)

	imb.Store(&developer1)

	uc := RegisterDeveloper{
		DevelopersRepository: imb,
	}

	result, err := uc.Execute(RegisterDeveloperInput{
		Name:           util.RandomName(),
		LastName:       util.RandomLastName(),
		Email:          "john@example.com",
		Password:       util.RandomPassword(),
		Role:           util.RandomRole(),
		GithubUser:     util.RandomGithubUser(),
		AvatarUrl:      util.RandomAvatarUrl(),
		OccupationArea: util.RandomOccupationArea(),
	})

	println(result)

	expectedErr := exception.AlreadyInUseError("email")

	require.Error(t, err)
	require.EqualError(t, err, expectedErr.Error())
	require.Empty(t, &result)
}

func TestShouldNotBeAbleToRegisterADeveloperWithSameGithubUser(t *testing.T) {
	imb := inmemorydatabase.NewDevelopersInMemoryDatabase()

	args1 := entity.CreateDeveloperParams{
		Name:           util.RandomName(),
		LastName:       util.RandomLastName(),
		Email:          util.RandomEmail(),
		Password:       util.RandomEmail(),
		Role:           util.RandomRole(),
		GithubUser:     "charmingruby",
		AvatarUrl:      util.RandomAvatarUrl(),
		OccupationArea: util.RandomOccupationArea(),
	}

	developer1 := *entity.NewDeveloper(args1)

	imb.Store(&developer1)

	uc := RegisterDeveloper{
		DevelopersRepository: imb,
	}

	result, err := uc.Execute(RegisterDeveloperInput{
		Name:           util.RandomName(),
		LastName:       util.RandomLastName(),
		Email:          util.RandomEmail(),
		Password:       util.RandomEmail(),
		Role:           util.RandomRole(),
		GithubUser:     "charmingruby",
		AvatarUrl:      util.RandomAvatarUrl(),
		OccupationArea: util.RandomOccupationArea(),
	})

	expectedErr := exception.AlreadyInUseError("github user")

	require.Error(t, err)
	require.EqualError(t, err, expectedErr.Error())
	require.Empty(t, &result)
}
