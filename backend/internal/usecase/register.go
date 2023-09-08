package usecases

import (
	"github.com/charmingruby/wisp/internal/domain/entity"
	"github.com/charmingruby/wisp/internal/domain/exception"
	interfaces "github.com/charmingruby/wisp/internal/domain/interface"
	"github.com/charmingruby/wisp/pkg/bcrypt"
)

type RegisterUserInput struct {
	Name           string
	LastName       string
	Email          string
	Password       string
	Role           string
	GithubUser     string
	AvatarUrl      string
	OccupationArea string
}

type RegisterUser struct {
	DevelopersRepository interfaces.DeveloperRepositoryInterface
}

func (c *RegisterUser) Execute(input RegisterUserInput) (*entity.Developer, error) {
	_, err := c.DevelopersRepository.GetByEmail(input.Email)

	if err == nil {
		return nil, exception.AlreadyInUseError("email")
	}

	_, err = c.DevelopersRepository.GetByGithubUser(input.GithubUser)
	if err == nil {
		return nil, exception.AlreadyInUseError("github user")
	}

	hashedPassword := bcrypt.GenerateValueHash(input.Password)

	developer := entity.NewDeveloper(entity.CreateDeveloperParams{
		Name:           input.Name,
		LastName:       input.LastName,
		Email:          input.Email,
		Password:       hashedPassword,
		Role:           input.Password,
		GithubUser:     input.GithubUser,
		AvatarUrl:      input.AvatarUrl,
		OccupationArea: input.OccupationArea,
	})

	c.DevelopersRepository.Store(developer)

	return developer, nil
}
