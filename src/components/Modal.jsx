import React from "react";
import "../assets/css/modal.css";

const Modal = ({ setVisible }) => {
	return (
		<div>
			<div
				className="container_modal"
				onClick={() => {
					setVisible(false);
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
							setVisible(false);
						}}
					>
						X
					</button>
					Le défilement a du sens sur une longue page, mais la fenêtre modale ne
					contient que les informations et actions essentielles. C'est pourquoi,
					lorsque vous vous retrouvez à ajouter beaucoup de contenu dans une
					fenêtre modale, il est temps de vous arrêter et de repenser votre
					approche. Dans de nombreux cas, une page standard fonctionnera mieux
					pour vos utilisateurs. Idéalement, vous devriez mettre une phrase ou
					deux phrases dans vos fenêtres modales.
				</div>
			</div>
		</div>
	);
};

export default Modal;
