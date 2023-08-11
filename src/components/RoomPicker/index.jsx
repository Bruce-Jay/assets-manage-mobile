import React, { Children, useEffect } from 'react'
import { Picker, Cell } from '@arco-design/mobile-react';
import { forwardRef, useImperativeHandle, useRef } from 'react';
import recursiveProcess from '../../utils/processApiRoomData'
import axios from 'axios';


const RoomPicker = (props, ref) => {
    const [singleVisible, setSingleVisible] = React.useState(false);
    const [apiData, setApiData] = React.useState([]); // 从api获取的数据
    const [pickerValue, setPickerValue] = React.useState([]);

    useImperativeHandle(ref, () => ({
        setSingleVisible
    }))

    
    useEffect(() => {
        axios.defaults.baseURL = 'http://localhost:8000';
        // axios.defaults.headers.common['Authorization'] = 'AvfnlmxGwL0lUpFQYhH2EB5qTXkdxE32';
        axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

        axios({
            method: 'get',
            url: '/api/api/shelf/tree?apifoxToken=AvfnlmxGwL0lUpFQYhH2EB5qTXkdxE32',
        }).then(response => {
            const roomData = response.data.result
            setApiData(recursiveProcess(roomData, 0))
            if (pickerValue.length === 0) {
                console.log(recursiveProcess(roomData, 0))
                const firstChild = recursiveProcess(roomData, 0)[0]
                const firstChildOne = firstChild["value"]
                const firstChildTwo = firstChild["children"][0]["value"]
                const firstChildThree = firstChild["children"][0]["children"][0]["value"]
                setPickerValue([firstChildOne, firstChildTwo, firstChildThree])
            } 
        }).catch(error => {
            console.log(error)
        })
    }, [])


    const handleSingleValueChange = (value) => {
        props.onSingleValueChange(value.join(',')); // 调用回调函数传递数据给父组件
    }

    return (
        <>
            <Picker
                visible={singleVisible}
                value={pickerValue}
                title='Select location'
                cascade={true}
                data={apiData}
                maskClosable={true}
                onHide={() => {
                    setSingleVisible(false);
                }}
                cols={3}
                onOk={(value) => {
                    console.log('on ok');
                    setPickerValue(value)
                    handleSingleValueChange(value); // 调用回调函数传递数据给父组件
                }}
                
            />
        </>
        
    );
}

export default forwardRef(RoomPicker)