import styled from "styled-components";


export const ButtonDown = styled.button `
	margin-left: 5em;
    border: 2px solid lightgrey;
	background-color: #fff;
	font-size: 16px;
	height: 2.5em;
	width: 2.5em;
	border-radius: 999px;
	position: relative;
    &:after,
	&:before {
		content: "";
		display: block;
		background-color: grey;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	
	/* &:before {
		height: 1em;
		width: 0.2em;
	} */

	&:after {
		height: 0.2em;
		width: 1em;
    }
`