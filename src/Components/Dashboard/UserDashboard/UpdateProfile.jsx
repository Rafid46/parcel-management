import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const UpdateProfile = () => {
  const { id } = useParams();
  console.log(id);
  const axiosSecure = useAxiosSecure();
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const photoURL = form.photoURL.value;
    const updateInfo = {
      photoURL,
    };
    console.log("info", updateInfo);
    axiosSecure.patch(`/update/${_id}`).then((res) => {
      console.log(res.data);
    });
    // fetch(`http://localhost:5020/health/update/${id}`, {
    //   method: "PATCH",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(updateInfo),
    // })
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error("Network response was not ok");
    //     }
    //     return response.json();
    //   })
    //   .then((data) => {
    //     // Handle successful response
    //     console.log("Success:", data);
    //   })
    //   .catch((error) => {
    //     // Handle errors here
    //     console.error("Error:", error);
    //   });
    // const { data: user = [] } = useQuery({
    //   queryKey: ["parcels"],
    //   queryFn: async () => {
    //     const res = await axiosSecure.get(`/bookParcel/?email=${user?.email}`);
    //     return res.data;
    //   },
    // });
  };
  return (
    <div>
      <div>
        <form onSubmit={handleUpdate}>
          <input
            type="text"
            placeholder="john@rhcp.com"
            name="photoURL"
            className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
          />
          <button className="btn">Update</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
