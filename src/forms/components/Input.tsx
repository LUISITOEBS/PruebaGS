interface Props {
    classNameLabel?: string;
    classNameInput?: string;
    label?: string;
    type: 'text' | 'email' | 'date';
    placeholder?: string;
    getFieldProps: any;
    disabled?: boolean;
    touched: any;
    errors: any;
}

export const Input = ( { type, classNameLabel, classNameInput, label, getFieldProps, disabled = false, touched, errors, placeholder }: Props ) => {
    return (
        <>
            <label className={ classNameLabel }  htmlFor="idProject">
                { label }
            </label>
            <input
                className={ classNameInput } 
                type={ type }
                placeholder={ placeholder }
                { ...getFieldProps }
                disabled = { disabled }
            />
            { errors && touched && <span className="error-message">{ errors }</span>}
        </>
    )
}
