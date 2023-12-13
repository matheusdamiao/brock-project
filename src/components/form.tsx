import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

const Form = () => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const onDrop = useCallback((acceptedFiles: any) => {
    console.log(acceptedFiles);
    setFile(acceptedFiles[0]);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const encode = (data: any) => {
    const formData = new FormData();
    Object.keys(data).forEach((k) => {
      formData.append(k, data[k]);
    });
    return formData;
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    const data = { "form-name": "contact", name, email, message, file };

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "multipart/form-data; boundary=random" },
      body: encode(data),
    })
      .then(() => setStatus("Form Submission Successful!!"))
      .catch((error) => setStatus("Form Submission Failed!"));

    e.preventDefault();
  };

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    if (name === "name") {
      return setName(value);
    }
    if (name === "email") {
      return setEmail(value);
    }
    if (name === "message") {
      return setMessage(value);
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit} action="/thank-you/">
        <p>
          <label>
            Your Name:{" "}
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </label>
        </p>
        <p>
          <label>
            Your Email:{" "}
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </label>
        </p>
        <p>
          <label>
            Message:{" "}
            <textarea name="message" value={message} onChange={handleChange} />
          </label>
        </p>
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          {isDragActive && !file ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drag and drop some files here, or click to select files</p>
          )}
          {file && <p>{file.name}</p>}
        </div>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
      <h3>{status}</h3>
    </div>
  );
};

export default Form;
