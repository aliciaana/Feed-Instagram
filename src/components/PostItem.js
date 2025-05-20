'use client';

import { useState } from 'react';
import { HeartIcon as OutlineHeart } from '@heroicons/react/24/outline';
import { HeartIcon as SolidHeart }   from '@heroicons/react/24/solid';

export default function PostItem({ post }) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(post.numberOfLikes);

  function toggleLike() {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  }

  return (
    <div className="mb-6 rounded-md bg-white border overflow-hidden">
      {/* ---------- Header ---------- */}
      <div className="flex items-center p-4">
        <img
          src={post.avatarUrl}
          alt="avatar"
          className="w-10 h-10 rounded-full mr-3 object-cover"
        />
        <span className="font-semibold text-gray-900">{post.username}</span>
      </div>

      {/* ---------- Image ---------- */}
      <img
        src={post.imageUrl}
        alt="post"
        className="w-full object-cover"
      />

      {/* ---------- Actions ---------- */}
      <div className="flex items-center p-4">
        <button onClick={toggleLike}>
          {liked ? (
            <SolidHeart className="w-6 h-6 text-red-500" />
          ) : (
            /* cor mais escura quando NÃO curtido */
            <OutlineHeart className="w-6 h-6 text-gray-800" />
          )}
        </button>
      </div>

      {/* ---------- Likes + description ---------- */}
      <div className="px-4 pb-4">
        <span className="font-semibold text-gray-900">
          {likes} curtidas
        </span>

        <p className="mt-1">
          <span className="font-semibold mr-2 text-gray-900">
            {post.username}
          </span>
          {/* legenda em cinza‑escuro */}
          <span className="text-gray-800">
            {post.description}
          </span>
        </p>
      </div>
    </div>
  );
}