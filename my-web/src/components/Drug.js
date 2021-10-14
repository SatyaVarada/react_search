import React from "react";

class Drug extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div
        key={data.id}
        className="py-3 px-4 border-solid border-2 border-blue-400 rounded-md space-y-1 w-full text-gray-600 shadow-md"
      >
        <div className="grid grid-cols-2">
          <h4 className="text-gray-600 text-xl">{data.name}</h4>
          <label className="text-gray-600 text-xs place-self-end mr-0">
            {data.released}
          </label>
        </div>
        {data.diseases.map((disease, index) => (
          <React.Fragment key={data.id + index}>
            <label className="text-gray-600 text-xs">{disease}</label>
            <br />
          </React.Fragment>
        ))}
        <div className="py-2 px-2 border-dotted border-2 border-blue-400  w-full text-gray-600 ">
          {data.description}
        </div>
      </div>
    );
  }
}
export default Drug;
