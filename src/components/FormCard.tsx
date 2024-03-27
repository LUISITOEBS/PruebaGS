interface Props {
    className?: string;
    children: JSX.Element | JSX.Element[]
}

export const FormCard = ( { className = '', children }: Props ) => {

    return (
        <div className={`${ className }  card`}>
            <div className="card-body">
                { children }
            </div>
        </div>
    )
}
