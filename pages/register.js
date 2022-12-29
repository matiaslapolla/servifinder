import React, { useState } from "react";

const Register = () => {
	const [formData, setFormData] = useState({
		username: "",
		name: "",
		lastName: "",
		password: "",
		email: "",
		e_username: "",
		e_name: "",
		e_lastName: "",
		e_password: "",
		e_email: "",
	});

	const handleOnChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(e);
		console.log("submitted");
	};

	return (
		<>
			<div className="flex flex-col justify-center items-center h-screen">
				<form className="border p-4 w-fit" noValidate>
					<div className="text-center mb-4 border-b-2 pb-4">
						<h6>Registrar usuario</h6>
					</div>
					<div className="gap-4 flex flex-col">
						<div className="flex flex-col gap-2">
							<label htmlFor="name">Nombre</label>
							<input
								type={"text"}
								onChange={handleOnChange}
								name={"name"}
								className="border rounded p-2"
								autoComplete="off"
								required={true}
							/>
							<div className="text-red-500">{formData.e_name}</div>
						</div>
						<div className="flex flex-col gap-2">
							<label htmlFor="surname">Apellido</label>
							<input
								type={"text"}
								onChange={handleOnChange}
								name={"surname"}
								className="border rounded p-2"
								autoComplete="off"
							/>
						</div>
						<div className="flex flex-col gap-2">
							<label htmlFor="username">Nombre de usuario</label>
							<input
								type={"text"}
								onChange={handleOnChange}
								name={"username"}
								className="border rounded p-2"
								autoComplete="off"
							/>
						</div>
						<div className="flex flex-col gap-2">
							<label htmlFor="email">Email</label>
							<input
								type={"email"}
								onChange={handleOnChange}
								name={"email"}
								className="border rounded p-2"
								autoComplete="off"
							/>
						</div>
						<div className="flex flex-col gap-2">
							<label htmlFor="pass">Contraseña</label>
							<input
								type={"password"}
								onChange={handleOnChange}
								name={"pass"}
								className="border rounded p-2"
								autoComplete="off"
							/>
						</div>
						<button
							className="p-2 bg-sky-500 text-white rounded"
							onClick={handleSubmit}
						>
							Registrarse
						</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default Register;
