import React, { useEffect, useState } from "react";
import search from "../assets/images/search.png";
import {Button} from "@arco-design/mobile-react";
import MySearchBar from "./searchBar";


function Push(props) {
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
    const transferBgColor = {
        normal: "#CCCCE7",
        active: "#BBBBD5"
    }

    const {loc, itemData} = props
    const [pushItemList, setPushItemList] = useState([])
    const [countPushItem, setCountPushItem] = useState(0)
    
    
    useEffect(() => {
        const arr = loc.split(',')
        const filteredData = itemData.filter((item) => {
            const itemArr = item.roomName.split(',')
            return itemArr[0] === arr[0] && itemArr[1] === arr[1] && itemArr[2] === arr[2]
        })
        setCountPushItem(filteredData.length)
        // console.log(filteredData)
        let itemList = filteredData.map((item) => {
            return (
                <div key={item.id} className='homeItemListBoxRows'>
                    <div style={{ fontWeight: "bold", marginLeft: "15px" }}>{item.name}</div>
                    <div className='codeHome'>{item.code}</div>
                    <Button type='default' size='small' className='transferButtonSmall' bgColor={transferBgColor} color="black"
                        onClick={() => {
                            if (TransferModalRef.current) {
                                TransferModalRef.current?.setVisible(true)
                            }
                        }
                        }>
                        Move
                    </Button>
                </div>
            )
        })
        setPushItemList(itemList)
    }, [loc])
    
    return (
        <div className="box">
            <div className="title">STORE</div>
            <div className="mainboxPush">

    
            <div className="rowone">
            Scan QR code or enter number
            <Button bgColor={scanBgColor} className="scanButton" style={{color: "black"}}>Scan</Button>
            </div>
            <div className="rowtwo">
                {/* <input placeholder="item number or id" className="search"></input> */}
                <MySearchBar itemData={itemData}/>
                <img src={search} style={{width:"40px",height:"40px"}}></img>
            </div>

            <hr></hr>

            <div className="itemlist">
                ItemList: {countPushItem}
            </div>

            <div className="Items">
                    {pushItemList}    
            </div>

            <hr></hr>

            <div className="buttonbox">
                <Button bgColor={cancelBgColor} className="cancelButton" onClick={props.cancelClick}>cancel</Button>
                <Button bgColor={submitBgColor} className="submitButton" style={{color: "black", border: "1px solid #ABABAB"}}>submit</Button>
            </div>

            </div>

        </div>
    );
};

export default Push;
