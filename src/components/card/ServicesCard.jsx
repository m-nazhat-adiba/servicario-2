import React, { useState } from "react";
import { nDb } from "../../db";
import { useDispatch } from "react-redux";
import { fetchServices } from "../../redux/slice/servicesSlice";
import DeleteModal from "../modals/DeleteModal";

function ServicesCard({ serviceData, actionClick, handleModal }) {
  const [modal, setModal] = useState(false);

  const dispatch = useDispatch();

  const deleteService = async (id) => {
    try {
      nDb
        .collection("services")
        .doc(id)
        .delete()
        .then(() => {
          console.log("delete success");
        });
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteService = async (id) => {
    await deleteService(id);
    setModal(false);
    dispatch(fetchServices());
  };

  const handleCloseModal = () => {
    setModal(false);
  };

  return (
    <div className="flex flex-col w-full h-full items-center gap-4">
      <div className="text-center">
        <h1 className="text-xl font-semibold">{serviceData.title}</h1>
      </div>
      <div>
        <img className="w-full rounded-lg" src={serviceData.image} />
      </div>
      <div className="text-center text-sm">
        <p>{serviceData.description}</p>
      </div>
      <div className="flex gap-6">
        <button
          className="border-2 border-gray-400 rounded-full px-4 py-2"
          onClick={() => actionClick(serviceData.id)}
        >
          View Detail
        </button>
        <button onClick={() => setModal(!modal)}>Delete</button>
      </div>

      {modal ? (
        <DeleteModal
          positiveAction={() => handleDeleteService(serviceData.id)}
          negativeAction={() => handleCloseModal()}
        />
      ) : null}
    </div>
  );
}

export default ServicesCard;
