import React, { useEffect, useState } from 'react'
import ContactItem from './ContactItem'
import SearchBox from './SearchBox'
import { useSelector } from 'react-redux'

const ContactList = () => {
    const {contactList, keyword} = useSelector((state) => state);
    let [filteredList, setFilterdList] = useState([]);

    useEffect(() => {
      if (keyword !== "") {
        let list = contactList.filter((item) => item.name.includes(keyword));
        setFilterdList(list);
      } else {
        setFilterdList(contactList);
      }
    }, [keyword]);

  // const contactList = useSelector(state => state.contactList);

  return (
    <div>
      <SearchBox />
      <div>
        num: {filteredList.length}
          {filteredList.map(item => (
          <ContactItem item = {item}/>
        ))}

        {/* {contactList.map(item => (
          <ContactItem item={item} />
        ))} */}
      </div>
    </div>
  )
}

export default ContactList