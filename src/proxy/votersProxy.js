import axios from "axios";

const _isSimulatorMode = true;

export const getVoterByID = (id) => {
  return new Promise((resolve, reject) => {
    if (_isSimulatorMode) {
      setTimeout(() => {
        const voter = {
          id: 317653875,
          firstName: "yoel",
          lastName: "zeitoun",
          isVoted: true,
        };
        resolve(voter);
      }, 3000);
    } else {
      axios
        .get("/api", {
          params: {
            id: id,
          },
        })
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    }
  });
};

export const setVoteByID = (id, vote) => {
  return new Promise((resolve, reject) => {
    if (_isSimulatorMode) {
      setTimeout(() => {
        const voter = {
          id: id,
          vote: vote,
        };
        resolve(voter);
      }, 3000);
    } else {
      axios({
        method: "post",
        url: "/setVote",
        data: {
          id: id,
          vote: vote,
        },
      }).then((data) => {});
    }
  });
};
