const API_URL = "http://localhost:5000/api";

// Save friendship approval
export const approveFriendship = async (friendshipData) => {
  try {
    const response = await fetch(`${API_URL}/friendship/approve`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(friendshipData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Something went wrong");
    }

    return data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

// Get all friendship records
export const getFriendships = async () => {
  try {
    const response = await fetch(`${API_URL}/friendship`);

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to fetch data");
    }

    return data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};