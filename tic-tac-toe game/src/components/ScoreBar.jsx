const ScoreBar = ({ gameStatus, xWins, oWins, ties }) => {
    const getXScoreLabel = () => {
        if (gameStatus.playerOneMark === "X") {
            if (gameStatus.isCPUGame) {
                return "YOU";
            } else {
                return "P1";
            }
        } else {
            if (gameStatus.isCPUGame) {
                return "CPU";
            } else {
                return "P2";
            }
        }
    };

    const getOScoreLabel = () => {
        if (gameStatus.playerOneMark === "X") {
            if (gameStatus.isCPUGame) {
                return "CPU";
            } else {
                return "P2";
            }
        } else {
            if (gameStatus.isCPUGame) {
                return "YOU";
            } else {
                return "P1";
            }
        }
    };

    return (
        <div className="h-[7.2rem] flex justify-between items-center md:gap-[2rem]">
            <div className="w-[14rem] h-[7.2rem] text-darkNavy bg-lightBlue rounded-[1.5rem] flex flex-col justify-center items-center">
                <p>X ({getXScoreLabel()})</p>
                <p className="font-bold text-[2.4rem] tracking-[0.15rem]">
                    {xWins}
                </p>
            </div>
            <div className="w-[14rem] h-[7.2rem] text-darkNavy bg-silver rounded-[1.5rem] flex flex-col justify-center items-center">
                <p>TIES</p>
                <p className="font-bold text-[2.4rem] tracking-[0.15rem]">
                    {ties}
                </p>
            </div>
            <div className="w-[14rem] h-[7.2rem] text-darkNavy bg-lightYellow rounded-[1.5rem] flex flex-col justify-center items-center">
                <p>O ({getOScoreLabel()})</p>
                <p className="font-bold text-[2.4rem] tracking-[0.15rem]">
                    {oWins}
                </p>
            </div>
        </div>
    );
};

export default ScoreBar;
