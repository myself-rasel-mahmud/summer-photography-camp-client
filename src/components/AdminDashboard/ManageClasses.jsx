import { FaEnvelope } from "react-icons/fa";
import useAllClasses from "../../hooks/useAllClasses";
import Swal from "sweetalert2";

const ManageClasses = () => {
  const [allClasses, refetch] = useAllClasses();

  console.log(allClasses);

  const handleApprove = (approveClass) => {
    Swal.fire({
      title: "Are you sure?",
      text: `To Approve "${approveClass.name}" class`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Approve!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_api_link}/classes/${approveClass._id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ status: "approved" }),
        })
          .then((res) => res.json())
          .then(() => {
            Swal.fire(
              "Welcome!",
              `"${approveClass.name.toUpperCase()}" Class Approved.`,
              "success"
            );
            refetch();
          });
      }
    });
  };
  const handleDeny = (denyClass) => {
    Swal.fire({
      title: "Are you sure?",
      text: `To Approve "${denyClass.name}" class`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, I want to Deny!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_api_link}/classes/${denyClass._id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ status: "denied" }),
        })
          .then((res) => res.json())
          .then(() => {
            Swal.fire(
              "Welcome!",
              `"${denyClass.name.toUpperCase()}" Class Denied.`,
              "success"
            );
            refetch();
          });
      }
    });
  };
  const handleFeedback = (feedback) => {
    console.log(feedback);
    Swal.fire({
      title: "Submit your Feedback",
      input: "text",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "Send Feedback",
      showLoaderOnConfirm: true,
      preConfirm: (feedbackMsg) => {
        return fetch(
          `${import.meta.env.VITE_api_link}/classes/${feedback._id}`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ feedbackMsg }),
          }
        )
          .then((response) => {
            if (!response.ok) {
              throw new Error(response.statusText);
            }
            return response.json();
          })
          .catch((error) => {
            Swal.showValidationMessage(`Request failed: ${error}`);
          });
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Send Feedback to",
          text: (`INSTRUCTOR: ${feedback.instructorName.toUpperCase()} for Class: ${feedback.name}`),
          imageUrl: feedback.instructorImg,
        });
        refetch();
      }
    });
  };

  return (
    <div className="overflow-auto max-h-screen">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Class Info</th>
            <th>Instructor Info</th>
            <th>Available Seats</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {allClasses.map((allClass, index) => (
            <tr key={allClass._id}>
              <th>{index + 1}</th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={allClass.classImg}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{allClass.name}</div>

                    <span className="badge py-3 badge-ghost">
                      Price: ${allClass.price}
                    </span>
                  </div>
                </div>
              </td>
              <td>
                <span className="text-accent font-bold">
                  Name: {allClass.instructorName}
                </span>
                <br />
                <span className="badge badge-ghost badge-sm">
                  <FaEnvelope className="mr-2"></FaEnvelope>{" "}
                  {allClass.instructorEmail}
                </span>
              </td>
              <td>{allClass.availableSeats}</td>
              <td className="text-center">
                {allClass.status == "approved" ? (
                  <button className="btn btn-primary btn-xs">
                    {allClass.status}
                  </button>
                ) : allClass.status == "denied" ? (
                  <button className="btn btn-error btn-xs">
                    {allClass.status}
                  </button>
                ) : (
                  <button className="btn btn-warning btn-xs">Pending</button>
                )}
              </td>
              <td>
                <div className="flex gap-1 bg-base-300 p-2 rounded-lg">
                  <button
                    onClick={() => handleApprove(allClass)}
                    className="btn btn-primary btn-xs"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleDeny(allClass)}
                    className="btn btn-error btn-xs"
                  >
                    Deny
                  </button>
                  <button
                    onClick={() => handleFeedback(allClass)}
                    className="btn btn-accent btn-xs"
                  >
                    feedback
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageClasses;
