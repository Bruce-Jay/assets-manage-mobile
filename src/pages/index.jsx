import React, { useRef, useState, useEffect } from 'react';
import { Cell } from '@arco-design/mobile-react';
import TransferModal from './modal/transferModal'
import CheckModal from './modal/checkModal'
import PutModal from './modal/putModal'
import RoomPicker from '@/components/RoomPicker'
import { Button } from '@arco-design/mobile-react'
import './modal/app.css'
import './index.less'
import ColorBoxes from '../maps/B2DC11'
import axios from 'axios'

const HomePage = () => {
    const TransferModalRef = useRef();
    const CheckModalRef = useRef();
    const PutModalRef = useRef();
    const RoomPickerRef = useRef();
    const [singleValue, setSingleValue] = useState('');  // single value 是 roompicker 的值
    const [homeItemList, setHomeItemList] = useState([])
    const [itemData, setItemData] = useState([])
    const handleSingleValueChange = (value) => {
        setSingleValue(value);
    };
    const transferBgColor = {
        normal: "#CCCCE7",
        active: "#BBBBD5"
    }
    
    let filteredData = []

    axios.defaults.baseURL = 'http://localhost:8000';
    // axios.defaults.headers.common['Authorization'] = 'AvfnlmxGwL0lUpFQYhH2EB5qTXkdxE32';
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

    axios({
        method: 'get',
        url: '/api/java-cgi/shelf/box/getAssetList?apifoxToken=AvfnlmxGwL0lUpFQYhH2EB5qTXkdxE32',
    }).then(response => {
        if (itemData.length === 0) {
            const itemData = response.data.result 
            console.log('itemdata', itemData)
            setItemData(itemData)
        }
    }).catch(error => {
        console.log(error)
    })


    useEffect(() => { // 监听变化并且及时作出响应
        if (singleValue) {
            const arr = singleValue.split(',')
            filteredData = itemData.filter((item) => {
                const itemArr = item.roomName.split(',')
                return itemArr[0] === arr[0] && itemArr[1] === arr[1] && itemArr[2] === arr[2]
            })
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
            setHomeItemList(itemList)
        }
        
    }, [singleValue])


    return (<>

        <div className='mapBox'>
            <div className='mapBoxBg'>
                <ColorBoxes room={singleValue} />
            </div>
        </div>

        <Cell.Group bordered={true} className='locationSelectorBox'>

            <Cell label="Select location" className='locationSelector' onClick={() => {
                if (RoomPickerRef.current) {
                    RoomPickerRef.current?.setSingleVisible(true)
                }
            }}
            >{singleValue}

            </Cell>
        </Cell.Group>


        <div className='homeItemBoxOne'>
            <p className='homeItemTitle'>Item List</p>
            <Button className='transferButton' bgColor={transferBgColor} color="black"
                onClick={() => {
                    if (TransferModalRef.current) {
                        TransferModalRef.current?.setVisible(true)
                    }
                }
                }>
                Move Item
            </Button>
        </div>

        <div className='homeItemListBox'>
            {homeItemList}
        </div>



        <div className='buttonboxHome'>
            {/* 盘库 */}
            <Button className='storeButton' style={{ backgroundColor: "#CCCCE7", color: "black" }}
                onClick={() => {
                    if (CheckModalRef.current) {
                        CheckModalRef.current?.setVisible(true)
                    }
                }}>Check</Button>
            {/* 入库 */}
            <Button className='storeButton' style={{ backgroundColor: "#CCCCE7", color: "black" }}
                onClick={() => {
                    if (PutModalRef.current) {
                        PutModalRef.current?.setVisible(true)
                    }
                }}>Store</Button>
        </div>


        <TransferModal ref={TransferModalRef} loc={singleValue} itemData={itemData} />
        <CheckModal ref={CheckModalRef} loc={singleValue} itemData={itemData} />
        <PutModal ref={PutModalRef} loc={singleValue} itemData={itemData} />
        <RoomPicker ref={RoomPickerRef} onSingleValueChange={handleSingleValueChange} />
    </>)
}

export default HomePage;
