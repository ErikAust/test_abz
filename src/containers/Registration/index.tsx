import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../redux/store";
import { thunkGetPositions, thunkUserRegistration } from "../../redux/thunk";
import Input from "../../components/Input";
import Button from "../../components/Button";
import RadioButtom from "../../components/RadioButton";
import PhotoInput from "../../components/PhotoInput";
import Spinner from "../../components/Spinner";
import { IInitialState, IPosition, IUserRegistration } from "../../interfaces";
import { useValidator } from "../../hooks/useValidator";
import { initialUserState } from "../../utils/helpers";

import "./style.scss";

const Registration = () => {
  const dispatch = useAppDispatch();
  const { positions, error, successRegistration, isLoading } = useSelector(
    (state: IInitialState) => state
  );
  const {
    validators,
    validatorHandler,
    photoValidatorHandler,
    FocusHandler,
    isAllFieldsValid,
  } = useValidator();
  const [filename, setFilename] = useState<string>("");
  const [user, setUser] = useState<IUserRegistration>(initialUserState);
  const [checkedPosition, setCheckedPosition] = useState<boolean[]>([
    true,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    if (!positions.length) {
      dispatch(thunkGetPositions());
    }
  }, []);

  const changePositionHandler = (event: React.MouseEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;

    setCheckedPosition((prevState) =>
      prevState.map((elem: boolean, i: number) => i === +target.id - 1)
    );

    setUser((prevState) => ({ ...prevState, position_id: +target.id }));
  };

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const reset = () => {
    setUser(initialUserState);
    setCheckedPosition([true, false, false, false]);
    setFilename("");
  };

  const registration = async () => {
    await dispatch(thunkUserRegistration(user, reset));
  };

  const changePhotoHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;

    if (fileList && fileList.length > 0) {
      const file = fileList[0];
      setFilename(file.name);
      setUser((prevState) => ({
        ...prevState,
        photo: file,
      }));

      const reader = new FileReader();

      reader.onload = (event: ProgressEvent<FileReader>) => {
        const image = new Image();
        image.src = event.target?.result as string;
        image.onload = () => {
          photoValidatorHandler(image.width, image.height, file.size);
        };
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="registration">
      <h1 className="registration--header">Working with POST request</h1>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <form className="registration--form" role="form">
            <Input
              type="text"
              value={user.name}
              name="name"
              onFocus={FocusHandler}
              onChange={changeHandler}
              onBlur={validatorHandler}
              placeholder="Your name"
              errorStatus={validators.name.errorStatus}
              errorMsg={validators.name.errorMessage}
            />
            <Input
              type="email"
              value={user.email}
              name="email"
              onFocus={FocusHandler}
              onChange={changeHandler}
              onBlur={validatorHandler}
              placeholder="Email"
              errorStatus={validators.email.errorStatus}
              errorMsg={validators.email.errorMessage}
            />
            <Input
              type="text"
              value={user.phone}
              name="phone"
              onFocus={FocusHandler}
              onChange={changeHandler}
              onBlur={validatorHandler}
              placeholder="Phone"
              errorStatus={validators.phone.errorStatus}
              errorMsg={validators.phone.errorMessage}
              helperText="+38 (XXX) XXX - XX - XX"
            />
            <div className="registration--form--position">
              <p className="registration--form--position--title">
                Select your position
              </p>
              {positions.map((position: IPosition) => (
                <RadioButtom
                  id={position.id}
                  key={position.id}
                  name={position.name}
                  onClick={changePositionHandler}
                  checked={checkedPosition[position.id - 1]}
                />
              ))}
            </div>
            <PhotoInput
              filename={filename}
              onFocus={FocusHandler}
              onChange={changePhotoHandler}
              errorStatus={validators.photo.errorStatus}
              errorMsg={validators.photo.errorMessage}
            />
          </form>
          <Button
            title="Sign up"
            onClick={registration}
            disabled={isAllFieldsValid(user)}
          />
        </>
      )}
      {!!error && <span className="registration--span--error">{error}</span>}
      {successRegistration && (
        <div className="registration--success">
          <h1 className="registration--success--title">
            User successfully registered
          </h1>
          <img
            src="./assets/images/success-image.svg"
            alt="success"
            width={328}
            height={290}
          />
        </div>
      )}
    </section>
  );
};

export default Registration;
