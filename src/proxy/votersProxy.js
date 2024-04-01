import axios from "axios";

const _isSimulatorMode = false;

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
        //reject("no");
        resolve(voter);
      }, 3000);
    } else {
      axios
        .get(`https://vote-today.com/persons/${id}`, {})
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
        url: "https://vote-today.com/persons/",
        data: {
          tz: tz,
          voted: vote,
        },
      })
        .then((data) => {
          resolve(data);
        })
        .catch(() => {
          reject(false);
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
            phone: "0528326637",
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
            phone: "088536123",
            id: 3,
            owner_name: null,
            voted: true,
          },
          {
            first_name: "אנדיכנאו",
            last_name: "אבבה",
            tz: "319543989",
            address: "הרותם 20/11",
            phone: "088676112",
            id: 4,
            owner_name: null,
            voted: true,
          },
          {
            first_name: "מזל טוב",
            last_name: "אבג'י",
            tz: "26997031",
            address: "כנרת 13/3",
            phone: "088556706",
            id: 5,
            owner_name: null,
            voted: true,
          },
        ];
        resolve(rows);
      }, 100);
    } else {
      axios
        .get("https://vote-today.com/persons/", {
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
            phone: "088536122",
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
          {
            first_name: "שי",
            last_name: "אבא",
            tz: "27856087",
            address: "שפירא משה חיים 00021/0021",
            phone: "0528326637",
            id: 15,
            owner_name: null,
            voted: false,
          },
          {
            first_name: "נועה",
            last_name: "אבא",
            tz: "25519299",
            address: "שפירא משה חיים 00021/0021",
            phone: "_",
            id: 16,
            owner_name: null,
            voted: false,
          },
          {
            first_name: "פקריא",
            last_name: "אבבאו",
            tz: "319530580",
            address: 'הפלמ"ח 1/10',
            phone: "088536122",
            id: 17,
            owner_name: null,
            voted: false,
          },
          {
            first_name: "אנדיכנאו",
            last_name: "אבבה",
            tz: "319543989",
            address: "הרותם 20/11",
            phone: "_+97288676112",
            id: 18,
            owner_name: null,
            voted: false,
          },
          {
            first_name: "מזל טוב",
            last_name: "אבג'י",
            tz: "26997031",
            address: "כנרת 13/3",
            phone: "_+97288556706",
            id: 19,
            owner_name: null,
            voted: true,
          },
          {
            first_name: "מזל טוב",
            last_name: "אבג'י",
            tz: "26997031",
            address: "כנרת 13/3",
            phone: "_+97288556706",
            id: 20,
            owner_name: null,
            voted: true,
          },
          {
            first_name: "מזל טוב",
            last_name: "אבג'י",
            tz: "26997031",
            address: "כנרת 13/3",
            phone: "_+97288556706",
            id: 21,
            owner_name: null,
            voted: true,
          },
          {
            first_name: "מזל טוב",
            last_name: "אבג'י",
            tz: "26997031",
            address: "כנרת 13/3",
            phone: "_+97288556706",
            id: 22,
            owner_name: null,
            voted: true,
          },
          {
            first_name: "מזל טוב",
            last_name: "אבג'י",
            tz: "26997031",
            address: "כנרת 13/3",
            phone: "_+97288556706",
            id: 23,
            owner_name: null,
            voted: true,
          },
          {
            first_name: "מזל טוב",
            last_name: "אבג'י",
            tz: "26997031",
            address: "כנרת 13/3",
            phone: "_+97288556706",
            id: 24,
            owner_name: null,
            voted: true,
          },
          {
            first_name: "מזל טוב",
            last_name: "אבג'י",
            tz: "26997031",
            address: "כנרת 13/3",
            phone: "_+97288556706",
            id: 25,
            owner_name: null,
            voted: true,
          },
          {
            first_name: "מזל טוב",
            last_name: "אבג'י",
            tz: "26997031",
            address: "כנרת 13/3",
            phone: "_+97288556706",
            id: 26,
            owner_name: null,
            voted: true,
          },
          {
            first_name: "מזל טוב",
            last_name: "אבג'י",
            tz: "26997031",
            address: "כנרת 13/3",
            phone: "_+97288556706",
            id: 27,
            owner_name: null,
            voted: true,
          },
          {
            first_name: "מזל טוב",
            last_name: "אבג'י",
            tz: "26997031",
            address: "כנרת 13/3",
            phone: "_+97288556706",
            id: 28,
            owner_name: null,
            voted: true,
          },
          {
            first_name: "שי",
            last_name: "אבא",
            tz: "27856087",
            address: "שפירא משה חיים 00021/0021",
            phone: "0528326637",
            id: 29,
            owner_name: null,
            voted: false,
          },
          {
            first_name: "נועה",
            last_name: "אבא",
            tz: "25519299",
            address: "שפירא משה חיים 00021/0021",
            phone: "_",
            id: 30,
            owner_name: null,
            voted: false,
          },
          {
            first_name: "פקריא",
            last_name: "אבבאו",
            tz: "319530580",
            address: 'הפלמ"ח 1/10',
            phone: "088536122",
            id: 31,
            owner_name: null,
            voted: false,
          },
          {
            first_name: "אנדיכנאו",
            last_name: "אבבה",
            tz: "319543989",
            address: "הרותם 20/11",
            phone: "_+97288676112",
            id: 32,
            owner_name: null,
            voted: false,
          },
          {
            first_name: "מזל טוב",
            last_name: "אבג'י",
            tz: "26997031",
            address: "כנרת 13/3",
            phone: "_+97288556706",
            id: 33,
            owner_name: null,
            voted: true,
          },
          {
            first_name: "מזל טוב",
            last_name: "אבג'י",
            tz: "26997031",
            address: "כנרת 13/3",
            phone: "_+97288556706",
            id: 34,
            owner_name: null,
            voted: true,
          },
          {
            first_name: "מזל טוב",
            last_name: "אבג'י",
            tz: "26997031",
            address: "כנרת 13/3",
            phone: "_+97288556706",
            id: 35,
            owner_name: null,
            voted: true,
          },
          {
            first_name: "מזל טוב",
            last_name: "אבג'י",
            tz: "26997031",
            address: "כנרת 13/3",
            phone: "_+97288556706",
            id: 36,
            owner_name: null,
            voted: true,
          },
          {
            first_name: "מזל טוב",
            last_name: "אבג'י",
            tz: "26997031",
            address: "כנרת 13/3",
            phone: "_+97288556706",
            id: 37,
            owner_name: null,
            voted: true,
          },
          {
            first_name: "מזל טוב",
            last_name: "אבג'י",
            tz: "26997031",
            address: "כנרת 13/3",
            phone: "_+97288556706",
            id: 38,
            owner_name: null,
            voted: true,
          },
          {
            first_name: "מזל טוב",
            last_name: "אבג'י",
            tz: "26997031",
            address: "כנרת 13/3",
            phone: "_+97288556706",
            id: 39,
            owner_name: null,
            voted: true,
          },
          {
            first_name: "מזל טוב",
            last_name: "אבג'י",
            tz: "26997031",
            address: "כנרת 13/3",
            phone: "_+97288556706",
            id: 40,
            owner_name: null,
            voted: true,
          },
          {
            first_name: "מזל טוב",
            last_name: "אבג'י",
            tz: "26997031",
            address: "כנרת 13/3",
            phone: "_+97288556706",
            id: 41,
            owner_name: null,
            voted: true,
          },
          {
            first_name: "מזל טוב",
            last_name: "אבג'י",
            tz: "26997031",
            address: "כנרת 13/3",
            phone: "_+97288556706",
            id: 42,
            owner_name: null,
            voted: true,
          },
          {
            first_name: "שי",
            last_name: "אבא",
            tz: "27856087",
            address: "שפירא משה חיים 00021/0021",
            phone: "0528326637",
            id: 43,
            owner_name: null,
            voted: false,
          },
          {
            first_name: "נועה",
            last_name: "אבא",
            tz: "25519299",
            address: "שפירא משה חיים 00021/0021",
            phone: "_",
            id: 44,
            owner_name: null,
            voted: false,
          },
          {
            first_name: "פקריא",
            last_name: "אבבאו",
            tz: "319530580",
            address: 'הפלמ"ח 1/10',
            phone: "088536122",
            id: 45,
            owner_name: null,
            voted: false,
          },
          {
            first_name: "אנדיכנאו",
            last_name: "אבבה",
            tz: "319543989",
            address: "הרותם 20/11",
            phone: "_+97288676112",
            id: 46,
            owner_name: null,
            voted: false,
          },
          {
            first_name: "מזל טוב",
            last_name: "אבג'י",
            tz: "26997031",
            address: "כנרת 13/3",
            phone: "_+97288556706",
            id: 47,
            owner_name: null,
            voted: true,
          },
          {
            first_name: "מזל טוב",
            last_name: "אבג'י",
            tz: "26997031",
            address: "כנרת 13/3",
            phone: "_+97288556706",
            id: 48,
            owner_name: null,
            voted: true,
          },
          {
            first_name: "מזל טוב",
            last_name: "אבג'י",
            tz: "26997031",
            address: "כנרת 13/3",
            phone: "_+97288556706",
            id: 49,
            owner_name: null,
            voted: true,
          },
          {
            first_name: "מזל טוב",
            last_name: "אבג'י",
            tz: "26997031",
            address: "כנרת 13/3",
            phone: "_+97288556706",
            id: 50,
            owner_name: null,
            voted: true,
          },
          {
            first_name: "מזל טוב",
            last_name: "אבג'י",
            tz: "26997031",
            address: "כנרת 13/3",
            phone: "_+97288556706",
            id: 51,
            owner_name: null,
            voted: true,
          },
          {
            first_name: "מזל טוב",
            last_name: "אבג'י",
            tz: "26997031",
            address: "כנרת 13/3",
            phone: "_+97288556706",
            id: 52,
            owner_name: null,
            voted: true,
          },
          {
            first_name: "מזל טוב",
            last_name: "אבג'י",
            tz: "26997031",
            address: "כנרת 13/3",
            phone: "_+97288556706",
            id: 53,
            owner_name: null,
            voted: true,
          },
          {
            first_name: "מזל טוב",
            last_name: "אבג'י",
            tz: "26997031",
            address: "כנרת 13/3",
            phone: "_+97288556706",
            id: 54,
            owner_name: null,
            voted: true,
          },
          {
            first_name: "מזל טוב",
            last_name: "אבג'י",
            tz: "26997031",
            address: "כנרת 13/3",
            phone: "_+97288556706",
            id: 55,
            owner_name: null,
            voted: true,
          },
          {
            first_name: "מזל טוב",
            last_name: "אבג'י",
            tz: "26997031",
            address: "כנרת 13/3",
            phone: "_+97288556706",
            id: 56,
            owner_name: null,
            voted: true,
          },
          {
            first_name: "שי",
            last_name: "אבא",
            tz: "27856087",
            address: "שפירא משה חיים 00021/0021",
            phone: "0528326637",
            id: 57,
            owner_name: null,
            voted: false,
          },
          {
            first_name: "נועה",
            last_name: "אבא",
            tz: "25519299",
            address: "שפירא משה חיים 00021/0021",
            phone: "_",
            id: 58,
            owner_name: null,
            voted: false,
          },
          {
            first_name: "פקריא",
            last_name: "אבבאו",
            tz: "319530580",
            address: 'הפלמ"ח 1/10',
            phone: "088536122",
            id: 59,
            owner_name: null,
            voted: false,
          },
          {
            first_name: "אנדיכנאו",
            last_name: "אבבה",
            tz: "319543989",
            address: "הרותם 20/11",
            phone: "_+97288676112",
            id: 60,
            owner_name: null,
            voted: false,
          },
          {
            first_name: "מזל טוב",
            last_name: "אבג'י",
            tz: "26997031",
            address: "כנרת 13/3",
            phone: "_+97288556706",
            id: 61,
            owner_name: null,
            voted: true,
          },
          {
            first_name: "מזל טוב",
            last_name: "אבג'י",
            tz: "26997031",
            address: "כנרת 13/3",
            phone: "_+97288556706",
            id: 62,
            owner_name: null,
            voted: true,
          },
          {
            first_name: "מזל טוב",
            last_name: "אבג'י",
            tz: "26997031",
            address: "כנרת 13/3",
            phone: "_+97288556706",
            id: 63,
            owner_name: null,
            voted: true,
          },
          {
            first_name: "מזל טוב",
            last_name: "אבג'י",
            tz: "26997031",
            address: "כנרת 13/3",
            phone: "_+97288556706",
            id: 64,
            owner_name: null,
            voted: true,
          },
          {
            first_name: "מזל טוב",
            last_name: "אבג'י",
            tz: "26997031",
            address: "כנרת 13/3",
            phone: "_+97288556706",
            id: 65,
            owner_name: null,
            voted: true,
          },
          {
            first_name: "מזל טוב",
            last_name: "אבג'י",
            tz: "26997031",
            address: "כנרת 13/3",
            phone: "_+97288556706",
            id: 66,
            owner_name: null,
            voted: true,
          },
          {
            first_name: "מזל טוב",
            last_name: "אבג'י",
            tz: "26997031",
            address: "כנרת 13/3",
            phone: "_+97288556706",
            id: 67,
            owner_name: null,
            voted: true,
          },
          {
            first_name: "מזל טוב",
            last_name: "אבג'י",
            tz: "26997031",
            address: "כנרת 13/3",
            phone: "_+97288556706",
            id: 68,
            owner_name: null,
            voted: true,
          },
          {
            first_name: "מזל טוב",
            last_name: "אבג'י",
            tz: "26997031",
            address: "כנרת 13/3",
            phone: "_+97288556706",
            id: 69,
            owner_name: null,
            voted: true,
          },
          {
            first_name: "מזל טוב",
            last_name: "אבג'י",
            tz: "26997031",
            address: "כנרת 13/3",
            phone: "_+97288556706",
            id: 70,
            owner_name: null,
            voted: true,
          },
          {
            first_name: "שי",
            last_name: "אבא",
            tz: "27856087",
            address: "שפירא משה חיים 00021/0021",
            phone: "0528326637",
            id: 71,
            owner_name: null,
            voted: false,
          },
          {
            first_name: "נועה",
            last_name: "אבא",
            tz: "25519299",
            address: "שפירא משה חיים 00021/0021",
            phone: "_",
            id: 72,
            owner_name: null,
            voted: false,
          },
          {
            first_name: "פקריא",
            last_name: "אבבאו",
            tz: "319530580",
            address: 'הפלמ"ח 1/10',
            phone: "088536122",
            id: 73,
            owner_name: null,
            voted: false,
          },
          {
            first_name: "אנדיכנאו",
            last_name: "אבבה",
            tz: "319543989",
            address: "הרותם 20/11",
            phone: "_+97288676112",
            id: 74,
            owner_name: null,
            voted: false,
          },
          {
            first_name: "מזל טוב",
            last_name: "אבג'י",
            tz: "26997031",
            address: "כנרת 13/3",
            phone: "_+97288556706",
            id: 75,
            owner_name: null,
            voted: true,
          },
          {
            first_name: "מזל טוב",
            last_name: "אבג'י",
            tz: "26997031",
            address: "כנרת 13/3",
            phone: "_+97288556706",
            id: 76,
            owner_name: null,
            voted: true,
          },
          {
            first_name: "מזל טוב",
            last_name: "אבג'י",
            tz: "26997031",
            address: "כנרת 13/3",
            phone: "_+97288556706",
            id: 77,
            owner_name: null,
            voted: true,
          },
          {
            first_name: "מזל טוב",
            last_name: "אבג'י",
            tz: "26997031",
            address: "כנרת 13/3",
            phone: "_+97288556706",
            id: 78,
            owner_name: null,
            voted: true,
          },
          {
            first_name: "מזל טוב",
            last_name: "אבג'י",
            tz: "26997031",
            address: "כנרת 13/3",
            phone: "_+97288556706",
            id: 79,
            owner_name: null,
            voted: true,
          },
          {
            first_name: "מזל טוב",
            last_name: "אבג'י",
            tz: "26997031",
            address: "כנרת 13/3",
            phone: "_+97288556706",
            id: 80,
            owner_name: null,
            voted: true,
          },
          {
            first_name: "מזל טוב",
            last_name: "אבג'י",
            tz: "26997031",
            address: "כנרת 13/3",
            phone: "_+97288556706",
            id: 81,
            owner_name: null,
            voted: true,
          },
          {
            first_name: "מזל טוב",
            last_name: "אבג'י",
            tz: "26997031",
            address: "כנרת 13/3",
            phone: "_+97288556706",
            id: 82,
            owner_name: null,
            voted: true,
          },
          {
            first_name: "מזל טוב",
            last_name: "אבג'י",
            tz: "26997031",
            address: "כנרת 13/3",
            phone: "_+97288556706",
            id: 83,
            owner_name: null,
            voted: true,
          },
          {
            first_name: "מזל טוב",
            last_name: "אבג'י",
            tz: "26997031",
            address: "כנרת 13/3",
            phone: "_+97288556706",
            id: 84,
            owner_name: null,
            voted: true,
          },
          {
            first_name: "שי",
            last_name: "אבא",
            tz: "27856087",
            address: "שפירא משה חיים 00021/0021",
            phone: "0528326637",
            id: 85,
            owner_name: null,
            voted: false,
          },
          {
            first_name: "נועה",
            last_name: "אבא",
            tz: "25519299",
            address: "שפירא משה חיים 00021/0021",
            phone: "_",
            id: 86,
            owner_name: null,
            voted: false,
          },
          {
            first_name: "פקריא",
            last_name: "אבבאו",
            tz: "319530580",
            address: 'הפלמ"ח 1/10',
            phone: "088536122",
            id: 87,
            owner_name: null,
            voted: false,
          },
          {
            first_name: "אנדיכנאו",
            last_name: "אבבה",
            tz: "319543989",
            address: "הרותם 20/11",
            phone: "_+97288676112",
            id: 88,
            owner_name: null,
            voted: false,
          },
          {
            first_name: "מזל טוב",
            last_name: "אבג'י",
            tz: "26997031",
            address: "כנרת 13/3",
            phone: "_+97288556706",
            id: 89,
            owner_name: null,
            voted: true,
          },
          {
            first_name: "מזל טוב",
            last_name: "אבג'י",
            tz: "26997031",
            address: "כנרת 13/3",
            phone: "_+97288556706",
            id: 90,
            owner_name: null,
            voted: true,
          },
          {
            first_name: "מזל טוב",
            last_name: "אבג'י",
            tz: "26997031",
            address: "כנרת 13/3",
            phone: "_+97288556706",
            id: 91,
            owner_name: null,
            voted: true,
          },
          {
            first_name: "מזל טוב",
            last_name: "אבג'י",
            tz: "26997031",
            address: "כנרת 13/3",
            phone: "_+97288556706",
            id: 92,
            owner_name: null,
            voted: true,
          },
          {
            first_name: "מזל טוב",
            last_name: "אבג'י",
            tz: "26997031",
            address: "כנרת 13/3",
            phone: "_+97288556706",
            id: 93,
            owner_name: null,
            voted: true,
          },
          {
            first_name: "מזל טוב",
            last_name: "אבג'י",
            tz: "26997031",
            address: "כנרת 13/3",
            phone: "_+97288556706",
            id: 94,
            owner_name: null,
            voted: true,
          },
          {
            first_name: "מזל טוב",
            last_name: "אבג'י",
            tz: "26997031",
            address: "כנרת 13/3",
            phone: "_+97288556706",
            id: 95,
            owner_name: null,
            voted: true,
          },
          {
            first_name: "מזל טוב",
            last_name: "אבג'י",
            tz: "26997031",
            address: "כנרת 13/3",
            phone: "_+97288556706",
            id: 96,
            owner_name: null,
            voted: true,
          },
          {
            first_name: "מזל טוב",
            last_name: "אבג'י",
            tz: "26997031",
            address: "כנרת 13/3",
            phone: "_+97288556706",
            id: 97,
            owner_name: null,
            voted: true,
          },
          {
            first_name: "מזל טוב",
            last_name: "אבג'י",
            tz: "26997031",
            address: "כנרת 13/3",
            phone: "_+97288556706",
            id: 98,
            owner_name: null,
            voted: true,
          },
          {
            first_name: "שי",
            last_name: "אבא",
            tz: "27856087",
            address: "שפירא משה חיים 00021/0021",
            phone: "0528326637",
            id: 99,
            owner_name: null,
            voted: false,
          },
          {
            first_name: "נועה",
            last_name: "אבא",
            tz: "25519299",
            address: "שפירא משה חיים 00021/0021",
            phone: "_",
            id: 100,
            owner_name: null,
            voted: false,
          },
          {
            first_name: "פקריא",
            last_name: "אבבאו",
            tz: "319530580",
            address: 'הפלמ"ח 1/10',
            phone: "088536122",
            id: 101,
            owner_name: null,
            voted: false,
          },
        ];
        resolve(rows);
        //reject("no");
      }, 100);
    } else {
      axios
        .get(`https://vote-today.com/users/${phoneNumber}/persons`, {
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
        .get(`https://vote-today.com/users/${phoneNumber}/stats`, {
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
        .get("https://vote-today.com/admin/stats", {
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
        .get("https://vote-today.com/admin/user_stats", {
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
