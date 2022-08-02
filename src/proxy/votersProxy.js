import axios from "axios";

const _isSimulatorMode = true;

export const getVoterByID = (id) => {
  return new Promise((resolve, reject) => {
    if (_isSimulatorMode) {
      setTimeout(() => {
        const voter = {
          tz: 317653875,
          first_name: "yoel",
          last_name: "zeitoun",
          voted: true,
        };
        resolve(voter);
      }, 3000);
    } else {
      axios
        .get(`https://app.thevoter.xyz/persons/${id}`, {})
        .then((data) => {
          resolve(data.data);
        })
        .catch((err) => {
          reject(err);
        });
    }
  });
};

export const setVoteByID = (tz, vote) => {
  return new Promise((resolve, reject) => {
    if (_isSimulatorMode) {
      setTimeout(() => {
        const voter = {
          tz: tz,
          voted: vote,
        };
        resolve(voter);
      }, 3000);
    } else {
      axios({
        method: "post",
        url: "https://app.thevoter.xyz/persons/",
        data: {
          tz: tz,
          voted: vote,
        },
      }).then((data) => {
        resolve(data);
      });
    }
  });
};

export const getAllDataVoters = () => {
  return new Promise((resolve, reject) => {
    if (_isSimulatorMode) {
      setTimeout(() => {
        const rows = [
          {
            first_name: "שי",
            last_name: "אבא",
            tz: "27856087",
            address: "שפירא משה חיים 00021/0021",
            phone: "_+972528326637",
            id: 1,
            owner_name: null,
            voted: true,
          },
          {
            first_name: "נועה",
            last_name: "אבא",
            tz: "25519299",
            address: "שפירא משה חיים 00021/0021",
            phone: "_",
            id: 2,
            owner_name: null,
            voted: true,
          },
          {
            first_name: "פקריא",
            last_name: "אבבאו",
            tz: "319530580",
            address: 'הפלמ"ח 1/10',
            phone: "_+97288536123",
            id: 3,
            owner_name: null,
            voted: true,
          },
          {
            first_name: "אנדיכנאו",
            last_name: "אבבה",
            tz: "319543989",
            address: "הרותם 20/11",
            phone: "_+97288676112",
            id: 4,
            owner_name: null,
            voted: true,
          },
          {
            first_name: "מזל טוב",
            last_name: "אבג'י",
            tz: "26997031",
            address: "כנרת 13/3",
            phone: "_+97288556706",
            id: 5,
            owner_name: null,
            voted: true,
          },
        ];
        resolve(rows);
      }, 100);
    } else {
      axios
        .get("https://app.thevoter.xyz/persons/", {
          params: {
            skip: 0,
            limit: 5000,
          },
          validateStatus: (status) => {
            return true; // I'm always returning true, you may want to do it depending on the status received
          },
        })
        .then((data) => {
          resolve(data.data);
        })
        .catch((err) => {
          reject(err);
        });
    }
  });
};
export const getVotersOfUsers = (phoneNumber) => {
  return new Promise((resolve, reject) => {
    if (_isSimulatorMode) {
      setTimeout(() => {
        const rows = [
          {
            first_name: "שי",
            last_name: "אבא",
            tz: "27856087",
            address: "שפירא משה חיים 00021/0021",
            phone: "0528326637",
            id: 1,
            owner_name: null,
            voted: false,
          },
          {
            first_name: "נועה",
            last_name: "אבא",
            tz: "25519299",
            address: "שפירא משה חיים 00021/0021",
            phone: "_",
            id: 2,
            owner_name: null,
            voted: false,
          },
          {
            first_name: "פקריא",
            last_name: "אבבאו",
            tz: "319530580",
            address: 'הפלמ"ח 1/10',
            phone: "_+97288536123;_+97288536122",
            id: 3,
            owner_name: null,
            voted: false,
          },
          {
            first_name: "אנדיכנאו",
            last_name: "אבבה",
            tz: "319543989",
            address: "הרותם 20/11",
            phone: "_+97288676112",
            id: 4,
            owner_name: null,
            voted: false,
          },
          {
            first_name: "מזל טוב",
            last_name: "אבג'י",
            tz: "26997031",
            address: "כנרת 13/3",
            phone: "_+97288556706",
            id: 5,
            owner_name: null,
            voted: true,
          },
          {
            first_name: "מזל טוב",
            last_name: "אבג'י",
            tz: "26997031",
            address: "כנרת 13/3",
            phone: "_+97288556706",
            id: 6,
            owner_name: null,
            voted: true,
          },
          {
            first_name: "מזל טוב",
            last_name: "אבג'י",
            tz: "26997031",
            address: "כנרת 13/3",
            phone: "_+97288556706",
            id: 7,
            owner_name: null,
            voted: true,
          },
          {
            first_name: "מזל טוב",
            last_name: "אבג'י",
            tz: "26997031",
            address: "כנרת 13/3",
            phone: "_+97288556706",
            id: 8,
            owner_name: null,
            voted: true,
          },
          {
            first_name: "מזל טוב",
            last_name: "אבג'י",
            tz: "26997031",
            address: "כנרת 13/3",
            phone: "_+97288556706",
            id: 9,
            owner_name: null,
            voted: true,
          },
          {
            first_name: "מזל טוב",
            last_name: "אבג'י",
            tz: "26997031",
            address: "כנרת 13/3",
            phone: "_+97288556706",
            id: 10,
            owner_name: null,
            voted: true,
          },
          {
            first_name: "מזל טוב",
            last_name: "אבג'י",
            tz: "26997031",
            address: "כנרת 13/3",
            phone: "_+97288556706",
            id: 11,
            owner_name: null,
            voted: true,
          },
          {
            first_name: "מזל טוב",
            last_name: "אבג'י",
            tz: "26997031",
            address: "כנרת 13/3",
            phone: "_+97288556706",
            id: 12,
            owner_name: null,
            voted: true,
          },
          {
            first_name: "מזל טוב",
            last_name: "אבג'י",
            tz: "26997031",
            address: "כנרת 13/3",
            phone: "_+97288556706",
            id: 13,
            owner_name: null,
            voted: true,
          },
          {
            first_name: "מזל טוב",
            last_name: "אבג'י",
            tz: "26997031",
            address: "כנרת 13/3",
            phone: "_+97288556706",
            id: 14,
            owner_name: null,
            voted: true,
          },
        ];
        resolve(rows);
      }, 100);
    } else {
      axios
        .get(`https://app.thevoter.xyz/users/${phoneNumber}/persons`, {
          params: {},
          validateStatus: (status) => {
            return true; // I'm always returning true, you may want to do it depending on the status received
          },
        })
        .then((data) => {
          resolve(data.data);
        })
        .catch((err) => {
          reject(err);
        });
    }
  });
};

