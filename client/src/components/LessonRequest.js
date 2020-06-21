import React, { useEffect, useState } from "react";
import { useGlobalContext, authHeader } from "../context/GlobalContext";
import axios from "axios";

export default function LessonRequest() {
  const { lessonRequests, getLessonRequests } = useGlobalContext();

  useEffect(() => {
    getLessonRequests();
  }, []);

  const RequestCard = ({ lessonRequest: { status, id } }) => {
    const [colorStatus, setColorStatus] = useState(status);
    const acceptRequest = async () => {
      if (!status) {
        try {
          await axios.patch(
            `/api/v1/lessonRequests/${id}`,
            {},
            { headers: authHeader }
          );
          setColorStatus(true);
        } catch (error) {
          console.log(error);
        }
      }
    };

    return (
      <div>
        <div className="has-background-white">
          <div className="columns px-4 is-vcentered">
            <div className="column">
              <h4 className="is-size-4">
                <strong>Meeran Kazmi</strong>
              </h4>
              <p>Piano Masterclass</p>
            </div>
            <div className="column is-2 is-pulled-right">
              <button
                className={`button ${
                  colorStatus ? "is-success" : "is-primary"
                }`}
                onClick={acceptRequest}
              >
                {colorStatus ? "Accepted" : "Accept"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container">
      <h3 className="is-size-3 my-5 has-text-centered">Lesson Requests</h3>
      {lessonRequests.map((lessonRequest) => {
        return (
          <RequestCard key={lessonRequest.id} lessonRequest={lessonRequest} />
        );
      })}
    </div>
  );
}
