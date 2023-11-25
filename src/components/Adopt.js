import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AdoptionForm from "./AdoptionForm";
import "../styles/Adopt.css";

const CollapsibleItem = ({ title, content, defaultOpen }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(defaultOpen);
  }, [defaultOpen]);

  const toggleCollapse = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`collapsible-item ${isActive ? "active" : ""}`}>
      <h3 onClick={toggleCollapse}>{title}</h3>
      {isActive && <p>{content}</p>}
    </div>
  );
};

const Adopt = () => {
  const linkStyle = {
    color: "blue", // Change the color to your desired color
    textDecoration: "underline", // Add underline for better visual indication
  };
  // State for search and filter criteria
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedAge, setSelectedAge] = useState("All");
  const [selectedGender, setSelectedGender] = useState("All");
  const [hoveredImages, setHoveredImages] = useState({});
  const handleImageHover = (id, backImage) => {
    setHoveredImages((prevHoveredImages) => ({
      ...prevHoveredImages,
      [id]: backImage,
    }));
  };

  // Sample data for the gallery (replace with your actual data)
  const galleryData = [
    {
      id: 1,
      name: "Hisoka",
      category: "Cat",
      age: "Adult",
      gender: "Female",
      image: "/Hisoka_1.jpg",
      backImage: "/Hisoka_2.jpg",
    },
    {
      id: 2,
      name: "Bond",
      category: "Dog",
      age: "Puppy",
      gender: "Male",
      image: "/Dog_3_Bond.jpg",
      backImage: "/Bond_2.jpg",
    },
    {
      id: 3,
      name: "Milo",
      category: "Dog",
      age: "Puppy",
      gender: "Male",
      image: "/milo_1.jpg",
      backImage: "/milo_2.jpg",
    },
    {
      id: 4,
      name: "Lucky",
      category: "Dog",
      age: "Puppy",
      gender: "Male",
      image: "/Dog4_Shiba_inu.jpg",
      backImage: "/shiba_inu_2.jpg",
    },
  ];
  // Filter gallery items based on search and filter criteria
  const filteredGalleryData = galleryData.filter((item) => {
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

  // Render the gallery items
  const renderGalleryItems = () => {
    return filteredGalleryData.map((item) => (
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
      <div className="imageContainer">
        <div className="image">
          <img src="/Adopt_Dog_image.jpg" alt="Description of the image" />
        </div>
        <div className="description">
          <h2 id="header2">Adoption</h2>
          <p id="paragraph">
            Thank you for your desire to adopt a pet! Kindly note that all
            visits are currently scheduled by appointment, with slots available
            only seven days in advance. You can schedule an appointment by
            clicking{" "}
            <Link to="/AdoptionForm" style={linkStyle}>
              here
            </Link>
            .
          </p>
        </div>
      </div>
      <div className="section" style={{ textAlign: "left" }}>
        <h2 id="header2">
          Steps to adopt
          <img id="paws_image" src="./Paws.jpg" alt="Paws" />
        </h2>
        <div className="collapsible-list">
          <CollapsibleItem
            title="How to adopt"
            content={
              <>
                <h4 id="paragraphid" style={{ textAlign: "left" }}>
                  Step 1: Look through the list of pets below
                </h4>
                <h4 id="paragraphid" style={{ textAlign: "left" }}>Step 2: Make an appointment.</h4>
                <p id="paragraphid" style={{ textAlign: "left" }}>
                  Appointments are available exclusively through advance
                  scheduling, with slots becoming accessible just seven days in
                  advance. To schedule an appointment and obtain further
                  information, please click{" "}
                  <Link to="/AdoptionForm" style={linkStyle}>
                    here
                  </Link>
                  .
                </p>
                <h4 id="paragraphid" style={{ textAlign: "left" }}>
                  Step 3: Be on time for your appointment
                </h4>
                <ul id="paragraphid" style={{ textAlign: "left" }}>
                  <li>
                    Please bring your ID and confirmation email to Pet Heaven
                    staff for verification purposes
                  </li>
                  <li>
                    If the adoption counseling and interactions with the animal
                    proceed positively (confirming that the animal is a suitable
                    match for your family), you have the option to adopt the
                    animal immediately during your visit to SPCA. Please ensure
                    you bring documents verifying your address, along with your
                    passport/FIN. It's important to be aware that we don't have
                    a reservation policy, and the animal can only be held for a
                    maximum of 3 days after your initial adoption counseling,
                    subject to approval from our adoption counselors
                  </li>
                  <li>
                    It is a must to mesh windows and doors at home if you're
                    adpoting a cat and staying on the second floor and above
                  </li>
                  <li>The entire process should not take more than an hour</li>
                </ul>
                <p id="paragraphid">
                  For further clarification, please{" "}
                  <a
                    href="mailto:enquiries@PetHeaven.com"
                    style={{ color: "blue" }}
                  >
                    email us
                  </a>
                </p>
              </>
            }
            defaultOpen={true}
          />
          <CollapsibleItem
            title="Things to note"
            content={
              <>
                <ul id="paragraphid" style={{ textAlign: "left" }}>
                  <li>
                    Given the high nuber of adoption requests and our limited
                    staff and resources, we appreciate your understaning in case
                    the animal you've selected is adopted before your scheduled
                    appointment. Adopted animaled will be taken down from the
                    list.
                  </li>
                  <li>
                    We do not have a policy reservations or a specific service
                    to notify individuals about the availability of a particular
                    animal
                  </li>
                  <li>
                    Comprehensive interviews with potential owners will be
                    conducted by us to ensure that we find the suitable match
                    for our animals
                  </li>
                  <li>
                    In certain situations, a counselor may request additional
                    family members to attend or conduct a premises check, and in
                    such cases, certain conditions must be met before the
                    adoption can proceed
                  </li>
                  <li>Priority will be given to those who submit first</li>
                  <li>
                    If you are unable to find a fitting companion during your
                    visit, we encourage you to check the website regularly, as
                    we update it frequently. Alternatively, you can follow us on
                    Instagram and Facebook for highlights on available
                    adoptions.
                  </li>
                </ul>
              </>
            }
          />
          <CollapsibleItem
            title="Adoption Fees"
            content={
              <>
                <h4 id="paragraphid">Dogs</h4>
                <p id="paragraphid" style={{ textAlign: "left" }}>
                  Singapore Specials – Local Mixed Breed Puppies (Under 6
                  months) <span style={{ float: "right" }}>$250</span>
                </p>
                <p id="paragraphid" style={{ textAlign: "left" }}>
                  Singapore Specials – Local Cross Breed Adults (6 months to
                  under 7 years) <span style={{ float: "right" }}>$150</span>
                </p>
                <p id="paragraphid" style={{ textAlign: "left" }}>
                  ***Fees cover vaccination, sterilisation, deworming and
                  microchipping with registration. Price excludes AVS dog
                  licensing fee.***
                </p>
                <br></br>
                <h4 id="paragraphid">Cats</h4>
                <p id="paragraphid" style={{ textAlign: "left" }}>
                  Local Kittens (Under 6 months){" "}
                  <span style={{ float: "right" }}>$100</span>
                </p>
                <p id="paragraphid" style={{ textAlign: "left" }}>
                  Local Cats (6 months to under 7 years){" "}
                  <span style={{ float: "right" }}>$80</span>
                </p>
                <p id="paragraphid" style={{ textAlign: "left" }}>
                  ***Fees cover vaccination, sterilisation, deworming and
                  microchipping with registration.***
                </p>
              </>
            }
          />

          <CollapsibleItem
            title="FAQ"
            content={
              <>
                <ol id="paragraphid" style={{ textAlign: "left" }}>
                  <li>
                    Will PetHeaven staff contact me if a particular breed I like
                    becomes available?
                  </li>
                  <p>
                    We don't offer a specialized service to notify individuals
                    when a particular breed is accessible. Kindly monitor our
                    adoption gallery(list) for updates.
                  </p>
                  <li>What types of animals are up for adoption?</li>
                  <p>
                    We are a new organisation and currently only have dogs and
                    cats for adoption.
                  </p>
                </ol>
              </>
            }
          />
        </div>
      </div>
      {/* Search Bar */}
      <div className="search-container">
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
          <option value="All">All Ages</option>
          <option value="Puppy/Kitten">Puppies/Kittens</option>
          <option value="Adult">Adults</option>
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
    </>
  );
};

export default Adopt;
