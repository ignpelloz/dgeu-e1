interface IGlobalState {
    songTitle: string;
    collapsed: boolean;
}

export default IGlobalState;

export const initialState: IGlobalState = {
    collapsed: true,
    songTitle: "La tecnologería comp."
}