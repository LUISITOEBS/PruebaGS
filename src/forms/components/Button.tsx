interface Props{ 
    type: 'submit' | 'button';
    text: string;
    onClick?: () => void 
}

export const Button = ( { type, text, onClick }: Props ) => {
    return (
        <button
            className="button-form"
            type={ type }
            onClick={ onClick }
        >
            { text }
        </button>
    )
}
