/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Race } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Divider,
  Flex,
  Grid,
  Heading,
  SelectField,
  Text,
  TextField,
} from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function RaceCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    finishHour: undefined,
    finishMin: undefined,
    finishSec: undefined,
    raceDate: undefined,
    raceName: undefined,
    firstName: undefined,
    middleName: undefined,
    lastName: undefined,
    gender: undefined,
    dob: undefined,
    email: undefined,
  };
  const [finishHour, setFinishHour] = React.useState(initialValues.finishHour);
  const [finishMin, setFinishMin] = React.useState(initialValues.finishMin);
  const [finishSec, setFinishSec] = React.useState(initialValues.finishSec);
  const [raceDate, setRaceDate] = React.useState(initialValues.raceDate);
  const [raceName, setRaceName] = React.useState(initialValues.raceName);
  const [firstName, setFirstName] = React.useState(initialValues.firstName);
  const [middleName, setMiddleName] = React.useState(initialValues.middleName);
  const [lastName, setLastName] = React.useState(initialValues.lastName);
  const [gender, setGender] = React.useState(initialValues.gender);
  const [dob, setDob] = React.useState(initialValues.dob);
  const [email, setEmail] = React.useState(initialValues.email);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setFinishHour(initialValues.finishHour);
    setFinishMin(initialValues.finishMin);
    setFinishSec(initialValues.finishSec);
    setRaceDate(initialValues.raceDate);
    setRaceName(initialValues.raceName);
    setFirstName(initialValues.firstName);
    setMiddleName(initialValues.middleName);
    setLastName(initialValues.lastName);
    setGender(initialValues.gender);
    setDob(initialValues.dob);
    setEmail(initialValues.email);
    setErrors({});
  };
  const validations = {
    finishHour: [{ type: "Required" }],
    finishMin: [
      {
        type: "LessThanNum",
        numValues: [60],
        validationMessage: "The value must be less than 60",
      },
    ],
    finishSec: [
      {
        type: "LessThanNum",
        numValues: [60],
        validationMessage: "The value must be less than 60",
      },
    ],
    raceDate: [{ type: "Required" }],
    raceName: [{ type: "Required" }],
    firstName: [{ type: "Required" }],
    middleName: [],
    lastName: [{ type: "Required" }],
    gender: [{ type: "Required" }],
    dob: [],
    email: [{ type: "Email" }],
  };
  const runValidationTasks = async (fieldName, value) => {
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          finishHour,
          finishMin,
          finishSec,
          raceDate,
          raceName,
          firstName,
          middleName,
          lastName,
          gender,
          dob,
          email,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          await DataStore.save(new Race(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...rest}
      {...getOverrideProps(overrides, "RaceCreateForm")}
    >
      <Heading
        children="Enter calendar year 2022 personal best  marathon race finishing time"
        {...getOverrideProps(overrides, "SectionalElement2")}
      ></Heading>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(4, auto)"
        {...getOverrideProps(overrides, "RowGrid1")}
      >
        <TextField
          label="Finish hour"
          isRequired={true}
          isReadOnly={false}
          type="number"
          step="any"
          onChange={(e) => {
            let value = parseInt(e.target.value);
            if (isNaN(value)) {
              setErrors((errors) => ({
                ...errors,
                finishHour: "Value must be a valid number",
              }));
              return;
            }
            if (onChange) {
              const modelFields = {
                finishHour: value,
                finishMin,
                finishSec,
                raceDate,
                raceName,
                firstName,
                middleName,
                lastName,
                gender,
                dob,
                email,
              };
              const result = onChange(modelFields);
              value = result?.finishHour ?? value;
            }
            if (errors.finishHour?.hasError) {
              runValidationTasks("finishHour", value);
            }
            setFinishHour(value);
          }}
          onBlur={() => runValidationTasks("finishHour", finishHour)}
          errorMessage={errors.finishHour?.errorMessage}
          hasError={errors.finishHour?.hasError}
          {...getOverrideProps(overrides, "finishHour")}
        ></TextField>
        <TextField
          label="Finish min"
          isRequired={false}
          isReadOnly={false}
          type="number"
          step="any"
          onChange={(e) => {
            let value = parseInt(e.target.value);
            if (isNaN(value)) {
              setErrors((errors) => ({
                ...errors,
                finishMin: "Value must be a valid number",
              }));
              return;
            }
            if (onChange) {
              const modelFields = {
                finishHour,
                finishMin: value,
                finishSec,
                raceDate,
                raceName,
                firstName,
                middleName,
                lastName,
                gender,
                dob,
                email,
              };
              const result = onChange(modelFields);
              value = result?.finishMin ?? value;
            }
            if (errors.finishMin?.hasError) {
              runValidationTasks("finishMin", value);
            }
            setFinishMin(value);
          }}
          onBlur={() => runValidationTasks("finishMin", finishMin)}
          errorMessage={errors.finishMin?.errorMessage}
          hasError={errors.finishMin?.hasError}
          {...getOverrideProps(overrides, "finishMin")}
        ></TextField>
        <TextField
          label="Finish sec"
          isRequired={false}
          isReadOnly={false}
          type="number"
          step="any"
          onChange={(e) => {
            let value = parseInt(e.target.value);
            if (isNaN(value)) {
              setErrors((errors) => ({
                ...errors,
                finishSec: "Value must be a valid number",
              }));
              return;
            }
            if (onChange) {
              const modelFields = {
                finishHour,
                finishMin,
                finishSec: value,
                raceDate,
                raceName,
                firstName,
                middleName,
                lastName,
                gender,
                dob,
                email,
              };
              const result = onChange(modelFields);
              value = result?.finishSec ?? value;
            }
            if (errors.finishSec?.hasError) {
              runValidationTasks("finishSec", value);
            }
            setFinishSec(value);
          }}
          onBlur={() => runValidationTasks("finishSec", finishSec)}
          errorMessage={errors.finishSec?.errorMessage}
          hasError={errors.finishSec?.hasError}
          {...getOverrideProps(overrides, "finishSec")}
        ></TextField>
        <TextField
          label="Race date"
          isRequired={true}
          isReadOnly={false}
          type="date"
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                finishHour,
                finishMin,
                finishSec,
                raceDate: value,
                raceName,
                firstName,
                middleName,
                lastName,
                gender,
                dob,
                email,
              };
              const result = onChange(modelFields);
              value = result?.raceDate ?? value;
            }
            if (errors.raceDate?.hasError) {
              runValidationTasks("raceDate", value);
            }
            setRaceDate(value);
          }}
          onBlur={() => runValidationTasks("raceDate", raceDate)}
          errorMessage={errors.raceDate?.errorMessage}
          hasError={errors.raceDate?.hasError}
          {...getOverrideProps(overrides, "raceDate")}
        ></TextField>
      </Grid>
      <TextField
        label="Race name"
        isRequired={true}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              finishHour,
              finishMin,
              finishSec,
              raceDate,
              raceName: value,
              firstName,
              middleName,
              lastName,
              gender,
              dob,
              email,
            };
            const result = onChange(modelFields);
            value = result?.raceName ?? value;
          }
          if (errors.raceName?.hasError) {
            runValidationTasks("raceName", value);
          }
          setRaceName(value);
        }}
        onBlur={() => runValidationTasks("raceName", raceName)}
        errorMessage={errors.raceName?.errorMessage}
        hasError={errors.raceName?.hasError}
        {...getOverrideProps(overrides, "raceName")}
      ></TextField>
      <Divider
        orientation="horizontal"
        {...getOverrideProps(overrides, "SectionalElement1")}
      ></Divider>
      <Text
        children="Please provide name used for race registration"
        {...getOverrideProps(overrides, "SectionalElement0")}
      ></Text>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(3, auto)"
        {...getOverrideProps(overrides, "RowGrid5")}
      >
        <TextField
          label="First name"
          isRequired={true}
          isReadOnly={false}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                finishHour,
                finishMin,
                finishSec,
                raceDate,
                raceName,
                firstName: value,
                middleName,
                lastName,
                gender,
                dob,
                email,
              };
              const result = onChange(modelFields);
              value = result?.firstName ?? value;
            }
            if (errors.firstName?.hasError) {
              runValidationTasks("firstName", value);
            }
            setFirstName(value);
          }}
          onBlur={() => runValidationTasks("firstName", firstName)}
          errorMessage={errors.firstName?.errorMessage}
          hasError={errors.firstName?.hasError}
          {...getOverrideProps(overrides, "firstName")}
        ></TextField>
        <TextField
          label="Middle name"
          isRequired={false}
          isReadOnly={false}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                finishHour,
                finishMin,
                finishSec,
                raceDate,
                raceName,
                firstName,
                middleName: value,
                lastName,
                gender,
                dob,
                email,
              };
              const result = onChange(modelFields);
              value = result?.middleName ?? value;
            }
            if (errors.middleName?.hasError) {
              runValidationTasks("middleName", value);
            }
            setMiddleName(value);
          }}
          onBlur={() => runValidationTasks("middleName", middleName)}
          errorMessage={errors.middleName?.errorMessage}
          hasError={errors.middleName?.hasError}
          {...getOverrideProps(overrides, "middleName")}
        ></TextField>
        <TextField
          label="Last name"
          isRequired={true}
          isReadOnly={false}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                finishHour,
                finishMin,
                finishSec,
                raceDate,
                raceName,
                firstName,
                middleName,
                lastName: value,
                gender,
                dob,
                email,
              };
              const result = onChange(modelFields);
              value = result?.lastName ?? value;
            }
            if (errors.lastName?.hasError) {
              runValidationTasks("lastName", value);
            }
            setLastName(value);
          }}
          onBlur={() => runValidationTasks("lastName", lastName)}
          errorMessage={errors.lastName?.errorMessage}
          hasError={errors.lastName?.hasError}
          {...getOverrideProps(overrides, "lastName")}
        ></TextField>
      </Grid>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid6")}
      >
        <SelectField
          label="Gender"
          placeholder="Please select an option"
          isDisabled={false}
          value={gender}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                finishHour,
                finishMin,
                finishSec,
                raceDate,
                raceName,
                firstName,
                middleName,
                lastName,
                gender: value,
                dob,
                email,
              };
              const result = onChange(modelFields);
              value = result?.gender ?? value;
            }
            if (errors.gender?.hasError) {
              runValidationTasks("gender", value);
            }
            setGender(value);
          }}
          onBlur={() => runValidationTasks("gender", gender)}
          errorMessage={errors.gender?.errorMessage}
          hasError={errors.gender?.hasError}
          {...getOverrideProps(overrides, "gender")}
        >
          <option
            children="Male"
            value="MALE"
            {...getOverrideProps(overrides, "genderoption0")}
          ></option>
          <option
            children="Female"
            value="FEMALE"
            {...getOverrideProps(overrides, "genderoption1")}
          ></option>
          <option
            children="Nonbinary"
            value="NONBINARY"
            {...getOverrideProps(overrides, "genderoption2")}
          ></option>
        </SelectField>
        <TextField
          label="Dob"
          isRequired={false}
          isReadOnly={false}
          type="date"
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                finishHour,
                finishMin,
                finishSec,
                raceDate,
                raceName,
                firstName,
                middleName,
                lastName,
                gender,
                dob: value,
                email,
              };
              const result = onChange(modelFields);
              value = result?.dob ?? value;
            }
            if (errors.dob?.hasError) {
              runValidationTasks("dob", value);
            }
            setDob(value);
          }}
          onBlur={() => runValidationTasks("dob", dob)}
          errorMessage={errors.dob?.errorMessage}
          hasError={errors.dob?.hasError}
          {...getOverrideProps(overrides, "dob")}
        ></TextField>
      </Grid>
      <TextField
        label="Email"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              finishHour,
              finishMin,
              finishSec,
              raceDate,
              raceName,
              firstName,
              middleName,
              lastName,
              gender,
              dob,
              email: value,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Enter best race finishing time to join the ranking"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
