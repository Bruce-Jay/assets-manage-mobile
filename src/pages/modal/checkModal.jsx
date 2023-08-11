import React, { forwardRef, useImperativeHandle } from 'react'
import { Masking } from '@arco-design/mobile-react';
import Check from "../../components/check";

const CheckModal = (props, ref) => {
    const [visible, setVisible] = React.useState(false);

    useImperativeHandle(ref, () => ({ setVisible }))

    const close = () => {
        setVisible(false)
    }
    
    const {loc, itemData} = props

    return <Masking
        className="demo-masking-img"
        visible={visible}
        close={() => setVisible(true)}
        mountOnEnter={false}
        unmountOnExit={false}
        onOpen={() => console.log('onOpen')}
        onClose={(scene) => console.log('onClose', scene)}
        contentAtCenter={true}
    >
        <Check cancelClick={close} loc={loc} itemData={itemData}/>
        盘库
        <img src="https://sf1-cdn-tos.toutiaostatic.com/obj/arco-mobile/_static_/get-prize.png" alt="" />
    </Masking>

}

export default forwardRef(CheckModal)