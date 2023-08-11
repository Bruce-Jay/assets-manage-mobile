import "../pages/modal/app.css";
import add from "../assets/images/add.png";
import {Button} from "@arco-design/mobile-react";
import RoomPicker from '@/components/RoomPicker'
import {useRef, useState} from 'react';
import MySearchBar from "./searchBar";


function Transfer(props) {
    const deleteBgColor = {
        normal: "#efefef",
        active: "#ccc"
    }
    const scanBgColor = {
        normal: "#CCCCE7",
        active: "#BBBBD5"
    }
    const cancelBgColor = {
        normal: "#826B93",
        active: "#725E81"
    }
    const submitBgColor = {
        normal: "#FFF",
        active: "#efefef"
    }
    const RoomPickerRef = useRef();
    const [singleValue, setSingleValue] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const handleSingleValueChange = (value) => {
        setSingleValue(value);
    };
    const handleSearchValueChange = (value) => {
        setSearchValue(value);
    }
    const {itemData} = props
    
    return (
        <div className="box">
            <div className="title">MOVE</div>
            <div className="mainboxTransfer">
                <div className="rowone-transfer">
                    <span className="title-transfer-inflex">Scan QR code or enter number</span>
                    <Button bgColor={scanBgColor} className="scanButton" style={{color: "black"}}>Scan</Button>
                </div>
                <div className="rowtwo">
                    {/* <input placeholder="item number or id" className="search"></input> */}
                    <MySearchBar onSearchValueChange={handleSearchValueChange} itemData={itemData} />
                    <img src={add} style={{ width: "40px", height: "40px" }}></img>
                </div>
                <div className="title-transfer">
                    Item Name
                </div>
                <div className="info-transfer">
                    {searchValue.content}
                </div>
                <div className="title-transfer">
                    QR Code
                </div>
                <div className="info-transfer">
                    {searchValue.code}
                </div>
                <div className="title-transfer">
                    Move To (Tap to select)
                </div>
                <Button className="roomPickerTransfer" style={{fontWeight: "normal", color: "#777", height: "45px", backgroundColor: "white", textAlign: "left"}}
                    onClick={() => {
                        if (RoomPickerRef.current) {
                          RoomPickerRef.current?.setSingleVisible(true)
                          
                        }}}
                > {singleValue} </Button>
                
                <Button bgColor={deleteBgColor} className="deleteLongButton" style={{color: "black"}}>
                    Delete it from here
                </Button>
                
                <div className="hr-transfer"></div>

                <div className="title-transfer">Comments</div>
                <textarea className="comment"></textarea>

                <div className="buttonbox-transfer">
                    <Button bgColor={cancelBgColor} className="cancelButton" onClick={props.cancelClick}>cancel</Button>
                    <Button bgColor={submitBgColor} className="submitButton" style={{color: "black", border: "1px solid #ABABAB"}}>submit</Button>
                </div>
            </div>
            <RoomPicker ref={RoomPickerRef} onSingleValueChange={handleSingleValueChange}></RoomPicker>
        </div>
    )
}

export default Transfer;