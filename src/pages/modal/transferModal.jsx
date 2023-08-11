import React, { forwardRef, useImperativeHandle } from 'react'
import { Masking } from '@arco-design/mobile-react';
import Transfer from '../../components/transfer';


const TransferModal = (props, ref) => {
    const [visible, setVisible] = React.useState(false);

    useImperativeHandle(ref, () => ({
        setVisible
    }))

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
        
        <Transfer cancelClick={close} loc={loc} itemData={itemData}/>
        
        
        移库
        <img src="https://sf1-cdn-tos.toutiaostatic.com/obj/arco-mobile/_static_/get-prize.png" alt="" />
    </Masking>

}

export default forwardRef(TransferModal)