import React from 'react';
import InputBlock from './InputBlock';

function InputInfo({ title, isWhere }) {
    return (
        <div className="input-info">
            <div className="title">{title}</div>
            <InputBlock
                svg={
                    <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M4.86174 7.33361L9.86284 2.33251L14.8639 7.33361H14.8629V15.667H4.86287V7.33361H4.86174ZM3.1962 8.99915L1.96551 10.2298L0.787842 9.05218L8.68533 1.15469C9.33565 0.504366 10.39 0.504366 11.0404 1.15469L18.9378 9.05218L17.7602 10.2298L16.5295 8.9992V15.667C16.5295 16.5874 15.7833 17.3336 14.8629 17.3336H4.86287C3.9424 17.3336 3.1962 16.5874 3.1962 15.667V8.99915Z" fill="#FF5C00" />
                    </svg>
                }
                labelText="Адрес"
                value=""
                placeholder="ул. Ленина, 1"
                isAddress />
            <InputBlock
                svg={
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M8.00022 5.94858C8.43197 5.36674 8.58679 4.75353 8.09849 4.21225C7.0027 2.67894 6.26575 1.73074 5.80349 1.27411C4.9247 0.406001 3.47905 0.523426 2.71795 1.27337C2.30915 1.67617 2.17076 1.8145 1.75101 2.24084C-0.587028 4.58014 0.83883 9.52533 4.62928 13.3195C8.41888 17.1128 13.3636 18.5394 15.7066 16.1952C16.0939 15.8218 16.4218 15.4937 16.6805 15.2203C17.4263 14.432 17.5396 13.0501 16.6756 12.1523C16.2326 11.6921 15.3284 10.9907 13.7306 9.84778C13.2412 9.41019 12.661 9.50503 12.129 9.85403C11.8731 10.0219 11.6869 10.1917 11.3352 10.5437L10.6967 11.1826C10.6126 11.2668 9.47061 10.6948 8.36205 9.58519C7.25289 8.47494 6.68137 7.33288 6.76508 7.24918L7.40406 6.60985C7.51562 6.49818 7.56896 6.44411 7.63736 6.37222C7.77986 6.22245 7.89785 6.08653 8.00022 5.94858ZM11.8746 12.3611L12.5132 11.7221C12.7068 11.5284 12.8322 11.4093 12.9342 11.3272C14.3339 12.3323 15.1446 12.9644 15.4757 13.3084C15.6745 13.515 15.6436 13.8919 15.4708 14.0745C15.2316 14.3273 14.9209 14.6382 14.5396 15.006C13.0245 16.5217 9.03304 15.3701 5.8074 12.1413C2.58075 8.91143 1.42969 4.91932 2.93329 3.4149C3.35134 2.99031 3.48379 2.85793 3.88675 2.46088C4.03784 2.312 4.44939 2.27857 4.63319 2.46013C4.98908 2.8117 5.64924 3.65699 6.62038 5.00977C6.57011 5.07219 6.50732 5.14272 6.4309 5.22303C6.37482 5.28198 6.32809 5.32934 6.22594 5.43159L5.58759 6.07029C4.50163 7.15616 5.42647 9.00426 7.18394 10.7634C8.94019 12.5214 10.789 13.4473 11.8746 12.3611Z" fill="#FF5C00" />
                    </svg>
                }
                labelText="Телефон"
                value=""
                placeholder="+7 (978) 123 45 67"
                isTelephone />
            <InputBlock
                svg={
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M10.0014 19.1669C4.93877 19.1669 0.834717 15.0629 0.834717 10.0003C0.834717 4.93766 4.93877 0.833603 10.0014 0.833603C15.064 0.833603 19.168 4.93766 19.168 10.0003C19.168 15.0629 15.064 19.1669 10.0014 19.1669ZM10.0014 17.5003C14.1435 17.5003 17.5014 14.1424 17.5014 10.0003C17.5014 5.85813 14.1435 2.50027 10.0014 2.50027C5.85925 2.50027 2.50138 5.85813 2.50138 10.0003C2.50138 14.1424 5.85925 17.5003 10.0014 17.5003ZM14.168 9.16694H10.8347V5.00027H9.16805V10.8336H14.168V9.16694Z" fill="#FF5C00" />
                    </svg>
                }
                labelText="Время"
                value=""
                placeholder="сегодня"
                isTime />
            <InputBlock
                svg={
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M4.00155 17.1705L9.07388 14.0003H15.6682C16.5887 14.0003 17.3349 13.2541 17.3349 12.3336V2.3336C17.3349 1.41312 16.5887 0.666931 15.6682 0.666931H2.33488C1.4144 0.666931 0.668213 1.41312 0.668213 2.3336V12.3336C0.668213 13.2541 1.4144 14.0003 2.33488 14.0003H4.00155V17.1705ZM8.59588 12.3336L5.66821 14.1634V12.3336H2.33488V2.3336H15.6682V12.3336H8.59588Z" fill="#FF5C00" />
                    </svg>
                }
                labelText="Комментарий"
                value=""
                placeholder="кв, офис и т. д."
                style={{
                    fontSize: 10.5
                }}
                isComment />
        </div>
    )
}

export default InputInfo;