package mock

import (
	"github.com/charmingruby/wisp/internal/domain/entity"
	"github.com/charmingruby/wisp/internal/domain/exception"
	interfaces "github.com/charmingruby/wisp/internal/domain/interface"
	"github.com/charmingruby/wisp/internal/util"
	"github.com/charmingruby/wisp/pkg/bcrypt"
)

func RegisterDeveloperMock(email, password string, imb interfaces.DeveloperRepositoryInterface) (*entity.Developer, error) {
	_, err := imb.GetByEmail(email)
	if err == nil {
		return nil, exception.AlreadyInUseError("email")
	}

	hashedPassword := bcrypt.GenerateValueHash(password)

	args := entity.CreateDeveloperParams{
		Name:           util.RandomName(),
		LastName:       util.RandomLastName(),
		Email:          email,
		Password:       hashedPassword,
		Role:           util.RandomRole(),
		GithubUser:     util.RandomGithubUser(),
		AvatarUrl:      util.RandomAvatarUrl(),
		OccupationArea: util.RandomOccupationArea(),
	}

	newDeveloper := entity.NewDeveloper(args)

	imb.Store(newDeveloper)

	return newDeveloper, nil
}
