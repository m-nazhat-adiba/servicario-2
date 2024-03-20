import React from "react";

const DeleteModal = ({ positiveAction, negativeAction }) => {
  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="min-w-96 min-h-48 flex flex-col bg-white shadow-lg p-6 rounded-lg">
        {/* header */}
        <div className="py-2">
          <h5>Delete</h5>
        </div>
        {/* field */}
        <div className="my-10">
          <p>Are you sure want to delete?</p>
        </div>
        {/* CTA */}
        <div className="flex w-full justify-end gap-6 mt-6">
          <button
            onClick={positiveAction}
            className="px-4 py-2 min-w-20 rounded-full bg-red-500 text-white"
          >
            Yes
          </button>
          <button onClick={negativeAction}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
