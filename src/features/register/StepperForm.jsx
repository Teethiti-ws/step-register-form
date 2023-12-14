import { useState } from "react";
import AccountForm from "./AccountForm";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import InfomationForm from "./InfomationForm";
import Button from "../../ui/Button";

const accountSchema = yup.object().shape({
  username: yup.string().required("This field is required."),
  email: yup
    .string()
    .required("This field is required.")
    .email("Invalid email.")
    .min(3, "Please Enter less then 3 letters"),
  password: yup
    .string()
    .required("This field is required.")
    .min(3, "This field at least 3 characters.")
    .oneOf([yup.ref("password"), null], "Password not match."),
});

const informationSchema = yup.object().shape({
  firstname: yup.string().required("This field is required."),
  lastname: yup.string().required("This field is required."),
  nickname: yup.string().required("This field is required."),
});

function StepperForm() {
  const [activeStep, setActiveStep] = useState(0);

  const accountForm = useForm({
    resolver: yupResolver(accountSchema),
  });

  const infoForm = useForm({
    resolver: yupResolver(informationSchema),
  });

  const nextSubmit = (data) => {
    console.log("data", data);
    handleNext();
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <AccountForm formProps={accountForm} />;
      case 1:
        return <InfomationForm formProps={infoForm} />;
      case 2:
        return <p className="flex place-content-center">Finished</p>;
      default:
        return "Unknown stepIndex";
    }
  }

  return (
    <>
      <div className="flex justify-center">
        <ol className="flex  w-11/12  mb-4 sm:mb-5">
          <li
            className={`flex w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block
            
            ${
              activeStep === 0
                ? "dark:after:border-gray-700"
                : "dark:after:border-blue-800"
            }
            
            `}
          >
            <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0 ">
              <svg
                className="w-4 h-4 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 16"
              >
                <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z" />
              </svg>
            </div>
          </li>
          {/* <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700">
            <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
              <svg
                className="w-4 h-4 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 14"
              >
                <path d="M18 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM2 12V6h16v6H2Z" />
                <path d="M6 8H4a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2Zm8 0H9a1 1 0 0 0 0 2h5a1 1 0 1 0 0-2Z" />
              </svg>
            </div>
          </li> */}
          <li className="flex items-center //w-full">
            <div
              className={`flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 shrink-0 ${
                activeStep === 1 ? "dark:bg-blue-800" : "dark:bg-gray-700"
              }`}
            >
              <svg
                className="w-4 h-4 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 20"
              >
                <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z" />
              </svg>
            </div>
          </li>
        </ol>
      </div>

      <form
        onSubmit={
          activeStep === 0
            ? accountForm.handleSubmit(nextSubmit)
            : infoForm.handleSubmit(nextSubmit)
        }
      >
        {getStepContent(activeStep)}

        <div className="flex gap-4 justify-center">
          {activeStep === 1 ? (
            <Button onClick={handleBack} styleType="backBtn">
              Back
            </Button>
          ) : (
            ""
          )}

          {activeStep >= 2 ? (
            <Button disabled styleType="finished">
              Finshed
            </Button>
          ) : (
            <Button type="submit" styleType="nextBtn">
              Next
            </Button>
          )}
        </div>
      </form>
    </>
  );
}

export default StepperForm;
