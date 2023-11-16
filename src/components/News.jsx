import React, { useState } from 'react'

export default function News() {
    const news1 = 
" علیرضا بیرانوند دروازه بان پرسپولیس که به خاطر پرتاب‌های بلند دستش معروف است این بار رکورد جدیدی در گینس به نامش ثبت شده است که این هفته حکمش را برایش ارسال می‌کنند را "
const [showMore,setShowMore] = useState(false)

  return (
    <div>{showMore ? news1 : news1.substring(0,92)}<span onClick={()=>setShowMore(!showMore)}>{showMore ? 'کاهش' : "...بیشتر"}</span></div>
  )
}
