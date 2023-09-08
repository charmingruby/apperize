package exception

import "errors"

func NotFoundError(field string) error {
	message := field + " not found"

	return errors.New(message)
}
