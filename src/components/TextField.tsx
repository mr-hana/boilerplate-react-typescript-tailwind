import React from "react";

export default (props: { value: string }) => {
  return (
    <input
      {...props}
      type="text"
      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray placeholder-gray-light text-gray-dark focus:outline-none focus:shadow-outline-blue focus:border-secondary-dark sm:text-sm" />
  )
}