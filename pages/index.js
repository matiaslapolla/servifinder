import Head from "next/head";
import NavBar from "../components/navBar";
import Hero from "../components/hero";

export default function Home() {
	return (
		<>
			<Head>
				<title>ServiFinder</title>
				<meta name="description" content="ServiFinder App" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<>
				<NavBar />
				<Hero />
			</>
		</>
	);
}
