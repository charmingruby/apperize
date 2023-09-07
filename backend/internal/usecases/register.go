package usecases

import (
	"github.com/charmingruby/wisp/internal/domain/entity"
	"github.com/charmingruby/wisp/internal/domain/interfaces"
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
	if err != nil {
		return nil, err
	}

	_, err = c.DevelopersRepository.GetByGithubUser(input.GithubUser)
	if err != nil {
		return nil, err
	}

	args := entity.CreateDeveloperParams{
		Name:           input.Name,
		LastName:       input.LastName,
		Email:          input.Email,
		Password:       input.Password,
		Role:           input.Role,
		GithubUser:     input.GithubUser,
		AvatarUrl:      input.AvatarUrl,
		OccupationArea: input.OccupationArea,
	}

	developer := entity.NewDeveloper(args)
	c.DevelopersRepository.Store(developer)

	return developer, nil
}
