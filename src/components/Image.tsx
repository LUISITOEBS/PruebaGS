
interface Props{
    className?: string;
    src: string;
    alt: string;
    styles?:  React.CSSProperties;
}

export const Image = ({ className, src, alt, styles }: Props) => {
    return (
        <img
            className={ className }
            src={ src }
            alt={ alt }
            style={ styles }
        />
    )
}
