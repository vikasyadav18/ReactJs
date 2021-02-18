import Paragraph,{name,address, heading} from './Paragraph';

function ImportExport()
{
    return (
        <>
        <Paragraph/>
        {name}
        {address}
        {heading(4,5)}
        </>
    );
}

export default ImportExport;