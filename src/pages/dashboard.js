import { useState, useEffect } from "react";
import { supabase } from "../utils/supabaseClient";

function Dashboard() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    const { data: requests, error } = await supabase
      .from("requests")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) console.log("error", error);
    else setRequests(requests);
  };

  const handleDeleteRequest = async (id) => {
    const { error } = await supabase.from("requests").delete().match({ id });
    if (error) console.log("error", error);
    else fetchRequests();
  };

  return (
    <div>
      <h1>Requests</h1>
      <ul>
        {requests.map((request) => (
          <li key={request.id}>
            <p>Date: {new Date(request.created_at).toLocaleDateString()}</p>
            <p>Name: {request.name}</p>
            <p>
              Email: <a href={`mailto:${request.email}`}>{request.email}</a>
            </p>
            <p>
              Phone: <a href={`tel:${request.phone}`}>{request.phone}</a>
            </p>
            <button onClick={() => handleDeleteRequest(request.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
