"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";

interface MovieCardProps {
  onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: MovieCardProps) => {
  const [query, setQuery] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center w-screen max-w-3xl "
    >
      <input
        onChange={handleChange}
        type="text"
        className="border border-gray-300 rounded-l py-2 px-4 w-full focus:outline-none focus:border-blue-500"
      />
      <button
        type="submit"
        className="bg-red-600 text-white py-2 px-6 rounded-r hover:bg-blue-600 focus:outline-none"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
