import { useFormik } from "formik";
import React, { useState } from "react";
import * as yup from "yup";
import HeadPage from "./HeadPage";
import { useNavigate } from "react-router-dom";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
const MarkdownCreatePage = () => {
  const navTo = useNavigate();
  const [state, setState] = useState("");
  const [buttonState, setButtonState] = useState("");
  const fieldValidationSchema = yup.object({
    markdownName: yup.string().required("Please provide name for markdown"),
    markdown: yup.string().required("Please enter markdown"),
  });

  const { handleBlur, handleChange, handleSubmit, values, errors, touched } =
    useFormik({
      initialValues: {
        markdown: "",
        markdownName: "",
      },
      validationSchema: fieldValidationSchema,
      onSubmit: async (markdownInfo) => {
        setState("Please wait...");
        setButtonState("disabled")
        try {
          const response = await fetch(
            "https://capstone-backend-abdulwasim-s.vercel.app/newmarkdown",
            {
              method: "POST",
              body: JSON.stringify(markdownInfo),
              headers: {
                "Content-Type": "application/json",
                email: localStorage["markdown-email"],
                "x-auth-token": localStorage["markdown-token"],
              },
            }
          );

          const data = await response.json();
          if (data.message === "success") {
            values.markdown="";
            values.markdownName="";
            setState("success");
            setButtonState("");
            setTimeout(()=>setState(""),2000)
          } 
          else {
            setState(data.message);
          }
        } catch (error) {
          console.log("Error....", error);
        }
      },
    });
  function handleroute() {
    navTo("/markdownpage");
  }
  return (
    <div className="">
      <HeadPage />
      <h1>Markdown Viewer</h1>
      <button className="mb-3 btn btn-warning" onClick={() => handleroute()}>
        Click to markdown list page
      </button>
      <form className="text-start p-5" onSubmit={handleSubmit}>
        <div className="form-group text-center">
          <label for="markdownName">Markdown name</label>
          <input
            type="markdownName"
            className={`form-control my-2 ${
              touched.markdownName && errors.markdownName
                ? "border-danger border-2"
                : ""
            }`}
            id="markdownName"
            placeholder={`${
              touched.markdownName && errors.markdownName
                ? errors.markdownName
                : "Enter Markdown name"
            }`}
            value={values.markdownName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <br/>
          {state}
          <br/>
            <button type="submit" className={`btn btn-success px-5 ${buttonState}`}>
              save
            </button>
        </div>
        <div className="row mt-3">
          <div className="form-group col-md-6 mb-5 mt-1">
            <label for="exampleInputPassword1">Markdown</label>
            <textarea
              type="markdown"
              style={{ height: "80vh" }}
              className={`form-control my-2 ${
                touched.markdown && errors.markdown
                  ? "border-danger border-2"
                  : ""
              }`}
              id="markdown"
              placeholder={` ${
                touched.markdown && errors.markdown
                  ? errors.markdown
                  : "Enter markdown"
              }`}
              value={values.markdown}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className="col-md-6 mt-1">
            <label className="mb-2">Output</label>
            <div className="border rounded" style={{ height: "80vh", overflowY: "auto" }}>
              <ReactMarkdown className="markdown p-3">
                {values.markdown}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MarkdownCreatePage;
