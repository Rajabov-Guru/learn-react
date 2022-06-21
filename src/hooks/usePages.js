import { useMemo } from "react";
import { getPageArray } from "../utils/pages";

export const usePages = (totalPages) => {
    const postsList = useMemo(()=>{
        return getPageArray(totalPages);
    },[totalPages]);

    return postsList;
}