import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import RootLayout from "../src/common/layout/RootLayout/RootLayout";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider attribute="class">
			<Head>
				<title>Table app</title>
			</Head>
			<RootLayout>
				<Component {...pageProps} />
			</RootLayout>
		</ThemeProvider>
	);
}

export default MyApp;
