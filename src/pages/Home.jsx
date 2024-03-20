import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nDb } from "../db";
import Highlight from "../components/misc/Highlight";
import { fetchServices } from "../redux/slice/servicesSlice";
import ServicesCard from "../components/card/ServicesCard";
import { collection, getDocs } from "firebase/firestore";
import Navbar from "../components/navigation/Navbar";
import AddService from "../components/card/AddService";
import DeleteModal from "../components/modals/DeleteModal";

function Home() {
  const [param, setParam] = useState(null);

  const dispatch = useDispatch();
  const services = useSelector((state) => state.services.items);

  const handleClick = (param) => {
    setParam(param);
  };

  //   const testDb = async () => {
  //     try {
  //       const querySnapshot = await getDocs(collection(db, "services"));
  //       querySnapshot.forEach((doc) => {
  //         console.log("Document data:", doc.data());
  //       });
  //       console.log("db success");
  //     } catch (error) {
  //       console.error("Error fetching documents:", error);
  //       console.log("db fail");
  //     }
  //   };

  //   const testCompatDb = async () => {
  //     try {
  //       const docRef = nDb.collection("services");

  //       docRef.get().then((snapshot) => {
  //         snapshot.docs.forEach((item) => console.log("doc", item.data()));
  //       });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  return (
    <div className="relative container mx-auto flex flex-col gap-10">
      <Navbar />
      <header className="w-full my-16 px-20 h-[50vh] flex justify-between items-center">
        <div className="w-1/2 flex flex-col gap-2">
          <h2 className="text-4xl">Learn, Collaborate</h2>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            voluptatem consequuntur labore nisi sunt vero! Quibusdam, dolorem.
            Reprehenderit sint autem sed ducimus illo porro explicabo. Animi
            amet ex quibusdam quaerat?
          </p>
          <div className="mt-4">
            <button className="px-6 py-2 bg-blue-400 text-white rounded-full">
              Learn More
            </button>
          </div>
        </div>
        <div className="w-1/4">
          <img src="/vite.svg" className="w-full h-auto" />
        </div>
      </header>

      <article>
        <h2 className="text-center text-2xl mt-10 mb-16">
          With Great Power, Comes Great Responsibility
        </h2>
        <div className="grid grid-cols-3 px-20 w-full gap-8">
          {services.map((item) => (
            <ServicesCard
              actionClick={handleClick}
              key={item.id}
              serviceData={item}
              handleModal={() => handleModal()}
            />
          ))}
          <AddService />
        </div>
      </article>

      <section className="my-10 px-20 bg-gray-100 py-10 flex flex-col gap-8">
        <h3 className="text-2xl font-semibold">Service Details</h3>
        <Highlight serviceId={param} />
      </section>
    </div>
  );
}

export default Home;
