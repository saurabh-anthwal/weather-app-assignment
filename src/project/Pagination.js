import React, { useEffect, useState } from "react";

const Pagination = () => {
  const data = [1, 2, 22, 3, 4, 5, 6, 7, 8, 9, 10, 12, 11, 13, 14, 15];
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(5);
  const [page, setPage] = useState([]);
  useEffect(() => {
    let a = data.filter((el, i) => {
      return i < end && i > start - 1;
    });
    setPage(a);
  }, [start]);

  const prev = () => {
    if (start > 0) {
      setStart(start - 5);
      setEnd(start);
    }
  };
  const next = () => {
    if (data.length > end) {
      setStart(end);
      setEnd(end + 5);
    }
  };
  return (
    <div className="flex gap-5 items-center">
      <p className="bg-yellow-600 text-white p-2" onClick={prev}>
        prev
      </p>
      {page.map((el, i) => (
        <div key={i}>
          <p className="bg-red-600 text-white p-2">{el}</p>
        </div>
      ))}

      <p className="bg-yellow-600 text-white p-2" onClick={next}>
        next
      </p>
    </div>
  );
};

export default Pagination;
