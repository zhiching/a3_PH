import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Release.css";
//import axios from "axios";

const ReleasingForm = () => {
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedAge, setSelectedAge] = useState("All");
  const [selectedGender, setSelectedGender] = useState("All");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [animalType, setAnimalType] = useState("");
  const [animalBreed, setAnimalBreed] = useState("");
  const [animalName, setAnimalName] = useState("");
  const [animalAge, setAnimalAge] = useState("");
  const [animalColour, setAnimalColour] = useState("");
  const [animalGender, setAnimalGender] = useState("");

  const [sterilised, setSterilised] = useState("no");
  const [microchipped, setMicrochipped] = useState("no");
  const [files, setFiles] = useState([]);

  const [medicalHistory, setMedicalHistory] = useState("");
  const [animalPersonality, setAnimalPersonality] = useState("");
  const [reasonsForRehoming, setReasonsForRehoming] = useState("");

  const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);
  const [successModalOpen, setSuccessModalOpen] = useState(false);

  const [hoveredImages, setHoveredImages] = useState({});
  const handleImageHover = (id, backImage) => {
    setHoveredImages((prevHoveredImages) => ({
      ...prevHoveredImages,
      [id]: backImage,
    }));
  };

  // Sample data for the gallery (replace with your actual data)
  const galleryData2 = [
    {
      id: 1,
      name: "Bless",
      category: "Cat",
      age: "Adult",
      gender: "Female",
      image: "/CatBless.png",
      backImage: "/CatBless2.jpg",
    },
    {
      id: 2,
      name: "Dudu",
      category: "Dog",
      age: "Adult",
      gender: "Male",
      image: "/rehome-dudu-1.jpeg",
      backImage: "/rehome-dudu-2.jpeg",
    },
    {
      id: 3,
      name: "Ami",
      category: "Cat",
      age: "Adult",
      gender: "Female",
      image: "/Ami_cat1.jpeg",
      backImage: "/Ami_cat2.jpeg",
    },
  ];
  // Filter gallery items based on search and filter criteria
  const filteredGalleryData2 = galleryData2.filter((item) => {
    const nameMatches = item.name
      .toLowerCase()
      .includes(searchText.toLowerCase());
    const categoryMatches =
      selectedCategory === "All" || item.category === selectedCategory;
    const ageMatches = selectedAge === "All" || item.age === selectedAge;
    const genderMatches =
      selectedGender === "All" || item.gender === selectedGender;

    return nameMatches && categoryMatches && ageMatches && genderMatches;
  });

  /*const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    console.log(selectedFiles); // Check if files are captured correctly
    setFiles(selectedFiles);
  };*/

  // Define styles for the modal
  const modalDimensions = {
    height: "130px", // Adjust the height as needed
    width: "300px", // Adjust the width as needed
  };
  const confirmationModalStyle = {
    ...modalDimensions,
    display: confirmationModalOpen || successModalOpen ? "block" : "none",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    border: "2px solid #ccc",
    padding: "20px",
    backgroundColor: "#fff",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    zIndex: successModalOpen ? "999" : "1000",
  };

  const successModalStyle = {
    ...modalDimensions,
    display: successModalOpen ? "block" : "none",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    border: "2px solid #ccc",
    padding: "20px",
    backgroundColor: "#fff",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    zIndex: "1001",
  };

  const handleCompleteRelease = async (e) => {
    e.preventDefault();

    /*if (!files) {
    console.error("No files selected");
    return;
  }*/

    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("animalType", animalType);
    formData.append("animalBreed", animalBreed);
    formData.append("animalName", animalName);
    formData.append("animalAge", animalAge);
    formData.append("animalColour", animalColour);
    formData.append("animalGender", animalGender);
    formData.append("sterilised", sterilised);
    formData.append("microchipped", microchipped);
    formData.append("medicalHistory", medicalHistory);
    formData.append("animalPersonality", animalPersonality);
    formData.append("reasonsForRehoming", reasonsForRehoming);

    // Append files to FormData
    /*Array.from(files).forEach((file, index) => {
      formData.append(`attachment[${index}]`, file);
    });*/

    console.log(formData); // Check if files are appended correctly
    try {
      // Send form data to Formspree
      const response = await fetch("https://formspree.io/f/mpzggade", {
        method: "POST",
        body: formData,
        enctype: "multipart/form-data",
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setConfirmationModalOpen(true);
      } else {
        console.error("Failed to submit the form.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };

  const handleConfirm = () => {
    setConfirmationModalOpen(false);
    // Perform actions to submit the form or make an API call
    // For now, let's just simulate a successful submission
    setSuccessModalOpen(true);
  };

  const handleCancel = () => {
    setConfirmationModalOpen(false);
  };

  const handleOk = () => {
    setSuccessModalOpen(false);
    // Redirect to the home page or perform any other action
    // For now, let's simulate a redirect to the home page
    window.location.href = "/";
  };

  const inputStyle = {
    fontSize: "16px",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    width: "100%",
  };

  const submitButtonStyle = {
    backgroundColor: "#3498db",
    color: "#fff",
    border: "none",
    padding: "10px",
    margin: "0 auto",
    cursor: "pointer",
    fontSize: "16px",
  };

  // Render the gallery items
  const renderGalleryItems = () => {
    return filteredGalleryData2.map((item) => (
      <Link
        to={`/${item.name}`}
        key={item.id}
        className="gallery-item"
        onMouseEnter={() => handleImageHover(item.id, item.backImage)}
        onMouseLeave={() => handleImageHover(item.id, null)}
      >
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={item.image} alt={item.name} />
              <p style={{ color: "black" }}>{item.name}</p>
            </div>
            <div className="flip-card-back">
              <img
                src={hoveredImages[item.id] || item.backImage}
                alt={item.name}
              />
            </div>
          </div>
        </div>
      </Link>
    ));
  };

  return (
    <>
      <div className="two_columns">
        <div className="column">
          <h2 id="header2">Releasing my pet</h2>
          <p id="paragraph">
            We acknowledge that difficult situations may compel pet owners to
            find new homes for their animals, and we understand that this can be
            a challenging endeavor.
          </p>
          <br></br>
          <p id="paragraph">
            Considering the constraints of SPCA's limited space and resources as
            a non-governmental charity, we encourage individuals to initially
            seek assistance from family and friends. Posting an adoption notice
            on social media, forums, or reaching out to other welfare groups can
            also be helpful.
          </p>
          <br></br>
          <p id="paragraph">
            If those are not successful, you may fill out the online form
            provided under "Forms". We advise against giving up on the rehoming
            process, as it may require some time. Wishing you the best of luck
            in finding a suitable home for the animal.
          </p>
          <br></br>
          <p id="paragraph">
            Successful listed animals will be shown in the gallery below.
          </p>
          <br></br>
          <h2 id="header2">
            Some questions for pet guardians to ask potential adopters
          </h2>
          <p id="paragraph">
            <ul>
              <li>
                Do you have any pets before? If yes, what happened to your
                previous pet(S)?{" "}
              </li>
              <li>Do you currently have any pets? What are they?</li>
              <li>
                Do you acknowledge and are you ready to take on the financial
                and physical duties associated with looking after this animal?
                This encompasses, among other things, vaccinations, routine
                veterinary care, providing suitable high-quality food, and
                dedicating time and attention to their needs.
              </li>
              <li>
                Does everyone in the household agree to the adoption of this
                animal?
              </li>
              <li>
                Do you presently own any pets? If so, what species are they?
              </li>
              <li>
                How do you intend to handle any conflicts between the new animal
                and your existing pets?
              </li>
              <li>
                What arrangements have you put in place for the new animal, such
                as its sleeping arrangements and the type of food you have
                purchased?
              </li>
              <li>What kind of residence do you inhabit?</li>
              <li>Are there children in your household?</li>
              <li>
                Who will assume the primary caregiving responsibilities for the
                animal?
              </li>
              <li>
                Will someone be present at home throughout the day? If not, how
                many hours will the animal be left alone?
              </li>
              <li>
                Do you have plans to relocate in the near future? If so, are you
                willing to bring the animal with you?
              </li>
              <li>
                How will you address any allergies that may arise within the
                family?
              </li>
            </ul>
          </p>
          <br></br>
          <h2 id="header2">For cats</h2>
          <ul>
            <li>Will you be the cat indoors?</li>
            <li>How are you intending to keep the cat?</li>
            <li>How do you plan to prevent the cat from wandering?</li>
            <li>
              Has your home been adequately arranged for the cat, including
              appropriate meshing of the windows and doors?
            </li>
            <li>
              Are you cognizant of the typical lifespan of a cat, which can
              extend up to 20 years, and are you willing to provide a lifelong
              home for it?
            </li>
          </ul>
          <br></br>
          <h2 id="header2">For dogs</h2>
          <ul>
            <li>Why are you adopting a dog?</li>
            <li>Are you ready to undertake the training of the dog?</li>
            <li>
              Has your home been adequately arranged for the dog, including
              appropriate fencing?
            </li>
            <li>
              Are you mindful of the typical lifespan of a dog, ranging from 10
              to 15 years, and are you committed to offering a permanent home
              throughout its life?
            </li>
          </ul>
          <br></br>
          <h2 id="header2">To remove listing</h2>
          <ul>
            <li>
              If your pet has already found a good home, please email us at{" "}
              <a
                href="mailto:enquiries@PetHeaven.com"
                style={{ color: "blue" }}
              >
                enquiries@PetHeaven.com
              </a>{" "}
              to remove the listing.
            </li>
          </ul>
        </div>
        <div className="column">
          <h2 id="header2">
            Your Information
            <br></br>
          </h2>
          {/* Your Information Form */}
          <form
            className="release-form"
            action="https://formspree.io/f/mpzggade"
            method="POST"
            enctype="multipart/form-data"
            onSubmit={handleCompleteRelease}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <label id="labels">
              First Name <span style={{ color: "red" }}>*</span>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                style={inputStyle}
              />
            </label>
            <label id="labels">
              Last Name <span style={{ color: "red" }}>*</span>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                style={inputStyle}
              />
            </label>
            <label id="labels">
              Phone <span style={{ color: "red" }}>*</span>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                style={inputStyle}
              />
            </label>
            <label id="labels">
              Email <span style={{ color: "red" }}>*</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={inputStyle}
              />
            </label>
            <br></br>
            <h2 id="header2">
              Animal's Information
              <br></br>
            </h2>
            <label id="labels">
              Type <span style={{ color: "red" }}>*</span>
              <input
                type="text"
                value={animalType}
                onChange={(e) => setAnimalType(e.target.value)}
                required
                style={inputStyle}
              />
            </label>
            <label id="labels">
              Breed <span style={{ color: "red" }}>*</span>
              <input
                type="text"
                value={animalBreed}
                onChange={(e) => setAnimalBreed(e.target.value)}
                required
                style={inputStyle}
              />
            </label>
            <label id="labels">
              Name <span style={{ color: "red" }}>*</span>
              <input
                type="text"
                value={animalName}
                onChange={(e) => setAnimalName(e.target.value)}
                required
                style={inputStyle}
              />
            </label>
            <label id="labels">
              Age <span style={{ color: "red" }}>*</span>
              <input
                type="number"
                value={animalAge}
                onChange={(e) => setAnimalAge(e.target.value)}
                required
                style={inputStyle}
              />
            </label>
            <label id="labels">
              Colour <span style={{ color: "red" }}>*</span>
              <input
                type="text"
                value={animalColour}
                onChange={(e) => setAnimalColour(e.target.value)}
                required
                style={inputStyle}
              />
            </label>
            <label id="labels">
              Gender <span style={{ color: "red" }}>*</span>
              <input
                type="text"
                value={animalGender}
                onChange={(e) => setAnimalGender(e.target.value)}
                required
                style={inputStyle}
              />
            </label>
            {/* Sterilised radio buttons */}
            <label id="labels">
              Has your pet been sterilised?{" "}
              <span style={{ color: "red" }}>*</span>
              <div>
                <label>
                  <input
                    type="radio"
                    value="yes"
                    checked={sterilised === "yes"}
                    onChange={() => setSterilised("yes")}
                    required
                  />{" "}
                  Yes
                </label>
                <br></br>
                <label>
                  <input
                    type="radio"
                    value="no"
                    checked={sterilised === "no"}
                    onChange={() => setSterilised("no")}
                  />{" "}
                  No
                </label>
              </div>
              <br></br>
            </label>

            {/* Microchipped radio buttons */}
            <label id="labels">
              Has the animal been microchipped?{" "}
              <span style={{ color: "red" }}>*</span>
              <div>
                <label>
                  <input
                    type="radio"
                    value="yes"
                    checked={microchipped === "yes"}
                    onChange={() => setMicrochipped("yes")}
                    required
                  />{" "}
                  Yes
                </label>
                <br></br>
                <label>
                  <input
                    type="radio"
                    value="no"
                    checked={microchipped === "no"}
                    onChange={() => setMicrochipped("no")}
                  />{" "}
                  No
                </label>
              </div>
              <br></br>
            </label>
            {/* File upload */}
            <label id="labels">
              Please attach clear photos/videos of the animal(s):{" "}
              <span style={{ color: "red" }}>*</span>
              <input
                type="file"
                name="attachment"
                accept="image/jpeg"
                //onChange={(e) => setFiles(e.target.files)}
                multiple
                required
              />
              <p>Maximum of 6 files can be uploaded.</p>
              <br></br>
            </label>

            {/* Medical history */}
            <label id="labels">
              Medical history <span style={{ color: "red" }}>*</span>
              <br></br>
              <textarea
                rows="4"
                cols="50"
                placeholder="Please type your message here"
                value={medicalHistory}
                required
                onChange={(e) => setMedicalHistory(e.target.value)}
              ></textarea>
            </label>

            {/* Animal's personality */}
            <label id="labels">
              Animal's personality <span style={{ color: "red" }}>*</span>
              <br></br>
              <textarea
                rows="4"
                cols="50"
                placeholder="Please type your message here"
                value={animalPersonality}
                required
                onChange={(e) => setAnimalPersonality(e.target.value)}
              ></textarea>
            </label>

            {/* Reasons for rehoming */}
            <label id="labels">
              Your reasons for rehoming your pet{" "}
              <span style={{ color: "red" }}>*</span>
              <br></br>
              <textarea
                rows="4"
                cols="50"
                placeholder="Please type your message here"
                value={reasonsForRehoming}
                onChange={(e) => setReasonsForRehoming(e.target.value)}
              ></textarea>
            </label>

            {/* Consent checkboxes */}
            <label>
              <input type="checkbox" required /> I agree that my data is stored
              and collected. <span style={{ color: "red" }}>*</span>
            </label>
            <label>
              <input type="checkbox" required /> By submitting this form, I
              agree to Pet Heaven publishing my personal data on Pet Heaven's
              Releasing Notice Board webpage to facilitate the search of a
              potential adopter for your pet.{" "}
              <span style={{ color: "red" }}>*</span>
            </label>

            <button
              className="button-back"
              type="submit"
              style={submitButtonStyle}
            >
              Submit
            </button>
          </form>

          {/* Confirmation Modal */}
          <div style={confirmationModalStyle}>
            <p>
              Confirm all details are correct and proceed with the submission?
            </p>
            <button onClick={handleConfirm}>Confirm</button>
            <button onClick={handleCancel}>Cancel</button>
          </div>

          {/* Success Modal */}
          <div style={successModalStyle}>
            <p>Appointment has been successfully made.</p>
            <button onClick={handleOk}>Ok</button>
          </div>
        </div>
      </div>
      <div className="search-container">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        {/* Categories Dropdown */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Dog">Dogs</option>
          <option value="Cat">Cats</option>
        </select>

        {/* Ages Dropdown */}
        <select
          value={selectedAge}
          onChange={(e) => setSelectedAge(e.target.value)}
        >
          <option value="All">All Pet Food</option>
          <option value="Dog">Dog Pet Food</option>
          {/*might ned to change the value*/}
          <option value="Cat">Cat Pet Food</option>
        </select>

        {/* Gender Dropdown */}
        <select
          value={selectedGender}
          onChange={(e) => setSelectedGender(e.target.value)}
        >
          <option value="All">All Genders</option>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
        </select>
      </div>

      {/* Gallery Display */}
      <div className="gallery">{renderGalleryItems()}</div>
      <div className="spacing"></div>
    </>
  );
};

export default ReleasingForm;
