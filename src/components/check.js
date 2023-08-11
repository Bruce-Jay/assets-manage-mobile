import "../pages/modal/app.css";
import {Button} from "@arco-design/mobile-react";
import React, {useState, useEffect } from 'react';
import MySearchBar from '../components/searchBar'

const Check = (props) => {
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

    const [checkedItemList, setCheckedItemList] = useState([])
    const [uncheckedItemList, setUncheckedItemList] = useState([])
    const [countCheckedItem, setCountCheckedItem] = useState(0)
    const [countUncheckedItem, setCountUncheckedItem] = useState(0)
    const {loc, itemData} = props
    

    useEffect(() => {
        const arr = loc.split(',')
        const checkedData = itemData.filter((item) => {
            const itemArr = item.roomName.split(',')
            return itemArr[0] === arr[0] && itemArr[1] === arr[1] && itemArr[2] === arr[2] && item.checked === 1
        })
        const uncheckedData = itemData.filter((item) => {
            const itemArr = item.roomName.split(',')
            return itemArr[0] === arr[0] && itemArr[1] === arr[1] && itemArr[2] === arr[2] && item.checked === 0
        })
        setCountCheckedItem(checkedData.length)
        setCountUncheckedItem(uncheckedData.length)
        // console.log(filteredData)
        const checkedList = checkedData.map((item) => {
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
        const uncheckedList = uncheckedData.map((item) => {
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
        setCheckedItemList(checkedList)
        setUncheckedItemList(uncheckedList)
        
    }, [loc])
  

    return (
        <div className="box">
            <div className="title">CHECK</div>
            <div className="mainboxCheck">

                <div className="rowone">
                    Scan QR code or enter number
                    <Button bgColor={scanBgColor} className="scanButton" style={{color: "black"}}>Scan</Button>
                </div>
                <div className="rowtwo">
                    <MySearchBar itemData={itemData}/>
                </div>
                
                <hr></hr>
                <div className="checkedTitle">UNCHECKED</div>
                <div className="itemlist">ItemList:{countUncheckedItem}</div>
                <div className="Items">
                    {uncheckedItemList}
                </div>
                <hr></hr>
                <div className="checkedTitle">CHECKED</div>
                <div className="itemlist">ItemList:{countCheckedItem}</div>
                <div className="Items">
                    {checkedItemList}
                </div>
                <hr></hr>

                <div style={{fontWeight:"bold"}}>Comments</div>
                
                <textarea className="comment" style={{marginBottom: "10px"}}></textarea>

                <div className="buttonbox">
                    <Button bgColor={cancelBgColor} className="cancelButton" onClick={props.cancelClick}>cancel</Button>
                    <Button bgColor={submitBgColor} className="submitButton" style={{color: "black", border: "1px solid #ABABAB"}}>submit</Button>
                </div>
            </div>
        </div>
    );
};

export default Check;
