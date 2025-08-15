import Image from "next/image";
import React from "react";

const page = () => {
  const profilePics = [
    {
      id: 1,
      name: "Untitled-image",
      url: "https://i.ibb.co.com/1xjYsX0/Untitled-image.jpg",
    },
    
    {
      id: 5,
      name: "372497228357734",
      url: "https://i.ibb.co.com/yB7Bz7Zj/372497228357734.png",
    },
    {
      id: 6,
      name: "ai-editor-new-result-2",
      url: "https://i.ibb.co.com/9mfXnwLv/ai-editor-new-result-2.png",
    },
    {
      id: 7,
      name: "profile-Black",
      url: "https://i.ibb.co.com/672kGtMq/profile-Black.png",
    },
    {
      id: 8,
      name: "ai-editor-new-result",
      url: "https://i.ibb.co.com/b5s2SWtd/ai-editor-new-result.png",
    },
    { id: 9, name: "myPic", url: "https://i.ibb.co.com/bj1NXwnx/myPic.png" },
    {
      id: 10,
      name: "pic-With-Tie",
      url: "https://i.ibb.co.com/5WKcbp69/pic-With-Tie.png",
    },
    {
      id: 11,
      name: "profile-Black-New",
      url: "https://i.ibb.co.com/svn4TrLf/profile-Black-New.png",
    },
    {
      id: 12,
      name: "profile-Pic-Black",
      url: "https://i.ibb.co.com/S7wVyWJt/profile-Pic-Black.png",
    },
    {
      id: 13,
      name: "Enhance-Final-For-Profile",
      url: "https://i.ibb.co.com/Xr6g4qVW/Enhance-Final-For-Profile.png",
    },
    {
      id: 14,
      name: "enhance-Imageto-HD",
      url: "https://i.ibb.co.com/4ZHkrcfV/enhance-Imageto-HD.png",
    },
    {
      id: 15,
      name: "fiverr-Profile",
      url: "https://i.ibb.co.com/PsHg4szm/fiverr-Profile.png",
    },
    {
      id: 16,
      name: "fiverr-Profile-Black",
      url: "https://i.ibb.co.com/pvqR6BYC/fiverr-Profile-Black.png",
    },
    {
      id: 17,
      name: "fiverr-Profile-Pic",
      url: "https://i.ibb.co.com/VbGs5JF/fiverr-Profile-Pic.png",
    },
    {
      id: 18,
      name: "marketplace-Pic",
      url: "https://i.ibb.co.com/5ZptRfQ/marketplace-Pic.png",
    },
    {
      id: 2,
      name: "ai-editor-new-result-1-1",
      url: "https://i.ibb.co.com/99sfYFpM/ai-editor-new-result-1-1.png",
    },
    {
      id: 3,
      name: "profile-Black-3",
      url: "https://i.ibb.co.com/KpnrZ5c7/profile-Black-3.png",
    },
    {
      id: 4,
      name: "profile-Black-1-texure",
      url: "https://i.ibb.co.com/RGtbK5qy/texure-Edit.jpg",
    },
    {
      id: 20,
      name: "Eitai-Dibo-Fiverr-Hisebe",
      url: "https://i.ibb.co.com/Lzgm6C0f/Eitai-Dibo-Fiverr-Hisebe.png",
    },
    {
      id: 55,
      name: "26-edit-good-virsion-copy",
      url: "https://i.ibb.co.com/B53b1kMG/26-edit-good-virsion-copy.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Profile Pictures Grid
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
        {profilePics.map((pic) => (
          <div key={pic.id} className="flex flex-col items-center">
            <div className="w-[150px] h-[150px] rounded-full overflow-hidden border-2 border-gray-300 shadow-lg">
              <Image
                src={pic.url}
                alt={pic.name}
                width={400}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
            <p className="mt-2 text-center text-sm font-medium">{pic.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
