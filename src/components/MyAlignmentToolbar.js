import { BlockAlignmentToolbar, BlockControls } from '@wordpress/block-editor';

const whichWidth = (alignment) => {
    if(alignment === 'full')
        return '-webkit-fill-available';
    else if(alignment === 'wide')
        return "1000px";
    else 
        return "650px";
}
//textAlign: 'right',

const MyAlignmentToolbar = (props) => (
	<BlockControls group="block">
        <BlockAlignmentToolbar 
            value={ props.alignment }  
            onChange={ ( newAlignment ) => {
                props.setAttributes( { alignment: newAlignment, } ); //  === undefined ? 'none' : newAlignment 
                props.setAttributes( { maxWidth: whichWidth(newAlignment)} )
            } }/>
	</BlockControls>
);

export default MyAlignmentToolbar;

// onChange(newValue: Control | undefined): void;

/*

<AlignmentToolbar
    value={ props.alignment }
    onChange={ ( newAlignment ) => {
        setAttributes( {alignment: newAlignment === undefined ? 'left' : newAlignment,} ); // 'none'
    } }
/>

*/



/*

<AlignmentControl
			value={ "right" }
            onChange={ ( nextAlign ) => {
				setAttributes( { textAlign: nextAlign } );
			} }
		/>

*/