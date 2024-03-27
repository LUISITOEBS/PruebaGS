import { Image, TabulatorText } from ".";

interface Props {
    src: string;
    text: string;
}

export const TabulatorElement = ( {  src, text }: Props ) => {
    return (
        <div className="tabulator-element d-flex flex-row align-items-center">
            <div className='mx-2'>
                <Image
                    className='tabulator-image'
                    src={ src }
                    alt={ text }
                />
            </div>
            <div className='d-flex align-items-center'>
                <TabulatorText text={ text }/>
            </div>
        </div>
    )
}
