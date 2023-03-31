import React from 'react';
import "../assets/css/modal.css";

const Modal2 = ({ setVisible2 }) => {
	return (
		<div>
			<div
				className="container_modal"
				onClick={() => {
					setVisible2(false);
				}}
			>
				<div
					className="modal"
					onClick={(event) => {
						event.stopPropagation();
					}}
				>
					{/* button pour fermer la modal */}
					<button
						onClick={() => {
							setVisible2(false);
						}}
					>
						X
					</button>
					TEXTE 2
				</div>
			</div>
		</div>
	);
};

export default Modal2;
