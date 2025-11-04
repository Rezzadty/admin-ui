import React, { useEffect, useState } from "react";
// import UserCard from './UserCard'
// import { getUsers } from './Services'
import PostCard from './PostCard.jsx'
import { getUsers } from './postsData.js'


function Exercise() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (error) {
        console.error("[Component] Gagal menampilkan data:", error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <>
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold text-center mb-6 text-red-500">
             Post Cards
            </h1>
            <div className="grid md:grid-cols-5 lg:grid-cols-5 gap-8 xl:grid-cols-5 flex-wrap">
              {users.map((post, index) => (
                <PostCard key={post.id} {...post} />
              ))}
            </div>
      </div>
    </>
  )
}

export default Exercise