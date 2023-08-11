import React, { forwardRef, useImperativeHandle } from 'react'
import { Masking } from '@arco-design/mobile-react';
import Push from "../../components/push"


const PutModal = (props, ref) => {
    const [visible, setVisible] = React.useState(false);

    useImperativeHandle(ref, () => ({ setVisible }))

    const {loc, itemData} = props

    const close = () => {
        setVisible(false)
    }

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
        入库
        <img src="https://sf1-cdn-tos.toutiaostatic.com/obj/arco-mobile/_static_/get-prize.png" alt="" />
        <Push cancelClick={close} loc={loc} itemData={itemData} />
    </Masking>

}

export default forwardRef(PutModal)