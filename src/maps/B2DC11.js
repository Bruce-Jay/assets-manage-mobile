import React, { useState } from 'react';
import {fabric} from 'fabric'
import roomConfigs from '../assets/roomConfigs'

// 这个奇怪的名字是用来渲染房间地图的，根据传入的房间号，获取roomConfigs 文件里面的数据，然后进行渲染房间地图。
// 看看是否后续需要加上货架号码
const ColorBoxes = (props) => {
    const fabricRef = React.useRef(null)
    const canvasRef = React.useRef(null)
    const {room} = props
    let room_arr = []
    let room_id = ''
    

    React.useEffect(() => {
        
        const initFabric = () => {
            fabricRef.current = new fabric.Canvas(canvasRef.current, {
                width: 360, height: 310, selectable: false
            })
        }

        initFabric()

        if (room) {
            room_arr = room.split(',')
            room_id = room_arr[0]
            for (const roomConfig of roomConfigs[room_id]) {
                const room = new fabric.Rect({...roomConfig, selectable: false});
                fabricRef.current.add(room);
            }
        } else {
            const room = new fabric.Rect({top: -5, left: -5, width: 360, height: 310, fill: '#DFD7D7', selectable: false})
            fabricRef.current.add(room)
        }
        
        const disposeFabric = () => {
            fabricRef.current.dispose()
        }

        return() => {
            disposeFabric();
        }
    }, [room]) // 作为参数传递，之前没有做参数传递作为依赖，导致无法监听变化。这次学到了 onProjectRemount 相当于是吧

    return (
    <canvas ref={canvasRef} />
    )
}

export default ColorBoxes;
