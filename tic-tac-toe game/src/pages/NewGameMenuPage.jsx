import { useState } from "react";
import xIcon from "../assets/images/icon-x.svg";
import oIcon from "../assets/images/icon-o.svg";
import logoSvg from "../assets/images/logo.svg";
import { Link } from "react-router-dom";

const NewGameMenuPage = () => {
    const [playerOneMark, setPlayerOneMark] = useState("O");

    const xSelected = playerOneMark === "X" ? "selected" : "";
    const oSelected = playerOneMark === "O" ? "selected" : "";

    return (
        <main className="flex justify-center items-center h-screen bg-darkNavy font-medium text-[1.4rem] tracking-[0.08rem] text-silver">
            <section className="w-[46rem] h-[47.1rem] md:w-[80%]">
                <div className="flex justify-center items-center">
                    <img
                        className="w-[7.121rem] h-[3.174rem]"
                        src={logoSvg}
                        alt="XO Logo"
                    />
                </div>
                <div className="w-[46rem] h-[20.5rem] md:w-full bg-semiDarkNavy my-[4rem] p-[3rem] text-center rounded-[1.5rem] shadow-[0px_8px_0px_0px_rgba(16,33,42,1)]">
                    <p className="font-bold text-[1.6rem] tracking-[0.1rem] mb-[3rem]">
                        PICK PLAYER 1&apos;S MARK
                    </p>
                    <div className="flex justify-between md:w-full items-center w-[41.2rem] h-[7.2rem] rounded-[1rem] p-[1rem] bg-darkNavy">
                        <div
                            onClick={() => setPlayerOneMark("X")}
                            className={`w-[19.8rem] h-[5.4rem] md:w-1/2 flex items-center justify-center rounded-[1rem] cursor-pointer ${xSelected}`}
                        >
                            <img
                                className="w-[3.2rem] h-[3.2rem] xIcon"
                                src={xIcon}
                                alt="X icon"
                            />
                        </div>
                        <div
                            onClick={() => setPlayerOneMark("O")}
                            className={`w-[19.8rem] h-[5.4rem] md:w-1/2 flex items-center justify-center rounded-[1rem] cursor-pointer ${oSelected}`}
                        >
                            <img
                                className="w-[3.2rem] h-[3.2rem] oIcon"
                                src={oIcon}
                                alt="O icon"
                            />
                        </div>
                    </div>
                    <p className="font-medium  tracking-[0.088rem] mt-[1rem]">
                        REMEMBER : X GOES FIRST
                    </p>
                </div>
                <div>
                    <Link
                        to={`/game`}
                        state={{
                            playerOneMark: playerOneMark,
                            isCPUGame: true,
                        }}
                    >
                        <button className="w-full h-[6.7rem] bg-lightYellow mb-[2.026rem] text-darkNavy font-bold text-[2rem] tracking-[0.125rem] rounded-[1.5rem] shadow-[0px_8px_0px_0px_rgba(204,139,19,1)] hover:bg-lightYellowHover xs:p-[1rem]">
                            NEW GAME (VS CPU)
                        </button>{" "}
                    </Link>
                    <Link
                        to={`/game`}
                        state={{
                            playerOneMark: playerOneMark,
                            isCPUGame: false,
                        }}
                    >
                        <button className="w-full h-[6.7rem] bg-lightBlue  text-darkNavy font-bold text-[2rem] tracking-[0.125rem] rounded-[1.5rem] shadow-[0px_8px_0px_0px_rgba(17,140,135,1)] hover:bg-lightBlueHover xs:p-[1rem]">
                            NEW GAME (VS PLAYER)
                        </button>
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default NewGameMenuPage;
