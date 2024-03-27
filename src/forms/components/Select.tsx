interface Props {
    classNameLabel?: string;
    classNameSelect?: string;
    label?: string;
    getFieldProps: any;
    touched: any;
    errors: any;
    children: React.ReactNode;
}

export const Select = ( { classNameLabel, classNameSelect, label, getFieldProps, touched, errors, children }: Props ) => {
    return (
        <>
            <label className={ classNameLabel }  htmlFor="idProject">
                { label }
            </label>
            <select
                className={ classNameSelect }
                { ...getFieldProps }
            >
                { children }
            </select>
            { errors && touched && <span className="error-message">{ errors }</span>}
        </>
    )
}
