import {useEffect, useState} from "react";

export const useValidation = (value, validations) => {
    const [isEmpty, setEmpty] = useState(true);
    const [minLengthError, setMinLengthError] = useState(false);

    const errorMessages = {
        length: "Некорреткная длина",
        empty: "Поле не может быть пустым",
    };

    useEffect(() => {
        for (const valid in validations) {
            switch (valid) {
                case "isEmpty":
                    value ? setEmpty(false) : setEmpty(true);
                    break;
                case "minLength":
                    value.length < validations[valid]
                        ? setMinLengthError(true)
                        : setMinLengthError(false);
                    break;
                default:
                    break;
            }
        }
    }, [value, validations]);

    return {
        isEmpty,
        minLengthError,
        errorMessages,
    };
};
