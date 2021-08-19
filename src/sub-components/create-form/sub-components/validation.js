import React, { useState, useEffect } from "react";

const useErrorValidationIndication = (
    value,
    isValueValid,
    validations,
    validationsErrorText,
    isAcceptValid,
) => {

    const [isErrorLabel, setErrorLabel] = useState(false);
    const [isErrorValueText, setErrorValueText] = useState("");

    const [isEmpty, setIsEmpty] = useState(false);
    const [isIncorrectValue, setIsIncorrectValue] = useState(false);
    const [isMinLength, setIsMinLength] = useState(false);
    const [isMaxLength, seIstMaxLength] = useState(false);

    const EMPTY_VALUE = validationsErrorText.errorEmptyValue || "EMPTY VALUE";
    const INCORRECT_VALUE = validationsErrorText.errorIncorrectValue || "INCORRECT VALUE";
    const MIN_LENGTH_VALUE = validationsErrorText.errorMinLength || "MIN LENGTH VALUE";
    const MAX_LENGTH_VALUE = validationsErrorText.errorMaxLength || "MAX LENGTH VALUE";
    const MIN_LENGTH = validations.minLength || 2;
    const MAX_LENGTH = validations.maxLength || 12;

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case 'isEmpty':
                    if (value === "" && isAcceptValid) {
                        setIsEmpty(true);
                        setErrorValueText(EMPTY_VALUE);
                    } else {
                        setIsEmpty(false);
                    }
                    break;
                case 'incorrectValue':
                    if (!isValueValid && value !== "" && isAcceptValid) {
                        setErrorValueText(INCORRECT_VALUE)
                        setIsIncorrectValue(true)
                    } else {
                        setIsIncorrectValue(false);
                    }
                    break;
                case 'minLength':
                    if (value < MIN_LENGTH && isAcceptValid) {
                        setErrorValueText(MIN_LENGTH_VALUE)
                        setIsMinLength(true)
                    } else {
                        setIsMinLength(false);
                    }
                    break;
                case 'maxLength':
                    if (!isValueValid && value > MAX_LENGTH && isAcceptValid) {
                        setErrorValueText(MAX_LENGTH_VALUE)
                        seIstMaxLength(true)
                    } else {
                        seIstMaxLength(false);
                    }
                    break;
                case 'customError':
                    break;
                default:
                    break;
            }
        }
        setErrorLabel(isEmpty || isIncorrectValue || isMinLength || isMaxLength);
    }, [value, isValueValid, isAcceptValid, validations, validationsErrorText]);

    return {
        isErrorLabel,
        isErrorValueText,
    }
};

export default useErrorValidationIndication;