package usecases

import (
	"testing"

	"github.com/charmingruby/wisp/internal/domain/entity"
	inmemorydatabases "github.com/charmingruby/wisp/internal/test/in-memory-databases"
	"github.com/charmingruby/wisp/internal/utils"
	"github.com/stretchr/testify/require"
)

func TestShouldBeAbleToRegisterAUser(t *testing.T) {
	imb := inmemorydatabases.NewDevelopersInMemoryDatabase()

	newDeveloperArgs := entity.CreateDeveloperParams{
		Name:           utils.RandomName(),
		LastName:       utils.RandomLastName(),
		Email:          utils.RandomEmail(),
		Password:       utils.RandomEmail(),
		Role:           utils.RandomRole(),
		GithubUser:     utils.RandomGithubUser(),
		AvatarUrl:      utils.RandomAvatarUrl(),
		OccupationArea: utils.RandomOccupationArea(),
	}

	developer := entity.NewDeveloper(newDeveloperArgs)

	imb.Store(developer)

	imbLen := len(imb.Devs)

	require.Equal(t, imbLen, 1)
	require.Equal(t, imb.Devs[0].ID, developer.ID)
}
