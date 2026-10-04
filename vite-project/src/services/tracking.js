const API_URL = "http://localhost:5000/api";

export const trackActivity = async (
  page,
  action,
  value = ""
) => {
  try {
    const response = await fetch(`${API_URL}/activity`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name: "Pallavi",
        page,
        action,
        value,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message || "Activity tracking failed"
      );
    }

    console.log("Activity saved ✅", data);

    return data;
  } catch (error) {
    // Tracking fail hone par website ko stop nahi karna
    console.error(
      "Activity tracking error ❌",
      error
    );
  }
};