import React, { useState } from "react";
import ContactList from "./components/ContactList";
import SelectedContact from "./components/SelectedContact";
import "./App.css";

export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <div className="App">
      {selectedContactId ? (
        <SelectedContact
          selectedContactId={selectedContactId}
          setSelectedContactId={setSelectedContactId}
        />
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId} />
      )}
    </div>
  );
}
