import type { NextPage } from "next";
import { Link } from "../components/Link";

const Home: NextPage = () => {
    return (
        <>
            <div className="px-16 w-fit mt-14 md:mt-28">
                <div className="mb-10 text-xl">
                    <h1 className="text-text-color inline-block mr-4">
                        hayasaka.moe
                    </h1>
                    <a href="https://github.com/jckli" className="inline-block text-text-darkest transition-all ease-in-out duration-300 hover:text-pink-accent">
                        (project hub for @jckli)
                    </a>
                </div>
                <div className="flex flex-col text-md text-text-darker">
                    <Link
                        title="statsify" 
                        url="statsify.hayasaka.moe"
                        description="find out how many minutes of music were listened this year on spotify"
                    />
                    <Link
                        title="sugoiart"
                        url="art.hayasaka.moe"
                        description="a simple, fast, and open source art api"
                    />
                    <Link
                        title="cdn"
                        url="cdn.hayasaka.moe"
                        description="a private self hosted instance of chibisafe"
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
