import React, { useState } from "react";
import TextInput from "../components/input";
// import SplashScreen from "./SplashScreen";

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

  const [isLoading, setIsLoading] = useState(true);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const seats = formData.sit.split(",").map((seat) => seat.trim());
    const ticketData = { ...formData, sit: seats };

    let tickets = JSON.parse(localStorage.getItem("tickets")) || [];
    tickets.push(ticketData);
    localStorage.setItem("tickets", JSON.stringify(tickets));

    setFormData({
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
  };

  const clearLocalStorage = () => {
    localStorage.removeItem("tickets");
    alert("LocalStorage cleared!");
  };

  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {/* <SplashScreen isLoading={isLoading} onLoadComplete={handleLoadComplete} /> */}
      
        <div className="min-h-screen flex flex-col items-center w-screen bg-white">
          <button
            onClick={clearLocalStorage}
            className="bg-red-600 text-white py-2 px-4 rounded mt-4 mb-6"
          >
            Clear LocalStorage
          </button>
          <form
            className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
            onSubmit={handleSubmit}
          >
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
              type="text"
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
      
    </>
  );
};

export default TicketForm;
