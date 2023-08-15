// search bar with association
import { SearchBar } from '@arco-design/mobile-react';
import { useState, useEffect } from 'react';
import { useDebounce } from '@uidotdev/usehooks'
import './index.less'

export default function MySearchBar(props) {
    const [searchInput, setSearchInput] = useState('')
    // const [filteredResults, setFilteredResults] = useState([])
    const [associationItems, setAssociationItems] = useState([]);
    const [selectedResult, setSelectedResult] = useState(null);

    const debounceInput = useDebounce(searchInput, 500)
    const {itemData} = props
    useEffect(() => {
        console.info('Change:', debounceInput)
        if (debounceInput) {
            const filteredData = itemData.filter((item) => {
                return Object.values(item).join(' ').includes(debounceInput)
            })
            const newData = filteredData.map((item) => ({content: item.name, code: item.code}))
            setAssociationItems(newData)
        } else {
            setAssociationItems()
        }
    }, [debounceInput])

    const handleInputChange = e => {
        const value = e.target.value;
        setSearchInput(value)
    };

    const handleItemClick = (item) => {
        props.onSearchValueChange(item)
        setSelectedResult(item)
        setSearchInput(null)
        
    }

    return (
        <SearchBar
            className='searchBar'
            appendBtnText="Search"
            placeholder='Search'
            enableAssociation
            associationItems={associationItems}
            associationShowType="value"
            highlightMode="prefix"
            onInput={(e) => handleInputChange(e)}
            onAssociationItemClick={(item) => handleItemClick(item)}
            actionButton={null}
        />
    );
}

