package usecases

import (
	"github.com/charmingruby/wisp/internal/domain/entity"
	interfaces "github.com/charmingruby/wisp/internal/domain/interface"
	"github.com/charmingruby/wisp/pkg/bcrypt"
)

type AuthenticateDeveloperInput struct {
	Email    string
	Password string
}

type AuthenticateDeveloperOutput struct {
	Developer *entity.Developer
}

type AuthenticateDeveloper struct {
	DevelopersRepository interfaces.DeveloperRepositoryInterface
}

func (a *AuthenticateDeveloper) Execute(input AuthenticateDeveloperInput) (*AuthenticateDeveloperOutput, error) {
	developer, err := a.DevelopersRepository.GetByEmail(input.Email)

	if err != nil {
		return nil, err
	}

	err = bcrypt.CompareHashWithValue(developer.Password, input.Password)

	if err != nil {
		return nil, err
	}

	return &AuthenticateDeveloperOutput{
		Developer: developer,
	}, nil

}
