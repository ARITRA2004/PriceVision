import React, { useState } from "react";

const Uploadimage = () => {
  const [image, setImage] = useState("");

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="p-3 w-2xl felx flex-col h-1/2 rounded-4xl border-amber-400 border-2">
        <div className="flex items-center justify-between w-auto p-2 bg-blue-100">
          <div>
            Upload Images
            <p className="text-gray-600">Buy items faster with low price</p>
          </div>
          <div>❌</div>
        </div>
        <div className="choose-image w-full h-full">
          <div htmlFor="">Select Product Image</div>
          <div className=" border-b-blue-800 border-3 rounded-4xl overflow-hidden p-2 border-dashed h-full">
            <input
              className="bg-amber-500"
              type="file"
              accept="image/*"
              name="image"
              id="image"
              placeholder=""
              onChange={handleImage}
            />
          </div>
          {console.log(image)}
        </div>
      </div>
    </div>
  );
};

export default Uploadimage;