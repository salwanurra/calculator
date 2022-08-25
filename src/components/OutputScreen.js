import React from 'react';

const OutputScreen = (props) => {
return (
	<div className="screen">
		<div className="screen-row">
			<input id="question" type="text" readOnly value={props.question}/>
			<input id="answer" type="text" readOnly value={props.answer}/>
		</div>
	</div>
)
}

export default OutputScreen;
