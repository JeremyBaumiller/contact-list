import React, { useState, useEffect } from "react";

const dummyContacts = [
  { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
  { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
  { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
];

export default function SelectedContact({
  selectedContactId,
  setSelectedContactId,
}) {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    async function fetchContact() {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const result = await response.json();
        setContact(result);
        console.log(result);
      } catch (error) {
        console.error("Error fetching contact:", error);
        setContact(dummyContacts.find((c) => c.id === selectedContactId));
      }
    }
    if (selectedContactId) {
      fetchContact();
    }
  }, [selectedContactId]);

  if (!contact) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <button onClick={() => setSelectedContactId(null)}>
        Back to Contact List
      </button>
      <h2>Contact Details</h2>
      <p>
        <strong>Name:</strong> {contact.name}
      </p>
      <p>
        <strong>Email:</strong> {contact.email}
      </p>
      <p>
        <strong>Phone:</strong> {contact.phone}
      </p>
    </div>
  );
}
