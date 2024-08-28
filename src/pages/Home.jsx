import React, { useState } from "react";
import TextInput from "../components/input";

const TicketForm = () => {
  const [formData, setFormData] = useState({
    sec: "",
    row: "",
    sit: "",
    title: "",
    venue: "",
    heading: "",
    midSection: "",
    imageUrl: "",
    dateTime: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex justify-center items-center w-screen bg-white">
      <form className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-between mb-4">
          <TextInput
            placeholder="SEC"
            value={formData.sec}
            onChange={handleChange}
            name="sec"
            className="w-1/3"
          />
          <TextInput
            placeholder="ROW"
            value={formData.row}
            onChange={handleChange}
            name="row"
            className="w-1/3 mx-2"
          />
          <TextInput
            placeholder="SIT"
            value={formData.sit}
            onChange={handleChange}
            name="sit"
            className="w-1/3"
          />
        </div>

        <TextInput
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          name="title"
        />
        <TextInput
          placeholder="Venue"
          value={formData.venue}
          onChange={handleChange}
          name="venue"
        />
        <TextInput
          placeholder="Heading"
          value={formData.heading}
          onChange={handleChange}
          name="heading"
        />
        <TextInput
          placeholder="Mid Section"
          value={formData.midSection}
          onChange={handleChange}
          name="midSection"
        />
        <TextInput
          placeholder="Image URL"
          value={formData.imageUrl}
          onChange={handleChange}
          name="imageUrl"
        />
        <TextInput
          type="datetime-local"
          placeholder="Date & Time"
          value={formData.dateTime}
          onChange={handleChange}
          name="dateTime"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded w-full"
        >
          Fill all fields to proceed
        </button>
      </form>
    </div>
  );
};

export default TicketForm;
