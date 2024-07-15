import type { NextPage } from "next";
import { Link } from "../components/Link";

const Home: NextPage = () => {
	return (
		<>
			<div className="px-16 w-fit mt-14 md:mt-28">
				<div className="mb-10 text-xl">
					<h1 className="text-text-color inline-block mr-4">hayasaka.moe</h1>
					<a
						href="https://github.com/jckli"
						className="inline-block text-text-darkest transition-all ease-in-out duration-300 hover:text-pink-accent"
					>
						(project hub for @jckli)
					</a>
				</div>
				<div className="flex flex-col text-md text-text-darker">
					<Link
						title="gitcloser"
						url="gitcloser.hayasaka.moe"
						description="find how close you are to another github user in less than 20 seconds"
					/>
					<Link
						title="retrievify"
						url="retrievify.hayasaka.moe"
						description="see how youve spent your time listening to music on spotify"
					/>
					<Link
						title="sugoiart"
						url="art.hayasaka.moe"
						description="a simple, fast, and open source art api"
					/>
					<Link
						title="pximg"
						url="pximg.jackli.dev"
						description="a pixiv image proxy, random image fetcher, and api"
					/>
					<Link
						title="reddit"
						url="reddit.jackli.dev"
						description="fetch random images from various different subreddits with ease"
					/>
					<Link
						title="tsuuchi/mangaupdates bot"
						url="tsuuchi.hayasaka.moe"
						description="a website to showcase the mangaupdates discord bot"
					/>
					<Link
						title="picsiv"
						url="picsiv.hayasaka.moe"
						description="a website to showcase the picsiv discord bot"
					/>
				</div>
			</div>
		</>
	);
};

export default Home;
