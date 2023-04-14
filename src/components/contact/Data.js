import React from 'react'
import { FiMail } from "react-icons/fi";
import { AiOutlineMessage, AiOutlinePhone } from "react-icons/ai";

const DataContact = [
    {
        id: 1,
        icon: <FiMail />,
        titelContact: 'Email',
        addressContact: 'thsap20@gmail.com',
        linkContact: 'mailto:thsap20@gmail.com'
    },
    {
        id: 2,
        icon: <AiOutlineMessage />,
        titelContact: 'Messeger',
        addressContact: 'Thodsaphon Chuennwngsap',
        linkContact: 'https://m.me/profile.php?id=100006564033955'
    },
    {
        id: 3,
        icon: <AiOutlinePhone />,
        titelContact: 'Phone',
        addressContact: '061-248-5906',
        linkContact: 'https://api.whatsapp.com/send?phone=+612485906'
    }
]


const Data = () => {
  return DataContact
}

export default Data