import React, { useState } from 'react'

function PostCard(props) {
const { userId, id, title, body, } = props;
    const [clicked, setClicked] = useState(false);
    
    return (
        <div className="bg-white rounded-lg shadow-md p-8 transition-all ease-in-out hover:scale-105 hover:border-2 hover:border-red-400 hover:bg-pink-50 flex flex-col flex-wrap">
            <h2 className="text-xl font-semibold text-black mb-4 text-center">{title}</h2>
            <p className="text-gray-600 mb-4 flex-grow text-center">{body}</p>

            <button
            className={`${clicked ? "bg-special-red2" : "bg-gray-01"} text-white p-2 rounded-md`}
            onClick={() => setClicked(true)}>
            {clicked ? "Tombol Sudah Di Klik" : "Silahkan Klik"} 
            </button>

        </div>
    );
}

export default PostCard;