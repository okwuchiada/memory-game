import React from 'react'

const Card = ({ card, handleClick, id, currentPlayer }) => {

    const cardClass = card.status ? " flipped " + card.status : ""


    return (
        <div className={'card flex justify-center items-center rounded-md relative cursor-pointer' + cardClass} onClick={() => handleClick(id, currentPlayer)}>
            <img src={card.src} alt={card.src} className={`rounded-lg`} />
            {/* <img src="/images/cover.jpg" alt="" className={`absolute back ${flipped && "back"}`} /> */}

        </div>
    )
}

export default Card