import logoSvg from "../assets/images/logo.svg";
import xLogo from "../assets/images/icon-x.svg";
import oLogo from "../assets/images/icon-o.svg";
import restartIcon from "../assets/images/icon-restart.svg";

const TurnBar = ({ turn, gameStatus, onRestartButtonClick }) => {
    return (
        <div className="flex justify-between items-center">
            <img
                src={logoSvg}
                className="w-[7.197rem] h-[3.2rem]"
                alt="Tic Tac Toe Logo"
            />
            <div className="w-[14rem] h-[5.2rem] bg-semiDarkNavy rounded-[1rem] flex items-center justify-center gap-[1.3rem] shadow-[0px_4px_0px_0px_rgba(16,33,42,1)]">
                {turn === "X" ? (
                    <img
                        src={xLogo}
                        className="w-[2rem] h-[2rem] turn-icon"
                        alt="X Icon"
                    />
                ) : (
                    <img
                        className="w-[2rem] h-[2rem] turn-icon"
                        src={oLogo}
                        alt="O Icon"
                    />
                )}
                <p className="font-bold text-[1.6rem] tracking-[0.1rem] text-silver">
                    TURN
                </p>
            </div>
            <button
                onClick={onRestartButtonClick}
                className="w-[5.2rem] h-[5.2rem] bg-silver flex justify-center items-center rounded-[1rem] shadow-[0px_4px_0px_0px_rgba(107,137,151,1)] hover:bg-silverHover"
            >
                <img
                    className="w-[2rem] h-[2rem] restart-icon"
                    src={restartIcon}
                    alt="Restart Icon"
                />
            </button>
        </div>
    );
};

export default TurnBar;
