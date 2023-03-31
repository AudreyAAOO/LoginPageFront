import React from "react";
import "../assets/css/modal.css";

const Modal3 = ({ setVisible3 }) => {
	return (
		<div>
			<div
				className="container_modal"
				onClick={() => {
					setVisible3(false);
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
							setVisible3(false);
						}}
					>
						X
					</button>
					3ème modal TEXTE 3
				</div>
			</div>
		</div>
	);
};

export default Modal3;
