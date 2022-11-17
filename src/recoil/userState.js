import { atom } from "recoil";

export const userRecoilState = atom({
    key: "userState",
    default: {
        userName: "",
        userId: "",
        userPassword: "",
    },
});