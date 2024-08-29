import React, { useState } from "react";

function ImagePicker({ onImageSelect }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp",
    "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp",
    "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp",
    "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp",
    "https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp",
    "https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp",
    "https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp",
  ];

  const selectImage = (url) => {
    setSelectedImage(url);
  };

  const handleSubmit = () => {
    if (selectedImage) {
      onImageSelect(selectedImage);
      document.getElementById("imagepicker_modal").close();
    }
  };

  return (
    <div>
      <button
        className="btn btn-success text-white w-40"
        onClick={() => document.getElementById("imagepicker_modal").showModal()}
      >
        Add Image
      </button>

      <dialog id="imagepicker_modal" className="modal">
        <div className="modal-box relative">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg mb-4">Search Images</h3>

          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full mb-4"
          />

          {/* Image Picker Content */}
          <div className="carousel w-full rounded-xl">
            <div id="slide1" className="carousel-item relative w-full flex">
              {images.slice(0, 3).map((url, index) => (
                <div key={index} className="relative w-1/3">
                  <img
                    src={url}
                    alt={`Image ${index + 1}`}
                    className="w-full object-cover cursor-pointer"
                    onClick={() => selectImage(url)}
                  />
                  {selectedImage === url && (
                    <div className="absolute inset-0 bg-success opacity-60 flex items-center justify-center">
                      <span className="text-white font-bold">Selected</span>
                    </div>
                  )}
                </div>
              ))}
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>

            <div id="slide2" className="carousel-item relative w-full flex">
              {images.slice(3, 6).map((url, index) => (
                <div key={index} className="relative w-1/3">
                  <img
                    src={url}
                    alt={`Image ${index + 4}`}
                    className="w-full object-cover cursor-pointer"
                    onClick={() => selectImage(url)}
                  />
                  {selectedImage === url && (
                    <div className="absolute inset-0 bg-success opacity-60 flex items-center justify-center">
                      <span className="text-white font-bold">Selected</span>
                    </div>
                  )}
                </div>
              ))}
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>

          <div className="modal-action">
            <button
              className="btn btn-success text-white"
              onClick={handleSubmit}
            >
              Save Image
            </button>
          </div>
        </div>

        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}

export default ImagePicker;
