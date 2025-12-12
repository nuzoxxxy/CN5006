import './App.css'
import './Calculator.css'
import React, { useState } from "react";
import Button from "./Button";

function KeyPadComponent() {

    const [text1, setText] = useState("");
    const [showPic, setShowPic] = useState(false);

    const ClickHandle = (e) => {
        const value = e.target.value;

        if (value === "C") {
            setText("");
        }
        else if (value === "=") {
            setText(eval(text1));
        }
        else if (value === "square") {
            if (text1 !== "") {
                setText((eval(text1)**2).toString());
            }
        }
        else if (value === "showme") {
            setShowPic(true);
        }
        else {
            setText(text1 + value);
        }
    };

    return (
        <div className="Calculator">
            <div className="screen-row">
                <input type="text" readOnly value={text1} />
            </div>

            <div>
                <Button label="(" ClickHandle={ClickHandle}/>
                <Button label="CE" ClickHandle={ClickHandle}/>
                <Button label=")" ClickHandle={ClickHandle}/>
                <Button label="C" ClickHandle={ClickHandle}/>
            </div>

            <div>
                <Button label="1" ClickHandle={ClickHandle}/>
                <Button label="2" ClickHandle={ClickHandle}/>
                <Button label="3" ClickHandle={ClickHandle}/>
                <Button label="+" ClickHandle={ClickHandle}/>
            </div>

            <div>
                <Button label="4" ClickHandle={ClickHandle}/>
                <Button label="5" ClickHandle={ClickHandle}/>
                <Button label="6" ClickHandle={ClickHandle}/>
                <Button label="-" ClickHandle={ClickHandle}/>
            </div>

            <div>
                <Button label="7" ClickHandle={ClickHandle}/>
                <Button label="8" ClickHandle={ClickHandle}/>
                <Button label="9" ClickHandle={ClickHandle}/>
                <Button label="*" ClickHandle={ClickHandle}/>
            </div>

            <div>
                <Button label="." ClickHandle={ClickHandle}/>
                <Button label="0" ClickHandle={ClickHandle}/>
                <Button label="=" ClickHandle={ClickHandle}/>
                <Button label="/" ClickHandle={ClickHandle}/>
            </div>

            <Button label="showme" ClickHandle={ClickHandle} />
            <Button label="square" ClickHandle={ClickHandle} />

                <img 
                    src="/mypic.jpg"
                    alt="mypic"
                    style={{ width: "200px", marginTop: "15px", borderRadius: "10px" }}
                />
        </div>
    );
}

export default KeyPadComponent;
