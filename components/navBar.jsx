import React from "react";
import { Inter } from "@next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const NavBar = () => {
	return (
		<>
			<div>
				<ul className="flex border gap-2 justify-between">
					<li>
						<Link className="font-bold" href={"/index"}>
							Inicio
						</Link>
					</li>
					<div className="flex gap-2">
						<li>
							<Link href={"/register"}>Registrarse</Link>
						</li>
						<li>
							<Link href={"/signin"}>Iniciar sesion</Link>
						</li>
					</div>
				</ul>
			</div>
		</>
	);
};

export default NavBar;
