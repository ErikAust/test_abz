import { useState } from "react";
import { IErrorStates, IUserRegistration } from "../interfaces";
import {
  ErrorMessages,
  FieldRequirements,
  emailPattern,
  phoneNumberPattern,
} from "../utils/helpers";

export const useValidator = (): {
  validators: IErrorStates;
  validatorHandler: (event: React.FocusEvent<HTMLInputElement>) => void;
  photoValidatorHandler: (width: number, height: number, size: number) => void;
  FocusHandler: (event: React.FocusEvent<HTMLInputElement>) => void;
  isAllFieldsValid: (user: IUserRegistration) => boolean;
} => {
  const [validators, setValidators] = useState<IErrorStates>({
    name: {
      errorStatus: false,
      errorMessage: ErrorMessages.validNameMsg,
    },
    email: {
      errorStatus: false,
      errorMessage: ErrorMessages.validEmailMsg,
    },
    phone: {
      errorStatus: false,
      errorMessage: ErrorMessages.validPhoneMsg,
    },
    photo: {
      errorStatus: false,
      errorMessage: ErrorMessages.validPhotoMsg,
    },
  });

  const validatorHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    const field = event.target.name;
    const value = event.target.value;
    switch (field) {
      case "name":
        setValidators({
          ...validators,
          name: {
            errorMessage: ErrorMessages.validNameMsg,
            errorStatus: !(
              value.length >= FieldRequirements.minLength &&
              value.length <= FieldRequirements.maxLength
            ),
          },
        });
        break;
      case "email":
        setValidators({
          ...validators,
          email: {
            errorMessage: ErrorMessages.validEmailMsg,
            errorStatus: !emailPattern.test(value),
          },
        });
        break;
      case "phone":
        setValidators({
          ...validators,
          phone: {
            errorMessage: ErrorMessages.validPhoneMsg,
            errorStatus: !phoneNumberPattern.test(value),
          },
        });
        break;
      default:
        break;
    }
  };

  const photoValidatorHandler = (
    width: number,
    height: number,
    size: number
  ) => {
    if (!validators.photo.errorStatus) {
      setValidators({
        ...validators,
        photo: {
          errorMessage: ErrorMessages.validPhotoMsg,
          errorStatus: !(
            width > FieldRequirements.photoWidthHeightMin &&
            height > FieldRequirements.photoWidthHeightMin &&
            size < FieldRequirements.photoSizeMax
          ),
        },
      });
    }
  };

  const FocusHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    const field = event.target.name as keyof IErrorStates;
    setValidators({
      ...validators,
      [field]: {
        ...validators[field],
        errorStatus: false,
      },
    });
  };

  const isAllFieldsValid = (user: IUserRegistration) =>
    !(
      !validators.name.errorStatus &&
      !validators.email.errorStatus &&
      !validators.phone.errorStatus &&
      !validators.photo.errorStatus &&
      Object.values(user).every((value) => value)
    );

  return {
    validators,
    validatorHandler,
    photoValidatorHandler,
    FocusHandler,
    isAllFieldsValid,
  };
};
