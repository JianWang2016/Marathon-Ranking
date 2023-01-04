/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Race } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type RaceUpdateFormInputValues = {
    finishHour?: number;
    finishMin?: number;
    finishSec?: number;
    raceName?: string;
    raceDate?: string;
    firstName?: string;
    middleName?: string;
    lastName?: string;
    gender?: string;
    dob?: string;
    email?: string;
};
export declare type RaceUpdateFormValidationValues = {
    finishHour?: ValidationFunction<number>;
    finishMin?: ValidationFunction<number>;
    finishSec?: ValidationFunction<number>;
    raceName?: ValidationFunction<string>;
    raceDate?: ValidationFunction<string>;
    firstName?: ValidationFunction<string>;
    middleName?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    gender?: ValidationFunction<string>;
    dob?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RaceUpdateFormOverridesProps = {
    RaceUpdateFormGrid?: FormProps<GridProps>;
    finishHour?: FormProps<TextFieldProps>;
    finishMin?: FormProps<TextFieldProps>;
    finishSec?: FormProps<TextFieldProps>;
    raceName?: FormProps<TextFieldProps>;
    raceDate?: FormProps<TextFieldProps>;
    firstName?: FormProps<TextFieldProps>;
    middleName?: FormProps<TextFieldProps>;
    lastName?: FormProps<TextFieldProps>;
    gender?: FormProps<SelectFieldProps>;
    dob?: FormProps<TextFieldProps>;
    email?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RaceUpdateFormProps = React.PropsWithChildren<{
    overrides?: RaceUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    race?: Race;
    onSubmit?: (fields: RaceUpdateFormInputValues) => RaceUpdateFormInputValues;
    onSuccess?: (fields: RaceUpdateFormInputValues) => void;
    onError?: (fields: RaceUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: RaceUpdateFormInputValues) => RaceUpdateFormInputValues;
    onValidate?: RaceUpdateFormValidationValues;
} & React.CSSProperties>;
export default function RaceUpdateForm(props: RaceUpdateFormProps): React.ReactElement;
