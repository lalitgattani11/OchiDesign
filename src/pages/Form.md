const [formData, setFormData] = useState({
    name: "",
    company: "",
    goal: "",
    date: "",
    budget: "",
    email: "",
    details: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle your submit logic here
  };



  <form
        onSubmit={handleSubmit}
        className="max-w-5xl mx-auto px-4 py-10 font-sans text-xl md:text-2xl leading-relaxed"
      >
        <p>
          Hi! My name is{" "}
          <input
            type="text"
            name="name"
            placeholder="Enter your name*"
            value={formData.name}
            onChange={handleChange}
            className="border-b border-black outline-none w-48 mx-1 bg-transparent"
            required
          />{" "}
          and I work with{" "}
          <input
            type="text"
            name="company"
            placeholder="Company name*"
            value={formData.company}
            onChange={handleChange}
            className="border-b border-black outline-none w-48 mx-1 bg-transparent"
            required
          />
          .
        </p>

        <p>
          I'm looking for a partner to help me with{" "}
          <input
            type="text"
            name="goal"
            placeholder="Your goal*"
            value={formData.goal}
            onChange={handleChange}
            className="border-b border-black outline-none w-60 mx-1 bg-transparent"
            required
          />
          .
        </p>

        <p>
          With an idea of having that completed by{" "}
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="border-b border-black outline-none w-40 mx-1 bg-transparent"
            required
          />
          .
        </p>

        <p>
          I am hoping to stay around a budget range of{" "}
          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="border-b border-black outline-none w-40 mx-1 bg-transparent"
            required
          >
            <option value="">Select*</option>
            <option value="$1,000 - $5,000">$1,000 - $5,000</option>
            <option value="$5,000 - $10,000">$5,000 - $10,000</option>
            <option value="$10,000 - $20,000">$10,000 - $20,000</option>
            <option value="More than $20,000">More than $20,000</option>
          </select>
          .
        </p>

        <p>
          You can reach me at{" "}
          <input
            type="email"
            name="email"
            placeholder="name@example.com"
            value={formData.email}
            onChange={handleChange}
            className="border-b border-black outline-none w-60 mx-1 bg-transparent"
            required
          />{" "}
          to start the conversation.
        </p>

        <p>
          Optionally, I'm sharing more:{" "}
          <input
            type="text"
            name="details"
            placeholder="Product details type here..."
            value={formData.details}
            onChange={handleChange}
            className="border-b border-black outline-none w-80 mx-1 bg-transparent"
          />
        </p>

        <div className="flex items-center gap-2 mt-4">
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            className="w-4 h-4"
            required
          />
          <label className="text-base md:text-lg">
            I agree with the{" "}
            <a href="#" className="underline">
              Privacy Policy
            </a>
          </label>
        </div>

        <button
          type="submit"
          className="mt-6 px-6 py-3 rounded-full bg-gray-700 text-white text-base md:text-lg font-semibold hover:bg-gray-800 transition"
        >
          SEND INQUIRY
        </button>
      </form>