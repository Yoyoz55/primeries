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

export const getAllDataVoters = () => {
  return new Promise((resolve, reject) => {
    if (_isSimulatorMode) {
      setTimeout(() => {
        const rows = [
          {
            id: 342456879,
            lastName: "זיתון",
            firstName: "יואל",
            isVoted: false,
            responsible: "מוטי",
          },
          {
            id: 452456879,
            lastName: "ויצמן",
            firstName: "אבי",
            isVoted: true,
            responsible: "מוטי",
          },
          {
            id: 152456834,
            lastName: "עזריאל",
            firstName: "אלעד",
            isVoted: false,
            responsible: "מוטי",
          },
          {
            id: 654789147,
            lastName: "מלכה",
            firstName: "נאור",
            isVoted: true,
            responsible: "מוטי",
          },
          {
            id: 852147563,
            lastName: "חנונה",
            firstName: "דרור",
            isVoted: false,
            responsible: "מוטי",
          },
          {
            id: 147852369,
            lastName: "גגכגכ",
            firstName: "גכג",
            isVoted: false,
            responsible: "מוטי",
          },
          {
            id: 951753852,
            lastName: "גכגכ",
            firstName: "כעכ",
            isVoted: true,
            responsible: "מוטי",
          },
          {
            id: 159852365,
            lastName: "עכיכ",
            firstName: "דגד",
            isVoted: false,
            responsible: "מוטי",
          },
          {
            id: 456654125,
            lastName: "דגד",
            firstName: "דגככ",
            isVoted: false,
            responsible: "מוטי",
          },
          {
            id: 456234125,
            lastName: "דגד",
            firstName: "דגככ",
            isVoted: false,
            responsible: "מוטי",
          },
          {
            id: 443654125,
            lastName: "דגד",
            firstName: "דגככ",
            isVoted: false,
            responsible: "מוטי",
          },
        ];

        resolve(rows);
      }, 100);
    } else {
      axios
        .get("/allVoters", {
          params: {},
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
