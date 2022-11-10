import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Dental Buddy`;
  }, [title]);
};

export default useTitle;
