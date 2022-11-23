import { atom } from "recoil";

export const userRecoilState = atom({
    key: "userRecoilState",
    default: {
        userName: "",
        userId: "",
        userPassword: "",
    },
});