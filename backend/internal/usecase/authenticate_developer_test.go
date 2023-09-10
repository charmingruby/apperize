package usecases

import (
	"testing"

	"github.com/charmingruby/wisp/internal/domain/exception"
	inmemorydatabase "github.com/charmingruby/wisp/internal/test/in-memory-database"
	"github.com/charmingruby/wisp/internal/test/mock"
	"github.com/charmingruby/wisp/internal/util"
	"github.com/stretchr/testify/require"
	"golang.org/x/crypto/bcrypt"
)

func TestShouldBeAbleToAuthenticateDeveloperWithValidCredentials(t *testing.T) {
	imb := inmemorydatabase.NewDevelopersInMemoryDatabase()

	email := util.RandomEmail()
	password := util.RandomPassword()

	mockedDeveloper, _ := mock.RegisterDeveloperMock(email, password, imb)

	uc := AuthenticateDeveloper{
		DevelopersRepository: imb,
	}

	developer, err := uc.Execute(AuthenticateDeveloperInput{
		Email:    email,
		Password: password,
	})

	imbLen := len(imb.Devs)
	require.Equal(t, imbLen, 1)
	require.NoError(t, err)
	require.Equal(t, developer.Developer.ID, mockedDeveloper.ID)
	require.Equal(t, developer.Developer.Email, mockedDeveloper.Email)
}

func TestShouldNotBeAbleToAuthenticateWithInvalidPassword(t *testing.T) {
	imb := inmemorydatabase.NewDevelopersInMemoryDatabase()

	email := util.RandomEmail()
	password := util.RandomPassword()

	mock.RegisterDeveloperMock(email, password, imb)

	uc := AuthenticateDeveloper{
		DevelopersRepository: imb,
	}

	developer, err := uc.Execute(AuthenticateDeveloperInput{
		Email:    email,
		Password: "wrong password",
	})

	requireErr := bcrypt.ErrMismatchedHashAndPassword

	require.Error(t, err)
	require.Empty(t, developer)
	require.EqualError(t, requireErr, err.Error())
}

func TestShouldNotBeAbleToAuthenticateDeveloperWithInvalidEmail(t *testing.T) {
	imb := inmemorydatabase.NewDevelopersInMemoryDatabase()

	email := util.RandomEmail()
	password := util.RandomPassword()

	mock.RegisterDeveloperMock(email, password, imb)

	uc := AuthenticateDeveloper{
		DevelopersRepository: imb,
	}

	developer, err := uc.Execute(AuthenticateDeveloperInput{
		Email:    "wrong email",
		Password: password,
	})

	requiredErr := exception.NotFoundError("developer")

	require.Error(t, err)
	require.EqualError(t, requiredErr, err.Error())
	require.Empty(t, developer)
}
