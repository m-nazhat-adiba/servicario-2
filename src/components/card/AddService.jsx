import React from "react";
import * as api from "../../api";
import { useDispatch } from "react-redux";
import { fetchServices } from "../../redux/slice/servicesSlice";

const AddService = () => {
  const dispatch = useDispatch();
  const postService = async (payload) => {
    const postItem = await api.addService(payload);
  };

  const handleAddService = async () => {
    const servicePayload = {
      category: "Web Dev",
      description: "I'm teaching full-stack development program!",
      image:
        "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      price: 100,
      title: "I Will Teach You How To Be a Rich!",
      user: "some_id_3",
    };
    const docRef = await postService(servicePayload);
    dispatch(fetchServices());
  };

  return (
    <div
      onClick={() => handleAddService()}
      className="w-full min-h-40 h-full border-2 border-blue-300 rounded-xl border-dashed flex items-center justify-center"
    >
      <p className="text-lg text-gray-800">Add More Service</p>
    </div>
  );
};

export default AddService;