export const getVotersStats = (phoneNumber) => {
  return new Promise((resolve, reject) => {
    if (_isSimulatorMode) {
      setTimeout(() => {
        const data = {
          voted: "400",
          not_voted: "200",
          percentage: "75",
          owner_name: phoneNumber,
        };
        resolve(data);
      }, 100);
    } else {
      axios
        .get(`https://app.thevoter.xyz/users/${phoneNumber}/stats`, {
          params: {},
          validateStatus: (status) => {
            return true; // I'm always returning true, you may want to do it depending on the status received
          },
        })
        .then((data) => {
          resolve(data.data);
        })
        .catch((err) => {
          reject(err);
        });
    }
  });
};

export const getStatisticVote = () => {
  return new Promise((resolve, reject) => {
    if (_isSimulatorMode) {
      setTimeout(() => {
        const stats = {
          voted: "500",
          not_voted: "1000",
          percentage: "33.33",
        };
        resolve(stats);
      }, 100);
    } else {
      axios
        .get("https://app.thevoter.xyz/admin/stats", {
          validateStatus: (status) => {
            return true; // I'm always returning true, you may want to do it depending on the status received
          },
        })
        .then((data) => {
          resolve(data.data);
        })
        .catch((err) => {
          reject(err);
        });
    }
  });
};

export const getStatisticOfAllUsers = () => {
  return new Promise((resolve, reject) => {
    if (_isSimulatorMode) {
      setTimeout(() => {
        const stats = [
          {
            voted: "5",
            not_voted: "3",
            percentage: "62.50",
            owner_name: "naor malka",
          },
          {
            voted: "1",
            not_voted: "0",
            percentage: "100",
            owner_name: "נאור מלכה המלך",
          },
          {
            voted: "2",
            not_voted: "8",
            percentage: "20",
            owner_name: "יואל",
          },
          {
            voted: "3",
            not_voted: "9",
            percentage: "33.33",
            owner_name: "אלעד",
          },
          {
            voted: "1",
            not_voted: "0",
            percentage: "100",
            owner_name: "דרור",
          },
        ];
        resolve(stats);
      }, 100);
    } else {
      axios
        .get("https://app.thevoter.xyz/admin/user_stats", {
          validateStatus: (status) => {
            return true; // I'm always returning true, you may want to do it depending on the status received
          },
        })
        .then((data) => {
          resolve(data.data);
        })
        .catch((err) => {
          reject(err);
        });
    }
  });
};
