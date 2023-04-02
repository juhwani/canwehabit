
import "./mypage.css"
import ProgressBar from "@ramonak/react-progress-bar";

function mypage() {
    const now = 60;
    return(
        <div className = "MainContainer">
                
            <div className = "SubContainer">
                <div className = "ProfileCon">
                    <div className = "ProfilePic"></div>
                    <div className = "NameCon">
                        <div className = "Name">JANE DOE</div>
                        <div className = "Points">Total&#128176;: 50</div>
                    </div>
                </div>

                <div className = "Bar">
                    <div>Succeeded</div>
                    <div>Failed</div>
                </div>
                <div className = "Progress">
                    <ProgressBar bgColor = "#89ACD2" completed="60" width = "1500%" />
                    </div>
                <div className = "Columns">
                    <button className = "choose">In Progress</button>
                    <button className = "choose">Succeeded</button>
                    <button className = "choose">Failed</button>

                </div>

                <div className = "choices">
                    <button className = "select">1</button>
                    <button className = "select">2</button>
                    <button className = "select">3</button>
                    <button className = "select">3</button>
                    <button className = "select">3</button>

                </div>

                <div className = "Liked"> Challenges you liked</div>
                
            </div>
        
        
        
        </div>
    )
}

export default mypage;